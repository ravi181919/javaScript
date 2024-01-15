const tinderUser = new Object() // {}   but it is single Turn Object 
// const tinderuser = {} // {}  but it is non-single turn object 

tinderUser.id = '1234'
tinderUser.name = "same"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = 
{
    email: 'ravi@gmail.com',
    fullName: {
        userFullName: {
            firstName: 'ravi',
            lastName: 'gupta'
        }
    }
}
console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.userFullName);
console.log(regularUser.fullName.userFullName.firstName);


const obj1= {1: 'a', 2: 'b',}
const obj2 = {3: 'a', 4: 'b',}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);




const users = [
     {
        id: 1,
        email: 'r@gmail.com'
     },
     {
        name: 'hello'
     },
     {
        last: 'hiii'
     },
]

users[1].email


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true  

