export const INGREDIENTS = {
    // key: image url
    'avacado': '../assets/ingredients/blk-avacado.PNG',
    'beans': '../assets/ingredients/blk-beans.png',
    'cheese': '../assets/ingredients/blk-cheese.png',
    'ham': '../assets/ingredients/blk-ham.png',
    'onion': '../assets/ingredients/blk-onion.png',
    'pepper': '../assets/ingredients/blk-pepper.png',
    'steak': '../assets/ingredients/blk-steak.png',
    'tomato': '../assets/ingredients/blk-tomato.png',
    'rice': '../assets/ingredients/blk-tomato.png',
};

export class Ingredient {
    constructor(key, imageURL) {
        this.key = key;
        this.imageURL = imageURL;
    }

    // return an image sprite for the ingredient
    render() {
        const img = document.createElement("img");
        img.src = this.imageURL;
        img.alt = `${this.key}`;
        return img;
    }
}

export class Menu {
    constructor() {
        this.menu = [];
        this.generateMenu();
    }

    // collect a list of node elements with the class .ingredient, then create a
    // new Ingredient instance for each node and add it that to the menu array.
    // Finally, append the ingredient image to it's corresponding element 
    generateMenu() {
        const nodeList = document.querySelectorAll('.ingredient');
        const nodeArr = Array.from(nodeList);
        nodeArr.forEach( node => {
            const key = node.id;
            console.log(key)
            const ingredient = new Ingredient(key, INGREDIENTS[key]);
            this.menu.push(ingredient);
            node.append(ingredient.render());
        });
    }

    // clear all the image tags attached to the menu so it can be randomized for 
    // the next game
    deleteMenu() {
        const menu = document.querySelector('.menu');
        const menuImgs = document.getElementsByTagName('img');
        menuImgs.forEach(img => img.remove());

        document.querySelector('gameover').classList.add('hidden');
    }
}