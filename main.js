canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
background_image = "mars.jpg";
rover_image = "rover.png";
function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;
    rover_imgtag = new Image();
    rover_imgtag.onload = uploadrover;
    rover_imgtag.src = rover_image;
}
function uploadbackground() {
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e) {
keypressed = e.keyCode;
console.log(keypressed);
if(keypressed == '37') {
    console.log("left");
    left();
}
if(keypressed == '39') {
    console.log("right");
    right();
}
if(keypressed == '40') {
    console.log("down");
    down();
}
if(keypressed == '38') {
    console.log("up");
    up();
}
}
function up() {
    if(rover_y >=0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function down() {
    if(rover_y <=500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}

function left() {
    if(rover_x >=0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right() {
    if(rover_x <=700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
        uploadbackground();
        uploadrover();
    }
}