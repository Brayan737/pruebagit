// Importar el módulo prompt-sync para leer la entrada de usuario
const prompt = require('prompt-sync')();

// Función para realizar la operación con cualquier cantidad de operandos
function calcular(operador, numeros) {
    if (numeros.length === 0) {
        return 'No se han proporcionado números para calcular.';
    }

    let resultado = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        const num = numeros[i];
        switch (operador) {
            case '+':
                resultado += num;
                break;
            case '-':
                resultado -= num;
                break;
            case '*':
                resultado *= num;
                break;
            case '/':
                if (num === 0) {
                    return 'Error: No se puede dividir entre cero';
                }
                resultado /= num;
                break;
            default:
                return 'Operador no válido';
        }
    }

    return resultado;
}

// Función para iniciar la calculadora
function iniciarCalculadora() {
    let continuar = true; // Variable para controlar el bucle de la calculadora

    while (continuar) {
        const operador = prompt('Ingresa el operador (+, -, *, /): ');

        let numeros;
        let inputNumeros;
        let numerosInvalidos = true; // Variable para controlar la validación de números

        // Bucle para validar que los números ingresados sean correctos
        while (numerosInvalidos) {
            inputNumeros = prompt('Ingresa los números separados por espacios: ');

            // Convertir la entrada en un array de números
            numeros = inputNumeros.split(' ').map(num => parseFloat(num));

            // Validar que todos los elementos sean números
            if (numeros.some(isNaN)) {
                console.log('Error: Debes ingresar solo números válidos. Inténtalo de nuevo.');
            } else {
                numerosInvalidos = false; // Si los números son válidos, salimos del bucle
            }
        }

        // Llamar a la función calcular y mostrar el resultado
        const resultado = calcular(operador, numeros);
        console.log(`Resultado: ${resultado}`);

        // Preguntar si el usuario quiere continuar o salir
        const respuesta = prompt('¿Deseas realizar otra operación? (s/n): ').toLowerCase();

        if (respuesta !== 's') {
            continuar = false; // Cambiamos la variable para salir del bucle
            console.log('El programa terminó. ¡Vuelve pronto!');
        }
    }
}

// Iniciar la calculadora
iniciarCalculadora();
