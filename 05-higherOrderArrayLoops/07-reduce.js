/********************************************************************************************
 * ****************************** Reduce ***************************************************
 * ******************************************************************************************
 */

// first method 
const array = [1,2,3,4]
const first = array.reduce((acc, curr) =>{
    return acc + curr 
}, 0);
console.log(first);

// second method 
const initialValue = 0;
const storeArray =  array.reduce((acc, cur) => acc + cur, initialValue)
console.log(storeArray);

// or, in one line
const or = array.reduce((acc, cur) => acc + cur, 0);
console.log(or);

// for checking, how to work acc and curr argument
const check = array.reduce((acc, curr) => {
    console.log(`acc: ${acc} and curr: ${curr}`);
    return acc + curr
})
console.log(check);


// for example 
const cart = [
    {
       courseName: 'py',
       price: 2999
    },
    {
       courseName: 'js',
       price: 3999
    },
    {
       courseName: 'c++',
       price: 1999
    }
]
const totalPaid = cart.reduce((acc, item) => {
    return acc + item.price
},0);
console.log(totalPaid); // 8997