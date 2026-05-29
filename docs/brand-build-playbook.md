# VoxHorizon — Brand & Website Build Playbook (Claude Design runbook)

The exact, in-order steps to build the entire brand and apply it everywhere using
**Claude Design** (claude.ai/design). For each step: **what to do**, the **prompt to
paste**, what to do with the **output**, and where to **hand back to Claude Code (me)**.

Two reference files this sequences: `brand-identity-prompts.md` (brand) and
`claude-design-prompts.md` (website sections). This playbook is the order to run them.

---

## Before you start (once)
- Go to **claude.ai/design** → create a project: **"VoxHorizon Brand."**
- Have handy: the **current logo** (for the "evolve" direction), any **inspiration
  screenshots**, and your **real project photos** (when ready).
- Operating rules every step: paste the brand context first in a new chat; iterate
  **broadly in chat** (palette, layout, directions) and **surgically with inline
  comments** (spacing, a curve, a color); **ask for SVG export** on logos/icons/motifs.

---

# PART A — Build the identity (do this first; it defines everything)

## STEP 1 — Strategy foundation
**PASTE:**
```
You are my brand strategist and identity designer. We are building the complete
brand identity for VoxHorizon — from scratch — used across website, email, social,
sales collateral, paid ads, and print. Keep the name "VoxHorizon."

THE BUSINESS: a premium lead-generation / growth-partner agency for established
home-improvement contractors (kitchen & bath remodelers $50K+/mo, plus roofing &
decking). We deliver exclusive, pre-qualified, pre-scheduled projects — not shared
leads. Differentiators: exclusivity, pre-qualified appointments, data + AI driven,
performance/ROI, territory scarcity. Featured across 400+ news outlets.

AUDIENCE: established contractors / owners — practical, results-driven, skeptical of
"marketing," want trust, proof, and a premium partnership (not a vendor).

PERSONALITY: confident, premium, authoritative, modern, trustworthy, a touch
futuristic ("horizon" = growth, looking forward). NOT loud, gimmicky, or cheap.

CONSTRAINTS: works on dark AND light; full-color, 1-color, and reversed; scales from
billboard to a 16px favicon; print-ready (CMYK/Pantone) and web-ready (HEX/RGB);
accessible (WCAG AA+).

DELIVERABLE: a one-page brand strategy brief (positioning, brand promise, 3–5
personality adjectives, audience snapshot, emotional goal, contrast vs shared-lead
platforms) PLUS a mood board with 3 distinct visual directions for me to react to.
```
**THEN:** read the brief; react in chat ("lean into direction 2's palette," "more
premium, less techy," etc.) until the strategy + mood feel right.

## STEP 2 — Explore 3 identity directions → pick one
**PASTE:**
```
Using the strategy above, design 3 distinct brand DIRECTIONS, each as its own brand
board so I can compare and choose (or blend):
- A "Evolve the Horizon": refine the current sunrise/horizon concept (circular sun
  with banded horizon lines, cyan→indigo) into something more premium and ownable.
- B "Fresh geometric mark": a new abstract/geometric symbol for growth, exclusivity,
  momentum (no sunset cliché).
- C "Editorial wordmark/monogram": a type-led identity (custom VOX HORIZON wordmark +
  a V/VH monogram) with a minimal symbol.
For EACH: a name + one-line rationale, logo concept, 5–6 color swatches, a type
pairing, a graphic motif, and ONE application mockup (website hero or business card).
Keep all three genuinely different.
```
**THEN:** choose one (or blend): tell Claude *"Take Direction X forward; bring the
[palette/type/motif] from Y."* Everything below uses the chosen direction.

## STEP 3 — Logo system
**PASTE:**
```
Take the chosen direction and build the full LOGO SYSTEM, on dark and light:
primary lockup, horizontal + stacked, standalone mark/app-icon, standalone wordmark,
monogram + 16px favicon, monochrome (black/white) + reversed, 1-color + full-color.
Define clear-space, minimum sizes, a construction grid, and a "don'ts" panel. Show a
favicon-in-a-tab and app-icon test. EXPORT as SVG + PNG @1x/2x/3x + a favicon/app-icon
set. Clean, grid-based curves.
```
**THEN:** refine with inline comments; **export the SVGs + favicon set.**

## STEP 4 — Color system
**PASTE:**
```
Design the full COLOR SYSTEM: primary, secondary, accent; a neutral ramp (surfaces +
text) for BOTH dark and light; semantic colors (success/warning/error/info); the
signature gradient(s). For each color: name, HEX, RGB, HSL, CMYK + nearest Pantone.
Define usage ratios (60/30/10), pairings, and WCAG AA/AAA text-on-bg pairs. Output
the tokens as (1) CSS variables, (2) a Tailwind theme colors block, (3) a printable
swatch sheet.
```
**THEN:** **copy the CSS variables + Tailwind colors block** (you'll hand these to me).

## STEP 5 — Typography system
**PASTE:**
```
Design the TYPOGRAPHY SYSTEM: a display/heading typeface + a body typeface (optional
mono), with rationale and pairing rules; prefer typefaces with web AND print licenses
(note licensing). Give a modular type scale (display→caption) with size/line-height/
weight/tracking, heading-vs-body rules, and EMAIL-SAFE fallbacks. Show specimens on
dark + light. Output CSS + Tailwind font tokens + a one-page type-spec sheet.
```
**THEN:** **note the font names + scale + Tailwind font tokens.**

> ### 🔁 HANDOFF #1 → me (Claude Code)
> Send me: the **logo files (SVG + favicon)** + the **color tokens** + the **font
> names/tokens** from Steps 3–5. I'll enter plan mode, show you the exact re-skin of
> the live **voxhorizon.com**, and ship it on approval. You can keep going below in parallel.

## STEP 6 — Visual language
**PASTE:**
```
Define the VISUAL LANGUAGE: iconography style (stroke, corners, grid) with a ~12-icon
starter set (territory, appointment, growth, shield/exclusivity, AI, roof, kitchen,
deck, phone, check, star, chart); graphic motifs (horizon line, banded gradient,
momentum arc) and how to use them; background patterns/textures; photography art
direction (real remodel before/afters, crews, finished spaces) with a color-grade
recipe; and a data-viz style for results numbers. Export motifs + icons as SVG.
```

## STEP 7 — Voice & messaging
**PASTE:**
```
Define the BRAND VOICE & MESSAGING: 3–5 voice attributes + a tone spectrum with
do/don't lines (anchor: confident & premium, proof-led, no hype/ALL-CAPS); 5 tagline
options; boilerplate in 3 lengths (one-liner, 50 words, 100 words); core value props;
an offer/program naming convention; and sample on-brand copy for a website hero, a
cold email, a Meta ad, and a social post.
```

## STEP 8 — Brand guidelines book
**PASTE:**
```
Compile everything into a polished BRAND GUIDELINES document: cover, brand story &
strategy, logo system + rules + don'ts, color, typography, visual language, voice &
messaging, application examples, asset index. Clean premium layout. Export as PDF +
a shareable URL.
```
**THEN:** export the **PDF** — your master reference for everyone.

---

# PART B — Apply the brand everywhere (after identity is locked)

## STEP 9 — Website
Once Handoff #1 lands, I re-skin the existing site to the new brand automatically.
For any NEW or restyled sections: open `docs/claude-design-prompts.md`, new chat,
paste **Section 0** (I'll have updated its tokens to the new brand), then one section
prompt at a time → **send me the exported component** → I integrate + deploy.

## STEPS 10–15 — Collateral (one chat each; export, then send me anything web-bound)
- **10 Email** — paste Phase 7b from `brand-identity-prompts.md` (signature, newsletter, transactional, cold-outreach).
- **11 Social** — Phase 7c (avatar, covers, post/story templates).
- **12 Sales & offers** — Phase 7d (one-pager, offer sheet, pricing, proposal, case study).
- **13 Ads** — Phase 7e (Meta 1:1/4:5/9:16 + Google display).
- **14 Stationery** — Phase 7f (business card, letterhead, envelope).
- **15 Pitch deck** — Phase 7g (title→contact slide template).

---

## Handoff cheatsheet — what to send me, when
| When | Send me | I do |
|---|---|---|
| After Step 5 | Logo SVGs + favicon, color tokens, font names | Plan + re-skin live site to the new brand |
| Any website component you generate | The exported code (or handoff bundle) | Integrate into `components/`, deploy |
| Real project photos | Files (or drop in `public/images`) | Flip `photosReady`, wire them in |

## Operating rules (pin these)
1. New chat = paste the brand context first (Step 1 block) so it stays consistent.
2. One asset/section per chat — quality drops if you batch.
3. Attach references + your current logo; **ask for SVG** on anything vector.
4. Broad changes in chat; fine tweaks via inline comments on the canvas.
5. Lock the identity (Steps 1–5) before mass-producing collateral.
