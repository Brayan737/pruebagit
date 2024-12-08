import * as readlineSync from 'readline-sync';
import { CrearTarea } from './crearTarea';
import { BuscarTarea } from './buscarTarea';
import { MostrarTareas } from './mostrarTareas';
import { Tarea } from './listaDeTareas';

// Clase que gestiona las opciones del menú
export class Menu {
    // Método que muestra el menú y gestiona las opciones
    mostrar(listaDeTareas: Tarea[]): void {
        let opcion: string;
        const crearTarea = new CrearTarea();
        const buscarTarea = new BuscarTarea();
        const mostrarTareas = new MostrarTareas();

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
    private ask(question: string): string {
        return readlineSync.question(question);
    }
}
