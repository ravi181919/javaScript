/********************************************************************************************
 * ************************ map ************************************************************
 * ******************************************************************************************
 */

const myNum = [1,2,3,4,5,6,7,8,9,10]

// first method
const newMyNum = myNum.map((num) => {
  return  num + 10
})
console.log(newMyNum);

// second method 
const secondMethod = myNum.map((num) => num + 10)
console.log(secondMethod);

// its give undefined 
const undefinedMethod = myNum.map((num) => {
    num + 10
})
console.log(undefinedMethod);

