
///////////   rest opretaor //////////////////////////////////////////
function calculateCartPrice(number1)
{
    return number1
}
console.log(calculateCartPrice(200)); // output => 200
console.log(calculateCartPrice(200, 300, 400)); // output => 200


// rest 
function calculateCartPrice2(...number2)
{
    return number2
}
console.log(calculateCartPrice2(200, 300, 400)); // output => [ 200, 300, 400 ]

