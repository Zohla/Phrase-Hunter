// / * app.js */


let game;
const startButton = document.getElementById('btn__reset'); //refactor later

startButton.addEventListener('click', function(){
    game = new Game();
    game.startGame();
    

});

document.getElementById('qwerty').addEventListener('click', (e) => {
    if(e.target.className === 'key'){
        game.handleInteraction(e);
    }
    
});



   