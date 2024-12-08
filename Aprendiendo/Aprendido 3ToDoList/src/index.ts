// index.ts
import { Tarea } from './listaDeTareas';
import { Menu } from './menu';

// Lista de tareas que el usuario creará
const listaDeTareas: Tarea[] = [];

// Crear la instancia de la clase Menu y mostrar el menú
const menu = new Menu();
menu.mostrar(listaDeTareas);
