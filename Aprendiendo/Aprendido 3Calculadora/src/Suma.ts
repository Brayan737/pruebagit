import { Operacion } from "./Operacion";

// Clase Suma, que hereda de Operacion y realiza la operación de suma
export class Suma extends Operacion {
    operar(): void {
        console.log(`Resultado de la suma: ${this.num1} + ${this.num2} = ${this.num1 + this.num2}`);
    }
}
