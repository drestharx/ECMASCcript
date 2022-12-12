class User {
    constructor() {

    }
    greeting() {
        return 'hello';
    };
};

const gndx = new User();
const developer = new User();

console.log(gndx.greeting());
console.log(developer.greeting());


class Admin {
    constructor({
        id,
        name,
        age,
    }) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    greeting() {
        return `${this.name} says hello `;
    };
};

const admin1 = new Admin({
    name: 'Huas',
    age: 22,
});

console.log(admin1.greeting());


// GETTERS Y SETTERS

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
    speak() {
        return 'Hello';
    };
    greeting() {
        return `${this.name} says ${speak()}`;
    }
    //getter
    get personAge() {
        return this.age;
    }
    //setter 
    set setAge(newAge) {
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