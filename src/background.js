var background = {

    //size
    height: 380,
    width: 640,

    //positiosn
    x: 0,
    y: 0,

}

//background image
var bgimg = new Image();
bgimg.src = "src/img/background.png";

//to see background
var show_background = function() {

    context.drawImage (bgimg, background.x, background.y, background.width, background.height);

}
