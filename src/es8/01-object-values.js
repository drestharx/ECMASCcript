//nos devolvera un array con los valores correspondientes a las propiedades del objeto siempre
//y cuando sean enumerables

const countries = {
    mx: 'Mexico',
    co: 'Colombia',
    cl: 'Chile',
    pe: 'Peru',
};

console.log(Object.values(countries));