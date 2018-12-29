// Vars inputs
var homerButton = document.getElementById("SS_T_homer1");

//Vars sounds
var homerPlayer = document.getElementById('homerAudio');


//eventlistener
homerButton.addEventListener('click', homerPlay);

//Functions
function homerPlay() {
  homerPlayer.play();
}
