"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resta = void 0;
const Operacion_1 = require("./Operacion");
class Resta extends Operacion_1.Operacion {
    operar() {
        console.log(`Resultado de la resta: ${this.num1} - ${this.num2} = ${this.num1 - this.num2}`);
    }
}
exports.Resta = Resta;
