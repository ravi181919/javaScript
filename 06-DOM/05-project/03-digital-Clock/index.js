
// select clock space 
const clock = document.querySelector('.clock');

// show current time in clock space 
setInterval(() => {

    // find current time 
    let currentTime = new Date().toLocaleTimeString()

    // print current time inside clock space 
    clock.innerHTML = currentTime
},1000);