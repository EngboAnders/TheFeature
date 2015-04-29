//menu
var menu_instance = true;


var SplashScreen = function(ctx){
	// console.log('dddd');
	// var color = 'rgb(' + 1 + ',0,0)';
	ctx.fillStyle = 'Black';
	if(position_of_mouse.y>=255&&position_of_mouse.y<280)
		// console.log('new game')
		ctx.fillRect(0,255,W,30);
	else if(position_of_mouse.y>=280&&position_of_mouse.y<305)
		// console.log('save game')
		ctx.fillRect(0,280,W,30);
	else if(position_of_mouse.y>=305&&position_of_mouse.y<330)
		// console.log('load game')
		ctx.fillRect(0,305,W,30);
	else if(position_of_mouse.y>=330&&position_of_mouse.y<355)
		// console.log('load game')
		ctx.fillRect(0,330,W,30);
	ctx.fillStyle = 'White';
	ctx.font = '30px Verdana, sans-serif';
	ctx.textBaseline = 'top';

	ctx.textAlign = 'left';
	ctx.fillText('New Game' 	, 350, 250);
	ctx.fillText('Save Game'	, 350, 275);
	ctx.fillText('Load Game'	, 350, 300);
	ctx.fillText('Credits'		, 350, 325);
	// ctx.fillStyle = color;
	// ctx.font = '24px Verdana, sans-serif';
	// ctx.fillText('click to begin', 450, 250+ 30);

	
};

