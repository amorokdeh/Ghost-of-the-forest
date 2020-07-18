//door image
var doorimg = new Image();
doorimg.src = "src/img/door.png";

//locked door image
var doorlimg = new Image();
doorlimg.src = "src/img/lock.png";

//text locked door
var lockd_door_text = new Image();
lockd_door_text.src = "src/img/locked_door_text.png";

//door level 1
var do_door= function(name) {

    context.drawImage(doorimg, name.x, name.y, name.width, name.height);

    // player win
    //collide with door
    if ((player.x + player.width > name.x + 10) &&
        (player.x < name.x + name.width - 10) &&
        (player.y + player.height > name.y + 10) &&
        (player.y < name.y + name.height - 10)) {

        //player win
        sounds.door_1();
        do_map_2();


    }
}


//door 2 for map 2
var do_door2= function(name) {

    context.drawImage(doorimg, name.x, name.y, name.width, name.height);

    // player win
    //collide with door
    if ((player.x + player.width > name.x + 10) &&
        (player.x < name.x + name.width - 10) &&
        (player.y + player.height > name.y + 10) &&
        (player.y < name.y + name.height - 10)) {

        //player win
        sounds.door_1();
        sounds.level_1.pause();
        sounds.level_3_1();
        do_map_3();


    }
}


//door 3 for map 3
var do_door3= function(name) {

    context.drawImage(doorimg, name.x, name.y, name.width, name.height);

    // player win
    //collide with door
    if ((player.x + player.width > name.x + 10) &&
        (player.x < name.x + name.width - 10) &&
        (player.y + player.height > name.y + 10) &&
        (player.y < name.y + name.height - 10)) {

        //player win
        sounds.door_1();
        sounds.level_3.pause();
        sounds.level_4_1();
        do_map_4();


    }

}


//locked door
var do_door_lock = function(name) {

    context.drawImage(doorlimg, name.x, name.y, name.width, name.height);

    if ((player.x + player.width > name.x + 10) &&
        (player.x < name.x + name.width - 10) &&
        (player.y + player.height > name.y + 10) &&
        (player.y < name.y + name.height - 10)) {

        context.drawImage(lockd_door_text, 250, 330, 200, 50);


    }

}
