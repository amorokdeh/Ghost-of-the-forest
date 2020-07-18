//key image
var keyimg = new Image();
keyimg.src = "src/img/key.png";

//to see key
var do_key = function(name) {
    
    //collide with player
    if ((player.x + player.width > name.x + 10) &&
        (player.x < name.x + name.width - 10) &&
        (player.y + player.height > name.y + 10) &&
        (player.y < name.y + name.height - 10)) {

        door_4.x = 463;
        door_4.y = 274;
        door_4.width = 40;
        door_4.height = 40;
        name.x = 1000;
        name.y = 1000;
        door_l.x = 1000;
        door_l.y = 1000;
        sounds.key_1();

    }

    context.drawImage (keyimg, name.x, name.y, name.width, name.height);

}


//to see key
var do_key_2 = function(name) {
    
    //collide with player
    if ((player.x + player.width > name.x + 10) &&
        (player.x < name.x + name.width - 10) &&
        (player.y + player.height > name.y + 10) &&
        (player.y < name.y + name.height - 10)) {
        
        man.x = 250;
        man.y = 242;
        cage.x = 1000;
        cage.y = 1000;
        name.x = 1000;
        name.y = 1000;
        sounds.key_1();

    }

    context.drawImage (keyimg, name.x, name.y, name.width, name.height);

}