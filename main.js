let player;
function setup() {
  createCanvas(1280, 720);
  player = new App();
}

function draw() {
}

function mousePressed(){
  if(player.songs.isPlaying()){
    player.songs.stop();
    background(255, 0, 0);
  } else {
    player.songs.play();
    background(0, 255, 0);
  }
}