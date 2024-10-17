// Importa la librería prompt-sync para poder obtener la entrada del usuario
import promptSync from 'prompt-sync';
const prompt = promptSync(); // Crea una instancia de prompt para usarla en el programa

// Función para esperar a que el usuario presione Enter antes de continuar
function esperarTeclaParaContinuar() {
    prompt('Presiona Enter para continuar...'); // Pausa el programa hasta que el usuario presione Enter
}

// Declaración de la lista de tareas (inicialmente vacía) donde se guardarán todas las tareas creadas
const listaDeTareas = [];

// Función para validar cualquier tipo de entrada del usuario según una condición dada
function validarEntrada(mensaje, validacion) {
    let entrada = prompt(mensaje); // Muestra el mensaje para obtener la entrada del usuario
    // Mientras la entrada no sea válida (según la función de validación), solicita la entrada nuevamente
    while (!validacion(entrada)) {
        entrada = prompt(`   ERROR: ${mensaje}`); // Muestra el mensaje de error y pide al usuario que ingrese nuevamente
    }
    return entrada; // Devuelve la entrada válida
}

// Función para validar que la fecha ingresada esté en el formato correcto (DD-MM-YYYY o DDMMYYYY)
function validarFecha(fecha) {
    // Expresiones regulares para aceptar fechas con guiones (DD-MM-YYYY) o sin guiones (DDMMYYYY)
    const regexConGuiones = /^([0-2][0-9]|3[01])-(0[1-9]|1[0-2])-(\d{4})$/;
    const regexSinGuiones = /^([0-2][0-9]|3[01])(0[1-9]|1[0-2])(\d{4})$/;

    // Si la fecha tiene guiones, la validamos en ese formato
    if (regexConGuiones.test(fecha)) {
        // Separar día, mes y año en un array y convertirlos en números
        const [dia, mes, anio] = fecha.split('-').map(Number);
        // Crear un objeto de tipo Date y verificar si es una fecha válida
        const fechaObj = new Date(anio, mes - 1, dia);
        return fechaObj.getDate() === dia && fechaObj.getMonth() === mes - 1 && fechaObj.getFullYear() === anio;
    } 
    // Si la fecha es sin guiones, la validamos en ese formato
    else if (regexSinGuiones.test(fecha)) {
        // Extraer día, mes y año de la cadena y convertirlos en números
        const dia = parseInt(fecha.slice(0, 2));
        const mes = parseInt(fecha.slice(2, 4));
        const anio = parseInt(fecha.slice(4, 8));
        // Crear un objeto de tipo Date y verificar si es una fecha válida
        const fechaObj = new Date(anio, mes - 1, dia);
        return fechaObj.getDate() === dia && fechaObj.getMonth() === mes - 1 && fechaObj.getFullYear() === anio;
    }

    return false; // Si no cumple ninguno de los formatos, la fecha es inválida
}

// Función para crear una nueva tarea con los datos ingresados por el usuario
function crearTarea() {
    // Pide al usuario que ingrese un título válido (no vacío, máximo 100 caracteres)
    let titulo = validarEntrada(
        "Ingrese el título de la tarea (máximo 100 caracteres, no puede ser vacío): ",
        (input) => input !== "" && input.length <= 100
    );

    // Pide al usuario que ingrese una descripción (puede ser vacía, máximo 100 caracteres)
    let descripcion = prompt("Ingrese la descripción de la tarea (máximo 100 caracteres, puede ser vacío): ");
    if (descripcion.length > 100) {
        descripcion = descripcion.slice(0, 100); // Limita la descripción a 100 caracteres si es demasiado larga
    }

    // Pide al usuario que seleccione un estado (Pendiente, En curso, Terminada, Cancelada)
    let estado = validarEntrada(
        "Ingrese el estado (P: Pendiente, E: En curso, T: Terminada, C: Cancelada): ",
        (input) => ["P", "E", "T", "C"].includes(input.toUpperCase()) // Acepta solo los valores válidos
    ).toUpperCase();

    // Genera automáticamente la fecha de creación y la fecha de la última edición
    let fechaCreacion = new Date();
    let ultimaEdicion = fechaCreacion;

    // Pide al usuario que ingrese la fecha de vencimiento en formato DD-MM-YYYY o DDMMYYYY
    let vencimiento = prompt("Ingrese la fecha de vencimiento (DD-MM-YYYY o DDMMYYYY) o deje vacío si no aplica: ");
    // Valida la fecha ingresada; si no es válida, vuelve a solicitarla
    while (vencimiento && !validarFecha(vencimiento)) {
        vencimiento = prompt("   ERROR: Ingrese una fecha válida en formato DD-MM-YYYY o DDMMYYYY o deje vacío: ");
    }
    // Convierte la fecha ingresada al formato adecuado (ya sea con guiones o sin guiones)
    if (vencimiento) {
        let dia, mes, anio;
        if (vencimiento.includes('-')) {
            [dia, mes, anio] = vencimiento.split('-').map(Number);
        } else {
            dia = parseInt(vencimiento.slice(0, 2));
            mes = parseInt(vencimiento.slice(2, 4));
            anio = parseInt(vencimiento.slice(4, 8));
        }
        vencimiento = new Date(anio, mes - 1, dia); // Convierte los valores a una fecha real
    } else {
        vencimiento = "Ninguna"; // Si el usuario deja vacío, el vencimiento es "Ninguna"
    }

    // Pide al usuario que ingrese la dificultad (Fácil, Media, Difícil)
    let dificultad = validarEntrada(
        "Ingrese la dificultad (F: Fácil, M: Media, D: Difícil): ",
        (input) => ["F", "M", "D"].includes(input.toUpperCase()) // Acepta solo los valores válidos
    ).toUpperCase();

    // Devuelve un objeto con todos los datos de la tarea recién creada
    return {
        titulo,
        descripcion,
        estado,
        fechaCreacion,
        ultimaEdicion,
        vencimiento,
        dificultad
    };
}

// Función para mostrar todas las tareas guardadas en la lista
function verTareas() {
    if (listaDeTareas.length === 0) {
        console.log("No hay tareas registradas."); // Muestra un mensaje si no hay tareas en la lista
    } else {
        console.log("Estas son todas las tareas:");
        // Recorre la lista de tareas y muestra cada una de ellas
        listaDeTareas.forEach((tarea, index) => {
            console.log(`Tarea #${index + 1}:`);
            console.log(`Título: ${tarea.titulo}`);
            console.log(`Descripción: ${tarea.descripcion}`);
            console.log(`Estado: ${tarea.estado === "P" ? "Pendiente" : tarea.estado === "E" ? "En curso" : tarea.estado === "T" ? "Terminada" : "Cancelada"}`);
            console.log(`Fecha de creación: ${tarea.fechaCreacion}`);
            console.log(`Fecha de última edición: ${tarea.ultimaEdicion}`);
            console.log(`Fecha de vencimiento: ${tarea.vencimiento === "Ninguna" ? "Sin vencimiento" : tarea.vencimiento.toLocaleDateString('es-AR')}`);
            console.log(`Dificultad: ${tarea.dificultad === "F" ? "Fácil" : tarea.dificultad === "M" ? "Media" : "Difícil"}`);
            console.log("-----------------------------------");
        });
    }
    esperarTeclaParaContinuar(); // Pausa el programa para que el usuario pueda leer las tareas
}

// Función principal del menú que maneja las opciones del usuario
function menuPrincipal() {
    let opcion;
    do {
        // Muestra el menú principal con las opciones disponibles
        console.log("\n¿Qué deseas hacer?");
        console.log("[1] Ver tareas");
        console.log("[2] Agregar una nueva tarea");
        console.log("[3] Modificar una tarea");
        console.log("[0] Salir");

        opcion = prompt("Ingrese una opción: "); // Pide al usuario que ingrese su opción

        switch (opcion) {
            case "1":
                verTareas(); // Muestra las tareas
                break;
            case "2":
                listaDeTareas.push(crearTarea()); // Crea una nueva tarea y la agrega a la lista
                console.log("¡Tarea agregada con éxito!");
                esperarTeclaParaContinuar(); // Pausa para que el usuario pueda ver el mensaje
                break;
            case "3":
                modificarTarea(); // Modifica una tarea existente
                break;
            case "0":
                console.log("Saliendo del programa..."); // Opción para salir del programa
                break;
            default:
                console.log("Opción no válida."); // Mensaje de error si la opción ingresada es incorrecta
                esperarTeclaParaContinuar();
                break;
        }
    } while (opcion !== "0"); // El ciclo se repite hasta que el usuario elija salir
}

// Ejecutar el programa llamando al menú principal
menuPrincipal();
