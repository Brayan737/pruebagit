import promptSync from 'prompt-sync';
// Se importa el módulo prompt-sync para capturar 
// entrada del usuario desde la consola
const tecla = promptSync();
let FechaActual = new Date(); //Se obtiene la fecha actual
//función para crear una tarea con parámetros por defecto
//en caso de no recibir valores
function CreaTarea(titulo = "Sin título", descripcion = "Sin descripción", estado = "P", vencimiento = "Ninguna", dificultad = "F") {
    return {
        titulo: titulo, //Título de la tarea
        descripción: descripcion, //Descripción de la tarea
        estado: estado, //Estado de la tarea (P = pendiente, EC = En curso, etc.)
        fechaDeCreacion: new Date(),  // Fecha de creación de la tarea
        ultimoCambio: new Date(),  // Fecha de la última modificación
        vencimiento: vencimiento,  // Fecha de vencimiento
        dificultad: dificultad  // Dificultad (F = Fácil, M = Medio, D = Difícil)
    };
}
// Función para pausar la ejecución hasta que el usuario presione Enter
function EsperarTecla() {
    tecla('Presione la tecla Enter para seguir...');
}
// Función para limpiar la pantalla de la consola
function LimpiarConsola() {
    process.stdout.write('\x1Bc'); // Limpia la consola
}
// Función que verifica si un año es bisiesto
function AnnoBisiesto(anno){
    return (anno % 4 === 0 && anno % 100 !== 0); //un año es 
    //bisiesto si es divisible entre 4 pero no entre 100
}
//Función para pedir una fecha de vencimiento válida al usuario
function PedirFechadeVencimiento(){
    let anno, mes, dia, band=-1, hora, fechaVencimiento;
    //Se pide al usuario que ingrese el año
    anno = tecla("Ingrese el año de vencimiento: ");
    anno = parseInt(anno);
    //Validación del año ingresado
    while(isNaN(anno) || anno < 1000 || anno > 9999) {
        anno = tecla("El año de vencimiento ingresado es inválido, ingrese el correcto: ");
        anno = parseInt(anno);
    }
    //Se pide el mes y se váida que este entre 1 y 12
    mes = tecla("ingrese el mes de vencimiento entre el 1 y 12: ");
    mes = parseInt(mes);
    while(isNaN(mes) || (mes < 1 || mes > 12)){
        mes = tecla("Mes de vencimiento no válido, reingrese el correcto del 1 al 12: ");
        mes = parseInt(mes);
    }
    //Validación del día dependiendo del mes y si es bisiesto o no 
    do{
        if(band >= 0){
            console.log("Ingresó un día inválido");
        }
        switch(mes){
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                dia = tecla("Ingrese el día de vencimiento entre el 1 y 31:");
                dia = parseInt(dia);
                if(dia < 1 || dia > 31) dia = NaN;
            break;
            case 2:
                if(AnnoBisiesto(anno)){
                    dia = tecla("Ingrese el día de vencimiento del 1 al 29: ");
                    dia = parseInt(dia);
                    if(dia < 1 || dia > 29) dia = NaN;
                } else{
                    dia = tecla("Ingrese el día de vencimiento del 1 al 28: ");
                    dia = parseInt(dia);
                    if(dia < 1 || dia > 28) dia = NaN;
                }
            break;
            case 4: case 6: case 9: case 11:
                dia = tecla("Ingrese el día de vencimiento entre el 1 y 30:");
                dia = parseInt(dia);
                if(dia < 1 || dia > 30) dia = NaN;
            break;
        }
        band++;
    }while(isNaN(dia));
    //Se pide la hora y se válida para los horarios entre el 0 y el 23
    hora = tecla("Hora de vencimiento inválida, ingrese la correcta entre el 0 y 23: ");
    hora = parseInt(hora);
    while (isNaN(hora) || (hora < 0 || hora > 23)){
        hora = tecla("Hora de vencimiento inválido, ingrese la correcta entre 0 y 23");
        hora = parseInt(hora);
    }
    //Se crea un objeto Date con la fecha de vencimiento ingresada
    fechaVencimiento = new Date(anno, mes-1, dia, hora);
    return fechaVencimiento;
}
//Función para mostrar el menú principal y capturar la opción ingresada
function menu(){
    console.log("¡Hola Olivia! \t\n¿Qué deseas hacer?");
    console.log("[1] Ver mis tareas");
    console.log("[2] Buscar una tarea");
    console.log("[3] Agreagr una tarea");
    console.log("[0] Salir");
    let opcion = tecla("Su elección: ");
    return opcion;
}
//Función que ordena la lista de tareas por el título
function ordenarTareas(){
    let tareaTemp = CreaTarea(); //Tarea temporal usada para intercambios
    for(let i = 0; i < ListadeTareas.length; i++){
        for(let j = 0; j < ListadeTareas.length - 1; j++){
            //Intercambio de posiciones si el título es mayor
            //al siguiente alfabéticamente
            if(ListadeTareas[j].titulo > ListadeTareas[j+1].titulo){
                tareaTemp = ListadeTareas[j];
                ListadeTareas[j] = ListadeTareas[j+1];
                ListadeTareas[j+1] = tareaTemp;
            }
        }
    }
}
//Función que muestra el segundo menú para filtrar tareas por estados
function menudeTareas(){
    console.log("Qué tareas desea ver?");
    console.log("[1] Todas\n");
    console.log("[2] Pendientes\n");
    console.log("[3] En Curso\n");
    console.log("[4] Terminadas\n");
    console.log("[0] Salir");
    let opcion = tecla("La opción elegida es: ");
    return opcion;
}
//Función que muestra el segundo menú para agregar una tarea,
//permitiendo ingresar valores para cada atributo
function menuAgregarTarea(titulo,descripcion,estado,dificultad,vencimiento){
    console.log("Ingresó a crear una tarea\n");
    console.log("Para ingresar los datos, seleccione una opción: ");
    console.log(`[1] Ingresar título (Actual: ${titulo})`);
    console.log(`[2] Ingresar descripción (Actual: ${descripcion})`);
    console.log(`[3] Ingresar estado (Actual: ${estado})`);
    console.log(`[4] Ingresar dificultad (Actual: ${dificultad})`);
    console.log(`[0] Ingresar vencimiento (Actual: ${vencimiento})`);
    console.log("Presione 0 para finalizar la creación y guardar los datos cargados\n");
    console.log("Presione X para cancelar");
    let opcion = tecla("La opcion elegida es: ");
    return opcion;
}
// Otras funciones que siguen el mismo patrón para distintas 
//operaciones como editar, buscar, y ver detalles de las tareas...
// (La mayoría de estas funciones realizan operaciones sobre la 
//lista de tareas usando entrada del usuario y 
//mostrando resultados en consola)

function menuVerlasTareas(){
    console.log("Qué tareas desea ver?\n[1] Todas.\n[2] Pendientes.\n[3] En Curso\n[4] Terminadas.\n[0] Volver");
    let opcion = tecla("La opción elegida es: ");
    return opcion;
}
function ingresarTitulo(){
    let titulo = tecla("1- Ingrese el título (es obligatorio): ");
    while(titulo===""){
        titulo = tecla("El título no puede ser nulo, ingrese uno: ");
        return titulo;
    }
}
function ingresarDescripcion(){
    let descripcion = tecla("2- Ingrese una descripción: ");
    return descripcion;
}
function ingresarEstado(){
    let estado = tecla("3- Ingrese el estado que por defecto esta pendiente: [P]pendiente/ [EC]en curso/ [T]terminada/ [C] cancelada:");
    while(estado!="P" && estado!="EC" && estado!="T" && estado!="C"){

    }
    return estado;
}
function ingresarDificultad(){
    let dificultad=teclado("4- Ingrese la dificultad, por defecto fácil: [F]fácil(⭐)/[M]medio(⭐⭐)/[D]difícil(⭐⭐⭐): ");
    while(dificultad!="F" && dificultad!="M" && dificultad!="D"){
        dificultad=teclado("La dificultad ingresada es inválida, ingrese nuevamente: ");
    }
    return dificultad;
}
function ingresarFechadeVencimiento(){
    let fechaVencimiento = PedirFechadeVencimiento();
    while(fechaVencimiento <= FechaActual){
        console.log("ingreso una fecha anterior a la actual o la actual.");
        fechaVencimiento = PedirFechadeVencimiento();
    }
    return fechaVencimiento;
}
function verTodas(){
    const arrayIndices= [];
    console.log("Estas son tus tareas: ");
    for(let i = 0; i < ListadeTareas.length; i++){
        arrayIndices.push(i);
        console.log(`[${i + 1}] ${ListadeTareas[i].titulo}.`);
    }
    verDetalles(arrayIndices);
}
function verConCondicion(s){
    let band=0;
    const arrayIndices = [];
    console.log("Aquí están tus tareas con el estado seleccionado: ");
    for(let i = 0; i < ListadeTareas.length; i++){
        band = 1;
        arrayIndices.push(i);
        console.log(`[${i + 1}] ${ListadeTareas[i].titulo}.`);
    }
    if(band == 0){
        console.log("No tienes tareas con ese estado.");
        EsperarTecla();
    }
    else{
        verDetalles(arrayIndices);
    }
}
function mostrarTarea(i){
    console.log("----------------------------------");
    console.log(`Título: ${ListadeTareas[i].descripcion}.`);
    if(ListadeTareas[i].estado=="P"){
        console.log("Estado: Pendiente.");
    }
    else{
        if(ListadeTareas[i].estado=="EC"){
            console.log("Estado: En Curso.");
        }
        else{
            if(ListadeTareas[i].estado=="T"){
                console.log("Estado: Terminada.");
            }
            else{
                console.log("Estado: Cancelada.");
            }
        }
    }
    if(ListadeTareas[i].dificultad=="F"){
        console.log("Dificultad: ⭐");
    }
    else{
        if(ListadeTareas[i].dificultad=="M"){
            console.log("Dificultad: ⭐⭐");
        }
        else{
            console.log("Dificultad: ⭐⭐⭐");
        }
    }
    console.log(`Fecha de creación: ${ListadeTareas[i].fechaDeCreacion}.`);
    console.log(`Fecha de última modificación: ${ListadeTareas[i].ultimoCambio}.`);
    console.log(`Fecha de vencimiento: ${ListadeTareas[i].vencimiento}.`);
}
function editarTarea(i){
    let editar, fecha, tareaTemp = CreaTarea();
    tareaTemp = ListadeTareas[i];
    let fechaAhora = new Date();
    do{
        LimpiarConsola();
        console.log(`Editando la tarea ${tareaTemp.titulo}`);
        console.log(`[1] editar titulo(Actual: ${tareaTemp.titulo})`);
        console.log(`[2] editar descripción (Actual: ${tareaTemp.descripción})`);
        console.log(`[3] editar estado(Actual: ${tareaTemp.estado},oprima [C] para marcarla como cancelada)`);
        console.log(`[4] editar dificultad(Actual: ${tareaTemp.didicultad})`);
        console.log(`[5] editar fecha de Vencimiento(Actual: ${tareaTemp.vencimiento})`);
        console.log("Presione 0 para terminar de editarla y guardar los datos.");
        editar = tecla("La opción es: ");
        tareaTemp.ultimoCambio = fechaAhora;
        LimpiarConsola();
        switch(editar){
            case "1":
                tareaTemp.titulo=ingresarTitulo();
            break;
            case "2":
                tareaTemp.descripcion=ingresarDescripcion();
            break;
            case "3":
                tareaTemp.estado=ingresarEstado();
            break;
            case "4":
                tareaTemp.dificultad=ingresarDificultad();
            break;
            case "5":
                console.log("Desea...\n[0]Dejar en blanco fecha de vencimiento\n[1]Modificarla fecha de vencimiento\n Cualquier otro valor permite volver atrás.");
                fecha = tecla("La opción seleccionada es: ");
                if(fecha==="0"){
                    tareaTemp.vencimiento="Ninguna";
                }
                else{
                    if(fecha==="1"){
                        tareaTemp.vencimiento=ingresarFechadeVencimiento();
                    }
                }
            break;
            case "C":
                console.log("Usted marcó la tarea como cancelada.");
                EsperarTecla();
                tareaTemp.estado="Cancelada";
            break;
            case "0":
                ordenarTareas();
                console.log("Datos guardados con éxito.\n Volviendo al menú anterior.");
                EsperarTecla();
            break;
            default:
                console.log("Orción inválida.");
                EsperarTecla();
            break;
        }
    }while(editar!="0");
}
function estaIndice(array, index){
    for(let i=0; i<array.length; i++){
        if(index===array[i]){
            return true;
        }
    }
    return false;
}
function verDetalles(indices){
    let index, editar;
    console.log("¿Deseas ver los detalles de alguna?\nIntroduce el número para verla o 0 para volver.");
    index = parseInt(tecla("La opción qeu eleigió es: "));
    if(index!=0){
        while(isNaN(index) || !estaIndice(indices, index-1)){
            index = parseInt(tecla("Opción inválida, reingresela: "));
        }
    }
    LimpiarConsola();
    if(index===0){
        console.log("Volviendo al menú anterior.");
    }
    else{
        console.log("Esta es la tarea que elegiste.");
        mostrarTarea(index-1);
        console.log("\nSi deseas editarla, presione E, o 0 para volver.");
        editar=tecla("Su opción: ");
        while(editar!="E" && editar!="0"){
            editar=tecla("opción inválida, ingrese nuevamente: ");
        }
        if(editar==="0"){
            LimpiarConsola();
            console.log("Volviendo al menú anterior.");
        }
        else{
            editarTarea(index-1);
        }
    }
}
function buscarTarea(cadena){
    let arrayIndices=[], band=0;
    for(let i=0; i<ListadeTareas.length; i++){
        if(ListadeTareas[i].titulo.toLowerCase().includes(cadena.toLowerCase())){
            arrayIndices.push(i);
            band++
        }
    }
    if(band===0){
        console.log("No hay tareas relacionadas con la búsqueda.");
        EsperarTecla();
    }
    else{
        mostrarCoincidencias(arrayIndices, band);
    }
}
function mostrarCoincidencias(array, b){
    console.log(`Hubieron ${b} coincidencias en la busqueda: `);
    for(let i=0; i<array.length; i++){
        console.log(`[${array[1]+1}] ${ListadeTareas[array[i]].titulo}`);
    }
    verDetalles(array);
}
function opcion1(){
    let menuVer=-1;
    if(ListadeTareas.length===0){
        console.log("No tienes tareas agendadas para ver.");
        EsperarTecla();
    }
    else {
        do{
            LimpiarConsola();
            menuVer=menuVerlasTareas();
            LimpiarConsola();
            switch(menuVer){
                case "1":
                    verTodas();
                    break;
                case "2":
                    verConCondicion("P");
                    break;
                case "3":
                    verConCondicion("E");
                    break;
                case "4":
                    verConCondicion("T");
                    break;
                case "0":
                    console.log("Volviendo al menú anterior.");
                    EsperarTecla();
                    break;
                default:
                    console.log("Opción inválida.");
                    EsperarTecla();
                    break;
            }
            
        }while(menuVer!=0);
    }
}
function opcion2(){
    let cadena;
    if(ListadeTareas.length===0){
        console.log("No tienes tareas para buscar.");
        EsperarTecla();
    }
    else{
        console.log("Introduce el título de una tarea para buscarla: ");
        cadena= tecla("> ");
        buscarTarea(cadena);
    }
}
function opcion3(){
    let menuAgregar=-1;
    let tareaNueva = CreaTarea();
    do{
        LimpiarConsola();
        menuAgregar=menuAgregarTarea(tareaNueva.titulo, tareaNueva.descripcion, tareaNueva.estado, tareaNueva.dificultad, tareaNueva.vencimiento);
        LimpiarConsola();
        switch(menuAgregar){
            case "1":
                tareaNueva.titulo=ingresarTitulo();
                break;
            case "2":
                tareaNueva.descripcion=ingresarDescripcion();
                break;
            case "3":
                tareaNueva.estado=ingresarEstado();
                break;
            case "4":
                tareaNueva.dificultad=ingresarDificultad();
                break;
            case "5":
                tareaNueva.vencimiento=ingresarFechaVencimiento();
                break;
            case "X":
                console.log("Tarea cancelada, volviendo al menú principal.");
                EsperarTecla();
                break;
            case "0":
                if(tareaNueva.titulo==="Sin título"){
                    menuAgregar=-1;
                    console.log("No se puede agregar la tarea sin título.");
                    EsperarTecla();
                }
                else{
                    ListadeTareas.push(tareaNueva);
                    ordenarTareas();
                    console.log(`¡Tarea creada con éxito!`);
                    EsperarTecla();
                }
                break;
            default:
                console.log("Opción inválida.");
                EsperarTecla();
                break;
        }
    }while(menuAgregar!="0" && menuAgregar!="X");
}
// Definición del array para almacenar las tareas
//Main
const ListadeTareas = [];
//Bucle principal del programa
let mainMenu = -1;
do {
    LimpiarConsola(); //Se limpia la pantalla luego de cada iteración
    mainMenu = menu(); //Se obtiene la opción seleccionada del menú
    LimpiarConsola(); //Limpia nuevamente la pantalla
    switch(mainMenu){
        case "1":
            opcion1(); //Ver tareas
        break;
        case "2":
            opcion2(); //Buscar tareas
        break;
        case "3":
            opcion3(); //Agregar tareas
        break;
        case "0":
            console.log("Adios!...");
        break;
        default:
            console.log("opción no válida");
        break;
    }
}while(mainMenu != "0"); // Repite el menú hasta que se elija salir (opción 0)