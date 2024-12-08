"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multiplicacion = void 0;
const Operacion_1 = require("./Operacion");
class Multiplicacion extends Operacion_1.Operacion {
    operar() {
        console.log(`Resultado de la multiplicación: ${this.num1} * ${this.num2} = ${this.num1 * this.num2}`);
    }
}
exports.Multiplicacion = Multiplicacion;
