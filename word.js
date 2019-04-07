var letter = require("./letter.js");
var rand_word = require("random-words");

function Word() {
    var letters = [];

    var possible_words = [];

    var word = rand_word();
    this.word = word;
    var split_word = word.split("");

    split_word.forEach(function(){
    var temp = new letter(1);
    letters.push(temp);
    });
    this.letters = letters;

    this.showLetters = function(){
        var display = "";
        this.letters.forEach(function(letter) {
            display += letter.getChar() + " ";
        });
        display = display.slice(0, -1);
        console.log(display);
    }
    this.checkGuess = function(guess){
        var matches_found = 0;
        this.letters.forEach(function(letter){
            if (letter.guessed === false && letter.checkGuess(guess) === true) {
                letter.guess = true;
                matches_found++;
            }
        });
        return matches_found;
    }
}

module.exports = Word;