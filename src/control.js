//read the keys
var control = {

    //keys state
    left: false,
    right: false,
    up: false,

    //press the keys
    press: function(event) {

        //key state (true, false)
        var key_state = (event.type == "keydown")? true: false;


        //active keys
        switch(event.keyCode) {

            //left key
            case 37:
                control.left = key_state;
            break;

            //right key
            case 39:
                control.right = key_state;
            break;

            //up key
            case 38:
                control.up = key_state;
                main_control.up = key_state;
            break;

            //enter key
            case 13:
                control.enter = key_state;
                main_control.enter = key_state;
            break;

            //p key
            case 80:
                control.p = key_state;
                main_control.p = key_state;
            break;

            //up key
            case 40:
                control.down = key_state;
                main_control.down = key_state;
            break;

        }

    }

}

//apply the controler
var do_control = function() {


    //jumping
    if (control.up && (player.jump == false)) {

        player.yv -= 25;
        player.jump = true;
        sounds.jump_1();

    }

    //press left
    if (control.left ) {

        player.xv -= 0.5;
        Primg.src = "src/img/1l.png";

    }

    //press right
    if (control.right ) {

        player.xv += 0.5;
        Primg.src = "src/img/1r.png";

    }


    //not moving
    if (!control.left && !control.right ) {

        Primg.src = "src/img/stop.png";

    }


    //gravity
    player.yv += 1;

    //move left right
    player.x += player.xv;

    //do gravity (go down)
    player.y += player.yv;

    //repair the control
    player.xv *= 0.9;
    player.yv *= 0.9;

    //(repair position) if player is falling below floor line
    if (player.y > 278) {

        //can jump
        player.jump = false;

        //collide with the floor
        player.y = 278;

        //stop moving down
        player.yv = 0;

    }

    //if player is going off the left of the screen
    if (player.x < -32) {

        player.x = 640;

    } else if (player.x > 640) {

        player.x = -32;

    }

}
