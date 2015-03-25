//gameground 
//elements
var player,
//movement checks
up = false, down = false, left = false, right = false;
var Gameground_instance= false;

function doKey(e){
	// console.log(e);
	if (e.keyCode == 87) //w
		up=((e.type=="keydown") ? true : false);
	if (e.keyCode == 83) //s
		down=((e.type=="keydown") ? true : false);
	if (e.keyCode == 65) //a
		left=((e.type=="keydown") ? true : false);
	if (e.keyCode == 68)//d
		right=((e.type=="keydown") ? true : false);
};

var Gameground =function(ctx){
	if(Gameground_instance){
		//
		player.update();
		player.render();

	}
	else{
		//What ever you wanna do in the beginning
		player = new Player({'x':10,'y':10})
		window.addEventListener('keydown', doKey);
		window.addEventListener('keyup', doKey);


		Gameground_instance=true;
	}
	
};