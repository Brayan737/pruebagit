// Importa la lista de tareas
import { listaDeTareas } from './listaDeTareas';

// Función que muestra todas las tareas con sus detalles
export function mostrarTareas(): void {
    console.log("\nLista de Tareas:");
    listaDeTareas.forEach((tarea, index) => {
        console.log(`[${index + 1}] ${tarea.titulo}`);
        console.log(`   Descripción: ${tarea.descripcion}`);
        console.log(`   Estrellas: ${"★".repeat(tarea.estrellas)}`);
    });
}
