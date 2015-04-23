//levels
var levels=[];
var Level = function(playerStartPosition){
	this.playerStartPosition 	= playerStartPosition;
	this.blocks  				= [];
	this.enemies 				= [];
	this.items 					= [];
	this.guns					= [];
	this.projectiles			= [];
	this.projectileFunction		= function(){};
	this.lvl_forground			= function(){};
	this.lvl_background			= function(){};
}

Level.prototype.update = function(ctx){
	this.lvl_background();
	try{
		var i =0;
		while( i<this.blocks.length){
			this.blocks[i].draw(ctx);
			i++
		}
	}
	catch(e){
		console.log('making blocks failed');
	}
	try{
		var i =0;
		while( i<this.enemies.length){
			this.enemies[i].update(ctx,this);
			i++
		}
	}
	catch(e){
		console.log('making enemies failed');
	}
	try{
		var i =0;
		while( i<this.items.length){
			this.items[i].draw(ctx);
			i++
		}
	}
	catch(e){
		console.log('making items failed');
	}
	try{
		var i =0;
		while( i<this.projectiles.length){
			this.projectiles[i].update(ctx);
			i++
		}
	}
	catch(e){
		console.log('making projectiles failed');
	}
	try{
		var i =0;
		while( i<this.guns.length){
			var newbullet=null;
			newbullet=this.guns[i].draw(ctx);
			if(newbullet)
				projectiles.push(newbullet);
			i++
		}
	}
	catch(e){
		console.log('making guns failed');
	}
	this.lvl_forground();
}

Level.prototype.firstDraw= function(){
	if(playerStartPosition)
		player.setPosition(this.playerStartPosition);
}

//test math path part
var lvlTest=new Level({'x':10,'y':30});
lvlTest.blocks.push(new Rectangle(50,0,70,650,imgs[26]))
lvlTest.projectileFunction=function(projectile){
	this.oldX=projectile.x;
	this.oldY=projectile.y;
	this.a=JSON.parse(localStorage.getItem('choosenItems'))[0];
	this.b=JSON.parse(localStorage.getItem('choosenItems'))[1];
	projectile.x++;
	projectile.y=projectile.startY+this.a+(projectile.x-projectile.startX)*this.b;
}
lvlTest.guns.push(new Canon(25,125));
lvlTest.guns.push(new Canon(25,225));
lvlTest.guns.push(new Canon(25,425));
levels.push(lvlTest);

//lvl 0
var lvl0=new Level({'x':10,'y':10});
lvl0.enemies.push(new Enemy({'x':40,'y':10},{'x':400,'y':10},8,40));
lvl0.blocks.push(new Rectangle(170,538,503,93,imgs[1]));
lvl0.blocks.push(new Rectangle(39,235,142,323,imgs[24]));
lvl0.blocks.push(new Rectangle(654,235,142,323,imgs[25]));
lvl0.items.push(new Item(650,400,2));
lvl0.blocks.push(new NewLvlRectangle(552,270,150,82,imgs[10],1,{'x':10,'y':10}))
levels.push(lvl0);

//lvl 1
var lvl1= new Level();
lvl1.blocks.push(new Rectangle(400,400,150,82,imgs[10]));
levels.push(lvl1);
//lvl 2
var lvl2= new Level();
lvl2.blocks.push(new Rectangle(50,50,96,95,imgs[17]));
levels.push(lvl2);