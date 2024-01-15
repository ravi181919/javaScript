console.log(2 > 1);  // output = true 
console.log(2 >= 1); // output = true
console.log(2 < 1);  // output = false
console.log(2 <= 1); // output = false
console.log(2 == 1); // output = false
console.log(2 != 1); // output = true 


console.log('2' > 1); // output = true
console.log('02' > 1); // output = true


/*  plz  avoid this type of confusion

console.log(null > 0);  // output = false
console.log(null == 0); // output = false
console.log(null >= 0); // output = true

console.log(undefined == 0); // output = false
console.log(undefined > 0);  // output = false
console.log(undefined < 0);  // output = false
*/



// (===) stict check => dataType and value

console.log("2" == 2);   // output = true
console.log("2" === 2 ); // output = false 

