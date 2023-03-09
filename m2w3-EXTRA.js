// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

/*  


 function giveMeRandom(n) {
     let arrayDiNumeri = [];
     for (let i = 0; i < n; i++) {
         let nRandom = Math.floor(Math.random()*(10 - 0 + 1)) + 0;
     console.log("numeri random",nRandom);
     arrayDiNumeri.push(nRandom)
     }
     return arrayDiNumeri
 }

 let totale = giveMeRandom(6)
 console.log(totale);


 function checkArray(arrayDiNumeri) {
     let arrayMaggiori5 = 0
     for (const numeroCorrente of arrayDiNumeri) {
         if (numeroCorrente > 5) {
             console.log("controllo n random",numeroCorrente);
             arrayMaggiori5.push(numeroCorrente);
         }
     }
     let totalesomma = 0;
     for (const numeroCorrente of arrayMaggiori5) {
         totalesomma += numeroCorrente 
       }
       console.log("totale",totalesomma);
     }
    checkArray(totale)

*/


/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

/* 
 creare array con oggetti 
 stabilire id - nome - prezzo - quantità  
 creare funzione shoppingCartTotal che calcola il totale dovuto al negozio 

 let shoppingCart = [
     {id:01, nome: "crema",  prezzo:100, quantita: 1},
     {id:02, nome: "cacao",  prezzo:30,  quantita: 2},
     {id:03, nome: "scarpe", prezzo:50,  quantita: 3}
     ]

 function shoppingCartTotal() {
     let totale = 0; 
     for (let i = 0; i < shoppingCart.length; i++) {
         totale += (shoppingCart[i].prezzo * shoppingCart[i].quantita);
     }
     return totale
    }


 console.log(shoppingCartTotal());

 */

/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

// creare array con oggetti 
// stabilire id - nome - prezzo - quantità 
// creare ogetto con id - nome - prezzo - quantità 
// creare una funzione che riceva un oggetto e lo inserisca nell'array shoppingCart

/* 

let shoppingCart = [
     {id:01, nome: "crema",  prezzo:100, quantita: 1},
     {id:02, nome: "cacao",  prezzo:30,  quantita: 2},
     {id:03, nome: "scarpe", prezzo:50,  quantita: 3}
    ]

 let oggettoCart = {id:05, nome: "pizza",  prezzo:20, quantita: 5}

 function addToShoppingCart(aggiungiElemento) {
     shoppingCart.push(aggiungiElemento);
     console.log(shoppingCart.length);
     return shoppingCart
    }

 console.log(addToShoppingCart(oggettoCart));

 */


/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

/* 

 let shoppingCart = [
     {id:01, nome: "crema",  prezzo:100, quantita: 1},
     {id:02, nome: "cacao",  prezzo:30,  quantita: 2},
     {id:03, nome: "scarpe", prezzo:50,  quantita: 3},
     {id:01, nome: "crema",  prezzo:500, quantita: 1},
    ]

 function maxShoppingCart(x) {
     let oggettoCostoso = x[0];
     for (let i = 1; i < x.length; i++) {
         if (x[i].prezzo > oggettoCostoso.prezzo) {
             oggettoCostoso = x[i]
         }
        
     }
     return oggettoCostoso
     }

    console.log(maxShoppingCart(shoppingCart));

 */

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

/* 

 let shoppingCart = [
     {id:01, nome: "crema",  prezzo:100, quantita: 1},
     {id:02, nome: "cacao",  prezzo:30,  quantita: 2},
     {id:03, nome: "scarpe", prezzo:50,  quantita: 3},
     {id:01, nome: "crema",  prezzo:500, quantita: 1},
     ]

 function latestShoppingCart() {
     let shoppingCartUltimo = shoppingCart[shoppingCart.length-1];
     return shoppingCartUltimo
     }

 console.log(latestShoppingCart(shoppingCart));

 */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

/* 

// creare funzione "loopUntil"
// assegnare parametro "x" tra 0 e 9
// in console numero tra 0 9 finchè il numero estratto è maggiore di x per 3 volte di fila


function loopUntil(x) {
    let contatore = 0;
    while (contatore !== 3) {
        let randomArray = Math.floor(Math.random()*(9 - 0));
        console.log("uscira :", randomArray);
        if (randomArray > x) {
            contatore++ 
        }else{
            contatore = 0
        }
    }
    return contatore
}

console.log("uscira 2",loopUntil(4));

 */


/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

/* 

function average (arr1) {
let numeriArr = []
    for (let i = 0; i < arr1.length; i++){
        if (typeof arr1 [i]==='number'){
            numeriArr.push([i])
        }
    }
    let somma = 0
        for(let y = 0; y < numeriArr.length; y++){
            somma+= numeriArr[x]
        }
return somma / numeriArr.length
}
console.log(average(["ciao",2,4,6]))
*/

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

/* 

function longest (arr2) {
let parolaLunga = arr2 [0]
    for (let i = 1; i < arr2.length; i++){
        if (arr2[i].length) > parolaLunga.length{
            parolaLunga = arr2[i]
        }
    }
return parolaLunga
}
let parole = ["ciao", "Pughy", "Luna", "monellini"]
console.log(longest(parole))
*/

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

/* 
function antiSpam(emailContent) {
    if (emailContent.includes("spam")||emailContent.includes("scam")) {
    return false
    } else {return true}
}
console.log (antiSpam("spam"))

*/

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

/* 

function dataOggi(data) {
let oggi = new Date ("2023-02-13")
let differenzaGiorni = oggi - data

return differenzaGiorni = Math.floor(differenzaGiorni / (1000*60*60*24));
}

let data = new Date ("1982-03-11")

console.log (dataOggi(new Date ("1982-03-11")))

*/

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* 
let x = 3
let y = 2

function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < y; i++){
        for (let j = 0; j <= x; j++){
            matrix.push (i.toString()+j.toString())
        }
    }
    return matrix
}

console.log(matrixGenerator(3, 2));


*/
