// (1) Primitive 
/**
 *  7 types of primitive dataTypes: 
 * (1) String
 * (2) number
 * (3) Boolean 
 * (4) null
 * (5) undefined 
 * (6) Symbol
 * (7) BigInt
 */

// number 
const scr = 100
const sc = 100.4

// boolean 
const a = false 
const b = true

// null 
const n = null

console.log(typeof n); // output = object 

// undefined
let  un;

// symbol 
const i = Symbol("123")
const oi = Symbol('123')

// console.log(i = oi ); // output = false 

// BigInt 
const bigNumber = 12345000067456789067890n;



// (2) Reference (Non - primitive)
/**
 *  (1) Array 
 *  (2) Object
 *  (3) Function
 */

// Array 
const her = ["sona", "hello", " blue"];

// object 

const obj = {
    name: "ravi",
    age: 22
};

// function 

const func = function()
{
    console.log('Hello World');
}
func();



console.log(typeof func); // output = function or object function 

console.log(typeof obj); // output = object

console.log(typeof her); // output = object

// ----------------------------------------------------------------------------

