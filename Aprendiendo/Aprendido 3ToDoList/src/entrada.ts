import * as readlineSync from 'readline-sync';

// Función para hacer preguntas al usuario
export const ask = (question: string): string => {
    return readlineSync.question(question);
};

// Función para ingresar la dificultad de la tarea con estrellas (1-5)
export function ingresarDificultad(): number {
    let dificultad: number;
    do {
        // Mostrar mensaje con las estrellas
        console.log("Seleccione la dificultad de la tarea:");
        console.log("[1] ⭐");
        console.log("[2] ⭐⭐");
        console.log("[3] ⭐⭐⭐");
        console.log("[4] ⭐⭐⭐⭐");
        console.log("[5] ⭐⭐⭐⭐⭐");

        // Pedir al usuario que ingrese un número entre 1 y 5
        dificultad = parseInt(ask("Ingrese un número del 1 al 5: "), 10);
    } while (dificultad < 1 || dificultad > 5); // Asegurarse de que esté entre 1 y 5

    return dificultad;
}
