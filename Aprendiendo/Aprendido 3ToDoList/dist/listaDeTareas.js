"use strict";
// listaDeTareas.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
// Clase que representa una tarea
class Tarea {
    // Constructor para crear una nueva tarea
    constructor(titulo, descripcion, estado, dificultad, fechaDeCreacion, vencimiento) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.fechaDeCreacion = fechaDeCreacion;
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
    }
}
exports.Tarea = Tarea;
