# 1. Node.js et Express

> Rappel : Node.js est la plate-forme d'exécution JavaScript qui se lance en ligne de commande, et permet notamment de créer des applications **serveur**. Express est un *framework* : il fournit des fonctionnalités et, au-delà, une *structure* sur laquelle se baser, pour créer des applications serveur.

Ici, le navigateur ne te sera d'aucune utilité... sauf pour lire la présente doc ! Rends-toi donc dans le terminal, et tu auras besoin de *deux* terminaux: soit tu lances deux fenêtres séparées, soit tu ouvres un deuxième onglet dans la même fenêtre (Ctrl-Shift-T dans le terminal Ubuntu).

> Astuce : tu peux passer d'un onglet à l'autre en cliquant sur le titre de l'onglet, comme dans un navigateur web... Ou bien, plus rapide, appuyer sur Ctrl-PageUp ou Ctrl-PageDown pour passer de l'un à l'autre (si tu ne sais pas où sont PageUp et PageDown sur ton clavier, demande !)

Dans les deux terminaux, reste sous ce répertoire (`express-docs`).
* Le premier va être monopolisé par les exemples de serveurs qu'on va utiliser dans cette section et les suivantes. Lance le serveur correspondant à cette première section : `node 01/express-text/server.js`. Il te donne des informations sur les URL disponibles. Laisse-le tourner ainsi.
* Dans le deuxième, tu peux ouvrir tout le dossier dans Atom en lançant  `01-express-text`. Une fois le dossier ouvert, Atom te "rend la main", et tu peux à nouveau saisir des commandes dans le terminal. D'ici, tu vas envoyer des requêtes au serveur, *sans passer par le navigateur* !

Pour cela, tu vas utiliser la commande `curl`, qui doit être disponible sur ton système. Pour le vérifier, lance `curl` dans le terminal, sans aucun paramètre. Tu dois obtenir un message semblable au suivant (peut-être traduit en français) :

    curl: try 'curl --help' or 'curl --manual' for more information

Sinon, installe `curl` en lançant `sudo apt-get install curl`.

`curl` s'utilise en lui passant au moins un argument qui est une URL. Tape :

    curl http://localhost:4000/

Tu devrais obtenir ceci :

    Ici c'est l'index !

Et juste après, tu as de nouveau l'*invite de commande* ou *prompt*, qui te permet de saisir une autre commande.

### Exercice, partie 1

On va, dans l'exercice, lancer plusieurs requêtes, et sauvegarder leur résultat dans un fichier texte nommé `01-retours-requetes.txt`. Essaie ceci :

    curl -s http://localhost:4000/ >> 01-retours-requetes.txt

Deux choses ont changé par rapport à la dernière commande :

    * L'argument `-s` passé à `curl` l'oblige à rester en mode "silencieux" (sinon il afficherait des statistiques dont on n'a pas besoin ici)
    * On a fait suivre l'URL du signe `>>` suivi d'un nom de fichier. Les opérateurs `>` et `>>` ont un sens bien particulier dans le terminal. Ils permettent de *rediriger* la "sortie" d'une commande (le texte qu'elle afficherait normalement) vers un fichier. L'opérateur `>` va provoquer l'*écrasement* du fichier s'il existait, l'opérateur `>>` permet d'*ajouter* du contenu au fichier. Dans les deux cas, si le fichier cible indiqué après l'opérateur est absent, il est créé.

Si tu fais ensuite `cat 01-retours-requetes.txt` pour afficher le contenu du fichier, tu obtiens à ce stade.

    Ici c'est l'index !

**Répète plusieurs fois de suite la commande précédente**, en changeant à chaque fois d'URL, en prenant celles-ci dans l'ordre :

* http://localhost/introduction
* http://localhost/explication

À ce stade, tu peux afficher à nouveau le contenu du fichier, qui doit désormais contenir 3 lignes. Tu vas lancer un premier test pour vérifier que tu as bien suivi les étapes :

    mocha tests/01-express.test.js

> Le 1er test devrait passer, et le 2ème échouer ! Tu vas faire passer le 2ème test dans la section suivante

### Exercice, partie 2

Tu dois modifier le fichier `server.js` pour ajouter, après la route `/explication`, une 4ème route associée à l'URL `/exercice`, qui va renvoyer le texte `Trop facile, cet exercice !\n`.

Le `\n` est important, il matérialise un "retour chariot" (touche entrée), et permet de bien délimiter les lignes dans le fichier `01-retours-requetes.txt`.

Tu dois alors interrompre le serveur (Ctrl-C) puis le relancer.

Ensuite, *utilise curl selon le même principe* que pour les 3 autres URL, *toujours* en redirigeant vers `01-retours-requetes.txt`. Tu peux vérifier que tu as désormais 4 lignes en affichant `01-retours-requetes.txt` avec 4. Puis relance l'outil de vérification automatique :

    mocha tests/01-express.test.js

Cette fois le 2ème test devrait passer aussi !
