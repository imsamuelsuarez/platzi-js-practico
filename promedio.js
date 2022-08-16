




function calcularMediaAritmetica(lista)
{
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++)
    // {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioElementos = sumaLista / lista.length;

    return promedioElementos
}

// Hay una alternativa para el ciclo for.
// Tenemos metodos especiales para iterar
// cada elemento. 

// Calculando la mediana en Javascript.
// Encapsular eso en una funcion.
// Usar un metodo especial de arrays.

