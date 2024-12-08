// tarea.ts: Representa una tarea, con atributos como título, descripción, etc.
export class Tarea {
    id: number; // Identificador único de la tarea (numérico)
    titulo: string; // Título descriptivo de la tarea
    descripcion: string; // Descripción detallada de la tarea
    estado: string; // Estado actual de la tarea (pendiente, en curso, terminada)
    fechaDeCreacion: Date; // Fecha en la que se creó la tarea
    vencimiento: Date | null; // Fecha de vencimiento de la tarea, si aplica
    dificultad: number; // Dificultad de la tarea en una escala de 1 a 5

    constructor(
        id: number, // Identificador único de la tarea
        titulo: string, // Título de la tarea
        descripcion: string, // Descripción de la tarea
        estado: string, // Estado inicial de la tarea
        fechaDeCreacion: Date, // Fecha de creación de la tarea
        vencimiento: Date | null, // Fecha de vencimiento, o null si no tiene
        dificultad: number // Nivel de dificultad de la tarea
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
    obtenerDificultadEnEstrellas(): string {
        return '★'.repeat(this.dificultad) + '☆'.repeat(5 - this.dificultad);
    }

    // Devuelve una representación en texto de todos los detalles de la tarea
    mostrarDetalles(): string {
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
