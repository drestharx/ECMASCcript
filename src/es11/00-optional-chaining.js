//cuando queremos acceder a un objeto que es a su vez es un valor de una propiedad de un objeto
//puede provocar errores en la ejecucion de la pagina
//esta caracteristica ayudara a que el valor buscado exista y que esta validacion no rompa el aplicativo

const users = {
    gndx: {
        country: 'MX',
        age: 30,
    },
    ana: {
        country: 'CO',
        age: 20,
    },
}

console.log(users.gndx.state); //state no existe asi que regresara undefined

//optional chaining

console.log(users?.pais?.emergency); //ahora no lanzara un error sino que con el signo de interrogacion mostrara que esos atributos no existen

//Es importante no abusar de esta caracteristica
/* Por ejemplo, en un objeto usuario que siempre existe, pero la propiedad redes es opcional, entonces se debería escribir usuario.redes?.facebook y no usuario?.redes?.facebook.
.
Si abusas del encadenamiento opcional y existe un error en un objeto, el programa podría “ocultarlo” por un undefined, provocando que el debugging sea más complicado. */