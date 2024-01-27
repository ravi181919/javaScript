// First method => 1 
const promiseOne = new Promise((resolve, reject ) => {
     // do an async task
     // db calls , network , cryptography

     setTimeout(() => {

        console.log('Asyn task is compelete');

        resolve()  // it is execute, when work is compelete 

     },1000)
})
promiseOne.then(() => {
   console.log('Promise Consumed');
})


// second method => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task is compelete');
        resolve()
    },1000)
}).then(() => {
    console.log('second Promise is consumed or resolved');
})


// resolve bassed  example  : ===
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({userName:'ravi', email: 'rg@gmail'}); 
    },1000)
}).then((user) => {
    console.log(user);
})

// now next example is bassed no resolve and reject => 
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



// async await 

const promiseFive = new Promise((resolve , reject) => 
{
    setTimeout(() =>
    {
        let error = true 
    if(!error)
    {
        resolve({username: 'js', password:'123'})
    }else{
        reject('ERROR: Js went wrong')
    }
    },1000)
})

async function consumePromise(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromise()


// with the help of async await 
// async function getAll()
// {
//  try {
//     const response = await fetch('https://api.github.com/users/ravi181919')
//     const data = await response.json()
//     console.log(data);
//     } 
//     catch (error)
//     {
//     console.log("E", error);
// }
// }
// getAll()


// with the help of .then .catch 

fetch('https://api.github.com/users/ravi181919')
.then((response) => {
  return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error);
})