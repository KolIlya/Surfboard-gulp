let video;
let durationControl;
let soundControl;
let intervalId;
let playImg = document.querySelector('.player__button-img');

document.addEventListener('DOMContentLoaded', e => {
  video = document.getElementById('video');

  video.addEventListener('click', playStop);

  let playButtons = document.querySelectorAll('.play');
  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', playStop);
  }

  let micControl = document.getElementById('micLevel');
  micControl.addEventListener('click', soundOf);

  durationControl = document.getElementById('durationLevel');
  durationControl.addEventListener('mousedown', stopInterval);
  durationControl.addEventListener('click', setVideoDuration);

  durationControl.min = 0;
  durationControl.value = 0;

  soundControl = document.getElementById('volumeLevel');
  soundControl.addEventListener('click', changeSoundVolume);
  soundControl.addEventListener('mouseup', changeSoundVolume);

  soundControl.min = 0;
  soundControl.max = 10;
  soundControl.value = soundControl.max;
})

function playStop(){
  playImg.classList.toggle('player__button-img--active');

  durationControl.max = video.duration;

  if (video.paused) {
    video.play();
    intervalId = setInterval(updateDuration , 1000/66);
  } else {
    clearInterval(intervalId);
    video.pause();
  }
}

function updateDuration(){
  durationControl.value = video.currentTime;
  let step = video.duration / 100;
  let percent = video.currentTime / step;
  durationControl.style.background = `linear-gradient(90deg, #FEDB3F 0%, #FEDB3F ${percent}%, #626262 ${percent}%)`;
}

function stopInterval(){
  video.pause();
  clearInterval(intervalId);
}

function setVideoDuration(){
  if (video.paused){
    playImg.classList.add('player__button-img--active');
    video.play();
  } else {
    video.pause();
  }

  video.currentTime = durationControl.value;
  intervalId = setInterval(updateDuration , 1000/66);
}

function changeSoundVolume(){
  video.volume = soundControl.value / 10;
}

function soundOf(){
  if (video.volume === 0){
    video.volume = soundLevel;
    soundControl.value = soundLevel * 10;
  } else {
    soundLevel = video.volume;
    video.volume = 0;
    soundControl.value = 0;
  }
}