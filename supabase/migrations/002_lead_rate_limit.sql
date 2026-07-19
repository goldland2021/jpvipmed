-- Persistent rate limiting for the public lead endpoint.

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
