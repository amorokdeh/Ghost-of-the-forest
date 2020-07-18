//background
var main_background = {height: 380, width: 640, x: 0, y: 0}

//background image
var main_bgimg = new Image();
main_bgimg.src = "src/img/main_back.png";

//to see background
var show_main_background = function() {

    context.drawImage (main_bgimg, main_background.x, main_background.y, main_background.width, main_background.height);
    return true;
}






//press enter
var press_enter = {height: 50, width: 200, x: 220, y: 275}

// press enter image
var press_enterimg = new Image();
press_enterimg.src = "src/img/press_enter_to_start.png";

//show prees enter to start
var show_press_enter = function() {

    context.drawImage (press_enterimg, press_enter.x, press_enter.y, press_enter.width, press_enter.height);

}



//prees Enter to start
var press_enter_to_start = function() {

    if (control.enter) {

        show_main_background();
        start_button.x = 240;
        about_button.x = 240;
        press_enter.x = 700;
        sounds.button_click_1();
        sounds.main_menu_1();

    }

    if (start_button.x == 240) {

        mute_main_menu();

    }

}





//press P to continue
var press_p = {height: 40, width: 170, x: 1000, y: 1000}

//press_p image
var press_pimg = new Image();
press_pimg.src = "src/img/Press_p_to_continue.png";

//show prees_p
var show_press_p = function() {

    context.drawImage (press_pimg, press_p.x, press_p.y, press_p.width, press_p.height);

}




//text
var text = {height: 200, width: 200, x: 1000, y: 1000}

//text image
var textimg = new Image();
textimg.src = "src/img/text.png";

//show text
var show_text = function() {

    context.drawImage (textimg, text.x, text.y, text.width, text.height);

}




//start button
var start_button = {height: 35, width: 160, x: 700, y: 255}

//button image
var start_button_image = new Image();
start_button_image.src = "src/img/start.png";

//to see button
var show_start_button = function() {

    context.drawImage (start_button_image, start_button.x, start_button.y, start_button.width, start_button.height);

}



//about button
var about_button = {height: 35, width: 160, x: 700, y: 305}

//button image
var about_button_image = new Image();
about_button_image.src = "src/img/about.png";

//to see button
var show_about_button = function() {

    context.drawImage (about_button_image, about_button.x, about_button.y, about_button.width, about_button.height);

}



//select
var select_button = {height: 45, width: 165, x: 240, y: -100}

//button image
var select_button_image = new Image();
select_button_image.src = "src/img/select.png";

//to see background
var show_select_button = function() {

    context.imageSmoothingEnabled = false; // should make image more crisp
    context.drawImage (select_button_image, select_button.x, select_button.y, select_button.width, select_button.height);

}



//about
var about = {height: 330, width: 310, x: 1000, y: 20}

//about image
var aboutimg = new Image();
aboutimg.src = "src/img/about_background.png";

//to see and do about
var do_about = function() {

    context.imageSmoothingEnabled = false;
    context.drawImage (aboutimg, about.x, about.y, about.width, about.height);


}



//control
var main_control = {

    //keys state
    up: false,
    down: false,
    enter: false,


    //press the keys
    press: function(event) {

        //key state (true, false)
        var key_state = (event.type == "keydown")? true: false;


        //active keys
        switch(event.keyCode) {

            //enter key
            case 13:
                main_control.enter = key_state;
            break;

            //up key
            case 38:
                main_control.up = key_state;
            break;

            //down key
            case 40:
                main_control.down = key_state;
            break;

        }

    }
}



//apply the controler
var do_main_control = function() {

    //move up (start)
    if (main_control.up && (start_button.x == 240) && !(select_button.x == 2000)) {

        select_button.y = 250;
        select_button.x = 238;
        sounds.button_move_1_m();

    }

    //move down (about)
    if (main_control.down && (start_button.x == 240) && !(select_button.x == 2000)) {

        select_button.y = 300;
        select_button.x = 238;
        sounds.button_move_1_m();


    }

    if (main_control.enter) {

        //select start
        if (select_button.y == start_button.y - 5) {

            init_story();
            do_map_1();
            sounds.button_click_1();
            sounds.main_menu.pause();
            sounds.level_1_1();
            sounds.level = 1;
            do_main_menu = false;

        //select about
        } else if (select_button.y == about_button.y - 5) {

            about.x = 170;
            select_button.y = 1000;
            select_button.x = 2000;
            press_p.x = 240;
            press_p.y = 280;
            text.x = 225;
            text.y = 65;
            sounds.button_click_1();

        }


    }

    if (main_control.p && about.x == 170) {

        about.x = 1000;
        select_button.x = 1000;
        press_p.x = 1000;
        press_p.y = 1000;
        text.x = 1000;
        text.y = 1000;
        sounds.button_click_1();

    }

}




//main_menu
var do_main_menu = function() {

    show_main_background();
    show_press_enter();
    press_enter_to_start();
    show_start_button();
    show_about_button();
    do_about();
    show_text();
    show_press_p();
    show_select_button();
    do_main_control();

}
