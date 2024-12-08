"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarTarea = buscarTarea;
// Importa la lista de tareas y la entrada del usuario
const listaDeTareas_1 = require("./listaDeTareas");
const entrada_1 = require("./entrada");
// Función para buscar una tarea por título
function buscarTarea() {
    const termino = (0, entrada_1.ask)("Ingrese el título o palabra clave para buscar: ");
    // Filtra las tareas que contengan el término de búsqueda
    const resultados = listaDeTareas_1.listaDeTareas.filter(tarea => tarea.titulo.toLowerCase().includes(termino.toLowerCase()));
    // Muestra los resultados
    if (resultados.length > 0) {
        console.log("\nResultados de la búsqueda:");
        resultados.forEach(tarea => {
            console.log(`- ${tarea.titulo} (${tarea.estrellas} estrellas)`);
            console.log(`  ${tarea.descripcion}`);
        });
    }
    else {
        console.log("No se encontraron tareas con ese título.");
    }
}
