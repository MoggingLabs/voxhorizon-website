# VoxHorizon Website

Marketing & lead-generation website for **VoxHorizon** — the growth partner for home-improvement contractors (kitchen & bath, roofing, decking).

Dark-premium, multi-page **Next.js (App Router) + TypeScript + Tailwind** site with a qualify→book conversion flow and a Supabase + Resend + GoHighLevel backend.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # start with LEAD_API_MODE=mock
npm run dev                  # http://localhost:3000
```

Scripts:

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm start` | Run the production build |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run email` | Preview React Email templates at :3030 |

---

## Environment

See `.env.example` for the full list. The key switch is **`LEAD_API_MODE`**:

- `mock` — `/api/lead` returns a canned success (no DB/email/CRM). Use this for frontend work.
- `live` — performs the real flow; requires `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` (and, to be useful, `RESEND_API_KEY` + `GHL_WEBHOOK_URL` + `NEXT_PUBLIC_BOOKING_URL`).

Secrets (no `NEXT_PUBLIC_` prefix) are server-only and must never be imported into a client component. `lib/supabase/admin.ts` and the email/GHL libs are protected with `import "server-only"`.

---

## Project structure & ownership

Two workstreams build in parallel against frozen contracts. Directories are disjoint, so merge conflicts are rare.

```
app/                     # routes, layout, SEO  (pages compose sections + wire data)
  api/lead/route.ts      # ← backend: validate → spam → insert → email + GHL
  api/booking-webhook/   # ← backend: provider booking events
components/
  ui/                    # ★ Claude Design: primitives (Button, Container, …)
  sections/              # ★ Claude Design: page sections (presentational only)
  forms/                 # ⚑ shared seam: QualifyingForm (UI) + ApplyFlow (orchestrator)
  booking/               # ⚑ shared seam: BookingEmbed
lib/                     # ☆ backend only: tokens, types, supabase, email, ghl, env, utils
  types/lead.ts          #   THE data contract (zod + LeadInput/LeadResult/QualifyingFormProps)
  design-tokens.ts       #   token source of truth (mirrors tailwind.config.ts)
public/                  # logo.png, mark.png, og-default.png
docs/claude-design-prompts.md  # master prompts for the Claude Design frontend workstream
```

### Parallel-work contract

1. **Frozen contracts** (do not change without updating both sides):
   - `lib/types/lead.ts` — `LeadInput`, `LeadResult`, enums, and `QualifyingFormProps`.
   - Tailwind token names — `font-display`, `bg-surface`, `bg-surface-elevated`, `border-surface-border`, `text-content-{primary,secondary,muted}`, `text-brand-{cyan,blue,indigo}`, `.text-gradient-brand`, `bg-gradient-brand`, `shadow-glow`.
2. **Frontend (Claude Design):** generate/refine `components/ui/**` and `components/sections/**` against those tokens. Build the form/booking flow against `LEAD_API_MODE=mock`. See `docs/claude-design-prompts.md`.
3. **Backend (Claude Code):** owns `lib/**`, `app/api/**`, and page data-wiring.
4. **Integration:** `app/apply/page.tsx` → `ApplyFlow` wires the real `QualifyingForm` to `/api/lead` → `BookingEmbed`. Flip `LEAD_API_MODE=live`.

Presentational rule: components in `ui/` and `sections/` take props in and return JSX — no `fetch`, no `process.env`, no Supabase imports.

---

## Backend flow

`POST /api/lead`: parse → zod-validate → spam checks (honeypot silent-drop, IP rate-limit, optional hCaptcha) → idempotent insert into Supabase `leads` (dedupe key) → best-effort side effects (Resend notification + GoHighLevel webhook; failures are logged/flagged, never block the user) → returns `{ ok, leadId, bookingUrl }`.

Supabase has RLS enabled with **no public policies** — all writes go through the server route using the service-role key. Apply the schema in `supabase/migrations/0001_init.sql`.

---

## Deploy (Vercel → www.voxhorizon.com)

1. Push to GitHub, import to Vercel.
2. Set env vars (Production + Preview); `LEAD_API_MODE=live` in Production; `NEXT_PUBLIC_SITE_URL=https://www.voxhorizon.com`.
3. Add the domain `www.voxhorizon.com` (+ apex → www redirect).
4. Verify the Resend sender domain (`voxhorizon.com`) with SPF/DKIM.
5. Promote to production.

---

## Brand

Dark premium. Sky-cyan `#38B0E3` → blue `#1E63C8` → deep indigo `#2E2A8C` on near-black navy `#0A0E1A`. Headings: Space Grotesk. Body: Inter. Logo: a sunrise/horizon disc + "VOX / HORIZON" wordmark.
