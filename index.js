const background = document.getElementById("video")
const container = document.getElementById("container")
let playVideoBtn = document.getElementById("btn-change-background")
const playPauseTrackBtn = document.getElementById("playpause-track")


function playVideo(){
    if(background.paused){
      background.play();
      playVideoBtn.style.backgroundColor = 'blue'
      
    }else{
      background.pause()
      playVideoBtn.style.backgroundColor = 'transparent';
      
    }
  }

  function playPauseTrack(){
    if(audio.paused){
      audio.play();
      playPauseTrackBtn.innerHTML = '<i class="fa fa-pause-circle fa-3x"></i>';
    }else{
      audio.pause();
      playPauseTrackBtn.innerHTML = '<i class="fa fa-play-circle fa-3x"></i>';

    }
  }

        