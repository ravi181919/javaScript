const name = 'ravi'
const repoCount = 5

// console.log(name + repoCount);  
console.log(`hello my name is: ${name} and my repo ${repoCount}`);

////////////// String method //////////////////

const gameName = new String('ravi-r'); // decleration of string 


console.log(gameName[0]);        // r
console.log(gameName.__proto__); // {}


console.log(gameName.length);         // 4
console.log(gameName.toUpperCase());  // RAVI
console.log(gameName.charAt(2));      // v
console.log(gameName.indexOf('i'));   // 3


const newString =  gameName.substring(0, 2)  // strat only 0
console.log(newString);              // ra


const another = gameName.slice(-4, 4) //  start with negValue and 0 
console.log(another);     // vi


const oneM = "    hello      "
console.log(oneM);  //  (space here)       hello     (space here)  
console.log(oneM.trim());// hello 



const forex = "https://ravi.com/ravi%20com"
console.log(forex.replace('%20', '-')); // https://ravi.com/ravi-com
console.log(forex.includes('ravi'));  // true

const nn = 'ravi-hello-hii'
console.log(nn.split('-'));  // [ 'ravi', 'hello', 'hii' ]






  