//la forma de como concatenar strings antes de ECMAScript 6 es la siguiente

let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world + '!';

//la nueva forma de concatenar con ecmascript6 es con TEMPLATE LITERALS
//esta es una forma mas amigable de crear strings de manera mas entendible que estar concatenando
//una y otra vez

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

//OTRA CARACTERISTICA QUE SE IMPLEMENTO EN ECMAScript6 es Multi-line strings
//antes de ECMA6 se hacia de la siguiente manera

let lorem = 'esto es una linea \n' + 'esto es otra linea'; 

//con ECMA6 se hace de la siguiente manera

let lorem2 = `Esto es una frase epica
esta es la continuacion de la frase epica`;
console.log(lorem2);