//  connect hangname file
const Hangman = require('./hangman.js');

const count = 0;
var i = 0;
const wordArray = ['happy', 'sad', 'chill', 'surprise'];

const Word = function() {
  this.nextWord = function() {
    this.word = wordArray[i];
    console.log("the word is: " + this.word);
    i++;
  }
}

var test = new Word();
test.nextWord();

// const aWord = new Word(word)
// for (var i = 0; i < wordArray.length; i++) {
//   aWord = wordArray[i];
//   console.log(this.aWord);
// }

module.exports = Word;


