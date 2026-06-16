# 03 · Modèle légal & paiements

> ⚠️ **Ceci n'est pas un conseil juridique.** C'est un cadre de travail à faire
> valider par un avocat et un expert-comptable spécialisés en prestation de
> services internationale **avant tout lancement**. Le risque juridique est le
> plus gros frein à l'achat côté entreprise — bien traité, il devient notre
> meilleur argument.

## 1. Le choix structurant : 100 % B2B

Le nomade n'est **jamais** salarié de l'entreprise cliente ni de la plateforme.
Il est un **prestataire indépendant** (entreprise individuelle / auto-entrepreneur
/ sole proprietor local / société locale) qui **facture ses prestations**.

```
   Entreprise cliente (FR/QC/BE/CH…)
            │  contrat-cadre de prestation B2B
            ▼
   Latitude (place de marché / mandataire)
            │  contrat de prestation B2B + paiement
            ▼
   Nomade (entité indépendante, hors UE le plus souvent)
```

Deux montages possibles — **à arbitrer avec l'avocat** :

- **A. Marketplace « mise en relation » (recommandé pour scaler).** Le contrat
  de prestation lie **directement** l'entreprise et le nomade. Latitude est
  **mandataire / commissionnaire** : elle fournit les modèles de contrat,
  encaisse via Stripe Connect et prélève une commission (application fee). C'est
  le modèle de Malt. Plus léger en TVA et en responsabilité.
- **B. Latitude revendeur de prestation.** Latitude contractualise des deux
  côtés et porte la prestation. Plus rassurant pour le client, mais alourdit la
  TVA et la responsabilité de la plateforme. Réservé éventuellement au forfait
  **Scale**.

> **Reco :** démarrer en **A** (marketplace mandataire), garder **B** comme
> option entreprise premium plus tard.

## 2. Le risque « salariat déguisé » — et comment le produit le neutralise

En France, une prestation peut être requalifiée en salariat si l'URSSAF/le juge
détecte un **lien de subordination**. Les 3 marqueurs classiques et nos parades
**intégrées au produit** :

| Marqueur de requalification | Parade produit Latitude |
|---|---|
| **Horaires imposés** par le client | ❌ Interdit. Le client ne fixe pas d'horaires : seulement des **« fenêtres de chevauchement »** convenues d'un commun accord. L'UI n'autorise pas la saisie d'un planning imposé. |
| **Mono-client / dépendance économique** | Multi-client **encouragé et visible** sur le profil. Alerte si un nomade dépend à >70 % d'un client. |
| **Pouvoir de direction / sanction** | Relation par **livrables et objectifs**, pas par ordres. Pas d'évaluation hiérarchique : un **score de prestation** mutuel, contractualisé. |
| Fourniture des outils par le client | Le nomade utilise **ses** outils, **son** lieu, **son** organisation. |
| Intégration durable dans l'organisation | **Missions/forfaits à durée et périmètre définis**, renouvelables, jamais un poste. |

> Autrement dit : **la conformité n'est pas une clause cachée, c'est une
> contrainte de design.** C'est ce qui rend le « coffre-fort de conformité »
> crédible.

## 3. Contrats générés automatiquement

La plateforme génère, à chaque mission :
- un **contrat-cadre de prestation B2B** (FR + EN), clauses de confidentialité,
  PI/cession des droits, RGPD, juridiction ;
- un **bon de commande / scope** par mission (livrables, fenêtres de
  chevauchement, durée, prix) ;
- les **factures** émises par le nomade (sa propre entité), avec mentions TVA
  adaptées.

E-signature (DocuSign / Dropbox Sign / équivalent open-source) en phase 2.5.

## 4. TVA & fiscalité (à cadrer avec l'expert-comptable)

- **Client FR (assujetti) ↔ prestataire hors UE** : en B2B, la TVA est en
  principe **auto-liquidée** par le preneur français (règles du lieu
  d'établissement du preneur). À confirmer selon les cas.
- **Commission Latitude** = prestation de service de la plateforme → TVA selon
  son pays d'établissement et le statut du client.
- **Le nomade** est responsable de sa fiscalité **locale** (pays de résidence).
  Latitude **n'est pas** son employeur et ne retient pas de cotisations
  sociales — sauf option « protection » volontaire via partenaire (voir doc 02).
- Prévoir des **mentions claires** rappelant à chaque partie ses obligations.

## 5. Paiements — Stripe Connect + filet de secours

- **Encaissement en € depuis l'entreprise**, **payout en devise locale** au
  nomade via **Stripe Connect** (comptes connectés). Latitude prélève
  l'**application fee** (commission) automatiquement.
- **Escrow / jalons** : on séquestre le paiement et on libère à la validation
  des livrables / à la fin de la fenêtre → protège les deux parties.
- ⚠️ **Point de vigilance réel :** Stripe Connect **n'est pas disponible dans
  tous les pays** où vivent les nomades. Il faut un **plan B par pays** :
  **Wise, Payoneer, Deel** ou virement local. À cartographier dès la phase 1 en
  fonction des pays de résidence réels des premiers profils.
- **Devises & FX** : afficher au nomade un taux transparent ; la petite marge FX
  est une source de revenu assumée (doc 02).

## 6. Données & RGPD

- Données candidats/entreprises hébergées sur **Supabase** (région UE).
- Politique de conservation, consentement, droit à l'effacement.
- Les **scores** et avis : encadrer juridiquement (droit de réponse, pas de
  donnée discriminatoire, contestation possible).

## 7. Checklist avant lancement

- [ ] Validation avocat : montage A vs B, clauses de subordination, PI.
- [ ] Validation expert-comptable : TVA intra/extra-UE, statut commission.
- [ ] Cartographie pays → rails de paiement (Stripe/Wise/Payoneer/Deel).
- [ ] CGU/CGV plateforme + contrats-cadres types (FR/EN).
- [ ] Politique RGPD + mentions légales + gestion des avis.

➡️ Suite : [`04 · Positionnement, concurrence & go-to-market`](04-positionnement-concurrence-gtm.md)
