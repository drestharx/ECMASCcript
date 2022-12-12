/* con la palabra reservada var, podiamos declarar, asignar y reasignar la variable */
var lastName = 'David'; //declaracion y asignacion
lastName = 'Oscar'; // reasignacion
console.log(lastName);

/* con la palabra reservada let, podemos declarar, asignar y reasignar la variable */
let animal = 'perro';
animal = 'gato';
console.log(animal);

/* con la palabra reservada const, podemos declarar y asignar la variable, pero esta debe asignarse,
no se puede dejar con un valor undefined, no se puede reasignar */
const fruit = 'kiwi';
fruit = 'apple';
console.log(fruit);

// --------------------------------------- SCOPE-----------------------------------------
/* tanto var, let y const tienen un alcance diferente, var puede ser accedido desde cualquier parte
de la funcion, mientras que let y const solo desde su bloque */
const fruits = () => {
    if(true) {
        var fruit1 = 'Kiwi'; //function scope
        let fruit2 = 'Apple';
        const fruit3 = 'Banana';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();
console.log(fruit1);
/* var tiene function scope, por lo cual puede ser accedida desde cualquier parte de la funcion,
pero let y const son de tipo block scope, con lo que solo pueden ser accedidas desde dentro de la funcion*/
