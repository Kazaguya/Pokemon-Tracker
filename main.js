let box1, box2, w1, w2;
let mid1, mid2;
let cell;
let img;

function preload() {
    img = loadImage('res/sprites/bulbasaur.png');
}

function setup() {
    createCanvas(500,500);
    cell = new Cell(true, "Bulbasaur", "lv.99");
}

function mouseClicked() {
    cell.clicked();
}

function draw() {
    background(0);
    cell.show();
    image(img, 10, 10);
}
