/////////////// Number Conversion ////////////////////////

let score = 33

console.log(typeof score);   // number
console.log(typeof (score)); // number
// output = number


/////////////  string  to Number ////////////////////////
// example no 1 
let scoreAsString = "33"

console.log(typeof scoreAsString);   // string 
console.log(typeof (scoreAsString)); // string 
// output = string


let valueInNumber = Number(scoreAsString)
console.log(typeof valueInNumber);// number 
console.log(valueInNumber); // 33

// example no 2 
let secondScoreAsString = "33abc"

console.log(typeof secondScoreAsString);   // string 
console.log(typeof (secondScoreAsString)); // string 
// output = string


let secondvalueInNumber = Number(secondScoreAsString)
console.log(typeof secondvalueInNumber);// number 
console.log(secondvalueInNumber); // NaN (not a number)


// example no 3 
let nameString = "ravi"

console.log(typeof nameString);   // string 
console.log(typeof (nameString)); // string 
// output = string


let nameStringInNumber = Number(nameString)
console.log(typeof nameStringInNumber);// number 
console.log(nameStringInNumber); // NaN (not a number)



/////////////////// null to Number /////////////////////////////////////

let nullVal = null;

console.log(typeof nullVal);  // object
console.log(typeof (nullVal));// object
// output = object 

console.log(nullVal); // null 

let valueInNull = Number(nullVal);
console.log(typeof valueInNull); // number
console.log(valueInNull);        // 0


/////////////////// undefined to Number ////////////////////

let undefinedValue = undefined;

console.log(typeof undefinedValue);  // undefined
console.log(typeof (undefinedValue));// undefined 
// output = object 

console.log(undefinedValue); // undefined  

let valueInUndefined = Number(undefinedValue);
console.log(typeof valueInUndefined); // number
console.log(valueInUndefined);// NaN (not a number)



///////////////////// boolean to Number ///////////////////

// example no 1 => 

let booleanValueTrue = true

console.log(typeof booleanValueTrue);  // boolean 
console.log(typeof (booleanValueTrue));// boolean

console.log(booleanValueTrue); // true 

let booleanValueTureInNumber = Number(booleanValueTrue); 
console.log(typeof booleanValueTureInNumber);// number
console.log(booleanValueTureInNumber);   // 1 


// example no 2 => 

let booleanValueFalse = false

console.log(typeof booleanValueFalse);  // boolean 
console.log(typeof (booleanValueFalse));// boolean

console.log(booleanValueFalse); // false

let booleanValueFalseInNumber = Number(booleanValueFalse); 
console.log(typeof booleanValueFalseInNumber);// number
console.log(booleanValueFalseInNumber);   // 0 



// "33" => 33
// "33abc" => NaN (not an number): type of NaN is number 
// true => 1
// false => 0 
//////////////////////////////////////////////////////////////

//////////// Boolean conversion ///////////////

console.log(`Boolean start from here`);
// Example no 1
let isLoggedIn = 1

let booleaIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleaIsLoggedIn); // boolean 
console.log(booleaIsLoggedIn); // true 


// example no 2 
let isLoggedInEmpty = ""

let isLoggedInEmptyValue = Boolean(isLoggedInEmpty)
console.log(typeof isLoggedInEmptyValue); // boolean 
console.log(isLoggedInEmptyValue); // false

// example no 3 

let nameIsLoggedIn = "ravigold"

let nameIsLoggedInVal = Boolean(nameIsLoggedIn)
console.log(typeof nameIsLoggedInVal); // boolean 
console.log(nameIsLoggedInVal); // true 

// 1 => true 
// 0 => false 
// "" => false 
// "ravigold" => true 
////////////////////////////////////////////////////////////


//////// String conversion//////////////////////////////////

console.log(`strin start from here `);

// example no 1 => 

let someNuber = 33 

let convertInString = String(someNuber)
console.log(convertInString);  // 33 
console.log(typeof convertInString); // string 

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$//


console.log(`conversion end here `);
console.log(`Operation start from  here `);


// ************************** Operations *************************

 // example no 1 => 
let value = 3 

let negValue = -value 
console.log(negValue); // -3 



console.log(2+2);  // addition
console.log(2-2);  // subtraction
console.log(2*2);  // Multiply
console.log(2/2);  // divide
console.log(2%2);  // remainder
console.log(2**2); // Modules 
// remainder && Modules are improtant.
// remainnder && Modules and bth are used in cripto graphy and algorithms 

let srt = "ravi"
let str1 = " Gold"

let str2 = srt + str1
console.log(str2); //  output = ravi Gold 



console.log("1" + 1);    // output = 11
console.log(1 + "1");    // output = 11
console.log('1' + 1 + 2);// output = 112
console.log(1 + 1 + '2');// output = 22



// Tricky conversions => not perfer 

console.log(true);   // output = true 
console.log(+true);  // output = 1
console.log(+'');    // output = 0 
/*console.log(true+);// output = Error */


let num1, num2, num3 
num1 = num2 = num3 = 2 + 2 


let gameCounter = 100
gameCounter++; // Postfix increament
// ++gameCounter // Prefix increament 
console.log(gameCounter); // output = 101 
