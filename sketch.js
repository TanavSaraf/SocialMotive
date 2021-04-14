var db
var gameState=0,playerCount,allPlayers;
var game,player,form;

function setup() {
  createCanvas(800,400);
  db=firebase.database();
  game=new Game()
  game.getGameState()
  game.start()

}

function draw() {
 /* if(playerCount===2)
  {
    gameState=1;
    
  }*/
}