"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts: Punto de entrada de la aplicación
// Importa las clases Menu, ListaDeTareas y Recursividad
const menu_1 = require("./menu");
const listaDeTareas_1 = require("./listaDeTareas");
const Recursividad_1 = require("./Recursividad");
// Crea una nueva instancia de ListaDeTareas para manejar la lista de tareas
const listaDeTareas = new listaDeTareas_1.ListaDeTareas();
// Crea una nueva instancia del menú, pasando la lista de tareas como dependencia
const menu = new menu_1.Menu(listaDeTareas);
// Crea una nueva instancia de Recursividad, que gestionará el flujo del programa
const recursividad = new Recursividad_1.Recursividad(menu);
// Inicia el flujo del programa llamando al método iniciar de la clase Recursividad
recursividad.iniciar();
