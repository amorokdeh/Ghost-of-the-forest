//get canvas 
var context = document.querySelector("canvas").getContext("2d");

//canvas size
context.canvas.height = 380;
context.canvas.width = 640;

//add keys to browser
window.addEventListener("keydown", control.press);
window.addEventListener("keyup", control.press);

//update frame
var update_frame = function () {
    
    window.requestAnimationFrame(draw);
    
}

// do update
update_frame();