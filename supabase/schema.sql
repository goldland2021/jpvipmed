create extension if not exists pgcrypto;

create table if not exists public.lead_rate_limits (
  bucket_start timestamptz not null,
  ip_hash text not null,
  request_count integer not null default 0,
  primary key (bucket_start, ip_hash)
);

create or replace function public.consume_lead_rate_limit(
  p_ip_hash text,
  p_limit integer default 5
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_bucket timestamptz := date_trunc('minute', now());
  v_count integer;
begin
  if p_limit < 1 then
    raise exception 'Invalid lead rate limit';
  end if;

  delete from public.lead_rate_limits
  where bucket_start < now() - interval '2 hours';

  insert into public.lead_rate_limits as limits (bucket_start, ip_hash, request_count)
  values (v_bucket, p_ip_hash, 1)
  on conflict (bucket_start, ip_hash)
  do update set request_count = limits.request_count + 1
  returning request_count into v_count;

  return v_count <= p_limit;
end;
$$;

revoke all on table public.lead_rate_limits from anon, authenticated;
revoke all on function public.consume_lead_rate_limit(text, integer) from public, anon, authenticated;
grant execute on function public.consume_lead_rate_limit(text, integer) to service_role;

-- Only explicitly listed auth users may view or update marketing leads.
create table if not exists public.lead_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

alter table public.lead_admins enable row level security;
revoke all on table public.lead_admins from anon, authenticated;
grant select on table public.lead_admins to authenticated;

drop policy if exists "Users can see their own lead admin record" on public.lead_admins;
create policy "Users can see their own lead admin record"
on public.lead_admins
for select
to authenticated
using (user_id = auth.uid());

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
create policy "Lead admins can read leads"
on public.leads
for select
to authenticated
using (
  exists (
    select 1
    from public.lead_admins
    where lead_admins.user_id = auth.uid()
  )
);

drop policy if exists "Authenticated users can update leads" on public.leads;
create policy "Lead admins can update leads"
on public.leads
for update
to authenticated
using (
  exists (
    select 1
    from public.lead_admins
    where lead_admins.user_id = auth.uid()
  )
)
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
