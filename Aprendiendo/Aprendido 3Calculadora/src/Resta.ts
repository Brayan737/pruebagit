import { Operacion } from "./Operacion";

export class Resta extends Operacion {
    operar(): void {
        console.log(`Resultado de la resta: ${this.num1} - ${this.num2} = ${this.num1 - this.num2}`);
    }
}
