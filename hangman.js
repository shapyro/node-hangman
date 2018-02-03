//  HANGMAN FOR NODE
//  computer choose a word from array
//  display blanks of word
//  user inputs one letter at a time
//    if letter is in word string array, it's a match
//    replace blank with letter guessed if a match
//    if letter is not a match, decrease guess count and display "INCORRECT" 

const colors = require('colors');
const Word = require('./word.js');
const inquirer = require('inquirer');
const wordArray = ["funk", "rock", "rap", "country", "pop", "jazz"];
var hangman;

console.log('Guess the Music Genre'.america);

const Game = function() {
  this.wins = 0;
  this.losses = 0;
  this.guessCount = 10;
  this.isPlaying = true;
};

//  get the word to use
Game.prototype.pickWord = function() {
  this.currentWord = new Word(wordArray[Math.floor(Math.random() * wordArray.length)]);
  console.log(this.currentWord.splitter());
  console.log('\n');
  // console.log("[hangman.js 35]: " + this.currentWord.word);
};

Game.prototype.guessALetter = function() {
  inquirer
    .prompt([
      {
        message: 'Guess a letter',
        type: 'input',
        name: 'guess',
        validate: value => hangman.validateGuess(value)
      }
    ])
    .then(function (answer) {
      console.log("You have " + hangman.guessCount + " guesses remaining.")
      if(hangman.currentWord.guess(answer.guess)) {
        console.log("correct")
      } else {
        console.log("incorrect")
      }
      if (hangman.isPlaying  && hangman.guessCount !== 0) {
        console.log(hangman.currentWord.splitter());
        console.log('\n');
        hangman.checkWin();
      } else if (hangman.guessCount === 0) { 
        console.log('you LOSE'.red)
        console.log(`the genre is "${hangman.currentWord.word}"`);
        hangman.isPlaying = false;
        hangman.losses++;
        hangman.playAgain();
      }
    });

};

Game.prototype.validateGuess = function(value) {
  hangman.guessCount--;
  var ltrs = /^[a-zA-Z]+$/
  if(value.match(ltrs) && value.length === 1){
    return true;
  } else {
    console.log(`\nA Guess must be a single charactar, a letter\nYou have ${hangman.guessCount} guesses remaining`)
    if (hangman.guessCount === 0){
      console.log('you LOSE'.red)
      console.log(`the genre is "${hangman.currentWord.word}"`);
      hangman.playAgain();
    }
  }
};

Game.prototype.checkWin = function () {
  var correctGuessCount = [];
  for (var i = 0; i<hangman.currentWord.letterArray.length; i++) {
    if (hangman.currentWord.letterArray[i].guess === true) {
      correctGuessCount.push(hangman.currentWord.letterArray[i].guess);
    }
  }
  if (hangman.currentWord.letterArray.length === correctGuessCount.length) {
    hangman.isPlaying = false;
    hangman.wins++
    console.log('YOU WIN'.rainbow);
    console.log(`you have won ${hangman.wins} games so far...`);
    hangman.playAgain();
  } else {
    hangman.guessALetter();
  }
};

Game.prototype.playAgain = function() {
  inquirer
    .prompt([
      {
        name: 'confirm',
        type: 'confirm',
        message: 'Do you want to play again?'
      }
    ])
    .then(function (response) {
      if (response.confirm) {
        console.log("Guess the Music Genre".america);
        hangman.guessCount = 10
        hangman.isPlaying = true;
        hangman.pickWord();
        hangman.guessALetter();
      } else {
        hangman.endGame();
      }
    });

};

Game.prototype.endGame = function() {
  hangman.isPlaying = false;
  console.log("game over")
  console.log("Wins: " + hangman.wins)
  console.log("Losses: " + hangman.losses)
  console.log('Thanks for playing!'.zebra);
};

const run = function() {
  hangman = new Game();
  hangman.pickWord();
  hangman.guessALetter();
};

run();



