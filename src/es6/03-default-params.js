// antes de ECMA6 se hacia de la siguiente manera
//si queriamos establecer un valor por defecto utilizabamos el operador or ||

function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 28;
    var country = country || 'Bolivia';
    console.log(name, age, country);
}

newUser();
newUser('Pablo', 30, 'Colombia');

//con ECMA6 hay otra forma de hacerlo mas amigable

function newAdmin(name = 'Oscar', age = 36, country = 'MX') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Julieta', 20, 'USA');