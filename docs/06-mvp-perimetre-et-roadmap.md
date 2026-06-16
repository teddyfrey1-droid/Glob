# 06 · MVP, périmètre & roadmap

## 1. Principe : le plus petit produit qui prouve la confiance

Le MVP ne doit pas tout faire. Il doit prouver **une** chose : qu'on peut
**matcher un talent nomade fiable avec une entreprise, en sécurité, de façon
récurrente**. On code le strict nécessaire pour ça, sur **1 à 2 verticales**.

Verticales de lancement : 🎬 **Vidéo/montage** · 💻 **Dev/no-code** · 📈 **Marketing/growth**.

## 2. Périmètre par phase

### Phase 1 — Landing + waitlist (valider l'appétit)
- Page d'accueil dans la DA (doc 05), double porte d'entrée **Nomade** / **Entreprise**.
- Capture waitlist (Supabase) + segmentation (verticale, pays, besoin).
- Contenu de réassurance : « combien tu gardes », « comment on garantit la fiabilité ».
- Objectif : constituer les deux faces avant de coder la marketplace.

### Phase 2 — MVP marketplace (le cœur)
**Onboarding nomade :**
- Auth (Supabase). Profil : métier (1 des 3 verticales), bio, **portfolio**,
  **vidéo d'intro** (Loom-style), localisation + **fuseau horaire**,
  **fenêtres de disponibilité**, tarif indicatif.
- Statut de **vetting** (en revue → vérifié) — manuel au début.

**Onboarding entreprise :**
- Auth + profil société. Brief de besoin : verticale, livrables, budget,
  **fenêtre de chevauchement souhaitée**, durée (one-shot vs récurrent).

**Cœur :**
- **Matching v1 par règles** : verticale + compétences + recouvrement de fuseau +
  disponibilité. (ML plus tard.)
- **Profils façon Airbnb** : carte désirable, score, badges, vidéo.
- **Nomad Score v1** (semi-manuel) sur 3 piliers : ponctualité, qualité, dispo.
- **Messagerie** + brief de mission partagé.
- **Forfaits/abonnement** côté entreprise (Stripe Billing).

### Phase 2.5 — Contrats & paiements
- Génération **contrat-cadre B2B** + bon de commande (PDF), e-signature.
- **Stripe Connect** : encaissement €, payout local, escrow par jalons,
  application fee = commission. Plan B paiement par pays (Wise/Payoneer/Deel).

### Phase 3 — Le différenciateur : Binôme + Score automatisé
- **Binôme/Redondance** : appariement d'un 2ᵉ profil briefé par mission ;
  procédure de bascule < 4 h ; SLA et crédits.
- **Nomad Score automatisé** : signaux de présence aux fenêtres, respect des
  délais, uptime/dispo, qualité (validation client). Déblocage **Premium Nomad**.
- Tableau de bord fiabilité côté entreprise.

## 3. Modèle de données (esquisse)

```
users            (id, role[nomad|company|admin], email, …)
nomad_profiles   (user_id, vertical, bio, country, timezone, hourly_rate,
                  video_intro_url, vetting_status, premium_until)
portfolios       (id, nomad_id, type, url, title)
availability     (id, nomad_id, weekday, start, end, timezone)   # fenêtres
companies        (user_id, name, country, vat_id, subscription_tier)
missions         (id, company_id, vertical, brief, budget, type[oneshot|recurring],
                  overlap_window, status)
matches          (id, mission_id, nomad_id, role[primary|backup], status)
contracts        (id, mission_id, nomad_id, pdf_url, signed_at)
payments         (id, mission_id, amount, currency, payout_currency,
                  application_fee, status, stripe_ref)
reviews          (id, mission_id, author, target, punctuality, quality,
                  reliability, comment)
nomad_scores     (nomad_id, punctuality, quality, reliability, computed_at)
```

> Toutes les contraintes de la doc 03 se traduisent ici : **pas** de champ
> « horaires imposés » (uniquement `overlap_window` négociée), `matches` gère
> nativement le rôle **backup** (Binôme), `reviews` est mutuel et structuré.

## 4. Choix techniques

- **Next.js** (App Router) — front + routes API.
- **Supabase** — auth, Postgres, storage (vidéos/portfolios), Row Level Security.
- **Stripe** — Billing (abonnements) + Connect (paiements/escrow).
- **Vercel** — hébergement & previews.
- **Figma** — DA, maquettes, design system.
- (Plus tard) e-signature, recherche/matching avancé, emailing.

## 5. Roadmap (ordre, pas dates)

1. ✅ **Phase 0** — Blueprint (ce repo).
2. **Phase 1** — Landing + waitlist double face.
3. **Phase 2** — MVP marketplace (auth, profils, matching, score v1, messagerie, abo).
4. **Phase 2.5** — Contrats B2B + Stripe Connect/escrow.
5. **Phase 3** — Binôme + Nomad Score automatisé + dashboard fiabilité.
6. **Phase 4** — Élargissement (verticales, pays, ICP), outils RH, fintech.

## 6. Comment mesurer que ça marche (north-star & garde-fous)

- **North-star** : nombre de **contrats récurrents actifs** (pas le GMV one-shot).
- Offre : profils vetté actifs, délai de matching, taux de profils Premium.
- Demande : taux d'abonnés actifs, rétention mensuelle, NPS entreprise.
- Confiance : **taux d'incidents** (nomade qui décroche) et **taux de Binôme
  déclenché avec succès** → c'est *la* preuve de la promesse.
- Santé business : take rate effectif, churn, CAC vs LTV, % de leakage détecté.

## 7. Décisions ouvertes à trancher avant la phase 2

- Verticale **n°1** prioritaire (celle de ton meilleur réseau) parmi les 3.
- Hubs géographiques de départ (pour rendre le Binôme réaliste).
- Nom final + domaine (doc 05).
- Validation juridique du montage (doc 03) avant d'activer les paiements.

➡️ Quand tu valides ce blueprint, je peux enchaîner sur la **Phase 1 (landing +
waitlist)** ou commencer à **maquetter la DA dans Figma** — à toi de dire.
