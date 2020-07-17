export const OPTIONS = {
    'avacado': '../assets/ingredients/avacado.PNG',
    'beans': '../assets/ingredients/beans.png',
    'cheese': '../assets/ingredients/cheese.png',
    'ham': '../assets/ingredients/ham.png',
    'onion': '../assets/ingredients/onion.png',
    'pepper': '../assets/ingredients/pepper.png',
    'steak': '../assets/ingredients/steak.png',
    'tomato': '../assets/ingredients/tomato.png',
};

export const CUSTOMERS = {
    1: '../assets/characters/blue-spritesheet.png',
    2: '../assets/characters/purple-spritesheet.png',
    3: '../assets/characters/white-spritesheet.png',
    4: '../assets/characters/yellow-spritesheet.png'
}

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

        for (let i = 1; i <= this.numItems; i++) {
            const idx = Math.floor(Math.random() * 5);
            const random = options[idx];
            this.order.push(random);
        }
    }

    // generate a random customer
    generateCustomer() {
        const idx = Math.floor(Math.random() * 5);
        const img = document.createElement('img');
        img.src = CUSTOMERS[idx];
        img.alt = 'customer';
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
        img.scr = OPTIONS[key];
        img.alt = `${key}`;
        return img;
    }

    // display the customer and the order on the canvas
    renderOrder() {
        const order = document.createElement('div');
        order.classList.add('order-container');
        order.classList.add(`box-${this.orderSize}`);
        order.classList.add('fadeIn');

        this.order.forEach(item => {
            const ingredient = document.createElement('div');
            ingredient.classList.add('order-ingredient');
            ingredient.appendChild(this.generateIngredient(ingredient));
            order.appendChild(ingredient);
        });
        const speechContainer = document.querySelector('.speech-container');
        speechContainer.appendChild(order);
    }

    // remove the customer and speech bubble from the canvas
    clearOrder() {
        document.querySelector('.speech-container').innerHTML = '';
        document.querySelector('.customer-container').innerHTML = '';
    }
}