-- Phase 1 — table de la waitlist (landing).
--
-- ✅ Déjà appliqué au projet Supabase "latitude" (eu-west-3 / Paris) via
--    migration. Ce fichier sert de référence / pour recréer un environnement.

create table if not exists public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text not null,
  role       text not null check (role in ('company', 'nomad')),
  vertical   text,
  country    text,
  created_at timestamptz not null default now(),
  unique (email, role)
);

alter table public.waitlist enable row level security;

-- Inscription publique : on autorise UNIQUEMENT l'INSERT (jamais le SELECT)
-- pour les rôles anon et authenticated. Conséquence :
--   - la clé publishable suffit pour enregistrer une inscription ;
--   - personne ne peut LIRE la liste via l'API publique (données protégées).
create policy "waitlist_public_insert"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);
