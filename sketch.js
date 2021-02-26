
var database, position;
var GameState = 0, playerCount, form, game, player;
var playerData , playerRank ;
var car ,Car1_img ,Car2_img ,Car3_img ,Car4_img ,track_img ;
var Car1, Car2, Car3, Car4;

function preload(){
  Car1_img = loadImage(" images/car1.png ");
  Car2_img = loadImage(" images/car2.png ");
  Car3_img = loadImage(" images/car3.png ");
  Car4_img = loadImage(" images/car4.png ");
  track_img = loadImage("images/track.jpg");
}
function setup() {
  database = firebase.database();
  //console.log(database);
  createCanvas(displayWidth -100,displayHeight-200);

  game = new Game();
  game.GetState();
  game.Waiting();

}

function draw() {

  if (playerCount === 4) {
    game.update(2);

  }
  if (GameState === 2) {
    clear();
    game.play();
    drawSprites();
  }
  if (GameState === 4) {
    clear();
    game.End();
    
  }
}
