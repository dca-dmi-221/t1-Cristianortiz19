let player;
function setup() {
  createCanvas(1280, 720);
  player = new App();
}

function draw() {
  player.interface();
}

function mousePressed(){
  /*for (let index = 0; index < player.songs.length; index++) {
    const song = player.songs[index];
    if(song.isPlaying()){
      song.stop();
      background(255, 0, 0);
    } else {
      song.play();
      background(0, 255, 0);
    }
  }*/
}