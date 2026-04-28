# SafeVoice Community Section — Feature Expansion Roadmap

*Feminist & progressive lens · Survivor-centered · Anonymous · No accounts*
*Generated: April 27, 2026*

---

## Vision

The Community section is the heart of SafeVoice: a space where survivors, allies, and advocates can
connect anonymously, share experiences, find solidarity, and support one another — without ever
needing an account, email, or any identifying information. Every design decision centers the most
marginalized person in the room.

---

## 1. Reimagine the Feed

- **Multiple post types** in one composer: *Story*, *Message of Hope*, *Question*, *Resource Tip*,
  *Reflection*. Each renders with a distinct icon/color so readers can scan by intent.
- **Tags / themes**: `healing`, `leaving`, `court`, `family`, `LGBTQ+`, `recovery`, `first-week`,
  `years-later`. Pre-curated, multilingual, color-coded — same pattern as report categories. Filter
  chips at the top of the feed.
- **Content warnings**: required CW selector on submit (`physical`, `sexual`, `coercive control`,
  `none`). Posts render collapsed with a "Reveal" affordance — gives readers control.
- **Reading time / length filter**: "Quick reads (under 30s)" vs. "Longer stories."
- **Language tags**: posts tagged with their language; UI filter to show only posts in the user's
  i18n language, plus a "Show all languages" toggle.
- **Sort modes**: *Newest*, *Most supported*, *Random* (intentional discovery), *Needs replies*
  (questions awaiting answers).

---

## 2. Lightweight Anonymous Interaction (no accounts)

- **Reactions instead of likes**: 🤝 "I hear you", 🌱 "This gave me hope", 🫶 "Sending strength",
  📌 "Saved". Stored as aggregate counts; localStorage prevents double-tap from same browser.
- **Threaded anonymous replies**, also moderated. Reply authors get an opaque session token
  (rotating, derived in-browser) so a thread shows "Original poster", "Reply 1" stably within one
  thread without revealing identity across the site.
- **"Me too" silent counter**: a single button on stories that increments a counter.
- **Saved posts**: localStorage-only "My saved" tab. Never leaves the device.

---

## 3. Structured Rooms

Right now Community is one feed. Break it into *rooms* with different norms:

| Room | Emoji | Purpose |
|------|-------|---------|
| Survivor Stories | 💜 | Long-form personal accounts |
| Messages of Hope | 🌱 | Short uplifting posts; pinned on landing page |
| Ask the Community | ❓ | Anonymous questions with anonymous replies |
| LGBTQ+ Voices | 🏳️‍🌈 | Affinity space for LGBTQ+ survivors |
| Trans & Non-Binary Voices | ⚧ | Space for trans/NB-specific experiences |
| For Allies | 🤝 | Guidance written by survivors for friends/family |
| Court & Legal | ⚖️ | Survivor-to-survivor knowledge about legal navigation |
| Resource Recommendations | 📚 | Community-curated pointers to hotlines, shelters, tools |
| Men Who've Experienced Abuse | 💙 | Inclusive space with explicit male-survivor welcome |

---

## 4. Discovery & Landing UX

- **Rooms navigation**: horizontal tabs above the feed; each room shows post count.
- **Community landing hero**: rotating featured story, latest hopeful message, quick-jump tiles.
- **"Story of the day" widget** on the main `index.html` homepage.
- **Search within Community** (text + tag + room).
- **Sort bar** on every room: Newest · Most Supported · Random.
- **Thread permalinks** with OG/Twitter cards.

---

## 5. Composer & Submission UX

- **Multi-step composer** mirroring the report-flow wizard:
  1. Choose room → 2. Choose CW → 3. Write + tags → 4. Preview → 5. CAPTCHA → Submit.
- **Drafts in localStorage** with autosave. Recover after accidental refresh.
- **Inline prompts / writing scaffolds**: optional prompts ("It started when…", "What helped me
  was…") that surface after 10s of inactivity.
- **Live PII scrubber**: client-side regex flags likely names, emails, phone numbers, addresses,
  social handles before submit, with a non-blocking warning.
- **Post-submission "what happens next" screen**: moderation timing, link to Resources, suggest
  reading other stories while waiting.

---

## 6. Moderation Tooling

- **Anonymous flag/report on individual posts**: reasons = `names a person`, `unsafe content`,
  `spam`, `crisis — needs help`.
- **"Crisis flag"**: posts containing certain phrases show the poster an immediate crisis-resource
  overlay before they hit submit.
- **Public moderation queue stats**: "N posts awaiting review · avg. wait Xh." Builds trust.
- **Rejection feedback loop**: rejection reason templates guide the user to revise.

---

## 7. Solidarity & Collective Features

- **Anonymous solidarity counter**: site-wide "N people have shared support this month."
- **Exit quickly** sticky button on every Community page (jumps to neutral URL). Standard for DV
  resources, non-negotiable.
- **Memorial wall**: opt-in space for posts honoring those lost to abuse.
- **Themed collective writing prompts**: "This week: write a letter to your past self."

---

## 8. Accessibility & Care UX

- **"Exit quickly" button** sticky on all Community pages.
- **TTS "Listen to this story"** button: browser TTS, zero server cost.
- **"Take a breath" interstitial** before a heavily content-warned post: breathing animation +
  resource link.
- **Resource footer on every story**: hotline numbers localized to the i18n language.
- **Reading mode**: high-contrast, larger text, minimal chrome.

---

## 9. Trust & Transparency

- **"How moderation works" link** on every Community surface.
- **Community guidelines versioned in the repo**, rendered into the modal.
- **Moderator rotation count** — without naming individuals beyond what they choose.

---

## 10. Technical Architecture

### New Database Tables

| Table | Purpose |
|-------|---------|
| `story_rooms` | Room definitions (could be enum/config) |
| `story_tags` | Many-to-many tags on stories |
| `story_reactions` | Aggregate reaction counts per story |
| `story_replies` | Anonymous threaded replies |
| `story_flags` | Flags on community posts |

### Extended `stories` Table Columns

- `room` TEXT (enum: see rooms list above)
- `tags` TEXT[] (array of tag slugs)
- `content_warning` TEXT (enum: `none`, `physical`, `sexual`, `coercive-control`, `general`)
- `lang` TEXT (ISO code, default 'en')
- `reply_count` INT (denormalized for feed performance)
- `reaction_counts` JSONB (denormalized {hear_you: N, gave_hope: N, solidarity: N, me_too: N})

### Anon Session Token

32-byte random in `localStorage` (already partly exists for rate limiting) — reused as the
per-thread author identity, never sent except with that thread's writes. Enables stable "OP / Reply
1 / Reply 2" labeling without cross-post identity linkage.

### i18n

All new room names, tag labels, CW labels, reaction labels, and UI strings added to both `en` and
`es` in `i18n.js`.

---

## 11. Quick Wins (ship first)

1. "Exit quickly" sticky button on all Community pages ✅ *implemented*
2. Content-warning selector + collapsed rendering ✅ *implemented*
3. Reactions (🤝 🌱 🫶 + "Me too") with localStorage dedupe ✅ *implemented*
4. Draft autosave in localStorage ✅ *implemented*
5. Sort dropdown (Newest / Random / Most Supported) ✅ *implemented*
6. Tag chips on stories + tag filter ✅ *implemented*
7. Featured "Story of the day" card on `index.html` ✅ *implemented*
8. PII pre-submit warning ✅ *implemented*
9. Room tabs ✅ *implemented*
10. Anonymous replies ✅ *implemented*
11. Story flagging ✅ *implemented*
12. Crisis detection + resource overlay ✅ *implemented*

---

## Feminist & Progressive Design Principles Applied

- **Survivor-first language**: No victim-blaming framing anywhere. "What happened to you" not "your
  situation". CW options center the survivor's narrative control.
- **Non-binary & trans inclusion**: Explicit affinity rooms. Gender-neutral language as default
  (use "they/them" in UI copy; use gendered options only where the survivor chooses them).
- **Intersectionality**: Rooms explicitly named for LGBTQ+, trans/NB, and men who've experienced
  abuse — dismantling the myth that abuse only flows in one direction.
- **Safety over speed**: Exit quickly button is non-negotiable, always visible.
- **Radical privacy**: No accounts, no emails, no IPs. Anonymous interactions by design.
- **Harm reduction**: Crisis overlay rather than gatekeeping. Resources offered, never required.
- **Anti-carceral framing**: Resources tab and community posts remind users that police reports are
  one option, not the only or best option, especially for LGBTQ+ survivors.
- **Transparency**: Moderation guidelines publicly stated. No secret rules.
- **Accessibility**: Reading mode, TTS, breathing interstitial — care for users in distress.
