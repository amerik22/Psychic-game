//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

function reset(){
    guessesLeft = 9;
	lettersGuessed.length = 0;
	computerGuess.length = 0;
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}

//Initial computer letter
window.onload = function() {
	var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	computerGuess.push(compGuess);
	console.log(computerGuess[0]);
}


//Game
document.onkeyup = function(event) {
	var playerGuess = event.key.toLowerCase();
	lettersGuessed.push(" " + playerGuess);
    console.log(computerGuess[0]);

if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
    wins++;
    alert("You win!");
    reset();
	
}
else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
	guessesLeft = guessesLeft-1;
}

else {
	losses++;
	alert("You did not guess the letter. You lose.")
	reset();
}

var html = "<p>Guess what letter I'm thinking of! You have " + guessesLeft + " tries.</p>" +
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + lettersGuessed + " " + "</p>";
 
document.querySelector("#game").innerHTML = html;

}