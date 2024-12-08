// Define el tipo de datos para una tarea
interface Tarea {
    titulo: string;
    descripcion: string;
    estrellas: number;
}

// Inicializa la lista de tareas como un array vacío
export const listaDeTareas: Tarea[] = [];
