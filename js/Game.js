

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

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

    }

    /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }
}