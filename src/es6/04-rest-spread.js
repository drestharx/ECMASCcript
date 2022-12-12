// DESTRUCTURACION
//La desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

//DESTRUCTURACION DE ARRAYS
//La desestructuración de arrays consiste en extraer los valores de un array en variables, utilizando la misma posición del array con una sintaxis similar a la desestructuración de objetos.
//esta forma nos permitira acceder a los primeros elementos siempre
let fruits = ['apples', 'bananas', 'kiwi', 'orange'];
let [a, b, c] = fruits;
console.log(a, b, c);

//con la coma nos permite saltarnos los puestos, dependiendo el numero de comas que tengamos
let [,,,e] = fruits;
console.log(e);

//DESTRUCTURACION DE OBJETOS
//La desestructuración de objetos implica extraer las propiedades de un objeto en variables. Mediante el mismo nombre de la propiedad del objeto con la siguiente sintaxis:
let user = {
    username: 'Oscar',
    age: 30,
};

let {username, age} = user;
console.log(username, age);
//otra forma es:
console.log(user.username, user.age);

//podemos cambiar el nombre de las propiedades de la siguiente manera con destructuracion

let objeto = {nombre: 'juan', edad: 40, ciudad: 'La Paz',};

let {nombre: name, edad: ages, ciudad: city} = objeto;

console.log(name, ages, city);


/*Desestructuración en parámetros de una función
Si envías un objeto como argumento en la invocación a la declaración de una función, puedes utilizar la desestructuración en los parámetros para obtener los valores directamente. Ten en cuenta que el nombre debe ser igual a la propiedad del objeto.*/

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi'


//---------------------------SPREAD OPERATOR -----------------------------
//Operador de propagacion
//Consiste en pasar la logica a otros elementos sin tener que volver a escribirla

let person = {name: 'Oscar', age: 28};
let country = 'MX';
//creamos una nueva variable donde se unan estos 2 elementos
//los ... haran la destructuracion del objeto person
let data = {id:1, ...person, country};
console.log(data);

//--------------------------- PARAMETROS REST -----------------------------
//el parametro values pasara todos los parametros y los almacenara en values
//pasara todos los otros argumentos para almacenarlos dentro de un array
function sum(num, ...values) {
    console.log(values);
    console.log(values[0]);
    console.log(num + values[0]);
}

sum(1, 1, 2, 3, 4);

/*El operador de propagación (spread operator), como su nombre lo dice, consiste en propagar los elementos de un iterable, ya sea un array o string utilizando tres puntos (...) dentro de un array.*/

// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]

/*Cómo copiar arrays utilizando el operador de propagación
Para realizar una copia de un array, deberás tener cuidado de la referencia en memoria. Los arrays se guardan en una referencia en la memoria del computador, al crear una copia, este tendrá la misma referencia que el original. Debido a esto, si cambias algo en la copia, también lo harás en el original.*/

/*Para evitar esto, utiliza el operador de propagación para crear una copia del array que utilice una referencia en memoria diferente al original.*/

const originalArray = [1,2,3,4,5];
const copyArray = [...originalArray];
copyArray[0] = 0

originalArray // [1,2,3,4,5]
copyArray // [0,2,3,4,5]
originalArray === copyArray  // false

/*Cómo unir arrays y añadir elementos con el operador de propagación
Para unir dos arrays con el operador de propagación, simplemente debes separarlos por comas en un array.*/

const array1 = [1,2,3];
const number = 4;
const array2 = [5,6,7];

const otherArray1 = [ ...array1, number, ...array2 ];

otherArray1; // [1,2,3,4,5,6,7]

/*Cuidado con la copia en diferentes niveles de profundidad
El operador de propagación sirve para producir una copia en un solo nivel de profundidad, esto quiere decir que si existen objetos o arrays dentro del array a copiar. Entonces los sub-elementos en cada nivel, tendrán la misma referencia de memoria en la copia y en el original.*/

const originalArray1 = [1, [2,3] ,4,5]
const copyArray1 = [...originalArray1]

originalArray1[1] === copyArray1[1] // true
/*La manera de solucionar es más compleja, tendrías que emplear el operador de propagación para cada elemento en cada nivel de profundidad.

Sin embargo, recientemente salió una forma de producir una copia profunda con StructuredClone, aunque es una característica muy reciente, así que revisa que navegadores tienen soporte.*/

const originalArray2 = [1, [2,3] ,4,5]
const copyArray2 = structuredClone(originalArray2)

originalArray2 === copyArray2  // false
originalArray2[1] === copyArray2[1] // false
/*Este comportamiento también sucede para objetos dentro de otros objetos, u objetos dentro de arrays.*/

/*Parámetro rest*/

/*El parámetro rest consiste en agrupar el residuo de elementos mediante la sintaxis de tres puntos (...) seguido de una variable que contendrá los elementos en un array.

Esta característica sirve para crear funciones que acepten cualquier número de argumentos para agruparlos en un array.*/

function hola (primero, segundo, ...resto) {
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5,6]
}

hola(1,2,3,4,5);
/*También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.*/

const otroObjeto = {
  nombre: "Andres",
  age: 23,
  plataforma: "Platzi"
};
const otroArray = [0,1,2,3,4,5]

const {plataforma, ...usuarioX} = objeto
const [cero, ...positivos] = array

usuarioX // { nombre: 'Andres', age: 23 }
positivos // [ 1, 2, 3, 4, 5 ]

/*Posición del parámetro rest
El parámetro rest siempre deberá estar en la última posición de los parámetros de la función, caso contrario existirá un error de sintaxis.

❌ Mal  */
// function hola (primero, ...rest, ultimo) { ... }
// SyntaxError: Rest element must be last element. 

/*Diferencias entre el parámetro rest y el operador de propagación
Aunque el parámetro rest y el operador de propagación utilicen la misma sintaxis, son diferentes.

El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición, mientras que el operador de propagación expande los elementos de un iterable en un array y no importa en que lugar esté situado.*/

const arrayB = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...arrayB, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")





// ---------------------- EJERCICIOS DE JS - PLATZI --------------------

export function solution(json1, json2) {
    let objeto1 = json1 || {name: 'Mr. Michi', food: 'Pescado'};
    let objeto2 = json2 || { age: 12, color: 'Blanco' };
    let union = { ...objeto1, ...objeto2 };
    return union;
}

let respuesta = solution({
    name: 'Bigotes',
    food: 'Pollito',
});

console.log(respuesta);