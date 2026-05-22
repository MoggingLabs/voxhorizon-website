# VoxHorizon Website

Marketing & lead-generation website for **VoxHorizon** — the growth partner for home-improvement contractors (kitchen & bath, roofing, decking).

Dark-premium, multi-page **Next.js (App Router) + TypeScript + Tailwind** site with a qualify→book conversion flow and a Supabase + Resend + GoHighLevel backend.

---

## Quick start

```bash
nvm use
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
| `npm run smoke:api` | Local/mock checks for `/api/lead` and `/api/booking-webhook` |
| `npm run email` | Preview React Email templates at :3030 |

---

## Environment

See `.env.example` for the full list. The key switch is **`LEAD_API_MODE`**:

- `mock` — `/api/lead` returns a canned success (no DB/email/CRM). Use this for frontend work.
- `live` — performs the real flow; requires `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY` (and, to be useful, `RESEND_API_KEY` + `GHL_WEBHOOK_URL` + `NEXT_PUBLIC_BOOKING_URL`).

Secrets (no `NEXT_PUBLIC_` prefix) are server-only and must never be imported into a client component. `lib/supabase/admin.ts` and the email/GHL libs are protected with `import "server-only"`.

Smoke tests are documented in `docs/smoke-tests.md`. They run in mock mode and
do not require Supabase, Resend, GoHighLevel, or production secrets.

---

## Project structure & ownership

Two workstreams build in parallel against frozen contracts. Directories are disjoint, so merge conflicts are rare.

```
app/                     # routes, layout, SEO  (pages compose sections + wire data)
  api/lead/route.ts      # ← backend: validate → spam → insert → email + GHL
  api/booking-webhook/   # ← backend: provider booking events
components/
  ui/                    # Frontend primitives (Button, Container, …)
  sections/              # Presentational page sections
  forms/                 # ⚑ shared seam: QualifyingForm (UI) + ApplyFlow (orchestrator)
  booking/               # ⚑ shared seam: BookingEmbed
lib/                     # ☆ backend only: tokens, types, supabase, email, ghl, env, utils
  types/lead.ts          #   THE data contract (zod + LeadInput/LeadResult/QualifyingFormProps)
  design-tokens.ts       #   token source of truth (mirrors tailwind.config.ts)
public/                  # logo.png, mark.png, og-default.png
docs/frontend-design-prompts.md  # frontend prompt pack and visual direction archive
docs/launch-assets.md          # launch content/photo inventory
```

### Parallel-work contract

1. **Frozen contracts** (do not change without updating both sides):
   - `lib/types/lead.ts` — `LeadInput`, `LeadResult`, enums, and `QualifyingFormProps`.
   - Tailwind token names — `font-display`, `bg-surface`, `bg-surface-elevated`, `border-surface-border`, `text-content-{primary,secondary,muted}`, `text-brand-{cyan,blue,indigo}`, `.text-gradient-brand`, `bg-gradient-brand`, `shadow-glow`.
2. **Frontend:** generate/refine `components/ui/**` and `components/sections/**` against those tokens. Build the form/booking flow against `LEAD_API_MODE=mock`. See `docs/frontend-design-prompts.md`.
3. **Backend:** owns `lib/**`, `app/api/**`, and page data-wiring.
4. **Integration:** `app/apply/page.tsx` → `ApplyFlow` wires the real `QualifyingForm` to `/api/lead` → `BookingEmbed`. Flip `LEAD_API_MODE=live`.

Presentational rule: components in `ui/` and `sections/` take props in and return JSX — no `fetch`, no `process.env`, no Supabase imports.

---

## Backend flow

`POST /api/lead`: parse → zod-validate → spam checks (honeypot silent-drop, IP rate-limit, optional hCaptcha) → idempotent insert into Supabase `leads` (dedupe key) → best-effort side effects (Resend notification + GoHighLevel webhook; failures are logged/flagged, never block the user) → returns `{ ok, leadId, bookingUrl }`.

Supabase has RLS enabled with **no public policies** — all writes go through the server route using the service-role key. Apply the schema in `supabase/migrations/0001_init.sql`.

---

## Deploy (GitHub Actions -> GHCR -> VPS Docker Compose -> Caddy)

The active production path is `.github/workflows/deploy-stack.yml`.

1. An approved push to `main` runs the deploy workflow for site source changes.
2. GitHub Actions builds the Docker image from `Dockerfile` with Node 22 and
   pushes `latest` plus the commit SHA tag to GHCR.
3. The deploy job SSHes to the VPS, runs `docker compose pull`, then
   `docker compose up -d --remove-orphans` from `/opt/voxhorizon-website`.
4. Runtime secrets come from the VPS Compose env file
   `/opt/voxhorizon-website/.env`; they are not baked into the image.
5. Caddy terminates TLS and routes `www.voxhorizon.com` to the Compose service.
6. The workflow verifies the web container health check before pruning old
   images.

Use `workflow_dispatch` only for an explicitly approved bootstrap or hotfix
deploy. Vercel is not the active deployment target for this repository.

Pre-launch operations:

- Set `LEAD_API_MODE=live` only in the VPS runtime env.
- Set `NEXT_PUBLIC_SITE_URL=https://www.voxhorizon.com` at build/deploy time.
- Verify the Resend sender domain (`voxhorizon.com`) with SPF/DKIM.
- Confirm the GoHighLevel booking URL and webhook before sending live traffic.

---

## Brand

Dark premium. Sky-cyan `#38B0E3` → blue `#1E63C8` → deep indigo `#2E2A8C` on near-black navy `#0A0E1A`. Headings: Space Grotesk. Body: Inter. Logo: a sunrise/horizon disc + "VOX / HORIZON" wordmark.
