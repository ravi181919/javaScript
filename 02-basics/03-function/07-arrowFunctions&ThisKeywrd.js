//////////////////////// THIS //////////////////////////////////////////////////////
const user =
{
    username: 'ravi',
    price:999,

    welcomeMessages: function()
    {
        console.log(`${this.username}, welcom to Website`);
        console.log(this);
    }
}
user.welcomeMessages()
user.username = 's'
user.welcomeMessages()

console.log(this); // empty object 


function is()
{
    let check = 'name'
    console.log(this);
    console.log('next line  => ');
    console.log(this.check); // undefined 
}
is() 

const nameId = function id(){
    let her = 'she'
    console.log(this.her); // undefined 
}
nameId()


///////////////////////////////////// Arrow function [ () => {}  or () => () ]  /////////////////////////////////

const ar = () => {
    let arr = 'ravi'
    console.log(this.arr); // undefined 
}
ar()

// Basic syntax  => 

// (1) explesit returne
const arrow = (num1, num2) => 
{
    return num1 + num2
}
console.log(arrow(3, 4));


// (2) Implesit reture => 

// const hello = (num3, num4) => num3 + num4  // fisrt method 

const hello = (num3, num4) => (num3 + num4)  // second method,

console.log(hello(5, 6));


// object define using Implesit 
const object = () => ({name: 'jii'});
console.log(object());


