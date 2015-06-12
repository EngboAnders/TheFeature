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
		for(i=0;i<this.text_formel_array.length;i++){
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
	lvl0.lvl_background=function(){
		var layer_img=new Image();
		layer_img.src='imgs/layer consept.png';
		ctx.drawImage(layer_img,0,0,W,H,0,0,W,H);
	};
	lvl0.enemies.push(new Enemy({'x':40,'y':10},{'x':400,'y':10},8,40));
	lvl0.blocks.push(new Rectangle(170,538,503,93,imgs[1]));
	lvl0.blocks.push(new Rectangle(39,235,142,323,imgs[24]));
	lvl0.blocks.push(new Rectangle(654,235,142,323,imgs[25]));
	lvl0.items.push(new Item(650,400,2));
	lvl0.blocks.push(new NewLvlRectangle(552,270,150,82,imgs[10],1,{'x':10,'y':10}))
	levels.push(lvl0);

	//lvl 1
	var lvl1= new Level({'x':10,'y':10});

	lvl1.blocks.push(new Rectangle(400,400,150,82,imgs[10]));//Note
	lvl1.blocks.push(new Rectangle(290,325,20,120,imgs[30]));//createsToNovel
	lvl1.blocks.push(new Rectangle(590,355,20,120,imgs[30]));//line
	lvl1.blocks.push(new Rectangle(370,110,160,20,imgs[29]));//line
    lvl1.blocks.push(new Rectangle(570,137,20,120,imgs[30]));//line
	lvl1.blocks.push(new Rectangle(350,462,260,20,imgs[31]));//buysNovel
	lvl1.blocks.push(new Rectangle(200,225,175,100,imgs[32]));//consumer
	lvl1.blocks.push(new Rectangle(210,60,175,100,imgs[33]));//writer
	lvl1.blocks.push(new Rectangle(480,256,175,100,imgs[34]));//novel
	lvl1.blocks.push(new Rectangle(530,85,102,52,imgs[35]));//creates
	lvl1.blocks.push(new Rectangle(250,445,100,53,imgs[36]));//Buys
	lvl1.blocks.push(new NewLvlRectangle(360,30,150,82,imgs[10],2,{'x':10,'y':10}))
	lvl1.blocks.push(new Rectangle(400,400,150,82,imgs[10]));
	lvl1.text_formel_array.push('(');
	lvl1.text_formel_array.push('/6667)*x^2-x+325');

	levels.push(lvl1);

	//lvl 2
	var lvl2= new Level({'x':10,'y':10});
	lvl2.enemies.push(new Enemy({'x':40,'y':10},{'x':400,'y':10},8,40));
	lvl2.enemies.push(new Enemy({'x':540,'y':50},{'x':500,'y':500},5,40));
	lvl2.enemies.push(new Enemy({'x':40,'y':500},{'x':500,'y':500},5,40));
	lvl2.items.push(new Item(315,310,4));
	lvl2.items.push(new Item(435,180,5));
	lvl2.blocks.push(new NewLvlRectangle(360,30,150,82,imgs[10],3,{'x':10,'y':10}))

	lvl2.blocks.push(new Rectangle(350,115,176,56,imgs[43]));//Cup
	lvl2.blocks.push(new Rectangle(480,175,50,74,imgs[42]));//cup-teacup
	lvl2.blocks.push(new Rectangle(380,175,50,74,imgs[42]));//cup-coffeecup
	lvl2.blocks.push(new Rectangle(250,307,50,130,imgs[41]));//coffeemcup-coffeemug
	lvl2.blocks.push(new Rectangle(350,307,50,130,imgs[41]));//CoffeeCup-EspressoCup
	lvl2.blocks.push(new Rectangle(480,250,176,56,imgs[40]));//Teacup
    lvl2.blocks.push(new Rectangle(350,437,176,56,imgs[39]));//Espressocup
	lvl2.blocks.push(new Rectangle(130,437,176,56,imgs[38]));//Coffeemug
	lvl2.blocks.push(new Rectangle(250,248,176,56,imgs[37]));//Coffeecup
	levels.push(lvl2);


//lvl 
	var lvl3= new Level({'x':10,'y':10});
	lvl3.enemies.push(new Enemy({'x':536,'y':18},{'x':806,'y':113},8,40));
	lvl3.enemies.push(new Enemy({'x':498,'y':311},{'x':829,'y':485},5,40));
	// lvl3.enemies.push(new Enemy({'x':40,'y':500},{'x':500,'y':500},5,40));
	// lvl3.items.push(new Item(315,280,4));
	lvl3.items.push(new Item(435,150,5));
	lvl3.blocks.push(new NewLvlRectangle(360,30,150,82,imgs[10],4,{'x':10,'y':10}))

	lvl3.blocks.push(new Rectangle(200,150,193,102,imgs[44]));//Person2
	lvl3.blocks.push(new Rectangle(90,380,167,89,imgs[45]));//Student
	lvl3.blocks.push(new Rectangle(300,325,176,56,imgs[46]));//Staff
	lvl3.blocks.push(new Rectangle(600,170,161,128,imgs[47]));//Address
	lvl3.blocks.push(new Rectangle(395,180,206,60,imgs[48]));//PersonToAddress
	lvl3.blocks.push(new Rectangle(200,250,50,130,imgs[49]));//StudentToPerson
	lvl3.blocks.push(new Rectangle(325,250,50,74,imgs[50]));//ProfessorToPerson
	lvl3.blocks.push(new Rectangle(100,20,176,56,imgs[51]));//Human
	lvl3.blocks.push(new Rectangle(200,78,50,74,imgs[50]));//Lillepil Human
	lvl3.blocks.push(new Rectangle(380,380,50,74,imgs[50]));//Staff pil
	lvl3.blocks.push(new Rectangle(330,454,176,56,imgs[52]));;//professor
	levels.push(lvl3);