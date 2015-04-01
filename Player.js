//player physics
var speed=6, slowing_speed = 0.9, bounceFactor = 0.3, gravity=9.3;

var player_w = 22, player_h = 66, srcX = 10, srcY = 0;

var Player = function(position) {
	this.img = new Image();
	this.img.src = 'playerSprite.png';
	this.x= position.x;
	this.y= position.y;
	this.vx=0;
	this.vy=0;
	this.width= 20;
	this.height= 30;
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
	this.vy *= slowing_speed;
	this.vx *= slowing_speed;
	
	var oldY=this.y;
	if(!this.grounded){
		// this.vy += gravity*(progress/100);
		this.y += this.vy;
		
	}

	
	
	
	
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
	var i = 0;
	var collide_i=-1;
	while(i<current_level.blocks.length){
	// for(var block in current_level.blocks)
	var oldGround=onGround;
		onGround=this.collide(current_level.blocks[i],onGround);
		if(oldGround!=onGround)
			collide_i=i;
		i++;
	}
	if(onGround>-1){
		this.y=oldY;
		if(this.y>current_level.blocks[collide_i].hitbox().Yhigh&&
		   this.hitbox().Yhigh>current_level.blocks[collide_i].hitbox().Yhigh)
			this.y=current_level.blocks[collide_i].hitbox().Yhigh+1;
		this.grounded=true;
	}
	else
		this.grounded=false;
	for(var enemy in current_level.enemies)
		this.collide(current_level.enemies[enemy]);
	for(var item in current_level.items)
		this.collide(current_level.items[item]);

	this.x += this.vx*(progress/1000)*3;

	this.render();
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

Player.prototype.collide=function(block, onGround){
	// console.log(this.hitbox());
	// console.log(block.hitbox());
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
	var topLeft=false;
	var topRight=false;
	var bottomLeft=false;
	var bottomRight=false;
	
	if (shape.Contains(hit_box.Xlow , hit_box.Ylow ))
		topLeft=true; 
	if(shape.Contains(hit_box.Xhigh , hit_box.Ylow ))
		topRight=true;
	if(shape.Contains(hit_box.Xlow , hit_box.Yhigh ))
		bottomLeft=true;
	if(shape.Contains(hit_box.Xhigh , hit_box.Yhigh ))
		bottomRight=true;
	if(topRight&&bottomRight||topLeft&&bottomLeft)
		this.vx*=-1;
	if(topLeft||topRight||bottomLeft||bottomRight)
		return true;
	
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


