/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/

var input = 91;

var hours = Math.trunc(input/3600);

var rest = input%3600;

var minutes = Math.trunc(rest/60);

var seconds = rest%60;

console.log(hours + ' ore, ' + minutes +' minuti, ' +  seconds + ' secondi');
