'use strict'; // treat all js code as newer version

// alert(10 + 9) // we are using nodejs, not browser

/*
console.log('helo'); console.log('name')// code readability should be high,
//  its not a good way to write code

console.log(10 + 
    9); // code readability should be high, not prefer to write code like this.
*/

// dataTypes => 
/////////////////////////// Primitive dataTypes /////////////////////////////////////////////
// (1) string => '' or ""
let name = 'Ravi' 
console.log(typeof name); // string

// (2) number => 2 to power 53
let roll = 1
console.log(typeof roll); // number

/* (3) bigInt => 
 => BigInt values represent numeric values which are too large
    to be represented by the number primitive.
 => created by appending (n) BigInt values represent numeric values
    which are too large to be represented by the number primitive.
    */
let previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);
console.log(previousMaxSafe);
console.log(typeof previousMaxSafe);


let  previouslyMaxSafeInteger = 9007199254740991n
console.log(typeof previouslyMaxSafeInteger);

// (4) boolean => true/false
let isLoggedIn = true
console.log(typeof isLoggedIn);

// (5) null => standalone value 
let temp = null 
/* its means tempValue is not fetch from server. if we use 0 for show empty
tempValue but, 0 is a value, so we use null to show empty value  */

console.log(temp); 
console.log(typeof temp); // object

// (6) undefined 
let value;
console.log(value); // undefined 
console.log(typeof value); // undefined

// (7) symbol => unique



//////////////////////////////////////////////// non-primitive dataTypes /////////////////////

// object => 
/*
 * It is used to store various keyed collections and more complex entities.
  => Objects can be created using the:
  (1) Object() constructor 
  (2) object initializer / literal syntax.
 */


// (1) Object() constructor:
let obj = 
{
    userName: 'gold',
    userId: 123
};
console.log(obj); 
console.log(typeof obj);  // object



// (2) object initializer / literal syntax:

let object1 = { a: 'foo', b: 42, c: {} };
console.log(object1.a);
// Expected output: "foo"

let a = 'foo';
let b = 42;
let c = {};
let object2 = { a: a, b: b, c: c };

console.log(object2.b);
// Expected output: 42



let object3 = { a, b, c };

console.log(object3.a); // foo

console.log(typeof object3); // object

console.log(typeof object3.a);// string
