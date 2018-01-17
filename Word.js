var Letter = require('./Letter.js');

var Word = function(selectedWord){
	this.asString = selectedWord.toUpperCase();
	this.letterArray = [];
	this.isGuessed = false;
	this.guessWasCorrect;
	this.guessesRemaining = 10;

	this.generateLetters = function(){

		var tempArray = this.asString.split('');

		for (id in tempArray){
			var char = tempArray[id];
			var newLetter = new Letter(id, char);
			this.letterArray.push(newLetter);
		}
		
	}

	this.renderWord = function(){

		var renderedString = "";
		for (var i = 0; i < this.letterArray.length; i++){
			renderedString += this.letterArray[i].visibleChar + " ";
		}
		
		console.log("\n\n\n    " + renderedString + " \n\n\n");

	}

	this.queryGuess = function(guess){
		for (var i = 0; i < this.letterArray.length; i++){
			if (guess === this.letterArray[i].char){
				this.letterArray[i].isGuessed = true;
				this.letterArray[i].revealChar();
				this.guessWasCorrect = true;
			}
		}
		this.renderWord();
		if(!this.guessWasCorrect){
			this.guessesRemaining--;
			console.log("Incorrect! Guesses Remaining: " + this.guessesRemaining.toString() + "\n");
		}else if(this.guessWasCorrect){
			console.log("Correct! Guesses Remaining: " + this.guessesRemaining + "\n");
			this.guessWasCorrect = false;
		}

		this.isGuessed = this.checkStatus();
	}

	this.checkStatus = function(){
		for (var i = 0; i < this.letterArray.length; i++){
			if (this.letterArray[i].isGuessed === false) return false;
		}
		return true;
	}


}

module.exports = Word;