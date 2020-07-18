//to show map 4
var do_end = function() {

    //background image
    bgimg.src = "src/img/background_end.png";

    //monster image
    Mimg.src = "src/img/monster_level_4.png";

    //wall image
    Wallimg.src = "src/img/wall_level4.png";

    //player
    player.x = 80;     player.y = 280;


    //walls
    wall_1.x = 220;     wall_1.y = 220;   wall_1.height = 32; wall_1.width = 64;
    wall_2.x = 325;     wall_2.y = 220;   wall_2.width = 64;
    wall_3.x = 435;     wall_3.y = 220;   wall_3.width = 64;
    wall_4.x = 535;     wall_4.y = 220;   wall_4.width = 64;
    wall_5.x = 1;     wall_5.y = 312; wall_5.height = 64; wall_5.width = 64;
    wall_6.x = 110;     wall_6.y = 220;     wall_6.width = 64;
    wall_7.x = 180;     wall_7.y = 150;
    wall_8.x = 395;     wall_8.y = 150;     wall_8.height = 32;
    wall_9.x = 290;     wall_9.y = 150;
    wall_10.x = 500;     wall_10.y = 150;  wall_10.height = 32; wall_10.width = 32;
    wall_11.x = 66;     wall_11.y = 312; wall_11.height = 64; wall_11.width = 64;
    wall_12.x = 132;     wall_12.y = 312; wall_12.height = 64; wall_12.width = 64;
    wall_13.x = 199;     wall_13.y = 312; wall_13.height = 64;  wall_13.width = 64;
    wall_14.x = 265;     wall_14.y = 312; wall_14.height = 64;  wall_14.width = 64;
    wall_15.x = 330;     wall_15.y = 312; wall_15.height = 64;  wall_15.width = 64;
    wall_16.x = 397;     wall_16.y = 312; wall_16.height = 64;  wall_16.width = 64;
    wall_17.x = 464;     wall_17.y = 312; wall_17.height = 64;  wall_17.width = 64;
    wall_18.x = 531;     wall_18.y = 312; wall_18.height = 64;  wall_18.width = 64;
    wall_19.x = 597;     wall_19.y = 312; wall_19.height = 64;  wall_19.width = 40;
    wall_20.x = 1000;     wall_20.y = 1000;
    wall_21.x = 1000;     wall_21.y = 1000;     wall_21.width = 32;
    wall_22.x = 1000;     wall_22.y = 1009;     wall_22.width = 32;
    wall_23.x = 1000;     wall_23.y = 1000;     wall_23.width = 32;
    wall_24.x = 1000;     wall_24.y = 1000;
    wall_25.x = 1000;     wall_25.y = 1000;     wall_25.width = 32;
    wall_26.x = 1000;     wall_26.y = 1000;
    wall_27.x = 1000;     wall_27.y = 1000;
    wall_28.x = 1000;     wall_28.y = 1000;     wall_28.width = 32;
    wall_29.x = 1000;     wall_29.y = 1000; wall_29.height = 32;   wall_29.width= 32;
    wall_30.x = 1000;     wall_30.y = 1000;
    wall_31.x = 1000;     wall_31.y = 1000; wall_31.height = 64;  wall_31.width = 64;
    wall_32.x = 1000;     wall_32.y = 1000; wall_32.height = 64;  wall_32.width = 64;
    wall_33.x = 1000;     wall_33.y = 1000; wall_33.width = 64;  wall_33.height = 64;
    wall_34.x = 1000;     wall_34.y = 1000; wall_34.height = 64;  wall_34.width = 64;
    wall_35.x = 1000;     wall_35.y = 1000; wall_35.height = 40;  wall_35.width = 40;
    wall_36.x = 1000;     wall_36.y = 1000; wall_36.height = 99;  wall_36.width = 64;
    wall_37.x = 1000;     wall_37.y = 1000; wall_37.height = 64;  wall_37.width = 64;
    wall_38.x = 1000;     wall_38.y = 1000;   wall_38.width = 64;
    wall_39.x = 1000;     wall_39.y = 1000; wall_39.height = 32;  wall_39.width = 64;
    wall_40.x = 1000;     wall_40.y = 1000;
    wall_41.x = 1000;     wall_41.y = 1000;     wall_41.height = 32;

    //monster
    monster_1.x = 1000;     monster_1.y = 1000;
    monster_2.x = 1000;     monster_2.y = 1000;

    //monster 2
    monster2_1.x = 1000;     monster2_1.y = 1000;
    monster2_2.x = 1000;     monster2_2.y = 1000;

    // doors level 1, 2, 3 and 4
    door_1.x = 1000;     door_1.y = 1000;
    door_2.x = 1000;     door_2.y = 1000;
    door_3.x = 1000;     door_3.y = 1000;
    door_4.x = 1000;     door_4.y = 1000;   door_4.width = 50;   door_4.height = 50;

    //key
    key_2.x = 1000;    key_2.y = 1000;   key_2.height = 40;   key_2.width = 40;

    //cage
    cage.x = 1000;   cage.y = 1000;   cage.width = 70;   cage.height = 70;
    
    //crown
    do_crown = function() {

    context.drawImage(crownimg, player.x - 5, player.y - 30, 50, 50);
        
    }
    
    //happy_man
    hman.x = 483;
    hman.y = 242;
    
    //story
    myStorytext="Danke, dass du Ghosty dabei geholfen hast den Mann zu befreien! Der Mann hat Ghosty eine Krone geschenkt."

}
