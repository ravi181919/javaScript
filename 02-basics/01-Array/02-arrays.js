const arr = ['ravi', 'sona', 'sumandra']
const arr1 = ['hello', 'ritik', 'irshad']

// arr.push(arr1)
// console.log(arr);
// console.log(arr[3][1]);


const allArr = arr.concat(arr1)
console.log(allArr);


// ...
const allArr1 = [...arr, ...arr1]
console.log(allArr1);


//  flat 
const another = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnOther = another.flat(Infinity)
console.log(realAnOther);

// isArray, from , of
console.log(Array.isArray('hii')); // false 
console.log(Array.from('hii')); // [ 'h', 'i', 'i' ]
console.log(Array.from({name: 'ravi'})); // interesting

let score = 100
let score1 = 200
let score2 = 300
console.log(Array.of(score, score1, score2)); // [ 100, 200, 300 ]


