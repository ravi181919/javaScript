
//////////////// Nested Scop & clouser scope  ////////////////////////

function one()
{
    const name = 'ravi'
    function two()
    {
        const fullName = 'Ravi Kumar gupta'
        console.log(`InnerFunction: ${name}`);
        console.log(fullName);
    }
    two()
}
one()

if (true)
{
    let name = 'ravi'
    if (name === 'ravi')
    {
        let ws = ' .in'
        console.log(name + ws);
    }

}

////////////////////// concept ///////////////////////////

// console.log(addOne(5)); not face any error 
function addOne(num){
    return num + 1 
}
console.log(addOne(5)); // 6


// HOF or Expression in js => 

// console.log(addTwo(5)); Error =>  cannot access before initialazation.
const addTwo = function(num2)
{
    return num2 + 2 
}
console.log(addTwo(5)); // 7

