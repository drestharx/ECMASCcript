function hello () {
    console.log('hello!');
}

try {
    hello();
} catch (error) {
    console.log(error);
}

// lo que se agrego en es10 fue q ahora es opcional el uso del argumento error
//se puede entender como la personalizacion del error
//y puede ser dificil ya que dejamos de ver lo que provoco el error

try {
    anotherFunction();
} catch {
    console.log('ocurrio un error');
}