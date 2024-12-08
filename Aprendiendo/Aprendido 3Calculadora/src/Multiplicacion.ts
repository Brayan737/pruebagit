import { Operacion } from "./Operacion";

export class Multiplicacion extends Operacion {
    operar(): void {
        console.log(`Resultado de la multiplicación: ${this.num1} * ${this.num2} = ${this.num1 * this.num2}`);
    }
}
