//player physics
var speed=6, slowing_speed = 0.9, bounceFactor = 0.3, gravity=9.3;

var Player = function(position) {
	this.img = new Image();
	this.img.src = 'player.png';
	this.x= position.x;
	this.y= position.y;
	this.vx=0;
	this.vy=0;
	this.width= 20;
	this.height= 20;
	this.grounded = false;
};
Player.prototype.hitbox=function(){
	return {
		'Xlow':this.x, 
		'Ylow':this.y, 
		'Xhigh':this.x+this.width, 
		'Yhigh':this.y+this.height
	};
}
Player.prototype.update = function(current_level){

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
	// console.log(progress/100);
	var oldY=this.y;
	if(!this.grounded){
		this.vy += gravity*(progress/100);
		this.y += this.vy;
	}
	this.vy *= slowing_speed;
	this.vx *= slowing_speed;
	
	
	this.x += this.vx*(progress/1000)*3;
	
	// this.vy *= slowing_speed;
		//Collide Detection Screen
	if(this.hitbox().Yhigh > H) {
		this.y = H - this.height;
		this.vy *= -bounceFactor;
	}
	if(this.hitbox().Xhigh > W) {
		this.x = W - this.width;
		this.vx *= -bounceFactor;
	}
	if(this.hitbox().Ylow < 0) {
		this.y = 0;
		this.vy *= -bounceFactor;
	}
	if(this.hitbox().Xlow < 0) {
		this.x = 0;
		this.vx *= -bounceFactor;
	}

 
	
	//stuff
	var onGround=-1;
	for(var block in current_level.blocks)
		onGround=this.collide(current_level.blocks[block],onGround);
	if(onGround>-1){
		this.y=oldY;
		this.grounded=true;
	}
	else
		this.grounded=false;
	for(var enemy in current_level.enemies)
		this.collide(current_level.enemies[enemy]);
	for(var item in current_level.items)
		this.collide(current_level.items[item]);


	this.render();
}

Player.prototype.setPosition=function(pos){
	this.x=pos.x;
	this.y=pos.y;
	this.vx=0;
	this.vy=0;
}

Player.prototype.render=function(){
	ctx.drawImage(this.img,this.x, this.y);
} 

Player.prototype.collide=function(block, onGround){
	console.log(this.hitbox());
	console.log(block.hitbox());
	if(this.inside(block)){
		onGround++;
		if(this.hitbox().Ylow<block.hitbox().Yhigh&&this.hitbox().Yhigh>block.hitbox().Yhigh){
			this.vy += gravity*(progress/100);
			this.y 	+= this.vy;
		}
	}
	return onGround;
}



Player.prototype.inside=function(shape){
// this.Intersects = function(shape)
	// {
	var hit_box=this.hitbox();
	var shape_box = shape.hitbox();
	
	if (this.Contains(shape_box.Xlow , shape_box.Ylow ) || this.Contains(shape_box.Xhigh , shape_box.Ylow ) ||
		this.Contains(shape_box.Xlow , shape_box.Yhigh ) || this.Contains(shape_box.Xhigh , shape_box.Yhigh ))
	{
		return true;
	}
	// else if (shape.Contains(this.x , this.y ) || shape.Contains(this.x + this.width , this.y ) ||
	// 	shape.Contains(this.x , this.y + this.height ) || shape.Contains(this.x + this.width , this.y + this.height ))
	// {
	// 	return true;
	// }
	
	return false;
};
	
Player.prototype.Contains = function(x, y)
{
	if (x >= this.x && x <= this.x + this.width &&
		y >= this.y && y <= this.y + this.height)
		return true;
	else 
		return false;
}


