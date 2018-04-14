function HUD() {
    this.x = 0;
    this.y = 0;
}

HUD.prototype.draw = function (ctx, speed, fuel, score, lifes ) {
    ctx.font = "29px Arial";
    ctx.fillStyle = "white";
    var speedStatus;
    if (Math.abs(speed) > maxSpeed)
        speedStatus = "Too fast!";
    if (Math.abs(speed) < 1.5 * maxSpeed && Math.abs(speed) > maxSpeed / 2)
        speedStatus = "good!";
    if (Math.abs(speed) < maxSpeed / 2)
        speedStatus = "Too slow!";
    ctx.fillText("Speed: " + speedStatus, 0, 30);
    ctx.fillText("Fuel: ", 250, 30);
    ctx.fillText("Score: " + score, 550, 30);
    ctx.fillText("High Score: " + highScore, 750, 30);
    ctx.fillText("Lifes: " + lifes, 430, 30);
    ctx.strokeStyle = "black";
    if (fuel > 70)
        ctx.fillStyle = "green";
    if (fuel > 30 && fuel < 70)
        ctx.fillStyle = "yellow";
    if (fuel < 30)
        ctx.fillStyle = "red";
    ctx.fillRect(320, 5, fuel, 30);
    ctx.strokeRect(320, 5, 100 , 30);

}

HUD.prototype.drawMenu = function(ctx, w, h, highScore){
    ctx.font = "40px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Landing Game",10+w/2, h/2);
    ctx.font = "29px Arial";
    ctx.fillText("High Score: " + highScore, 750, 30);

    ctx.font = "30px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Press SPACE to play",w/2, 60+h/2);


}