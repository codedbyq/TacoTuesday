# Taco Tuesday

Food themed matching game inspired by Lebron James' love for tacos and another JavaScript game called BentoUp, where the user has to match the ingredients of a customer's order.

<img src="https://taco-tuesday.s3-us-west-1.amazonaws.com/readme/Screen+Shot+2020-08-08+at+12.19.59+PM.png" width="750.33" height="415.33" />

## Technologies 
* JavaScript (ES6)
* HTML5
* CSS3
* Webpack
* AWS S3

## Gameplay
* Each round a customer will appear with a randomized order. 
* Within the alloted time you as the player must match their order ingredients as they are shown in their speech bubble. 

```javascript
// given the order size, select ingredients at random to create a customer's order
generateOrder() {
    const options = Object.keys(OPTIONS);
    for (let i = 0; i < this.orderSize; i++) {
        const idx = Math.floor(Math.random() * options.length);
        const random = options[idx];
        this.order.push(random);
    }
}

// generate a random customer
generateCustomer() {
    const idx = Math.floor(Math.random() * 5);
    const img = document.createElement('img');
    img.src = CUSTOMERS[idx];
    img.id = 'customer'
    img.alt = `customer${idx}`;
    img.classList.add('bounceInRight');
    const container = document.querySelector('.customer-container');
    container.appendChild(img);
}
```

<img src="https://taco-tuesday.s3-us-west-1.amazonaws.com/readme/IMG_1346.JPG" width="562.75" height="311.5" />

* The game score is calculated as tips. 
  * Tip are scored if the user matches the customer's order within the given time, the remaining seconds as tips. 
* The game lasts until the player receives 3 strikes.
  * A strike is earned when the player gets a customer's order wrong, or runs out of time for a single order.
  
<img src="https://taco-tuesday.s3-us-west-1.amazonaws.com/readme/IMG_1346+6.JPG" width="562.75" height="311.5" />
  
## Features
* Depending on the time of the day, the background of the game will change to reflect the users current time!

```javascript
generateBackground() {
    const background = document.querySelector('.game-content');
    const date = new Date();
    const hours = date.getHours();

    if (hours > 5 && hours <= 16) {
        background.id = 'day';
    } else if (hours > 16 && hours <= 20) {
        background.id = 'evening';
    } else {
        background.id = 'night';
    }
}
 ```

## Future Updates
* More sound effects
* Instructions before the game begins
* Animated customers that walk up to the food truck
