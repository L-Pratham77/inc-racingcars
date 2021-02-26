class Player {
    constructor() {
        this.Index = null;
        this.Name = null;
        this.Rank = null ;
        this.distance = 0;


    }
    //to get playerCOunt from database
    getCount() {
        var playersRef = database.ref('playerCount');
        playersRef.on("value", function (data) {
            playerCount = data.val()
        });
    }

    getRank() {
        var playersRank = database.ref('playerRank');
        playersRank.on("value",  (data)=> {
            playerRank = data.val()
            this.Rank = data.val();
        });
    }
    //to update playerCOunt in database    
    updateCount(count) {
        database.ref('/').update({ playerCount: count })
    }

    updateRank(rank) {
        database.ref('/').update({ playerRank: rank })
    }


    //to update player name in database  player1, player2
    update() {
        var playerIndex = "players/player" + this.Index;
        database.ref(playerIndex).set({ name: this.Name , distance:this.distance , rank : this.Rank});
    }
    
    static playerNames() {
        var playersRef = database.ref('players');
        playersRef.on("value", (data) => {
            playerData = data.val()
        });

    }
    
}