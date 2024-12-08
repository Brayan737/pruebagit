// index.ts: Punto de entrada de la aplicación
// Importa las clases Menu, ListaDeTareas y Recursividad
import { Menu } from './menu';
import { ListaDeTareas } from './listaDeTareas';
import { Recursividad } from './Recursividad';

// Crea una nueva instancia de ListaDeTareas para manejar la lista de tareas
const listaDeTareas = new ListaDeTareas();

// Crea una nueva instancia del menú, pasando la lista de tareas como dependencia
const menu = new Menu(listaDeTareas);

// Crea una nueva instancia de Recursividad, que gestionará el flujo del programa
const recursividad = new Recursividad(menu);

// Inicia el flujo del programa llamando al método iniciar de la clase Recursividad
recursividad.iniciar();
