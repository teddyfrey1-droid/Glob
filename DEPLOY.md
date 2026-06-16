# Déploiement (Vercel · intégration Git)

Le repo est prêt à déployer : **Next.js auto-détecté**, build de prod vérifié.
Une fois le repo importé sur Vercel, **chaque push déploie automatiquement**.

## Étapes (une seule fois, ~2 min)

1. Va sur **https://vercel.com** et connecte-toi (avec GitHub, idéalement).
2. **Add New… → Project**.
3. **Import Git Repository** → autorise Vercel sur GitHub si demandé → choisis
   **`teddyfrey1-droid/glob`**.
4. Vercel détecte **Next.js** tout seul. Laisse les réglages par défaut
   (Build : `next build`, Output : `.next`, Root : `./`).
5. La branche **`main`** existe : Vercel la prend comme branche de production.
6. **Environment Variables** — pour activer la persistance de la waitlist
   (voir tableau ci-dessous). Sans elles → « mode démo ».
7. **Deploy**. 🎉

> Après import, mes pushs sur `claude/nifty-cray-f4z417` créeront des **previews**
> automatiques ; un merge dans `main` passera en **prod**.

## Variables d'environnement (waitlist)

Le projet Supabase **`latitude`** (eu-west-3 / Paris) est déjà créé : table
`waitlist` + policy RLS en place. Pour activer la persistance, ajoute sur Vercel :

| Variable | Valeur |
|---|---|
| `SUPABASE_URL` | `https://siuioxejppdwnsdnyuhq.supabase.co` |
| `SUPABASE_PUBLISHABLE_KEY` | la clé `sb_publishable_…` (fournie dans le chat) |

La clé publishable est **sûre à exposer** : une policy RLS n'autorise que
l'`INSERT` dans `waitlist` (jamais la lecture). ⚠️ Après avoir ajouté/modifié des
variables d'env sur Vercel, **relance un déploiement** pour qu'elles prennent effet.

## Après le premier déploiement

- Chaque branche poussée → une **URL de preview** automatique.
- La branche de production (`main`) → l'**URL de prod**.
- Donne-moi l'URL : je peux faire un **smoke test du live** (page + API waitlist).

## Pas besoin de `vercel.json`

Next.js est nativement supporté par Vercel : aucune configuration nécessaire.
