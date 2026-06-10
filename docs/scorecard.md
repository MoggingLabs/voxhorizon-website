# Website Scorecard

A graded audit of the VoxHorizon website, scored **before** the v2 redesign
(2026-06-10, commit on `main` at the time of the audit) and **after** it
ships. Forty metrics across eight categories, each scored **0–5**:

- **0–1** — absent or broken
- **2** — present but weak
- **3** — solid baseline, no differentiation
- **4** — strong, intentional
- **5** — best-in-class, nothing left on the table

Re-run this audit after major changes; keep the rubric stable so scores stay
comparable. Measurement sources: code audit, `npm run build` route table,
manual Lighthouse runs (desktop + mobile) against the gated preview.

## 1. Conversion & CTA

| # | Metric | How measured | Before | After | Notes (before) |
|---|--------|-------------|:------:|:-----:|-------|
| 1.1 | Primary CTA consistency | Same label/destination pattern across pages | 2 | | "Check my zip" vs "Apply my zip" vs "See if your territory is open" — three labels for one action |
| 1.2 | CTA visible above the fold | Hero or persistent-nav CTA on every page | 2 | | Home/industries yes; system, results, faq, about have closing CTA only; nav has plain "Apply" link |
| 1.3 | Fallback path for hesitant visitors | Non-apply next step on the apply page | 0 | | /apply is a dead end if you're not ready — no FAQ/email path |
| 1.4 | Urgency/scarcity presence | Cohort state (slots, close date) on funnel pages | 2 | | Only home + territory carry it; system/results/faq/about have none |
| 1.5 | Funnel depth | Clicks from any landing page to a submitted form | 3 | | Always ≤2 clicks, but zip rows on /territory link to /apply without carrying the zip |

## 2. Information architecture

| # | Metric | How measured | Before | After | Notes (before) |
|---|--------|-------------|:------:|:-----:|-------|
| 2.1 | Orphaned pages | Pages unreachable from nav | 1 | | /about, /results, /faq, /industries/* missing from navbar |
| 2.2 | Nav completeness vs. funnel | Funnel stages represented in primary nav | 2 | | Proof stage (/results) absent; Operators present but duplicates Results' role |
| 2.3 | Content duplication | Sections repeated verbatim across pages | 2 | | Territory grid, event taxonomy, guarantee, stats each appear on 2–3 pages |
| 2.4 | Footer sitemap coverage | Share of public pages linked in footer | 1 | | Footer links 3 of 14 pages + email |
| 2.5 | URL/redirect hygiene | All historical URLs resolve correctly | 5 | | All 15 URLs live; sitemap matches |

## 3. Copy & messaging

| # | Metric | How measured | Before | After | Notes (before) |
|---|--------|-------------|:------:|:-----:|-------|
| 3.1 | Single content source | Copy/data instances hard-coded outside lib/content.ts | 2 | | Territory cells duplicated 2×, operators/roster/feed hard-coded in pages; stale unused exports |
| 3.2 | Voice consistency | "Receipts not impressions" specificity throughout | 5 | | Uniformly specific numbers, zero puffery — the site's strongest asset |
| 3.3 | Page-purpose clarity | One clear job per page | 3 | | Home does five jobs; /operators vs /results split one job in two |
| 3.4 | Number consistency | Same stat identical everywhere it appears | 3 | | "92% show rate / $11.4K ticket" in FAQ contradicts "83% / $32.4K" elsewhere |
| 3.5 | Metadata quality | Unique title/description/canonical per route | 5 | | Every page exports complete metadata |

## 4. Visual design & motion

| # | Metric | How measured | Before | After | Notes (before) |
|---|--------|-------------|:------:|:-----:|-------|
| 4.1 | Typographic scale | Fluid, hierarchical scale across breakpoints | 2 | | Fixed px sizes with one 960px jump (104→64px); 12px mono default body hurts prose |
| 4.2 | Page differentiation | Distinct signature element per page | 2 | | All pages share identical intro/strip/section anatomy |
| 4.3 | Motion coverage | Entrance/scroll/value animation where it adds meaning | 1 | | Two blinking dots + one pulse; zero scroll or entrance motion; framer-motion installed but unused |
| 4.4 | Micro-interaction polish | Hover/focus/active states on interactive elements | 2 | | 0.12s color hovers on nav/CTA; grid cells and zip rows have none |
| 4.5 | Reduced-motion compliance | prefers-reduced-motion respected | 0 | | Not handled anywhere (fixed in this PR: CSS loops now disabled under reduced motion) |

## 5. SEO & structured data

| # | Metric | How measured | Before | After | Notes (before) |
|---|--------|-------------|:------:|:-----:|-------|
| 5.1 | JSON-LD coverage | Organization / FAQPage / Service schemas | 0 | | None anywhere |
| 5.2 | Sitemap accuracy | sitemap.ts matches live routes + priorities | 4 | | Complete; priorities sensible |
| 5.3 | Canonical/redirect hygiene | Canonicals on all pages, no chains | 5 | | Canonical on every route |
| 5.4 | Title/description uniqueness | No duplicates across routes | 5 | | All unique |
| 5.5 | Semantic landmarks & headings | One h1/page, header/nav/main/footer | 4 | | Solid; FAQ summaries styled via inline styles rather than heading semantics |

## 6. Accessibility

| # | Metric | How measured | Before | After | Notes (before) |
|---|--------|-------------|:------:|:-----:|-------|
| 6.1 | Contrast (worst text token) | WCAG AA on darkest text/surface pair | 2 | | --c-quiet #3F5950 on navy ≈1.7:1 used for footer/placeholders/chart labels (fixed in this PR) |
| 6.2 | Skip link & landmarks | Skip-to-content + labeled landmarks | 2 | | Landmarks present; no skip link (added in this PR) |
| 6.3 | Keyboard operability | Tab through nav, grid, accordions, forms | 2 | | Forms/links fine; territory grid is mouse-invisible & keyboard-invisible; no mobile menu at all |
| 6.4 | Focus visibility | Visible focus indicator on all interactive elements | 1 | | Form inputs removed outline relying on 1px border tint (global :focus-visible ring added in this PR) |
| 6.5 | Form error semantics | aria-invalid/aria-describedby wiring | 2 | | Inline error text exists but isn't programmatically associated |

## 7. Performance

| # | Metric | How measured | Before | After | Notes (before) |
|---|--------|-------------|:------:|:-----:|-------|
| 7.1 | First-load JS per route | `npm run build` route table | 4 | | 103–119 kB first load; /apply heaviest at 16.4 kB route JS |
| 7.2 | Font payload | Families × weights actually used | 2 | | 5 families loaded, 2 entirely unused (Newsreader, JetBrains Mono — removed in this PR) |
| 7.3 | LCP (Lighthouse, mobile) | Gated preview, throttled | 3 | | Text-only hero renders fast; large font payload delays it; measure precisely post-redesign |
| 7.4 | CLS | Lighthouse | 4 | | Static layout, no images yet — near-zero shift |
| 7.5 | Image pipeline readiness | next/image usage + placeholder system | 1 | | No next/image anywhere; photosReady flag exists but no component honors it |

## 8. Trust & proof

| # | Metric | How measured | Before | After | Notes (before) |
|---|--------|-------------|:------:|:-----:|-------|
| 8.1 | Stat specificity & attribution | Numbers tied to named sources | 4 | | Mitch/Jonathan/Deckworks attributed; cohort stats precise |
| 8.2 | Operator proof depth | Profiles, quotes, audited rosters | 4 | | 9 profiles + 18-row roster; split across two pages dilutes it |
| 8.3 | Press/credibility placement | Press visible beyond /about | 2 | | "400+ outlets" + 5 links live only on /about, which isn't in the nav |
| 8.4 | Guarantee prominence | Guarantee visible at decision points | 3 | | Strong on home/system; absent on apply where the decision happens |
| 8.5 | Cross-page number coherence | No contradicting claims | 3 | | FAQ's 92%/$11.4K vs 83%/$32.4K elsewhere; "19 open" vs "12 of 24 slots" needs one framing |

## Totals

| Category | Before | After |
|----------|:------:|:-----:|
| 1. Conversion & CTA | 9/25 | |
| 2. Information architecture | 11/25 | |
| 3. Copy & messaging | 18/25 | |
| 4. Visual design & motion | 7/25 | |
| 5. SEO & structured data | 18/25 | |
| 6. Accessibility | 9/25 | |
| 7. Performance | 14/25 | |
| 8. Trust & proof | 16/25 | |
| **Total** | **102/200** | |
