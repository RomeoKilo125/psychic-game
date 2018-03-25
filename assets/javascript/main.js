let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let secretLetter = ""

let guesses = []

let guessesLeft = 0
let wins = 0
let losses = 0

function StartGame() {
  guesses = []
  guessesLeft = 10
  secretLetter = ChooseLetter();
  console.log("Secret Letter: " + secretLetter);
  document.querySelector('#resultsBox').innerHTML = "";
  document.querySelector('#guessesLeft').innerHTML = guessesLeft;
  document.querySelector('#guessedList').innerHTML = guesses.toString();
}

function ChooseLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

document.onkeyup = function(event) {
  let guess = event.key.toUpperCase();
  if (guess === "ENTER") {
    StartGame();
    return;
  }
  if (guessesLeft <= 0 || guesses[guesses.length - 1] === secretLetter|| guesses.indexOf(guess) != -1) {
    return;
  }
  console.log("Guess: " + guess);
  guesses.push(guess);
  if (guess === secretLetter) {
    wins++;
    document.querySelector('#resultsBox').innerHTML = "<h1>Congratulations!</h1>\n<h3>The letter was " + secretLetter + "</h3>\n<p>Press ENTER to play again.</p>";
    document.querySelector('#wins').innerHTML = wins;
  } else {
    document.querySelector('#resultsBox').innerHTML = "<h1>Try Again!</h1>\n<h3>The letter is still unknown.</h3>"
    document.querySelector('#guessedList').innerHTML = guesses.toString();
    guessesLeft--;
    if (guessesLeft <= 0) {
      losses++;
      document.querySelector('#resultsBox').innerHTML = "<h1>I'm Sorry, you lost!</h1>\n<h3>The letter was " + secretLetter + "</h3>\n<p>Press ENTER to play again.</p>";
      document.querySelector('#losses').innerHTML = losses;
    }
    document.querySelector('#guessesLeft').innerHTML = guessesLeft;
  }
}

StartGame()
