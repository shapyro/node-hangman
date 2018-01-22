//  HANGMAN FOR NODE
//  computer choose a word from array
//  display blanks of word
//  user inputs one letter at a time
//    if letter is in word string array, it's a match
//    replace blank with letter guessed if a match
//    if letter is not a match, decrease guess count and display "INCORRECT" 

// const Letter = require('./letter.js')
const Word = require('./word.js')

const guessCount = 10;

var newWord = new Word();
return newWord.word;

// const currentWord = new Word(wordToUse);
// console.log("The Current Word is: " + currentWord);

