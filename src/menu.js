// export const INGREDIENTS = {
//   // key: image url
//   avacado:
//     "/assets/ingredients/blk-avacado.PNG",
//   beans:
//     "/assets/ingredients/blk-beans.png",
//   cheese:
//     "/assets/ingredients/blk-cheese.png",
//   ham:
//     "/assets/ingredients/blk-ham.png",
//   onion:
//     "/assets/ingredients/blk-onion.png",
//   pepper:
//     "/assets/ingredients/blk-pepper.png",
//   steak:
//     "/assets/ingredients/blk-steak.png",
//   tomato:
//     "/assets/ingredients/blk-tomato.png",
//   rice:
//     "/assets/ingredients/blk-rice.PNG",
// };

export const INGREDIENTS = {
  // key: image url
  avacado:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/Ingredients/blk-avacado.PNG",
  beans:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/Ingredients/blk-beans.png",
  cheese:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/Ingredients/blk-cheese.png",
  ham:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/Ingredients/blk-ham.png",
  onion:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/Ingredients/blk-onion.png",
  pepper:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/Ingredients/blk-pepper.png",
  steak:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/Ingredients/blk-steak.png",
  tomato:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/Ingredients/blk-tomato.png",
  rice:
    "https://taco-tuesday.s3-us-west-1.amazonaws.com/Ingredients/blk-rice.PNG",
};

// export class Ingredient {
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

export class Menu {
  constructor() {
      // this.menu = [];
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
        const ingredient = this.createImage(key, INGREDIENTS[key]);
        // this.menu.push(ingredient);
        node.append(ingredient);
    });
  }

  createImage(key, imageURL) {
    const img = document.createElement("img");
    img.src = imageURL;
    img.alt = `${key}`;
    return img;
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