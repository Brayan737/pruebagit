"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaDeTareas = exports.esperarTeclaParaContinuar = exports.ask = void 0;
exports.crearTarea = crearTarea;
exports.mostrarTareas = mostrarTareas;
exports.buscarTarea = buscarTarea;
// main.ts
const readline_sync_1 = __importDefault(require("readline-sync"));
// Función para hacer preguntas al usuario
const ask = (question) => {
    return readline_sync_1.default.question(question);
};
exports.ask = ask;
// Función para pausar y esperar a que el usuario presione una tecla
const esperarTeclaParaContinuar = () => {
    readline_sync_1.default.keyInPause("Presiona cualquier tecla para continuar...");
};
exports.esperarTeclaParaContinuar = esperarTeclaParaContinuar;
// Lista de tareas que el usuario creará
exports.listaDeTareas = [];
// Función para crear una nueva tarea
function crearTarea() {
    const titulo = (0, exports.ask)('Ingrese el título de la tarea: ') || "Sin título";
    const descripcion = (0, exports.ask)('Ingrese la descripción de la tarea: ') || "Sin descripción";
    const estado = "Pendiente";
    const dificultad = ingresarDificultad();
    const fechaDeCreacion = new Date();
    const vencimiento = ingresarFechaVencimiento();
    (0, exports.esperarTeclaParaContinuar)();
    return {
        titulo,
        descripcion,
        estado,
        fechaDeCreacion,
        vencimiento,
        dificultad
    };
}
// Función para ingresar la dificultad de la tarea
function ingresarDificultad() {
    let dificultad;
    do {
        dificultad = (0, exports.ask)("Ingrese la dificultad ([F]ácil, [M]edio, [D]ifícil): ") || "F";
        dificultad = dificultad.toUpperCase();
    } while (!["F", "M", "D"].includes(dificultad));
    (0, exports.esperarTeclaParaContinuar)();
    return dificultad;
}
// Función para ingresar la fecha de vencimiento de la tarea
function ingresarFechaVencimiento() {
    const fecha = (0, exports.ask)("Ingrese la fecha de vencimiento (DD-MM-YYYY) o deje vacío si no tiene: ");
    if (fecha === "")
        return null;
    const [dia, mes, anio] = fecha.split('-').map(Number);
    (0, exports.esperarTeclaParaContinuar)();
    return new Date(anio, mes - 1, dia);
}
// Función para mostrar todas las tareas almacenadas
function mostrarTareas() {
    if (exports.listaDeTareas.length === 0) {
        console.log("No tienes tareas registradas.");
    }
    else {
        exports.listaDeTareas.forEach((tarea, index) => {
            console.log(`[${index + 1}] ${tarea.titulo} - Estado: ${tarea.estado} - Vence: ${tarea.vencimiento ? tarea.vencimiento.toLocaleDateString() : "Sin vencimiento"}`);
        });
    }
    (0, exports.esperarTeclaParaContinuar)();
}
// Función para buscar una tarea por su título
function buscarTarea() {
    const busqueda = (0, exports.ask)("Ingrese el título de la tarea a buscar: ").toLowerCase();
    const tareasEncontradas = exports.listaDeTareas.filter(tarea => tarea.titulo.toLowerCase().includes(busqueda));
    if (tareasEncontradas.length === 0) {
        console.log("No se encontraron tareas con ese título.");
    }
    else {
        tareasEncontradas.forEach((tarea, index) => {
            console.log(`[${index + 1}] ${tarea.titulo} - Estado: ${tarea.estado}`);
        });
    }
    (0, exports.esperarTeclaParaContinuar)();
}
