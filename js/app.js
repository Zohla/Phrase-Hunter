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



   