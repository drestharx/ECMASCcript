//hasta ECMA5 se creaban objetos literales asignando a las propiedades los parametros, ahora ´podemos crear los atributos directamente sin necesidad de hacer referencia a los parametros
//esto solo funciona cuando el atributo debe tener el mismo nombre del parametro que recibe, de otra manera debemos indicar como queremos que se llame el atributo

function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId,
    }
}
console.log(newUser('Huas', 18, 'MX', 01));