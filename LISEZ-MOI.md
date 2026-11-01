# AromaLab 1.1 — Application web installable (PWA)

## Ce qui a changé
- AromaLab garde **ses 25 arômes**, quiz, notes, favoris, défis et scores de la version précédente.
- Une **icône AromaLab** est incluse aux tailles 192 et 512 pixels.
- Le **manifeste** permet l’installation comme application sur les navigateurs compatibles.
- Le **service worker** conserve la page pour qu’elle fonctionne ensuite hors ligne.
- La clé de sauvegarde (`aromalab-saves-v1`) reste inchangée : les données du même navigateur/origine sont conservées lors de la mise à jour.

## Mettre à jour le dépôt GitHub
1. Faites éventuellement une copie de l’ancien `index.html` (dans GitHub : historique / version précédente).
2. Ouvrez https://github.com/dinlisa/Aromalab ; allez dans **Code**.
3. Choisissez **Add file → Upload files**.
4. Déposez **les 6 fichiers à la racine du dépôt**, pas le ZIP et pas le dossier contenant les fichiers :
   - `index.html`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon.svg`
   - `icon-192.png`
   - `icon-512.png`
5. Validez **Commit changes**. Les anciens `index.html`, `manifest.webmanifest` et `sw.js` doivent être remplacés. Les anciens fichiers en plus peuvent rester pour l’instant.
6. Dans Settings → Pages, vérifiez Deploy from a branch → main → /(root).
7. Attendez que l’onglet Actions indique le déploiement réussi, puis ouvrez https://dinlisa.github.io/Aromalab/ dans Chrome.

## Installer sur Android
1. Si vous avez encore l’ancien raccourci : retirez uniquement le raccourci de l’écran d’accueil (pas les données du navigateur).
2. Ouvrez le site dans Chrome, rechargez-le et naviguez un peu dessus.
3. Menu ⋮ → **Installer l’application** (ou **Ajouter à l’écran d’accueil**, selon le navigateur et l’appareil).
4. Lancez AromaLab depuis sa nouvelle icône, et vérifiez qu’il n’y a pas de barre d’adresse de Chrome.
5. Après avoir ouvert le site **une fois avec Internet**, coupez Wi-Fi et données mobiles, puis rouvrez l’app. Les arômes et quiz doivent rester accessibles ; les liens externes vers les sources nécessitent Internet.

## En cas d’ancien cache
- Fermez les anciens onglets AromaLab puis rechargez la page.
- Si le nouveau menu d’installation n’apparaît pas tout de suite, revenez dans quelques minutes et réessayez après une navigation normale. Chrome peut attendre un peu avant de proposer l’installation.
- Évitez « effacer les données du site » : cela supprimerait les notes et favoris sauvegardés localement.

## Avertissements
- Chrome doit visiter le site **en HTTPS** pour installer la PWA et utiliser le service worker. Une ouverture locale de `index.html` fonctionne pour tester l’application, mais pas l’installation PWA.
- GitHub Pages héberge le site, mais ne synchronise pas les données d’un appareil à l’autre.
- L’installation dépend de la version de Chrome/Android et du téléphone.
