"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuscarTarea = void 0;
const entrada_1 = require("./entrada");
// Clase que maneja la búsqueda de tareas
class BuscarTarea {
    // Método para buscar tareas por título
    buscar(listaDeTareas) {
        // Solicitar el título de la tarea a buscar
        const busqueda = (0, entrada_1.ask)("Ingrese el título de la tarea a buscar: ").toLowerCase();
        // Filtrar las tareas que contienen el término de búsqueda
        const tareasEncontradas = listaDeTareas.filter(tarea => tarea.titulo.toLowerCase().includes(busqueda));
        // Mostrar las tareas encontradas
        if (tareasEncontradas.length === 0) {
            console.log("No se encontraron tareas con ese título.");
        }
        else {
            tareasEncontradas.forEach((tarea, index) => {
                console.log(`[${index + 1}] ${tarea.titulo} - Estado: ${tarea.estado}`);
            });
        }
    }
}
exports.BuscarTarea = BuscarTarea;
