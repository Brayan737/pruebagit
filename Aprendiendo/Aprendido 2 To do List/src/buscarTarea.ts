// Importa la lista de tareas y la entrada del usuario
import { listaDeTareas } from './listaDeTareas';
import { ask } from './entrada';

// Función para buscar una tarea por título
export function buscarTarea(): void {
    const termino = ask("Ingrese el título o palabra clave para buscar: ");
    
    // Filtra las tareas que contengan el término de búsqueda
    const resultados = listaDeTareas.filter(tarea =>
        tarea.titulo.toLowerCase().includes(termino.toLowerCase())
    );
    
    // Muestra los resultados
    if (resultados.length > 0) {
        console.log("\nResultados de la búsqueda:");
        resultados.forEach(tarea => {
            console.log(`- ${tarea.titulo} (${tarea.estrellas} estrellas)`);
            console.log(`  ${tarea.descripcion}`);
        });
    } else {
        console.log("No se encontraron tareas con ese título.");
    }
}
