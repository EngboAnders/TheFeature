//forground
// scorebord here
var Forground_instance = false;
var Forground =function(ctx){
	if(Forground_instance){
		//
		ctx.fillStyle = 'green';
		ctx.font = '30px Verdana, sans-serif';
		ctx.textBaseline = 'top';
		ctx.textAlign = 'left';
		ctx.fillText('Time passed: '+Math.floor(collected_time/1000), 300, 20);

	}
	else{
		//What ever you wanna do in the beginning
		// player = new Player({'x':10,'y':10})
		// window.addEventListener('keydown', doKey);
		// window.addEventListener('keyup', doKey);


		Forground_instance=true;
	}
	
};