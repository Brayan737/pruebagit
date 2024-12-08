// Clase abstracta Operacion que actúa como base para las operaciones
export abstract class Operacion {
    protected num1: number;
    protected num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    // Método abstracto que deben implementar las clases derivadas
    abstract operar(): void;
}
