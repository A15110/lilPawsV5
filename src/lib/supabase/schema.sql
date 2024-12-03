-- Create email subscribers table
create table if not exists public.email_subscribers (
  id uuid default uuid_generate_v4() primary key,
  email text not null unique,
  subscription_date timestamp with time zone default now(),
  status boolean default true,
  created_at timestamp with time zone default now()
);

-- Enable RLS
alter table public.email_subscribers enable row level security;

-- Create policies
create policy "Anyone can subscribe"
  on public.email_subscribers
  for insert
  with check (true);

create policy "Only admins can view subscribers"
  on public.email_subscribers
  for select
  using (auth.role() = 'authenticated' and exists (
    select 1 from public.admin_users where id = auth.uid()
  ));