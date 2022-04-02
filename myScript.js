

//This function is a sequencing function that draws the background
function drawBackground(){
    //add methods

}

$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    var keycode = (event.keyCode ? event.keyCode : event.which);

    //a key to move left
    if(keycode == 65)
    {

    }

    // d key to go right
    if(keycode == 68)
    {
    }

    //w key to move up
    if(keycode == 87)
    {

    }

    //s key to move down.
    if(keycode == 83)
    {

    }

});

//Object that is used to create the image and draw it on the screen according to the desired x and y coordinets and width and height.
var createImage = function(src,xco,yco,w,h) {
    var img   = new Image();
    img.src   = src;
    img.left = xco;
    img.top = yco;
    img.width = w;
    img.height = h;
    img.vis= true;
    return img;

}

//Function that is used to initialize the game board when the game is loaded.
function initialize(){
    var ctx = document.getElementById("canvas").getContext("2d");


}

//Function that is called when you press the play game button
function startAnimation(){
    //This makes sure to disable the button to make sure the animate function doesn't start again.
    document.getElementById("startButton").disabled = true;

    animate();
}

//Function that starts the animation and is a sequenced function.
function animate(){
    //This function runs about 40 times per frame which means that it will look like the character is moving.
    a=requestAnimationFrame(animate);

    //Starts by drawing the background
    drawBackground();

}