// recursividad.ts: Gestiona el flujo recursivo del menú
import { Menu } from './menu'; // Importa la clase Menu para interactuar con las opciones del programa

export class Recursividad {
    private menu: Menu; // Atributo privado que almacena la instancia del menú

    constructor(menu: Menu) {
        this.menu = menu; // Inicializa la clase con una instancia del menú
    }

    // Método principal que inicia y controla el flujo recursivo del programa
    iniciar(): void {
        const logs = this.menu.mostrarMenu(); // Ejecuta el menú y obtiene los mensajes generados
        console.clear(); // Limpia la consola para mejorar la experiencia del usuario
        console.log(logs.join("\n")); // Muestra los resultados del menú (opciones y acciones realizadas)

        // Verifica si el usuario seleccionó la opción "Salir"
        if (!logs.includes("Hasta luego!")) {
            this.iniciar(); // Si no seleccionó salir, vuelve a llamar recursivamente al método iniciar
        }
    }
}
