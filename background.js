var particles = [];
var size = 6;
var Background_instance=false;
var Particle = function(){
	this.speed = {};
	this.speed.x = 0;
	this.speed.y = Math.random()*2+2;
	this.x = Math.random()*canvas.width;
	this.y = 0;
	this.radius = 4;
	this.number = Math.floor(Math.random()*2);

};

Particle.prototype.render = function(){
	this.x += this.speed.x;
	this.y += this.speed.y;
	
	if(this.y > canvas.height+50){
		// console.log('here')
		particles.splice(particles.indexOf(this),1);
	}
	// ctx.fillRect(this.x, this.y, this.speed.y*size, this.speed.y*size);
	ctx.font = 'bold ' + this.speed.y*size +'px matrix';
	ctx.fillStyle = 'green';
	ctx.fillText(this.number,this.x,this.y)

		
};
var Background =function(ctx){
	if(Background_instance){
		particles.push(new Particle);
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
