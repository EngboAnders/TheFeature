//player physics
var speed=6, slowing_speed = 0.9, speed_up=5, bounceFactor = 0.0001, gravity=9.3;

var player_w = 22, player_h = 66, srcX = 10, srcY = 0;

var Player = function(position) {
	this.img = new Image();
	this.img.src = 'playerSprite.png';
	this.x= position.x;
	this.y= position.y;
	this.vx=0;
	this.vy=0;
	this.width= 15;
	this.height= 22;
	this.grounded = false;
	this.oldX;
	this.oldY;
	this.update_move=true;
};
Player.prototype.hitbox=function(){
	return {
		'Xlow':this.x+5, 
		'Ylow':this.y, 
		'Xhigh':this.x+this.width, 
		'Yhigh':this.y+this.height
	};
}
Player.prototype.update = function(current_level){
	this.render();
	this.update_move=true;
	var onGround=-1;
	// user interaction
	
	this.oldY=this.y;
	this.oldX=this.x;
	
	if(!this.grounded){
		this.vy += gravity*(progress/100);
	}
	

	
	// this.vy *= slowing_speed;
		//Collide Detection Screen
	if(this.hitbox().Yhigh > H-5) {
		onGround++;
		this.y = H - this.height-5;
		this.vy *= -bounceFactor;
	}
	if(this.hitbox().Xhigh > W-5) {
		this.x = W - this.width-5;
		this.vx *= -bounceFactor;
	}
	if(this.hitbox().Ylow < 0) {
		this.y = 0;
		this.vy *= -bounceFactor;
	}
	if(this.hitbox().Xlow < 0) {
		this.x = 0-5;
		this.vx *= -bounceFactor;
	}

	if (up)//w
		this.vy-=speed_up;
	if (down)//s
		this.vy+=speed_up;
	if (left)//a
		this.vx-=speed;
	if (right)//d
		this.vx+=speed;
 
	
	// stuff
	var i = 0;
	// var collide_i=-1;
	this.grounded=false;
	while(i<current_level.blocks.length){
	// for(var block in current_level.blocks)
		// var oldGround=onGround;
		if(this.inside(current_level.blocks[i],onGround))
			this.grounded=true;
		// if(oldGround!=onGround)
		// 	collide_i=i;
		i++;
	}
	// if(onGround>-1)
	// 	this.grounded=true;
	// else
	// 	this.grounded=false;

	for(var enemy in current_level.enemies)
		this.inside(current_level.enemies[enemy]);
	for(var item in current_level.items)
		this.inside(current_level.items[item]);

	
// }
// Player.prototype.movement= function(){
	//Physics 
	// console.log(progress/100);
	this.vy *= slowing_speed;
	this.vx *= slowing_speed;

	

	if(this.update_move){
		this.x += this.vx*(progress/1000)*3;
		this.y += this.vy;
	}
	

	
}

Player.prototype.setPosition=function(pos){
	this.x=pos.x;
	this.y=pos.y;
	this.vx=0;
	this.vy=0;
}

Player.prototype.render=function(){
if (right) {
    srcX = 44;
} else if (left) {
    srcX = 22;
}
  ctx.drawImage(this.img,srcX,srcY,player_w,player_h,player.x,player.y,player_w,player_h);
if (right == false || left == false) {
    srcX = 0;
}
	//ctx.drawImage(this.img,this.x, this.y);
} 

// Player.prototype.collide=function(block, onGround){
// 	// console.log(this.hitbox());
// 	// console.log(block.hitbox());
// 	if(this.inside(block)){
// 		onGround++;
// 		// if(this.hitbox().Ylow<block.hitbox().Yhigh&&this.hitbox().Yhigh>block.hitbox().Yhigh){
// 		// 	this.vy += gravity*(progress/100);
// 		// 	this.y 	+= this.vy;
// 		// }
// 	}
// 	return onGround;
// }



Player.prototype.inside=function(shape){
	// console.log(shape);
// this.Intersects = function(shape)
	// {
	var hit_box=this.hitbox();
	var shape_box = shape.hitbox();
	var topLeft=false;
	var topRight=false;
	var bottomLeft=false;
	var bottomRight=false;
	//checks for corners
	if (shape.Contains(hit_box.Xlow , hit_box.Ylow ))
		topLeft=true; 
	if(shape.Contains(hit_box.Xhigh , hit_box.Ylow ))
		topRight=true;
	if(shape.Contains(hit_box.Xlow , hit_box.Yhigh ))
		bottomLeft=true;
	if(shape.Contains(hit_box.Xhigh , hit_box.Yhigh ))
		bottomRight=true;

	// if(topLeft)
	// 	console.log('topLeft')
	// if(topRight)
	// 	console.log('topRight')
	// if(bottomLeft)
	// 	console.log('bottomLeft')
	// if(bottomRight)
	// 	console.log('bottomRight')
	//sides touches
	if(topRight&&topLeft&&bottomRight&&bottomLeft){
		this.vy=0;
		this.y=shape_box.Ylow-this.height;
	}

	if(topRight&&bottomRight){
		this.x=shape_box.Xlow-this.width;
		if(this.vx>0)
			this.vx=0;
		return true;
	}
	if(topLeft&&bottomLeft){
		this.x=shape_box.Xhigh-5;
		if(this.vx<0)
			this.vx=0;
		return true;
	}
	if(topLeft&&topRight){
		this.y=shape_box.Yhigh;
		if(this.vy<0)
			this.vy=0;
		return false;
	}
	if(bottomLeft&&bottomRight){
		this.y=shape_box.Ylow-this.height;
		if(this.vy>0)
			this.vy=0;
		return true;
	}

	//corners
	if(topLeft||topRight||bottomLeft||bottomRight){
		
		if(topLeft){
			this.oldX++;
			this.oldY++;
			if(this.vx<0)
				this.vx=0;
			if(this.vy<0)
				this.vy=0;
		}
		if(topRight){
			this.oldX--;
			this.oldY++;
			if(this.vx>0)
				this.vx=0;
			if(this.vy<0)
				this.vy=0;
		}
		if(bottomLeft){
			this.oldX++;
			this.oldY--;
			if(this.vx<0)
				this.vx=0;
			if(this.vy>0)
				this.vy=0;
		}
		if(bottomRight){
			this.oldX--;
			this.oldY--;
			if(this.vx>0)
				this.vx=0;
			if(this.vy>0)
				this.vy=0;
		}
		this.x=this.oldX;
		this.y=this.oldY;
		
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


