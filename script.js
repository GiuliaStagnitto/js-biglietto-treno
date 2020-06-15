//chiedere all'utente dove vuole andare (in km)
var distanzaKm = parseInt (prompt ("Quanti km vorresti percorrere oggi? "));

//chiedere all'utente quanti anni ha
var etaUtente = prompt ("Quanti anni hai? ");

//calcolare il prezzo totale del viaggio

var biglietto = 0.21 * distanzaKm;

console.log(biglietto);
document.getElementById('titolo').innerHTML = "Il prezzo del biglietto è di " + biglietto + "€";

if (etaUtente < 18) {
  biglietto - 20%
} else (etaUtente > 65) {
  biglietto - 40% ;
}
