export const OPTIONS = {
  // key: image url
  avacado:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/avacado.PNG",
  beans:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/beans.png",
  cheese:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/cheese.png",
  ham:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/ham.png",
  onion:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/onion.png",
  pepper:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/pepper.png",
  steak:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/steak.png",
  tomato:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/tomato.png",
  rice:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/rice.PNG",
};

export const CUSTOMERS = {
  0: "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Customers/blue-customer.png",
  1: "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Customers/yellow-customer.png",
  2: "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Customers/purple-customer.png",
  3: "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Customers/pink-customer.png",
  4: "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Customers/green-customer.png",
};

export class Order {
    constructor(orderSize, duration) {
        this.orderSize = orderSize;
        this.duration = duration;
        this.order = [];

        this.generateCustomer();
        this.generateSpeechBubble();
        this.generateOrder();
        this.renderOrder();
    }

    // given the order size, select ingredients at random to create a customer's
    // order
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


    generateSpeechBubble() {
        const container = document.querySelector(".speech-container");
        const speechBubble = document.createElement('div');

        speechBubble.classList.add('speech-bubble');
        speechBubble.classList.add('fadeIn');
        container.appendChild(speechBubble);
    }

    // attach an icon to the corresponding ingredient
    generateIngredient(key) {
        const img = document.createElement('img');
        img.src = OPTIONS[key];
        img.alt = `${key}`;
        return img;
    }

    // display the customer and the order on the canvas
    renderOrder() {
        const speechBubble = document.querySelector('.speech-bubble');
        const order = document.createElement('div');
        const topRow = document.createElement('div');
        const bottomRow = document.createElement('div');
        topRow.classList.add('order-row');
        bottomRow.classList.add('order-row');
        order.classList.add('order-container');
        order.classList.add('fadeIn');

        if (this.orderSize < 6) {
            topRow.id = 'order-row-small'
            bottomRow.id = 'order-row-small'
        } else {
            topRow.id = "order-row-large";
            bottomRow.id = "order-row-large";
        };

        for (let i = 0; i < (this.orderSize / 2); i++) {
            const orderIngredient = this.order[i];
            const ingredient = document.createElement('div');
            ingredient.classList.add('order-ingredient');
            ingredient.appendChild(this.generateIngredient(orderIngredient));
            topRow.appendChild(ingredient);
        }
        for (let i = this.orderSize / 2; i < this.orderSize; i++) {
            const orderIngredient = this.order[i];
            const ingredient = document.createElement('div');
            ingredient.classList.add('order-ingredient');
            ingredient.appendChild(this.generateIngredient(orderIngredient));
            bottomRow.appendChild(ingredient);
        }

        order.appendChild(topRow);
        order.appendChild(bottomRow);
        speechBubble.appendChild(order);
    }

    // remove the customer and speech bubble from the canvas
    clearOrder() {
        document.querySelector('.speech-container').innerHTML = '';
        document.querySelector('.customer-container').innerHTML = '';
    }
}