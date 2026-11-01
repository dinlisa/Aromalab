# AromaLab 🌿 — version 1.3.3

**Découvre les molécules et les arômes du vin et de la bière tout en jouant.**

Application installable (PWA) gratuite, conçue pour apprendre sans consommation d'alcool.

## Fonctionnalités

- 60 fiches d'arômes documentées, vin et bière ; références scientifiques dans chaque fiche.
- 209 questions, 4 modes de quiz, niveaux et filtres Vin/Bière.
- Corrections scientifiques, historique des quiz, suivi des questions déjà rencontrées.
- XP, niveaux et badges, défis quotidiens, collection personnelle et notes.
- **Nouveau** : création de compte par e-mail, connexion, sauvegarde durable de toutes les parties et synchronisation des XP avec **Supabase**.
- Import manuel des anciennes parties locales, sans double comptage ; hors connexion pour les contenus de l'app, synchronisation au retour du réseau.

## Lancer

L'application est hébergée par GitHub Pages : https://dinlisa.github.io/Aromalab/

Sans configuration, elle fonctionne en mode invité local. Pour activer les comptes, suis **[INSTALLATION-SUPABASE.md](INSTALLATION-SUPABASE.md)**. Il faut configurer `config.js` avec les identifiants publics de ton propre projet Supabase et exécuter `supabase-schema.sql`.

## Stockage et confidentialité

Les comptes et données privées sont gérés par Supabase Auth et une base PostgreSQL sous règles RLS. Les mots de passe ne sont jamais traités directement par AromaLab. Le mode invité garde les données dans le navigateur. Ne publie aucune clé privée.

**État du projet : prototype**. Tester confirmation d'e-mail, restauration, suppression de compte, limite d'envoi d'e-mails et règles de confidentialité avant de l'ouvrir largement au public.

## Historique

- **1.0** : bibliothèque et quiz.
- **1.1** : PWA installable et hors ligne.
- **1.2** : 60 arômes et bibliographie scientifique.
- **1.3** : 209 questions, modes et niveaux.
- **1.3.1** : filtres Vin/Bière et compteurs corrigés.
- **1.3.2** : historique détaillé des parties.
- **1.3.3** : comptes Supabase, sauvegarde de toutes les parties, XP synchronisés.

## Sources et licences

Voir `SOURCES-SCIENTIFIQUES.md` dans l'archive complète de la version 1.3. Les références sont également accessibles directement depuis chaque fiche et correction.
