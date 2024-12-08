// Importa el módulo necesario para la entrada del usuario
import * as readlineSync from 'readline-sync';

// Función que solicita una entrada al usuario y retorna el valor ingresado
export function ask(question: string): string {
    return readlineSync.question(question);
}

// Función que espera a que el usuario presione una tecla para continuar
export function esperarTeclaParaContinuar(): void {
    readlineSync.question("\nPresione Enter para continuar...");
}
