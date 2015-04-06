//forground
// scorebord here
var woosh_img;
var woosh_step=650;
var Forground_instance = false;
var something_iterator=0;
var Forground =function(ctx){
	if(Forground_instance){
		//
		// ctx.drawImage(woosh_img,srcX,0,W,H,0,0,W,H)
		ctx.fillStyle = 'white';
		ctx.font = '30px Verdana, sans-serif';
		ctx.textBaseline = 'top';
		ctx.textAlign = 'left';
		ctx.fillText('Time passed: '+Math.floor(collected_time/1000), 300, 20);

	}
	else{
		woosh_img = new Image();
		woosh_img.src='imgs/wooshSprite.png'
		//What ever you wanna do in the beginning
		// player = new Player({'x':10,'y':10})
		// window.addEventListener('keydown', doKey);
		// window.addEventListener('keyup', doKey);


		Forground_instance=true;
	}
	
};