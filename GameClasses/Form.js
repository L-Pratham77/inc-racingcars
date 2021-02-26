class Form {
    constructor() {
        this.greeting = createElement('h3');
        this.input = createInput("Enter Name");
        this.button = createButton("PLAY");
        this.reset = createButton("RESET")
    }
    display() {
        var title = createElement('h1')
        title.html("RACING CARs");
        title.position(550, 20);


        // input text
        this.input.position(550, 160);

        // button 
        this.button.position(550, 190);

        this.reset.position(600,100);


        /* when button pressed need to hide input box and PLAY button
            capture players name and update that in database.
            increase playercount in code and in database.

            we can display a greeting or welcome message to player till 
            all the 4 players join the Game

            we can display player information as well
        */

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.Name = this.input.value();

            playerCount += 1;
            player.Index = playerCount;
            player.update()
            player.updateCount(playerCount);

            //greeting display
            this.greeting.html( "Hello " + player.Name)
            this.greeting.position(550, 160)
        });

        this.reset.mousePressed(()=> 
        {
          game.update(0);
          player.updateCount(0);

            this.greeting.hide();
        
            this.input.show();
            this.button.show();
            this.updateRank(0);
        }
        )
    }
    hide(){
        this.input.hide();
        this.button.hide();
      this.greeting.hide();
      

    }
}