import { OPTIONS } from './order';

class Taco {
    constructor(orderSize, order) {
        this.orderSize = orderSize;
        this.order = order;
        this.taco = [];
        this.generateTaco();
    }

    generateTaco() {
        const container = document.querySelector('.taco-container');
        const taco = document.createElement('div');
        taco.id = 'taco';

        if (this.orderSize < 6) {
            taco.classList.add('taco-small');
        } else {
            taco.classList.add('taco-large');
        };

        for (let i = 1; i <= this.orderSize; i++) {
            const tacoIngredient = document.createElement('div');
            tacoIngredient.classList.add('taco-ingredient');
            tacoIngredient.classList.add(`${i}`);
            taco.appendChild(tacoIngredient);
        }

        container.appendChild(taco);
    }

    // reset the taco back to an empty container
    clearTaco() {
        document.querySelector('.taco-container').innerHTML = '';
    }

    // add a given ingredient to the taco
    addIngredient(ingredient) {
        this.taco.push(ingredient);
        this.render();
    }

    // when the undo buttom is triggered remove the last ingredient on the taco
    removeIngredient() {
        this.taco.pop();
        this.render();
    }

    // iterate through the taco and attach the proper image to the corresponding
    // ingredient
    render() {
        for (i = 1; i <= this.orderSize; i++) {
            const tacoItem = document.getElementsByClassName(`taco-item ${i}`)[0];
            tacoItem.innerHTML = '';
            const item = this.bento[i - 1];

            if (!item) break;
            const img = document.createElement('img');
            img.src = OPTIONS[item];
            img.alt = `${item}`;
            tacoItem.appendChild(img);
        }
    }
}

export default Taco