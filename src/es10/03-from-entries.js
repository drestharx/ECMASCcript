//ahora Object.entries a aparte de solo convertir un objeto a un array de arrays
//podremos hacer un cambio de un array de arrays a objetos

const entries = new Map([['name', 'Oscar'],['age', 34]]);
console.log(entries);
console.log(Object.fromEntries(entries));