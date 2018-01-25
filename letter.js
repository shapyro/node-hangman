//  connect word file
const Word = require('./word.js');

function Letter(char) {
	this.char = char;
  this.guess = false;
  

	// returns blank or this letter, depending whether they guessed it so far
	this.blank = function() {
		if (this.guess) {
			return this.char;
		} else {
			return '_';
		}
	}

	// tells us whether a guess is correct
	this.check = function(char) {
    console.log("letters.js | line20 | " + this.char);
    console.log("letters.js | line21 | " + char);
		if (char === this.char) {
      this.guess = true;
      console.log("match!")
			return true;
		} else {
      console.log("wrong")
			return false;
		}
	}

}


module.exports = Letter;