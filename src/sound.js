var mySound;

//Define our Sounds, like a package
var muted = false;





let sounds = {


     collision1: new Audio("src/sound/monster.wav"),
     collisoon2: new Audio("src/sound/spitze.wav"),
     jump: new Audio("src/sound/jump.wav"),
     door: new Audio("src/sound/door.mp3"),
     button_move_m: new Audio("src/sound/butt_move.mp3"),
     button_click: new Audio("src/sound/butt_click.mp3"),
     main_menu: new Audio("src/sound/main_menu.mp3"),
     level_1: new Audio("src/sound/level_1.wav"),
     level_3: new Audio("src/sound/level_3.mp3"),
     level_4: new Audio("src/sound/level_4.mp3"),
     key: new Audio("src/sound/key.wav"),
     level: 0,


     //functionalities following

     collision_1: function(){

        if(muted == false){
            this.collision1.play();
        }
     },

     collision_2: function(){

        if(muted == false){
            this.collisoon2.play();
        }

     },

    jump_1: function(){

         if(muted == false){
            this.jump.play();
         }
     },

     door_1: function(){

         if(muted == false){
            this.door.play();
         }
     },

     button_move_1_m:function(){

        if(muted == false){
            this.button_move_m.play();
        }
     },

     button_click_1:function(){

        if(muted == false){
            this.button_click.play();
        }
     },

    main_menu_1:function(){

        if(muted == false){
            this.main_menu.play();
        }
     },

    level_1_1:function(){

        if(muted == false){
            this.level_1.play();
        } else if(muted == true){
          this.level_1.pause();
        }
     },

    level_3_1:function(){

        if(muted == false){
            this.level_3.play();
        }
     },

    level_4_1:function(){

        if(muted == false){
            this.level_4.play();
        }
     },

    key_1:function(){

        if(muted == false){
            this.key.play();
        }
     }

}




//mute sound
var mute_main_menu = function() {
    
    var check_1 = document.getElementById('soundbutton').checked;

    if (check_1 == true && (sounds.level == 0) && !(sounds.level == 1) && !(sounds.level == 3) && !(sounds.level == 4)) {
        muted = true;
        sounds.main_menu.pause();

    } else if ((sounds.level == 0) && !(sounds.level == 1) && !(sounds.level == 3) && !(sounds.level == 4)) {
        muted=false;
        sounds.main_menu.play();


    }

    
}




 //mute level 1
var mute_level_1 = function() {
    
    var check_1 = document.getElementById('soundbutton').checked;

    if (check_1 == true && (sounds.level == 1) && !(sounds.level == 0) && !(sounds.level == 3) && !(sounds.level == 4)) {
        muted = true;
        sounds.level_1.pause();

    } else if ((sounds.level == 1) && !(sounds.level == 0) && !(sounds.level == 3) && !(sounds.level == 4)) {
        muted=false;
        sounds.level_1.play();


    }

    
}



//mute level 3
var mute_level_3 = function() {
    
    var check_1 = document.getElementById('soundbutton').checked;

    if (check_1 == true && (sounds.level == 3) && !(sounds.level == 1) && !(sounds.level == 0) && !(sounds.level == 4)) {
        muted = true;
        sounds.level_3.pause();

    } else if ((sounds.level == 3) && !(sounds.level == 1) && !(sounds.level == 0) && !(sounds.level == 4)) {
        muted=false;
        sounds.level_3.play();

    }

    
}




//mute level 4
var mute_level_4 = function() {
    
    var check_1 = document.getElementById('soundbutton').checked;

    if (check_1 == true && (sounds.level == 4) && !(sounds.level == 1) && !(sounds.level == 3) && !(sounds.level == 0)) {
        muted = true;
        sounds.level_4.pause();

    } else if ((sounds.level == 4) && !(sounds.level == 1) && !(sounds.level == 3) && !(sounds.level == 0)) {
        muted=false;
        sounds.level_4.play();

    }
    
    
}