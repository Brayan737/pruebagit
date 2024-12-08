const prompt = require("prompt-sync")();

// Función que carga y valida los números ingresados por el usuario
export function cargarNumeros(): [number, number] {
    let a: number, b: number;
    while (true) {
        a = parseFloat(prompt("Ingrese el primer número: "));
        b = parseFloat(prompt("Ingrese el segundo número: "));
        if (!isNaN(a) && !isNaN(b)) break;
        console.log("Por favor ingrese números válidos.");
    }
    return [a, b];
}
