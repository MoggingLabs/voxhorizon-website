# VoxHorizon — Unique Structure in Claude Design (step-by-step)

Goal: get a UNIQUE, editorial homepage **structure** (not the SaaS template stack)
out of Claude Design, on the "Imprint" brand. Work top to bottom.

---

## STEP 0 — Set up & attach context
- Open claude.ai/design → new project: "VoxHorizon Site Structure".
- Attach: a **screenshot of the current live voxhorizon.com** (so it knows what to
  beat), and (optional) link the GitHub repo `pveloso01/voxhorizon-website`.
- Keep these inspiration references handy to name in prompts (editorial/award, NOT
  SaaS): **Bloomberg Businessweek, Pentagram, Cosmos.so, Famous.so, Locomotive,
  Igloo Inc, Read.cv**.

## STEP 1 — Paste the BRAND context (first message)
```
BRAND — VoxHorizon "Imprint" system. Light, editorial, all-serif, premium, restrained.
Colors: page = Vapor #EFEBE2 (warm paper); cards = white #FFFFFF; ink = Carbon #15171C;
hairlines = Mist #D9D5CB; muted text = Steel #5E6470; single accent = Cobalt #2D4ADE
(the "pip" — used ONCE per view: a CTA, a link, an underline, a dot); rare accent =
Ember #C9633D (never a CTA).
Type: headings = Instrument Serif (weight 400, italic for emphasis, tight tracking,
can be oversized); body = Newsreader (serif); labels/eyebrows/marginalia = JetBrains
Mono (uppercase, tracked). Emphasis = italic cobalt only — never bold.
Logo: "VOX · HORIZON" wordmark + a cobalt pip (the pip is the favicon/mark).
Feel: a designed editorial DOCUMENT (dossier / broadsheet / ledger), NOT a SaaS app.
Hairline rules, asymmetry, oversized type, mono marginalia, generous whitespace.
No glows, no big gradients, no equal 3-card grids, no centered-everything.
Output target: Next.js + Tailwind components.
```

## STEP 2 — Paste the CONTENT (so it designs around substance)
```
CONTENT (real — design around this, keep all numbers):
Company: VoxHorizon — growth partner for established home-improvement operators
($50K+/mo): kitchen & bath remodelers, roofers, deck builders. Model: ONE operator
per ZIP code; exclusive, pre-qualified, pre-scheduled projects — not shared leads.
Data + AI matching. Featured across 400+ news outlets (Benzinga, Barchart, The
Globe and Mail).
Primary goal / CTA: "See if your territory is open" → qualify (markets served, avg
monthly revenue tier, name/company/email/phone) → book a strategy call.
Tagline: "The end of the shared lead."   Eyebrow: "Growth program · 2026 cohort".
3-step system: (1) We lock your territory + define the ideal project; (2) Data + AI
match high-intent homeowners and pre-qualify them on scope, budget, timeline;
(3) Vetted, pre-scheduled appointments hit your calendar — you show up and close.
Proof (first names only): "$170,000 in new jobs · first 60 days — Mitch";
"100 qualified appointments · 60 days — Jonathan"; "92% show rate";
"53 → 35 leads to remodel appointments · 30 days";
"263 → 134 leads to reroof appointments · 3 months".
Why us vs shared-lead platforms: exclusive (one operator/zip, not sold five-deep) ·
pre-qualified & pre-scheduled · matched to your close history · measured in SIGNED
WORK, not impressions · territory scarcity.
FAQ themes: how it differs from shared-lead platforms; what "exclusive territory"
means; who it's for; how results are measured (signed work); how fast appointments
show; pricing (covered on the call).
Founder: Diogo Silva — built VoxHorizon to end shared-lead auctions.
Voice: operator-to-operator, confident, proof-led, plain-spoken. No hype, no
ALL-CAPS, no exclamation marks.
```

## STEP 3 — Ask for 3 STRUCTURE concepts (wireframe level, no polish yet)
```
Don't design a typical SaaS landing page. Propose 3 DISTINCT homepage STRUCTURE
concepts at wireframe/IA level (low fidelity, no visual polish yet). For EACH give:
- a one-line concept/metaphor (lean into print/editorial: dossier, broadsheet,
  ledger, field report, index, marginalia, footnotes)
- the NAMED section order — unconventional; do NOT use hero→features→testimonials→CTA
- what makes the OPENING SCREEN unexpected (no centered headline + product shot)
- one signature or interactive moment (e.g. a "territory check", a running ledger
  of signed work, a numbered dossier index)
- how the qualify→book conversion is woven through the whole page
Reference the feel of Bloomberg Businessweek, Pentagram, Cosmos.so, Famous.so,
Locomotive — NOT SaaS templates. Use my brand + content above. Present the 3 as
labeled wireframes side by side so I can compare.
```
Seed ideas you can mention if you want to steer it: **The Field Report / Dossier**
(masthead cover, index strip, numbered "entries", mono marginalia, a results
"ledger", a "territory status" page) · **Territory as the spine** (everything hangs
off "one zip, one operator", opening on a territory-check) · **The Ledger**
(proof-first: the numbers ARE the hero, pitch second) · **Manifesto broadsheet**
(oversized opening statement, two-column editorial argument, pull quotes).

## STEP 4 — Choose / blend
```
Take Concept [X] forward. Pull [the territory-check opening / the ledger / etc.]
from Concept [Y]. Keep it editorial and asymmetric.
```

## STEP 5 — Build it section by section (repeat per section)
```
Now build the [SECTION NAME] from the chosen structure as a FULL-BLEED, ASYMMETRIC
editorial layout on the Imprint brand: oversized Instrument Serif, Newsreader body,
JetBrains-mono labels/marginalia, cobalt used once, hairline Mist rules, lots of
whitespace. Use the real content above. No centered-everything, no equal 3-card grid.
Output as a Next.js + Tailwind component.
```

## STEP 6 — Iterate (inline comments + chat)
Phrases that work: "break the grid / make it asymmetric" · "oversize the headline,
let it bleed off the edge" · "add mono marginalia in the left margin" · "this still
reads like a template — make it a magazine spread" · "one cobalt accent only on this
screen" · "more whitespace, fewer boxes" · "turn these cards into an indexed list /
a ledger".

## STEP 7 — Hand off to me
Claude Design → **Share → Handoff to Claude Code → Download**. Send me the bundle
(or say "it's in Downloads") and I'll rebuild the page to the new structure, wire it
to the live backend, and deploy — same as the rebrand.

Tip: do the homepage first; once we lock the structural language, the inner pages
(Results, About, Industries, Apply) inherit it quickly.
