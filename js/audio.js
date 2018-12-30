//Volume Simpsons theme song
var backgroundMusic = document.getElementById("SS_BG_song");
backgroundMusic.volume = 0.1;

// Vars inputs
var homerButton = document.getElementById("SS_T_homer1");
var margeButton = document.getElementById("SS_T_marge");
var bartButton = document.getElementById("SS_T_bart");
var lisaButton = document.getElementById("SS_T_lisa");
var maggieButton = document.getElementById("SS_T_maggie");
var abeButton = document.getElementById("SS_T_abe");
var nedButton = document.getElementById("SS_T_ned");
var burnsButton = document.getElementById("SS_T_burns");

//Vars sounds
var homerPlayer = document.getElementById('homerAudio');
var margePlayer = document.getElementById('margeAudio');
var bartPlayer = document.getElementById('bartAudio');
var lisaPlayer = document.getElementById('lisaAudio');
var maggiePlayer = document.getElementById('maggieAudio');
var abePlayer = document.getElementById('abeAudio');
var nedPlayer = document.getElementById('nedAudio');
var burnsPlayer = document.getElementById('burnsAudio');

//eventlistener
homerButton.addEventListener('click', homerPlay);
margeButton.addEventListener('click', margePlay);
bartButton.addEventListener('click', bartPlay);
lisaButton.addEventListener('click', lisaPlay);
maggieButton.addEventListener('click', maggiePlay);
abeButton.addEventListener('click', abePlay);
nedButton.addEventListener('click', nedPlay);
burnsButton.addEventListener('click', burnsPlay);

//Functions
function homerPlay() {
  homerPlayer.play();
}

function margePlay() {
  margePlayer.play();
}

function bartPlay() {
  bartPlayer.play();
}

function lisaPlay() {
  lisaPlayer.play();
}

function maggiePlay() {
  maggiePlayer.play();
}

function abePlay() {
  abePlayer.play();
}

function nedPlay() {
  nedPlayer.play();
}

function burnsPlay() {
  burnsPlayer.play();
}
