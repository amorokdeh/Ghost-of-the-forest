//this is map 1 and main map

//player position
var player = {height: 32, width: 32, x: 80, y: 280, xv: 0, yv: 0, jump: true}

//walls position
var wall_1 =   { height: 32, width: 32, x: 607, y: 230, }
var wall_2 =   { height: 32, width: 32, x: 574, y: 230, }
var wall_3 =   { height: 32, width: 32, x: 541, y: 230, }
var wall_4 =   { height: 32, width: 32, x: 640, y: 230, }
var wall_5 =   { height: 32, width: 32, x: 001, y: 230, }
var wall_6 =   { height: 32, width: 32, x: 042, y: 230, }
var wall_7 =   { height: 32, width: 32, x: -32, y: 230, }
var wall_8 =   { height: 32, width: 32, x: 67, y: 230, }
var wall_9 =   { height: 32, width: 32, x: 67, y: 197, }
var wall_10 =   { height: 32, width: 32, x: 67, y: 164, }
var wall_11 =   { height: 32, width: 32, x: 100, y: 164, }
var wall_12 =   { height: 32, width: 32, x: 133, y: 164, }
var wall_13 =   { height: 32, width: 32, x: 133, y: 131, }
var wall_14 =   { height: 32, width: 32, x: 166, y: 131, }
var wall_15 =   { height: 32, width: 32, x: 300, y: 100, }
var wall_16 =   { height: 32, width: 32, x: 267, y: 100, }
var wall_17 =   { height: 32, width: 32, x: 267, y: 67, }
var wall_18 =   { height: 32, width: 32, x: 267, y: 34, }
var wall_19 =   { height: 32, width: 32, x: 267, y: 1, }
var wall_20 =   { height: 32, width: 32, x: 267, y: -32, }
var wall_21 =   { height: 32, width: 32, x: 265, y: 197, }
var wall_22 =   { height: 32, width: 32, x: 232, y: 197, }
var wall_23 =   { height: 32, width: 32, x: 199, y: 197, }
var wall_24 =   { height: 32, width: 32, x: 166, y: 197, }
var wall_25 =   { height: 32, width: 32, x: 166, y: 164, }
var wall_26 =   { height: 32, width: 32, x: 298, y: 197, }
var wall_27 =   { height: 32, width: 32, x: 331, y: 197, }
var wall_28 =   { height: 32, width: 32, x: 364, y: 197, }
var wall_29 =   { height: 32, width: 32, x: 364, y: 164, }
var wall_30 =   { height: 32, width: 32, x: 364, y: 131, }
var wall_31 =   { height: 50, width: 50, x: 529, y: 76, }
var wall_32 =   { height: 32, width: 32, x: 364, y: 20, }
var wall_33 =   { height: 32, width: 32, x: 397, y: 54, }
var wall_34 =   { height: 32, width: 32, x: 430, y: 87, }
var wall_35 =   { height: 32, width: 32, x: 463, y: 87, }
var wall_36 =   { height: 32, width: 32, x: 496, y: 87, }
var wall_37 =   { height: 32, width: 32, x: 234, y: -32, }
var wall_38 =   { height: 32, width: 32, x: 100, y: 197, }
var wall_39 =   { height: 32, width: 32, x: 580, y: 87, }
var wall_40 =   { height: 32, width: 32, x: 580, y: 54, }
var wall_41 =   { height: 32, width: 32, x: 580, y: 21, }


//monster position
var monster_1 = {height: 32, width: 32, x: 232, y: 10, xv: 0, yv: 0, move: true}
var monster_2 = {height: 32, width: 32, x: 450, y: 100, xv: 0, yv: 0, move: true}


//monster2 position
var monster2_1 = {height: 30, width: 25, x: 501, y: 56.5}
var monster2_2 = {height: 30, width: 25, x: 105, y: 134}


//door position
var door_1 =   { height: 50, width: 50, x: 529, y: 25, }
var door_2 =   { height: 50, width: 50, x: 1000, y: 1000, }
var door_3 =   { height: 50, width: 50, x: 1000, y: 1000, }
var door_4 =   { height: 50, width: 50, x: 1000, y: 1000, }
var door_l =   { height: 50, width: 50, x: 1000, y: 1000, }

//key position
var key_1 = { height: 50, width: 50, x: 1000, y: 1000, }
var key_2 = { height: 50, width: 50, x: 1000, y: 1000, }

//cage position
var cage = { height: 50, width: 50, x: 1000, y: 1000, }

//man
var man = { height: 70, width: 70, x: 1000, y: 1000, }

//crown
var crown = { x: 1000, y: 1000, width: 50, height: 50, }
var hman = { height: 70, width: 70, x: 1000, y: 1000, }





//to show map 1
var do_map_1 = function() {

    //background
    show_background();

    //walls
    do_wall(wall_1);
    do_wall(wall_2);
    do_wall(wall_3);
    do_wall(wall_4);
    do_wall(wall_5);
    do_wall(wall_6);
    do_wall(wall_7);
    do_wall(wall_8);
    do_wall(wall_9);
    do_wall(wall_10);
    do_wall(wall_11);
    do_wall(wall_12);
    do_wall(wall_13);
    do_wall(wall_14);
    do_wall(wall_15);
    do_wall(wall_16);
    do_wall(wall_17);
    do_wall(wall_18);
    do_wall(wall_19);
    do_wall(wall_20);
    do_wall(wall_21);
    do_wall(wall_22);
    do_wall(wall_23);
    do_wall(wall_24);
    do_wall(wall_25);
    do_wall(wall_26);
    do_wall(wall_27);
    do_wall(wall_28);
    do_wall(wall_29);
    do_wall(wall_30);
    do_wall(wall_31);
    do_wall(wall_32);
    do_wall(wall_33);
    do_wall(wall_34);
    do_wall(wall_35);
    do_wall(wall_36);
    do_wall(wall_37);
    do_wall(wall_38);
    do_wall(wall_39);
    do_wall(wall_40);
    do_wall(wall_41);

    //door
    do_door(door_1);
    do_door2(door_2);
    do_door2(door_3);
    do_door3(door_4);
    do_door_lock(door_l);

    //cage
    do_cage();
    
    //happy_man
    do_hman();
    
    //crown
    do_crown();

     //player
    do_player();

    //control
    do_control();


    //monster
    do_monster(monster_1);
    do_monster(monster_2);


    //monster2
    do_monster2(monster2_1);
    do_monster2(monster2_2);

    //key
    do_key(key_1);
    do_key_2(key_2);

    //man
    do_man(man);

    //storytext
    do_story(myStorytext);

    //mute sound
    mute_level_1();
    mute_level_3();
    mute_level_4();

    //frame
    window.requestAnimationFrame(do_map_1);
}
