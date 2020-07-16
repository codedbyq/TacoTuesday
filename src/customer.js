class Customer {
    constructor(id, imageURL) {
        this.id = id;
        this.img = new Image();
        this.img.src = imageURL;
        this.img.onload = this.init;

        this.canvas = document.querySelector('.canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    init() {
        
    }
}