//menu
var menu_instance = true;
var position_of_mouse={'x':0,'y':0};

var SplashScreen = function(ctx){
	draw(ctx);

}

function draw(ctx){
	// console.log('dddd');
	var color = 'rgb(' + 1 + ',0,0)';

	ctx.fillStyle = 'White';
	ctx.font = '30px Verdana, sans-serif';
	ctx.textBaseline = 'top';
	ctx.textAlign = 'center';
	menu_new_game(ctx);
	ctx.fillText('New Game' , 450, 250);
	ctx.fillText('Save Game', 450, 275);
	ctx.fillText('Save Game', 450, 275);
	// ctx.fillStyle = color;
	// ctx.font = '24px Verdana, sans-serif';
	// ctx.fillText('click to begin', 450, 250+ 30);

	
};
window.addEventListener('mousemove', function(e){
    position_of_mouse.x = e.pageX;
    position_of_mouse.y = e.pageY;
}, false);
function menu_new_game(ctx){
	if()
}