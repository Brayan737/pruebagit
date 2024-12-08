// listaDeTareas.ts: Gestiona las operaciones sobre la lista de tareas (Agregar, eliminar, modificar)
import { Tarea } from './tarea'; // Importa la clase Tarea para manejar objetos de tipo tarea

export class ListaDeTareas {
    private tareas: Tarea[]; // Arreglo que almacena todas las tareas
    private contadorID: number; // Contador para generar IDs secuenciales

    constructor() {
        this.tareas = []; // Inicializa el arreglo de tareas vacío
        this.contadorID = 1; // Inicializa el contador en 1 para los IDs de las tareas
    }

    // Agrega una nueva tarea con los datos proporcionados
    agregarTarea(titulo: string, descripcion: string, estado: string, vencimiento: Date | null, dificultad: number): string {
        // Crea una nueva tarea con los datos recibidos y un ID generado por el contador
        const nuevaTarea = new Tarea(
            this.contadorID, // Asigna un ID único basado en el contador
            titulo,
            descripcion,
            estado,
            new Date(), // Usa la fecha actual como fecha de creación
            vencimiento,
            dificultad
        );
        this.tareas.push(nuevaTarea); // Agrega la nueva tarea al arreglo
        this.contadorID++; // Incrementa el contador para el próximo ID
        return `Tarea "${nuevaTarea.titulo}" agregada con ID: ${nuevaTarea.id}.`; // Mensaje de confirmación
    }

    // Modifica una tarea existente identificada por su ID
    modificarTarea(id: number, nuevosDatos: Partial<Tarea>): string {
        // Busca la tarea en el arreglo usando el ID
        const tarea = this.tareas.find((t) => t.id === id);
        if (!tarea) {
            return `No se encontró ninguna tarea con el ID "${id}".`; // Mensaje si no se encuentra la tarea
        }
        Object.assign(tarea, nuevosDatos); // Actualiza las propiedades de la tarea con los nuevos datos
        return `La tarea con ID "${id}" ha sido modificada.`; // Mensaje de confirmación
    }

    // Elimina una tarea identificada por su ID
    eliminarTarea(id: number): string {
        // Busca el índice de la tarea en el arreglo usando el ID
        const indice = this.tareas.findIndex((tarea) => tarea.id === id);
        if (indice === -1) {
            return `No se encontró ninguna tarea con el ID "${id}".`; // Mensaje si no se encuentra la tarea
        }
        const tareaEliminada = this.tareas[indice]; // Guarda la tarea que será eliminada
        this.tareas.splice(indice, 1); // Elimina la tarea del arreglo
        return `La tarea con ID "${id}" y título "${tareaEliminada.titulo}" ha sido eliminada.`; // Mensaje de confirmación
    }

    // Devuelve todas las tareas almacenadas
    obtenerTareas(): Tarea[] {
        return this.tareas;
    }

    // Devuelve las tareas que coinciden con un estado específico
    obtenerTareasPorEstado(estado: string): Tarea[] {
        // Filtra las tareas según el estado proporcionado
        return this.tareas.filter((tarea) => tarea.estado === estado);
    }
}
