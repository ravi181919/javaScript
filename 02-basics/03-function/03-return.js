
////////////////////////////////////////////////////////////////////////////// return ////////////////////////////////////////////////////////////////////////
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




