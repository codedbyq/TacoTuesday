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

export class Menu {
  constructor() {
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
        node.append(ingredient);
    });
  }

  // Return an image html element with the given image url 
  createImage(key, imageURL) {
    const img = document.createElement("img");
    img.src = imageURL;
    img.alt = `${key}`;
    return img;
  }
}