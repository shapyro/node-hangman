//  word array:
const Letter = require('./letter.js');
var newLetter;

//  word constructor
function Word(word) {
	this.word = word;
  this.letterArray = [];

  for  (var i=0; i<this.word.length; i++) {
    newLetter = new Letter(this.word[i]);
    this.letterArray.push(newLetter);
  }
};

// Word.prototype.getLetters = function() {
//   // push each letter of the word into the letterArray
//   //  look into changing this to .map(foo => bar) ES6
//   for  (var i=0; i<this.word.length; i++) {
//     newLetter = new Letter(this.word[i]);
//     this.letterArray.push(newLetter.char);
//   }
// };

// shows either blanks or letters for the whole word
// call .check() on each letter in this.letterArray
// re-join together the results from each of those calls
// either return or log the result
Word.prototype.splitter = function() {
  // this.addBlank = new Letter();
  // this.makeBlanks = function(){
  //   this.letterArray.map(l=>addBlank.blank(l))
  // }
  // addBlank.blank(this.letterArray.map(l=>'_'));
  var storedWord = [];
  for (var i = 0; i < this.letterArray.length; i++) {
    storedWord.push(this.letterArray[i].blank());
  }
  return storedWord.join(' ');
  // this.blanks = this.letterArray.map(l=>'_')
  // console.log("[word.js line 28]: " + this.blanks);
  // var word = '_ _ l l';
  // console.log(word);
};

// call the check() function on EACH letter in this.letterArray
// return true if any one of those returned true
// return false if ALL of those returned false
Word.prototype.guess = function(char) {
  var guessedSoFar = false;
  for (var i=0; i<this.letterArray.length; i++) {
    console.log("word.js | line 52 | " + this.letterArray[i]);
    console.log(this.letterArray[i].check(char));
    if (this.letterArray[i].check()) {
      guessedSoFar = true;
    }
  }
  return guessedSoFar;
  // for (var i=0; i<this.letterArray.length; i++) {
  //   //don't do this! Example, will return too early and won't finish the loop
  //   // var newGuess = new Letter(char);
  //   if (this.letterArray[i].check()) {
  //     console.log("something happened");
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
};
// };

// //just for example
// var someCondition = false;

// var word = "hello";

//pattern for returning whether we got true at least once,
// without stopping your loop
// var guessedSoFar = false;
// for (var i=0; i<this.letterArray.length; i++) {
// 	if (this.letterArray[i].check()) {
// 		guessedSoFar = true;
// 		// do some other stuff, maybe
// 	} else {
// 		//do some other stuff, maybe
// 	}

// }
// return guessedSoFar;

module.exports = Word;


