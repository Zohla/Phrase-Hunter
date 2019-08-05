// / * app.js */


let game;
const startButton = document.getElementById('btn__reset'); //refactor later

startButton.addEventListener('click', function(){
    game = new Game();
    game.startGame();
    

});

const keyboard = document.getElementById('qwerty')

keyboard.addEventListener('click', (e) => {
    let clickedLetter = e.target;    
    
    if(clickedLetter.className === 'key'){
        game.handleInteraction(e.target);
    }
    
    
});

document.addEventListener('keydown', (e) => {
    const keyPressed = e.key.toLowerCase();
    const onScreenKeys = document.getElementsByClassName('key').textContent;
    
   

    if (onScreenKeys.includes(keyPressed)) {
        for (let i = 0; i < onScreenKeys.length; i++) {
           if (onScreenKeys[i] == keyPressed) {
               onScreenKeys[i].click();
           }
            
        }
    }

})



   