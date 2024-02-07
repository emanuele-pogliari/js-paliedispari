
const buttonPalindromeElement = document.querySelector("#btn-start2");
buttonPalindromeElement.addEventListener("click", findPalindrome);

function findPalindrome() {
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
}