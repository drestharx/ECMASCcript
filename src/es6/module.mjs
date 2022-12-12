const hello = () => {
    console.log('Hello!');
}

/*al utilizar la palabra default por defecto estamos exportando hello, y en el archivo que queramos
importar podemos utilizar otra palabra para llamarlo, ya que estara exportando la const hello,
al no utilizar default es necesario nombrar los nombres exactos para importar*/

export default hello;