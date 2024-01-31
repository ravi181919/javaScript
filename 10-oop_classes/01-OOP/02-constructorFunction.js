/* 
*  constructor function =>
=> refers to itself. 
=> it gives a new instance or copy and it not effect original or any other.
(1) new  
(2) this

*/
/**
 *  new keyword => 
 * 
 * (1) when we used new keyword , it's create a Emyty object {}.
 *     and this created object is called instance.
 * 
 * (2) constructor function is created, cause of new keyword
 * 
 * (3) all arguments are inject inside the (this) keyword.
 * 
 * (4) and found inside a function
 */

function user(username, logginCount, isLoggedIn)
{
    this.username = username
    this.logginCount = logginCount
    this.isLoggedIn = isLoggedIn

    this.greetings = function (){
        console.log(`username: ${this.username}`);
    }
    
    return this
}

/*
without constructor (new) =>  userTwo overried the userOne values => 

const userOne = user('Ravi', 79, true)
const userTwo = user('AR79', 18, true)
console.log(userOne);  

*/

const userOne = new user('Ravi', 79, true)
const userTwo = new user('AR79', 18, true)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor); 

// go to checkOut about instanceOf keyword => 

console.log(userOne instanceof user);   // true 
console.log(userOne instanceof Object); // true