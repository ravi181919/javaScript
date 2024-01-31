
// aync-await,  fetch,  tryCatch
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


// with the help of then catch finally 
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
.finally(console.log('all are done'))
