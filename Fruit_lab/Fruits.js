var fruit = [
    { name: "Apple", quantity: 20, color: "red" },
    { name: "Orange", quantity: 10, color: "orange" },
    { name: "Banana", quantity: 15, color: "yellow" },
    { name: "Kiwi", quantity: 5, color: "green" },
    { name: "Blueberry", quantity: 5, color: "blue" },
    { name: "Grapes", quantity: 10, color: "purple" }
];

function draw() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    //size of each fruit bar
    var section = Math.floor(canvas.height/fruit.length);
    //position
    var ypos = 0;

    for (let i=0; i<fruit.length; i++) {
        ctx.beginPath();
        //bar colors
        var fruitColor = fruit[i].color;
        ctx.fillStyle = fruitColor;
        ctx.fillRect(0, ypos, fruit[i].quantity*17, section);

        //text
        ctx.font = "17px serif"
        ctx.fillStyle = "black";
        //fruit quantity text
        ctx.strokeText(fruit[i].quantity, 10, ypos+25);
        //fruit name text
        ctx.strokeText(fruit[i].name, 10, ypos+50);

        //change position
        ypos += section;
    }
}

document.addEventListener('DOMContentLoaded', draw);