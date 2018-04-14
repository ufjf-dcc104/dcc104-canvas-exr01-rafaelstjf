function Platform(x0, y0, w, h) {
    this.x = x0;
    this.y = y0;
    this.w = w;
    this.h = h;
}
Platform.prototype.draw = function (ctx, level) {
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "white";
    ctx.fillRect(this.x, this.y,(100/(100*level)* this.w) , this.h);
    ctx.strokeRect(this.x, this.y, (100/(100*level)* this.w), this.h);
}