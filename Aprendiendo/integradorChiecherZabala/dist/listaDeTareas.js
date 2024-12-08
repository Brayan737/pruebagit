"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListaDeTareas = void 0;
// listaDeTareas.ts: Gestiona las operaciones sobre la lista de tareas (Agregar, eliminar, modificar)
const tarea_1 = require("./tarea"); // Importa la clase Tarea para manejar objetos de tipo tarea
class ListaDeTareas {
    constructor() {
        this.tareas = []; // Inicializa el arreglo de tareas vacío
        this.contadorID = 1; // Inicializa el contador en 1 para los IDs de las tareas
    }
    // Agrega una nueva tarea con los datos proporcionados
    agregarTarea(titulo, descripcion, estado, vencimiento, dificultad) {
        // Crea una nueva tarea con los datos recibidos y un ID generado por el contador
        const nuevaTarea = new tarea_1.Tarea(this.contadorID, // Asigna un ID único basado en el contador
        titulo, descripcion, estado, new Date(), // Usa la fecha actual como fecha de creación
        vencimiento, dificultad);
        this.tareas.push(nuevaTarea); // Agrega la nueva tarea al arreglo
        this.contadorID++; // Incrementa el contador para el próximo ID
        return `Tarea "${nuevaTarea.titulo}" agregada con ID: ${nuevaTarea.id}.`; // Mensaje de confirmación
    }
    // Modifica una tarea existente identificada por su ID
    modificarTarea(id, nuevosDatos) {
        // Busca la tarea en el arreglo usando el ID
        const tarea = this.tareas.find((t) => t.id === id);
        if (!tarea) {
            return `No se encontró ninguna tarea con el ID "${id}".`; // Mensaje si no se encuentra la tarea
        }
        Object.assign(tarea, nuevosDatos); // Actualiza las propiedades de la tarea con los nuevos datos
        return `La tarea con ID "${id}" ha sido modificada.`; // Mensaje de confirmación
    }
    // Elimina una tarea identificada por su ID
    eliminarTarea(id) {
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
    obtenerTareas() {
        return this.tareas;
    }
    // Devuelve las tareas que coinciden con un estado específico
    obtenerTareasPorEstado(estado) {
        // Filtra las tareas según el estado proporcionado
        return this.tareas.filter((tarea) => tarea.estado === estado);
    }
}
exports.ListaDeTareas = ListaDeTareas;
