//player image (start and right)
var Primg = new Image();
Primg.src = "src/img/stop.png";


//to see player
var do_player = function() {

    context.drawImage(Primg, player.x, player.y, player.width, player.height);

}



//crown image
var crownimg = new Image();
crownimg.src = "src/img/crown.png";


//to see crown
var do_crown = function() {

    context.drawImage(crownimg, crown.x, crown.y, 50, 50);

}