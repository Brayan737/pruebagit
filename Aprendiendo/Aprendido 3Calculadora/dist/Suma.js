"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suma = void 0;
const Operacion_1 = require("./Operacion");
// Clase Suma, que hereda de Operacion y realiza la operación de suma
class Suma extends Operacion_1.Operacion {
    operar() {
        console.log(`Resultado de la suma: ${this.num1} + ${this.num2} = ${this.num1 + this.num2}`);
    }
}
exports.Suma = Suma;
