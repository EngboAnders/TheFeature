var Player = function(position) {

	this.x= position.x;
	this.y= position.y;
	this.vx=0;
	this.vy=0;
	this.width= 20;
	this.height= 20;
	this.hitbox= {	
		'xLow':this.x,	'xHigh':this.x+this.width,
		'yLow':this.y,	'yHigh':this.y+this.height
	};
};

Player.prototype.update = function(){
	// user interaction
	if (up)//w
		this.vy-=speed;
	if (down)//s
		this.vy+=speed;
	if (left)//a
		this.vx-=speed;
	if (right)//d
		this.vx+=speed;
// }
// Player.prototype.movement= function(){
	//Physics 
	this.y += this.vy*(progress/1000);
	this.x += this.vx*(progress/1000);
	this.vx *= slowing_speed;
	this.vy *= slowing_speed;

	//Collide Detection
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