<h1 align="center">Projet 7 KASA</h1>

<div align="center"><img height="200" src="https://i31.servimg.com/u/f31/13/52/99/79/imgrea11.png"></div>

## 📝 Sommaires

- [Présentation du projet](#présentation)
- [Aperçu du projet](#projet)
- [Spécification du projet](#specification)
- [Utilisation de la parti Front](#utilisation)
- [Installation de l'API](#api)
- [Création d'un compte utilisateur](#utilisateur)

## 💭 Petit mot de présentation <a name = "présentation"></a>

Pour ce dernier projet avec OpenClassrooms, il fus l'occasion d'apprendre, comprendre et urtiliser l'environnement de React. Depuis une maquette qui ce trouvait sur la plateforme de Figma, je devais reproduire tout les éléments de la partie Front-end sans utilisé de librairie externe.
Pour la parti Back-end n'étant pas à reproduire, elle est simuler par par des fichiers ".json".

---

## :movie_camera: Scénario du projet

Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important.
La CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.
Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance.
Quanbd a

Lien des spécifications technique : [Spécifications-technique](https://drive.google.com/file/d/1wfPkogCfQTy7tiaiKpnF6hAmYTQ9fT31/view?usp=sharing)

---

### Langages à utilisés

- <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/logo_h11.png"> HTML/CSS - ainsi que le prépossesseur de CSS : Sass <img height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png">

- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"> Javascript

#### Les plateformes / frameworks / librairies

- <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"> React

---

## ⛏️ Aperçu du projet <a name = "projet"></a>

Objectif : Créez une application web avec React.

Utilisation : <img height="30" src="https://i31.servimg.com/u/f31/13/52/99/79/logo_h11.png"> <img height="30" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"> <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"> <img height="30" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png">

Aperçu :

<div align="center"><img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/kasa_011.png"> <img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/kasa_010.png"> <img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/kasa_013.png"> <img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/kasa_012.png"> <img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/kasa_015.png"> <img height="300" src="https://i31.servimg.com/u/f31/13/52/99/79/kasa_014.png"></div>

---

## :gear: Les Spécification du projets <a name = "specification"></a>

- Pas de librairie React externe.
- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
- La logique du routeur est réunie dans un seul fichier.
- Découpage en composants modulaires et réutilisables.
- Un composant par fichier.
- Structure logique des différents fichiers.
- Utilisation des props entre les composants.
- Utilisation du state dans les composants quand c'est nécessaire.
- Gestion des événements.

---

## :gear: Utilisation de la partie Front <a name = "utilisation"></a>

Cloner le dépôt git du projet via un éditeur de code ou le télécharger puis le décompresser sur votre machine. Une fois le dossier ouvert avec un éditeur de code (comme VSCode), ouvrir et saisir dans le terminal les commandes suivante :

- "npm install"

puis pour le lancer au local saisir :

- "npm start"

une page internet s'ouvrira sur le navigateur par defaut avec le site à l'adresse: http://localhost:3000/

## :gear: La partie BACKEND <a name = "api"></a>

La parti Back-end n'éxistant pas, elle est simuler par des fichiers ".json".
Ceux-ci ce trouve dans les dossiers "src" puis "data".
