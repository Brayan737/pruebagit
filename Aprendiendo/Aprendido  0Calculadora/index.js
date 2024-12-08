
const valores=require("prompt-sync")(); // Importa el módulo prompt-sync para leer valores desde la consola
// Función para mostrar el menú de opciones
const Menu= () => {console.log("Menú de Calculadora\n");
    console.log("Presione 1 para sumar dos números\n");
    console.log("Presione 2 para restar dos números\n");
    console.log("Presione 3 para multiplicar dos números\n");
    console.log("Presione 4 para dividir dos números\n");
    console.log("Presione 5 para apagar la calculadora\n")
}
// Función para cargar dos números y validar que sean correctos
function Carganumeros(){
    let error=0, a, b;
    let array=[]; // Array para almacenar los dos números
    do{
        if(error!=0){
            console.log("Ingresó un valor inválido");
        }
        console.log("Ingrese el primer número");
        a = valores("El número ingresado es: ");
        a = parseFloat(a,10); // Convierte el valor ingresado a número
        array[0] = a;
        console.log("Ingrese el segundo número");
        b = valores("El número ingresado es: ");
        b = parseFloat(b,10); // Convierte el valor ingresado a número
        array[1] = b;
        error++;
    }while(isNaN(a) || isNaN(b)); // Repite si uno de los valores no es un número válido
    return array;
};
// Función para sumar dos números
function sumarnumeros(){
    let array=Carganumeros(); // Carga los dos números
    console.log(`${array[0]} + ${array[1]} = ${array[0] + array[1]}`); //imprime la suma
}
// Función para restar dos números
function restarnumeros(){
    let array=Carganumeros(); // Carga los dos números
    console.log(`${array[0]} - ${array[1]} = ${array[0] - array[1]}`); //imprime la resta
}
// Función para multiplicar dos números
function multiplicarnumeros(){
    let array=Carganumeros(); // Carga los dos números
    console.log(`${array[0]} * ${array[1]} = ${array[0] * array[1]}`); //imprime la miltiplicción
}
// Función para dividir dos números
function dividirnumeros(){
    let array=Carganumeros(); // Carga los dos números
    if(array[1]===0){ // Verifica si el segundo número es 0
        console.log("Math ERROR (no puede dividir un valor por 0)") //alerta de un error
    }
    else{
    console.log(`${array[0]} / ${array[1]} = ${array[0] / array[1]}`); //imprime la división
    }
}
let valormenu;
do{
    Menu(); //muestra el menú
    valormenu=valores("Seleccionó la opción: "); // Lee la opción seleccionada
    switch(valormenu){
        case "1":
            sumarnumeros(); //suma
            console.log("\n");
            break;
        case "2":
            restarnumeros(); //resta
            console.log("\n");
            break;
        case "3":
            multiplicarnumeros(); //multiplica
            console.log("\n");
            break;
        case "4":
            dividirnumeros(); //divide
            console.log("\n");
            break;
        case "5":
            console.log("Apagando, Adios!"); //cierra el programa
            console.log("\n");
            break;
        default:
            console.log("Opción inválida"); //alerta de una opción incorrecta
            console.log("\n");
            break;    
        
    }
}while(valormenu != "5"); // Repite hasta que se seleccione la opción 5 para apagar

