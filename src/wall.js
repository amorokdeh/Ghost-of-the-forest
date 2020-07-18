//wall image
var Wallimg = new Image();
Wallimg.src = "src/img/wall.png";

//to see wall
var do_wall = function(name) {

    context.drawImage(Wallimg, name.x, name.y, name.width, name.height);
    collide(player, name);
    collide(monster_1, name);
    collide(monster_2, name);
}
