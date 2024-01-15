
////////////////////////////////////////////////////////////////////////////////

// Stack (Primitive),  Heap (non-primitive or reference)

// Stack memory => 
let name = 'hello'
let nameTwo = name 

console.log(name);      // hello 
console.log(nameTwo);   // here its  give => hello 

nameTwo = 'hiiii'       // value change  

console.log(name );     // but it  is not change aur value   => output is hello 
console.log(nameTwo);   // after value change then,  its give => hiii 

/**
*  note: Whenever stack memory is used, a copy of whatever variable is declared is obtained.
*        so this reason orignal value is not change.
*/

// Heap memory =>

let obje = {
    email: "rg@gamil.com",
    upi: "123@ybl"
}

let ob = obje

ob.email = 'google@gamil.com'

console.log(obje.email); // output = google@gamil.com
console.log(ob.email);    // output = google@gamil.com

/**
 * note: When the value of the original variable is assigned to another variable, the original value is get reference.
 *       Changing one of the two values ​​changes the value of both.
 */