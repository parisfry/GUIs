let audio;
let tempoSlider;
let panSlider;
let volumeSlider;

function preload(){
  audio = loadSound('audio.mp3');
}

function setup() {
  createCanvas(400, 400);
  let playButton = createButton ('Play audio');
  playButton.position (100,20);
  playButton.mousePressed(playAudio);

  let pauseButton = createButton ('Pause audio');
  pauseButton.position(220,20);
  pauseButton.mousePressed(pauseAudio);

  tempoSlider = createSlider(50,200,100);
  tempoSlider.position(100,100);
  tempoSlider.size(200);

  panSlider = createSlider(-1, 1, 0, 0.01); 
  panSlider.position(100, 150);
  panSlider.size(200);

  volumeSlider = createSlider(0,200,50);
  volumeSlider.position(100,200);
  volumeSlider.size(200);
}

function playAudio() {
  audio.loop(); 
  console.log('Audio playing');
}

function pauseAudio(){
  audio.pause();
  console.log('Audio Paused');
}

function draw() {
  background(220);
  let tempo = tempoSlider.value() /100;
  let pan = panSlider.value();
  let volume = volumeSlider.value() /100

  if (audio.isPlaying()) {
    audio.rate(tempo);      // Adjust tempo
    audio.setVolume(volume); // Adjust volume
    audio.pan(pan); // Adjust stereo panning
  }

  textSize(10);
  fill(0);
  text('Tempo: ', 100, 90);
  text('Pan: ' , 100, 140);
  text('Volume: ' , 100, 190);
}