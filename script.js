var sconto;

//chiedere all'utente dove vuole andare (in km)
var distanzaKm = parseInt (prompt ("Quanti km vorresti percorrere oggi? "));

//chiedere all'utente quanti anni ha
var etaUtente = prompt ("Quanti anni hai? ");

//calcolare il prezzo totale del viaggio
var biglietto = 0.21 * distanzaKm;


if (etaUtente < 18) {
  sconto=(biglietto*0.2) ;
} else if (etaUtente>65) {
  sconto=(biglietto*0.4) ;
} else {
  sconto=0;
}

// var b = biglietto.toFixed(1);
// var s = sconto.toFixed(2);
 Math.floor(biglietto);
 Math.floor(sconto);


console.log(biglietto);
console.log(sconto);
document.getElementById('titolo').innerHTML = "Il prezzo del biglietto è di " + ( biglietto - sconto ) + "€";
