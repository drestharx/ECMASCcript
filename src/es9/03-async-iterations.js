async function* aGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = aGenerator();

other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

//      FOR

async function arrayOfNames(names) {
    for await(let value of names) {
        console.log(value);
    }
}

const names = arrayOfNames(['Huascar','Juan','Ana']);
console.log('Termino');