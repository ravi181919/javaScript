
// call is hold reference 

function mycall(username){
    this.username = username
    console.log('called');
}
function setmycall(username, password, email)
{
    // mycall(username)
    mycall.call(this, username) 
  
    // this.username = username
    this.email = email
    this.password = password
}
const hello = new setmycall('ravi', '123', 'rg@gmail')
console.log(hello);