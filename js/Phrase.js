
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }
    /**
    * Display phrase on game board.
    * Takes the phrase, splits it, and adds placeholders and spaces.
    */
    addPhraseToDisplay(){
        const phraseUl = document.getElementById('phrase');
        const splitPhrase = this.phrase.split('');

        splitPhrase.forEach(element => {
            let phraseLi = document.createElement('li');
            phraseUl.append(phraseLi);

            if (element === ' ') {
                phraseLi.setAttribute('class', 'space' )

            } else {
                phraseLi.classList.add('letter', `${element}`);
                phraseLi.innerText = element;
                
            }
            
        });
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter) ? true : false;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        if(this.checkLetter(letter)){
            let correctLetter = document.getElementsByClassName(`${letter}`);
            for (let i = 0; i < correctLetter.length; i++) {
                correctLetter[i].classList.add('show');
                
            }
        }
    }

}