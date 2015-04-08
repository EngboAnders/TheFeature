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
		var i =0;
		while( i<this.enemies.length){
			// console.log(this.blocks[i]);
			this.enemies[i].update(ctx,this);
			
			i++
		}
	// // }
	// catch(e)
	// {
	// 	console.log('making enemies failed');
	// }
	try{
		var i =0;
		while( i<this.items.length){
			// console.log(this.blocks[i]);
			this.items[i].update(ctx);
			
			i++
		}
	}
	catch(e)
	{
		console.log('making items failed');
	}
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
	lvl0.blocks.push(new NewLvlRectangle(500,500,150,82,imgs[8],1,{'x':10,'y':10}));
	lvl0.enemies.push(new Enemy({'x':40,'y':10},{'x':400,'y':10},80,40));


//top
	//note
	lvl0.blocks.push(new Rectangle(25,70,150,82,imgs[8]));
	//decision
	lvl0.blocks.push(new Rectangle(800,70,96,95,imgs[15]));
	//dividers
	lvl0.blocks.push(new Rectangle(672,70,113,103,imgs[14]));
	//employee
	lvl0.blocks.push(new Rectangle(556,70,103,103,imgs[13]));
	//teachesTo
	lvl0.blocks.push(new Rectangle(313 ,70,231,108,imgs[1]));
	//activityDiagramStart
	lvl0.blocks.push(new Rectangle(187,70,113,122,imgs[19]));
	
//middel
	//rosed
	lvl0.blocks.push(new Rectangle(270,250,347,158,imgs[3]));
	//rump
	lvl0.blocks.push(new Rectangle(650,452,161,92,imgs[2]));
	//employeer
	lvl0.blocks.push(new Rectangle(110,443,103,103,imgs[12]));
	//hourglass
	lvl0.blocks.push(new Rectangle(800,300,84,124,imgs[11]));

//buttom
	//inheritage
	lvl0.blocks.push(new Rectangle(50,545,103,103,imgs[10]));
	//measureOfUnit
	lvl0.blocks.push(new Rectangle(163,545,103,103,imgs[9]));
	//order
	lvl0.blocks.push(new Rectangle(266,545,103,103,imgs[7]));
	//partorder
	lvl0.blocks.push(new Rectangle(370,545,103,103,imgs[6]));
	//Person
	lvl0.blocks.push(new Rectangle(475,545,103,103,imgs[5]));
	//product
	lvl0.blocks.push(new Rectangle(580,545,103,103,imgs[4]));
	

	// lvl0.blocks.push(new Rectangle(540,545,150,82,imgs[4]));
	// lvl0.blocks.push(new Rectangle(640,545,150,82,imgs[3]));
	// lvl0.blocks.push(new Rectangle(740,545,150,82,imgs[2]));
	// lvl0.blocks.push(new Rectangle(840,545,150,82,imgs[1]));
	// lvl0.blocks.push(new Rectangle(40,545,150,82,imgs[0]));
	// lvl0.blocks.push(new Rectangle(20,545,150,82,imgs[1]));

	// note to next level
	lvl0.blocks.push(new NewLvlRectangle(750,555,150,82,imgs[8],1,{'x':10,'y':10}))

	levels.push(lvl0);

	//lvl1
	var lvl1= new Level();
	lvl1.blocks.push(new Rectangle(400,400,150,82,imgs[8]));
	levels.push(lvl1);
// 
	//lvl2
	var lvl2= new Level();
	//decision
	lvl2.blocks.push(new Rectangle(50,50,96,95,imgs[15]));
	levels.push(lvl2);
// })

