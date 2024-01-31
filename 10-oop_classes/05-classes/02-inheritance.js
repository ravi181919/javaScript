// super()

class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is: ${this.username}`);
    }
}

class hello extends user {
    constructor(username, email, password){
        super(username)
        this.email
        this.password
    }
    addCourse(){
        console.log(`add a new course by username ${this.username}`);
    }
}

const myUser = new hello('ravi' , 'rg@gmail' , '123')
myUser.addCourse()
myUser.logMe()

const hellouser = new user("AR79")
hellouser.logMe()

// 
console.log(myUser === hellouser); // false
console.log(myUser === hello); // false
console.log(myUser instanceof hello); // true
console.log(myUser instanceof user); // true
// console.log(myUser instanceof hellouser); // error