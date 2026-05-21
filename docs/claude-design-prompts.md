# VoxHorizon — Claude Design Prompt Pack ($10k editorial redesign)

Direction: **Editorial & Confident** (Stripe / Mintlify / Linear-dark / Vercel).
Tool: **Claude.ai web (Design / Artifacts)**. Output: **Next.js + TypeScript +
Tailwind** components that drop into this repo.

---

## How to use (do this for each section)

1. New chat in Claude Design. **Paste Section 0 (Brand Foundation) first** — every time.
2. Paste **one** section prompt below. One section per chat = far better quality.
3. Iterate visually ("more whitespace", "tighten the headline tracking", "add a subtle reveal").
4. When happy, copy the component code into the matching file in `components/sections/`
   (or `components/ui/`) — **keep the same file name, export name, and props.**
5. Commit on the **`redesign`** branch (the live site stays on `main` until we cut over).

**Quality bar already in the repo:** `components/sections/Hero.tsx` is built to the
target standard (editorial layout, staggered entrance, scroll parallax, animated
proof card). Open it / screenshot it and tell Claude Design: *"Match the polish,
motion, depth, and structure of this Hero."*

**Motion + helpers already in the repo** (import them, don't recreate):
- `@/components/ui/Reveal` → `<Reveal>` and `<RevealGroup>` (scroll reveals)
- `@/components/ui/AnimatedNumber` → `<AnimatedNumber value={170000} prefix="$" />`
- `framer-motion` is installed.
- Copy lives in `@/lib/content.ts` — design around the real words.

---

## Token contract — use ONLY these (already wired in Tailwind)

- Surfaces: `bg-surface` (#0A0E1A page), `bg-surface-elevated` (#111726 cards)
- Borders: `border-surface-border` (#1E2536 hairline)
- Text: `text-content-primary` / `text-content-secondary` / `text-content-muted`
- Brand: `text-brand-cyan` / `brand-blue` / `brand-indigo`
- Gradient: `bg-gradient-brand`, `.text-gradient-brand` (gradient headline words),
  gradient border = wrap in `bg-gradient-brand p-px` → inner `bg-surface-elevated`
- Glow: `shadow-glow`, `shadow-glow-lg`
- Fonts: headings `font-display` (Space Grotesk, tight tracking); body `font-sans` (Inter)

## Image slots (real photos)

Drop files in `/public/images/` per `public/images/README.md`, then use
`next/image`. Each section prompt notes which photo it needs.

## Integration contract (don't break these)

- Section components are **presentational**: props in, JSX out. No fetch, no env.
- The form's props are **frozen** in `@/lib/types/lead.ts` (`QualifyingFormProps`,
  `LeadInput`, `LeadResult`). The Apply flow already works against `LEAD_API_MODE=mock`.

---

## SECTION 0 — Brand Foundation (paste FIRST, every chat)

```
You are designing the frontend for VoxHorizon, a premium lead-generation agency
for home-improvement contractors (kitchen & bath, roofing, decking). Output a
single Next.js (App Router) + TypeScript + Tailwind presentational component —
props in, JSX out, no data fetching. Mark it "use client" only if it uses motion.

ART DIRECTION — "editorial & confident". Quality bar: Stripe, Mintlify, Linear
(dark), Vercel. Strong typographic hierarchy and dramatic scale contrast,
generous whitespace, calm and content-rich (not a loud funnel), crisp hairline
dividers, real photography treated as the hero of each section, restrained
tasteful motion only. Dark, premium, with depth — layered surfaces, hairline
borders, soft cyan glow, gradient borders. Never a generic AI/template look.

USE ONLY THESE TAILWIND TOKENS (already configured): bg-surface,
bg-surface-elevated, border-surface-border, text-content-primary/secondary/muted,
text-brand-cyan/blue/indigo, bg-gradient-brand, .text-gradient-brand (for gradient
headline words), shadow-glow / shadow-glow-lg. Headings: font-display (tight
tracking, large). Body: font-sans. Eyebrows: uppercase, letter-spacing ~0.16em.

MOTION: import and use { Reveal, RevealGroup } from "@/components/ui/Reveal" for
scroll-in reveals, and { AnimatedNumber } from "@/components/ui/AnimatedNumber"
for stats. framer-motion is available. Keep motion subtle, run once, ease
[0.21,0.47,0.32,0.98]. Respect prefers-reduced-motion.

IMAGES: use next/image (import Image from "next/image") with paths under
/images/… as I specify. Always set alt, sizes, and object-cover.

CONSTRAINTS: mobile-first responsive; semantic HTML; visible focus states; AA
contrast; consistent 4/8px spacing scale. Match the polish/structure of the
existing Hero in components/sections/Hero.tsx.
```

---

## Section prompts

### 1) Hero — ✅ already built (reference)
Use `components/sections/Hero.tsx` as the standard. To swap in the real photo,
drop `/public/images/hero.jpg` and replace the gradient block with the
`<Image>` shown in the file's comment.

### 2) TrustStrip (`components/sections/TrustStrip.tsx`)
```
Build TrustStrip: a slim band under the hero. An eyebrow "Recognized by
industry-leading media", then a refined, evenly-spaced row of press names
(Benzinga, Barchart, The Globe and Mail, Chronicle Journal, NewsChannel
Nebraska) + a "400+ news sites" pill. On desktop, a slow infinite marquee;
on mobile, wrap. Muted by default, brand-cyan on hover. Hairline top+bottom
border. Keep it understated — this is supporting evidence, not a headline.
Props: accept items: {name,href}[].
```

### 3) HowItWorks (`components/sections/HowItWorks.tsx`)
```
Build HowItWorks: an editorial 3-step section. Eyebrow "How it works", a strong
font-display section title, and three numbered steps with large gradient numerals
(.text-gradient-brand), a thin connecting line between them on desktop, each on a
bg-surface-elevated card with a hairline border and a subtle hover lift. Steps
(title + 2-line body): (1) We map your exclusive territory; (2) Our data + AI
engine finds high-intent local homeowners; (3) Pre-qualified appointments land on
your calendar. Wrap items in <RevealGroup>/<Reveal>. Accept steps[] prop.
```

### 4) ResultsHighlights (`components/sections/ResultsHighlights.tsx`)
```
Build ResultsHighlights: the proof section. A row of 4 stat tiles using
<AnimatedNumber> for the figures ($170,000; 100; plus the lead→appointment
ratios as styled text), each with a muted caption and first-name attribution.
Below, 2 editorial case-study cards pairing a project photo (next/image:
/images/results-1.jpg and /images/results-2.jpg, object-cover, rounded, gradient
border) with the outcome headline + a sentence. Quiet confidence, no exclamation
marks. Use <Reveal>. Accept stats[] and cases[] props. Add a small disclaimer
line: results are real partner outcomes; first names protect territory exclusivity.
```

### 5) Industries (`components/sections/Industries.tsx`)
```
Build Industries: eyebrow "Industries we serve", section title, then 3 linked
cards (Kitchen & Bath → /industries/kitchen-bath, Roofing → /industries/roofing,
Decking → /industries/decking). Each card: a project photo top (next/image:
/images/industry-kitchen-bath.jpg, -roofing.jpg, -decking.jpg, object-cover with
a dark gradient scrim), title over/under it, a one-line blurb, and an "Explore →"
affordance that animates on hover. Hairline borders, hover lift, gradient-border
on hover. <RevealGroup>. Accept industries[] prop.
```

### 6) Differentiators (`components/sections/Differentiators.tsx`)
```
Build Differentiators: an editorial "why us" section framed as VoxHorizon vs.
shared-lead platforms (Angi/HomeAdvisor). Either an elegant two-column comparison
(Exclusive & pre-qualified vs Shared & cold) or an alternating feature list:
exclusive not shared · pre-qualified & pre-scheduled · data + AI driven ·
performance/ROI · territory scarcity. Gradient accent ticks, hairline dividers,
lots of whitespace, strong type. <Reveal>. Accept items[] prop.
```

### 7) FounderBio (`components/sections/FounderBio.tsx`)
```
Build FounderBio: an editorial founder block. Square portrait (next/image:
/images/founder.jpg, rounded-2xl, gradient border) beside a large
pull-quote-style bio for Diogo Silva (Founder & CEO), an eyebrow "Founder", and a
line of press credibility. Calm, premium, magazine-like. <Reveal>. Accept
founder {name,role,bio} prop.
```

### 8) FAQAccordion (`components/sections/FAQAccordion.tsx`)
```
Build FAQAccordion ("use client"): an accessible accordion (aria-expanded,
keyboard), hairline-divided rows on bg-surface-elevated, smooth height/opacity
animation via framer-motion, a gradient "+" that rotates to "×". Centered,
max-w-3xl. Props: items: {q,a}[]; withHeading?: boolean. Questions cover lead
quality vs Angi/HomeAdvisor, exclusivity, who it's for, guarantee, speed, pricing.
```

### 9) Navbar (`components/sections/Navbar.tsx`)
```
Build Navbar ("use client"): sticky, transparent over the hero then
bg-surface/80 + backdrop-blur + hairline border after ~12px scroll. Logo left
(/logo.png via the existing Logo component), centered/right nav links, a primary
CTA button right with shadow-glow, animated mobile drawer. Refined, minimal,
Linear-like. Keep links from @/lib/content (nav, primaryCta).
```

### 10) Footer (`components/sections/Footer.tsx`)
```
Build Footer: a big editorial footer on bg-surface with a hairline top border.
Logo + tagline, columns (Company nav, Legal: Privacy/Terms), press mentions row,
a final CTA strip ("See if your territory is open"), and "© 2026 VoxHorizon".
Generous spacing, muted text, brand-cyan hovers.
```

### 11) IndustryLayout (`components/sections/IndustryLayout.tsx`)
```
Build IndustryLayout: a reusable per-vertical template accepting
{ industry, headline, subhead, heroImage, stats, bullets }. Editorial hero with
the vertical's photo (next/image, object-cover, gradient border), proof stat row
(<AnimatedNumber>), "why us for {trade}" checklist, and a CTA into /apply. Match
Hero quality. Used by /industries/kitchen-bath, /roofing, /decking.
```

### 12) Apply — QualifyingForm + BookingEmbed
```
Build QualifyingForm ("use client") to this EXACT prop interface (do not change):
{ defaultValues?: Partial<LeadInput>; onSubmit:(v:LeadInput)=>Promise<LeadResult>;
isSubmitting:boolean; fieldErrors?:Record<string,string> } with LeadInput =
{ markets:('kitchen_bath'|'roofing'|'decking')[]; revenueTier:'under_50k'|
'50k_100k'|'100k_250k'|'250k_500k'|'500k_plus'; fullName:string; company?:string;
email:string; phone:string }. Import types from "@/lib/types/lead". Premium
multi-step feel: market chips, revenue tier as segmented cards (de-emphasize
under_50k), polished inputs with focus glow, inline fieldErrors, a hidden honeypot
input named "honeypot", a confident submit ("Apply for a strategy call") with
loading state. Card on bg-surface-elevated, gradient border, max-w ~560px.
Also style BookingEmbed (a branded card around an iframe given bookingUrl, with a
graceful empty state). Keep ApplyFlow's form→booking step logic intact.
```

---

## Iteration cheatsheet

Feedback that works: "increase vertical rhythm 1.5×" · "tighten headline tracking
to -0.02em" · "make the section title 20% larger" · "add a slow aurora gradient
behind this" · "reveal the cards in sequence on scroll" · "use a gradient border
on the image, not a flat one" · "calm it down — fewer effects, more whitespace."

Pitfalls to forbid: generic AI/template layout, gradient overload, multiple accent
colors, inconsistent spacing, missing focus states, heavy/janky motion, images
without object-cover or alt.
