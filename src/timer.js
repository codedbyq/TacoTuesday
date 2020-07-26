class Timer {
    constructor(duration, callback) {
        this.duration = duration;
        this.callback = callback;
        this.interval = null;
        this.time = this.duration;
        this.tick = this.tick.bind(this);
    }

    // decrement time remaining by 1 sec, if time reaches 0 then trigger the 
    // given callback. Otherwise, render remaining time in the game
    tick() {
        this.time --;
        
        if (this.time < 1) {
            this.time = 0;
            this.stop();
            this.callback();
        }

        const timer = document.getElementById('timer');
        timer.innerHTML = this.time;
    }

    // starts the timer and calls the tick function asynchronously every 1 second
    start() {
        if (this.interval) clearInterval(this.interval);
        this.time = this.duration;
        this.interval = setInterval(this.tick, 1000);
    }

    // stop the current timer
    stop() {
        clearInterval(this.interval);
    }

    // stop the timer from rendering in the game
    remove() {
        const timer = document.getElementById('timer');
        timer.remove();
    }
}

export default Timer;


