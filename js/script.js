// Pari e Dispari
// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.


// let sceltaUtente;
// let numero;
// let randomNumber;
// sceltaUtente = prompt("Scegli pari o dispari");

// while (!(sceltaUtente === "pari" || sceltaUtente === "dispari")) {
//     sceltaUtente = prompt("Scelta non valida: Scegli 'pari' o 'dispari'");
// }
// numero = Number(prompt("Inserisci un numero. Inserisci un numero da 1 a 5"));

// while (numero < 1 || numero > 5 || isNaN(numero)) {
//     numero = Number(prompt("Scelta non valida. Inserisci un numero da 1 a 5"));
// }

// randomNumber = random();
// let sum = 0;

// sum = numero + randomNumber;
// let esito = check(sum);

// console.log("Numero Utente " + numero);
// console.log("Scelta utente: " + sceltaUtente);
// console.log("Numero casuale: " + randomNumber);
// console.log("La somma dei numeri è " + sum);
// console.log(esito);

// if (sceltaUtente === esito) {
//     console.log("Utente ha vinto");
// } else {
//     console.log("Computer ha vinto");
// }

// function random() {
//     return Math.floor(Math.random() * 5 + 1);
// }

// function check(somma) {

//     if (somma % 2 === 0) {
//         return "pari";
//     } else {
//         return "dispari"
//     }
// }



// 

// function created
function trovaPalindromo(parola) {
    // faccio un ciclo che sarà lungo la metà della parola inserita, se la prima lettera è diversa dall'ultima ritorna il valore il false altrimenti cicla fino al termine di tutti i cicli.
    // Ritorna true alla fine.
    for (let i = 0; i < Math.floor(parola.length / 2); i++) {
        if (parola[i] !== parola[parola.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}

let word;
word = prompt("Inserisci una parola");
while (!isNaN(word)) {
    word = prompt("Inserisci una parola");
}

console.log(trovaPalindromo(word));




