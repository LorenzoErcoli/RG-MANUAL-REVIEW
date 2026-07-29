alter table public.review_contribution_events
  drop constraint if exists review_contribution_events_action_check;

alter table public.review_contribution_events
  add constraint review_contribution_events_action_check
  check (action in ('create','update','delete'));

drop policy if exists "Public reviewers can submit contribution events"
on public.review_contribution_events;

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

notify pgrst, 'reload schema';