//player physics
var print=false;
var last_time, speed=12, slowing_speed = 0.9, speed_up=5, bounceFactor = 0.01, gravity=9.3;

var player_w = 34, player_h = 36, srcX = 0, srcY = 0, animate_right=true;

var Player = function(position) {
	this.img = new Image();
	this.img.src = 'sprite-player.png';
	this.x= position.x;
	this.y= position.y;
	this.vx=0;
	this.vy=0;
	this.width= 20;
	this.height= 35;
	this.grounded = false;
	this.oldX;
	this.oldY;
	this.update_move=true;

};
Player.prototype.hitbox=function(){
	return {
		'Xlow':this.x+6, 
		'Ylow':this.y, 
		'Xhigh':this.x+this.width, 
		'Yhigh':this.y+this.height
	};
}
Player.prototype.update = function(current_level){
	this.render();
	this.update_move=true;
	var onGround=-1;
	
	this.oldY=this.y;
	this.oldX=this.x;
	
	if(!this.grounded&&!up){
		this.vy += gravity*(progress/100);
	}
	
	if(this.hitbox().Yhigh >= H - 93) {
		onGround++;
		this.y = H - 93 - this.height;
		this.vy *= -bounceFactor;
	}
	if(this.hitbox().Xhigh >= W-5) {
		this.x = W - this.width-5;
		this.vx *= -bounceFactor;
	}
	if(this.hitbox().Ylow <= 0) {
		if(!up)
			this.update_move=false;
		if(this.y==0)
			this.y=5;
		else
			this.y = 0;
		this.vy *= -bounceFactor;
	}
	if(this.hitbox().Xlow <= 0) {
		this.x = -5;
		this.vx *= -bounceFactor;
	}

	if (up)//w
		this.vy-=speed_up*(progress/100);
	if (down)//s
		this.vy+=speed_up*(progress/100);
	if (left)//a
		this.vx-=speed*(progress/100);
	if (right)//d
		this.vx+=speed*(progress/100);
 
	// stuff
	var i = 0;
	this.grounded=false;
	while(i<current_level.blocks.length){
		if(this.inside(current_level.blocks[i],onGround))
			this.grounded=true;
		i++;
	}

	for(var enemy in current_level.enemies)
		this.inside(current_level.enemies[enemy]);
	for(var item in current_level.items)
		this.inside(current_level.items[item]);
	for(var gun in current_level.guns)
		this.inside(current_level.guns[gun]);

	// this.vy *= slowing_speed;
	if(!left&&!right)
		this.vx *= slowing_speed;

	if(print){
		console.log(this.update_move);
		console.log(this.x);
		console.log(this.y);
	}

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
	// if(Math.floor(collected_time/1000)!=last_time){
		
		if (right) {
		    srcX = ((animate_right)?srcX + 34:srcX - 34);
			srcY = 36;
			if(srcX>68-34)
				animate_right=false;
			if(srcX<34)
				animate_right=true;
		} else if (left) {
		    srcX = ((animate_right)?srcX + 34:srcX - 34);
			srcY = 72;
			if(srcX>68-34)
				animate_right=false;
			if(srcX<34)
				animate_right=true;
		} else {
		    srcX = ((animate_right)?srcX + 34:srcX - 34);
			srcY = 0;
			if(srcX>102-34)
				animate_right=false;
			if(srcX<34)
				animate_right=true;
		}
	// }
	ctx.drawImage(this.img,srcX,srcY,player_w,player_h,player.x,player.y,player_w,player_h);	
	
} 

Player.prototype.inside=function(shape){
	// console.log(shape);
	// this.Intersects = function(shape)
	var hit_box=this.hitbox();
	var shape_box = shape.hitbox();
	var topLeft=false;
	var topRight=false;
	var bottomLeft=false;
	var bottomRight=false;
	// console.log(shape);
	//checks for corners
	if (shape.contains(hit_box.Xlow , hit_box.Ylow ))
		topLeft=true; 
	if(shape.contains(hit_box.Xhigh , hit_box.Ylow ))
		topRight=true;
	if(shape.contains(hit_box.Xlow , hit_box.Yhigh ))
		bottomLeft=true;
	if(shape.contains(hit_box.Xhigh , hit_box.Yhigh ))
		bottomRight=true;

	if(topLeft&&print)
		console.log('topLeft')
	if(topRight&&print)
		console.log('topRight')
	if(bottomLeft&&print)
		console.log('bottomLeft')
	if(bottomRight&&print)
		console.log('bottomRight')

	//sides touches
	if(topRight&&topLeft&&bottomRight&&bottomLeft){
		this.vy=0;
		this.y=shape_box.Ylow;
	}

	if(bottomLeft&&bottomRight){
		this.y=shape_box.Ylow-this.height;
		// this.vy *= -bounceFactor;
		if(this.vy>0)
			this.vy=0;
		return true;
	}
	if(topRight&&bottomRight){
		this.x=shape_box.Xlow-this.width;
		if(this.vx>0)
			this.vx=0;
		return false;
	}
	if(topLeft&&bottomLeft){
		this.x=shape_box.Xhigh-5;
		if(this.vx<0)
			this.vx=0;
		return false;
	}
	if(topLeft&&topRight){
		this.y=shape_box.Yhigh+5;
		if(this.vy<0)
			this.vy=0;
		return false;
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
			this.oldY=shape_box.Ylow-this.height
			// this.oldX++;
			// this.oldY--;
			// if(this.vx<0)
			// 	this.vx=0;
			if(this.vy>0)
				this.vy=0;
		}
		if(bottomRight){
			this.oldY=shape_box.Ylow-this.height
			// this.oldX--;
			// this.oldY--;
			// if(this.vx>0)
			// 	this.vx=0;
			if(this.vy>0)
				this.vy=0;
		}
		this.x=this.oldX;
		this.y=this.oldY;
		
		return true;
	}
	
	return false;
};
	
Player.prototype.contains = function(x, y){
	if (x >= this.x && x <= this.x + this.width &&
		y >= this.y && y <= this.y + this.height)
		return true;
	else 
		return false;
}


