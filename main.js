// Setup Canvas and graphics Context 
let cnv = document.getElementById("cvs");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 800;

//Global vars
var spriteWidth = 293;
var spriteHeight = 94;
var cols = 4;

//character setup
var character = new Image();
character.src = "goku.png"

//To get the width of a single sprite we divided the width of sprite with the number of cols
//because all the sprites are of equal width and height 
var width = spriteWidth / cols;

// row contains 4 frame and at start we will display the first frame (assuming the index from 0)
var curFrame = 0;

//The total frame is 4 
var frameCount = 4;

//x and y coordinates to render the sprite 
var x = 0;
var y = 0;

//x and y coordinates of the canvas to get the single frame 
var srcX = 0;
var srcY = 0;

function updateFrame() {
    //Updating the frame index 
    curFrame = ++curFrame % frameCount;

    //Calculating the x coordinate for spritesheet 
    srcX = curFrame * width;
}

function draw() {
    //Updating the frame 
    updateFrame();
    //Drawing the image 
    ctx.drawImage(character, srcX, srcY, width, 94, x, y, width, 94);
}
	
setInterval(draw,100);