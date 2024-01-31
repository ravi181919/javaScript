// now next example is bassed no resolve ,reject and (then catch finally)    => 
new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false
        if(!error)
        {
           resolve({userName:'ravi', pass:'1233'})
        }
        else
        {
            reject('ERROR: somthing wen wrong')
        }
    }, 1000);
})
.then(function(user) {
     console.log(user);
     return user.userName
})
.then((myUsername) => {
    console.log(myUsername);
})
.catch((error) => {
    console.log(error);
})
.finally(() => console.log('The Promise is either resolved or rejected'))

