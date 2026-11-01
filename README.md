# AromaLab — Version 1.1 🌿

Une petite application web **en français** pour explorer les odeurs du quotidien, comprendre quelques molécules aromatiques du vin et de la bière, et apprendre en jouant.

**100 % HTML, CSS et JavaScript — sans framework, compte, API payante ni abonnement.**

## Ce qui fonctionne

- **Accueil** : statistiques personnelles, sélection de quatre arômes et défi du jour.
- **Bibliothèque** : 25 fiches avec descriptions, composés associés, origines, exemples dans le vin et la bière, et petits défis olfactifs.
- **Recherche et filtres** : recherche dans les arômes, molécules, familles et contextes ; filtrage par famille, favoris ou découvertes.
- **Trois quiz** de huit questions avec correction immédiate et score : Devine l’arôme, Molécule mystère et Mythe ou science ?
- **Défi quotidien** : une question différente selon la date locale, avec réponse enregistrée pour la journée.
- **Collection** : arômes repérés, favoris, notes personnelles, niveau, points et badges.
- **Sauvegarde locale** : tes notes et ta progression sont conservées dans le navigateur (localStorage).
- **Responsive et installable** : utilisable sur ordinateur et sur téléphone ; manifest et service worker PWA avec ressources principales accessibles hors ligne après installation/chargement initial sur un site HTTPS.

## Essayer l'application

### Méthode simple

1. Décompresse `AromaLab.zip`.
2. Ouvre le dossier `AromaLab`.
3. Double-clique sur `index.html`.

La navigation, les jeux et les fiches fonctionnent sans installation particulière. **Attention** : sur certains navigateurs, la sauvegarde locale peut ne pas être fiable depuis un fichier ouvert directement (`file://`). Pour profiter de la sauvegarde et de la PWA, utilise le site publié ou un serveur local.

### Méthode recommandée sur ordinateur

Si Python est installé, ouvre un terminal dans le dossier `AromaLab` puis lance :

```bash
python -m http.server 8000
```

Ouvre ensuite `http://localhost:8000` dans ton navigateur. Pour arrêter le serveur, fais `Ctrl + C` dans le terminal.

## Mettre en ligne gratuitement sur GitHub Pages

1. Crée un compte GitHub, si nécessaire.
2. Crée un nouveau dépôt public, par exemple `aromalab`.
3. Envoie **le contenu du dossier** `AromaLab` à la racine du dépôt : `index.html`, `styles.css`, `js/`, `assets/`, `manifest.webmanifest`, `sw.js` et éventuellement ce README.
4. Dans le dépôt, ouvre **Settings → Pages**.
5. Dans **Build and deployment**, sélectionne **Deploy from a branch**, puis la branche principale (`main`) et le dossier `/(root)`. Enregistre.
6. GitHub affiche une adresse du type `https://TON-PSEUDO.github.io/aromalab/` une fois la publication effectuée.

Les chemins de l'application sont **relatifs**, donc compatibles avec le sous-dossier habituel de GitHub Pages.

L'hébergement des pages statiques peut être gratuit selon les conditions de GitHub Pages. Un compte utilisateur, une base de données centralisée ou de vrais duels multijoueurs ne sont pas inclus dans cette version.

## Installer sur téléphone

- **Android (Chrome)** : ouvre le site publié en HTTPS, puis utilise le menu du navigateur et l’option « Installer l’application » ou « Ajouter à l’écran d’accueil ».
- **iPhone (Safari)** : ouvre le site publié, puis utilise **Partager → Sur l’écran d’accueil** (intitulé selon la version d’iOS).

Le comportement d’installation dépend du navigateur ; les autres appareils peuvent simplement utiliser le site web.

## Où modifier les contenus ?

| Fichier | Contenu |
|---|---|
| `index.html` | Point d’entrée de l’application |
| `styles.css` | Toutes les couleurs, mises en page, composants et adaptations mobile |
| `js/data.js` | 25 fiches, familles, sources scientifiques et questions vrai/faux |
| `js/app.js` | Logique de navigation, quiz, collections, défi quotidien et sauvegarde |
| `manifest.webmanifest` | Nom, affichage et icônes de l’application installable |
| `sw.js` | Mise en cache des ressources principales pour utilisation hors ligne |
| `assets/` | Logo et icônes |

Pour ajouter une fiche, crée un nouvel objet dans le tableau `aromas` de `js/data.js`. Pense à mettre à jour les textes indiquant « 25 arômes » dans `js/app.js` et `index.html`, ou à les rendre dynamiques. **Après toute modification du code d’une application publiée**, change le numéro `CACHE_NAME` dans `sw.js` pour forcer la mise à jour du cache PWA.

## Données et confidentialité

Toutes les données personnelles sont stockées **uniquement sur l’appareil et le navigateur utilisés**. Elles ne sont pas synchronisées entre téléphones ou ordinateurs et peuvent être supprimées en effaçant les données du site ou depuis **À propos → Effacer mes données**.

AromaLab est un prototype pédagogique, pas un outil d'analyse chimique ni une recommandation de consommation. Les fiches proposent des associations scientifiques **illustratives** : une odeur ne dépend pas toujours d'une seule molécule. Pour les exercices, privilégie des aliments et végétaux du quotidien et n'inhale pas volontairement des produits chimiques ou de la fumée. Il n’est pas nécessaire de consommer de l’alcool.

## Références

Les références scientifiques sont listées dans l'onglet **À propos**, ainsi qu'au bas des fiches qui les utilisent.
