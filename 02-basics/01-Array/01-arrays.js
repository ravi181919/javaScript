// Array

const arr = [0, 1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);

const myArr = ['shaktiman', 'hello', 'hii']
console.log(myArr);

const arr1 = new Array(1, 2, 3, 4, 5)
console.log(arr1);

// Array Methods 

myArr.push('ravi') // add values last side 
console.log(myArr); 

myArr.pop() // remove last value
console.log(myArr);

myArr.unshift(0)  // add value first 
console.log(myArr);

myArr.shift()  // remove value last 
console.log(myArr);

console.log(myArr.includes('shaktiman')); // true 

console.log(myArr.indexOf('shaktiman')); // 0
console.log(myArr.indexOf('ravi')); // those value not present in array, this methid is give output :  -1

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);  // values  converted into string  


// slice, splice 

console.log('a', arr);

const myn1 = arr.slice(1, 3)

console.log(myn1); // 
console.log('b', arr);


const myn2 = arr.splice(1, 3)
console.log('c', arr);
console.log(myn2);