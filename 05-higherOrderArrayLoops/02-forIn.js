/**********************************************************************************************
 ************************************* forIn *************************************************
 **********************************************************************************************
 */

/////////////////////////////// forIn On object //////////////////////////////////////////////
const myObject = 
{
    name: 'ravi',
    id: 1234,
    age: 20
}

for (const key in myObject) 
{

//  console.log(key);

console.log(`${key} is: ${myObject[key]}`);
}



/////////////////////////////// forIn On Array //////////////////////////////////////////////
const progra = [1,2,3,4,5]

for (const key in progra) 
{

//    console.log(key);

console.log(`${key} is: ${progra[key]} `);
}