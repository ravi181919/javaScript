
const textChange = () => {
    document.querySelector('h1').innerHTML = 'Many features in javascript'
}

const clearSetTimeOut = setTimeout(textChange,2000); // setTimeout

document.querySelector('#stopButton').addEventListener('click',() => {
    clearTimeout(clearSetTimeOut); // clearTimeout
    console.log(`stop button is clicked`);
})

