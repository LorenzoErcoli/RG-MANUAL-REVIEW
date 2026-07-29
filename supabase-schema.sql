create table if not exists public.review_contribution_events (
  event_id text primary key,
  contribution_id text not null,
  contribution_type text not null check (contribution_type in ('note','answer','new_part')),
  action text not null check (action in ('create','update','delete')),
  reviewer text,
  manual_revision text,
  payload jsonb not null default '{}'::jsonb,
  client_created_at timestamptz,
  received_at timestamptz not null default now()
);

create index if not exists review_contribution_events_contribution_idx
  on public.review_contribution_events (contribution_id, received_at);

alter table public.review_contribution_events enable row level security;

grant usage on schema public to anon, authenticated;
revoke all on table public.review_contribution_events from anon, authenticated;
grant insert on table public.review_contribution_events to anon, authenticated;
grant select, insert, update, delete on table public.review_contribution_events to service_role;

drop policy if exists "Public reviewers can submit contribution events" on public.review_contribution_events;
create policy "Public reviewers can submit contribution events"
  on public.review_contribution_events
  for insert
  to anon, authenticated
  with check (
    length(event_id) between 3 and 200
    and length(contribution_id) between 3 and 200
    and contribution_type in ('note','answer','new_part')
    and action in ('create','update','delete')
    and length(coalesce(reviewer,'')) <= 200
    and jsonb_typeof(payload) = 'object'
  );

comment on table public.review_contribution_events is
  'Append-only event log for RG Manual Review. Public clients can only insert create, update and delete events; reading and administration remain available through the Supabase dashboard or service role.';