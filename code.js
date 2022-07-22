// Codigo del perimetro del cuadrado 

const botonPerimetro = document.getElementById("botonPerimetro");
const valorPerimetro = document.getElementById("valorPerimetro");

botonPerimetro.addEventListener("click", calcularPerimetroCuadrado);

const valorPerimetroFinal = parseInt(valorPerimetro.value);

// Codigo del codigo del area del cuadrado

const botonArea = document.getElementById("botonArea");
const valorArea = document.getElementById("valorArea");

botonArea.addEventListener("click", calcularAreaCuadrado);

const valorAreaFinal = valorArea.value;


// termina el codigo del cuadrado
// inicia el codigo del triangulo isoceles
// para calcular la altura de un triangulo isoceles aplicamos el teorema de pitagoras que luce de la siguiente manera
// Altura = raiz Cuadrada(a2 - (b2 / 4))
// en donde A es la longitud de los lados congruentes del triangulo y B es la longitud de la base del triangulo

function alturaTriangulo(base, lado1, lado2)
{
    // Formula de altura de un triangulo Isoceles es, h = raiz Cuadrada(a2 - (b2 / 4))

    let b = base * base;
    
    if(lado1 === lado2)
    {
        let a = lado1 * lado2;
        return Math.sqrt(a - (b / 4));
    }
}

// iniciamos con el codigo de la card del triangulo


const buttonTriangulo = document.getElementById("buttonTriangulo");
buttonTriangulo.addEventListener("click", saludar)

function saludar()
{
    alert("hola")
}

const inputTriangulo = document.getElementById("inputTriangulo");
const valorTriangulo = inputTriangulo.value;




























let operaciones = {
    areaCuadrado: function(area)
    {
        let areaCuadrado = area * area;
        alert(`El area del cuadrado es igual a ${areaCuadrado}cm`);
    },

    perimetroCuadrado: function(lado)
    {
        let perimetroCuadrado = lado * 4;
        alert(`El perimetro del cuadrado es igual a ${perimetroCuadrado}cm²`)
    },

    areaTriangulo: function(base, area)
    {
        let areaTriangulo = (base * area) / 2;
        console.log(`El area del triangulo es igual a: ${areaTriangulo}cm`);
    },

    perimetroTriangulo: function(lado, lado, lado)
    {
        let perimetroTriangulo = lado + lado + lado;
        console.log(`El perimetro del triangulo es igual a: ${perimetroTriangulo}cm`);
    },
    diametroCirculo: function(radio)
    {
        const diametro = radio * 2;
        console.log(`El diametro del circulo es igual a: ${diametro}cm`)

    },
    circunferenciaCirculo: function(diametro)
    {
        let circunferencia = diametro * Math.PI;
        console.log(`La circunferencia del circulo es igual a: ${circunferencia.toFixed(2)}cm`)
    },
    areaCirculo: function(radio)
    {
        let areaCirculo = Math.pow(radio, 2) * Math.PI;
        console.log(`El area del circulo es igual a: ${areaCirculo.toFixed(2)}cm`)
    }
}

function calcularPerimetroCuadrado()
{
    operaciones.perimetroCuadrado(valorPerimetroFinal);
}

function calcularAreaCuadrado()
{
    operaciones.areaCuadrado(valorAreaFinal);
}




























