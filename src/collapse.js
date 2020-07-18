var panelisopen=false;



function checkthebox() {

  document.getElementById('soundbutton').checked=false;


}


function openPanel(content) {

  if (panelisopen==false){
  var gamepanel = document.getElementById('mytoolbarPanel');
  //document.getElementById('mytoolbarPanel').style.width="300px";
  gamepanel.style.width="260px";
  gamepanel.style.border="white";
  gamepanel.style.border="solid";
  panelisopen=true;
  fillPanel(content);
}

}


function closePanel() {

 if(panelisopen==true){
  document.getElementById('mytoolbarPanel').style.width="0";
  document.getElementById('mytoolbarPanel').style.border="none";
  document.getElementById('volumeswitch').style.visibility="hidden";
  document.getElementById('soundtext').innerText="";
  panelisopen=false;
}

}

function fillPanel(content){


  if((panelisopen==true) && (content=="manual")){

    document.getElementById('soundtext').innerHTML="<img src='img/manual_img.png'>";


  } else if ((panelisopen==true && content=="settings")) {



      document.getElementById('volumeswitch').style.visibility="visible";
      document.getElementById('soundtext').innerText="SOUND ON/OFF"


  }


}
