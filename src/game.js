import { Menu, INGREDIENTS } from './menu';
import { Order, } from './order';
import Timer from './timer';
import Taco from './taco';

class Game {
    constructor() {
        // class instances
        this.menu = new Menu();
        this.orderSize = generateOrderSize();
        const duration = this.orderSize === 4 ? 7 : 8; 
        this.order = new Order(this.orderSize, duration);
        this.taco = new Taco(this.orderSize, this.order);

        // game score
        this.checkState = this.checkState.bind(this);
        this.timer = new Timer(this.order.duration, this.checkState);
        this.score = 0;
        this.strikes = 0;
        this.timeElapsed = new Date();
        this.levelUpInterval = null;

        this.play = this.play.bind(this);
        this.addMenuListener = this.addMenuListener.bind(this);
        this.addUndoListener = this.addUndoListener.bind(this);
        this.checkElapsedTime = this.checkElapsedTime.bind(this);
        this.gameAlert = this.gameAlert.bind(this);
        this.tapItem = this.tapItem.bind(this);
    }

    play() {
        this.addMenuListener();
        this.addUndoListener();
        this.startTimer();
        this.gameAlert();
    }

    addListener
}