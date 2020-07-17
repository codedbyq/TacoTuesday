import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    const start = document.querySelector('.start-btn');
    const restart = document.querySelector('.restart-btn');

    // once the start button is clicked hide the div and begin the game
    start.addEventListener('click', () => {
        const intro = document.getElementById('intro');
        intro.classList.add('hidden');
        game.start();
    });

    // once the start button is clicked hide the div and begin the game
    restart.addEventListener('click', () => {
        game.restart();
    });
});