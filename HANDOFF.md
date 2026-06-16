# 📍 Passation / État du projet (HANDOFF)

> **Lis ce fichier en premier.** Il permet de reprendre le projet dans une
> nouvelle conversation Claude Code sans rien perdre.
> Dernière mise à jour : **2026-06-16**.

---

## 0. TL;DR (30 secondes)

- **Projet** : marketplace **« Latitude »** (nom de travail) — met en relation des
  **talents nomades diplômés** (Asie, Amérique du Sud…) avec des **entreprises
  francophones**. Style Airbnb (désirable, simple) mais premium et fiable.
- **Déjà fait** :
  1. ✅ **Blueprint stratégique** complet (`README.md` + `docs/01..06`).
  2. ✅ **Landing page** Next.js + Tailwind (build vérifié + smoke test).
  3. ✅ **Waitlist branchée sur Supabase** (projet créé, table + RLS, **testé de
     bout en bout en vrai**).
- **Bloqué / à finir** : **déploiement Vercel**. Blocage = **pas de token Vercel**
  dans l'environnement (problème d'**authentification**, pas d'autorisation). Voir §6.
- **Prochaine action immédiate** : déployer sur Vercel (2 voies au §6), puis
  **logo + DA dans Figma**, puis **MVP marketplace** (Phase 2).

---

## 1. La vision (résumé — détail dans `docs/`)

Modèle **tri-gagnant** : la plateforme (toi) vend de la **continuité de service**
et de la **conformité**, pas du freelance à l'heure. Le nomade « achète sa liberté
par la rigueur » (revenu € stable contre sélection stricte + notation). L'entreprise
obtient un profil senior au prix d'un junior, **fiable** (binôme anti-interruption)
et **sans risque juridique** (contrats B2B).

- Concurrents réels = **Malt** + **Deel** (PAS Fiverr).
- Différenciateur clé = le **Binôme / Redondance** (un 2ᵉ profil briefé reprend en
  < 4 h).
- Tout est détaillé dans : `README.md`, `docs/01-vision…`, `docs/02-business-model…`,
  `docs/03-modele-legal…`, `docs/04-positionnement…`, `docs/05-marque-et-da…`,
  `docs/06-mvp-perimetre-et-roadmap…`.

---

## 2. Ce qui est DÉJÀ fait (avec preuves)

### Phase 0 — Blueprint ✅
`README.md` + `docs/01` à `docs/06`. Vision, pricing chiffré, modèle légal B2B,
positionnement, marque/DA, MVP + modèle de données + roadmap.

### Phase 1 — Landing page ✅
- **Stack** : Next.js **14.2.35** (App Router), Tailwind, TypeScript.
- **Fichiers** : `app/` (layout, page, globals.css, `api/waitlist/route.ts`),
  `components/` (Nav, Hero, AudienceContext/Toggle, ProfileCardMock,
  Differentiators, HowItWorks, TriWin, Verticals, Waitlist, Footer, BrandMark),
  `lib/supabase.ts`.
- **Fonctionnalités** : sélecteur **Entreprise/Nomade** qui transforme tout le
  hero ; **carte profil « façon Airbnb »** (Nomad Score, Time-Sync, badges Binôme) ;
  sections différenciateurs / how-it-works / tri-win / métiers ; **waitlist double face**.
- **Vérifié** : `npm run build` OK ; smoke test runtime (page `/` → HTTP 200,
  `POST /api/waitlist` → `{ok:true}`, email invalide → 400).

### Waitlist ↔ Supabase ✅
- Table `public.waitlist` créée sur le projet Supabase **`latitude`** (voir §5).
- Policy RLS **« INSERT only »** (`waitlist_public_insert`) : on peut s'inscrire,
  mais **personne ne peut lire** la liste via l'API publique.
- **Testé en vrai** : inscription envoyée via l'app → ligne vérifiée en base (via
  Supabase MCP) → donnée de test supprimée.

### Commits (branche `claude/nifty-cray-f4z417`, = `main` après cette passation)
```
85307b9 Branche la waitlist sur Supabase (clé publishable + RLS)
35e27ce Ajoute le runbook de déploiement Vercel
7794e1b Phase 1 — Landing page Latitude (Next.js + Tailwind)
10f9966 Phase 0 — Blueprint stratégique de Latitude
```

---

## 3. Comment lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
# ou
npm run build && npm run start
```
Sans variables d'env Supabase → la waitlist tourne en **« mode démo »**
(inscriptions acceptées mais non persistées, juste loguées). Avec les variables
(§5) → persistées dans Supabase.

---

## 4. Structure du repo (fichiers clés)

```
README.md                      # pitch + index du blueprint
HANDOFF.md                     # ← ce fichier
DEPLOY.md                      # runbook de déploiement Vercel
docs/01..06-*.md               # blueprint stratégique
app/                           # Next.js App Router (page, layout, api/waitlist)
components/                    # UI de la landing
lib/supabase.ts                # getSupabaseClient() (null si pas d'env → démo)
supabase/schema.sql            # table waitlist + policy RLS (déjà appliquée)
.env.example                   # variables attendues
package.json / tailwind.config.ts / tsconfig.json / next.config.mjs
```

---

## 5. Ressources externes (IDs réels)

### GitHub
- Repo : **`teddyfrey1-droid/glob`**
- Branches : **`main`** (à jour après cette passation) et
  **`claude/nifty-cray-f4z417`** (branche de dev de la session précédente).
  ⚠️ La nouvelle session aura **sa propre** branche de travail imposée : pars de
  `main`, qui contient tout.

### Supabase  *(connecteur MCP `mcp__Supabase__*` disponible)*
- Organisation : **« Pulse App »** — id `aoimpjzsitxkjeiwdahi`
- Projet : **`latitude`** — id/ref **`siuioxejppdwnsdnyuhq`**, région **eu-west-3
  (Paris)**, statut ACTIVE_HEALTHY, **gratuit (0 $/mois)**
- URL API : **`https://siuioxejppdwnsdnyuhq.supabase.co`**
- Table `public.waitlist` (colonnes : id, email, role[company|nomad], vertical,
  country, created_at ; unique(email, role)). Policy RLS `waitlist_public_insert`.
- **Clé à utiliser** : la **clé publishable** (`sb_publishable_…`, sûre à exposer).
  Pour l'obtenir : Supabase MCP `get_publishable_keys` avec
  `project_id=siuioxejppdwnsdnyuhq` (prendre la clé `type:"publishable"`).
  ⚠️ **Ne pas** utiliser de service-role key (inutile ici grâce à la RLS).

### Vercel  *(connecteur MCP `mcp__Vercel__*` — LECTURE seulement)*
- Équipe : **« teddyfrey1-4869's projects »** — id **`team_7bjYaj2GuDeE8Q8mdBQK6yMp`**
- Projets existants : `agence`, `agence-2`, `lafayette-progress` —
  **aucun projet pour ce repo encore**.
- ⚠️ **Important** : le connecteur Vercel MCP ne sait que **lire** (get/list
  projets, déploiements, logs). Il **ne crée pas** de projet, ne pose pas de
  variables d'env, ne déclenche pas de déploiement. `deploy_to_vercel` renvoie
  juste « lance `vercel deploy` » (CLI), et le CLI exige un **VERCEL_TOKEN** —
  **absent de l'environnement**. C'est LE point de blocage (voir §6).

---

## 6. ⛔ Le point bloquant : finir le déploiement Vercel

Choisir **une** des deux voies :

### Voie A — l'agent déploie tout (nécessite un token)
1. L'utilisateur crée un token sur **https://vercel.com/account/tokens**
   (scope = son équipe, expiration courte ex. 1 jour).
2. Le fournir à l'agent (idéalement comme variable d'env `VERCEL_TOKEN` de la
   session ; sinon collé dans le chat puis **révoqué** après).
3. L'agent enchaîne (CLI), depuis la racine du repo :
   ```bash
   export VERCEL_TOKEN=...                         # le token
   npx vercel link --yes --project latitude --token=$VERCEL_TOKEN
   printf '%s' "https://siuioxejppdwnsdnyuhq.supabase.co" | npx vercel env add SUPABASE_URL production --token=$VERCEL_TOKEN
   printf '%s' "<clé publishable sb_...>"           | npx vercel env add SUPABASE_PUBLISHABLE_KEY production --token=$VERCEL_TOKEN
   npx vercel deploy --prod --yes --token=$VERCEL_TOKEN
   ```

### Voie B — l'utilisateur importe (sans secret, recommandé)
1. **vercel.com → Add New → Project → Import** `teddyfrey1-droid/glob` → **Deploy**
   (Next.js auto-détecté, branche `main`).
2. Ajouter dans **Project Settings → Environment Variables** :
   - `SUPABASE_URL` = `https://siuioxejppdwnsdnyuhq.supabase.co`
   - `SUPABASE_PUBLISHABLE_KEY` = la clé `sb_publishable_…` (via Supabase MCP)
3. **Relancer un déploiement** (sinon les variables ne sont pas prises).
   Bonus : auto-deploy à chaque push ensuite.

### Après déploiement (à faire par l'agent, via connecteur Vercel + Supabase)
- Smoke test du live : `GET /` (200) + `POST /api/waitlist` (`{ok:true}`).
- Vérifier l'insertion : Supabase MCP `execute_sql` →
  `select * from public.waitlist order by created_at desc limit 3;` puis
  **supprimer la ligne de test**.

---

## 7. Décisions DÉJÀ prises (ne pas relitiguer)

| Sujet | Décision |
|---|---|
| Modèle légal | **100 % B2B** (le nomade facture en indépendant) |
| Verticales MVP | **Vidéo/montage · Dev/no-code · Marketing/growth** |
| Nom de travail | **Latitude** (4 alternatives dans `docs/05`, non figé) |
| Business model | Abonnement (≈290 € Studio / 690 € Continu) + commission 10–15 % (entreprise) + 5–8 % (nomade) + marge FX ; **Binôme** = différenciateur |
| DA | Encre `#0E1A2B` · Corail `#FF6B5B` · Ambre `#F5A623` · Sable `#F7F4EE` · Jade `#1FAE8B` ; polices **Space Grotesk** + **Inter** |
| Waitlist Supabase | Clé **publishable** + RLS **insert-only** (pas de service-role) |

---

## 8. Prochaines étapes (roadmap)

1. **Finir le déploiement Vercel** (§6) → obtenir une URL live + smoke test.
2. **Logo + visuels Figma** (DA = `docs/05`). Connecteur **Figma MCP** disponible
   (`use_figma`, `generate_figma_design`…). Lancer le skill `/figma-use` avant.
3. **MVP marketplace (Phase 2, `docs/06`)** : auth Supabase, onboarding nomade
   (profil, métier, portfolio, vidéo intro, fuseau, fenêtres de dispo), onboarding
   entreprise (brief), **matching v1 par règles**, **Nomad Score v1**, messagerie,
   abonnement Stripe. Modèle de données esquissé dans `docs/06`.
4. **Phase 2.5** : contrats B2B générés + **Stripe Connect** (escrow).
5. **Phase 3** : **Binôme/Redondance** + Nomad Score automatisé.

---

## 9. Message à coller pour démarrer la nouvelle conversation

> « Reprends le projet **Latitude** (repo `teddyfrey1-droid/glob`). **Lis d'abord
> `HANDOFF.md` à la racine**, puis `README.md` et `docs/`. Statut : blueprint +
> landing Next.js + waitlist Supabase sont faits et testés ; il reste à
> **déployer sur Vercel** (bloqué sur un token — voir §6 du HANDOFF) puis à faire
> le **logo/DA dans Figma**. Continue à partir de là. »

---

## 10. Connecteurs MCP utiles (disponibles dans l'environnement)

- **Supabase** — base de données (déjà utilisé pour la waitlist).
- **Vercel** — lecture/observabilité des déploiements (pas de deploy).
- **Figma** — création de la DA / logo / maquettes.
- **GitHub** — PRs, issues, CI.
- **Gmail / Apollo / Clay / Lusha** — prospection & go-to-market (côté business).
