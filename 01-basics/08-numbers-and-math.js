//////// numbers /////////

const score = 500

const balance = new Number(400)

console.log(balance); //[Number: 400]
console.log(score);   // 500

// Methods of Number 

// Example no. 1 
console.log(balance.toString()); // 400 => typeOf string

//  Example no 2 
console.log(balance.toString().length); // 3

// Example no 3 
console.log(balance.toFixed(2));        // 400.00

// example no 4
const otherNumber = 23.7890
console.log(otherNumber.toPrecision(3)); // 23.8 

const anOtherNumber = 112.89
console.log(anOtherNumber.toPrecision(3)); // 113

// example no 5 
const hun = 1000000  // output is: 10,00,000
console.log(hun.toLocaleString('en-IN'));  // for indian values

// ///////////////////////////////////////////////////////////////////////


///////////////////////////// Maths /////////////////////////////////////////

console.log(Math); // object [Math] {}



console.log(Math.abs(-4)); // 4 

console.log(Math.round(5.7)); // 6

console.log(Math.ceil(4.2)); // 5

console.log(Math.floor(4.9)); // 4

console.log(Math.min(1,2,3,4)); // 1

console.log(Math.max(1,2,3,4)); // 4


// random method
console.log(Math.random()); // change own values between 0 to 1 

console.log(Math.random()*10); // 

console.log((Math.random()*10) + 1); // its give the value up tp 1 

console.log((Math.floor(Math.random()*10)) + 1); // only one values 



const min = 10
const max = 20

console.log(Math.random() * (max - min + 1) + min);

console.log(Math.floor(Math.random() * (max - min + 1) + min));


