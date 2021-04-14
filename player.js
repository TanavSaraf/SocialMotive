class Player
{
    constructor()
    {
        this.distance=0;
        this.name="";
        this.health=15;
        this.index=null;

    }
    getPlayerCount()
    {
       db.ref("playerCount").on("value",(data)=>
       {
           playerCount=data.val()
       })
    }
    updatePlayerCount(playerCount)
    {
        db.ref("/").update({
            playerCount:playerCount
        })
    }
    update()
    {
        var playerIndex="players/player"+this.index
        db.ref(playerIndex).update({
            playersName:this.name,
            playerDistance:this.distance,
            playerHealth:this.health
        })
    }
}