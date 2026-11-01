# 🌿 AromaLab — Le goût de la découverte

**Version actuelle : 1.3.2** · Application web progressive (PWA) · En français

👉 **[Ouvrir AromaLab](https://dinlisa.github.io/Aromalab/)**

AromaLab est une application pédagogique gratuite pour explorer les **arômes du vin et de la bière**, découvrir des molécules odorantes et tester ses connaissances avec des quiz scientifiques. Elle est pensée pour les curieux, les amateurs et les étudiants : **aucune consommation d’alcool n’est nécessaire**.

L'application fonctionne sur ordinateur et mobile, peut être installée sur l'écran d'accueil et propose un mode hors connexion après un premier chargement en ligne.


### Historique des quiz — version 1.3.2

- Depuis **Jouer & apprendre → Voir mon historique** ou **Ma collection → Voir mes parties**, tu peux consulter les dernières parties terminées, avec leur date, leur mode, le thème et le score.
- Les parties déjà enregistrées avant la version 1.3.2 restent visibles avec leur score et leur date si ces données sont encore sur le même appareil. Le détail de leurs anciennes réponses **ne peut pas être reconstitué** : il n'était pas sauvegardé.
- Les nouvelles parties enregistrent les questions posées, les réponses choisies, les solutions, les explications et les liens scientifiques. Tu peux revoir tes erreurs depuis l'historique.
- Les questions déjà vues depuis la version 1.3.2 sont comptabilisées et les questions inédites sont sélectionnées en priorité, tant qu'il en reste dans les filtres choisis.
- Le suivi conserve les **80 dernières parties** dans les données locales de l'appareil, sans synchronisation ni création de compte.

## ✨ Fonctionnalités

### Bibliothèque d'arômes

- **60 fiches** sur les odeurs, molécules et familles chimiques associées.
- Informations sur l'origine possible des composés et leur expression dans le vin ou la bière.
- Exemples d'odeurs du quotidien et petits exercices olfactifs sans alcool.
- Recherche par arôme ou molécule et filtres par famille.
- Favoris, notes personnelles et possibilité de marquer un arôme comme découvert.
- Liens vers des publications scientifiques depuis les fiches et la rubrique **À propos → Sources scientifiques**.

> **Précision scientifique :** une odeur ne correspond pas nécessairement à une seule molécule. Sa perception dépend notamment de la concentration, de la matrice, des interactions entre composés et de la sensibilité individuelle. Les associations proposées sont pédagogiques, non des diagnostics analytiques.

### Quiz et apprentissage

La banque comprend **209 questions** :

| Type de questions | Nombre |
| --- | ---: |
| Associations arôme–molécule issues des 60 fiches | 120 |
| QCM de compréhension scientifique | 37 |
| Vrai / faux, dont les questions historiques | 52 |
| **Total** | **209** |

**Quatre modes de jeu :**

1. **Devine l'arôme** — retrouver un descripteur à partir d'une molécule.
2. **Molécule mystère** — relier une note olfactive à un composé associé.
3. **Le labo scientifique** — questions de compréhension sur les arômes, la fermentation et les défauts.
4. **Mythe ou science ?** — vérifier des affirmations sur le vin et la bière.

Chaque mode propose des **corrections explicatives**, avec références scientifiques lorsque pertinentes. Les sessions contiennent **jusqu'à 8 questions**, tirées aléatoirement parmi les questions compatibles.

Tu peux choisir :

- **Un univers :** Vin, Bière ou Vin & bière.
- **Une difficulté :** Découverte, Intermédiaire, Expert ou Tous niveaux.

Depuis la **version 1.3.1**, les filtres Vin / Bière ont été affinés : une partie n'est plus complétée avec des questions hors thème ou hors niveau. Si une combinaison n'a que 5 questions disponibles, la partie en comporte 5.

L'écran des quiz distingue désormais **le nombre total de questions**, **le nombre disponible selon les filtres** et **le maximum de questions par partie**.

### Progression personnelle

- Points d'expérience (**XP**), niveaux et badges.
- Statistiques des quiz et résultats enregistrés sur l'appareil.
- Défi quotidien et suivi des séries.
- Collection d'arômes découverts et favoris.
- Partage du score à la fin d'un quiz, selon les possibilités du téléphone ou du navigateur.

## 📱 Installer AromaLab

**Android (Chrome)**

1. Ouvre **https://dinlisa.github.io/Aromalab/** dans Chrome.
2. Ouvre le menu **⋮**.
3. Appuie sur **Installer l'application** ou **Ajouter à l'écran d'accueil**, suivant l'option proposée.
4. Confirme, puis lance AromaLab depuis son icône.

**iPhone (Safari)**

1. Ouvre l'adresse d'AromaLab dans Safari.
2. Utilise **Partager → Sur l'écran d'accueil**.
3. Confirme l'ajout.

**Hors connexion :** ouvre l'application au moins une fois avec Internet pour permettre la mise en cache. Les liens vers les publications externes nécessitent une connexion. Le comportement de l'installation et du cache peut varier selon le navigateur.

## 🛠️ Développement et hébergement

AromaLab est une application statique en **HTML, CSS et JavaScript**, sans framework, compte utilisateur, base de données externe ni API payante. Elle est publiée gratuitement avec **GitHub Pages**.

### Structure de la version actuelle

| Fichier | Rôle |
| --- | --- |
| `index.html` | Application complète : structure, styles, 60 fiches, questions et logique JavaScript. |
| `manifest.webmanifest` | Nom, icônes et configuration d'installation PWA. |
| `sw.js` | Mise en cache pour le mode hors connexion et mises à jour de la PWA. |
| `icon.svg`, `icon-192.png`, `icon-512.png` | Icônes de l'application. |
| `README.md` | Documentation du projet (ce fichier). |

> D'anciens fichiers comme `styles.css`, `js/` ou `assets/` peuvent subsister dans le dépôt à la suite des premières versions. **La version autonome actuelle n'en dépend pas** : le fonctionnement principal est intégré à `index.html`.

### Tester sur ordinateur

Il est possible d'ouvrir directement `index.html` dans Chrome pour essayer l'interface. Pour tester l'installation PWA et le service worker localement, utilise plutôt un serveur local :

```bash
python -m http.server 8000
```

Puis ouvre `http://localhost:8000`.

### Mettre à jour l'application sur GitHub Pages

1. Dans le dépôt [dinlisa/Aromalab](https://github.com/dinlisa/Aromalab), ouvre **Code → Add file → Upload files**.
2. Ajoute les fichiers à remplacer à la **racine du dépôt**, puis valide avec **Commit changes**.
3. Si GitHub Pages est déjà activé, laisse **Settings → Pages → Deploy from a branch → main → /(root)** tel quel.
4. Attends la fin du workflow **pages build and deployment** dans l'onglet **Actions**.
5. Ouvre AromaLab avec Internet, actualise et relance l'application installée si nécessaire.

Pour une modification de `index.html` impactant la PWA, **incrémente le nom du cache dans `sw.js`** (`CACHE_NAME`) afin de faciliter le renouvellement des ressources hors ligne. Ne vide pas les données de l'application pour forcer une mise à jour : cela effacerait la progression locale.

## 🔒 Données et confidentialité

- **Aucun compte n'est requis** : pas de synchronisation entre appareils.
- Les découvertes, favoris, notes, scores et défis sont enregistrés dans le **stockage local du navigateur** (`localStorage`).
- La clé de sauvegarde actuelle est `aromalab-saves-v1`, conservée lors des mises à jour pour préserver les données existantes.
- Les données peuvent disparaître si tu effaces les données du site ou désinstalles l'application avec suppression de son stockage.
- La rubrique **À propos** propose une commande pour effacer les données locales.

## 🔬 Sources et démarche scientifique

AromaLab exploite des articles scientifiques, revues spécialisées et ressources universitaires. Quelques références de base :

- Styger, Prior & Bauer (2011), *Wine flavor and aroma* — [DOI](https://doi.org/10.1007/s10295-011-1018-4).
- Robinson et al. (2014), *Origins of Grape and Wine Aroma* — [DOI](https://doi.org/10.5344/ajev.2013.12070).
- Pires et al. (2014), *Yeast: the soul of beer’s aroma* — [DOI](https://doi.org/10.1007/s00253-013-5470-0).
- Keng et al. (2023), *Uncorking Haloanisoles in Wine* — [DOI](https://doi.org/10.3390/molecules28062532).

Les **20 références documentaires** sont consultables dans l'application, ainsi que les liens présents dans les fiches et corrections des quiz. Une référence générale ne valide pas à elle seule chaque association sensorielle : une confirmation spécifique peut nécessiter des analyses chimiques et des études sensorielles.

AromaLab constitue un **outil pédagogique**, et non un instrument analytique ou un avis professionnel. Il n'est pas nécessaire de boire d'alcool pour utiliser l'application. Pour s'exercer, privilégier les odeurs alimentaires du quotidien : **ne pas inhaler volontairement solvants, carburants, fumées ou produits chimiques**.

## 🗓️ Historique des versions

| Version | Évolutions principales |
| --- | --- |
| **1.0** | Première bibliothèque de 25 arômes, quiz et collection personnelle. |
| **1.1** | PWA installable, icônes, mise en cache hors connexion. |
| **1.2** | Passage à 60 arômes et enrichissement des références scientifiques. |
| **1.3** | Banque de 209 questions, 4 modes, 3 difficultés, filtres et statistiques. |
| **1.3.1** | Filtrage Vin / Bière amélioré et compteurs de questions plus lisibles. |

**Prochaine piste envisagée :** profil aromatique personnalisé et résultats partageables (version 1.4, non encore développée).

## Mise à jour 1.3.2

Remplacer `index.html`, `sw.js` et `README.md` à la racine du dépôt GitHub. Garder les autres fichiers et ne pas effacer les données de l’application Android. Charger une fois le site connecté pour actualiser le cache hors ligne.
