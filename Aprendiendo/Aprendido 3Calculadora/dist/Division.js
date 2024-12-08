"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Division = void 0;
const Operacion_1 = require("./Operacion");
class Division extends Operacion_1.Operacion {
    operar() {
        if (this.num2 === 0) {
            console.log("Math ERROR: No se puede dividir por cero.");
        }
        else {
            console.log(`Resultado de la división: ${this.num1} / ${this.num2} = ${this.num1 / this.num2}`);
        }
    }
}
exports.Division = Division;
