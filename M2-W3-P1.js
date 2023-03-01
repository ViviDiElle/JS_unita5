/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.*/


/*
let l1 = 5
let l2 = 10

let area = function (l1, l2) {
    return l1 * l2
}
let risultato = area (5,10)
console.log(risultato)

//OPPURE//

function area (l1,l2) {
    return l1*l2
}
let risultato = area (5,10)
console.log(risultato)


*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* 

let crazySum = function (n1,n2) {
    if (n1 === n2) {
        return (n1 + n2)*3
    } else {
        return n1+n2
    }
}
console.log(crazySum(4,4));


*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero  [CHE SCEGLIAMO NOI] e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* 

let crazyDiff = function (n1) {
    if (n1 > 19) {
        return Math.abs (n1 - 19)*3
    } else {
        return Math.abs (n1 - 19)
    }
}
console.log(crazyDiff(10))

*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* 

let boundary = function (n1) {
    if ((n1 >= 20 &&  n1 <= 100) || n1 === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(29))

*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* 
let codify = function (str) {
    if (str.startsWith('code')) {
        return str
    } else {
        return 'code'+ str
    }
}

console.log(codify('code in tangenziale'));
console.log(codify(' in autostrada'));

*/

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* 
let check3and7 = function (n) {
    if ( n>= 0 && (n % 3 === 0 || n % 7 === 0)) {
        return true
    } else {
        return false
    }
}
console.log(check3and7 (14))


*/

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
let reverseString = function(str) {
    let splitStr = str.split ("")
    let reverseStr = splitStr.reverse()
    let joinStr = reverseStr.join("")
    return joinStr
}
console.log(reverseString("VIVIANA"))

//OPPURE//
return str.split("").reverse().join("") //al posto delle 3 let


*/

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* 


function upperFirst (strUp) {


    let arrString = strUp.split(" "); 

    for (let i = 0; i < arrString.length; i++) {

        arrString[i] = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1);
    }


    let firstUp = arrString.join(" ");
    
    return firstUp;
}


let upStr = upperFirst ("viviana di leonardo")

console.log(upStr);

*/

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* 
 function cutString (strCut) {

     //let cutStrInit = strCut.slice(1);
     //let cutStringFin = cutStrInit.slice(0, -1);

     let cutStringFin = strCut.substring(1, strCut.length -1);

     return cutStringFin;
 }

 let cutStringA = cutString ("Viviana");
 console.log(cutStringA);

*/

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* 

function giveMeRandom (n) {

    let randomArray = [];

    for (let i = 0; i < n; i++) {

      let  randomVal = Math.round(Math.random() * n);

        if (randomArray.includes(randomVal)) {
        
            i = i -1;
            continue;
        }

    randomArray.push(randomVal);

    }

    return randomArray;
}

let randomN = giveMeRandom(20);

console.log(randomN);*/
