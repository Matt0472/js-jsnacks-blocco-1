// snack4
// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var listaInvitati = ['Jacopo', 'Roberta', 'Giulia', 'Nathan', 'Marco'];
var nomeUtente = prompt('Qual è il tuo nome?');

var nomeUtentePresente = false;

for (var i = 0; i < listaInvitati.length; i++) {
  var nomeCorrente = listaInvitati[i];
  if (nomeUtente == nomeCorrente) {
    nomeUtentePresente = true;
  }
}
if (nomeUtentePresente == true) {
   alert('Benvenuto al party!');
 } else {
   alert('Siamo spiacenti di comunicarti che il tuo nome non è presente nella lista invitati');
 }
