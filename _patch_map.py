#!/usr/bin/env python3
"""
One-shot patch: replaces simplemaps with Leaflet heatmap in index.html
"""
import re, sys

SRC = "/Users/a/repos/report-fork/index.html"

with open(SRC, "r", encoding="utf-8") as f:
    html = f.read()

# ─── 1. Add Leaflet CSS + JS in <head> ────────────────────────────────────────
OLD1 = '  <link rel="stylesheet" href="styles.css" />\n  <script src="i18n.js">'
NEW1 = (
    '  <link rel="stylesheet" href="styles.css" />\n'
    '  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />\n'
    '  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>\n'
    '  <script src="https://unpkg.com/leaflet.heat@0.2.0/dist/leaflet-heat.js"></script>\n'
    '  <script src="i18n.js">'
)
assert OLD1 in html, "FAIL 1: head CDN links anchor not found"
html = html.replace(OLD1, NEW1, 1)

# ─── 2. Replace map CSS block ─────────────────────────────────────────────────
OLD2 = '''\
    .map-toggle-wrap {
      margin-bottom: 0.65rem;
    }

    .map-toggle-row {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      margin-bottom: 0.65rem;
    }

    .map-toggle-row .map-toggle-wrap {
      margin-bottom: 0;
      flex: 1;
    }

    .map-toggle-btn {
      min-width: 0;
      flex: 1;
    }

    #map {
      display: none;
    }

    #world-map {
      display: none;
      width: 100%;
      max-width: 100%;
      min-height: 0;
      position: relative;
      overflow: hidden;
      margin-bottom: 1rem;
      border: 1px solid var(--border);
      border-radius: 0.7rem;
      background: #0f172a;
    }

    #world-map a[href*="simplemaps.com"],
    #world-map a[href*="openstreetmap.org"],
    #world-map [class*="copyright"],
    #world-map [id*="copyright"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }

    footer {'''

NEW2 = '''\
    .filter-bar-maps {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .map-toggle-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      white-space: nowrap;
    }

    #leaflet-map-container {
      margin-bottom: 1rem;
    }

    #leaflet-map {
      height: 420px;
      border-radius: 0.7rem;
      border: 1px solid var(--border);
      overflow: hidden;
      background: #0f172a;
    }

    #sv-map-status {
      font-size: 0.78rem;
      color: var(--muted);
      margin-top: 0.35rem;
      padding: 0 0.25rem;
    }

    .sv-map-ctrl {
      display: flex;
      background: #1e293b;
      border: 1px solid #334155;
      border-radius: 0.45rem;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.45);
    }

    .sv-mc-btn {
      border: none;
      background: transparent;
      color: #94a3b8;
      padding: 0.35rem 0.8rem;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      border-radius: 0;
      letter-spacing: 0.01em;
    }

    .sv-mc-btn:hover { background: #334155; color: #e2e8f0; }

    .sv-mc-btn.sv-mc-active {
      background: var(--accent);
      color: #0f172a;
    }

    footer {'''

assert OLD2 in html, "FAIL 2: map CSS block not found"
html = html.replace(OLD2, NEW2, 1)

# ─── 3. Replace filter-bar-maps HTML (two buttons → one) ─────────────────────
OLD3 = '''\
          <div class="filter-bar-maps">
            <button id="toggle-map-btn" class="map-toggle-btn" type="button" aria-expanded="false" aria-controls="map">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7"/><path d="M9 4v13M15 7v13"/></svg>
              US Map
            </button>
            <button id="toggle-world-map-btn" class="map-toggle-btn" type="button" aria-expanded="false" aria-controls="world-map">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              World Map
            </button>
          </div>'''

NEW3 = '''\
          <div class="filter-bar-maps">
            <button id="toggle-map-btn" class="map-toggle-btn" type="button" aria-expanded="false" aria-controls="leaflet-map-container">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              <span class="sv-map-label">Map View</span>
            </button>
          </div>'''

assert OLD3 in html, "FAIL 3: filter-bar-maps HTML not found"
html = html.replace(OLD3, NEW3, 1)

# ─── 4. Replace old map divs with Leaflet container ──────────────────────────
OLD4 = '''\
        <div id="map"></div>
        <div id="world-map"></div>'''
NEW4 = '''\
        <div id="leaflet-map-container" class="hidden">
          <div id="leaflet-map"></div>
          <div id="sv-map-status"></div>
        </div>'''
assert OLD4 in html, "FAIL 4: map divs not found"
html = html.replace(OLD4, NEW4, 1)

# ─── 5. Remove old JS map constants ──────────────────────────────────────────
OLD5 = '''\
    const mapContainer = document.getElementById('map');
    const toggleMapBtn = document.getElementById('toggle-map-btn');
    const MAP_VISIBILITY_STORAGE_KEY = 'namehim_us_map_visible';
    const browsePagination'''
NEW5 = '''\
    const browsePagination'''
assert OLD5 in html, "FAIL 5: JS map constants not found"
html = html.replace(OLD5, NEW5, 1)

# ─── 6. Replace all refreshWorldMapReportData calls with refreshLeafletMap ───
html = html.replace(
    "if (typeof window.refreshWorldMapReportData === 'function') {\n            window.refreshWorldMapReportData();\n          }",
    "refreshLeafletMap();"
)
html = html.replace(
    "if (typeof window.refreshWorldMapReportData === 'function') {\n          window.refreshWorldMapReportData();\n        }",
    "refreshLeafletMap();"
)
html = html.replace(
    "if (typeof window.refreshWorldMapReportData === 'function') {\n              window.refreshWorldMapReportData();\n            }",
    "refreshLeafletMap();"
)

# ─── 7. Replace refreshSimpleMap / setMapVisibility / initMapToggle functions ─
OLD7 = '''\
    function refreshSimpleMap() {
      if (!window.simplemaps_usmap || typeof window.simplemaps_usmap.refresh !== 'function') {
        return;
      }
      window.requestAnimationFrame(function () {
        window.simplemaps_usmap.refresh();
      });
    }

    function setMapVisibility(isVisible, persistPreference = true) {
      if (!mapContainer || !toggleMapBtn) {
        return;
      }

      if (isVisible && typeof setWorldMapVisibility === 'function') {
        setWorldMapVisibility(false);
      }

      mapContainer.style.display = isVisible ? 'block' : 'none';
      toggleMapBtn.textContent = isVisible ? 'Hide US Map' : 'Show US Map';
      toggleMapBtn.setAttribute('aria-expanded', String(isVisible));

      if (persistPreference) {
        localStorage.setItem(MAP_VISIBILITY_STORAGE_KEY, isVisible ? '1' : '0');
      }

      if (isVisible) {
        refreshSimpleMap();
      }
    }

    function initMapToggle() {
      if (!mapContainer || !toggleMapBtn) {
        return;
      }

      const savedVisibility = localStorage.getItem(MAP_VISIBILITY_STORAGE_KEY);
      const shouldShowMap = savedVisibility === '1';
      setMapVisibility(shouldShowMap, false);

      toggleMapBtn.addEventListener('click', function onMapToggleClick() {
        const isVisible = mapContainer.style.display !== 'none';
        setMapVisibility(!isVisible);
      });
    }

    function init() {'''
NEW7 = '''\
    function init() {'''
assert OLD7 in html, "FAIL 7: refreshSimpleMap/setMapVisibility/initMapToggle not found"
html = html.replace(OLD7, NEW7, 1)

# ─── 8. Update init(): replace initMapToggle + remove load listener ───────────
OLD8 = '''\
      initMapToggle();

      window.addEventListener('hashchange', renderRoute);
      window.addEventListener('load', function onWindowLoad() {
        if (mapContainer && mapContainer.style.display !== 'none') {
          refreshSimpleMap();
        }
      });
      countryField.addEventListener('change', renderStateField);'''
NEW8 = '''\
      initLeafletMapToggle();

      window.addEventListener('hashchange', renderRoute);
      countryField.addEventListener('change', renderStateField);'''
assert OLD8 in html, "FAIL 8: init() map section not found"
html = html.replace(OLD8, NEW8, 1)

# ─── 9. Replace world map section + simplemaps scripts ───────────────────────
# Find from "// --- World Map Toggle" to end of </body></html>
OLD9_START = "   // --- World Map Toggle (similar to US Map) ---"
OLD9_END = "</body>\n</html>"
idx_start = html.find(OLD9_START)
idx_end = html.find(OLD9_END)
assert idx_start != -1, "FAIL 9a: world map start not found"
assert idx_end != -1, "FAIL 9b: end of body not found"

NEW9 = '''
  // ─── Leaflet Interactive Map ────────────────────────────────────────────────
  const LEAFLET_MAP_KEY = 'sv_leaflet_visible';
  const GEO_CACHE_KEY   = 'sv_geocache_v1';
  const GEO_RATE_MS     = 1150; // Nominatim: 1 req/sec max

  let _leafletMap    = null;
  let _heatLayer     = null;
  let _dotLayer      = null;
  let _mapViewMode   = 'heat'; // 'heat' | 'dots'
  let _geoCache      = {};
  let _geoQueue      = [];
  let _geoRunning    = false;
  let _pendingRender = false;

  function _loadGeoCache() {
    try { _geoCache = JSON.parse(localStorage.getItem(GEO_CACHE_KEY) || '{}'); }
    catch { _geoCache = {}; }
  }

  function _saveGeoCache() {
    try { localStorage.setItem(GEO_CACHE_KEY, JSON.stringify(_geoCache)); }
    catch {}
  }

  function _cacheKey(city, country) {
    return (city || '').toLowerCase().trim() + '|' + (country || '').toLowerCase().trim();
  }

  async function _geocodeOnce(city, country) {
    const key = _cacheKey(city, country);
    if (_geoCache[key] !== undefined) return _geoCache[key];
    const q = [city, country].filter(Boolean).join(', ');
    if (!q) { _geoCache[key] = null; return null; }
    try {
      const r = await fetch(
        'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(q),
        { headers: { 'Accept-Language': 'en' } }
      );
      const d = await r.json();
      const coords = (d && d[0]) ? [parseFloat(d[0].lat), parseFloat(d[0].lon)] : null;
      _geoCache[key] = coords;
      _saveGeoCache();
      return coords;
    } catch { return undefined; }
  }

  function _enqueueGeocode(city, country) {
    const key = _cacheKey(city, country);
    if (_geoCache[key] !== undefined) return Promise.resolve(_geoCache[key]);
    return new Promise(resolve => {
      _geoQueue.push({ city, country, resolve });
      _drainGeoQueue();
    });
  }

  async function _drainGeoQueue() {
    if (_geoRunning) return;
    _geoRunning = true;
    while (_geoQueue.length > 0) {
      const { city, country, resolve } = _geoQueue.shift();
      const result = await _geocodeOnce(city, country);
      resolve(result);
      if (_geoQueue.length > 0) await new Promise(r => setTimeout(r, GEO_RATE_MS));
    }
    _geoRunning = false;
    if (_pendingRender) {
      _pendingRender = false;
      const reports = (currentFilteredReports && currentFilteredReports.length > 0)
        ? currentFilteredReports : (window.allReports || []);
      _renderMap(reports);
    }
  }

  function _initLeafletMap() {
    if (_leafletMap || typeof L === 'undefined') return;
    _leafletMap = L.map('leaflet-map', {
      center: [20, 0], zoom: 2, minZoom: 2, worldCopyJump: true,
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(_leafletMap);
    _heatLayer = L.heatLayer([], {
      radius: 28, blur: 18, maxZoom: 12,
      gradient: { 0.15: '#818cf8', 0.4: '#a855f7', 0.7: '#f97316', 1.0: '#ef4444' },
    });
    _dotLayer = L.layerGroup();
    _heatLayer.addTo(_leafletMap);
    _addMapControls();
  }

  function _addMapControls() {
    const MapCtrl = L.Control.extend({
      onAdd() {
        const d = L.DomUtil.create('div', 'sv-map-ctrl');
        d.innerHTML =
          '<button type="button" class="sv-mc-btn sv-mc-active" id="sv-mc-heat">Heatmap</button>' +
          '<button type="button" class="sv-mc-btn" id="sv-mc-dots">Markers</button>';
        L.DomEvent.disableClickPropagation(d);
        d.querySelector('#sv-mc-heat').addEventListener('click', () => _setViewMode('heat'));
        d.querySelector('#sv-mc-dots').addEventListener('click', () => _setViewMode('dots'));
        return d;
      }
    });
    new MapCtrl({ position: 'topright' }).addTo(_leafletMap);
  }

  function _setViewMode(mode) {
    _mapViewMode = mode;
    const heatBtn = document.getElementById('sv-mc-heat');
    const dotsBtn = document.getElementById('sv-mc-dots');
    if (heatBtn) heatBtn.classList.toggle('sv-mc-active', mode === 'heat');
    if (dotsBtn) dotsBtn.classList.toggle('sv-mc-active', mode === 'dots');
    if (!_leafletMap) return;
    if (mode === 'heat') {
      if (_leafletMap.hasLayer(_dotLayer)) _dotLayer.remove();
      if (!_leafletMap.hasLayer(_heatLayer)) _heatLayer.addTo(_leafletMap);
    } else {
      if (_leafletMap.hasLayer(_heatLayer)) _heatLayer.remove();
      if (!_leafletMap.hasLayer(_dotLayer)) _dotLayer.addTo(_leafletMap);
    }
  }

  async function _renderMap(reports) {
    if (!_leafletMap) return;
    const statusEl = document.getElementById('sv-map-status');

    // Aggregate reports by unique city+country
    const byLoc = {};
    for (const r of (reports || [])) {
      const k = _cacheKey(r.city, r.country);
      if (!byLoc[k]) byLoc[k] = { city: r.city, country: r.country, count: 0 };
      byLoc[k].count++;
    }
    const locs = Object.values(byLoc);

    // Queue uncached locations for geocoding
    const uncached = locs.filter(l => _geoCache[_cacheKey(l.city, l.country)] === undefined);
    if (uncached.length > 0) {
      if (statusEl) { statusEl.textContent = 'Geocoding ' + uncached.length + ' location(s)…'; statusEl.style.display = ''; }
      _pendingRender = true;
      for (const l of uncached) _enqueueGeocode(l.city, l.country);
    } else {
      if (statusEl) statusEl.style.display = 'none';
    }

    // Render with already-cached coords immediately
    const ready = locs
      .filter(l => _geoCache[_cacheKey(l.city, l.country)])
      .map(l => ({ ...l, coords: _geoCache[_cacheKey(l.city, l.country)] }));
    _updateLayers(ready);

    // Fit map to visible points (only when few locations to avoid confusing full-world zoom)
    if (ready.length > 0) {
      try {
        const pts = ready.map(l => l.coords);
        const bounds = L.latLngBounds(pts);
        _leafletMap.fitBounds(bounds, { padding: [50, 50], maxZoom: 8 });
      } catch {}
    }
  }

  function _updateLayers(geocodedLocs) {
    if (!_heatLayer || !_dotLayer) return;

    // Heatmap points (weight by count, capped at 10)
    const pts = [];
    for (const l of geocodedLocs) {
      const weight = Math.min(l.count / 5, 1.0);
      for (let i = 0; i < Math.min(l.count, 8); i++) {
        pts.push([l.coords[0], l.coords[1], 0.4 + weight * 0.6]);
      }
    }
    _heatLayer.setLatLngs(pts);

    // Circle markers for dot view
    _dotLayer.clearLayers();
    for (const l of geocodedLocs) {
      const radius = Math.max(5, Math.min(20, 5 + Math.sqrt(l.count) * 3));
      const safeCity = escapeHTML(l.city || '');
      const safeCountry = escapeHTML(l.country || '');
      const popupHtml = '<strong>' + safeCity + ', ' + safeCountry + '</strong><br>' +
        l.count + ' report' + (l.count !== 1 ? 's' : '');
      L.circleMarker(l.coords, {
        radius, fillColor: '#a855f7', color: '#7c3aed',
        weight: 2, opacity: 1, fillOpacity: 0.8,
      }).bindPopup(popupHtml).addTo(_dotLayer);
    }
  }

  function _setLeafletVisible(show, persist) {
    if (persist === undefined) persist = true;
    const container = document.getElementById('leaflet-map-container');
    const btn       = document.getElementById('toggle-map-btn');
    if (!container || !btn) return;

    container.classList.toggle('hidden', !show);
    btn.setAttribute('aria-expanded', String(show));
    const lbl = btn.querySelector('.sv-map-label');
    if (lbl) lbl.textContent = show ? 'Hide Map' : 'Map View';

    if (persist) localStorage.setItem(LEAFLET_MAP_KEY, show ? '1' : '0');

    if (show) {
      if (!_leafletMap) { _loadGeoCache(); _initLeafletMap(); }
      if (_leafletMap) {
        requestAnimationFrame(function() {
          _leafletMap.invalidateSize();
          const reports = (currentFilteredReports && currentFilteredReports.length > 0)
            ? currentFilteredReports : (window.allReports || []);
          _renderMap(reports);
        });
      }
    }
  }

  function refreshLeafletMap() {
    const container = document.getElementById('leaflet-map-container');
    if (container && !container.classList.contains('hidden') && _leafletMap) {
      const reports = (currentFilteredReports && currentFilteredReports.length > 0)
        ? currentFilteredReports : (window.allReports || []);
      _renderMap(reports);
    }
  }

  function initLeafletMapToggle() {
    _loadGeoCache();
    const btn = document.getElementById('toggle-map-btn');
    if (btn) {
      btn.addEventListener('click', function() {
        const container = document.getElementById('leaflet-map-container');
        const isHidden = container ? container.classList.contains('hidden') : true;
        _setLeafletVisible(isHidden);
      });
    }
    // Restore saved visibility state
    if (localStorage.getItem(LEAFLET_MAP_KEY) === '1') {
      // Defer until after page is fully painted so Leaflet can size correctly
      requestAnimationFrame(function() { _setLeafletVisible(true, false); });
    }
  }

    init();
  </script>

</body>
</html>'''

html = html[:idx_start] + NEW9

assert "</body>\n</html>" in html, "FAIL 9c: replacement didn't close body correctly"

# ─── Write output ─────────────────────────────────────────────────────────────
with open(SRC, "w", encoding="utf-8") as f:
    f.write(html)

print("✓ Patch applied successfully")
