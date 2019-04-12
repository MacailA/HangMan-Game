
// Array of secret words for the Hangman game.
let secretWords = [
    "important",
    "dragon",
    "noah",
    "stanly",
    "supriya",
    "jordan",
    "stickman",
    "apple",
    "apex",
    "playstation"
];

// Randomly pick a word from the "secretWords" array.
let word = secretWords[Math.floor(Math.random() * secretWords.length)];

// I want to create another array with underscores. This will match the number of letters in my secretwords when chose randomly.

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;

// creating alert to show the correct letters in the word the player guessed.
alert(answerArray.join(" "));

//Getting the Player's letter guess (input) and update the game state with the player's guess   
let playersGuess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
    break;
} else if (guess.length !== 1) {
    alert("Please enter a single letter.");
} else {

    // Update the game state with the guess }

    for (let l = 0; l < word.length; l++) {
        if (word[l] === guess) {
            answerArray[l] = guess; remainingLetters--;
        }
    }
}

// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);


