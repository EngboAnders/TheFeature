//menu
var menu_instance = false;

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
	ctx.fillText('Hello world', 450, 250);

	ctx.fillStyle = color;
	ctx.font = '24px Verdana, sans-serif';
	ctx.fillText('click to begin', 450, 250+ 30);

	window.addEventListener('click', function(){
			menu_instance = true;
	}, false)
}
