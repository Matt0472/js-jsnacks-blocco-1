// Snack5
// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var emptyArray = [];

for (var i = 0; i < 6; i++) {
  var userNumber = parseInt(prompt('Inserisci un numero'));
  if (userNumber % 2 != 0) {
    emptyArray.push(userNumber);
  }
}
console.log(emptyArray);
