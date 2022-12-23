const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve('hey!');
        } else {
            reject('Whoops');
        }
    })
};

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    //.finally se creo para indicar que sucedera cuando termine por completo la promesa
    .finally(() => console.log('finalmente termino!'));