//to show end
var do_map_4= function() {

    myMap=4;
    //background image
    bgimg.src = "src/img/background_level4.png";

    //monster image
    Mimg.src = "src/img/monster_level_4.png";

    //wall image
    Wallimg.src = "src/img/wall_level4.png";

    //player
    player.x = 80;     player.y = 280;


    //walls
    wall_1.x = 508;     wall_1.y = 247;   wall_1.height = 32;
    wall_2.x = 508;     wall_2.y = 280;
    wall_3.x = 1;     wall_3.y = 214;
    wall_4.x = 34;     wall_4.y = 214;
    wall_5.x = 67;     wall_5.y = 214;
    wall_6.x = 100;     wall_6.y = 214;     wall_6.width = 32;
    wall_7.x = - 32;     wall_7.y = 214;
    wall_8.x = 640;     wall_8.y = 214;     wall_8.height = 32;
    wall_9.x = 607;     wall_9.y = 214;
    wall_10.x = 574;     wall_10.y = 214;   wall_10.height = 32;  wall_10.width = 32;
    wall_11.x = 541;     wall_11.y = 214;     wall_11.height = 32;
    wall_12.x = 508;     wall_12.y = 214;
    wall_13.x = 508;     wall_13.y = 181;   wall_13.height = 32;  wall_13.width = 32;
    wall_14.x = 508;     wall_14.y = 148;   wall_14.height = 32;  wall_14.width = 32;
    wall_15.x = 574;     wall_15.y = 148;
    wall_16.x = 607;     wall_16.y = 148;
    wall_17.x = 508;     wall_17.y = 115;     wall_17.width = 32;
    wall_18.x = 508;     wall_18.y = 82;     wall_18.height = 32;
    wall_19.x = 541;     wall_19.y = 49;     wall_19.width = 32;
    wall_20.x = 574;     wall_20.y = 49;
    wall_21.x = 607;     wall_21.y = 49; wall_21.height = 32; wall_21.width = 32;
    wall_22.x = 640;     wall_22.y = 49;     wall_22.width = 32;
    wall_23.x = 1;     wall_23.y = 148;     wall_23.width = 32;
    wall_24.x = 34;     wall_24.y = 148;
    wall_25.x = 67;     wall_25.y = 148;     wall_25.width = 32;
    wall_26.x = -32;     wall_26.y = 148; wall_26.height = 32; wall_26.width = 32;
    wall_27.x = 67;     wall_27.y = 115;
    wall_28.x = 100;     wall_28.y = 115;     wall_28.width = 32;
    wall_29.x = 133;     wall_29.y = 115;   wall_29.height = 32;   wall_29.width= 32;
    wall_30.x = 133;     wall_30.y = 82;
    wall_31.x = 167;     wall_31.y = 82;  wall_31.height = 64;   wall_31.width = 64;
    wall_32.x = 232;     wall_32.y = 82;  wall_32.height = 64;   wall_32.width = 64;
    wall_33.x = 297;     wall_33.y = 82;  wall_33.width = 64;    wall_33.height = 64;
    wall_34.x = 363;     wall_34.y = 82;  wall_34.height = 64;   wall_34.width = 64;
    wall_35.x = 428;     wall_35.y = 190;  wall_35.height = 40;   wall_35.width = 40;
    wall_36.x = 167;     wall_36.y = 212; wall_36.height = 99;   wall_36.width = 64;
    wall_37.x = 167;     wall_37.y = 147;  wall_37.height = 64;   wall_37.width = 64;
    wall_38.x = 607;     wall_38.y = 16;   wall_38.width = 64;
    wall_39.x = -32;     wall_39.y = 16;   wall_39.height = 32;  wall_39.width = 64;
    wall_40.x = 508;     wall_40.y = 49;
    wall_41.x = 640;     wall_41.y = 148;     wall_41.height = 32;

    //monster
    monster_1.x = 100;     monster_1.y = 0;
    monster_2.x = 389;     monster_2.y = 100;

    //monster 2
    monster2_1.x = 360;     monster2_1.y = 52;
    monster2_2.x = 510;     monster2_2.y = 19;

    //delet door level 1, 2 and 3
    door_1.x = 1000;     door_1.y = 1000;
    door_2.x = 1000;     door_2.y = 1000;
    door_3.x = 1000;     door_3.y = 1000;
    door_4.x = 1000;     door_4.y = 1000;   door_4.width = 32;   door_4.height = 32;

    //key
    key_2.x = 548;    key_2.y = 270;   key_2.height = 40;   key_2.width = 40;

    //cage
    cage.x = 250;   cage.y = 242;   cage.width = 70;   cage.height = 70;

    //story
    myStorytext="Ghosty ist nun im Verließ. Er kann den gefangen gehaltenen Mann schon sehen. Kannst du Ghosty dabei helfen ihn zu befreien? ..."
    
    //mute sound
    sounds.level = 4;

}
