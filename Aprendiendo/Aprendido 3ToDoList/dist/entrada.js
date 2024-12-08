"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ask = void 0;
exports.ingresarDificultad = ingresarDificultad;
const readlineSync = __importStar(require("readline-sync"));
// Función para hacer preguntas al usuario
const ask = (question) => {
    return readlineSync.question(question);
};
exports.ask = ask;
// Función para ingresar la dificultad de la tarea con estrellas (1-5)
function ingresarDificultad() {
    let dificultad;
    do {
        // Mostrar mensaje con las estrellas
        console.log("Seleccione la dificultad de la tarea:");
        console.log("[1] ⭐");
        console.log("[2] ⭐⭐");
        console.log("[3] ⭐⭐⭐");
        console.log("[4] ⭐⭐⭐⭐");
        console.log("[5] ⭐⭐⭐⭐⭐");
        // Pedir al usuario que ingrese un número entre 1 y 5
        dificultad = parseInt((0, exports.ask)("Ingrese un número del 1 al 5: "), 10);
    } while (dificultad < 1 || dificultad > 5); // Asegurarse de que esté entre 1 y 5
    return dificultad;
}
