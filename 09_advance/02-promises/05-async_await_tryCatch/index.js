// asyncAwait and tryCtach
   
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


async function getAll()
{
 try {
    const response = await fetch('https://api.github.com/users/ravi181919')
    const data = await response.json()
    console.log(data);
    } 
    catch (error)
    {
    console.log("E", error);
}
}
getAll()