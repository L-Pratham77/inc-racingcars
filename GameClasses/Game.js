class Game {
    constructor() { }

    // .once()
    async Waiting() {
        if (GameState === 0) {
            player = new Player();
            var PlrCount = await database.ref('playerCount').once("value");
            if (PlrCount.exists()) {
                playerCount = PlrCount.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }

        //car sprites
        Car1 = createSprite(100, 300, 10, 10);
        Car1.addImage("CAR1",Car1_img);

        Car2 = createSprite(150, 300, 10, 10);
        Car2.addImage("CAR2",Car2_img);

        Car3 = createSprite(200, 300, 10, 10);
        Car3.addImage("CAR3",Car3_img);

        Car4 = createSprite(250, 300, 10, 10);
        Car4.addImage("CAR4",Car4_img);

    car = [Car1,Car2,Car3,Car4];
    }
    GetState() {
        var gameState = database.ref('GameState');
        gameState.on("value", function (data) {
            GameState = data.val()
        });
    }
    update(state) {
        database.ref('/').update({ GameState: state })
    }
    play() {
        form.hide();
        textSize(40);
        //fill("red");
        //text("GAME STARTED", 100, 120);
        console.log(GameState);
        console.log(playerData);
        Player.playerNames();
        player.getRank();
        textSize(15);
        if (playerData !== undefined) {
            image(track_img,0,-displayHeight*3,displayWidth,displayHeight*4)
            var x = 100, y, index = 0;
            var displayPosition = 150;
            for (var plr in playerData) {
                x = x+ 200
                index = index + 1;
                y = displayHeight - playerData[plr].distance;
  
                
                car[index - 1].x = x;
                car[index - 1].y = y;

                if(index===player.Index){
                    camera.position.x = displayWidth/2 ;
                    camera.position.y = car[index-1].y ;
                    // stroke(10); 
                    fill("red");
                    ellipseMode(RADIUS);
                    ellipse(x,y,30,60) ;
                   
                }

                if (plr === "player" + player.Index)
                    fill("black");
                else
                    fill("red");
                displayPosition = y+20;
                text(playerData[plr].name + "-" + playerData[plr].distance, 10, displayPosition);

            }
        }
      

        if (keyIsDown(UP_ARROW)) {
            player.distance += 5;
            player.update();
        }
        if(player.distance>3400){
            GameState = 4 ;
            player.Rank =  player.Rank+1;
            player.updateRank(player.Rank);
            player.update();
        }

        drawSprites();

    }
    End(){
        form.hide();
        console.log(GameState);
        console.log(player.Rank);
    }

}
