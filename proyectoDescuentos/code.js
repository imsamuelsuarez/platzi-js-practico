var input = document.getElementById("discount");
// const discount = input.innerHTML = random(10, 50);
// const showDiscount = input.innerHTML = discount;

const originalPrice = 100;

let calculateDiscount = function(price, discount)
{
    let finalPrice;
    finalPrice  = (price * (100 - discount)) / 100;
    

    result.innerText = "El precio del producto final es $" + finalPrice;
}



function onClickButtonPriceDiscount()
{
    const inputPrice = document.getElementById('inputPrice');
    const inputDiscount = document.getElementById('inputDiscount');

    const price = inputPrice.value;
    const discount = inputDiscount.value;
   

    calculateDiscount(price, discount);

    // result.innetText = "El precio con descuento son $" + calculateDiscount(price, discount); 
}

