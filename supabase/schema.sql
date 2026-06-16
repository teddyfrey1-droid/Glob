-- Phase 1 — table de la waitlist (landing).
-- À exécuter dans l'éditeur SQL Supabase (ou via migration).

create table if not exists public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text not null,
  role       text not null check (role in ('company', 'nomad')),
  vertical   text,
  country    text,
  created_at timestamptz not null default now(),
  unique (email, role)
);

-- RLS activé : aucune policy publique.
-- Les insertions passent par la route serveur /api/waitlist avec la
-- SERVICE_ROLE_KEY (qui contourne la RLS). N'expose jamais cette clé côté client.
alter table public.waitlist enable row level security;
