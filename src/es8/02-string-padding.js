const string = 'hello';

console.log(string.padStart(11, 'hi'));

//padStart permitira que a un string se le agregue multiples veces el string deseado

//rellenara el string con la longitud que le hayamos indicado y lo hara en repetidas veces
//padStart transformara el string al inicio
//mientras que padEnd lo hara al final del string que estemos transformando

console.log(string.padEnd(11, '_hi'));