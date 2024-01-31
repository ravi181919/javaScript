// second method => 
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task is compelete');
        resolve()
    },1000)
}).then(() => {
    console.log('second Promise is consumed or resolved');
})