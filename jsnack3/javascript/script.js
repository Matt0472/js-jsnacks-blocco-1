// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for e while

var somma = 0;
for (var i = 0; i < 5; i++) {
  var numeri = parseInt(prompt('Inserisci un numero'));
  somma += numeri;
}
console.log(somma);


// var somma = 0;
// var i = 0;
//
// while (i < 5) {
//   var numeri = parseInt(prompt('Inserisci un numero'));
//   somma += numeri;
//   i++;
// }
// console.log(somma);
