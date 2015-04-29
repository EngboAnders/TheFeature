//core canvas and context stuff goes here
var canvas, ctx, fps = 90, start_step_in_time = 0, 
progress = 0, collected_time = 0, firstrun=true;
//height and width of the game surface
W = 900,//*/window.innerWidth-33, 
H = 650;//*/window.innerHeight-33;
// player stuff goes here! Such as speed, bouncability and such

//User
var backgroundMusic = new Audio("sound/Music.mp3");
var user;

// Layers
// background is for all fancy stuff you see in the distance
// gameground is where the player and all the obsticals are
// forground is where all the fancy stuff that is blockking your view are
var background, forground, gameground, menu, failureState;

var load = function(){
	canvas = document.getElementById('gameCanvas'); //get Canvas
	canvas.height = H; canvas.width = W;  			//set dimentions
	ctx = canvas.getContext('2d');					//get Context
	backgroundMusic.loop = true;
	backgroundMusic.play();
	
	background =  function(ctx){
		Background(ctx);
	};
	gameground = function(ctx){
		Gameground(ctx);
	};
	forground = function(ctx){
		Forground(ctx);
	};

	menu = function(ctx){
		SplashScreen(ctx);
	};


	failureState = function(ctx){
		FailureState(ctx);
	};

	if(firstrun){

		makelevels();
		window.addEventListener('click',clicked);

	};
	setInterval(function(){window.requestAnimationFrame(step);}, 1000/30);
	
};


function clicked(event){
	var mouse_x=event.clientX;
	var mouse_y=event.clienty;
	if(mouse_y<615&&mouse_y>583)
		mouse_collems(0);
	if(mouse_y<650&&mouse_y>620)
		mouse_collems(5);

	if(menu_instance){
		if(position_of_mouse.y>=265&&position_of_mouse.y<290)
			// console.log('new game')
			menu_instance=false;
		if(position_of_mouse.y>=290&&position_of_mouse.y<315)
			// console.log('save game')
			ctx.fillRect(0,280,W,30);
		if(position_of_mouse.y>=315&&position_of_mouse.y<340)
			// console.log('Credits')
			ctx.fillRect(0,305,W,30);
	};

	function mouse_collems(row){
		if(mouse_x<34&&mouse_x>0)			//0v6
			choose(0+row)
		else if(mouse_x<65&&mouse_x>36)		//1v7
			choose(1+row)
		else if(mouse_x<100&&mouse_x>68)	//2v8
			choose(2+row)
		else if(mouse_x<129&&mouse_x>102)	//3v9
			choose(3+row)
		else if(mouse_x<164&&mouse_x>131)	//4v10
			choose(4+row)
		else if(mouse_x<206&&mouse_x>166)	//5v11
			choose(5+row)
	};
	function choose(item_numb){
		localStorage.getItem("inventory");
	};
};
function shoot(){
	if(current_level)
		for(var i=0;current_level.guns.length>i;i++){
			current_level.guns[i].shoot();
		};
};


function update(){
	if(canvas!=null){
		// console.log(menu_instance);
		// console.log(failureStateBool);
		ctx.clearRect(0, 0, W, H);

		if (menu_instance == false&&failureStateBool == false) {

		 	//background(ctx);
		 	gameground(ctx);
		 	forground(ctx);
		}
		else if (failureStateBool) {
		 	forground(ctx);
		}
		else if (nxtLvlBool)
		{
			forground(ctx);
		}
		else{
			menu(ctx);
		};
	};
};

function step(step_in_time){
  	progress = step_in_time - start_step_in_time;
  	if(!menu_instance)
  		collected_time += progress;
  	// if(progress>0)
	  	update();
	start_step_in_time = step_in_time;
};

window.addEventListener('load', load, false);
//window.requestAnimationFrame(step);


