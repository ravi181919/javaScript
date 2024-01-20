const start = document.querySelector('#startBtn');
const stop = document.querySelector('#stopBtn');
let creatSetInterval;

// random color Code Generator 
const renderColorGenerator = () => {
    let colorCodeSymbol = '#'
    let hexValue = '0123456789ABCDEF'

    for(let i = 0; i < 6; i++){
        colorCodeSymbol += hexValue[Math.floor(Math.random() * 16)]
    }
    return(colorCodeSymbol);
}

// start BgChanging color in every second 
const startChangeColorEverySecond = () => {
    function colorChange(){
        document.querySelector('body').style.backgroundColor =  renderColorGenerator();
    }
    if(creatSetInterval == null){
        creatSetInterval = setInterval(colorChange, 1000)
    }
}

// stop BgChanging color
function stopChangeColorEverySecond(){
    clearInterval(creatSetInterval)
    creatSetInterval = null;
}

// start and stop button 
stop.addEventListener('click', stopChangeColorEverySecond)
start.addEventListener('click', startChangeColorEverySecond)
