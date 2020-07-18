import Game from './game';

console.log('webpack is running')

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    const start = document.querySelector('.start-btn');
    const restart = document.querySelector('.restart-btn');
    const volume = document.querySelector('.volume-btn');

    volume.addEventListener('click', () => {
        const sounds = document.getElementsByTagName('audio');
        const soundsArr = Array.from(sounds);
        volume.classList.toggle('mute');
        
        soundsArr.forEach(sound => {
            if (sound.volume > 0) {
                sound.pause();
                sound.volume = 0;
            } else {
                sound.volume = 0;
                sound.play();
            }
        });
    });

    // once the start button is clicked hide the div and begin the game
    start.addEventListener('click', () => {
        const bgmusic = document.getElementById('salsa');
        bgmusic.volume = 0.3;
        bgmusic.play();
        
        const audio = document.getElementById('bron-sound');
        audio.volume = 0.3;
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