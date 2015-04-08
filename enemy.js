//enermy
var Enemy = function(position) {
	this.img = new Image();
	this.img.src = 'playerSprite.png';
	this.x= position.x;
	this.y= position.y;
	this.vx=20;
	this.vy=0;
	this.width= 15;
	this.height= 22;
	this.grounded = false;
	this.oldX;
	this.oldY;
	this.update_move=true;
};
Enemy.prototype.hitbox=function(){
	return {
		'Xlow':this.x, 
		'Ylow':this.y, 
		'Xhigh':this.x+this.width, 
		'Yhigh':this.y+this.height
	};
}
Enemy.prototype.update = function(ctx,current_level){
	this.render(ctx);
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
	if(this.hitbox().Yhigh > H) {
		onGround++;
		this.y = H - this.height;
		this.vy *= -bounceFactor;
	}
	if(this.hitbox().Xhigh > W) {
		this.x = W - this.width;
		this.vx *= -1;
	}
	if(this.hitbox().Ylow < 0) {
		this.y = 0;
		this.vy *= -bounceFactor;
	}
	if(this.hitbox().Xlow < 0) {
		this.x = 0;
		this.vx *= -1;
	}
	
	// stuff
	var i = 0;
	// var collide_i=-1;
	this.grounded=false;
	// console.log(current_level);
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

	
	this.inside(player);


	
// }
// Player.prototype.movement= function(){
	//Physics 
	// console.log(progress/100);
	// this.vy *= slowing_speed;
	// this.vx *= slowing_speed;

	

	if(this.update_move){
		this.x += this.vx*(progress/1000)*3;
		this.y += this.vy;
	}
	

	
}

Enemy.prototype.setPosition=function(pos){
	this.x=pos.x;
	this.y=pos.y;
	this.vx=0;
	this.vy=0;
}

Enemy.prototype.render=function(ctx){
if (right) {
    srcX = 44;
} else if (left) {
    srcX = 22;
}
  // ctx.drawImage(this.img,srcX,srcY,player_w,player_h,player.x,player.y,player_w,player_h);
if (right == false || left == false) {
    srcX = 0;
}
	ctx.drawImage(this.img,this.x, this.y);
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



Enemy.prototype.inside=function(shape){
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
	if(topRight&&bottomRight){
		this.x=shape_box.Xlow-this.width;
		this.vx*=-1;
		return true;
	}
	if(topLeft&&bottomLeft){
		this.x=shape_box.Xhigh-5;
		this.vx*=-1;
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
	
Enemy.prototype.Contains = function(x, y)
{
	if (x >= this.x && x <= this.x + this.width &&
		y >= this.y && y <= this.y + this.height)
		return true;
	else 
		return false;
}
