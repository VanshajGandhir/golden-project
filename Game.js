class Game {
    constructor() {

    }
    story () {
       // text("aliens have taken the golden project of earth to their planet. \n Help spiderman to reach their planet and get it back.",200,200)
            var heading = createElement("h1");
            heading.html("Spiderman Game");
            heading.position(windowWidth/2,windowHeight/2);
            var story = createElement("h3");
            story.html("aliens have taken the golden project of earth to their planet. \n Help spiderman to reach their planet and get it back.")
            story.position(windowWidth/2 - 100,windowHeight/2 + 100);
            var button = createButton("startGame");
            button.position(windowWidth/2,windowHeight/2 + 300);
            button.isMousePressed(dothis)
        }
            dothis() {
                
            }
}