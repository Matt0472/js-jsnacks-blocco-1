// snack4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var listaInvitati = ['Jacopo', 'Roberta', 'Giulia', 'Nathan', 'Marco'];
var nomeUtente = prompt('Qual è il tuo nome?');

// metodo 1 senza flag(vero/falso)
// var messaggio = 'Pussa via';
//
// for (var i = 0; i < listaInvitati.length; i++) {
//   var nomeCorrente = listaInvitati[i];
//   if (nomeUtente == nomeCorrente) {
//     messaggio = 'Welcome to paradise';
//   }
// }
// alert(messaggio);


// metodo 2 con flag
// var nomeUtentePresente = false;
//
// for (var i = 0; i < listaInvitati.length; i++) {
//   var nomeCorrente = listaInvitati[i];
//   if (nomeUtente == nomeCorrente) {
//     nomeUtentePresente = true;
//   }
// }
//  if (nomeUtentePresente == true) {
//    alert('Benvenuto al party!');
//  } else {
//    alert('Siamo spiacenti di comunicarti che il tuo nome non è presente nella lista invitati');
//  }


// metodo 3 con while

var messaggio = 'Pussa via!';
var i = 0;

while (i < listaInvitati.length) {
  var nomeCorrente = listaInvitati[i];
  if (nomeUtente == nomeCorrente) {
    messaggio = 'Welcome to paradise!';
  }
  i++;
}
alert(messaggio);
