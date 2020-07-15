class Timer {
    constructor(duration, callback) {
        this.duration = duration;
        this.callback = callback;
        this.interval = null;
        this.count = this.duration;
        this.tick = this.tick.bind(this);
    }

    // decrement time remaining by 1 sec, if time reaches 0 then trigger the 
    // given callback. Otherwise, render remaining time in the game
    tick() {
        this.count --;
        
        if (this.count < 1) {
            this.count = 0;
            this.stop();
            this.callback();
        }

        const timer = document.getElementById('timer');
        timer.innerHTML = this.count;
    }

    // starts the timer and calls the tick function asynchronously every 1 second
    start() {
        if (this.interval) clearInterval(this.interval);
        this.count = this.duration;
        this.interval = setInterval(this.tick, 1000);
    }

    // stop the current timer
    stop() {
        clearInterval(this.interval);
    }

    // stop the timer from rendering in the game
    removeTimer() {
        const timer = document.getElementById('timer');
        timer.remove();
    }
}

export default Timer;