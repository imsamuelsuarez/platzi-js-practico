var input = document.getElementById("discount");

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

   
}






const coupons = [
    {
     code: 123456,
     discount: 15,
     id: 1
},

{
    code: 987654,
    discount: 20,
    id: 2
}]

function obtainCouponValue()
{
   const value = prompt("Cual es tu cupon")
   couponValue = parseInt(value);
   couponValid = true;
   console.log(couponValue);
   

   
}

let couponValue = "123456";
let couponValid = false;


    let findCoupon = coupons.find(function(cupon)
    {   
        return cupon.code === couponValue;
    });

