// Immediately Invoked Function Expression (IIFE)


// normol function 
function hello()
{
    console.log(`hello js`);
}
// hello()


// IIFE  
// (1) named IIFE 
(function hello()
{
    console.log(`hello js`);
})();


// IIFE AND  Arrow Function
// (2) Unamed IIFE =>f  
( () => {
    console.log(`Js `);
})();

//  with parameter and argument  
( (name) => {
    console.log(`Hello ${name}`);
})('ravi');

/**
 * 
 *  (1) => when you want to wirte two IIFE , then (;) this symbol 
 *         use at callback IIFE 
 *     
 *      => Without Using this (;) Symbol at callback IIFE, you not use Two IIFE 
 *     
 *      => Syntax =>  ( () => {
 *                    })(); 
 *      => ()(); IIFE 
 */

/**
 *  IIFE => 
 *  (1) which function gets executed immediately.
 * 
 *  (2) Where is the problem of global scope pollution?
 *      We have used IIFE to reduce the pollution of global
 *      scope which are variables or whatever declaration is 
 *      there.
 */