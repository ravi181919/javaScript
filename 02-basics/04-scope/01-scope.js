////////////// Global and Block Scope ///////////////////
let a = 10 
const b = 20 
var c = 30  

let d = 300

if (true)
{
    let a = 10 
    const b = 20 
    var c = 30 

    let d = 200
    console.log(`Inner: ${d}`);
}

// console.log(a);
// console.log(b);
console.log(c);
console.log(d);
