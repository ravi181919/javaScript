/******************* setInterval And clearInterval*********************/
/**
 * ** setInterval() => setInterval(() => {}, Interval, para.)
 *  The setInterval() method calls a function at specified intervals (in milliseconds).
 * 
 * ** clearInterval() => 
    The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.
 */

  let setInt;
  const restart = document.querySelector('#restButton')
  const stopButton = document.querySelector('#stop')
  const startButton = document.querySelector('#start')
  
  const time = () => {
    document.querySelector('h2').innerHTML = `${new Date().toLocaleTimeString()}`
  }

  function startTime(){
    setInt = setInterval(time, 0)
  }

  function stopTime(){
    clearInterval(setInt);
  }

  function refresh(){
      clearInterval(setInt);
      document.querySelector('h2').innerHTML = '';
  }

if(startButton && stopButton && restart)
{
  startButton.addEventListener('click', startTime)
  stopButton.addEventListener('click', stopTime)
  restart.addEventListener('click',refresh)
}
else
{
  alert('One or more required elements not found in the DOM.')
}