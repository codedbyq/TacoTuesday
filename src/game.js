import { Order } from './order';
import { Menu } from './menu';
import Timer from './timer';
import Taco from './taco';

class Game {
    constructor() {
        // class instances
        this.menu = new Menu();
        this.orderSize = this.generateOrderSize();
        const duration = this.orderSize === 4 ? 7 : 9; 
        this.order = new Order(this.orderSize, duration);
        this.taco = new Taco(this.orderSize, this.order);

        // game score
        this.updateGame = this.updateGame.bind(this);
        this.timer = new Timer(this.order.duration, this.updateGame);
        this.score = 0;
        this.strikes = 0;
        this.timeElapsed = new Date();
        this.levelUp = null;

        // binded functions
        this.play = this.play.bind(this);
        this.addMenuListener = this.addMenuListener.bind(this);
        this.addUndoListener = this.addUndoListener.bind(this);
        this.checkElapsedTime = this.checkElapsedTime.bind(this);
    }

    // randomly choose the customers order size
    generateOrderSize() {
        const size = [4, 6];
        const idx = Math.floor(Math.random() * 2);
        return size[idx];
    }

    // start the game
    play() {
        this.addMenuListener();
        this.addUndoListener();
        this.startTimer();
        this.renderScore();
    }

    // listen for one of the ingredients to be clicked, when one of them is
    // then add the clicked ingredient to the taco
    addMenuListener() {
        const ingredients = Array.from(document.querySelectorAll('.ingredient'));
        ingredients.forEach(ingredient => {
            ingredient.addEventListener('click', () => {
                this.taco.addIngredient(ingredient.id);
                this.updateGame();
            });
        });
    }

    // listen for the undo button to be clicked, once it is we will remove the 
    // last ingredient that was added to the taco
    addUndoListener() {
        const undo = document.querySelector("#undo-btn");
        undo.addEventListener('click', () => {
            this.taco.removeIngredient();
            this.updateGame();
        });
    }

    // add our timer to the html element and begin counting down
    startTimer() {
        const container = document.querySelector('.timer-container');
        const timer = document.createElement('div');
        timer.id = 'timer';
        timer.innerHTML = this.timer.time;
        container.appendChild(timer);
        this.timer.start();
    }

    // check how the total time the game has been running
    checkElapsedTime() {
        const timeElapsed = ( new Date - this.timeElapsed ) / 1000;
        return timeElapsed;
    }
    
    // display the user's score on the canvas
    renderScore() {
        const score = document.getElementById('score');
        score.innerHTML = `$${this.score}`;
    }

    // display, if any, all of the strikes a user has
    renderStrikes() {
        const strikes = document.getElementById('strikes');
        strikes.innerHTML = '';

        for (let i = 0; i < this.strikes; i++) {
            const strike = document.createElement('span');
            strike.innerHTML = 'X';
            strikes.appendChild(strike);
        }
    }

    // check to see if the user input matches the customer's order
    correctIngredients() {
        JSON.stringify(this.order.order) === JSON.stringify(this.taco.taco);
    }

    // check to see if the user lost the game, if not update their score/strikes 
    //  and start a new round
    updateGame() {
        if (this.gameOver()) {
            this.renderFinalScore();
            return;
        }

        if (this.timer.time > 0 && this.correctIngredients()) {
            this.score += this.timer.time;
            this.renderScore();
            this.clearRound();
            this.nextRound();
        } else if (this.timer.time < 1 && !this.correctIngredients()) {
            this.strikes ++
            this.renderStrikes();

            if (this.gameOver()) {
                this.renderFinalScore();
                this.timer.stop();
                return;
            }

            this.clearRound();
            this.nextRound();
        }
    }

    // Clear the current customer, order, and timer and stop them from being rendered
    clearRound() {
        this.taco.clearTaco();
        const customer = document.getElementsByClassName('bounceInRight')[0];
        customer.classList.remove('bounceInRight');
        customer.classList.add('speedOut');
        this.order.clearOrder();
        this.timer.stop();
        this.timer.remove(); 
    }

    // instantiate a new order, new taco and a new timer
    nextRound() {
        const duration = this.orderSize === 4 ? 7 : 9;
        this.order = new Order(this.orderSize, duration);
        this.taco = new Taco(this.orderSize, this.order);
        this.timer = new Timer(this.order.duration, this.updateGame);
        this.startTimer();
    }

    // wipe the game canvas clean and start a new game
    restart() {
        const strikes = document.getElementById('strikes');
        strikes.innerHTML = '';
        const score = document.getElementById('score');
        score.innerHTML = '';
        const timer = document.getElementById('timer');
        timer.innerHTML = '';

        this.timeElapsed = new Date();
        this.strikes = 0;
        this.score = 0;
        this.renderScore();
        this.order.clearOrder();
        this.taco.clearTaco();

        document.getElementById('modal').classList.add('hidden');
        this.nextRound();
    }

    // the game is over once a user reaches their 3rd strike
    gameOver() {
        return this.strikes > 2;
    }

    // once the game is over display a modal with the final score and a rank based
    // on their score
    renderFinalScore() {
        clearInterval(this.levelUp);
        const message = document.querySelector('.modal-message');
        const ranking = document.querySelector('.rank');
        const finalScore = `$${this.score}`;
        let rank;

        switch (true) {
            case finalScore >= 300:
                rank = 'GOAT'
                break;
            case finalScore >= 200:
                rank = 'Hall of Fame'
                break;
            case finalScore >= 100:
                rank = 'Superstar'
                break;
            case finalScore >= 0:
                rank = 'Rookie'
                break;
            
            // case finalScore === 0:
            //     const img = document.createElement('img');
            //     img.src = '../assets/'
            //     break;
        }

        message.innerHTML = `You made ${finalScore}!`;
        ranking.innerHTML = `Rank: ${rank}`;
        const modal = document.getElementById('modal');
        modal.classList.remove('hidden');
    }
}

export default Game;