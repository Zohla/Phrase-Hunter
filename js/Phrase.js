
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();

    }
    /**
    * Display phrase on game board.
    * Takes the phrase, splits it, and adds placeholders and spaces.
    */
    addPraseToDisplay(){
        const phraseUl = document.getElementById('phrase');
        const splitPhrase = this.phrase.split('');

        splitPhrase.forEach(element => {
            let phraseLi = document.createElement('li');
            phraseUl.append(phraseLi);

            if (element === ' ') {
                li.setAttribute('class', 'space' )

            } else {
                li.classList.add('letter', `${element}`);
                li.innerText = element;
            }
            
        });
        





    };

    checkLetter() {

    }

    showMatchedLetter() {

    }

    


}