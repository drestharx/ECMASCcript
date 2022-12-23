const promise1 = new Promise((resolve, reject) => reject("Reject!"));

const promise2 = new Promise((resolve, reject) => resolve("Resolve"));

const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

//con estas tres promesas estamos buscando que la primera se rechace y las otras 2 se completen
//con Promise allsettled esperaremos a que todas las promesas se terminen ya sea que sean resolve o reject
// para asi ejecutar el promise allsettled

Promise.allSettled([promise1,promise2,promise3])
    .then(response => console.log(response));

//este Promise nos devolvera un array que por dentro tenga objetos con el estado de las promesas 
//y su razon del error y su respectivo valor