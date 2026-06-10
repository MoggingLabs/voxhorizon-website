# Website Scorecard

A graded audit of the VoxHorizon website, scored **before** the v2 redesign
(2026-06-10, `main` at the time of the audit) and **after** it (the
`redesign-v2` integration branch, same day). Forty metrics across eight
categories, each scored **0–5**:

- **0–1** — absent or broken
- **2** — present but weak
- **3** — solid baseline, no differentiation
- **4** — strong, intentional
- **5** — best-in-class, nothing left on the table

Re-run this audit after major changes; keep the rubric stable so scores stay
comparable. Measurement sources: code audit, `npm run build` route table,
manual Lighthouse runs (desktop + mobile) against the gated preview.

## 1. Conversion & CTA

| # | Metric | How measured | Before | After | Notes |
|---|--------|-------------|:------:|:-----:|-------|
| 1.1 | Primary CTA consistency | Same label/destination pattern across pages | 2 | 4 | "[Check my zip]" persistent in navbar + standard on closings; home/territory keep contextual variants by intent |
| 1.2 | CTA visible above the fold | Hero or persistent-nav CTA on every page | 2 | 4 | Navbar CTA on every page ≥640px; below that it moves into the mobile menu |
| 1.3 | Fallback path for hesitant visitors | Non-apply next step on the apply page | 0 | 5 | FAQ / handbook / email strip under the form |
| 1.4 | Urgency/scarcity presence | Cohort state (slots, close date) on funnel pages | 2 | 5 | CtaBlock + UrgencyMeta on every funnel page, nav crumb, footer apply block — all read `cohort` |
| 1.5 | Funnel depth | Clicks from any landing page to a submitted form | 3 | 4 | Territory zip rows deep-link `/apply?zip=` and the zip renders as form context |

## 2. Information architecture

| # | Metric | How measured | Before | After | Notes |
|---|--------|-------------|:------:|:-----:|-------|
| 2.1 | Orphaned pages | Pages unreachable from nav | 1 | 5 | Nav: System·Territory·Results·Industries·FAQ; footer sitemap covers the rest |
| 2.2 | Nav completeness vs. funnel | Funnel stages represented in primary nav | 2 | 5 | Proof (/results) in nav; /operators merged away |
| 2.3 | Content duplication | Sections repeated verbatim across pages | 2 | 4 | Taxonomy/guarantee canonical on /system; grid is one shared component; timeline intentionally on home (slim) + system (full) |
| 2.4 | Footer sitemap coverage | Share of public pages linked in footer | 1 | 5 | 4-column footer links every public page |
| 2.5 | URL/redirect hygiene | All historical URLs resolve correctly | 5 | 5 | /operators → /results 308, asserted by smoke:routes |

## 3. Copy & messaging

| # | Metric | How measured | Before | After | Notes |
|---|--------|-------------|:------:|:-----:|-------|
| 3.1 | Single content source | Copy/data instances hard-coded outside lib/content.ts | 2 | 4 | Cohort, metrics, territory, operators, feed, nav/footer centralized; long-form handbook prose stays in-page by design |
| 3.2 | Voice consistency | "Receipts not impressions" specificity throughout | 5 | 5 | Preserved |
| 3.3 | Page-purpose clarity | One clear job per page | 3 | 5 | home=funnel, system=mechanism, results=proof, territory=scarcity, faq=objections |
| 3.4 | Number consistency | Same stat identical everywhere it appears | 3 | 4 | FAQ 92%/$11.4K contradiction fixed; urgency derives from one cohort object; "19 zips open" vs "12 slots" kept as distinct-but-coherent framings |
| 3.5 | Metadata quality | Unique title/description/canonical per route | 5 | 5 | Preserved; /results metadata covers the merged scope |

## 4. Visual design & motion

| # | Metric | How measured | Before | After | Notes |
|---|--------|-------------|:------:|:-----:|-------|
| 4.1 | Typographic scale | Fluid, hierarchical scale across breakpoints | 2 | 5 | `clamp()` scale via the `.v2` scope on all pages |
| 4.2 | Page differentiation | Distinct signature element per page | 2 | 4 | Data hero / TOC handbook / interactive map / ledger / form-first apply |
| 4.3 | Motion coverage | Entrance/scroll/value animation where it adds meaning | 1 | 5 | Reveals, staggers, count-ups, cycling live feed, marquee ticker, page-enter, step transition |
| 4.4 | Micro-interaction polish | Hover/focus/active states on interactive elements | 2 | 5 | Card lift, grid hover + terminal readout, choice/flyout/disclosure states |
| 4.5 | Reduced-motion compliance | prefers-reduced-motion respected | 0 | 5 | MotionConfig + useReducedMotion + CSS media wraps on every loop |

## 5. SEO & structured data

| # | Metric | How measured | Before | After | Notes |
|---|--------|-------------|:------:|:-----:|-------|
| 5.1 | JSON-LD coverage | Organization / FAQPage / Service schemas | 0 | 4 | All three live and verified in prerendered HTML; no review/aggregate schema (needs real review data) |
| 5.2 | Sitemap accuracy | sitemap.ts matches live routes + priorities | 4 | 5 | /operators removed with the redirect |
| 5.3 | Canonical/redirect hygiene | Canonicals on all pages, no chains | 5 | 5 | Preserved |
| 5.4 | Title/description uniqueness | No duplicates across routes | 5 | 5 | Preserved |
| 5.5 | Semantic landmarks & headings | One h1/page, header/nav/main/footer | 4 | 5 | Skip link, labeled navs, FAQ accordion off inline styles |

## 6. Accessibility

| # | Metric | How measured | Before | After | Notes |
|---|--------|-------------|:------:|:-----:|-------|
| 6.1 | Contrast (worst text token) | WCAG AA on darkest text/surface pair | 2 | 4 | --c-quiet retired for text; --c-mute (≈4.3:1) still used at small uppercase sizes — monitor |
| 6.2 | Skip link & landmarks | Skip-to-content + labeled landmarks | 2 | 5 | Skip link + aria-labeled navs |
| 6.3 | Keyboard operability | Tab through nav, grid, accordions, forms | 2 | 4 | Mobile menu (Escape, scroll lock), flyout button with aria-expanded; grid is a described image with the zip table as the actionable view |
| 6.4 | Focus visibility | Visible focus indicator on all interactive elements | 1 | 5 | Global :focus-visible cyan ring |
| 6.5 | Form error semantics | aria-invalid/aria-describedby wiring | 2 | 5 | role=alert errors wired to inputs |

## 7. Performance

| # | Metric | How measured | Before | After | Notes |
|---|--------|-------------|:------:|:-----:|-------|
| 7.1 | First-load JS per route | `npm run build` route table | 4 | 4 | Shared 102 kB unchanged; /apply 119→149 kB (framer on the interactive route) — within the ≤40 kB budget |
| 7.2 | Font payload | Families × weights actually used | 2 | 4 | 5 families → 3 (all used); weight trimming possible later |
| 7.3 | LCP (Lighthouse, mobile) | Gated preview, throttled | 3 | 4* | Text hero, fewer fonts; *confirm with Lighthouse on the deployed preview |
| 7.4 | CLS | Lighthouse | 4 | 4* | All motion is transform/opacity (no layout shift); *confirm on preview |
| 7.5 | Image pipeline readiness | next/image usage + placeholder system | 1 | 4 | Photo component honors photosReady (live on /about); real photos still pending |

## 8. Trust & proof

| # | Metric | How measured | Before | After | Notes |
|---|--------|-------------|:------:|:-----:|-------|
| 8.1 | Stat specificity & attribution | Numbers tied to named sources | 4 | 4 | Preserved |
| 8.2 | Operator proof depth | Profiles, quotes, audited rosters | 4 | 5 | One canonical ledger page: stats + cases + 9 profiles + roster + liaison |
| 8.3 | Press/credibility placement | Press visible beyond /about | 2 | 4 | Footer brand column carries the 400+ line site-wide; /about reachable from footer |
| 8.4 | Guarantee prominence | Guarantee visible at decision points | 3 | 5 | Home closing eyebrow, apply section label, system mechanics |
| 8.5 | Cross-page number coherence | No contradicting claims | 3 | 4 | FAQ fixed; cohort numbers single-sourced |

## Totals

| Category | Before | After |
|----------|:------:|:-----:|
| 1. Conversion & CTA | 9/25 | 22/25 |
| 2. Information architecture | 11/25 | 24/25 |
| 3. Copy & messaging | 18/25 | 23/25 |
| 4. Visual design & motion | 7/25 | 24/25 |
| 5. SEO & structured data | 18/25 | 23/25 |
| 6. Accessibility | 9/25 | 23/25 |
| 7. Performance | 14/25 | 20/25 |
| 8. Trust & proof | 16/25 | 22/25 |
| **Total** | **102/200** | **181/200** |

\* Performance LCP/CLS after-scores are code-audit estimates; confirm with
Lighthouse (desktop + mobile) against the gated preview after deploy and
update this table.

## Bundle table (after, `npm run build`)

| Route | First-load JS |
|---|---|
| Shared chunks | 102 kB |
| / (and content routes) | ~106 kB |
| /apply | 149 kB |

Remaining known gaps (tracked outside this redesign): real photography
(`photosReady` flip + assets), legal counsel review of /privacy and /terms,
live booking/Resend/GHL credentials, Lighthouse confirmation on preview.
