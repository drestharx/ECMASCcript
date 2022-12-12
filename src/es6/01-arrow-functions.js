/*Las arrow functions es una forma de escribir las funciones comunes de manera mas amigable 
estas tienen ciertas limitaciones como ventajas
- Son funciones anonimas 
- Si la funcion tiene solo un argumento puede no usarse parentesis al declararla
- Lleva implicito el return  */

function square(num) {
    return num * num;
}

//la misma funcion con arrow functions (es recomendable guardarlas en un const)

const square = num => num * num;