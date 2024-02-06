// Pari e Dispari
// L’utente sceglie pari o dispari.
// Inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Se l'utente ha indovinato l'esito (pari o dispari) della somma ha vinto, altrimenti ha perso.




// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma
// (ad esempio, questa funzione potrebbe funzionare così: passandole la parola come parametro, farà i suoi calcoli per capire se è palindroma o meno e ci restituirà true o false in base all'esito)


// chiedi una parola 


function trovaPalindromo(parola) {

    for (let i = 0; i < parola.length / 2; i++) {
        if (parola[i] !== parola[parola.length - (i + 1)]) {
            console.log(parola[i]);
            console.log(parola[parola.length - (i + 1)]);
            return false;
        }
        console.log("true " + parola[i]);
        console.log("true " + parola[parola.length - (i + 1)]);
    }

    return true;
}

let word = "adpuda";
console.log(trovaPalindromo(word));




