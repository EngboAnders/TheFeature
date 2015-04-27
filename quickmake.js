//core canvas and context stuff goes here
var canvas, ctx, fps = 90, start_step_in_time = 0, 
progress = 0, collected_time = 0, firstrun=true;
//height and width of the game surface
W = 900,//*/window.innerWidth-33, 
H = 650;//*/window.innerHeight-33;
// player stuff goes here! Such as speed, bouncability and such

//User

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
	background =  function(ctx){
		Background(ctx);
	};
	gameground = function(ctx){
		Gameground(ctx);
	}
	forground = function(ctx){
		Forground(ctx);
	}

	menu = function(ctx){
		SplashScreen(ctx);
	}

	failureState = function(ctx){
		FailureState(ctx);
	}

	if(firstrun){
		makelevels();
		window.addEventListener('click',shoot);

	}
	setInterval(function(){window.requestAnimationFrame(step);}, 50);
	
};
function shoot(){
	if(current_level)
		for(var i=0;current_level.guns.length>i;i++){
			current_level.guns[i].shoot();
		};
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
	}
}

function clearCanvas() {
	ctx.clearRect(0, 0, W, H);
};

function update(){
	if(canvas!=null){
		// console.log(menu_instance);
		// console.log(failureStateBool);
		clearCanvas();

		if (menu_instance == false&&!failureStateBool) {

		 	background(ctx);
		 	gameground(ctx);
		 	forground(ctx);
		}
		else{
			menu(ctx);
		}
	}
};

function step(step_in_time){
  	progress = step_in_time - start_step_in_time;
  	collected_time += progress;
  	// if(progress>0)
	  	update();
	start_step_in_time = step_in_time;
};

window.addEventListener('load', load, false);
//window.requestAnimationFrame(step);


