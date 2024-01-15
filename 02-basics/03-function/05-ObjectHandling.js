///////////// object pass in function or hanlding /////////////////////

const user = 
{
   userFullName: 'ravi',
   price: 2000
};

function handleObject(any)
{
   console.log(`UserName is: ${any.userFullName} and price is: ${any.price}`);
}
handleObject(user)
// or 
handleObject({
   userFullName:'helo',
   price: 300
})
