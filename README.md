# VES et Vous - Site Web

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## TODO List

### Tarification

- [x] Ajuster le prix des agences par rapport aux agences style O2
- [x] Demander à maman le prix pour O2 et le contrat de travail
- [ ] Garder le même tarif pour les clients actuels
- [ ] Se renseigner du prix pour :
  - [ ] Repassage à Domicile
  - [ ] Garde d'enfant
  - [ ] Jardinage

### Contenu du Site

- [ ] Ajouter section Crédit d'impôt
- [ ] Mettre à jour les plafonds URSSAF par rapport à cette année
- [ ] Ajouter agrément garde d'enfant
- [ ] Changer le numéro de téléphone

### Fonctionnement / Processus

- [ ] Corriger section "Comment ça fonctionne" (ce n'est pas le client qui déclare les heures)
- [ ] Clarifier le processus avec exemple Maman :
  - [ ] Déclaration de la facture (déclaration des heures effectuées chez le client)
  - [ ] Envoi du mail
  - [ ] Le paiement est versé directement sur le compte de Sandra
  - [ ] Si le client ne valide pas sous 3 jours, c'est validé automatiquement

### Administratif

- [ ] Ouvrir un compte à l'URSSAF pour avoir statut prestataire de services
- [ ] Revoir la phrase : "Je me propose de tout mettre en place pour vous de l'inscription à la déclaration"
- [ ] Enlever "l'employeur" de la section "Par Claire"

### Section About

- [ ] Rajouter une section que la propreté c'est important pour moi etc

---

## Comment ça fonctionne - Guide URSSAF & Services à la Personne

### Mode Prestataire (VES et Vous)

**En tant que prestataire de services, VES et Vous gère tout pour vous :**

- **Aucune démarche administrative** pour le client
- **Pas de contrat de travail** à rédiger
- **Pas de déclaration URSSAF** à effectuer
- **Pas de cotisations sociales** à calculer ou payer

L'organisme prestataire (VES et Vous) est l'employeur du salarié. Vous achetez une prestation de service et recevez une facture.

### Ce que le client doit faire

#### 1. Validation et Paiement

- **Réception de la facture** avec les heures effectuées
- **Validation sous 3 jours** - Si pas de validation, c'est validé automatiquement
- **Paiement** versé directement sur le compte de Sandra (VES et Vous)

#### 2. Nouvelle Obligation 2025 - Déclaration Fiscale

Depuis février 2025, pour bénéficier du crédit d'impôt, vous devez déclarer :

- L'identité du prestataire (VES et Vous)
- Le type de service (ménage, garde d'enfants, accompagnement senior)
- Le montant exact pour chaque service

### Avantages Fiscaux

#### Crédit d'Impôt

- **50% de réduction fiscale** sur les dépenses
- **Plafond annuel : 12 000 €** (peut être majoré selon situation)
- **Avance Immédiate disponible** : bénéficiez du crédit d'impôt directement à chaque facture sans attendre la déclaration annuelle

#### Comment bénéficier de l'Avance Immédiate

L'URSSAF propose un service permettant de déduire automatiquement 50% du montant à chaque déclaration ou facturation. Ce service est gratuit et optionnel.

### Différence Prestataire vs Particulier Employeur

| Aspect               | Mode Prestataire (VES et Vous) | Particulier Employeur (CESU) |
| -------------------- | ------------------------------ | ---------------------------- |
| Employeur            | L'organisme                    | Le client                    |
| Contrat de travail   | Non requis                     | Obligatoire                  |
| Déclaration URSSAF   | Gérée par l'organisme          | Par le client (CESU)         |
| Cotisations sociales | Incluses dans la facture       | À payer par le client        |
| Bulletins de paie    | Gérés par l'organisme          | À fournir par le client      |
| Avantage fiscal      | 50% de crédit d'impôt          | 50% de crédit d'impôt        |

### Pour les Clients : Aucune Complexité Administrative

Contrairement au mode particulier employeur (CESU) où vous devez :

- Déclarer chaque mois les heures travaillées
- Calculer et payer les cotisations
- Gérer les bulletins de paie

**Avec VES et Vous (mode prestataire), vous n'avez qu'à :**

1. Profiter du service
2. Valider la facture (ou laisser la validation automatique après 3 jours)
3. Payer la facture
4. Déclarer aux impôts pour bénéficier du crédit d'impôt

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Sources :

- https://www.urssaf.fr/accueil/particulier/particulier-employeur/declarer-votre-salarie/particulier-aides-exonerat
  ions.html
- https://www.economie.gouv.fr/cedef/services-a-la-personne
- https://www.urssaf.fr/accueil/services/services-particuliers/service-cesu/declarer-service-Cesu.html
- https://www.servicesalapersonne.gouv.fr/beneficier-des-sap/comment-utiliser-services-la-personne/etre-particulier
  -employeur
- https://equipersenior.fr/credit-impot-service-personne-2025/

06 51 47 62 11
