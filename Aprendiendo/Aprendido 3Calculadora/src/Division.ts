import { Operacion } from "./Operacion";

export class Division extends Operacion {
    operar(): void {
        if (this.num2 === 0) {
            console.log("Math ERROR: No se puede dividir por cero.");
        } else {
            console.log(`Resultado de la división: ${this.num1} / ${this.num2} = ${this.num1 / this.num2}`);
        }
    }
}
