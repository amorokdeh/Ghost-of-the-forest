//monster image
var Mimg = new Image();
Mimg.src = "src/img/monster.png";


//to see the monster
var do_monster = function(name) {

    context.drawImage(Mimg, name.x, name.y, name.width, name.height);

    name.y += name.yv;
    name.x += name.xv;

    name.yv += 0.05;

    if (name.move == false) {

        name.yv -= 4.1;
        name.move = true;

    }

    //collide with monster
    if ((player.x + player.width > name.x + 10) &&
        (player.x < name.x + name.width - 10) &&
        (player.y + player.height > name.y + 10) &&
        (player.y < name.y + name.height - 10)) {

        player.x = 80;
        player.y = 280;

        sounds.collision_1();


    }


    //(repair position) if player is falling below floor line
    if (name.y > 278) {

        name.yv -= 4.1;
        name.move = true;

    }


}
