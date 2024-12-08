// Importa el módulo para la lista de tareas y la entrada del usuario
import { listaDeTareas } from './listaDeTareas';
import { ask } from './entrada';

// Función para crear y agregar una nueva tarea a la lista
export function crearTarea(): void {
    const titulo = ask('Ingrese el título de la tarea: ') || "Sin título";
    const descripcion = ask('Ingrese la descripción de la tarea: ') || "Sin descripción";
    
    // Solicita una calificación de estrellas
    const estrellas = parseInt(ask('Ingrese una calificación de estrellas (1 a 5): '), 10);
    const estrellasValidadas = isNaN(estrellas) || estrellas < 1 || estrellas > 5 ? 1 : estrellas;
    
    // Agrega la nueva tarea a la lista
    listaDeTareas.push({ titulo, descripcion, estrellas: estrellasValidadas });
    console.log("Tarea agregada con éxito.");
}
