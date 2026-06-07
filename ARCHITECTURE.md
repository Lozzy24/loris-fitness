# Architecture — Loris Fitness

App **mono-fichier** (`index.html`) volontairement : zéro build, déploiement statique instantané, offline-first. Conçue pour migrer ensuite vers un build modulaire / React Native sans réécrire la logique métier.

## Couches (dans `index.html`)
- **Store** (IIFE) : source de vérité unique. `get()` / `set(fn)` / `save()` / `reset()` / `export()`. Persistance **LocalStorage** sous une seule clé `lorisfit_v1`. Schéma par défaut fusionné au chargement → ajout de champs rétro-compatible. *Point d'extension : remplacer le backend par Supabase/Firebase sans toucher au reste.*
- **Données** : `PROGRAM` (salle + maison), `EXO_INDEX` (index plat), `LIBRARY` (catalogue d'alternatives par muscle), `ACHIEVEMENTS`, `TIERS`, `QUESTS`.
- **Modules logiques** : `Gami` (XP/niveaux/succès), `QUESTS`/évaluation (App), `Coach` (base locale + OpenAI), `UI` (toasts, header).
- **App** (contrôleur) : routeur, rendus par écran, modèle effectif des exercices (base + overrides + custom), nutrition, mesures, calculateurs, 3D, quêtes, reco.

## Modèle de données clé
- `logs[exoId]` : historique des séries.
- `prs[exoId]` : records.
- `exoOverrides[exoId]` : `{name?,sets?,meta?,targetLoad?,status?,hidden?,swap?}` → **aucune donnée d'exercice figée**.
- `customExos[groupId]` : exercices ajoutés par l'utilisateur.
- `daily[date]` : `{sets,workouts,volume,logs}` (quêtes/stats).
- `weekPlan[7]`, `macroOverride{prot,lip}` : configuration éditable.
- `nutrition[date].meals` : `{matin,midi,colla,soir}` d'items `{name,qty,kcal,p,c,f}`.

## Résolution des exercices
`App.exo(id)` et `App.getGroupExos(groupId)` fusionnent base + overrides + custom. Toute l'UI passe par ce résolveur → cohérence garantie.

## PWA / offline
- `sw.js` : précache app shell + libs (`vendor/`) + icônes. Cache versionné (`lorisfit-vN`) → bump à chaque déploiement pour une MAJ propre.
- `manifest.webmanifest` + icônes → installable iOS/Android.

## Déploiement
GitHub `main` → **Netlify auto-deploy** (statique, publish racine, pas de build). `netlify.toml` : `no-cache` sur `index.html` et `sw.js`.

## Dépendances (vendées localement)
- `three.min.js` (3D corps), `chart.umd.min.js` (graphiques), `html5-qrcode.min.js` (scan code-barres).
