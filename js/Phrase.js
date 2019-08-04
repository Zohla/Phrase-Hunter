
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

    checkLetter() {

    }

    showMatchedLetter() {

    }

    


}