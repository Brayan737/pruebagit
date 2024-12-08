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
exports.CrearTarea = void 0;
const readlineSync = __importStar(require("readline-sync")); // Importar readline-sync
const listaDeTareas_1 = require("./listaDeTareas");
class CrearTarea {
    // Método para crear una nueva tarea
    crear(listaDeTareas) {
        const titulo = readlineSync.question("Ingrese el título de la tarea: ") || "Sin título"; // Reemplazar ask por readlineSync.question
        const descripcion = readlineSync.question("Ingrese la descripción de la tarea: ") || "Sin descripción"; // Reemplazar ask por readlineSync.question
        const estado = "Pendiente";
        const dificultad = this.ingresarDificultad(); // Llamada al nuevo sistema de dificultad
        const fechaDeCreacion = new Date();
        const vencimiento = this.ingresarFechaVencimiento();
        // Crear y agregar la tarea a la lista
        const nuevaTarea = new listaDeTareas_1.Tarea(titulo, descripcion, estado, dificultad.toString(), // Convertimos dificultad a string
        fechaDeCreacion, vencimiento);
        listaDeTareas.push(nuevaTarea);
        console.log("\nTarea creada con éxito.");
    }
    // Función para ingresar la dificultad de la tarea (1 a 5 estrellas)
    ingresarDificultad() {
        let dificultad;
        do {
            dificultad = parseInt(readlineSync.question("Ingrese la dificultad de la tarea (1 a 5 estrellas): "));
        } while (isNaN(dificultad) || dificultad < 1 || dificultad > 5); // Validación para asegurar que la dificultad esté entre 1 y 5
        return dificultad;
    }
    // Función para ingresar la fecha de vencimiento
    ingresarFechaVencimiento() {
        const fecha = readlineSync.question("Ingrese la fecha de vencimiento (DD-MM-YYYY) o deje vacío si no tiene: ");
        if (fecha === "")
            return null;
        const [dia, mes, anio] = fecha.split('-').map(Number);
        return new Date(anio, mes - 1, dia); // Convertir a Date
    }
}
exports.CrearTarea = CrearTarea;
