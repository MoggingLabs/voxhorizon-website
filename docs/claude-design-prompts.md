# Claude Design — Master Prompts (VoxHorizon)

Use these to generate/refine the **visual frontend** in Claude Design while the
backend is built in Claude Code. Output target: **Next.js App Router + TypeScript
+ Tailwind**, presentational components only.

**How to use:** paste **Prompt 0 (Master Brand)** first in every session, then add
the specific section prompt. Save generated files into `components/ui/**` or
`components/sections/**`. Keep them presentational — props in, JSX out; no
`fetch`, no `process.env`, no Supabase imports.

**Frozen token names (use these exact Tailwind classes):**
`font-display` · `font-sans` · `bg-surface` (#0A0E1A) · `bg-surface-elevated`
(#111726) · `border-surface-border` (#1E2536) · `text-content-primary` (#F5F7FA)
· `text-content-secondary` (#A8B2C5) · `text-content-muted` (#6B7689) ·
`text-brand-cyan` (#38B0E3) · `text-brand-blue` (#1E63C8) · `text-brand-indigo`
(#2E2A8C) · `bg-gradient-brand` · `.text-gradient-brand` · `shadow-glow`.

---

## 0) MASTER BRAND PROMPT (paste first, every session)

> You are designing the frontend for **VoxHorizon**, a premium lead-generation
> agency for home-improvement contractors (kitchen & bath remodelers $50K+/mo;
> roofing & decking too). Output **Next.js App Router + TypeScript + Tailwind**
> presentational React components only — props in, JSX out; no data fetching, no
> env, no backend imports. Mark interactive components `"use client"`.
>
> **Aesthetic:** dark, premium, spacious, confident, slightly futuristic
> ("horizon / growth"). Quality bar: Skale, Graphite, Linear, Vercel. Generous
> whitespace, large type, restrained motion (subtle fade/parallax on scroll),
> crisp hairline borders, soft cyan glow accents. Never look like a generic
> template or a loud "marketing funnel".
>
> **Use these exact Tailwind tokens (already configured):** backgrounds
> `bg-surface` (page) and `bg-surface-elevated` (cards); borders
> `border-surface-border`; text `text-content-primary|secondary|muted`; accents
> `text-brand-cyan` (+ `brand-blue`, `brand-indigo`); brand gradient
> `bg-gradient-brand` (135°, cyan→blue→indigo) and `.text-gradient-brand` for
> gradient headline words; `shadow-glow` for cyan glow.
>
> **Typography:** headings `font-display` (Space Grotesk), bold, tight tracking;
> body `font-sans` (Inter). Eyebrow labels: uppercase, wide tracking, brand-cyan.
>
> **Brand mark:** circular sunrise/horizon disc (cyan→indigo banded gradient) +
> "VOX" (cyan) / "HORIZON" (thin wide-tracked caps). Use `/logo.png` (full, dark)
> and `/mark.png` (disc) from `public/`.
>
> **Voice:** confident & premium. Specific, proof-led, calm authority. Lead with
> outcomes and exclusivity. No ALL-CAPS, no "NOW!", no exclamation spam.
>
> **Constraints:** mobile-first; accessible (semantic HTML, focus states, AA
> contrast); content via props where reasonable. Primitives → `components/ui/`,
> sections → `components/sections/`.

---

## 1) Home — Hero

> Build `components/sections/Hero.tsx`. Full-width dark hero on `bg-surface` with
> a subtle radial cyan glow and a faint horizon-line motif echoing the logo.
> Eyebrow ("The Remodeler Growth Partner"), an H1 where one phrase uses
> `.text-gradient-brand`, a one-line subhead, a primary CTA ("See if your
> territory is open" → /apply) + secondary link ("View results" → /results), and
> a small trust line ("Featured in Benzinga, Barchart, The Globe and Mail + 400
> news sites"). Headline: "Predictable, exclusive remodeling projects — booked on
> your calendar, not bought from a shared pool." Accept props for
> eyebrow/headline/subhead/ctaLabel/ctaHref.

## 2) Home — How It Works (3 steps)

> Build `components/sections/HowItWorks.tsx`: a 3-step process (stack on mobile)
> on `bg-surface` with `bg-surface-elevated` cards, numbers in
> `.text-gradient-brand`, and a connecting hairline. Steps: (1) We map your
> exclusive territory & ideal project; (2) Our data+AI engine puts your offer in
> front of high-intent local homeowners; (3) Pre-qualified appointments land on
> your calendar. Each card: icon, title (`font-display`), 2-line description.
> Accept a `steps[]` prop.

## 3) Home — Results highlights

> Build `components/sections/ResultsHighlights.tsx`: a band of stat cards with
> large gradient numbers (`.text-gradient-brand`) and muted captions. Data
> (anonymized, real): "$170,000 in new jobs in 60 days — Mitch"; "100 qualified
> appointments in 60 days — Jonathan"; "53 → 35 leads to remodel appointments in
> 30 days"; "263 → 134 leads to reroof appointments in 3 months". Accept
> `stats[]`. Quiet confidence, no exclamation marks.

## 4) Home — Industries + Differentiators

> Build `components/sections/Industries.tsx` (3 linked cards: Kitchen & Bath →
> /industries/kitchen-bath, Roofing → /industries/roofing, Decking →
> /industries/decking; each icon, title, blurb) and
> `components/sections/Differentiators.tsx` (exclusive not shared · pre-qualified
> & pre-scheduled · data + AI driven · performance/ROI · territory scarcity) as
> an alternating feature list with gradient accents.

## 5) Apply — Qualifying form

> Build `components/forms/QualifyingForm.tsx` as a `"use client"` presentational
> form matching this EXACT prop interface (do not change it):
> `{ defaultValues?: Partial<LeadInput>; onSubmit: (values: LeadInput) =>
> Promise<LeadResult>; isSubmitting: boolean; fieldErrors?: Record<string,string> }`
> where `LeadInput = { markets: ('kitchen_bath'|'roofing'|'decking')[];
> revenueTier: 'under_50k'|'50k_100k'|'100k_250k'|'250k_500k'|'500k_plus';
> fullName: string; company?: string; email: string; phone: string }`. Fields:
> multi-select market chips; revenue tier as segmented radio cards (visually
> de-emphasize `under_50k`); name, company (optional), email, phone. Include a
> hidden honeypot input named `honeypot`. Premium dark styling, focus glow,
> inline `fieldErrors`, prominent submit ("Apply for a strategy call") with
> loading state. Card on `bg-surface-elevated`, max-width ~560px, centered.
> (Import the types from `@/lib/types/lead`.)

## 6) Apply — Booking step + ApplyFlow shell

> Build `components/booking/BookingEmbed.tsx` (a `"use client"` wrapper taking
> `bookingUrl: string` and rendering a responsive iframe inside a branded dark
> card with a "Pick a time" heading + reassurance copy; show a graceful fallback
> when `bookingUrl` is empty) and the visual shell of
> `components/forms/ApplyFlow.tsx` showing Step 1 (form) then Step 2 (booking)
> with a subtle progress indicator. Leave the submit handler as injected logic —
> the backend wires `onSubmit` to POST `/api/lead`.

## 7) Industry page template

> Build `components/sections/IndustryLayout.tsx` accepting
> `{ industry, headline, subhead, stats, bullets }` so
> `/industries/kitchen-bath|roofing|decking` each render a vertical-specific dark
> hero, proof stats, "why us for {trade}" bullets, and a CTA into /apply.

## 8) Nav, Footer, FAQ, Founder

> Build `components/sections/Navbar.tsx` (sticky, transparent → `bg-surface/80`
> blur on scroll, logo left, links + a CTA button right, mobile drawer);
> `components/sections/Footer.tsx` (logo, nav, "© 2026 VoxHorizon", privacy/terms
> links, press mentions); `components/sections/FAQAccordion.tsx` (accessible
> accordion, accepts `items[]`); and `components/sections/FounderBio.tsx` (Diogo
> Silva, photo slot, credibility + press). All dark-premium on the token system.

---

## Notes for integration

- These components already exist in working form (Claude Code built functional
  versions). Treat the Claude Design output as a **visual upgrade** — keep the
  same file paths, exported names, and props so pages keep composing them.
- After regenerating a component, run `npm run dev` and check it against the live
  pages. Run `npm run typecheck` to confirm the contracts still line up.
