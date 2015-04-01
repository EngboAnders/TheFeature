//levels
var levels=[];
var Level = function(playerStartPosition, id){
	this.id						= id;
	this.playerStartPosition 	= playerStartPosition;
	this.blocks  				= [];
	this.enemies 				= [];
	this.items 					= [];
}
Level.prototype.update = function(ctx){
	// console.log('updateing lvl');
	try{
		for(var element in this.blocks)
			this.blocks[element].Draw();
	}
	catch(e)
	{
		// console.log('making blocks failed');
	}
	// try{
	// 	this.enemies.forEach(this.update());
	// }
	// catch(e)
	// {
	// 	console.log('making enemies failed');
	// }
	// try{
	// 	this.items.forEach(this.update());
	// }
	// catch(e)
	// {
	// 	console.log('making items failed');
	// }
}
Level.prototype.firstDraw= function(){
	player.setPosition(this.playerStartPosition);
}

//lvl0
var lvl0=new Level({'x':10,'y':10});
lvl0.blocks.push(new Rectangle(30,30,20,20));
levels.push(lvl0);