// listaDeTareas.ts

// Clase que representa una tarea
export class Tarea {
    titulo: string;
    descripcion: string;
    estado: string;
    fechaDeCreacion: Date;
    vencimiento: Date | null;
    dificultad: string; // Se mantiene como string

    // Constructor para crear una nueva tarea
    constructor(titulo: string, descripcion: string, estado: string, dificultad: string, fechaDeCreacion: Date, vencimiento: Date | null) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.fechaDeCreacion = fechaDeCreacion;
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
    }
}

