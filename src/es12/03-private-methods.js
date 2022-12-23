class Person {
    //atributos
    constructor({
        name,
        age,
    }) {
        this.name = name;
        this.age = age;
    }
    //metodos
    //con el simbolo de numeral indicamos que el metodo es privado y que solo puede ser accedido dentro de la misma clase
    #speak() {
        return 'Hello';
    };
    greeting() {
        return `${this.name} says ${speak()}`;
    }
    //getter
    get #personAge() {
        return this.age;
    }
    //setter 
    set #setAge(newAge) {
        this.age = newAge;
    }
}

const anastacio = new Person ({
    age: 18,
    name: 'Anastacio',
});

console.log(anastacio.personAge);
console.log(anastacio.setAge = 22);
console.log(anastacio.age);