
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
            new Phrase('Free bird')
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
         const phraseDiv = document.getElementById('phrase'); 
         const startScreenOverlay = document.getElementById('overlay');
         const keys = document.getElementsByClassName('key');
         const hearts = document.querySelectorAll('img');

         while (phraseDiv.firstChild) {
             phraseDiv.removeChild(phraseDiv.firstChild);
         }
         for (let i = 0; i < keys.length; i++) {
             
             keys[i].disabled = false;
             keys[i].classList.add('key');
             keys[i].classList.remove('chosen', 'wrong');
             
         };

         for (let i = 0; i < hearts.length; i++) {
             hearts[i].src=`images/liveHeart.png`;
                 
         }
             
         startScreenOverlay.style.display = 'none';
         this.activePhrase = this.getRandomPhrase();         
         this.activePhrase.addPhraseToDisplay();
         startScreenOverlay.classList.remove('lose', 'win')
    };


    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */
    checkForWin() {
        let shownLetters = document.getElementsByClassName('show');
        let sumLetters = document.getElementsByClassName('letter');

        return (shownLetters.length == sumLetters.length) ? true : false;
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
        const buttons = document.getElementsByClassName('key')
        overlay.style.display = 'block';
        buttons.disabled = true;
        if (!gameWon) {
            gameOverMessage.innerText = 'Better luck next time!';
            overlay.classList.add('lose')
        } 
        else {
            gameOverMessage.innerText = 'You won!';
            overlay.classList.add('win');
        }
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;

        if(!this.activePhrase.checkLetter(button.textContent)) {
            button.classList.add('wrong');
            this.removeLife();
        } else {
            button.classList.add('chosen');
            
            this.activePhrase.showMatchedLetter(button.textContent);
            this.checkForWin();
        }
        
        if(this.checkForWin()) {
            this.gameOver(true);
        }
        console.log(button);
        };
}