const guessSlot = document.querySelector('.attempt');
const remainig = document.querySelector('.Remainig');
const lowOrhigh = document.querySelector('.lowOrhigh');
const userInput = document.querySelector('#UserInput');
const submitedNumberByUser = document.querySelector('#sum');
const previousAndRemainingGuesses = document.querySelector('.previousAndRemainingGuesses');

// random number generater (1 between 100)
let randomNumber = parseInt(Math.random() * 100 + 1);

// Game renders 
let pervGuess = [];
let numGuess = 1;
let playGame = true;
const p =  document.createElement('p');


if(playGame)
{
 submitedNumberByUser.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
 })
}

 
function validateGuess(guess)
{
    if(isNaN(guess))
   {
    alert('Please enter a valid number')
   }
   else if(guess < 1)
   {
    alert('please enter a number more than 1')
   } 
   else if(guess > 100)
   {
    alert('please enter a number less than 100')
   } 
   else
   {
    pervGuess.push(guess);
    if(numGuess === 11)
    {
        displayguess(guess)
        displayMessage(`Game Over Random number Was ${randomNumber}`);
        endGame();
    }
    else
    {
     displayguess(guess);
     checkGuess(guess);
    }
   }
}


function checkGuess(guess)
{
    if(guess === randomNumber)
    {
      displayMessage(`You guessed it right`)
      endGame();
    }
    else if (guess < randomNumber)
    {
      displayMessage(`Number is To low`)
    }
    else if (guess > randomNumber)
    {
      displayMessage(`Number is To high`)
    }
}


function displayguess(guess)
{
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainig.innerHTML = `${12 - numGuess}`;
}


function displayMessage(message)
{
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;

}



function endGame()
{
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="starNewGame">Start New Game</h2>`
  previousAndRemainingGuesses.appendChild(p);
  playGame = false;
  newGame();
}



function newGame()
{
  const newButton = document.querySelector('#starNewGame');
  newButton.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    pervGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remainig.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    previousAndRemainingGuesses.removeChild(p);
    playGame = true;
  });
}

