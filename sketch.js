var gameState,game,blueballImg,yellowballImg,redballImg,purpleballImg,greenballImg;
function preload() {
blueballImg=loadImage("blueball.png");
redballImg=loadImage("redball.png");
purpleballImg=loadImage("purpleball.png");
greenballImg=loadImage("greenball.png");
yellowballImg=loadImage("yellowball.png");





}
function setup() {
createCanvas(600,600);
gameState = "start";
game = new Game()
}

function draw () {
 
if(gameState === "start")
  game.start()

if(gameState === "play") { 
  clear();
  game.hide();
  game.play();
}
}
