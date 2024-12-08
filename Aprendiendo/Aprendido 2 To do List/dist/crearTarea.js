"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = crearTarea;
// Importa el módulo para la lista de tareas y la entrada del usuario
const listaDeTareas_1 = require("./listaDeTareas");
const entrada_1 = require("./entrada");
// Función para crear y agregar una nueva tarea a la lista
function crearTarea() {
    const titulo = (0, entrada_1.ask)('Ingrese el título de la tarea: ') || "Sin título";
    const descripcion = (0, entrada_1.ask)('Ingrese la descripción de la tarea: ') || "Sin descripción";
    // Solicita una calificación de estrellas
    const estrellas = parseInt((0, entrada_1.ask)('Ingrese una calificación de estrellas (1 a 5): '), 10);
    const estrellasValidadas = isNaN(estrellas) || estrellas < 1 || estrellas > 5 ? 1 : estrellas;
    // Agrega la nueva tarea a la lista
    listaDeTareas_1.listaDeTareas.push({ titulo, descripcion, estrellas: estrellasValidadas });
    console.log("Tarea agregada con éxito.");
}
