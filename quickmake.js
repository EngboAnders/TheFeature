//core canvas and context stuff goes here
var canvas, ctx, fps = 90, start_step_in_time = 0, 
progress = 0, collected_time = 0,
//height and width of the game surface
W = window.innerWidth-33, H = window.innerHeight-33;
// player stuff goes here! Such as speed, bouncability and such


// Layers
// background is for all fancy stuff you see in the distance
// gameground is where the player and all the obsticals are
// forground is where all the fancy stuff that is blockking your view are
var background, forground, gameground;

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

};

function clearCanvas() {
	ctx.clearRect(0, 0, W, H);
};

function update(){
	if(canvas!=null){
		clearCanvas();
		background(ctx);
		gameground(ctx);
		forground(ctx);
	}
};

function step(step_in_time){
  	progress = step_in_time - start_step_in_time;
  	collected_time += progress;
  	// if(progress>0)
	  	update(progress);
	start_step_in_time = step_in_time;
  	window.requestAnimationFrame(step);
};
window.addEventListener('load', load, false);
window.requestAnimationFrame(step);