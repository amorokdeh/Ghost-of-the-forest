//cage image
var cageimg = new Image();
cageimg.src = "src/img/cage.png";


//to see cage
var do_cage = function() {

    context.drawImage(cageimg, cage.x, cage.y, cage.width, cage.height);
    
    if ((player.x + player.width > cage.x + 10) &&
        (player.x < cage.x + cage.width - 10) &&
        (player.y + player.height > cage.y + 10) &&
        (player.y < cage.y + cage.height - 10)) {

        context.drawImage(lockd_door_text, 250, 330, 200, 50);
    }

}


//man image
var manimg = new Image();
manimg.src = "src/img/man.png";


//to see man
var do_man = function(name) {
    
    //collide with player
    if ((player.x + player.width > name.x + 10) &&
        (player.x < name.x + name.width - 10) &&
        (player.y + player.height > name.y + 10) &&
        (player.y < name.y + name.height - 10)) {
        
        man.x = 1000;
        man.y = 1000;
        do_end();
        
    }
    
    context.drawImage(manimg, man.x, man.y, man.width, man.height);

}



//happy_man image
var hmanimg = new Image();
hmanimg.src = "src/img/happy_man.png";


//to see happy_man
var do_hman = function() {

    context.drawImage(hmanimg, hman.x, hman.y, hman.width, hman.height);

}


