function Button(x, y, w) {
    this.x = x;
    this.y = y;
    this.w = w;

    this.show = function() {
        noStroke();
        rect(this.x, this.y, this.w, this.w);
    }

    this.clicked = function() {
        if (mouseX >  this.x        && mouseY >  this.y &&
            mouseX <= this.x+this.w && mouseY <= this.y+this.w) return true;
    }
}
