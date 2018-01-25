//  HANGMAN FOR NODE
//  computer choose a word from array
//  display blanks of word
//  user inputs one letter at a time
//    if letter is in word string array, it's a match
//    replace blank with letter guessed if a match
//    if letter is not a match, decrease guess count and display "INCORRECT" 

// const Letter = require('./letter.js')
const Word = require('./word.js');
const inquirer = require('inquirer');
const wordArray = ["funk", "rock", "rap", "country", "pop", "jazz"];
var hangman;

// let newTest = new Word(currentWord);
// newTest.getLetters();

const Game = function() {
  this.wins = 0;
  this.losses = 0;
  this.guessCount = 10;
  this.guesses = [];
  this.word = {};
  this.isPlaying = true;
};

//  get the word to use
Game.prototype.pickWord = function() {
  this.currentWord = new Word(wordArray[Math.floor(Math.random() * wordArray.length)]);
  // this.currentWord.getLetters();  // know the letters
  // this.currentWord.splitter();  // display blanks... or letters?
  // this.currentWord.guess();
  console.log(this.currentWord.splitter());
  // this.currentWord.setBlanks().showBlanks();
  console.log("[hangman.js 35]: " + this.currentWord.word);
  // console.log("[hangman.js 35]: " + this.currentWord.letterArray);
};

Game.prototype.guessALetter = function() {
  // const _this = this;
  inquirer
    .prompt([
      {
        message: 'Guess a letter',
        type: 'input',
        name: 'guess',
        // validate: this.letterGuess.guess();
        // validate: value => _this.validateGuess(value)
      }
    ])
    .then(function (answer) {
      console.log("inquirer input = " + answer.guess);
      hangman.currentWord.guess(answer.guess);
      if (hangman.isPlaying) {
        console.log(hangman.currentWord.splitter());
        console.log("still playing");
        hangman.guessALetter();
      } else {
        console.log("something went wrong");
        // this.playAgain();
      }
    });
};

// Game.prototype.validateGuess = function(value) {
//   if (value.length === 1) {
//     return true;
//   } else {
//     this.guessCount = this.guessCount - 1;
//     console.log(
//       `\n\nOne letter at a time, buddy. Guess again.\nAlso, you lose a guess for that. Now you have ${
//         this.guessCount
//       } guesses remaining.\n`
//     );
//     return false;
//   }
// };

// Game.prototype.playAgain = function() {
//   const _this = this;
//   inquirer
//     .prompt([
//       {
//         name: 'confirm',
//         type: 'confirm',
//         message: 'Do you want to play again?'
//       }
//     ])
//     .then(
//       response =>
//         response.confirm
//           ? _this
//               .reset()
//               .pickWord()
//               .guessALetter()
//           : _this.endGame()
//     );
// };

const run = function() {
  hangman = new Game();
  hangman.pickWord();
  hangman.guessALetter();
};

run();

