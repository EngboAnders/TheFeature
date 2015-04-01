var particles = [];
var max_particles= 150;
var bool=true;
var size = 6;
var Background_instance=false;
var Particle = function(){
	this.speed = {};
	this.speed.x = 0;
	this.speed.y = Math.random()*2+2;
	this.x = Math.random()*canvas.width;
	this.y = 0;
	this.radius = 4;
	this.number_text='';
	for(i=0;i<15;i++)
		this.number_text+= Math.floor(Math.random()*2)+'\n\n';

};

Particle.prototype.render = function(){
	this.x += this.speed.x;
	this.y += this.speed.y;
	
	if(this.y > canvas.height+15*size*3){
		// console.log('here')
		particles.splice(particles.indexOf(this),1);
	}
	// ctx.fillRect(this.x, this.y, this.speed.y*size, this.speed.y*size);
	ctx.font = 'bold ' + this.speed.y*size +'px matrix';//*/+(this.speed.y*speed<9?'-webkit-text-stroke: 0.35px':"");
	ctx.fillStyle = '0 0 5px rgba(0,255,0,0.5)';
	for(i=0;i<this.number_text.length;i++)
		ctx.fillText(this.number_text.charAt(i),this.x,this.y-i*size)

		
};
var Background =function(ctx){
	if(Background_instance){
		if(particles.length<=max_particles&&bool){
			particles.push(new Particle);
			bool=false;
		}
		else{
			bool=true;
		}
		for (var i = 0; i < particles.length; i++) {
			// console.log('//////////')
			// console.log(particles[i])
			// console.log(particles)
			particles[i].render();
		}
	}
	else{
		//What ever you wanna do in the beginning
		Background_instance=true;
	}
	
};
