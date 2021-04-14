class Game
{
    constructor()
    {

    }
    getGameState()
    {
       db.ref("gameState").on("value",(data)=>
       {
           gameState=data.val()
       })
    }
    updateGameState(state)
    {
        db.ref("/").update({
            gameState:state
        })
    }
   async start()
    {
        if(gameState===0)
        {
            player=new Player()
            var playerCountRef=await db.ref("playerCount").once("value");
            if(playerCountRef.exists())
            {
                playerCount=playerCountRef.val();
                player.getPlayerCount();
            }
            form=new Form()
            
            form.display()
        }
    }
}