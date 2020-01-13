// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var number = prompt('Inserisci un numero di 4 cifre');
var somma = 0;
for (var i = 0; i < number.length; i++) {
  somma += parseInt(number[i]);
}
console.log(somma);
