// Importa la librería prompt-sync
import promptSync from 'prompt-sync';

// Crea una instancia de prompt
const prompt = promptSync();

//Declaración de variables
let titulo; //valores posibles: cualq hasta 100 car, no puede ser vacío.
let Descripción; //valores posibles: cualq hasta 100 car, puede ser vacío.
let Estado; //tipo:number,String, Valores posibles: pendi,en curso, termin,cancel.
// Por defecto, debe ser pendiente. Comentarios:Si se usa entero, cada valor puede ser 1, 2 ,3 o 4.
// Si se usa Char: (P,E,T,C). String: Toda la palabra.
let Creación; //tipo date, valor posible: Cualq fecha,puede ser vacío, se genera la fecha automaticamente.
let ultima_edi; //tipo date, valor posible: cualq fecha, puede ser vacio, pero tener inici el valor de la fecha de creación.
let venci; //tipo date , cualquier fecha valida, vacío: si.
let diffi;//tipo number,String, valor posi: f,m,d. No puede ser vacío por defecto debe ser facil.
//Si se usa entero, cada valor puede ser: 1,2,3. si se usa char: f,m,d, string: toda la palabra.

