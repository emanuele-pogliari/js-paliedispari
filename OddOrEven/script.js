const buttonOoeElement = document.querySelector("#btn-start1");
buttonOoeElement.addEventListener("click", evenOrOdd);

function evenOrOdd() {
    let sceltaUtente;
    let numero;
    let randomNumber;
    sceltaUtente = prompt("Scegli pari o dispari").toLowerCase;

    // fino a quando l'utente non scegli pari o dispari chiedi all'utente di inserire la scelta
    while (!(sceltaUtente === "pari" || sceltaUtente === "dispari")) {
        sceltaUtente = prompt("Scelta non valida: Scegli 'pari' o 'dispari'");
    }
    numero = Number(prompt("Inserisci un numero. Inserisci un numero da 1 a 5"));
    // fino a quando l'utente non inserisce un numero da 1 a 5 chiedi all'utente di riprovare
    while (numero < 1 || numero > 5 || isNaN(numero)) {
        numero = Number(prompt("Scelta non valida. Inserisci un numero da 1 a 5"));
    }

    // chiamo la funziona random per generare un numero casuale e lo salvo sulla variabile randomNumber
    randomNumber = random();
    let sum = 0;

    //faccio la somma tra il numero scelto dall'utente ed il numero casuale
    sum = numero + randomNumber;
    // creo una variabile che controlla se la somma è pari o dispari e ritorna il valore
    let esito = check(sum);


    // controllo che verifica se ha vinto il computer o l'utente
    if (sceltaUtente === esito) {
        console.log("Utente ha vinto");
    } else {
        console.log("Computer ha vinto");
    }

    // prototipo di funzione per generare numeri casuali da 1 a 5
    function random() {
        return Math.floor(Math.random() * 5 + 1);
    }
    // prototipo di funzione per controllare la somma dei numeri e generare l'esito
    function check(somma) {

        if (somma % 2 === 0) {
            return "pari";
        } else {
            return "dispari"
        }
    }
}