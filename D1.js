/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

// Stringa: una stringa è il contenuto di una variabile. Può essere delimitata dagli apici, di doppi apici e dal backtick. Una stringa contiene principalmente parole al suo interno ma in JS può contenere anche numeri.

// Valori numerici (integers e floats): i numeri sono anch'essi contenuto di una variabile. Possono essere integers, ovvero numeri interi oppure floats, ovvero numeri con la virgola. Contrariamente alle stringhe, i numeri non devono essere rinchiusi negli apici.

// Valori booleani (boolean values): un valore booleano serve a verificare una determinata condizione, tramite i valori true o false. La struttura del codice si modifica in base al valore assegnato.

// TUTTI I DATATYPES IN JAVASCRIPT VENGONO SEMPRE DICHIARATI CON LET O CONST, CONTRARIAMENTE AD ALTRI LINGUAGGI DI PROGRAMMAZIONE */



/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = 'Davide'



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 12
let number2 = 20

console.log(number1 + number2) 



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

name = 'De Lorenzo'

console.log(name)

const random = 'Epicode'
let random = 'Epicode12'

console.log(random)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'john'
let name2 = 'John'
