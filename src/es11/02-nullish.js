//nos ayuda a manejar los valores cuando dicho valor es undefined o no existe

//consiste en una validacion si el elemento que se esta validando tiene valor nulo o undefined

const anotherNumber = null;

const validate = anotherNumber ?? 5;

console.log(validate);