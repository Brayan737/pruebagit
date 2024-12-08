"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const readlineSync = __importStar(require("readline-sync"));
const crearTarea_1 = require("./crearTarea");
const buscarTarea_1 = require("./buscarTarea");
const mostrarTareas_1 = require("./mostrarTareas");
// Clase que gestiona las opciones del menú
class Menu {
    // Método que muestra el menú y gestiona las opciones
    mostrar(listaDeTareas) {
        let opcion;
        const crearTarea = new crearTarea_1.CrearTarea();
        const buscarTarea = new buscarTarea_1.BuscarTarea();
        const mostrarTareas = new mostrarTareas_1.MostrarTareas();
        do {
            console.log("\n1. Crear tarea");
            console.log("2. Mostrar tareas");
            console.log("3. Buscar tarea");
            console.log("4. Salir");
            // Pregunta al usuario por una opción
            opcion = this.ask("Seleccione una opción: ");
            switch (opcion) {
                case "1":
                    crearTarea.crear(listaDeTareas);
                    break;
                case "2":
                    mostrarTareas.mostrar(listaDeTareas);
                    break;
                case "3":
                    buscarTarea.buscar(listaDeTareas);
                    break;
                case "4":
                    console.log("¡Hasta luego!");
                    break;
                default:
                    console.log("Opción no válida.");
            }
        } while (opcion !== "4");
    }
    // Método para pedir una pregunta al usuario y devolver la respuesta
    ask(question) {
        return readlineSync.question(question);
    }
}
exports.Menu = Menu;
