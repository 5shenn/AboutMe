function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function copyText() {
    // Select the text
    const text = document.getElementById("discord").innerText;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(text).then(function() {
        alert('Text copied to clipboard: ' + text);
    }).catch(function(err) {
        console.error('Error copying text: ', err);
    });
}

var song = document.getElementById('audio');
var play = document.getElementById('play_button');
var count = 0;

function playPause(){
    if(count == 0){
        count = 1;
        audio.pause();
        var imgElement = document.getElementById("play_button");
    imgElement.src = "pause.png";

    }else{
        count = 0;
        audio.play();
        var imgElement = document.getElementById("play_button");
    imgElement.src = "play.png";
    }
}
 
