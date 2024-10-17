const readlineSync = require('readline-sync');

// Cambiar "prompt" a "ask"
const ask = (question: string): string => {
    return readlineSync.question(question);
};

const saludo = ask("¿Cuál es tu nombre? ");
console.log(`Hola, ${saludo}!`);
