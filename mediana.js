const elements = [1, 22, 9, 4, 77, 100];

const halfList = elements.length / 2;
const halfIndexList = halfList - 1;

const comparedNumbers = elements.sort(compareNumber)

let median = function(element)
{
    let result
    if(elements.length % 2 === 0)
    {
        
       let firstElement = halfList - 1;
       let secondElement = halfList;

       result = (elements[firstElement] + elements[secondElement]) / 2
       
        return result

    }
    else 
    {
      
      result = Math.floor(element.length / 2)
      return elements[result] 
    }
};

function compareNumber(a, b)
{
    return a - b;
}




// Para saber si un numero es par podemos usar algo 
// llamado "el modo". Si el resultado de una division
// es par o tiene un residuo en decimales, podemos decir
// si es par o no es par 