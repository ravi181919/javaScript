const user = {
    _email: 'hello@13',
    _password: 'ravigupta',
    
    get email(){
       return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const newUser = Object.create(user)
console.log(newUser.email);