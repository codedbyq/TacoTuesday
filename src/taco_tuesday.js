import Game from './game';

console.log('webpack is running')

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    const start = document.querySelector('.start-btn');
    const restart = document.querySelector('.restart-btn');

    // once the start button is clicked hide the div and begin the game
    start.addEventListener('click', () => {
        const audio = document.getElementById('bron-sound');
        audio.play();

        const intro = document.getElementById('intro');
        intro.classList.add('hidden');
        game.play();
    });

    // once the start button is clicked hide the div and begin the game
    restart.addEventListener('click', () => {
        const audio = document.getElementById("bron-sound");
        audio.play();
        game.restart();
    });
});