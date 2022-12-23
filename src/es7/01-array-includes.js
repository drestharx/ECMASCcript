// array includes es un metodo de los arrays para poder saber si dentro de un array se encuentra un elemento
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const existe = numbers.includes(5);

console.log(existe);
// este metodo siempre retornara un valor booleano

const names = ['oscar', 'david', 'ana'];

console.log(names.includes('David')); // false

//utilizarlo solo asi dara un false por la mayuscula de David hay formas de resolverlo