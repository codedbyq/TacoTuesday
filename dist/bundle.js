/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/taco_tuesday.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order */ "./src/order.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ "./src/timer.js");
/* harmony import */ var _taco__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taco */ "./src/taco.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    // class instances
    this.menu = new _menu__WEBPACK_IMPORTED_MODULE_1__["Menu"]();
    this.orderSize = this.generateOrderSize();
    var duration = this.orderSize === 4 ? 5 : 5;
    this.order = new _order__WEBPACK_IMPORTED_MODULE_0__["Order"](this.orderSize, duration);
    this.taco = new _taco__WEBPACK_IMPORTED_MODULE_3__["default"](this.orderSize, this.order);
    this.generateBackground(); // game score

    this.updateGame = this.updateGame.bind(this);
    this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__["default"](this.order.duration, this.updateGame);
    this.score = 0;
    this.strikes = 0;
    this.timeElapsed = new Date();
    this.levelUp = null; // binded functions

    this.play = this.play.bind(this);
    this.addMenuListener = this.addMenuListener.bind(this);
    this.addUndoListener = this.addUndoListener.bind(this);
    this.checkElapsedTime = this.checkElapsedTime.bind(this);
  }

  _createClass(Game, [{
    key: "generateBackground",
    value: function generateBackground() {
      var background = document.querySelector('.game-content');
      var date = new Date();
      var hours = date.getHours();

      if (hours > 5 && hours <= 16) {
        background.id = 'day';
      } else if (hours > 16 && hours <= 20) {
        background.id = 'evening';
      } else {
        background.id = 'night';
      }
    } // randomly choose the customers order size

  }, {
    key: "generateOrderSize",
    value: function generateOrderSize() {
      var size = [4, 6];
      var idx = Math.floor(Math.random() * 2);
      return size[idx];
    } // start the game

  }, {
    key: "play",
    value: function play() {
      this.addMenuListener();
      this.addUndoListener();
      this.startTimer();
      this.renderScore();
    } // listen for one of the ingredients to be clicked, when one of them is
    // then add the clicked ingredient to the taco

  }, {
    key: "addMenuListener",
    value: function addMenuListener() {
      var _this = this;

      var ingredients = Array.from(document.querySelectorAll('.ingredient'));
      ingredients.forEach(function (ingredient) {
        ingredient.addEventListener('click', function () {
          _this.taco.addIngredient(ingredient.id);

          _this.updateGame();
        });
      });
    } // listen for the undo button to be clicked, once it is we will remove the 
    // last ingredient that was added to the taco

  }, {
    key: "addUndoListener",
    value: function addUndoListener() {
      var _this2 = this;

      var undo = document.querySelector("#undo-btn");
      undo.addEventListener('click', function () {
        _this2.taco.removeIngredient();

        _this2.updateGame();
      });
    } // add our timer to the html element and begin counting down

  }, {
    key: "startTimer",
    value: function startTimer() {
      var container = document.querySelector('.timer-container');
      var timer = document.createElement('div');
      timer.id = 'timer';
      timer.innerHTML = this.timer.time;
      container.appendChild(timer);
      this.timer.start();
    } // check how the total time the game has been running

  }, {
    key: "checkElapsedTime",
    value: function checkElapsedTime() {
      var timeElapsed = (new Date() - this.timeElapsed) / 1000;
      return timeElapsed;
    } // display the user's score on the canvas

  }, {
    key: "renderScore",
    value: function renderScore() {
      var score = document.getElementById('score');
      score.innerHTML = "$".concat(this.score);
    } // display, if any, all of the strikes a user has

  }, {
    key: "renderStrikes",
    value: function renderStrikes() {
      var strikes = document.getElementById('strikes');
      strikes.innerHTML = '';

      for (var i = 0; i < this.strikes; i++) {
        var strike = document.createElement('span');
        strike.innerHTML = 'X';
        strikes.appendChild(strike);
      }
    } // check to see if the user input matches the customer's order

  }, {
    key: "correctIngredients",
    value: function correctIngredients() {
      return JSON.stringify(this.order.order) === JSON.stringify(this.taco.taco);
    } // check to see if the user lost the game, if not update their score/strikes 
    //  and start a new round

  }, {
    key: "updateGame",
    value: function updateGame() {
      if (this.gameOver()) {
        this.renderFinalScore();
        return;
      }

      if (this.timer.time > 0 && this.correctIngredients()) {
        this.score += this.timer.time;
        this.renderScore();
        this.clearRound();
        this.nextRound();
      } else if (this.timer.time === 0 && !this.correctIngredients()) {
        this.strikes++;
        this.renderStrikes();

        if (this.gameOver()) {
          this.renderFinalScore();
          this.timer.stop();
          return;
        }

        this.clearRound();
        this.nextRound();
      }
    } // Clear the current customer, order, and timer and stop them from being rendered

  }, {
    key: "clearRound",
    value: function clearRound() {
      this.taco.clearTaco();
      var customer = document.getElementsByClassName('bounceInRight')[0];
      customer.classList.remove('bounceInRight');
      customer.classList.add('speedOut');
      this.order.clearOrder();
      this.timer.stop();
      this.timer.remove();
    } // instantiate a new order, new taco and a new timer

  }, {
    key: "nextRound",
    value: function nextRound() {
      var duration = this.orderSize === 4 ? 7 : 9;
      this.order = new _order__WEBPACK_IMPORTED_MODULE_0__["Order"](this.orderSize, duration);
      this.taco = new _taco__WEBPACK_IMPORTED_MODULE_3__["default"](this.orderSize, this.order);
      this.timer = new _timer__WEBPACK_IMPORTED_MODULE_2__["default"](this.order.duration, this.updateGame);
      this.startTimer();
    } // wipe the game canvas clean and start a new game

  }, {
    key: "restart",
    value: function restart() {
      var strikes = document.getElementById('strikes');
      strikes.innerHTML = '';
      var score = document.getElementById('score');
      score.innerHTML = '';
      var timer = document.getElementById('timer');
      timer.innerHTML = '';
      this.timeElapsed = new Date();
      this.strikes = 0;
      this.score = 0;
      this.renderScore();
      this.order.clearOrder();
      this.taco.clearTaco();
      this.timer.remove();
      document.getElementById('gameover').classList.add('hidden');
      this.nextRound();
    } // the game is over once a user reaches their 3rd strike

  }, {
    key: "gameOver",
    value: function gameOver() {
      return this.strikes > 2;
    } // once the game is over display a modal with the final score and a rank based
    // on their score

  }, {
    key: "renderFinalScore",
    value: function renderFinalScore() {
      clearInterval(this.levelUp);
      var finalScore = document.querySelector('.final-score');
      var img = document.querySelector(".gameover-bron");
      var rank = document.querySelector('.rank');
      img.src = "https://taco-tuesday.s3-us-west-1.amazonaws.com/Bron/bron-head.png";

      if (this.score >= 300) {
        rank.innerText = 'GOAT';
      } else if (this.score >= 200) {
        rank.innerText = 'Hall of Fame';
      } else if (this.score >= 100) {
        rank.innerText = 'Superstar';
      } else if (this.score >= 50) {
        rank.innerText = 'All-Star';
      } else if (this.score > 0) {
        rank.innerText = 'Rookie';
      } else if (this.score === 0) {
        rank.innerText = 'JR';
        img.src = "https://taco-tuesday.s3-us-west-1.amazonaws.com/Bron/game-over-bron.png";
      }

      finalScore.innerHTML = "You made $".concat(this.score, "!");
      var gameover = document.getElementById('gameover');
      gameover.classList.remove('hidden');
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: INGREDIENTS, Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INGREDIENTS", function() { return INGREDIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var INGREDIENTS = {
  // key: image url
  avacado: "/assets/ingredients/blk-avacado.PNG",
  beans: "/assets/ingredients/blk-beans.png",
  cheese: "/assets/ingredients/blk-cheese.png",
  ham: "/assets/ingredients/blk-ham.png",
  onion: "/assets/ingredients/blk-onion.png",
  pepper: "/assets/ingredients/blk-pepper.png",
  steak: "/assets/ingredients/blk-steak.png",
  tomato: "/assets/ingredients/blk-tomato.png",
  rice: "/assets/ingredients/blk-rice.PNG"
}; // export class Ingredient {
//     constructor(key, imageURL) {
//         this.key = key;
//         this.imageURL = imageURL;
//     }
//     // return an image sprite for the ingredient
//     createImage() {
//         const img = document.createElement("img");
//         img.src = this.imageURL;
//         img.alt = `${this.key}`;
//         return img;
//     }
// }

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    // this.menu = [];
    this.generateMenu();
  } // collect a list of node elements with the class .ingredient, then create a
  // new Ingredient instance for each node and add it that to the menu array.
  // Finally, append the ingredient image to it's corresponding element 


  _createClass(Menu, [{
    key: "generateMenu",
    value: function generateMenu() {
      var _this = this;

      var nodeList = document.querySelectorAll('.ingredient');
      var nodeArr = Array.from(nodeList);
      nodeArr.forEach(function (node) {
        var key = node.id;

        var ingredient = _this.createImage(key, INGREDIENTS[key]); // this.menu.push(ingredient);


        node.append(ingredient);
      });
    }
  }, {
    key: "createImage",
    value: function createImage(key, imageURL) {
      var img = document.createElement("img");
      img.src = imageURL;
      img.alt = "".concat(key);
      return img;
    } // clear all the image tags attached to the menu so it can be randomized for 
    // the next game

  }, {
    key: "deleteMenu",
    value: function deleteMenu() {
      var menu = document.querySelector('.menu');
      var menuImgs = document.getElementsByTagName('img');
      menuImgs.forEach(function (img) {
        return img.remove();
      });
      document.querySelector('gameover').classList.add('hidden');
    }
  }]);

  return Menu;
}();

/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/*! exports provided: OPTIONS, CUSTOMERS, Order */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPTIONS", function() { return OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOMERS", function() { return CUSTOMERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OPTIONS = {
  // key: image url
  avacado: "../assets/ingredients/avacado.PNG",
  beans: "../assets/ingredients/beans.png",
  cheese: "../assets/ingredients/cheese.png",
  ham: "../assets/ingredients/ham.png",
  onion: "../assets/ingredients/onions.png",
  pepper: "../assets/ingredients/pepper.png",
  steak: "../assets/ingredients/steak.png",
  tomato: "../assets/ingredients/tomato.png",
  rice: "../assets/ingredients/rice.PNG"
};
var CUSTOMERS = {
  // key: image url
  0: "../assets/characters/blue-customer.png",
  1: "../assets/characters/green-customer.png",
  2: "../assets/characters/pink-customer.png",
  3: "../assets/characters/purple-customer.png",
  4: "../assets/characters/yellow-customer.png"
};
var Order = /*#__PURE__*/function () {
  function Order(orderSize, duration) {
    _classCallCheck(this, Order);

    this.orderSize = orderSize;
    this.duration = duration;
    this.order = [];
    this.generateCustomer();
    this.generateSpeechBubble();
    this.generateOrder();
    this.renderOrder();
  } // given the order size, select ingredients at random to create a customer's
  // order


  _createClass(Order, [{
    key: "generateOrder",
    value: function generateOrder() {
      var options = Object.keys(OPTIONS);

      for (var i = 0; i < this.orderSize; i++) {
        var idx = Math.floor(Math.random() * options.length);
        var random = options[idx];
        this.order.push(random);
      }
    } // generate a random customer

  }, {
    key: "generateCustomer",
    value: function generateCustomer() {
      var idx = Math.floor(Math.random() * 5);
      var img = document.createElement('img');
      img.src = CUSTOMERS[idx];
      img.id = 'customer';
      img.alt = "customer".concat(idx);
      img.classList.add('bounceInRight');
      var container = document.querySelector('.customer-container');
      container.appendChild(img);
    }
  }, {
    key: "generateSpeechBubble",
    value: function generateSpeechBubble() {
      var container = document.querySelector(".speech-container");
      var speechBubble = document.createElement('div');
      speechBubble.classList.add('speech-bubble');
      speechBubble.classList.add('fadeIn');
      container.appendChild(speechBubble);
    } // attach an icon to the corresponding ingredient

  }, {
    key: "generateIngredient",
    value: function generateIngredient(key) {
      var img = document.createElement('img');
      img.src = OPTIONS[key];
      img.alt = "".concat(key);
      return img;
    } // display the customer and the order on the canvas

  }, {
    key: "renderOrder",
    value: function renderOrder() {
      var speechBubble = document.querySelector('.speech-bubble');
      var order = document.createElement('div');
      var topRow = document.createElement('div');
      var bottomRow = document.createElement('div');
      topRow.classList.add('order-row');
      bottomRow.classList.add('order-row');
      order.classList.add('order-container');
      order.classList.add('fadeIn');

      if (this.orderSize < 6) {
        topRow.id = 'order-row-small';
        bottomRow.id = 'order-row-small';
      } else {
        topRow.id = "order-row-large";
        bottomRow.id = "order-row-large";
      }

      ;

      for (var i = 0; i < this.orderSize / 2; i++) {
        var orderIngredient = this.order[i];
        var ingredient = document.createElement('div');
        ingredient.classList.add('order-ingredient');
        ingredient.appendChild(this.generateIngredient(orderIngredient));
        topRow.appendChild(ingredient);
      }

      for (var _i = this.orderSize / 2; _i < this.orderSize; _i++) {
        var _orderIngredient = this.order[_i];

        var _ingredient = document.createElement('div');

        _ingredient.classList.add('order-ingredient');

        _ingredient.appendChild(this.generateIngredient(_orderIngredient));

        bottomRow.appendChild(_ingredient);
      }

      order.appendChild(topRow);
      order.appendChild(bottomRow);
      speechBubble.appendChild(order);
    } // remove the customer and speech bubble from the canvas

  }, {
    key: "clearOrder",
    value: function clearOrder() {
      document.querySelector('.speech-container').innerHTML = '';
      document.querySelector('.customer-container').innerHTML = '';
    }
  }]);

  return Order;
}();

/***/ }),

/***/ "./src/taco.js":
/*!*********************!*\
  !*** ./src/taco.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order */ "./src/order.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Taco = /*#__PURE__*/function () {
  function Taco(orderSize, order) {
    _classCallCheck(this, Taco);

    this.orderSize = orderSize;
    this.order = order;
    this.taco = [];
    this.generateTaco();
  } // fill a container with 2 rows that will hold the number of ingredients based
  // on the order size, the images will be added later


  _createClass(Taco, [{
    key: "generateTaco",
    value: function generateTaco() {
      var container = document.querySelector('.taco-container');
      var topRow = document.createElement('div');
      var bottomRow = document.createElement('div');
      bottomRow.classList.add('taco-row');
      topRow.classList.add('taco-row');

      if (this.orderSize < 6) {
        topRow.id = 'taco-row-small';
        bottomRow.id = 'taco-row-small';
      } else {
        topRow.id = "taco-row-large";
        bottomRow.id = "taco-row-large";
      }

      ;

      for (var i = 0; i < this.orderSize / 2; i++) {
        var tacoIngredient = document.createElement("div");
        tacoIngredient.classList.add("taco-ingredient");
        tacoIngredient.classList.add("".concat(i));
        topRow.appendChild(tacoIngredient);
      }

      for (var _i = this.orderSize / 2; _i < this.orderSize; _i++) {
        var _tacoIngredient = document.createElement("div");

        _tacoIngredient.classList.add("taco-ingredient");

        _tacoIngredient.classList.add("".concat(_i));

        bottomRow.appendChild(_tacoIngredient);
      }

      container.appendChild(topRow);
      container.appendChild(bottomRow);
    } // reset the taco back to an empty container

  }, {
    key: "clearTaco",
    value: function clearTaco() {
      document.querySelector('.taco-container').innerHTML = '';
    } // add a given ingredient to the taco

  }, {
    key: "addIngredient",
    value: function addIngredient(ingredient) {
      this.taco.push(ingredient);
      this.render();
    } // when the undo buttom is triggered remove the last ingredient on the taco

  }, {
    key: "removeIngredient",
    value: function removeIngredient() {
      this.taco.pop();
      this.render();
    } // iterate through the taco and attach the proper image to the corresponding
    // ingredient

  }, {
    key: "render",
    value: function render() {
      for (var i = 0; i < this.orderSize; i++) {
        var tacoIngredient = document.getElementsByClassName("taco-ingredient ".concat(i))[0];
        tacoIngredient.innerHTML = '';
        var ingredient = this.taco[i];
        if (!ingredient) break;
        var img = document.createElement('img');
        img.src = _order__WEBPACK_IMPORTED_MODULE_0__["OPTIONS"][ingredient];
        img.alt = "".concat(ingredient);
        tacoIngredient.appendChild(img);
      }
    }
  }]);

  return Taco;
}();

/* harmony default export */ __webpack_exports__["default"] = (Taco);

/***/ }),

/***/ "./src/taco_tuesday.js":
/*!*****************************!*\
  !*** ./src/taco_tuesday.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");

console.log('webpack is running');
document.addEventListener('DOMContentLoaded', function () {
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var start = document.querySelector('.start-btn');
  var restart = document.querySelector('.restart-btn');
  var volumeList = document.querySelectorAll('.volume-btn');
  var volumeArr = Array.from(volumeList);
  volumeArr.forEach(function (volume) {
    return volume.addEventListener('click', function () {
      var sounds = document.getElementsByTagName('audio');
      var soundsArr = Array.from(sounds);
      volume.classList.toggle('mute');
      soundsArr.forEach(function (sound) {
        if (sound.volume > 0) {
          sound.pause();
          sound.volume = 0;
        } else {
          sound.volume = 0;
          sound.play();
        }
      });
    });
  }); // once the start button is clicked hide the div and begin the game

  start.addEventListener('click', function () {
    var bgmusic = document.getElementById('salsa');
    bgmusic.volume = 0.3;
    bgmusic.play();
    var audio = document.getElementById('bron-sound');
    audio.volume = 0.3;
    audio.play();
    var intro = document.getElementById('intro');
    intro.classList.add('hidden');
    game.play();
  }); // once the start button is clicked hide the div and begin the game

  restart.addEventListener('click', function () {
    var audio = document.getElementById("bron-sound");
    audio.play();
    game.restart();
  });
});

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Timer = /*#__PURE__*/function () {
  function Timer(duration, callback) {
    _classCallCheck(this, Timer);

    this.duration = duration;
    this.callback = callback;
    this.interval = null;
    this.time = this.duration;
    this.tick = this.tick.bind(this);
  } // decrement time remaining by 1 sec, if time reaches 0 then trigger the 
  // given callback. Otherwise, render remaining time in the game


  _createClass(Timer, [{
    key: "tick",
    value: function tick() {
      this.time--;

      if (this.time < 1) {
        this.time = 0;
        this.stop();
        this.callback();
      }

      var timer = document.getElementById('timer');
      timer.innerHTML = this.time;
    } // starts the timer and calls the tick function asynchronously every 1 second

  }, {
    key: "start",
    value: function start() {
      if (this.interval) clearInterval(this.interval);
      this.time = this.duration;
      this.interval = setInterval(this.tick, 1000);
    } // stop the current timer

  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
    } // stop the timer from rendering in the game

  }, {
    key: "remove",
    value: function remove() {
      var timer = document.getElementById('timer');
      timer.remove();
    }
  }]);

  return Timer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map