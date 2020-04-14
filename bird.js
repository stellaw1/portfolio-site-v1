const cvs = document.getElementById("myCanvas");
const ctx = cvs.getContext("2d");

//instantite images
var bird = new Image();
var bg = new Image();

bird.src = "images/flappybird/bird.png";
bg.src = "images/flappybird/bg.png";

//Define variables
var x = 10;
var y = 150;
var gravity = 1.5;

function draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.clientWidth, cvs.height);
    
    ctx.drawImage(bg, 0, 0, 320, 400, 0, 0, 320, 400);
    ctx.drawImage(bird, 0, 0, 38, 26, x, y, 38, 26);
}

function loop() {
    //update();
    draw();
    requestAnimationFrame(loop);
}

loop();
