//nos ayuda al momento de querer verificar contraseñas (el numero de caracteres y demas)

const regex = /\b(apple)+\b/g;

const fruit = 'apple, banana, kiwi, apple, orange, etc, etc, etc, etc' 

//si queremos filtrar o buscar ciertas palabras

for(const match of fruit.matchAll(regex)) {
    console.log(match);
}