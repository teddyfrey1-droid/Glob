# 02 · Business model & pricing

> ⚠️ Tous les chiffres ci-dessous sont des **hypothèses de départ à valider** en
> phase 1 (landing + entretiens). Ils servent à raisonner, pas à graver.

## 1. Principe : abonnement + commission (modèle SaaS + marketplace)

On combine **deux moteurs de revenu récurrent** pour être valorisable comme un
SaaS et résistant à la désintermédiation (voir doc 04) :

1. **Abonnement entreprise** (récurrent, prévisible) — l'accès à la plateforme,
   aux contrats-cadres et au filet de sécurité Binôme.
2. **Commission de service** (variable, suit le volume) — un pourcentage
   transparent sur les sommes facturées via la plateforme.
3. **Sources secondaires** : marge de change (FX) sur les payouts en devise
   locale, missions one-shot à commission majorée, services premium.

## 2. Côté entreprise — les forfaits

| Forfait | Prix (hyp.) | Missions actives | Inclus |
|---|---|---|---|
| **Découverte** | 0 € | 0 (lecture) | Parcourir les profils, voir les scores, 1 brief test |
| **Studio** | **290 €/mois** | 1 | Accès complet, contrats-cadres B2B, messagerie, support |
| **Continu** ⭐ | **690 €/mois** | jusqu'à 3 | + **Binôme/Redondance inclus**, SLA continuité, account manager |
| **Scale** | sur devis | illimité | Équipes multi-profils, Binôme garanti, intégrations, facturation groupée |

- **Commission de service** : **10–15 %** du volume facturé (dégressive selon le
  forfait et le volume).
- **Mission one-shot** (sans abonnement) : pas de forfait, mais **commission
  majorée (~20 %)** — pour servir les besoins ponctuels *sans* cannibaliser le
  récurrent.

> **Pourquoi un abonnement et pas que de la commission ?** Parce que l'abonnement
> (a) finance la confiance (vetting, support, Binôme) indépendamment du volume,
> (b) crée un coût d'engagement qui **réduit la désintermédiation**, et (c) lisse
> le revenu. La commission seule = course au volume façon Fiverr.

## 3. Côté nomade — gratuit à l'entrée, commission réduite

- **Inscription gratuite**, mais **vetting sélectif** (le filtre, c'est la marque).
- **Commission plateforme réduite : 5–8 %** prélevée sur ses facturations.
  Justifiée par : paiement fiable en €, conformité gérée, flux de clients
  récurrents, filet Binôme, communauté.
- **Premium Nomad** (score élevé sur 3 mois) → commission encore réduite
  (ex. 5 %), priorité d'attribution, badge de réassurance.

> La commission côté nomade reste **basse volontairement** : il fait déjà une
> concession sur le salaire. La valeur qu'on lui vend, c'est la **régularité** et
> la **simplicité**, pas un rabais agressif.

## 4. Take rate effectif

Sur un contrat récurrent, la plateforme capte :

```
Take rate ≈ commission entreprise (10–15 %)
          + commission nomade (5–8 %)
          + marge FX (~1–2 %)
          ≈ 16 à 25 % du volume, + l'abonnement par-dessus
```

C'est plus élevé que Malt (~10 %) mais on **livre plus** (conformité + Binôme +
SLA). C'est défendable tant que le client compare au coût d'un CDI, pas au tarif
brut d'un freelance.

## 5. Unit economics — exemple concret

**Scénario : 1 monteur vidéo senior, forfait Continu, mission récurrente.**

| Poste | Montant (hyp.) |
|---|---|
| Tarif mission payé par l'entreprise | 2 200 €/mois |
| Coût comparable d'un CDI FR chargé | ~4 800 €/mois |
| **Économie pour l'entreprise** | **~54 %** |
| Abonnement Continu | 690 €/mois |
| Commission entreprise (13 %) | ~286 €/mois |
| Commission nomade (6 %) | ~132 €/mois |
| Marge FX (~1,5 %) | ~33 €/mois |
| **Revenu Latitude sur ce contrat** | **~1 141 €/mois** |
| Net pour le nomade (avant impôt local) | ~2 068 €/mois |

> À Bali, Medellín, Hanoï ou Tbilissi, ~2 000 €/mois = niveau de vie très
> confortable. L'entreprise économise > 50 % vs un CDI. La plateforme prend
> > 1 000 €/mois. **Les trois y gagnent.**

## 6. Projection illustrative (à 100 clients « Continu »)

| Source | Calcul | Annuel (hyp.) |
|---|---|---|
| Abonnements | 100 × 690 € × 12 | **828 k€** |
| Commissions | 100 × ~2 000 € × ~13 % × 12 | **~312 k€** |
| Marge FX | 100 × ~30 € × 12 | **~36 k€** |
| **Total** | | **~1,18 M€/an** |

À comparer aux coûts : vetting, support, account managers, dev, acquisition,
risque d'impayés. **Hypothèse, pas une promesse** — à challenger en phase 1.

## 7. Leviers de monétisation additionnels (plus tard)

- **Vérification / certification premium** des profils (test de compétences payé).
- **« Boost »** de visibilité côté nomade (à manier avec prudence — ne pas
  recréer une foire aux enchères).
- **Outils RH** pour l'entreprise (suivi de temps des fenêtres, reporting).
- **Avances de trésorerie** au nomade adossées aux contrats (fintech, phase
  avancée).

## 8. Décisions ouvertes (à trancher en phase 1)

- Take rate exact + dégressivité.
- Qui supporte les frais Stripe (entreprise / nomade / partagé).
- Cotisations sociales du nomade : on reste neutre (B2B) ou on propose une option
  de protection (assurance/retraite via partenaire) comme argument de fidélité ?
- Seuil et règles précises du statut Premium Nomad.

➡️ Suite : [`03 · Modèle légal & paiements`](03-modele-legal-et-paiements.md)
