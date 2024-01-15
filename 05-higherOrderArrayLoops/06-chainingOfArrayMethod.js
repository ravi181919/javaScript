/**********************************************************************************************
 * *************************** chaining method ***********************************************
 * *********************************************************************************************
 */
// first method 
const numbers = [1,2,3,4,5,6,7,8,9,10]

const chaining = numbers
                        .map((num) => num * 10)
                        .map((num) => num + 1)
                        .filter((num) => num >= 30)
console.log(chaining);          

// second method 
let chainingNum = numbers
                        .map((num) => {
                           return num * 10
                        })
                        .map((num) => {
                           return num + 1
                        })
                        .filter((num) => {
                           return num >= 30
                        })
console.log(chainingNum);                        