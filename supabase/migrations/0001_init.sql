-- VoxHorizon website — leads + bookings, namespaced `website_*` so they coexist
-- safely in a shared Supabase project. RLS locked down (deny-all; service role only).
-- Apply via Supabase MCP `apply_migration` or `supabase db push`.

-- ── Enums (guarded so the migration is re-runnable) ──────────────────────────
do $$ begin
  create type website_revenue_tier as enum
    ('under_50k','50k_100k','100k_250k','250k_500k','500k_plus');
exception when duplicate_object then null; end $$;

do $$ begin
  create type website_market_segment as enum ('kitchen_bath','roofing','decking');
exception when duplicate_object then null; end $$;

do $$ begin
  create type website_lead_status as enum
    ('new','contacted','booked','qualified','disqualified','won','lost');
exception when duplicate_object then null; end $$;

-- ── website_leads ────────────────────────────────────────────────────────────
create table if not exists public.website_leads (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),

  markets        website_market_segment[] not null,
  revenue_tier   website_revenue_tier not null,

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

  status         website_lead_status not null default 'new',
  ghl_contact_id text,
  ghl_synced_at  timestamptz,
  email_sent_at  timestamptz,
  notes          text,

  dedupe_key     text unique
);

create index if not exists website_leads_email_idx      on public.website_leads (email);
create index if not exists website_leads_created_at_idx  on public.website_leads (created_at desc);
create index if not exists website_leads_status_idx      on public.website_leads (status);

create or replace function public.website_set_updated_at()
returns trigger language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists website_leads_set_updated_at on public.website_leads;
create trigger website_leads_set_updated_at
  before update on public.website_leads
  for each row execute function public.website_set_updated_at();

-- ── website_bookings ─────────────────────────────────────────────────────────
create table if not exists public.website_bookings (
  id                uuid primary key default gen_random_uuid(),
  created_at        timestamptz not null default now(),
  lead_id           uuid references public.website_leads (id) on delete set null,
  provider          text not null,
  external_event_id text unique,
  scheduled_at      timestamptz,
  attendee_email    text,
  attendee_name     text,
  status            text not null default 'scheduled',
  raw_payload       jsonb
);

create index if not exists website_bookings_lead_id_idx on public.website_bookings (lead_id);

-- ── RLS — deny-all; service role bypasses RLS ────────────────────────────────
alter table public.website_leads    enable row level security;
alter table public.website_bookings enable row level security;
