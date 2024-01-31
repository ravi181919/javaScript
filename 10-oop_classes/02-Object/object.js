function muiltiPly(num){
    return num * 5
}
muiltiPly.power = 2
console.log(muiltiPly(5));
console.log(muiltiPly.power);
console.log(muiltiPly.prototype);

function user(username, price){
    this.username = username
    this.price = price
}

user.prototype.increment = function(){
    this.price++
}

user.prototype.printMe = function(){
    console.log(`price is: ${this.price}`);
}

const helloUser = new user('toy', 20)
const hiiUser = user('book', 100)

helloUser.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/