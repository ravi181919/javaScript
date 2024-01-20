
const selectHead = document.querySelector('h2');
const selectStop = document.querySelector('#stop');
const selectStart = document.querySelector('#start');
const selectRestart = document.querySelector('#restart');
let countStart = 0;
let stopSet;

selectStart.addEventListener('click', () => {
    function set(){
       
    }
  
});

selectStop.addEventListener('click', () => {
    clearInterval(stopSet);
})

selectRestart.addEventListener('click', () => {
    countStart = 0;
    selectHead.innerHTML = 0;
    clearInterval(stopSet);
})


function updateCounter(){
    countStart++;
    selectHead.innerHTML = countStart
    if (countStart >= 100) {
        stopCounter();
    }
}

function startCounter(){
    stopSet = setInterval(updateCounter,1000);
}

function stopCounter(){
    clearInterval(stopSet);
}

function reStartCounterApp(){
    countStart = 0
    selectHead.innerHTML = 0
    stopCounter();
}

/* Check if required elements are present */
if(selectHead && selectRestart && selectStart && selectStop)
{
    selectStart.addEventListener('click', startCounter);
    selectStop.addEventListener('click', stopCounter);
    selectRestart.addEventListener('click', reStartCounterApp);
}
else{
    alert('One or more required elements not found in the DOM.')
}