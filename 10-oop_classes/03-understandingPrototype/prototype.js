// const myName = 'Ravi     '

const myArray = ['hello' , 'hii']
const myObje = {
    username: 'yaar',
    pass: 123,

    greet: function (){
        console.log(`username is: ${this.username}`);
    }
}

// inject own methods
Object.prototype.Helloravi = function (){
    console.log(`hello ravi`);
}

Array.prototype.Hiiravi = function (){
    console.log(`hiiii ravi`);
}
myObje.Helloravi()
myArray.Hiiravi()


// Inheritance 

const user = {
    name: 'ravi',
    email: 'rg@gamil.com'
}
const worker = {
    mechanics: 'hero'
}

const helper = {
    helopername: 'ggg'
}

// old syntax
helper.__proto__ = user
console.log(helper.name);


// new syntax 

// here helper inherit the properties of worker 
Object.setPrototypeOf(helper, worker)
console.log(helper.mechanics);



/* mini project on, make our own method injection in prototype 
=> how to trim() any spaces of string
*/
let myName = 'ravikumargupta      '

// inject own method 
String.prototype.trueLengthOfString = function(){
    // console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}

myName.trueLengthOfString()

// 
'ravi'.trueLengthOfString()
//
let my = 'ar79'
my.trueLengthOfString()