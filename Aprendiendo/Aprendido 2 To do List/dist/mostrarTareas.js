"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarTareas = mostrarTareas;
// Importa la lista de tareas
const listaDeTareas_1 = require("./listaDeTareas");
// Función que muestra todas las tareas con sus detalles
function mostrarTareas() {
    console.log("\nLista de Tareas:");
    listaDeTareas_1.listaDeTareas.forEach((tarea, index) => {
        console.log(`[${index + 1}] ${tarea.titulo}`);
        console.log(`   Descripción: ${tarea.descripcion}`);
        console.log(`   Estrellas: ${"★".repeat(tarea.estrellas)}`);
    });
}
