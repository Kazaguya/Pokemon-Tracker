function Cell(side, name, level) {
    this.spacer = 20;
    this.dim = 50;
    this.left = side;
    //maybe make these pictures instead of words
    this.lvlup  = new Button(80, 80, 80);

    this.show = function() {
        this.lvlup.show();
    }

    this.clicked = function() {
        if (this.lvlup.clicked()) {
            console.log('test');
        }
        if
    }
    // this.evolve = createButton('Evolve');
    // this.sprite = createImg('res/sprites/bulbasaur.png', 'sprite');
    // this.name   = createP(name);
    // this.level  = createP(level);

    // this.lvlup.size (this.dim, this.dim);
    // this.evolve.size(this.dim, this.dim);
    // this.name.width  = ceil(textWidth(name));
    // this.level.width = ceil(textWidth(level));
    //
    // this.lvlup.position (this.spacer                              , this.spacer);
    // this.evolve.position(this.spacer                              , this.lvlup.y+this.evolve.height);
    // this.sprite.position(this.lvlup.x+this.lvlup.width+this.spacer, this.spacer);
    // this.name.position  (this.sprite.x                            , this.sprite.y+this.name.height+this.spacer);
    // this.level.position (this.name.x                              , this.name.y+this.level.height);

    // this.align = function(a, b) {
    //     let mid1 = a.x+(dist(a.x, a.y, a.x+a.width, a.y)/2);
    //     let mid2 = b.x+(dist(b.x, b.y, b.x+b.width, b.y)/2);
    //     let temp = dist(mid1, a.y, mid2, a.y);
    //     strokeWeight(4);
    //     stroke(255, 0, 0);
    //     point(a.x, a.y);
    //     point(a.x+a.width, a.y);
    //     stroke(0, 255, 100);
    //     point(b.x, b.y);
    //     point(b.x+b.width, b.y);
    //     b.position(b.x+temp, b.y);
    // }

    // this.align(this.name,this.level);
}
