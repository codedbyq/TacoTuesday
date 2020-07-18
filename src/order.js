export const OPTIONS = {
    'avacado': '../assets/ingredients/avacado.PNG',
    'beans': '../assets/ingredients/beans.png',
    'cheese': '../assets/ingredients/cheese.png',
    'ham': '../assets/ingredients/ham.png',
    'onion': '../assets/ingredients/onions.png',
    'pepper': '../assets/ingredients/pepper.png',
    'steak': '../assets/ingredients/steak.png',
    'tomato': '../assets/ingredients/tomato.png',
};

export const CUSTOMERS = {
    1: "../assets/characters/blue-customer.png",
    2: "../assets/characters/yellow-customer.png",
    3: "../assets/characters/purple-customer.png",
    4: "../assets/characters/pink-customer.png",
    5: "../assets/characters/green-customer.png",
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
        const numOptions = options.length;

        for (let i = 0; i < this.orderSize; i++) {
            const idx = Math.floor(Math.random() * numOptions);
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