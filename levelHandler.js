//levels
var levels=[];
var Level = function(playerStartPosition){
	this.playerStartPosition 	= playerStartPosition;
	this.blocks  				= [];
	this.enemies 				= [];
	this.items 					= [];
}
Level.prototype.update = function(ctx){
	// console.log('updateing lvl');
	try{
		// console.log(this.blocks.length);
		var i =0;
		while( i<this.blocks.length){
			// console.log(this.blocks[i]);
			this.blocks[i].Draw(ctx);
			
			i++
		}
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
	if(playerStartPosition)
		player.setPosition(this.playerStartPosition);
}

// $(function(){
	// PreloadImgs();
	//lvl0
	var lvl0=new Level({'x':10,'y':10});
	lvl0.blocks.push(new Rectangle(40,40,150,82,imgs[8]));
	lvl0.blocks.push(new NewLvlRectangle(500,500,150,82,imgs[8],1,{'x':10,'y':10}))
	levels.push(lvl0);

	//lvl1
	var lvl1= new Level();
	lvl1.blocks.push(new Rectangle(400,400,150,82,imgs[8]));
	levels.push(lvl1);
// })

