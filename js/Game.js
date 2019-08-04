

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    };

    /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game
   */
    createPhrases() { 
        
        let gamePhrases = [
            new Phrase('We will rock you'), 
            new Phrase('Walk this way'), 
            new Phrase('Thunderstruck'), 
            new Phrase('Born to be wild'), 
            new Phrase('Nothing else matters')
        ];
        return gamePhrases;

    };

    /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame(){
         const startScreenOverlay = document.getElementById('overlay');
         startScreenOverlay.style.display = 'none';
         this.activePhrase = this.getRandomPhrase();         
         this.activePhrase.addPhraseToDisplay();
    };

    handleInteraction(){

    };

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        let shownLetters = document.getElementsByClassName('show');
        let sumLetters = document.getElementsByClassName('letter');

        if (shownLetters.length == sumLetters.length) {
            return true;
        } else {
            return false;
        }
    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {

        const hearts = document.querySelectorAll('img');

        hearts[this.missed].src="images/lostHeart.png";
        this.missed += 1;
        if(this.missed === 5) {
            this.gameOver(false);
        }   
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const gameOverMessage = document.getElementById("game-over-message");
        overlay.style.display = 'block';
        if (!gameWon) {
            gameOverMessage.innerText = 'Better luck next time!';
            overlay.classList.add('lose');
        } 
        else {
            gameOverMessage.innerText = 'You won!';
            overlay.classList.add('win');
        }


    };
}