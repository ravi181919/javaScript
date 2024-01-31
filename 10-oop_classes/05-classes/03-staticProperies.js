class user {
    constructor(username)
    {
        this.username = username
    }
    logMe()
    {
        console.log(`username: ${this.username}`);
    }
    static id()
    {
        return `123`
    }
}
const myUser = new user('ravi')
// console.log(myUser.id()); // error 

class newUser extends user {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
}
const helloNewUser = new newUser('AR79', 'ar@gmail.com', 123)
console.log(helloNewUser.id()); // error