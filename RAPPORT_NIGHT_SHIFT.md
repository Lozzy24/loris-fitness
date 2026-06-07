# 🌙 Rapport Night Shift — Loris Fitness

**Session autonome · v1.3 → v1.6**
Objectif : faire progresser le produit le plus loin possible, en autonomie, sans validation intermédiaire.

---

## ✅ Ce qui a été réalisé cette nuit

### 1. Gamification type RPG/Duolingo (v1.4)
- **Quêtes quotidiennes** : valider 12 séries (+40 XP), terminer 1 séance (+60), atteindre 80 % de l'objectif protéines (+40).
- **Quêtes hebdomadaires** : 3 séances (+150), soulever 5 t (+150), logger 6 performances (+120).
- Barres de progression, **auto-claim** à l'objectif, XP crédité, confettis + haptique sur réussite.
- **Compteurs journaliers** (séries, séances, volume, logs) + agrégats hebdomadaires.
- Réinitialisation automatique des périodes (jour / semaine).

### 2. Séance du jour + Prévision (v1.4)
- Carte **« Séance du jour »** sur l'accueil, dérivée du planning, avec **démarrage rapide** (deep-link vers le bon groupe).
- **Prévision d'objectif de poids** : calcule le rythme (kg/sem) à partir des mesures et estime la **date d'atteinte** des 81 kg. Conseille d'augmenter le surplus si stagnation.

### 3. Coach — Recommandation de charge (v1.5)
- **Surcharge progressive automatique** par exercice, basée sur le dernier log :
  - reps ≥ 12 → +2,5 kg suggéré ;
  - reps ≤ 6 → garder la charge, +1-2 reps ;
  - sinon → même charge, +1 rep.
- Affichée dans l'onglet **Performance** avec bouton **« Appliquer »** (pré-remplit le log).

### 4. Administration / rien de figé (v1.5)
- **Planning hebdomadaire éditable** (7 jours → groupe). La barre « cette semaine » et la « séance du jour » en découlent.
- **Objectifs nutrition éditables** (protéines & lipides en g/kg) appliqués aux macros.
- (Déjà présent avant la nuit : exercices éditables/ajoutables/masquables, repas, favoris.)

### 5. Immersion premium (v1.6)
- **Compteurs animés (count-up)** sur les stats et la cible calorique.
- **Retours haptiques** (vibration) : navigation, validation de série, quête accomplie, fin de séance.
- **États `:active`** (scale) sur cartes/onglets/chips ; respect de `prefers-reduced-motion`.
- Helpers réutilisables `haptic` / `countUp` / `statCard` (réduction de duplication).

---

## 🛠️ Améliorations transverses
- **Performance** : libs vendées localement (Three.js, Chart.js, html5-qrcode) → offline complet, pas de dépendance CDN au runtime.
- **Robustesse** : tout testé via banc d'essai JS (logique réelle) avant chaque déploiement.
- **Pipeline** : chaque lot commité + poussé → **auto-deploy Netlify** depuis GitHub.
- **Cache PWA** versionné (`lorisfit-v9`) → mises à jour propres.

---

## 📦 État du produit (récap fonctionnel)
- **Entraînement** : programme salle (4 groupes) + maison (A/B/C) adaptatif (swap auto/manuel, édition, charge cible, exos custom), validation séries, chrono repos, reco de charge.
- **Progression** : log perfs, records, courbes charge/volume/tonnage.
- **Masse** : mensurations, courbes, photos avant/après + slider, prévision objectif.
- **Nutrition** : calcul besoins, macros réelles, journal, **scan code-barres (OpenFoodFacts)**, **photo repas IA (OpenAI Vision)**, favoris.
- **Gamification** : XP, niveaux 1-100, succès, rangs, **quêtes jour/semaine**.
- **Outils** : calculateurs (IMC, 1RM, masse maigre, % gras), **coach IA** (local + OpenAI), profil/admin.
- **3D / anatomie** : corps 3D interactif (accueil) + **schéma musculaire avant/arrière par exercice**.
- **PWA** : installable iOS/Android, offline, données locales.

---

## 🔜 Ce qui reste à faire / priorités recommandées
1. **Avatar 3D évolutif** selon mensurations (P2 — nécessite modèle riggé).
2. **Highlight 3D par exercice** (allumer le corps 3D de l'accueil selon l'exo ouvert).
3. **Coach IA proactif** : analyse hebdo automatique + plan de surcharge multi-séances (nécessite clé OpenAI).
4. **Sync cloud** (Supabase) : multi-appareils, sauvegarde, comptes — l'archi `Store` est déjà abstraite pour ça.
5. **Notifications** (rappels séance/quête) — nécessite Web Push + backend.
6. **Onboarding** première utilisation (profil guidé).
7. **Communauté / classement / défis / marketplace** (vision long terme).

---

## 💡 Idées futures à fort impact
- **Mode séance plein écran** « focus » avec gros boutons, swipe entre exercices.
- **Apple Health / Health Connect** (poids, activité) via build natif.
- **Détection de plateau** automatique + suggestion de deload.
- **Export PDF** de la progression (bilan mensuel).
- **Recettes prise de masse** intégrées au journal (1 tap → macros).

---

*Généré automatiquement en fin de session. Toutes les fonctionnalités ci-dessus sont en production sur la branche `main` et déployées via Netlify.*
