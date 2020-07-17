import { OPTIONS } from './order';

class Taco {
    constructor(orderSize, order) {
        this.orderSize = orderSize;
        this.order = order;
        this.taco = [];
        this.generateTaco();
    }

    // fill a container with 2 rows that will hold the number of ingredients based
    // on the order size, the images will be added later
    generateTaco() {
        const container = document.querySelector('.taco-container');
        const topRow = document.createElement('div');
        const bottomRow = document.createElement('div');
        bottomRow.classList.add('taco-row');
        topRow.classList.add('taco-row');

        if (this.orderSize < 6) {
            topRow.id = 'taco-row-small'
            bottomRow.id = 'taco-row-small'
        } else {
            topRow.id = "taco-row-large";
            bottomRow.id = "taco-row-large";
        };

        for (let i = 0; i < (this.orderSize / 2); i++) {
          const tacoIngredient = document.createElement("div");
          tacoIngredient.classList.add("taco-ingredient");
          tacoIngredient.classList.add(`${i}`);
          topRow.appendChild(tacoIngredient);
        }
        for (let i = this.orderSize / 2; i < this.orderSize; i++) {
          const tacoIngredient = document.createElement("div");
          tacoIngredient.classList.add("taco-ingredient");
          tacoIngredient.classList.add(`${i}`);
          bottomRow.appendChild(tacoIngredient);
        }
        

        container.appendChild(topRow);
        container.appendChild(bottomRow);
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
        for (let i = 0; i < this.orderSize; i++) {
            const tacoIngredient = document.getElementsByClassName(`taco-ingredient ${i}`)[0];
            tacoIngredient.innerHTML = '';
            const ingredient = this.taco[i];

            if (!ingredient) break;
            const img = document.createElement('img');
            img.src = OPTIONS[ingredient];
            img.alt = `${ingredient}`;
            tacoIngredient.appendChild(img);
        }
    }
}

export default Taco