//menu
var menu_instance = true;
var position_of_mouse={'x':0,'y':0};

var SplashScreen = function(ctx){
	// console.log('dddd');
	// var color = 'rgb(' + 1 + ',0,0)';
	ctx.fillStyle = 'Black';
	if(position_of_mouse.y>=265&&position_of_mouse.y<290)
		// console.log('new game')
		ctx.fillRect(0,255,W,30);
	if(position_of_mouse.y>=290&&position_of_mouse.y<315)
		// console.log('save game')
		ctx.fillRect(0,280,W,30);
	if(position_of_mouse.y>=315&&position_of_mouse.y<340)
		// console.log('Credits')
		ctx.fillRect(0,305,W,30);
	ctx.fillStyle = 'White';
	ctx.font = '30px Verdana, sans-serif';
	ctx.textBaseline = 'top';

	ctx.textAlign = 'left';
	ctx.fillText('New Game' , 350, 250);
	ctx.fillText('Save Game', 350, 275);
	ctx.fillText('Credits'	, 350, 300);
	// ctx.fillStyle = color;
	// ctx.font = '24px Verdana, sans-serif';
	// ctx.fillText('click to begin', 450, 250+ 30);

	
};
window.addEventListener('mousemove', function(e){
    position_of_mouse.x = e.pageX;
    position_of_mouse.y = e.pageY;
    // console.log(position_of_mouse);
}, false);
