var gameState,game

function setup() {
createCanvas(windowWidth,windowHeight);
gameState = "start";
game = new Game()
}

function draw () {
 
if(gameState === "start")
  game.story()
}