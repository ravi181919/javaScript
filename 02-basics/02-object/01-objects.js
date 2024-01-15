//  constructer => singleton 
// Object.create



// object literals 

const mySymbol = Symbol('key1');

const jsUser = 
{ 
'full name': 'ravi kr gupta',
name: 'ravi',
age: 18,
[mySymbol]: 'myKey1',
location: "bihar",
Email: "rg@gmail.com",
isLoggedIn: false,
lastLogInDays: ['Monday', 'Saturday']
}
//
console.log(jsUser.Email);
//
console.log(jsUser["Email"]);
// console.log(jsUser[Email]); // error found
// 
console.log(jsUser['full name']);
//
console.log(jsUser[mySymbol]);


// 
jsUser.Email = 'gr@gmail.com'
console.log(jsUser['Email']);

// freeze
// Object.freeze(jsUser)
jsUser.Email = 'rghj@gami';
console.log(jsUser);


// add function in object 
jsUser.greeting = function(){
    console.log('hello ');
}
console.log(jsUser.greeting()); 

// this 
jsUser.greetingTwo = function(){
    console.log(`hello, ${this.name}` );
}
console.log(jsUser.greetingTwo());



