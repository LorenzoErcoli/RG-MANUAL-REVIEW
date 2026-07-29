grant usage on schema public to anon, authenticated;

grant select, insert
on table public.review_contribution_events
to anon, authenticated;

drop policy if exists "Public reviewers can read shared note events"
on public.review_contribution_events;

create policy "Public reviewers can read shared note events"
on public.review_contribution_events
for select
to anon, authenticated
using (contribution_type = 'note');

notify pgrst, 'reload schema';
