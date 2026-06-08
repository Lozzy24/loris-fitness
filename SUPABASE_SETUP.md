# ☁️ Sync Cloud — Configuration Supabase (5 min, une seule fois)

La sync permet de sauvegarder tes données et de les retrouver sur **n'importe quel appareil**.

## 1. Récupère tes clés
Dans ton projet Supabase → **Project Settings → API** :
- **Project URL** (ex: `https://abcd.supabase.co`)
- **anon public** key (clé publique, sans danger côté client)

## 2. Crée la table (SQL)
Supabase → **SQL Editor** → **New query** → colle ceci → **Run** :

```sql
-- Table de sauvegarde (1 ligne par utilisateur)
create table if not exists public.app_state (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- Sécurité : chacun n'accède qu'à SA ligne
alter table public.app_state enable row level security;

create policy "app_state select own" on public.app_state
  for select using (auth.uid() = user_id);
create policy "app_state insert own" on public.app_state
  for insert with check (auth.uid() = user_id);
create policy "app_state update own" on public.app_state
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
```

## 3. (Recommandé) Connexion instantanée
Supabase → **Authentication → Providers → Email** → désactive **« Confirm email »**
→ permet de se connecter tout de suite sans cliquer un lien mail.
(Si tu le laisses activé : valide le mail de confirmation après inscription.)

## 4. Dans l'app
**Outils → Profil → Sync Cloud — Supabase** :
1. Colle **Project URL** + **clé anon** → **Connecter**
2. **Créer un compte** (email + mot de passe) → la sauvegarde cloud s'active
3. Sur un autre appareil → même URL/clé → **Se connecter** → **Restaurer**

## Comment ça marche
- **Sauvegarde automatique** (par défaut) : tes changements remontent dans le cloud ~2,5 s après.
- **Restaurer** : récupère la dernière sauvegarde cloud (écrase le local).
- Tout reste **offline-first** : l'app marche sans connexion, la sync se fait dès que tu es en ligne.
- La clé anon est **publique par design** ; la sécurité vient des **RLS** ci-dessus (chacun ne voit que ses données).
