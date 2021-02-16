class Game {
    constructor() {
         this.heading = createElement("h1");
        this.story = createElement("h3");
         this.button = createButton("startGame");
    }
    start() {
       // text("aliens have taken the golden project of earth to their planet. \n Help spiderman to reach their planet and get it back.",200,200)
            this.heading.html("Spiderman Game");
            this.heading.position(windowWidth/2,windowHeight/2);
            this.story.html("aliens have taken the golden project of earth to their planet. \n Help spiderman to reach their planet and get it back.")
            this.story.position(windowWidth/2 - 100,windowHeight/2 + 100);
            this.button.position(windowWidth/2,windowHeight/2 + 300);
            this.button.mousePressed( ()=> {
                gameState = "play";               
                })
        }
          
    play () {
        background("black");
        var spiderMan = createSprite(200,200,20,20);
        if (keyDown("up")){
            spiderMan.velocityY = 5;}
        if (keyDown("down")){
            spiderMan.velocityY = -5;}
        if (keyDown("left")){
            spiderMan.velocityX = -5;}      
        if (keyDown("right")){
            spiderMan.velocityX = 5;}  
            drawSprites(); 
    }
    hide() {
        this.heading.hide();
        this.story.hide();
        this.button.hide();       

    }       
}