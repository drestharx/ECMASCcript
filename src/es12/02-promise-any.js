const promise1 = new Promise((resolve, reject) => reject("Reject!"));

const promise2 = new Promise((resolve, reject) => resolve("Resolve")); //es la primera que se cumple

const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

//promise any capturara la respuesta de la primera promesa satisfactoria

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));