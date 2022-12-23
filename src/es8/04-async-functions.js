const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Async!!'), 3000): reject(new Error('Error!'));
    })
}

//Uso de async
//con la palabra async indicamos que la funcion es asincrona
const anotherFn = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');

/*Cómo utilizar funciones asíncronas
La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.*/

//    async function asyncFunction () {...}

//    const asyncFunction = async () => { ... } 

/* La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada. */

async function asyncFunction () {
    try {
      const response = await promesa()
      return response
    } catch (error) {
      return error
    }
}


/*¿Cuál es la mejor forma de manejar promesas, then o async / await? Ambas son muy útiles, manejar ambas te hará un mejor desarrollador.*/