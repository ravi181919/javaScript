// for Loop
// syntax
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let ar = 0; ar <= 10; ar++)
{
    let el = ar;
    console.log(el);
}

// with if statment
for (let i = 0; i <= 10; i++)
{
    let el = i;
    if(el == 5)
    {
        console.log(`5 is b`);
    }
    console.log(el);
}



////////// nesting in for loop 

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner Loop: ${j} and Outer Loop: ${i}`);
    }
}

//////////////////// table print by using for loop  ////////////////

for (let i = 0; i <= 10; i++) {
    console.log(`Table of: ${i}`);
    for (let j = 0; j <= 10; j++) {
       console.log(`${i} * ${j} = ${i * j}`);
    }
}

///////////////// Array //////////////////////////////////////////////////

let myArray = ['hello', 'hii ', 'how', 'who']
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {  
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

// break 
for (let i = 1; i <= 20; i++)
{
    if(i == 5)
    {
        // console.log(`Detected 5`);
        break
    }
// console.log(`value is: ${i}`);
}

// continue 
for (let i = 1; i <= 20; i++)
{
    if(i == 5)
    {
        console.log(`Detected 5`);
        continue
    }
console.log(`value is: ${i}`);
}

