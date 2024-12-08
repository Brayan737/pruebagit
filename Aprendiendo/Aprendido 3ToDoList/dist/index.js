"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const menu_1 = require("./menu");
// Lista de tareas que el usuario creará
const listaDeTareas = [];
// Crear la instancia de la clase Menu y mostrar el menú
const menu = new menu_1.Menu();
menu.mostrar(listaDeTareas);
