/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  let risultato;
  if (typeof l1 === "number" && typeof l2 === "number" && l1 > 0 && l2 > 0) {
    risultato = l1 * l2;
  } else
    risultato =
      "Errore: Assicurati che entrambi i parametri siano numeri positivi.";
  return risultato;
}

console.log("ES1: " + area(10, 20));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1, n2) {
  let result;
  if (n1 === n2) {
    result = (n1 + n2) * 3;
  } else result = n1 + n2;
  return result;
}
console.log("ES2 DIVERSI: " + crazySum(10, 20));
console.log("ES2 UGUALI: " + crazySum(20, 20));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(n1) {
  let result;
  if (n1 > 19) {
    result = Math.abs(n1 - 19) * 3;
  } else result = Math.abs(n1 - 19);
  return result;
}
console.log("ES3 MINORE: " + crazyDiff(10));
console.log("ES3 MAGGIORE: " + crazyDiff(20));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(numero) {
  if (typeof numero === "number" && isNaN(numero) !== true) {
    if ((numero >= 20 && numero <= 100) || numero === 400) {
      return true;
    } else {
      return false;
    }
  } else console.log("Non hai inserito un numero intero");
}
console.log("ES4: ", boundary(400));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(string) {
  if (typeof string === "string") {
    if (string.startsWith("EPICODE")) {
      console.log("ES5 già presente: ", string);
    } else console.log("ES5 con AGGIUNTA: ", "EPICODE " + string);
  } else console.log("devi passare una stringa!");
}

epify("CIAO");

let test = "EPICODE 50";
epify(test);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(positivo) {
  if (positivo > 0) {
    if (positivo % 3 === 0) {
      return console.log("ES6: ", positivo + " è un numero multiplo di 3");
    } else if (positivo % 7 === 0) {
      return console.log("ES6: ", positivo + " è un numero multiplo di 7");
    } else return console.log("non è un numero multiplo di 3 e di 7");
  } else console.log("non è un numero positivo");
}
check3and7(70);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringhetta) {
  if (typeof stringhetta === "string") {
    return stringhetta.split("").reverse().join("");
  } else console.log("non è una stringa");
}
console.log("ES7: ", reverseString("CIAO"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringhetta) {
  if (typeof stringhetta === "string") {
    return stringhetta
      .split(" ") // crea un array con dentro ogni singola lettera della string
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) //
      .join(" ");
  }
}

console.log("ES8: ", upperFirst("ciao sono stefano"));
/* ESERCIZIO 9
Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// function cutString(string) {
//  if (typeof string === "string") {
//    return string
//      .split(" ")
//      .map(
//        (word) => word.slice(0, -1) + word.charAt(word.length - 1).toUpperCase()
//      )
//      .join(" ");
//  }
//}
//
//console.log(cutString("ciao"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
  let array = [];
  for (let i = 0; i < n; i++) {
    array.push(Math.floor(Math.random() * 11));
  }
  return array;
}

console.log("ES10: ", giveMeRandom(50));
