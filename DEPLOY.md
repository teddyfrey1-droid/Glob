# Déploiement (Vercel · intégration Git)

Le repo est prêt à déployer : **Next.js auto-détecté**, build de prod vérifié.
Une fois le repo importé sur Vercel, **chaque push déploie automatiquement**.

## Étapes (une seule fois, ~2 min)

1. Va sur **https://vercel.com** et connecte-toi (avec GitHub, idéalement).
2. **Add New… → Project**.
3. **Import Git Repository** → autorise Vercel sur GitHub si demandé → choisis
   **`teddyfrey1-droid/glob`**.
4. Vercel détecte **Next.js** tout seul. Laisse les réglages par défaut :
   - Framework Preset : **Next.js**
   - Build Command : `next build`
   - Output Directory : `.next`
   - Root Directory : `./`
5. **Branche de production** — il n'y a pas encore de branche `main`, seulement
   la branche de travail. Deux choix :
   - dans **Settings → Git → Production Branch**, mets `claude/nifty-cray-f4z417`, **ou**
   - demande-moi de préparer une branche `main` (je ne pousse pas sur `main`
     sans ton accord explicite).
6. *(Optionnel)* **Environment Variables** — pour activer la persistance de la
   waitlist (sinon « mode démo ») :
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
7. **Deploy**. 🎉

## Après le premier déploiement

- Chaque branche poussée → une **URL de preview** automatique.
- La branche de production → l'**URL de prod**.
- Donne-moi l'URL : je peux faire un **smoke test du live** (page + API waitlist)
  via les outils Vercel.

## Variables d'environnement

| Variable | Rôle | Si absente |
|---|---|---|
| `SUPABASE_URL` | Endpoint du projet Supabase | mode démo |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé serveur (insert waitlist) | mode démo |

⚠️ La *service role key* est **secrète** : uniquement en variable d'environnement
serveur (Vercel), jamais exposée au client. Crée la table avec
[`supabase/schema.sql`](supabase/schema.sql).

## Pas besoin de `vercel.json`

Next.js est nativement supporté par Vercel : aucune configuration
supplémentaire n'est nécessaire.
