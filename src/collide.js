//thia is collide (player wiht walls)s
//collide left
var collide_left = function(ob1, ob2) {

    if ((ob1.x + ob1.width > ob2.x - 2) &&
        (ob1.x < ob2.x + ob2.width ) &&
        (ob1.y + ob1.height > ob2.y) &&
        (ob1.y < ob2.y + ob2.height) &&
        (ob1.x + ob1.width < ob2.x + ob2.width - 2) &&

        !(ob1.x > ob2.x + ob2.width - 3) &&
        !(ob1.y > ob2.y + ob2.height - 3) &&
        !(ob1.y + ob1.height < ob2.y + 3)){

        ob1.xv = 0;
        ob1.x = ob2.x - ob1.width - 2.1;

    }

}


//collide right
var collide_right = function(ob1, ob2) {

    if ((ob1.x + ob1.width > ob2.x) &&
        (ob1.x < ob2.x + ob2.width + 2) &&
        (ob1.y + ob1.height > ob2.y ) &&
        (ob1.y < ob2.y + ob2.height) &&
        (ob1.x > ob2.x + 2) &&

        !(ob1.x + ob1.width < ob2.x + 3) &&
        !(ob1.y > ob2.y + ob2.height - 3) &&
        !(ob1.y + ob1.height < ob2.y + 3)){

        ob1.xv = 0;
        ob1.x = ob2.x + ob2.width + 2.1;

    }

}

//collide down
var collide_down = function(ob1, ob2) {

    if ((ob1.x + ob1.width > ob2.x) &&
        (ob1.x < ob2.x + ob2.width) &&
        (ob1.y + ob1.height > ob2.y) &&
        (ob1.y < ob2.y + ob2.height + 2) &&
        (ob1.y > ob2.y + 2) &&

        !(ob1.x + ob1.width < ob2.x + 3) &&
        !(ob1.x > ob2.x + ob2.width - 3) &&
        !(ob1.y + ob1.height < ob2.y + 3)){

        ob1.yv = 0;
        ob1.y = ob2.y + ob2.height + 2.1;

    }

}

//collide up
var collide_up = function(ob1, ob2) {

    if ((ob1.x + ob1.width > ob2.x) &&
        (ob1.x < ob2.x + ob2.width) &&
        (ob1.y + ob1.height > ob2.y - 2) &&
        (ob1.y < ob2.y + ob2.height) &&
        (ob1.y + ob1.height < ob2.y + ob2.height - 2) &&

        !(ob1.x + ob1.width < ob2.x + 3) &&
        !(ob1.x > ob2.x + ob2.width - 3) &&
        !(ob1.y > ob2.y + ob2.height - 3)){

        ob1.yv = 0;
        ob1.y = ob2.y - ob1.height - 2;
        ob1.jump = false;
        ob1.move = false;
        if (ob1 == player) {

            if (control.up && (ob1.jump == false)) {

                ob1.yv -= 25;
                ob1.jump = true;
                sounds.jump_1();

            }

        }

    }

}

var collide = function(ob1, ob2) {

    //collide up
    collide_down(ob1, ob2);

    //collide down
    collide_up(ob1, ob2);

    //collide right
    collide_right(ob1, ob2);

    //collide left
    collide_left(ob1, ob2);

}
