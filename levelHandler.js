//levels
var levels=[];
var Level = function(playerStartPosition){
	this.playerStartPosition 	= playerStartPosition;
	this.blocks  				= [];
	this.enemies 				= [];
	this.items 					= [];
	this.guns					= [];
	this.projectiles			= [];
	this.text_formel_array		= [];
	this.inputAmount			= 0;
	this.projectileFunction		= function(){};
	this.lvl_forground			= function(){};
	this.lvl_background			= function(){};
}
Level.prototype.getFormel=function(){
	var running_text_formel='';
	var choosen_items = JSON.parse(localStorage.getItem('choosenItems'));
	if(choosen_items)
		for(i=0;i<text_formel_array.length;i++){
			running_text_formel+=this.text_formel_array[i];
			if(choosen_items.length>i)
				running_text_formel+=choosen_items[i];
		}
	return running_text_formel;
}
Level.prototype.update = function(ctx){
	// this.lvl_background();
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
	// try{
		var i =0;
		while( i<this.projectiles.length){
			this.projectiles[i].update(ctx);
			i++
		}
	// }
	// catch(e){
	// 	console.log('making projectiles failed');
	// }
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
	// this.lvl_forground();
}

Level.prototype.firstDraw= function(){
	if(playerStartPosition)
		player.setPosition(this.playerStartPosition);
}
function makelevels(){}
	//test math path part
	var lvlTest=new Level({'x':10,'y':30});
	lvlTest.blocks.push(new Rectangle(50,0,70,650,imgs[26]))
	lvlTest.inputAmount=1;
	// lvlTest.projectileFunction=function(projectile){
	// 	projectile.a=JSON.parse(localStorage.getItem('choosenItems'))[0];
	// 	projectile.b=JSON.parse(localStorage.getItem('choosenItems'))[1];
	// 	projectile.x++;
	// 	x=Math.floor((projectile.x-projectile.startX)/10)<=0?1:x;
	// 	function_move=projectile.a+Math.pow(x,2)*projectile.b;
	// 	projectile.y=projectile.startY+function_move;
	// 	if(print)
	// 		console.log(projectile.x+":"+projectile.y);
	// }

	//
	// a = 2 
	// top gun
	//
	// lvlTest.inputAmount=1;
	// lvlTest.projectileFunction=function(projectile){
	// 	projectile.a=JSON.parse(localStorage.getItem('choosenItems'))[0];
	// 	// projectile.b=JSON.parse(localStorage.getItem('choosenItems'))[1];
	// 	projectile.x++;
	// 	// x=Math.floor((projectile.x-projectile.startX)/10)<=0?1:x;
	// 	projectile.y=(-21/10000)*Math.pow(projectile.x,2)+projectile.x*projectile.a+25;
	// 	// projectile.y=;
	// 	if(print)
	// 		console.log(projectile.x+":"+projectile.y);
	// }

	//
	// a = 7
	// mid gun
	//
	// lvlTest.inputAmount=1;
	// lvlTest.projectileFunction=function(projectile){
	// 	projectile.a=JSON.parse(localStorage.getItem('choosenItems'))[0];
	// 	projectile.b=JSON.parse(localStorage.getItem('choosenItems'))[1];
	// 	projectile.x++;
	// 	projectile.y=(projectile.a/6667)*Math.pow(projectile.x,2)-projectile.x+325;
	// 	if(print)
	// 		console.log(projectile.x+":"+projectile.y);
	// }

	// 
	// a = 4
	// low gun
	//
	lvlTest.inputAmount=1;
	lvlTest.projectileFunction=function(projectile){
		projectile.a=JSON.parse(localStorage.getItem('choosenItems'))[0];
		// projectile.b=JSON.parse(localStorage.getItem('choosenItems'))[1];
		projectile.x+=5;
		// x=Math.floor((projectile.x-projectile.startX)/10)<=0?1:x;
		projectile.y=(-projectile.a/33)*projectile.x+450;
		// projectile.y=projectile.startY+function_move;
		if(print)
			console.log(projectile.x+":"+projectile.y);
	}

	lvlTest.guns.push(new Canon(25,125)); //topgun :D
	lvlTest.guns.push(new Canon(25,275)); //midgun
	lvlTest.guns.push(new Canon(25,425)); //lowgun
	// levels.push(lvlTest);


	//lvl 0
	var lvl0=new Level({'x':10,'y':10});
	lvl0.enemies.push(new Enemy({'x':40,'y':10},{'x':400,'y':10},8,40));
	lvl0.lvl_background=function(){
		var layer_img=new Image();
		layer_img.src='imgs/layer consept.png';
		ctx.drawImage(layer_img,0,0,W,H,0,0,W,H);
	};
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
