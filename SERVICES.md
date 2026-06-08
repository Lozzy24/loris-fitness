# 🗂️ Services & comptes — Loris Fitness

Récap de tout ce qu'on utilise, à quoi ça sert, et où se connecter. Garde ce fichier sous la main.

---

## 1. GitHub — le code
- **À quoi ça sert** : héberge le code source de l'app + historique des versions.
- **Connexion** : https://github.com → compte **Lozzy24**
- **Ton repo** : https://github.com/Lozzy24/loris-fitness
- **Coût** : gratuit (repo privé).
- **Ce qu'on y a fait** : chaque amélioration = un "commit" poussé ici.

## 2. Netlify — l'hébergement (mise en ligne)
- **À quoi ça sert** : publie l'app sur internet et la **redéploie automatiquement** à chaque changement sur GitHub.
- **Connexion** : https://app.netlify.com (connecté via GitHub)
- **Ton site** : ton URL `https://....netlify.app` (visible dans le dashboard Netlify → ton projet). C'est l'adresse que tu installes sur le téléphone.
- **Coût** : gratuit.
- **Ce qu'on y a fait** : relié au repo GitHub → déploiement auto.

## 3. Supabase — base de données + comptes utilisateurs (cloud)
- **À quoi ça sert** : sauvegarde tes données dans le cloud + sync entre appareils + système de comptes (email/mot de passe).
- **Connexion** : https://supabase.com → ton projet **Lozzy24's Project**
- **Référence projet** : `nlchdhxnblhctjlkofkb`
- **Coût** : gratuit (offre de base, largement suffisant au début).
- **Ce qu'on y a fait** : créé la table `app_state` + sécurité (RLS), puis collé l'**URL** + la **clé anon/publishable** dans l'app.
- ⚠️ La clé **secret** (`sb_secret_…`) reste **privée** — jamais dans l'app.

## 4. OpenAI — IA avancée (OPTIONNEL)
- **À quoi ça sert** : analyse **photo de repas** (calories/macros) + réponses GPT du coach.
- **Connexion** : https://platform.openai.com
- **Coût** : **payant à l'usage** (~0,01 $/photo). Sans clé, l'app marche quand même (scan code-barres + saisie manuelle + coach local).
- **Ce qu'on y a fait** : rien d'obligatoire ; un champ "clé OpenAI" est prêt dans Profil si tu veux l'activer.

## 5. OpenFoodFacts — base alimentaire (scan code-barres)
- **À quoi ça sert** : récupère les infos nutritionnelles quand tu scannes un code-barres.
- **Compte** : **aucun** (API publique gratuite).
- **Coût** : gratuit.

---

## Librairies intégrées (aucun compte, déjà dans l'app)
- **Three.js** → corps 3D
- **Chart.js** → graphiques
- **html5-qrcode** → scan code-barres
- **supabase-js** → connexion à Supabase

---

## En résumé : 3 comptes essentiels
| Service | Rôle | Coût |
|---|---|---|
| **GitHub** | le code | gratuit |
| **Netlify** | mise en ligne | gratuit |
| **Supabase** | cloud + comptes | gratuit |

OpenAI = optionnel/payant. OpenFoodFacts = sans compte.

---

## Pour plus tard (commercialisation)
Quand tu voudras vendre l'app : l'URL + clé anon Supabase seront **intégrées** dans l'app → tes clients n'auront **qu'à créer un compte** (email/mot de passe). Pas de SQL ni de clés de leur côté.
