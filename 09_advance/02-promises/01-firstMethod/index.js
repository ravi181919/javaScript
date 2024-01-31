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