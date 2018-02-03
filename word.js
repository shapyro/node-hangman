//  word array:
const Letter = require('./letter.js');
var newLetter;

//  word constructor
function Word(word) {
	this.word = word;
  this.letterArray = [];
  //  build the letter array
  for  (var i=0; i<this.word.length; i++) {
    newLetter = new Letter(this.word[i]);
    this.letterArray.push(newLetter);
  }
};

// shows either blanks or letters for the whole word
// call .check() on each letter in this.letterArray
// re-join together the results from each of those calls
// either return or log the result
Word.prototype.splitter = function() {
  var storedWord = [];
  for (var i = 0; i < this.letterArray.length; i++) {
    storedWord.push(this.letterArray[i].blank());
  }
  return storedWord.join(' ');
};

// call the check() function on EACH letter in this.letterArray
// return true if any one of those returned true
// return false if ALL of those returned false
Word.prototype.guess = function(char) {
  var guessedSoFar = false;
  for (var i=0; i<this.letterArray.length; i++) {
    if (this.letterArray[i].check(char)) {
      guessedSoFar = true;
    } 
  }
  //if (guessedSoFar) // log correct or incorrect
  return guessedSoFar;
};


module.exports = Word;


