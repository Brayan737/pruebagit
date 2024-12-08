import { Tarea } from './listaDeTareas';

export class MostrarTareas {
    // Método para mostrar todas las tareas almacenadas
    mostrar(listaDeTareas: Tarea[]): void {
        if (listaDeTareas.length === 0) {
            console.log("No tienes tareas registradas.");
        } else {
            listaDeTareas.forEach((tarea, index) => {
                // Convertir dificultad a número y mostrar las estrellas
                const dificultadNum = parseInt(tarea.dificultad); // Convertir dificultad de string a número
                const estrellas = "⭐".repeat(dificultadNum); // Repetir las estrellas según el valor de la dificultad
                console.log(`[${index + 1}] ${tarea.titulo} - Estado: ${tarea.estado} - Dificultad: ${estrellas} - Vence: ${tarea.vencimiento ? tarea.vencimiento.toLocaleDateString() : "Sin vencimiento"}`);
            });
        }
    }
}