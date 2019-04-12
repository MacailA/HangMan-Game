
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
ufor (let i = 0; i < word.length; i++) {
     answerArray[i] = "_";
   }
   let remainingLetters = word.length;


