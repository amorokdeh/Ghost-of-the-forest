//monster2 image
var M2img = new Image();
M2img.src = "src/img/monster2.png";


//to see monste
var do_monster2 = function(name) {

    context.drawImage(M2img, name.x, name.y, name.width, name.height);

    // collide with monster
    if ((player.x + player.width > name.x + 10) &&
        (player.x < name.x + name.width - 10) &&
        (player.y + player.height > name.y + 10) &&
        (player.y < name.y + name.height - 10)) {

        player.x = 80;
        player.y = 280;
        sounds.collision_2();

    }
}
