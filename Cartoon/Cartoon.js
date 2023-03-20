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

    //cloud 1
    ctx.beginPath();
    ctx.moveTo(15, 145);
    ctx.quadraticCurveTo(55, 70, 90, 130);
    ctx.quadraticCurveTo(110, 115, 130, 145);
    ctx.stroke();
    ctx.fill();
    //cloud 2
    ctx.beginPath();
    ctx.moveTo(140, 170);
    ctx.quadraticCurveTo(150, 130, 165, 150);
    ctx.quadraticCurveTo(195, 100, 225, 155);
    ctx.quadraticCurveTo(250, 130, 270, 170);
    ctx.stroke();
    ctx.fill();
    //cloud 3
    ctx.beginPath();
    ctx.moveTo(290, 160);
    ctx.quadraticCurveTo(320, 100, 375, 150);
    ctx.quadraticCurveTo(400, 130, 430, 160);
    ctx.stroke();
    ctx.fill();
    //cloud 4
    ctx.beginPath();
    ctx.moveTo(400, 190);
    ctx.quadraticCurveTo(420, 160, 450, 170);
    ctx.quadraticCurveTo(470, 100, 590, 190);
    ctx.stroke();
    ctx.fill();

    //ground
    ctx.beginPath();
    ctx.arc(250, 1100, 700, 0, Math.PI, true); // Mouth (clockwise)
    ctx.strokeStyle = "darkgreen";
    ctx.fillStyle ="darkslategrey";
    ctx.stroke();
    ctx.fill();

    //house
    ctx.beginPath();
    ctx.fillStyle = "brown";
    ctx.fillRect(150, 300, 200, 130);
    //roof
    ctx.beginPath();
    ctx.moveTo(150, 300);
    ctx.lineTo(250, 200);
    ctx.lineTo(350, 300);
    ctx.fillStyle = "black";
    ctx.fill();
    //grid
    ctx.beginPath();
    for (var x = 40; x <= canvas.width-40; x += 40) {
        ctx.moveTo(x, 400);
        // ctx.lineTo(x, 450);
        ctx.fillStyle = "lightgray";
        ctx.fillRect(x, 380, 20, 70);
    }
}
//call function after the document has been loaded
document.addEventListener(`DOMContentLoaded`, draw);