"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
// tarea.ts: Representa una tarea, con atributos como título, descripción, etc.
class Tarea {
    constructor(id, // Identificador único de la tarea
    titulo, // Título de la tarea
    descripcion, // Descripción de la tarea
    estado, // Estado inicial de la tarea
    fechaDeCreacion, // Fecha de creación de la tarea
    vencimiento, // Fecha de vencimiento, o null si no tiene
    dificultad // Nivel de dificultad de la tarea
    ) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.fechaDeCreacion = fechaDeCreacion;
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
    }
    // Devuelve una representación en estrellas de la dificultad de la tarea
    obtenerDificultadEnEstrellas() {
        return '★'.repeat(this.dificultad) + '☆'.repeat(5 - this.dificultad);
    }
    // Devuelve una representación en texto de todos los detalles de la tarea
    mostrarDetalles() {
        return `
ID: ${this.id} 
Título: ${this.titulo} 
Descripción: ${this.descripcion} 
Estado: ${this.estado} 
Fecha de Creación: ${this.fechaDeCreacion.toLocaleDateString()} 
Fecha de Vencimiento: ${this.vencimiento ? this.vencimiento.toLocaleDateString() : "Sin vencimiento"} 
Dificultad: ${this.obtenerDificultadEnEstrellas()} 
        `.trim();
    }
}
exports.Tarea = Tarea;
