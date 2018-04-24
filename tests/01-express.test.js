const assert = require('assert')
const fs = require('fs')

describe('Vérification exemple 1', () => {

  it('Le fichier 01-retours-requetes.txt doit exister et contenir les 3 lignes attendues', done => {
    fs.readFile('01-retours-requetes.txt', (err, buffer) => {
      if(err) {
        done(new Error(`Echec de la lecture - message renvoyé par fs.readFile: ${err.message}`))
      }
      const content = buffer.toString()
      const lines = content.split('\n')
      if(lines.length === 5) {
        lines.splice(3, 1)
      }
      assert.deepStrictEqual(lines, [
        "Ici c'est l'index !",
        'Introduction : ce tuto présente le JavaScript côté serveur avec Node.js et Express.',
        'Le tuto comporte 3 routes. Chaque route associe une URL, et une fonction à appeler quand on requête cette URL.',
        '' // Une ligne vide à la fin
      ], "Les 3 lignes sont différentes de ce qui est attendu")
      done()
    })
  })

  it('Le fichier 01-retours-requetes.txt doit contenir les 4 lignes attendues', done => {
    fs.readFile('01-retours-requetes.txt', (err, buffer) => {
      if(err) {
        done(new Error(`Echec de la lecture - message renvoyé par fs.readFile: ${err.message}`))
      }
      const content = buffer.toString()
      const lines = content.split('\n')
      assert.deepStrictEqual(lines, [
        "Ici c'est l'index !",
        'Introduction : ce tuto présente le JavaScript côté serveur avec Node.js et Express.',
        'Le tuto comporte 3 routes. Chaque route associe une URL, et une fonction à appeler quand on requête cette URL.',
        'Trop facile, cet exercice !',
        '' // Une ligne vide à la fin
      ], "Les 4 lignes sont différentes de ce qui est attendu")
      done()
    })
  })
})
