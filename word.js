//  word array:
const Letter = require('./letter.js')
const wordArray = ["blip", "blap", "boom"]

//  word constructor
function Word() {
	this.word = wordArray[Math.floor(Math.random() * wordArray.length)];
  this.letterArray = [];

	for (var i=0; i<this.word.length; i++) {
		var newLetter = new Letter(this.word[i]);
    this.letterArray.push(newLetter.char);
	}
  
	// shows either blanks or letters for the whole word
	// call .check() on each letter in this.letterArray
	// re-join together the results from each of those calls
	// either return or log the result
	this.display = function() {
		var word = '_ _ l l';
		console.log(word);
	}

	// call the check() function on EACH letter in this.letterArray
	// return true if any one of those returned true
	// return false if ALL of those returned false
	this.guess = function(char) {
		for (var i=0; i<this.word.length; i++) {
			//don't do this! Example, will return too early and won't finish the loop
			if (this.letterArray[i].check()) {
				return true;
			} else {
				return false;
			}
		}
	}
}

const newWord = new Word();
console.log(newWord.letterArray);
//just for example
var someCondition = false;

var word = "hello";

//pattern for returning whether we got true at least once,
// without stopping your loop
var guessedSoFar = false;
for (var char of word) {
	if (someCondition) {
		guessedSoFar = true;
		// do some other stuff, maybe
	} else {
		//do some other stuff, maybe
	}

}
return guessedSoFar;

module.exports = Word;


