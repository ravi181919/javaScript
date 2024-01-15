// Dates 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreateDate = new Date(2023, 0, 23)
console.log(myCreateDate.toDateString());
console.log(myCreateDate);

let myDateSecond = new Date(2023, 0, 23, 5, 3)
console.log(myDateSecond.toLocaleString());

let myDatem = new Date('01-14-2023');
console.log(myDatem.toLocaleString());


let myTimeStemp = Date.now()
console.log(myTimeStemp);
console.log(myDatem.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getTime());
console.log(newDate.getFullYear());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: 'long'
})

