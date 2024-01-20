
/************************************** project bassed on setInterval() and clearInterval ************************/ 

// Function to set up timeouts that automatically start when the page loads
function setupTimeouts() { 
// Set up timeouts to update the content of an <h1> element at specified intervals
    const setupTimeout0 = setTimeout(() => document.querySelector('h1').innerHTML = 'javaScript',0)
    const setupTimeout1 = setTimeout(() => document.querySelector('h1').innerHTML = 'start', 1000);
    const setupTimeout2 = setTimeout(() => document.querySelector('h1').innerHTML = 'step One', 2000);
    const setupTimeout3 = setTimeout(() => document.querySelector('h1').innerHTML = 'step two', 3000);
    const setupTimeout4 = setTimeout(() => document.querySelector('h1').innerHTML = 'step three', 4000);
    const setupTimeout5 = setTimeout(() => document.querySelector('h1').innerHTML = 'end', 5000);
    const setupTimeout6 = setTimeout(() => document.querySelector('h1').innerHTML = 're-start', 5000);

// Return an array of timeout IDs for potential later manipulation
return [setupTimeout0, setupTimeout1, setupTimeout2, setupTimeout3, setupTimeout4, setupTimeout5, setupTimeout6];
}

// Store timeout IDs in a variable for the start and stop buttons 
let timeouts = setupTimeouts();

// Event listener for the start button for Restart the timeouts when the start button is clicked
document.querySelector('#startButton').addEventListener('click', () => {
    timeouts = setupTimeouts(); 
});

// Event listener for the stop button for Stop all the running timeouts when the stop button is clicked
document.querySelector('#stopButton').addEventListener('click', () => {
    timeouts.forEach(clearTimeout); 
});


