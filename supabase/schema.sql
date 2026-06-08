create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  country text not null,
  whatsapp text not null,
  preferred_month text not null,
  service_type text not null,
  message text,
  status text not null default 'new',
  source text,
  gclid text,
  language text,
  ip_country text,
  constraint leads_status_check check (
    status in (
      'new',
      'contacted',
      'consulting',
      'booked',
      'paid',
      'completed',
      'closed'
    )
  )
);

alter table public.leads enable row level security;

revoke all on table public.leads from anon, authenticated;
grant insert (
  name,
  country,
  whatsapp,
  preferred_month,
  service_type,
  message,
  status,
  source,
  gclid,
  language,
  ip_country
) on public.leads to anon;
grant select on public.leads to authenticated;
grant update (status) on public.leads to authenticated;

drop policy if exists "Allow anonymous lead insert" on public.leads;
create policy "Allow anonymous lead insert"
on public.leads
for insert
to anon
with check (status = 'new');

drop policy if exists "Authenticated users can read leads" on public.leads;
create policy "Authenticated users can read leads"
on public.leads
for select
to authenticated
using (true);

drop policy if exists "Authenticated users can update leads" on public.leads;
create policy "Authenticated users can update leads"
on public.leads
for update
to authenticated
using (true)
with check (
  status in (
    'new',
    'contacted',
    'consulting',
    'booked',
    'paid',
    'completed',
    'closed'
  )
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_country_idx on public.leads (country);
create index if not exists leads_language_idx on public.leads (language);
