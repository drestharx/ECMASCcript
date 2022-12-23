const user = {
    username: 'dresthar',
    age: 28,
    country: 'BO',
    hobbies: ['play', 'walk'],
};

const {username, ...values} = user;
console.log(username);
console.log(values);
console.log(values.hobbies[1]);