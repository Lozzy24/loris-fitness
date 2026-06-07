# Loris Fitness — Premium PWA

Application fitness prise de masse : programme salle + maison adaptatif, suivi performances,
3D, nutrition, gamification, coach IA. PWA installable, offline-first.

## Déploiement
Site statique, **aucun build**. Hébergé sur Netlify (publish = racine).
Tout commit sur `main` redéploie automatiquement.

## Structure
- `index.html` — application complète (UI + logique)
- `sw.js` — service worker (offline)
- `manifest.webmanifest` — manifest PWA
- `vendor/` — Three.js, Chart.js (locaux)
- `icons/` — icônes app

Stockage local (LocalStorage). Architecture prête pour Supabase/Firebase.
