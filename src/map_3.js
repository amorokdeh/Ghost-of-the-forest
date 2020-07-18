//to show map 3
var do_map_3 = function() {

    myMap=3;
    //background image
    bgimg.src = "src/img/background_level3.png";

    //monster image
    Mimg.src = "src/img/monster_level_3.png";

    //wall image
    Wallimg.src = "src/img/wall_level3.png";

    //player
    player.x = 80;     player.y = 280;

    //walls
    wall_1.x = 0;     wall_1.y = 280;
    wall_2.x = 0;     wall_2.y = 247;
    wall_3.x = 0;     wall_3.y = 214;
    wall_4.x = 0;     wall_4.y = 181;
    wall_5.x = 70;     wall_5.y = 214;
    wall_6.x = 0;     wall_6.y = 148;     wall_6.width = 32;
    wall_7.x = 0;     wall_7.y = 115;
    wall_8.x = 0;     wall_8.y = 82; wall_8.height = 32; wall_8.width= 32;
    wall_9.x = 0;     wall_9.y = 49;
    wall_10.x = 140;     wall_10.y = 115;   wall_10.height = 64;  wall_10.width = 64;
    wall_11.x = 0;     wall_11.y = 0;     wall_11.height = 48;
    wall_12.x = 243;     wall_12.y = 97;
    wall_13.x = 140;     wall_13.y = 180;   wall_13.height = 64;  wall_13.width = 64;
    wall_14.x = 140;     wall_14.y = 245;   wall_14.height = 74;  wall_14.width = 64;
    wall_15.x = 243;     wall_15.y = 163;
    wall_16.x = 243;     wall_16.y = 130;
    wall_17.x = 276;     wall_17.y = 97;     wall_17.width = 64;
    wall_18.x = 341;     wall_18.y = 97;     wall_18.height = 32;
    wall_19.x = 374;     wall_19.y = 97;     wall_19.width = 64;
    wall_20.x = 439;     wall_20.y = 97;
    wall_21.x = 580;     wall_21.y = 280;     wall_21.width = 32;
    wall_22.x = 511;     wall_22.y = 97;     wall_22.width = 32;
    wall_23.x = 475;     wall_23.y = 97;     wall_23.width = 32;
    wall_24.x = 210;     wall_24.y = 196;    wall_24.height = 32;
    wall_25.x = 210;     wall_25.y = 230;     wall_25.width = 32;
    wall_26.x = 210;     wall_26.y = 264;     wall_26.height = 55;
    wall_27.x = 310;     wall_27.y = 220;
    wall_28.x = 310;     wall_28.y = 253;     wall_28.width = 32;
    wall_29.x = 310;     wall_29.y = 286;  wall_29.height = 32;  wall_29.width= 32;
    wall_30.x = 1000;     wall_30.y = 1000;
    wall_31.x = 1000;     wall_31.y = 1000;  wall_31.height = 32; wall_31.width = 32;
    wall_32.x = 1000;     wall_32.y = 1000;
    wall_33.x = 1000;     wall_33.y = 1000;     wall_33.width = 32;
    wall_34.x = 1000;     wall_34.y = 1000;
    wall_35.x = 1000;     wall_35.y = 1000;
    wall_36.x = 1000;     wall_36.y = 1000; wall_36.height = 32; wall_36.width = 32;
    wall_37.x = 1000;     wall_37.y = 1000;
    wall_38.x = 1000;     wall_38.y = 1000;
    wall_39.x = 1000;     wall_39.y = 1000;
    wall_40.x = 1000;     wall_40.y = 1000;
    wall_41.x = 1000;     wall_41.y = 1000;     wall_41.height = 32;

    //monster
    monster_1.x = 210;     monster_1.y = 0;
    monster_2.x = 580;     monster_2.y = 200;

    //monster 2
    monster2_1.x = 442;     monster2_1.y = 65;
    monster2_2.x = 350;     monster2_2.y = 288;

    //delet doors
    door_1.x = 1000;     door_1.y = 1000;
    door_2.x = 1000;     door_2.y = 1000;
    door_3.x = 1000;     door_3.y = 1000;

    //doors level 3
    door_l.x = 463;     door_l.y = 274;   door_l.width = 40;   door_l.height = 40;
    door_4.x = 1000;     door_4.y = 1000;   door_4.width = 40;   door_4.height = 40;

    //key
    key_1.x = 258;    key_1.y = 280;   key_1.height = 40;   key_1.width = 40;

    //story
    myStorytext="Sehr gut.. Ghosty kommt dem armen Mann immer näher. Versuch Ghosty in das Hexenhaus zubringen! Aber diesmal scheint es nicht so einfach ..."
    //mute sound
    sounds.level = 3;

}
