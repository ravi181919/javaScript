const user = {
    username: 'ravi',
    loggedIn: true,
    password: 123,

    greeting: function(){
        console.log('hello');
        // console.log(`username: ${username}`);
        console.log(`username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
// console.log(user.greeting());
// console.log(this); // {}