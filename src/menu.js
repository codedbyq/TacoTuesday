export const INGREDIENTS = {
  // key: image url
  avacado:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/blk-avacado.PNG",
  beans:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/blk-beans.png",
  cheese:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/blk-cheese.png",
  ham:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/blk-ham.png",
  onion:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/blk-onion.png",
  pepper:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/blk-pepper.png",
  steak:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/blk-steak.png",
  tomato:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/blk-tomato.png",
  rice:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/taco-tuesday/Ingredients/blk-rice.PNG",
};

export const Ingredient = (key, imageUrl) => {
    // constructor(key, imageURL) {
    //     this.key = key;
    //     this.imageURL = imageURL;
    // }

    // return an image sprite for the ingredient
    // render() {
    //     const img = document.createElement("img");
    //     img.src = this.imageURL;
    //     img.alt = `${this.key}`;
    //     return img;
    // }

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = `${key}`;
    return img
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

// export function Menu() {
//     this.menu = [];
//     this.generateMenu();
// }

// Menu.prototype.generateMenu = function() {
//     const nodeList = document.querySelectorAll('.ingredient');
//     const nodeArr = Array.from(nodeList);
//     nodeArr.forEach(node => {
//         const key = node.id;
//         console.log(key)
//         const ingredient = new Ingredient(key, INGREDIENTS[key]);
//         this.menu.push(ingredient);
//         node.append(ingredient.render());
//     });
// }

// Menu.prototype.deleteMenu = function() {
//     const menu = document.querySelector('.menu');
//     const menuImgs = document.getElementsByTagName('img');
//     menuImgs.forEach(img => img.remove());

//     document.querySelector('gameover').classList.add('hidden');
// }