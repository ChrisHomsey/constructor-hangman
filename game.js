var inquirer = require('inquirer');

var Word = require('./Word.js');

var Game = function(){
	this.wordBank = ["Constructor", "Variable", "Pizza", "Turtles", "Drumset", "Curry"];
	this.randomWord;
	this.currentWord; 

	this.startRound = function(){

		this.randomWord = Math.floor(Math.random()*this.wordBank.length);
		this.currentWord = new Word(this.wordBank[this.randomWord]);
		this.currentWord.generateLetters();
		this.currentWord.renderWord();
		this.play();
	}

	this.play = function(){

		inquirer
			.prompt(
				{
					type: "input",
					name: "guess",
					message: "Guess a letter!"
				}
			).then(function(answer){
			game.currentWord.queryGuess(answer.guess.toUpperCase());
			if (game.currentWord.guessesRemaining <= 0){
				game.gameOver('loss');
			}

			if (game.currentWord.isGuessed) {
				game.gameOver('win');
			}

			if (!game.currentWord.isGuessed && game.currentWord.guessesRemaining > 0){
				game.play();
			}
		});
		
	}

	this.gameOver = function(result){
		if (result === 'loss'){
			console.log("Game Over.");
		} else if(result === 'win'){
			console.log("You win! Nice!");
		}
		inquirer
			.prompt(
				{
					type: "list",
					choices: ["yes","no"],
					name: "playAgain",
					message: "Play again?"
				}
			).then(function(answer){
				if(answer.playAgain === "yes"){
					game.startRound();
				}
			});
	}
}



var game = new Game();
game.startRound();