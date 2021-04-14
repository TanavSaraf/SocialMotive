class Form
{
    constructor()
    {
        this.quit=createButton("QUIT");
        this.play=createButton("PLAY");
        this.input=createInput("");

    }
    
    display()
    {
        this.input.position(400,200);
        this.play.position(400,250);
        this.quit.position(400,300);

        this.play.mousePressed(()=>
        {
            playerCount+=1;
            player.updatePlayerCount(playerCount);
            this.input.hide()
            this.play.hide()
            this.quit.hide()
            player.index=playerCount;
            player.name=this.input.value()
        })
        this.quit.mousePressed(()=>{
             window.close()
        })

        
    }

}