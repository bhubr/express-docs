/*
 * Une application Express.js qui ne renvoie que du texte quand on
 * fait des requêtes sur ses URL.
 */

// On a besoin du module express
const express = require('express')

// On crée une application express
const app = express()

/**
 * On indique à l'application ce qu'elle doit faire
 * quand elle reçoit une requête sur l'URL / (racine du site)
 * Le 1er argument est une URL, le 2ème est une fonction,
 * qui est appelée à chaque fois qu'une requête est reçue
 * sur l'URL du 1er argument. C'est une "fonction de rappel"
 * ou callback.
 *
 * L'association d'une URL et d'un callback est appelée une ROUTE.
 * Ci-dessous, on a plusieurs routes.
 */
app.get('/', (req, res) => {
  res.send("Ici c'est l'index !\n")
})

app.get('/introduction', (req, res) => {
 res.send('Introduction : ce tuto présente le JavaScript côté serveur avec Node.js et Express.\n')
})

app.get('/explication', (req, res) => {
 res.send('Le tuto comporte 3 routes. Chaque route associe une URL, et une fonction à appeler quand on requête cette URL.\n')
})

// CI-DESSUS AJOUTER UNE 4EME ROUTE.
// URL:                /exercice
// TEXTE à renvoyer:   Trop facile, cet exercice !


const message = `Lancement de l'app Express. Pages:
  * http://localhost:4000
  * http://localhost:4000/introduction
  * http://localhost:4000/explication
  `
console.log(message)
app.listen(4000)
