var Rectangle = function(x, y,w,h,img)
{
	// if (x == null || y == null || w == null || h == null)
	// {
	// 	alert("You must pass in all the veriables for a rectange: (x, y, width, height)");
		
	// 	var errorMsg = "The following are not provided:";
	// 	if (x == null)
	// 		errorMsg += " 'x' ";
	// 	if (y == null)
	// 		errorMsg += " 'y' ";
	// 	if (w == null)
	// 		errorMsg += " 'width' ";
	// 	if (h == null)
	// 		errorMsg += " 'height' ";
		
	// 	alert(errorMsg);
	// 	throw new Error(errorMsg);
	// }
	// var ww;
	// var hh;
	// var meta = getMeta(img);
	this.image = img;
	// // img.onload=function(){ww=this.width;hh=this.height;}
	// console.log(this.image);
	// console.log("w:"+meta.w);
	// console.log("h:"+meta.h);
	// this.image.src = 'imgs/note.PNG';
	this.x		= x;
	this.y		= y;
	this.width	= w;
	this.height	= h;
};

Rectangle.prototype.hitbox=function(){
	return {
		'Xlow':this.x, 
		'Ylow':this.y, 
		'Xhigh':this.x+this.width, 
		'Yhigh':this.y+this.height
	};
}

Rectangle.prototype.Draw = function(ctx){
	ctx.drawImage(this.image, this.x, this.y);
}

Rectangle.prototype.Contains = function(x, y)
{
	if (x >= this.x && x <= this.x + this.width &&
		y >= this.y && y <= this.y + this.height)
		return true;
	else 
		return false;
}
///
///  New level block
///

var NewLvlRectangle = function(x, y, w,h, img, level_going_to, player_new_position){
	this.box = new Rectangle(x,y,w,h,img);
	this.level_going_to=level_going_to;
	this.player_new_position=player_new_position;
}
NewLvlRectangle.prototype.hitbox=function(){
	return this.box.hitbox();
}
NewLvlRectangle.prototype.Draw = function(ctx){
	this.box.Draw(ctx);
}
NewLvlRectangle.prototype.Contains = function(x,y){
	var bool=this.box.Contains(x,y);
	if(bool)
		this.NextLevel();
}
NewLvlRectangle.prototype.NextLevel= function(){
	current_level=levels[this.level_going_to];
	player.setPosition(this.player_new_position);
}

