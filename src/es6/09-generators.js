// -----------------------GENERATORS -----------------------------
/*los generadores son un tipo especial de funcion que retornaran una serie de valores segun el algoritmo dado*/
//PARA IDENTIFICARLA PONDREMOS UN ASTERISCO

/*la palabra reservada yield funcionara de manera muy parecida a return, yield en este caso retornara el elemento
y pausara la ejecucion de la funcion generadora*/

function* iterate(array) {
    for(let element of array) {
        yield element;
    }
}

const arrayPrueba = ['Huascar', 'Mauricio', 'Juan', 'Pedro'];

const it = iterate(arrayPrueba);

/*la funcion generara un objeto que contendra 2 atributos, value que corresponde al valor del elemento donde se pauso
y el atributo done que indicara si la ejecucion termino de completarse o no (si no se completo done sera false),
para obtener el elemento por que se esta iterando aumentamos .value */

console.log(it.next().value)

/*al terminar por completo su ejecucion, el valor done pasa a ser true, y si se sigue ejecutando la funcion
generadora esta retornara undefined*/


// --------------------------- PLATZI CONTRIBUCION -------------------
/*
Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.

Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros. De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.

Cómo utilizar generadores
La sintaxis de los generadores comprende lo siguiente:

- La palabra reservada function* (con el asterisco al final).
- La palabra reservada yield que hace referencia al valor retornado cada vez que se invoque, recordando el valor anterior.
- Crear una variable a partir de la función generadora.
- El método next devuelve un objeto que contiene una propiedad value con cada valor de yield; y otra propiedad done con el valor true o false si el generador ha terminado.

Si el generador se lo invoca y ha retornado todos sus valores de yield, entonces devolverá el objeto con las propiedades value con undefined y un done con true. */

// Declaración

function* nombre(parámetros){
    yield (primerValorRetornado);
    yield (segundoValorRetornado);

    yield (últimoValorRetornado);

}

//Crear el generador
const generador = nombre(argumentos)

// Invocacioens
generador.next().value //primer valor retornado
generador.next().value //segundo valor retornado
generador.next().value //último valor retornado


// ----------------- EJEMPLO -----------------
function* generator1(){
    yield 1;
    yield 2;
    yield 3;
}

const generador1 = generator1()

generador.next().value //1
generador.next().value //2
generador.next().value //3
generador.next() // {value: undefined, done: true}

