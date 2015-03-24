var canvas = document.getElementById("gameCanvas");	
var context = canvas.getContext("2d");
var width="500", height="400", speed=3;

var keys = [];
var Player = function(position) {

	this.x: position.x,
	this.y: position.y,
	this.width: 20,
	this.height: 20
};

window.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
}, false);

window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
}, false);

// function game(){
// 	update();
// 	render();
// }

Player.prototype.update= function(time_difference){
	if (up)//w
		ball.vy-=speed;
	if (down)//s
		ball.vy+=speed;
	if (left)//a
		ball.vx-=speed;
	if (right)//d
		ball.vx+=speed;
	// if(keys[38]) player.y-=speed;
	// if(keys[40]) player.y+=speed;
	// if(keys[37]) player.x-=speed;
	// if(keys[39]) player.x+=speed;

	// if(player.x < 0) player.x = 0;
	// if(player.y < 0) player.y = 0;
	// if(player.x >= width - player.width) player.x = width - player.width;
	// if(player.y >= height - player.height) player.y = height - player.height;
}






Player.prototype.render=function(){
	context.fillRect(player.x, player.y, player.width, player.height);
} 

// setInterval(function(){
// 	game();
// }, 1000/30)


