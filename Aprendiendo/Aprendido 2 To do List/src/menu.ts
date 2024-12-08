// Importa las funciones necesarias para las opciones
import { crearTarea } from './crearTarea';
import { mostrarTareas } from './mostrarTareas';
import { buscarTarea } from './buscarTarea';
import { listaDeTareas } from './listaDeTareas';
import { ask, esperarTeclaParaContinuar } from './entrada';

// Función del menú principal que presenta las opciones
export function menuPrincipal(): void {
    let opcion: string;
    
    do {
        console.log("\n¿Qué deseas hacer?");
        console.log("[1] Ver Mis Tareas.");
        console.log("[2] Buscar una Tarea.");
        console.log("[3] Agregar una Tarea.");
        console.log("[0] Salir.");
        
        // Solicita una opción al usuario
        opcion = ask("Seleccione una opción: ");
        
        // Ejecuta la función correspondiente según la opción elegida
        switch(opcion) {
            case "1":
                mostrarTareas();
                break;
            case "2":
                buscarTarea();
                break;
            case "3":
                crearTarea();
                break;
            case "0":
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Intente nuevamente.");
        }
        
        // Pausa hasta que el usuario esté listo para continuar
        esperarTeclaParaContinuar();
    } while(opcion !== "0");
}
