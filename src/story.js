var myStory;
var myStorytext="Ghosty erwachte in einer Welt voller böser Geister. Sie erschienen zunächst unüberwindbar. Aber er entdeckte eine Tür! Wo die ihn wohl hinbringen möge? ... ";

var init_story=function() {

  myStory=document.getElementById('story');

}

var do_story=function(storytext) {

  myStory.innerHTML="<p>"+storytext+"<p>";
  myStory.style.display="block";


  }
