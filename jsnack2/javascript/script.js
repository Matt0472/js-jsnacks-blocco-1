// Snack2
// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

var nome1 = prompt('Inserisci la prima parola che hai scelto');
var nome2 = prompt('Inserisci la seconda parola che hai scelto');

if (nome1.length > nome2.length) {
  console.log(nome2, nome1);
} else if (nome1.length < nome2.length) {
  console.log(nome1, nome2);
} else {
  console.log('Le due parole hanno la stessa lunghezza');
}
