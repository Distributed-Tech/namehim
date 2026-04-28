#!/usr/bin/env node
// local-server.js — local dev server for NameHim
// Requires Node >= 22.5 (uses built-in node:sqlite — no npm install needed)
//
// Usage:  node local-server.js
// Then open: http://localhost:3000
//
// What this does:
//   • Serves all static files (index.html, about.html, *.js, etc.)
//   • Patches HTML on-the-fly: rewrites Supabase URL → localhost, Worker URL → /filtered-reports
//   • Mocks Cloudflare Turnstile so forms work without a valid CAPTCHA token
//   • Implements the Supabase PostgREST endpoints used by the app (/rest/v1/*)
//   • Implements the Cloudflare Worker endpoint (/filtered-reports)
//   • Persists data in local.db (SQLite, auto-created, seeded with sample rows)

'use strict';

const { DatabaseSync } = require('node:sqlite');
const http  = require('node:http');
const https = require('node:https');
const fs    = require('node:fs');
const path  = require('node:path');

const PORT    = 3000;
const DB_FILE = path.join(__dirname, 'local.db');

// ── Database ─────────────────────────────────────────────────────────────────

const db = new DatabaseSync(DB_FILE);

db.exec(`
  CREATE TABLE IF NOT EXISTS reports (
    id             INTEGER PRIMARY KEY AUTOINCREMENT,
    name           TEXT    NOT NULL,
    city           TEXT    NOT NULL,
    state          TEXT,
    country        TEXT    NOT NULL,
    categories     TEXT    NOT NULL DEFAULT '[]',
    created_at     TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now')),
    submitter_uuid TEXT    NOT NULL DEFAULT ''
  );

  CREATE TABLE IF NOT EXISTS stories (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    title             TEXT,
    content           TEXT    NOT NULL,
    submitter_uuid    TEXT,
    is_approved       INTEGER NOT NULL DEFAULT 0,
    room              TEXT    NOT NULL DEFAULT 'stories',
    tags              TEXT    NOT NULL DEFAULT '[]',
    content_warning   TEXT    NOT NULL DEFAULT 'none',
    lang              TEXT    NOT NULL DEFAULT 'en',
    reply_count       INTEGER NOT NULL DEFAULT 0,
    react_hear_you    INTEGER NOT NULL DEFAULT 0,
    react_gave_hope   INTEGER NOT NULL DEFAULT 0,
    react_solidarity  INTEGER NOT NULL DEFAULT 0,
    react_me_too      INTEGER NOT NULL DEFAULT 0,
    created_at        TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now'))
  );

  CREATE TABLE IF NOT EXISTS story_replies (
    id                 INTEGER PRIMARY KEY AUTOINCREMENT,
    story_id           INTEGER NOT NULL,
    content            TEXT    NOT NULL,
    reply_author_token TEXT    NOT NULL DEFAULT '',
    is_approved        INTEGER NOT NULL DEFAULT 0,
    created_at         TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now'))
  );

  CREATE TABLE IF NOT EXISTS story_flags (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    story_id   INTEGER NOT NULL,
    reason     TEXT,
    flagged_by TEXT,
    created_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now'))
  );

  CREATE TABLE IF NOT EXISTS report_flags (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    report_id  INTEGER NOT NULL,
    reason     TEXT,
    flagged_by TEXT,
    created_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%SZ','now'))
  );
`);

// Seed sample rows the first time the DB is created
const { n: reportCount } = db.prepare('SELECT COUNT(*) AS n FROM reports').get();
if (reportCount === 0) {
  db.exec(`
    INSERT INTO reports (name, city, state, country, categories, submitter_uuid) VALUES
      ('John Smith',  'Austin',  'Texas',    'United States', '["emotional abuse","stalking"]',   'seed-1'),
      ('James Doe',   'Chicago', 'Illinois', 'United States', '["physical abuse"]',               'seed-2'),
      ('Alex Brown',  'Toronto', NULL,       'Canada',        '["sexual harassment"]',             'seed-3');

    INSERT INTO stories (title, content, room, tags, content_warning, is_approved, react_hear_you, react_gave_hope) VALUES
      ('Finding my voice again', 'It has been three years since I left. Some days I still feel his shadow but most days now I feel like myself again. You will get through this.', 'hope', '["healing","years-later"]', 'none', 1, 4, 7),
      ('First week out — terrified and free', 'I left on a Tuesday. I had nothing but a bag and my kids. The shelter people were so kind. If you are in your first week, you are not alone.', 'stories', '["leaving","first-week","children"]', 'none', 1, 8, 3),
      ('Question about protective order', 'Has anyone navigated getting a restraining order without a lawyer? Any advice appreciated.', 'ask', '["court","legal"]', 'none', 1, 0, 1),
      ('As a trans survivor', 'Finding resources that actually understand my experience was hard. I want to share what helped me.', 'trans', '["lgbtq","healing"]', 'none', 1, 5, 2),
      ('For the allies reading this', 'Please believe us. That is the most important thing. Believe us.', 'allies', '[]', 'none', 1, 3, 6),
      ('Pending review', 'This story has not been approved yet.', 'stories', '[]', 'none', 0, 0, 0);
  `);
  console.log('Seeded sample data into', DB_FILE);
}

// ── Helpers ──────────────────────────────────────────────────────────────────

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.svg':  'image/svg+xml',
  '.json': 'application/json',
  '.sql':  'text/plain',
  '.md':   'text/plain',
};

function setCORSHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, apikey, Authorization, Prefer, Range');
  res.setHeader('Access-Control-Expose-Headers', 'Content-Range');
}

function sendJSON(res, status, data) {
  setCORSHeaders(res);
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => { body += chunk; });
    req.on('end', () => {
      try { resolve(JSON.parse(body || 'null')); }
      catch { resolve(null); }
    });
    req.on('error', reject);
  });
}

function mapReport(row) {
  let categories;
  try { categories = JSON.parse(row.categories); } catch { categories = []; }
  return {
    id:         row.id,
    name:       row.name,
    city:       row.city,
    state:      row.state ?? null,
    country:    row.country,
    categories,
    created_at: row.created_at,
  };
}

function mapStory(row) {
  let tags;
  try { tags = JSON.parse(row.tags || '[]'); } catch { tags = []; }
  return {
    id:               row.id,
    title:            row.title ?? null,
    content:          row.content,
    room:             row.room || 'stories',
    tags,
    content_warning:  row.content_warning || 'none',
    lang:             row.lang || 'en',
    reply_count:      row.reply_count || 0,
    react_hear_you:   row.react_hear_you || 0,
    react_gave_hope:  row.react_gave_hope || 0,
    react_solidarity: row.react_solidarity || 0,
    react_me_too:     row.react_me_too || 0,
    is_approved:      Boolean(row.is_approved),
    created_at:       row.created_at,
  };
}

// Parse a subset of PostgREST filter params.
// Supported operators: eq, is (is.null only), in.(a,b,c)
// Returns { conditions: string[], values: any[] }
function parseFilters(params, allowedColumns) {
  const conditions = [];
  const values     = [];

  for (const [key, val] of params.entries()) {
    if (!allowedColumns.includes(key)) continue;
    const dotIdx = val.indexOf('.');
    if (dotIdx === -1) continue;
    const op = val.slice(0, dotIdx);
    const v  = val.slice(dotIdx + 1);

    if (op === 'eq') {
      conditions.push(`${key} = ?`);
      values.push(v === 'true' ? 1 : v === 'false' ? 0 : v);
    } else if (op === 'is' && v === 'null') {
      conditions.push(`${key} IS NULL`);
    } else if (op === 'in') {
      // Supabase sends: id=in.(1,2,3)
      const list = v.replace(/^\(|\)$/g, '').split(',').map(s => s.trim()).filter(Boolean);
      if (list.length) {
        const placeholders = list.map(() => '?').join(',');
        conditions.push(`${key} IN (${placeholders})`);
        values.push(...list);
      }
    }
  }

  return { conditions, values };
}

// Parse the PostgREST Range header (e.g. "0-19") into { from, to }
function parseRangeHeader(req) {
  const rangeHeader = req.headers['range'] || '';
  const match = rangeHeader.match(/^(\d+)-(\d+)$/);
  if (match) {
    return { from: parseInt(match[1], 10), to: parseInt(match[2], 10) };
  }
  return null;
}

// ── Route handlers ────────────────────────────────────────────────────────────

// GET /filtered-reports  — proxies the real Cloudflare Worker endpoint;
// falls back to local SQLite seed data if upstream is unreachable.
function handleFilteredReports(res) {
  const upstreamUrl = 'https://api.namehim.app/filtered-reports';
  https.get(upstreamUrl, { headers: { 'Accept': 'application/json' } }, (upRes) => {
    let body = '';
    upRes.on('data', (chunk) => { body += chunk; });
    upRes.on('end', () => {
      setCORSHeaders(res);
      res.writeHead(upRes.statusCode, { 'Content-Type': 'application/json' });
      res.end(body);
    });
  }).on('error', (err) => {
    console.warn('[/filtered-reports] upstream unreachable, falling back to local seed:', err.message);
    const rows = db.prepare('SELECT * FROM reports ORDER BY id DESC').all();
    sendJSON(res, 200, rows.map(mapReport));
  });
}

// GET /rest/v1/stories
function handleStoriesGet(req, res, params) {
  const { conditions, values } = parseFilters(params, ['id', 'is_approved', 'room', 'lang']);

  const orderParam = params.get('order') || '';
  let orderClause = ' ORDER BY created_at DESC';
  if (orderParam.startsWith('react_gave_hope.desc')) orderClause = ' ORDER BY react_gave_hope DESC, created_at DESC';
  else if (orderParam.startsWith('react_hear_you.desc')) orderClause = ' ORDER BY react_hear_you DESC, created_at DESC';
  else if (orderParam.startsWith('reply_count.asc'))    orderClause = ' ORDER BY reply_count ASC, created_at DESC';
  else if (orderParam.startsWith('created_at.asc'))     orderClause = ' ORDER BY created_at ASC';

  // Range header pagination (Supabase .range())
  const range = parseRangeHeader(req);
  let limitClause = '';
  let offsetClause = '';
  if (range) {
    const count = range.to - range.from + 1;
    limitClause  = ` LIMIT ${count}`;
    offsetClause = ` OFFSET ${range.from}`;
  } else {
    const limit = parseInt(params.get('limit') || '0', 10);
    if (limit > 0) limitClause = ` LIMIT ${limit}`;
  }

  const cols = 'id, title, content, created_at, room, tags, content_warning, lang, reply_count, react_hear_you, react_gave_hope, react_solidarity, react_me_too, is_approved';
  let sql = `SELECT ${cols} FROM stories`;
  if (conditions.length) sql += ' WHERE ' + conditions.join(' AND ');
  sql += orderClause + limitClause + offsetClause;

  const rows = db.prepare(sql).all(...values);
  const result = rows.map(mapStory);

  if (range) {
    const { n: total } = db.prepare('SELECT COUNT(*) AS n FROM stories' + (conditions.length ? ' WHERE ' + conditions.join(' AND ') : '')).get(...values);
    const last = Math.min(range.from + rows.length - 1, total - 1);
    setCORSHeaders(res);
    res.setHeader('Content-Range', `${range.from}-${last}/${total}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    sendJSON(res, 200, result);
  }
}

// PATCH /rest/v1/stories  (reaction count updates)
async function handleStoriesPatch(req, res, params) {
  const body    = await readBody(req);
  const payload = Array.isArray(body) ? body[0] : (body || {});
  const { conditions, values } = parseFilters(params, ['id']);
  if (!conditions.length) { sendJSON(res, 400, { error: 'id filter required' }); return; }

  const allowed = ['react_hear_you', 'react_gave_hope', 'react_solidarity', 'react_me_too'];
  const setClauses = [];
  const setValues  = [];
  for (const col of allowed) {
    if (typeof payload[col] === 'number') {
      setClauses.push(`${col} = ?`);
      setValues.push(Math.max(0, Math.round(payload[col])));
    }
  }
  if (!setClauses.length) { sendJSON(res, 200, []); return; }

  db.prepare(`UPDATE stories SET ${setClauses.join(', ')} WHERE ${conditions.join(' AND ')}`)
    .run(...setValues, ...values);
  sendJSON(res, 200, []);
}

// HEAD /rest/v1/reports  (used by about.html for count)
function handleReportsCount(res) {
  const { n } = db.prepare('SELECT COUNT(*) AS n FROM reports').get();
  setCORSHeaders(res);
  res.writeHead(200, { 'Content-Range': `0-${Math.max(0, n - 1)}/${n}` });
  res.end();
}

// GET /rest/v1/reports  (used by loadLocalReports — "Our Reports" data source)
function handleReportsGet(res, params) {
  let sql = 'SELECT id, name, city, state, country, categories, created_at FROM reports';
  const { conditions, values } = parseFilters(params, ['id', 'state', 'country']);
  if (conditions.length) sql += ' WHERE ' + conditions.join(' AND ');

  const order = params.get('order') || '';
  if (order.startsWith('created_at.asc')) sql += ' ORDER BY created_at ASC';
  else                                    sql += ' ORDER BY created_at DESC';

  const limit = parseInt(params.get('limit') || '0', 10);
  if (limit > 0) sql += ` LIMIT ${limit}`;

  const rows = db.prepare(sql).all(...values);
  sendJSON(res, 200, rows.map(mapReport));
}

// POST /rest/v1/{table}
async function handleInsert(req, res, table) {
  const body    = await readBody(req);
  const payload = Array.isArray(body) ? body[0] : (body || {});

  if (table === 'reports') {
    db.prepare(
      'INSERT INTO reports (name, city, state, country, categories, submitter_uuid) VALUES (?, ?, ?, ?, ?, ?)'
    ).run(
      payload.name           || '',
      payload.city           || '',
      payload.state          || null,
      payload.country        || '',
      JSON.stringify(Array.isArray(payload.categories) ? payload.categories : []),
      payload.submitter_uuid || ''
    );
  } else if (table === 'stories') {
    db.prepare(
      `INSERT INTO stories (title, content, submitter_uuid, room, tags, content_warning, lang)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    ).run(
      payload.title          || null,
      payload.content        || '',
      payload.submitter_uuid || null,
      payload.room           || 'stories',
      JSON.stringify(Array.isArray(payload.tags) ? payload.tags : []),
      payload.content_warning || 'none',
      payload.lang            || 'en'
    );
  } else if (table === 'story_replies') {
    db.prepare(
      'INSERT INTO story_replies (story_id, content, reply_author_token) VALUES (?, ?, ?)'
    ).run(
      parseInt(payload.story_id, 10) || 0,
      (payload.content || '').slice(0, 1000),
      payload.reply_author_token || ''
    );
    // Increment reply_count
    db.prepare('UPDATE stories SET reply_count = reply_count + 1 WHERE id = ?')
      .run(parseInt(payload.story_id, 10) || 0);
  } else if (table === 'story_flags') {
    db.prepare(
      'INSERT INTO story_flags (story_id, reason, flagged_by) VALUES (?, ?, ?)'
    ).run(
      parseInt(payload.story_id, 10) || 0,
      payload.reason     || null,
      payload.flagged_by || null
    );
  } else if (table === 'report_flags') {
    db.prepare(
      'INSERT INTO report_flags (report_id, reason, flagged_by) VALUES (?, ?, ?)'
    ).run(
      parseInt(payload.report_id, 10) || 0,
      payload.reason     || null,
      payload.flagged_by || null
    );
  }

  setCORSHeaders(res);
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end('[]');
}

// GET /rest/v1/story_replies
function handleRepliesGet(res, params) {
  const { conditions, values } = parseFilters(params, ['story_id', 'is_approved']);
  let sql = 'SELECT id, story_id, content, reply_author_token, created_at FROM story_replies';
  if (conditions.length) sql += ' WHERE ' + conditions.join(' AND ');
  sql += ' ORDER BY created_at ASC';
  const rows = db.prepare(sql).all(...values);
  sendJSON(res, 200, rows.map(row => ({
    id:                 row.id,
    story_id:           row.story_id,
    content:            row.content,
    reply_author_token: row.reply_author_token,
    created_at:         row.created_at,
  })));
}

// ── HTML patching ─────────────────────────────────────────────────────────────

// Inline script that replaces Cloudflare Turnstile with an auto-passing mock.
// Injected in place of the Turnstile CDN <script> tag.
const TURNSTILE_MOCK_SCRIPT = `<script>
/* local-dev: Cloudflare Turnstile mock — auto-fills the hidden token */
window.turnstile = {
  reset: function () {
    document.querySelectorAll('input[name="cf-turnstile-response"]').forEach(function (el) {
      el.value = 'local-dev-bypass-token';
    });
  }
};
(function mountMockWidgets() {
  function fill() {
    document.querySelectorAll('.cf-turnstile').forEach(function (div) {
      if (!div.querySelector('input[name="cf-turnstile-response"]')) {
        var inp = document.createElement('input');
        inp.type  = 'hidden';
        inp.name  = 'cf-turnstile-response';
        inp.value = 'local-dev-bypass-token';
        div.appendChild(inp);
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fill);
  } else {
    fill();
  }
}());
<\/script>`;

const SUPABASE_PROD_URL  = 'https://cmmggaprguusffiphegy.supabase.co';
const SUPABASE_LOCAL_URL = 'http://localhost:' + PORT;
const WORKER_PROD_URL    = 'https://api.namehim.app/filtered-reports';
const WORKER_LOCAL_PATH  = '/filtered-reports';
const TURNSTILE_SCRIPT_TAG =
  '<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>';

function patchHTML(html) {
  return html
    // Redirect Supabase client to local server
    .replace(
      `const SUPABASE_URL = '${SUPABASE_PROD_URL}';`,
      `const SUPABASE_URL = '${SUPABASE_LOCAL_URL}';`
    )
    // Redirect Cloudflare Worker fetch to local endpoint
    .replace(new RegExp(escapeRegExp(WORKER_PROD_URL), 'g'), WORKER_LOCAL_PATH)
    // Replace Turnstile CDN script with local mock
    .replace(TURNSTILE_SCRIPT_TAG, TURNSTILE_MOCK_SCRIPT);
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ── Static file server ────────────────────────────────────────────────────────

function serveStatic(req, res, pathname) {
  if (pathname === '/') pathname = '/index.html';

  // Prevent path-traversal
  const filePath = path.resolve(__dirname, '.' + pathname);
  if (!filePath.startsWith(__dirname + path.sep) && filePath !== __dirname) {
    setCORSHeaders(res);
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      setCORSHeaders(res);
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const ext         = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    setCORSHeaders(res);

    if (ext === '.html') {
      const patched = patchHTML(data.toString('utf8'));
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(patched);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

// ── Main request handler ──────────────────────────────────────────────────────

const server = http.createServer(async (req, res) => {
  // Preflight
  if (req.method === 'OPTIONS') {
    setCORSHeaders(res);
    res.writeHead(204);
    res.end();
    return;
  }

  const reqUrl   = new URL(req.url, `http://localhost:${PORT}`);
  const pathname = reqUrl.pathname;
  const params   = reqUrl.searchParams;
  const method   = req.method;

  // Cloudflare Worker replacement
  if (pathname === '/filtered-reports' && method === 'GET') {
    return handleFilteredReports(res);
  }

  // PostgREST-compatible API
  if (pathname.startsWith('/rest/v1/')) {
    const table = pathname.split('/').at(-1);

    if (method === 'HEAD' && table === 'reports') {
      return handleReportsCount(res);
    }

    if (method === 'GET' && table === 'reports') {
      return handleReportsGet(res, params);
    }

    if (method === 'GET' && table === 'stories') {
      return handleStoriesGet(req, res, params);
    }

    if (method === 'PATCH' && table === 'stories') {
      return handleStoriesPatch(req, res, params);
    }

    if (method === 'GET' && table === 'story_replies') {
      return handleRepliesGet(res, params);
    }

    if (method === 'POST' && ['reports', 'stories', 'story_replies', 'story_flags', 'report_flags'].includes(table)) {
      return handleInsert(req, res, table);
    }

    setCORSHeaders(res);
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  // Static files (HTML gets patched before delivery)
  serveStatic(req, res, pathname);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('\n  Local dev server running');
  console.log(`  Open: http://localhost:${PORT}`);
  console.log(`  DB:   ${DB_FILE}`);
  console.log('\n  Supabase and Cloudflare Turnstile are mocked for local development.');
  console.log('  Press Ctrl+C to stop.\n');
});
