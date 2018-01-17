

var Letter = function(id, char){
	this.id = id;
	this.char = char;
	this.visibleChar = "_";
	this.isGuessed = false;

	this.revealChar = function(){
		if (this.isGuessed === true){
			this.visibleChar = this.char;
		}
	}
}

module.exports = Letter;