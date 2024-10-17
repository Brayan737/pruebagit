import readlineSync from 'readline-sync'; // Módulo para leer entradas del usuario de manera sincrónica

// Definimos el tipo para las tareas mediante una interfaz
interface Tarea {
    titulo: string;
    descripcion: string;
    estado: string;
    fechaDeCreacion: Date;
    vencimiento: Date | null;
    dificultad: string;
}

// Creamos una clase `Tarea` que modela una tarea individual
class Tarea {
    public estado: string; // Estado por defecto de la tarea (Pendiente)
    public fechaDeCreacion: Date; // Fecha de creación de la tarea
    
    // Constructor que se ejecuta al crear una nueva tarea
    constructor(
        public titulo: string,
        public descripcion: string,
        public dificultad: string,
        public vencimiento: Date | null = null // El vencimiento es opcional
    ) {
        this.estado = "Pendiente"; // El estado inicial es "Pendiente"
        this.fechaDeCreacion = new Date(); // La fecha de creación es la actual
    }

    // Método para mostrar los detalles de una tarea
    mostrarDetalles(): void {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Descripcion: ${this.descripcion}`);
        console.log(`Estado: ${this.estado}`);
        console.log(`Dificultad: ${this.dificultad}`);
        console.log(`Fecha de Creacion: ${this.fechaDeCreacion.toLocaleDateString()}`);
        if (this.vencimiento) {
            console.log(`Fecha de Vencimiento: ${this.vencimiento.toLocaleDateString()}`);
        } else {
            console.log("Fecha de Vencimiento: Sin vencimiento");
        }
    }

    // Método para cambiar el estado de una tarea
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado || this.estado; // Cambia el estado si se proporciona uno nuevo
    }
}

// Clase que gestiona la lista de tareas
class ListaDeTareas {
    private tareas: Tarea[] = []; // Arreglo para almacenar todas las tareas

    // Método para agregar una tarea a la lista
    agregarTarea(titulo: string, descripcion: string, dificultad: string, vencimiento: Date | null): void {
        const nuevaTarea = new Tarea(titulo, descripcion, dificultad, vencimiento); // Crea una nueva tarea
        this.tareas.push(nuevaTarea); // Añade la nueva tarea a la lista
        console.log("Tarea agregada con exito.");
    }

    // Método para mostrar todas las tareas
    mostrarTareas(): void {
        if (this.tareas.length === 0) {
            console.log("No tienes tareas registradas."); // Si no hay tareas, muestra este mensaje
        } else {
            this.tareas.forEach((tarea, index) => {
                // Recorre la lista de tareas y muestra el título, estado y vencimiento de cada una
                console.log(`[${index + 1}] ${tarea.titulo} - Estado: ${tarea.estado} - Vence: ${tarea.vencimiento ? tarea.vencimiento.toLocaleDateString() : "Sin vencimiento"}`);
            });
        }
    }

    // Método para buscar una tarea por título
    buscarTarea(tituloBuscado: string): void {
        // Busca la tarea que coincida con el título (ignorando mayúsculas/minúsculas)
        const tareaEncontrada = this.tareas.find(tarea => tarea.titulo.toLowerCase() === tituloBuscado.toLowerCase());
        if (tareaEncontrada) {
            tareaEncontrada.mostrarDetalles(); // Si la encuentra, muestra los detalles
        } else {
            console.log("No se encontro ninguna tarea con ese titulo."); // Si no, muestra un mensaje de error
        }
    }

    // Método para eliminar una tarea por índice
    eliminarTarea(indice: number): void {
        if (indice >= 0 && indice < this.tareas.length) {
            this.tareas.splice(indice, 1); // Elimina la tarea del arreglo
            console.log("Tarea eliminada con exito.");
        } else {
            console.log("Tarea no encontrada."); // Si el índice es inválido, muestra un error
        }
    }
}

// Función para pausar y esperar la entrada del usuario
const esperarTeclaParaContinuar = (): void => {
    readlineSync.keyInPause("Presiona cualquier tecla para continuar...");
};

// Función para ingresar la fecha de vencimiento de una tarea
function ingresarFechaVencimiento(): Date | null {
    const fecha = readlineSync.question("Ingrese la fecha de vencimiento (DD-MM-YYYY) o deje vacio si no tiene: ");
    if (fecha === "") return null; // Si no ingresa nada, no hay fecha de vencimiento
    const [dia, mes, anio] = fecha.split('-').map(Number); // Divide la fecha en día, mes y año
    return new Date(anio, mes - 1, dia); // Crea un objeto `Date` con la fecha ingresada
}

// Función para ingresar la dificultad de una tarea
function ingresarDificultad(): string {
    let dificultad: string;
    do {
        // Solicita al usuario que ingrese la dificultad y la convierte a mayúsculas
        dificultad = readlineSync.question("Ingrese la dificultad ([F]acil, [M]edio, [D]ificil): ").toUpperCase();
    } while (!["F", "M", "D"].includes(dificultad)); // Si no es válida, lo vuelve a pedir
    return dificultad;
}

// Función principal que maneja el menú del programa
function menu(): void {
    const listaDeTareas = new ListaDeTareas(); // Crea una instancia de la lista de tareas
    let opcion: string;

    do {
        console.log("\n--- MENU ---");
        console.log("[1] Ver Mis Tareas.");
        console.log("[2] Buscar una Tarea.");
        console.log("[3] Agregar una Tarea.");
        console.log("[4] Eliminar una Tarea.");
        console.log("[0] Salir.");

        opcion = readlineSync.question("Seleccione una opcion: "); // Pide al usuario que seleccione una opción

        switch (opcion) {
            case "1":
                listaDeTareas.mostrarTareas(); // Muestra las tareas en la lista
                break;
            case "2":
                const tituloBuscar = readlineSync.question("Ingrese el titulo de la tarea a buscar: ");
                listaDeTareas.buscarTarea(tituloBuscar); // Busca una tarea por su título
                break;
            case "3":
                const titulo = readlineSync.question("Ingrese el titulo de la tarea: ");
                const descripcion = readlineSync.question("Ingrese la descripcion de la tarea: ");
                const dificultad = ingresarDificultad();
                const vencimiento = ingresarFechaVencimiento();
                listaDeTareas.agregarTarea(titulo, descripcion, dificultad, vencimiento); // Agrega una nueva tarea
                break;
            case "4":
                listaDeTareas.mostrarTareas(); // Muestra las tareas disponibles
                const indiceEliminar = readlineSync.questionInt("Ingrese el numero de la tarea que desea eliminar: ") - 1;
                listaDeTareas.eliminarTarea(indiceEliminar); // Elimina la tarea por su índice
                break;
            case "0":
                console.log("Saliendo del programa..."); // Opción para salir del programa
                break;
            default:
                console.log("Opcion no valida."); // Si se ingresa una opción no válida
        }

        esperarTeclaParaContinuar(); // Pausa antes de continuar con el menú
    } while (opcion !== "0"); // El bucle termina cuando el usuario selecciona "0" para salir
}

// Llamada inicial para mostrar el menú al usuario
menu();
