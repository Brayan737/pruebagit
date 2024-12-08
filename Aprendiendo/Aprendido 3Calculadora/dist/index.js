"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Suma_1 = require("./Suma");
const Resta_1 = require("./Resta");
const Multiplicacion_1 = require("./Multiplicacion");
const Division_1 = require("./Division");
const Utilidades_1 = require("./Utilidades");
const prompt = require("prompt-sync")();
// Clase principal Calculadora, que muestra el menú y ejecuta la operación seleccionada
class Calculadora {
    // Muestra el menú de opciones de la calculadora
    mostrarMenu() {
        console.log("\nMenú de Calculadora");
        console.log("1: Sumar");
        console.log("2: Restar");
        console.log("3: Multiplicar");
        console.log("4: Dividir");
        console.log("5: Apagar la calculadora");
    }
    // Ejecuta la lógica de la calculadora en un ciclo
    ejecutar() {
        let opcion;
        do {
            this.mostrarMenu();
            opcion = prompt("Seleccione una opción: ");
            switch (opcion) {
                case "1":
                    const [a, b] = (0, Utilidades_1.cargarNumeros)();
                    new Suma_1.Suma(a, b).operar(); // Realiza una suma
                    break;
                case "2":
                    const [c, d] = (0, Utilidades_1.cargarNumeros)();
                    new Resta_1.Resta(c, d).operar(); // Realiza una resta
                    break;
                case "3":
                    const [e, f] = (0, Utilidades_1.cargarNumeros)();
                    new Multiplicacion_1.Multiplicacion(e, f).operar(); // Realiza una multiplicación
                    break;
                case "4":
                    const [g, h] = (0, Utilidades_1.cargarNumeros)();
                    new Division_1.Division(g, h).operar(); // Realiza una división
                    break;
                case "5":
                    console.log("Apagando, ¡Adiós!");
                    break;
                default:
                    console.log("Opción inválida");
            }
        } while (opcion !== "5"); // El ciclo continúa hasta que se selecciona "5" para salir
    }
}
// Crear una instancia de Calculadora y ejecutar el programa
const calculadora = new Calculadora();
calculadora.ejecutar();
