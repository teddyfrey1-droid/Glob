import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Renvoie un client Supabase côté serveur si les variables d'environnement
 * sont présentes, sinon `null` (mode démo : la landing fonctionne sans backend).
 *
 * Variables attendues (voir .env.example) :
 *   - SUPABASE_URL
 *   - SUPABASE_PUBLISHABLE_KEY (recommandé, format sb_publishable_…)
 *     — ou SUPABASE_ANON_KEY (clé anon legacy)
 *     — ou SUPABASE_SERVICE_ROLE_KEY (contourne la RLS, à éviter ici)
 *
 * La waitlist s'appuie sur une policy RLS « INSERT only » : la clé publishable
 * suffit et reste sûre à exposer (aucune lecture possible via l'API).
 */
export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key =
    process.env.SUPABASE_PUBLISHABLE_KEY ??
    process.env.SUPABASE_ANON_KEY ??
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
