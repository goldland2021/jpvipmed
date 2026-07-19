-- Apply this to an existing marketing-site database after schema.sql.
-- Fresh databases receive the same objects from supabase/schema.sql.

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
drop policy if exists "Lead admins can read leads" on public.leads;
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
drop policy if exists "Lead admins can update leads" on public.leads;
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
