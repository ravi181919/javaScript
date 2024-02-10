class User {
    constructor (email, password)
    {
        this.email = email
        this.password = password
    }
    
    get password()
    {
        // return this._password.toUpperCase()
        return `${this._password}Hello`
    }
    set password(value)
    {
        this._password = value
    }
    
    get email()
    {
        return this._email.toUpperCase()
    }
    set email(val)
    {
        this._email = val
    }
}
const newUser = new User('ravi@123', 'abs');
console.log(newUser.password);
console.log(newUser.email);