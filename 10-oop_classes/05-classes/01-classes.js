// after ES6

class user {
    constructor(username, email, passwrd){
        this.username = username
        this.email = email
        this.passwrd = passwrd
    }
    encryptPassword(){
        return `${this.passwrd}sdfghjk`
    }

    changeUsername()
    {
        return `${this.username.toUpperCase()}`
    }
}
const myClass = new user('ravi', 'rg@gmail.com', '1234')
console.log(myClass.encryptPassword());
console.log(myClass.changeUsername());


// behind the seen, and by the help of function 
// function  myUser(username, email, passwrd)
// {
//     this.username = username
//     this.email = email
//     this.passwrd = passwrd
// }

// myUser.prototype.encryptPassword = function (){
//     return `${this.passwrd}sdfghjk`
// }
// myUser.prototype.changeUsername = function (){
//     return `${this.username.toUpperCase()}`
// }
// const myFunctionUser = new myUser('AR79', 'ar@gmail.com', '123345')
// console.log(myFunctionUser.encryptPassword());
// console.log(myFunctionUser.changeUsername());