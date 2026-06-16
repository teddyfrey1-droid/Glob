# Latitude · *nom de travail* (repo `Glob`)

> **La marketplace des talents nomades pour les entreprises francophones.**
> Des profils Master / seniors, basés à l'étranger, au prix d'un junior local —
> avec la **fiabilité** et la **conformité** livrées en standard.

Latitude n'est pas une place de marché low-cost de plus. C'est un **tiers de
confiance** qui vend de la **continuité de service** et de la **sérénité
juridique**, pas des heures de freelance au rabais.

---

## Le pitch en une phrase

Pour les **entreprises francophones** qui veulent un talent senior sans le coût
d'un CDI, Latitude connecte des **digital nomads diplômés** (Asie, Amérique du
Sud, etc.) prêts à échanger une **concession sur le salaire** contre une
**liberté géographique totale** — encadrés par un score de fiabilité strict et
un système de **binôme anti-interruption**.

## Le modèle « tri-gagnant »

| Partie | Ce qu'elle gagne | Ce qu'on lui demande |
|---|---|---|
| **L'entreprise** | Un profil Master/senior pour le prix d'un junior, zéro charge patronale FR, qualité égale ou supérieure | Payer un abonnement + une commission (revenu récurrent et transparent) |
| **Le nomade** | Un revenu stable en € qui finance la vie de rêve à l'étranger | Une **rigueur irréprochable** : ponctualité, qualité, disponibilité — sinon il perd l'accès aux contrats récurrents |
| **Latitude (toi)** | Abonnement SaaS + commission + marge FX — un modèle récurrent hyper-valorisable | Garantir le vetting, la conformité et la continuité (le vrai produit) |

> **Philosophie produit :** *« Acheter sa liberté par la rigueur. »* L'entrée
> est sélective, la notation est stricte. C'est ce sérieux qui attire les bonnes
> entreprises — qui attirent les bons profils. Cercle vertueux.

## Ce qui nous différencie (≠ Fiverr / Upwork)

- **Continuité, pas du one-shot** : abonnement + forfaits récurrents.
- **Le Binôme / Redondance** : un 2ᵉ profil briefé reprend en < 4 h si le 1ᵉʳ
  décroche (vol, panne, maladie). **Zéro interruption** pour l'entreprise.
- **Coffre-fort de conformité** : contrats B2B internationaux générés
  automatiquement → on lève le risque de « salariat déguisé ».
- **Time-Sync** : le décalage horaire devient un argument (« ton bug est réparé
  à ton réveil »).
- **Nomad Score** : réputation portable basée sur ponctualité + qualité +
  disponibilité internet.

> ⚠️ **Notre vrai concurrent n'est pas Fiverr.** C'est **Malt** (freelance FR
> premium) et **Deel/Remote** (conformité/paie internationale). Notre angle :
> *« Malt pour nomades, avec la conformité de Deel intégrée et une garantie de
> continuité que personne d'autre n'offre. »* Détails dans
> [`docs/04`](docs/04-positionnement-concurrence-gtm.md).

---

## 📚 Le blueprint (lire dans l'ordre)

1. [`docs/01-vision-et-modele-tri-gagnant.md`](docs/01-vision-et-modele-tri-gagnant.md) — le constat, la cible, le modèle des 3 parties en détail
2. [`docs/02-business-model-et-pricing.md`](docs/02-business-model-et-pricing.md) — pricing chiffré, take rate, unit economics, projection
3. [`docs/03-modele-legal-et-paiements.md`](docs/03-modele-legal-et-paiements.md) — 100 % B2B, salariat déguisé, contrats, Stripe Connect & FX
4. [`docs/04-positionnement-concurrence-gtm.md`](docs/04-positionnement-concurrence-gtm.md) — vs Malt/Deel/Fiverr, moat, anti-désintermédiation, cold-start
5. [`docs/05-marque-et-direction-artistique.md`](docs/05-marque-et-direction-artistique.md) — naming (4 pistes), DA, palette, ton
6. [`docs/06-mvp-perimetre-et-roadmap.md`](docs/06-mvp-perimetre-et-roadmap.md) — périmètre MVP, modèle de données, roadmap par phases

## Stack technique (cible)

`Next.js` (front + API) · `Supabase` (auth, Postgres, storage) · `Stripe Connect`
(paiements/escrow) · `Vercel` (hébergement) · `Figma` (DA). Tous déjà connectés à
l'environnement de dev.

## Verticales de lancement (MVP)

🎬 **Vidéo / montage** · 💻 **Dev / no-code / product** · 📈 **Marketing /
growth / contenu**. On démarre étroit pour casser le problème de démarrage à
froid (voir doc 04).

## Statut

- [x] **Phase 0 — Blueprint stratégique** (ce repo)
- [ ] Phase 1 — Landing + waitlist (capter offre & demande)
- [ ] Phase 2 — MVP marketplace (auth, profils, matching, score)
- [ ] Phase 2.5 — Paiements Stripe Connect + contrats B2B
- [ ] Phase 3 — Binôme / Redondance + Nomad Score automatisé

> **Avertissement** : les chiffres (pricing, projections) sont des **hypothèses
> à valider**, et la section légale n'est **pas un conseil juridique** — elle
> doit être revue par un avocat/expert-comptable spécialisé en prestation
> internationale.
