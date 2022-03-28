let player;
function setup() {
  createCanvas(1280, 720);
  player = new App();
}

function draw() {
  player.interface();
}

function mousePressed(){
  player.isPressed(mouseX, mouseY, player.songs);
}