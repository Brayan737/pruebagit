import * as readlineSync from 'readline-sync'; // Importar readline-sync
import { Tarea } from './listaDeTareas';

export class CrearTarea {
    // Método para crear una nueva tarea
    crear(listaDeTareas: Tarea[]): void {
        const titulo = readlineSync.question("Ingrese el título de la tarea: ") || "Sin título"; // Reemplazar ask por readlineSync.question
        const descripcion = readlineSync.question("Ingrese la descripción de la tarea: ") || "Sin descripción"; // Reemplazar ask por readlineSync.question
        const estado = "Pendiente";
        const dificultad = this.ingresarDificultad(); // Llamada al nuevo sistema de dificultad
        const fechaDeCreacion = new Date();
        const vencimiento = this.ingresarFechaVencimiento();

        // Crear y agregar la tarea a la lista
        const nuevaTarea: Tarea = new Tarea(
            titulo, 
            descripcion, 
            estado, 
            dificultad.toString(), // Convertimos dificultad a string
            fechaDeCreacion, 
            vencimiento
        );
        listaDeTareas.push(nuevaTarea);

        console.log("\nTarea creada con éxito.");
    }

    // Función para ingresar la dificultad de la tarea (1 a 5 estrellas)
    private ingresarDificultad(): number {
        let dificultad: number;
        do {
            dificultad = parseInt(readlineSync.question("Ingrese la dificultad de la tarea (1 a 5 estrellas): "));
        } while (isNaN(dificultad) || dificultad < 1 || dificultad > 5); // Validación para asegurar que la dificultad esté entre 1 y 5
        return dificultad;
    }

    // Función para ingresar la fecha de vencimiento
    private ingresarFechaVencimiento(): Date | null {
        const fecha = readlineSync.question("Ingrese la fecha de vencimiento (DD-MM-YYYY) o deje vacío si no tiene: ");
        if (fecha === "") return null;

        const [dia, mes, anio] = fecha.split('-').map(Number);
        return new Date(anio, mes - 1, dia); // Convertir a Date
    }
}
