"use strict";
const readlineSync = require('readline-sync');
// Funcion para hacer preguntas al usuario
const ask = (question) => {
    return readlineSync.question(question);
};
// Funcion para pausar y esperar a que el usuario presione una tecla
const esperarTeclaParaContinuar = () => {
    readlineSync.keyInPause("Presiona cualquier tecla para continuar...");
};
// Lista de tareas que el usuario creara
const listaDeTareas = [];
// Funcion para crear una nueva tarea
function crearTarea() {
    const titulo = ask('Ingrese el titulo de la tarea: ') || "Sin titulo";
    const descripcion = ask('Ingrese la descripcion de la tarea: ') || "Sin descripcion";
    const estado = "Pendiente";
    const dificultad = ingresarDificultad();
    const fechaDeCreacion = new Date();
    const vencimiento = ingresarFechaVencimiento();
    esperarTeclaParaContinuar();
    return {
        titulo,
        descripcion,
        estado,
        fechaDeCreacion,
        vencimiento,
        dificultad
    };
}
// Funcion para ingresar la dificultad de la tarea
function ingresarDificultad() {
    let dificultad;
    do {
        dificultad = ask("Ingrese la dificultad ([F]acil, [M]edio, [D]ificil): ") || "F";
        dificultad = dificultad.toUpperCase();
    } while (!["F", "M", "D"].includes(dificultad));
    esperarTeclaParaContinuar();
    return dificultad;
}
// Funcion para ingresar la fecha de vencimiento de la tarea (formato: DD-MM-YYYY)
function ingresarFechaVencimiento() {
    const fecha = ask("Ingrese la fecha de vencimiento (DD-MM-YYYY) o deje vacio si no tiene: ");
    if (fecha === "")
        return null;
    const [dia, mes, anio] = fecha.split('-').map(Number);
    esperarTeclaParaContinuar();
    return new Date(anio, mes - 1, dia);
}
// Funcion para mostrar todas las tareas almacenadas
function mostrarTareas() {
    if (listaDeTareas.length === 0) {
        console.log("No tienes tareas registradas.");
    }
    else {
        listaDeTareas.forEach((tarea, index) => {
            console.log(`[${index + 1}] ${tarea.titulo} - Estado: ${tarea.estado} - Vence: ${tarea.vencimiento ? tarea.vencimiento.toLocaleDateString() : "Sin vencimiento"}`);
        });
    }
    esperarTeclaParaContinuar();
}
// Funcion para buscar una tarea por su titulo
function buscarTarea() {
    const busqueda = ask("Ingrese el titulo de la tarea a buscar: ").toLowerCase();
    const tareasEncontradas = listaDeTareas.filter(tarea => tarea.titulo.toLowerCase().includes(busqueda));
    if (tareasEncontradas.length === 0) {
        console.log("No se encontraron tareas con ese titulo.");
    }
    else {
        tareasEncontradas.forEach((tarea, index) => {
            console.log(`[${index + 1}] ${tarea.titulo} - Estado: ${tarea.estado}`);
        });
    }
    esperarTeclaParaContinuar();
}
// Funcion principal que maneja el menu del programa
function menu() {
    let opcion;
    do {
        // Se muestra el menu de opciones con las nuevas opciones
        console.log("\n¡Hola Olivia!\n¿Qué deseas hacer?");
        console.log("[1] Ver Mis Tareas.");
        console.log("[2] Buscar una Tarea.");
        console.log("[4] Agregar una Tarea.");
        console.log("[0] Salir.");
        // Se pide al usuario que seleccione una opcion
        opcion = ask("Seleccione una opcion: ") || "0";
        // Se ejecuta la accion segun la opcion seleccionada
        switch (opcion) {
            case "1":
                mostrarTareas(); // Muestra todas las tareas
                break;
            case "2":
                buscarTarea(); // Busca una tarea
                break;
            case "4":
                listaDeTareas.push(crearTarea()); // Crea una nueva tarea
                console.log("Tarea creada.");
                break;
            case "0":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opcion no valida.");
        }
        esperarTeclaParaContinuar();
    } while (opcion !== "0"); // El ciclo continua hasta que el usuario elija salir
}
// Llamada inicial para mostrar el menu
menu();
