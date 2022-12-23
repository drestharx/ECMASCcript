function calcularExponente(numero, exponente) {
    let resultado = 1;
    for(let i = 1; i <= exponente; i++) {
        resultado = resultado * numero;
    }
    console.log(resultado);
}

calcularExponente(3, 4);

/* En EC7 se incluyeron el operador de exponente y array includes */
// EXPONENTE
const data = 3 ** 4;
console.log(data); // es igual a la funcion calcular exponente

