// Importa el menú principal
import { menuPrincipal } from './menu';

// Función principal que ejecuta el programa
function main(): void {
    console.log("¡Hola Olivia!");
    menuPrincipal();
}

// Ejecuta el programa llamando a la función main
main();
/*Explicación del Flujo
---Inicio en index.ts: La función main inicia el programa y llama a menuPrincipal.
---Menú Principal en menu.ts: menuPrincipal ofrece opciones al usuario (ver tareas, buscar tareas, agregar tareas) 
y ejecuta la función seleccionada.
---Entrada en entrada.ts: ask y esperarTeclaParaContinuar manejan la entrada y las pausas.
---Crear Tarea en crearTarea.ts: crearTarea pide los detalles de la tarea, incluyendo estrellas, y la añade 
a listaDeTareas.
---Mostrar Tareas en mostrarTareas.ts: mostrarTareas muestra todas las tareas con estrellas representadas 
por caracteres ★.
---Buscar Tarea en buscarTarea.ts: buscarTarea permite buscar por título y muestra coincidencias.
---Lista de Tareas en listaDeTareas.ts: listaDeTareas es la estructura compartida entre todos los módulos para almacenar
 las tareas.
Este diseño modular mantiene el flujo original y asegura que cada parte del código esté bien encapsulada y reutilizable.
 */
