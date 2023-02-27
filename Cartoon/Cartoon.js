function draw() {
    //find canvas specified in Cartoon.html
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //canvas background
    ctx.fillStyle = "midnightblue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //text on canvas
    ctx.font="15px Cursive";
    ctx.fillStyle = "yellow";
    ctx.textAlign = "center";
    ctx.fillText("this is a cartoon", canvas.width/2, 30);
    //moon
    ctx.beginPath();
    ctx.arc(400,90,40,0,2*Math.PI);
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 2;
    ctx.fillStyle = "lemonchiffon";
    ctx.stroke();
    ctx.fill();
    //moon holes
    ctx.beginPath();
    ctx.arc(419,70,7,0,1.5*Math.PI);
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 1;
    ctx.fillStyle = "beige";
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(385,50,13,0,-1.3*Math.PI);
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 1;
    ctx.fillStyle = "beige";
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(385,90,15,0,2*Math.PI);
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 1;
    ctx.fillStyle = "beige";
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(427,100,10,0,2*Math.PI);
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 1;
    ctx.fillStyle = "beige";
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(400,120,9,0,1.8*Math.PI);
    ctx.strokeStyle = "lightgray";
    ctx.lineWidth = 1;
    ctx.fillStyle = "beige";
    ctx.stroke();
    ctx.fill();
    //speech bubble
    // ctx.moveTo(75, 25);
    // ctx.quadraticCurveTo(25, 25, 25, 62.5);
    // ctx.quadraticCurveTo(25, 100, 50, 100);
    // ctx.quadraticCurveTo(50, 120, 30, 125);
    // ctx.quadraticCurveTo(60, 120, 65, 100);
    // ctx.quadraticCurveTo(125, 100, 125, 62.5);
    // ctx.quadraticCurveTo(125, 25, 75, 25);
    // ctx.stroke();
}
//call function after the document has been loaded
document.addEventListener(`DOMContentLoaded`, draw);