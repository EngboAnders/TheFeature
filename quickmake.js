var canvas, ctx, player, fps = 90, speed=100, slowing_speed = 0.9, start_step_in_time = 0, progress = 0, bounceFactor = 0.7,
up = false, down = false, left = false, right = false, collected_time = 0, img = null, W = window.innerWidth-33, H = window.innerHeight-33;

var keys = [];
var Player = function(position) {

	this.x= position.x;
	this.y= position.y;
	this.vx=0;
	this.vy=0;
	this.width= 20;
	this.height= 20;
};

// window.addEventListener("keydown", function(e){
// 	keys[e.keyCode] = true;
// }, false);

// window.addEventListener("keyup", function(e){
// 	delete keys[e.keyCode];
// }, false);

// function game(){
// 	update();
// 	render();
// }

Player.prototype.update= function(){
	if (up)//w
		this.vy-=speed;
	if (down)//s
		this.vy+=speed;
	if (left)//a
		this.vx-=speed;
	if (right)//d
		this.vx+=speed;
	// if(keys[38]) player.y-=speed;
	// if(keys[40]) player.y+=speed;
	// if(keys[37]) player.x-=speed;
	// if(keys[39]) player.x+=speed;

	// if(player.x < 0) player.x = 0;
	// if(player.y < 0) player.y = 0;
	// if(player.x >= width - player.width) player.x = width - player.width;
	// if(player.y >= height - player.height) player.y = height - player.height;
// }
// Player.prototype.movement= function(){
	this.y += this.vy*(progress/1000);
	this.x += this.vx*(progress/1000);
	this.vx *= slowing_speed;
	this.vy *= slowing_speed;

	if(this.y + this.height > H) {
		this.y = H - this.height;
		this.vy *= -bounceFactor;
	}
	if(this.x + this.width > W) {
		this.x = W - this.width;
		this.vx *= -bounceFactor;
	}
	if(this.y < 0) {
		this.y = 0;
		this.vy *= -bounceFactor;
	}
	if(this.x < 0) {
		this.x = 0;
		this.vx *= -bounceFactor;
	}
}





Player.prototype.render=function(){
	ctx.fillRect(player.x, player.y, player.width, player.height);
} 




var load = function(){
	canvas = document.getElementById('gameCanvas');
	canvas.height = H; canvas.width = W;  
	ctx = canvas.getContext('2d');
	player = new Player({'x':10,'y':10})
	// ball = new Ball();
	// img = new Image();
	// img.src = 'imgs/The-MatrixReloaded-HD-Wallpapers1.jpg';
	window.addEventListener('keydown', doKey);
	window.addEventListener('keyup', doKey);
};
function doKey(e){
	console.log(e);
	if (e.keyCode == 87) //w
		up=((e.type=="keydown") ? true : false);
	if (e.keyCode == 83) //s
		down=((e.type=="keydown") ? true : false);
	if (e.keyCode == 65) //a
		left=((e.type=="keydown") ? true : false);
	if (e.keyCode == 68)//d
		right=((e.type=="keydown") ? true : false);
};

function clearCanvas() {
	ctx.clearRect(0, 0, W, H);
};

function staticDrawings(){
	// ctx.drawImage(img, 0, 0);
	//text
	ctx.fillStyle = 'green';
	ctx.font = '30px Verdana, sans-serif';
	ctx.textBaseline = 'top';
	ctx.textAlign = 'right';
	ctx.fillText('Time passed: '+Math.floor(collected_time/1000), 300, 20);
	
	
};

function globalMove(){
	// player.movement();
}

function update(){
	if(canvas!=null){
		clearCanvas();
		staticDrawings();
		player.render();
		player.update();
		globalMove();
		
	}
};

window.addEventListener('load', load, false);

function step(step_in_time){
  	progress = step_in_time - start_step_in_time;
  	collected_time += progress;
  	// if(progress>0)
	  	update(progress);
	start_step_in_time = step_in_time;
  	window.requestAnimationFrame(step);
};
window.requestAnimationFrame(step);