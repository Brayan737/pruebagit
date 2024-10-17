"use strict";
const readlineSync = require('readline-sync');
// Cambiar "prompt" a "ask"
const ask = (question) => {
    return readlineSync.question(question);
};
const saludo = ask("¿Cuál es tu nombre? ");
console.log(`Hola, ${saludo}!`);
