// Descrizione esercizio:
//     Chiedi all’utente il suo nome,
//     poi chiedi il suo cognome,
//     poi chiedi il suo colore preferito
//     Infine scrivi sulla pagina nomecognomecolorepreferito21

const name = prompt("Inserisci il tuo Nome");
const surname = prompt("Inserisci il tuo Cognome");
const favouriteColor = prompt("Inserisci il tuo colore preferito");
const favouriteNumber = prompt("Inserisci il tuo Numero Preferito");
// const fixNumber = (7 * 3);

console.log(name + " " + surname + " " + favouriteColor + " " + favouriteNumber);

const convertedCasualNumber = parseInt(favouriteNumber);

let casualNumber = convertedCasualNumber + 5;
let password = name + surname + favouriteColor + casualNumber;

let text = `
<h1>Benvenuto su Boolword Generator,</h1> 
${name} ${surname}, grazie ai suoi dati inseriti, il ${favouriteColor}, la password suggerita e' ${password}. Si ricordi di non mostrare o comunicare la tua password a nessuno, per la tua sicurezza.
`;

document.getElementById("first_java").innerHTML = text;