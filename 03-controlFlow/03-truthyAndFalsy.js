// truthy : let value 
/**
 *   (1) '0'
 *   (2) 'false'
 *   (3) " " (space in empty string is trythy )
 *   (4) []
 *   (5) {}
 *   (6) function(){}
 *  */

// falsy values
/**
 *   (1) false 
 *   (2) 0 
 *   (3) -0 
 *   (4) BigInt 0n
 *   (5) '' (emptyString)
 *   (6) null
 *   (7) undefined
 *   (8) NaN 
 */
const userEmail = 'rg@gamil.com'

if (userEmail)
{
    console.log(`got user email`);
}
else
{
    console.log('don have user email');
}


// array 

const ar = []
if (ar.length === 0)
{
    console.log(`Array is Empty`);
}

// object 

const emptyObj = {}
if (Object.keys(emptyObj).length === 0 )
{
    console.log(`object is Empty: `);
}



// nullish Coalescing Operator (??): null undefined 

let val;
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 15
val = null ?? 10 ?? 20
console.log(val);


