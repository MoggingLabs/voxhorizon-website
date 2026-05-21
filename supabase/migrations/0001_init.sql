-- VoxHorizon — initial schema: leads + bookings with RLS locked down.
-- Apply via Supabase MCP `apply_migration` or `supabase db push`.

-- ── Enums ────────────────────────────────────────────────────────────────────
create type revenue_tier as enum (
  'under_50k',
  '50k_100k',
  '100k_250k',
  '250k_500k',
  '500k_plus'
);

create type market_segment as enum (
  'kitchen_bath',
  'roofing',
  'decking'
);

create type lead_status as enum (
  'new',
  'contacted',
  'booked',
  'qualified',
  'disqualified',
  'won',
  'lost'
);

-- ── leads ────────────────────────────────────────────────────────────────────
create table public.leads (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),

  markets        market_segment[] not null,
  revenue_tier   revenue_tier not null,

  full_name      text not null,
  company        text,
  email          text not null,
  phone          text not null,

  source_page    text,
  referrer       text,
  utm_source     text,
  utm_medium     text,
  utm_campaign   text,
  utm_term       text,
  utm_content    text,

  status         lead_status not null default 'new',
  ghl_contact_id text,
  ghl_synced_at  timestamptz,
  email_sent_at  timestamptz,
  notes          text,

  dedupe_key     text unique
);

create index leads_email_idx      on public.leads (email);
create index leads_created_at_idx on public.leads (created_at desc);
create index leads_status_idx     on public.leads (status);

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger leads_set_updated_at
  before update on public.leads
  for each row execute function public.set_updated_at();

-- ── bookings ─────────────────────────────────────────────────────────────────
create table public.bookings (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  lead_id           uuid references public.leads (id) on delete set null,
  provider          text not null,
  external_event_id text unique,
  scheduled_at      timestamptz,
  attendee_email    text,
  attendee_name     text,
  status            text not null default 'scheduled',
  raw_payload       jsonb
);

create index bookings_lead_id_idx on public.bookings (lead_id);

-- ── RLS — lock everything; service role bypasses RLS ─────────────────────────
-- With RLS enabled and no permissive policy, anon/authenticated are denied all
-- access. Writes happen only through server routes using the service-role key.
alter table public.leads    enable row level security;
alter table public.bookings enable row level security;
