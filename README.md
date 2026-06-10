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
app/                     # routes, layout, SEO  (pages compose .vh-* markup + wire data)
  api/lead/route.ts      # ← backend: validate → spam → insert → email + GHL
  api/booking-webhook/   # ← backend: provider booking events
  api/gate/route.ts      # ← temporary preview gate (pairs with middleware.ts)
  voxhorizon.css         # Carbon Trader design system — all .vh-* classes
components/
  sections/              # global chrome: Navbar (ticker + topbar), Footer, IndustryLayout
  forms/                 # ⚑ shared seam: QualifyingForm (UI) + ApplyFlow (orchestrator)
  booking/               # ⚑ shared seam: BookingEmbed
lib/                     # ☆ backend only: content, types, supabase, email, ghl, env, utils
  content.ts             #   central page copy + photosReady switch
  types/lead.ts          #   THE data contract (zod + LeadInput/LeadResult/QualifyingFormProps)
middleware.ts            # temporary preview gate (delete with app/api/gate to go public)
public/                  # logo.png, mark.png, og-default.png; real photos land in public/images/
docs/frontend-design-prompts.md  # frontend prompt pack and visual direction archive
docs/launch-assets.md          # launch content/photo inventory
```

### Parallel-work contract

1. **Frozen contracts** (do not change without updating both sides):
   - `lib/types/lead.ts` — `LeadInput`, `LeadResult`, enums, and `QualifyingFormProps`.
   - The Carbon Trader design system — `.vh-*` classes in `app/voxhorizon.css` (imported in `app/layout.tsx` **after** `globals.css`; keep that order so its body rules win the cascade).
2. **Frontend:** pages and `components/sections/**` are pure `.vh-*` markup. Build the form/booking flow against `LEAD_API_MODE=mock`. See `docs/frontend-design-prompts.md`.
3. **Backend:** owns `lib/**`, `app/api/**`, and page data-wiring.
4. **Integration:** `app/apply/page.tsx` → `ApplyFlow` wires the real `QualifyingForm` to `/api/lead` → `BookingEmbed`. Flip `LEAD_API_MODE=live`.

Presentational rule: components in `sections/` take props in and return JSX — no `fetch`, no `process.env`, no Supabase imports.

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

### Rollback

Every deploy pushes two tags to GHCR: `latest` and the commit SHA. To roll
back, pin the stack to the last known-good SHA on the VPS:

```bash
ssh <user>@<vps>
cd /opt/voxhorizon-website
# point the web service image at ghcr.io/mogginglabs/voxhorizon-website:<good-sha>
# (edit docker-compose.yml, or the tag variable in .env if parameterized)
docker compose pull web
docker compose up -d web
docker compose ps        # wait for (healthy)
```

Re-deploying forward later restores `latest`. Notes:

- The health check is `curl http://localhost:3000/` inside the container; the
  preview gate intentionally answers HTTP 200 there, so the gate never turns
  the stack unhealthy.
- The deploy job's SSH step occasionally fails with a transient
  `dial tcp :22: i/o timeout`; `gh run rerun <run-id> --failed` recovers it —
  nothing on the VPS needs fixing.

### Pre-launch operations

- Set `LEAD_API_MODE=live` only in the VPS runtime env.
- Set `NEXT_PUBLIC_SITE_URL=https://www.voxhorizon.com` at build/deploy time.
- Verify the Resend sender domain (`voxhorizon.com`) with SPF/DKIM.
- Confirm the GoHighLevel booking URL and webhook before sending live traffic.
- Lift the preview gate: delete `middleware.ts` and `app/api/gate/route.ts`,
  then redeploy.

---

## Brand — "Carbon Trader"

Dark trading-terminal aesthetic. Deep navy surfaces (`#08182A` / `#060F1E`),
bone/sage foreground text, signal cyan `#51B8DC` for accents and amber
`#FFB23F` for alerts. Workhorse type: IBM Plex Mono; display: IBM Plex Sans;
Instrument Serif (italic) for editorial emphasis. Chrome includes a live
ticker, scanline overlay, and audit-log styling. The full system lives in
`app/voxhorizon.css` (`.vh-*` classes) and is documented on the `/brand` page.
Logo: a sunrise/horizon disc + "VOX / HORIZON" wordmark.
