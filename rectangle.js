Rectangle = function(x, y, w, h)
{
	if (x == null || y == null || w == null || h == null)
	{
		alert("You must pass in all the veriables for a rectange: (x, y, width, height)");
		
		var errorMsg = "The following are not provided:";
		if (x == null)
			errorMsg += " 'x' ";
		if (y == null)
			errorMsg += " 'y' ";
		if (w == null)
			errorMsg += " 'width' ";
		if (h == null)
			errorMsg += " 'height'";
		
		alert(errorMsg);
		throw new Error(errorMsg);
	}
	this.image = new Image();
	this.image.src = 'imgs/note.PNG';
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