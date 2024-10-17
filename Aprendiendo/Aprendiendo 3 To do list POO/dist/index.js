"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
// Clase Tarea en lugar de prototipos, pero mantiene un enfoque similar
class Tarea {
    constructor(titulo, descripcion, dificultad, vencimiento = null) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.dificultad = dificultad;
        this.vencimiento = vencimiento;
        this.estado = "Pendiente";
        this.fechaDeCreacion = new Date(); // Fecha actual
    }
    // Metodo para mostrar detalles de la tarea
    mostrarDetalles() {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Descripcion: ${this.descripcion}`);
        console.log(`Estado: ${this.estado}`);
        console.log(`Dificultad: ${this.dificultad}`);
        console.log(`Fecha de Creacion: ${this.fechaDeCreacion.toLocaleDateString()}`);
        if (this.vencimiento) {
            console.log(`Fecha de Vencimiento: ${this.vencimiento.toLocaleDateString()}`);
        }
        else {
            console.log("Fecha de Vencimiento: Sin vencimiento");
        }
    }
    // Metodo para cambiar el estado de la tarea
    cambiarEstado(nuevoEstado) {
        this.estado = nuevoEstado || this.estado;
    }
}
// Clase ListaDeTareas para gestionar las tareas
class ListaDeTareas {
    constructor() {
        this.tareas = [];
    }
    // Metodo para agregar una tarea a la lista
    agregarTarea(titulo, descripcion, dificultad, vencimiento) {
        const nuevaTarea = new Tarea(titulo, descripcion, dificultad, vencimiento);
        this.tareas.push(nuevaTarea);
        console.log("Tarea agregada con exito.");
    }
    // Metodo para mostrar todas las tareas
    mostrarTareas() {
        if (this.tareas.length === 0) {
            console.log("No tienes tareas registradas.");
        }
        else {
            this.tareas.forEach((tarea, index) => {
                console.log(`[${index + 1}] ${tarea.titulo} - Estado: ${tarea.estado} - Vence: ${tarea.vencimiento ? tarea.vencimiento.toLocaleDateString() : "Sin vencimiento"}`);
            });
        }
    }
    // Metodo para buscar una tarea por titulo
    buscarTarea(tituloBuscado) {
        const tareaEncontrada = this.tareas.find(tarea => tarea.titulo.toLowerCase() === tituloBuscado.toLowerCase());
        if (tareaEncontrada) {
            tareaEncontrada.mostrarDetalles();
        }
        else {
            console.log("No se encontro ninguna tarea con ese titulo.");
        }
    }
    // Metodo para eliminar una tarea por indice
    eliminarTarea(indice) {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas.splice(indice, 1);
            console.log("Tarea eliminada con exito.");
        }
        else {
            console.log("Tarea no encontrada.");
        }
    }
}
// Funcion para pausar y esperar la entrada del usuario
const esperarTeclaParaContinuar = () => {
    readline_sync_1.default.keyInPause("Presiona cualquier tecla para continuar...");
};
// Funcion para ingresar una fecha de vencimiento
function ingresarFechaVencimiento() {
    const fecha = readline_sync_1.default.question("Ingrese la fecha de vencimiento (DD-MM-YYYY) o deje vacio si no tiene: ");
    if (fecha === "")
        return null;
    const [dia, mes, anio] = fecha.split('-').map(Number);
    return new Date(anio, mes - 1, dia);
}
// Funcion para ingresar la dificultad
function ingresarDificultad() {
    let dificultad;
    do {
        dificultad = readline_sync_1.default.question("Ingrese la dificultad ([F]acil, [M]edio, [D]ificil): ").toUpperCase();
    } while (!["F", "M", "D"].includes(dificultad));
    return dificultad;
}
// Funcion principal que maneja el menu del programa
function menu() {
    const listaDeTareas = new ListaDeTareas();
    let opcion;
    do {
        console.log("\n--- MENU ---");
        console.log("[1] Ver Mis Tareas.");
        console.log("[2] Buscar una Tarea.");
        console.log("[3] Agregar una Tarea.");
        console.log("[4] Eliminar una Tarea.");
        console.log("[0] Salir.");
        opcion = readline_sync_1.default.question("Seleccione una opcion: ");
        switch (opcion) {
            case "1":
                listaDeTareas.mostrarTareas();
                break;
            case "2":
                const tituloBuscar = readline_sync_1.default.question("Ingrese el titulo de la tarea a buscar: ");
                listaDeTareas.buscarTarea(tituloBuscar);
                break;
            case "3":
                const titulo = readline_sync_1.default.question("Ingrese el titulo de la tarea: ");
                const descripcion = readline_sync_1.default.question("Ingrese la descripcion de la tarea: ");
                const dificultad = ingresarDificultad();
                const vencimiento = ingresarFechaVencimiento();
                listaDeTareas.agregarTarea(titulo, descripcion, dificultad, vencimiento);
                break;
            case "4":
                listaDeTareas.mostrarTareas();
                const indiceEliminar = readline_sync_1.default.questionInt("Ingrese el numero de la tarea que desea eliminar: ") - 1;
                listaDeTareas.eliminarTarea(indiceEliminar);
                break;
            case "0":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opcion no valida.");
        }
        esperarTeclaParaContinuar();
    } while (opcion !== "0");
}
// Llamada inicial para mostrar el menu
menu();
