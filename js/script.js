// // Initialising the canvas
// var canvas = document.querySelector('canvas'),
//     ctx = canvas.getContext('2d');

// // Setting the width and height of the canvas
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Setting up the letters
// var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
// letters = letters.split('');

// // Setting up the columns
// var fontSize = 10,
//     columns = canvas.width / fontSize;

// // Setting up the drops
// var drops = [];
// for (var i = 0; i < columns; i++) {
//     drops[i] = 1;
// }

// // Setting up the draw function
// function draw() {
//     ctx.fillStyle = 'rgba(0, 0, 0, .1)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     for (var i = 0; i < drops.length; i++) {
//         var text = letters[Math.floor(Math.random() * letters.length)];
//         ctx.fillStyle = '#0f0';
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);
//         drops[i]++;
//         if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
//             drops[i] = 0;
//         }
//     }
// }

// // Loop the animation
// setInterval(draw, 33);



const buttonOoeElement = document.querySelector("#btn-start1");
const buttonPalindromeElement = document.querySelector("#btn-start2");

// avvio l'app al click del button
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

// buttonPalindromeElement.addEventListener("click", findPalindrome);

// function findPalindrome() {
//     // function created
//     function trovaPalindromo(parola) {
//         // faccio un ciclo che sarà lungo la metà della parola inserita, se la prima lettera è diversa dall'ultima ritorna il valore il false altrimenti cicla fino al termine di tutti i cicli.
//         // Ritorna true alla fine.
//         for (let i = 0; i < Math.floor(parola.length / 2); i++) {
//             if (parola[i] !== parola[parola.length - (i + 1)]) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     let word;
//     word = prompt("Inserisci una parola");
//     while (!isNaN(word)) {
//         word = prompt("Inserisci una parola");
//     }

//     console.log(trovaPalindromo(word));
// }

