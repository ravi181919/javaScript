/*****************************************************************************************************************
 * ************************************************** forEach ****************************************************
 * ***************************************************************************************************************
 *  forEach => (1)value of array, (2)index of value, (3) array,  
 */

const myarray = ['hello', 'hii', 'how', 'where']

// using normal callbackFunction => print (1) value of array
myarray.forEach(function(v){ 
    console.log(v);
})

// using arrow callbackFunction => print (2) index of value,  and (1) value of array
myarray.forEach((v, i) => {
    console.log(v, i);
})

//  print => (3) array, (2) index of value,  and (1) value of array
myarray.forEach((v, i, a) => {
    console.log(i, v, a);
})


/****************************************************************************************************************
 **********************  apply forEach at, object in the array **************************************************
 ****************************************************************************************************************
 */

 const myObjectInArray = 
 [
    {
        name: "ravi",
        age: 20
    },
    {
        name: "akrt",
        age: 20
    },
    {
        name: "sumandra",
        age: 20
    },
    {
        name: "hello",
        age: 20
    },
 ]
 myObjectInArray.forEach((i) => {
    console.log(i.name);
 })



 //  method 
 function helloJii(i)
 {
    console.log(i);
 }
 myObjectInArray.forEach(helloJii);


 /***************************************************************************************************************
  * ************************   return =  alyways give Undefined in forEach loop ********************************* 
  ***************************************************************************************************************
  */

  // Example no 1 
  const myNewArray = ['hello', 'hii', 'how', 'where'];
  const lii = myNewArray.forEach((i) => {
        console.log(i);
        return i
  })
console.log(lii);


  // Example no 2 
  const low  = myNewArray.forEach((l) => {
        // console.log(l);
        return l // undefined 
  })
console.log(low);

// example no 3 

const val = myNewArray.forEach((v) => {
    console.log(v); // undefined 
})
console.log(val);


/************************************************************************************************************************ */

const  numb = [1,2,3,4,5,6,7,8,9,10]

const myNumber = []

numb.forEach((pus) => {
     if (pus > 4)
     {
        myNumber.push(pus)
     }
})
console.log(myNumber);