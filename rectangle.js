var Rectangle = function(x, y,w,h,img)
{
	this.image = img;
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
Rectangle.prototype.Update=function(x,y){
	this.x=x;
	this.y=y;
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
///
/// item block
///
var item_table=[
	// {'value':0,'img':},//0
	// {'value':1,'img':},//1
	// {'value':2,'img':},//2
	// {'value':3,'img':},//3
	// {'value':4,'img':},//4
	// {'value':5,'img':},//5
	// {'value':6,'img':},//6
	// {'value':7,'img':},//7
	// {'value':8,'img':},//8
	// {'value':9,'img':},//9
	// {'value':'+','img':},//+
	// {'value':'-','img':},//-
	// {'value':'*','img':},//*
	// {'value':'/','img':},//divide
	// {'value':'sqroot','img':},//squareroot
	// {'value':'^2','img':},//^2
	// {'value':'cos','img':},//cos
	// {'value':'sin','img':},//sin
	// {'value':'tan','img':},//tan
	// {'value':'cos^-1','img':},//cos^-1
	// {'value':'sin^-1','img':},//sin^-1
	// {'value':'tan^-1','img':}//tan^-1
];
var Item = function(x,y,w,h,id){
	this.id=id;
	this.img=new Image();
	this.img.src = item_pics[id].img;
	this.value = item_table;
	this.x=x;
	this.y=y;
	this.current_bounce=0;
	this.max_bounce=5;
	this.up=true;
	this.box= new Rectangle(x,y,w,h,img)
}
Item.prototype.hitbox=function(){
	return this.box.hitbox();
}
Item.prototype.Draw = function(ctx){
	if(this.current_bounce=max_bounce)
		this.up=false;
	if(this.current_bounce=0)
		this.up=true;
	if(this.up)
		current_bounce++;
	else
		current_bounce--;

	this.box.Update(this.x, this.y+this.current_bounce)
	this.box.Draw(ctx);
}
Item.prototype.Contains = function(x,y){
	var bool=this.box.Contains(x,y);
	if(bool)
		this.pick_up_item();
	return bool;
}
Item.prototype.pick_up_item=function(){
	var inventory=JSON.parse(localStorage.getItem('inventory'));
	inventory.push(this.id);
	localStorage.setItem('inventory',JSON.stringify(inventory));
	current_level.items.splice(current_level.items.indexOf(this),1);
}
