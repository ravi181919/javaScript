
function sayMyName(){
    console.log('r');
    console.log('a');
    console.log('v');
    console.log('i');
}
// sayMyName // reference of function 
sayMyName();  // excution of function

function addTwoNumber(num1, num2){
    console.log(num1 + num2 ); // NaN 
}
addTwoNumber();


///////////////////////////////////////////////////////////////// Parameter And Argument //////////////////////////////// 
function addTwoNumber2(num, num0){ //  parameter
    console.log(num + num0 );  // outPut => 11
}
addTwoNumber(1, 10) // Arguments 

const result  = addTwoNumber(10, 9); 
console.log('Result:', result); // undefined


// return ////////////////////////////////////////////////////////////////////////
function hello(x, y)
{
    let result = x + y
    return result
    //  not print or excute any code after return value 
}
const Marks = hello(10, 8);
console.log('Maks:', Marks); // Maks: 18


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loginUserMassage(username)
{
    if(username === undefined){
        console.log(`please enter a userName`);
        return
    }
    // or 
    // if(!username){
    //     console.log(`please enter a userName`);
    //     return
    // }
    return `${username} just logged in`
}
loginUserMassage('ravi'); // its only reference 
console.log(loginUserMassage('ravi')); // ravi just logged in 
console.log(loginUserMassage(""));  // just logged in 
console.log(loginUserMassage());  // undefined 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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


///////////// object pass in function or hanlding /////////////////////

 const user = 
 {
    userFullName: 'ravi',
    price: 2000
 };

 function handleObject(any)
 {
    console.log(`UserName is: ${any.userFullName} and price is: ${any.price}`);
 }
 handleObject(user)
 // or 
 handleObject({
    userFullName:'helo',
    price: 300
 })


/////////////// array pass in function or handling ////////////////

const array = [200, 500, 600, 700]

function returnSecondValue(getar)
{
    return getar[1]
}
returnSecondValue(array) // it is reference 
console.log(returnSecondValue(array)); 
// or 
console.log(returnSecondValue([800, 900]));


//////////////////////////////////////////////////////////////////////////////


