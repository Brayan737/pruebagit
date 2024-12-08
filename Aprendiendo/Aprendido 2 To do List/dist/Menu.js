"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuPrincipal = menuPrincipal;
// Importa las funciones necesarias para las opciones
const crearTarea_1 = require("./crearTarea");
const mostrarTareas_1 = require("./mostrarTareas");
const buscarTarea_1 = require("./buscarTarea");
const entrada_1 = require("./entrada");
// Función del menú principal que presenta las opciones
function menuPrincipal() {
    let opcion;
    do {
        console.log("\n¿Qué deseas hacer?");
        console.log("[1] Ver Mis Tareas.");
        console.log("[2] Buscar una Tarea.");
        console.log("[3] Agregar una Tarea.");
        console.log("[0] Salir.");
        // Solicita una opción al usuario
        opcion = (0, entrada_1.ask)("Seleccione una opción: ");
        // Ejecuta la función correspondiente según la opción elegida
        switch (opcion) {
            case "1":
                (0, mostrarTareas_1.mostrarTareas)();
                break;
            case "2":
                (0, buscarTarea_1.buscarTarea)();
                break;
            case "3":
                (0, crearTarea_1.crearTarea)();
                break;
            case "0":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
        // Pausa hasta que el usuario esté listo para continuar
        (0, entrada_1.esperarTeclaParaContinuar)();
    } while (opcion !== "0");
}
