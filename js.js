function play(){
    var audio = document.getElementById("audio");
    audio.play();
    }

function pause(){
    var audio = document.getElementById("audio");
    audio.pause();
    }

const wolf = document.querySelector(".logo1");
wolf.addEventListener("click", show);

function show(){
    document.querySelector('.logotext').style.animation = "wolf 3s forwards";
    }
