//  flat
//Nos devuelve una matriz de cualquier submatriz
const array = [1,2,3,4,5,6,[7,8],[9,10,[11,12]]];
console.log(array.flat(1)); // el numero 3 indica los niveles de profundidad que alcanzara el metodo

// flatMap
const array2 = [1,2,3,4,5,6];
//flatMap debe tener una logica dada 
console.log(array2.flatMap(v => [v, v * 2]));