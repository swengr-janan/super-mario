/**
 * Guess The Number Game
 * DONE: +Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberBelow
 * DONE: Use the showYouWon... functions within displayResult to display the correct dialog
 * DONE: Save the guess history in a variable called guess
 * DONE: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 

// Variable for store the correct random number 
let correctNumber = getRandomNumber();
let guesses = [];
let coins = 0;

//Game sound
var mySound;

window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
    document.getElementById("play-again").addEventListener("click", initGame);
    document.getElementById("play-again").style.display = 'none';


}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  
  var numberGuess = document.getElementById("number-guess").value;

  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();

}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
// *CODE GOES BELOW HERE *
function displayResult(numberGuess){
    //Check if the number is correct
    if(numberGuess > correctNumber){
      showNumberAbove(numberGuess);
    }else if(numberGuess < correctNumber){
      showNumberBelow(numberGuess);
    }else if(numberGuess == correctNumber){
      showYouWon(numberGuess);
    }
  
}

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  correctNumber = getRandomNumber();
  guesses = [];
  document.getElementById("result").innerHTML = "";
  displayHistory(guesses);
  document.body.style.backgroundColor = "rgb(214, 214, 214)";
  document.getElementById("banner-image").src="image/box.png";

  document.getElementById("play-again").style.display = 'none';
  document.getElementById("number-submit").style.display = 'inline';
  document.getElementById("restart-game").style.display = 'inline';


}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;

}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  
  guesses.push(guess);

}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
    for(index = guesses.length - 1; index >= 0; index--){
      list += "<li class='list-group-item'>You guessed <strong>" + guesses[index] + "</strong></li";
      list += '</ul>'
    }
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text, numberGuess){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  numberGuess = "<strong>" + numberGuess + "</strong>"+  text;
  dialog += numberGuess;
  dialog += "</div>"
  return dialog;
}

function showYouWon(numberGuess){
  const text = " is correct! Awesome!"

  //Play sound when you won
  var sound = new Audio('sounds/won.mp3');
  sound.play();

  let dialog = getDialog('won', text, numberGuess);
  document.getElementById("result").innerHTML = dialog;
  document.body.style.backgroundColor = "#90ee90";
  document.getElementById("banner-image").src="image/correct.png";

  document.getElementById("number-submit").style.display = 'none';
  document.getElementById("restart-game").style.display = 'none';
  document.getElementById("play-again").style.display = 'inline';

  coins += 1;
  document.getElementById('score').textContent = coins;

}

function showNumberAbove(numberGuess){

  const text = " is too high!"

  //Play sound when you won
  var sound = new Audio('sounds/wrong.mp3');
  sound.play();
  
  let dialog = getDialog('warning', text, numberGuess);
  document.getElementById("result").innerHTML = dialog;
  document.body.style.backgroundColor = "#FFB6C1";
  
  
}

function showNumberBelow(numberGuess){
  const text = " is too low!"

  //Play sound when you won
  var sound = new Audio('sounds/wrong.mp3');
  sound.play();
  
  let dialog = getDialog('warning', text, numberGuess);
  document.getElementById("result").innerHTML = dialog;
  document.body.style.backgroundColor = "#FFB6C1";

  
}
