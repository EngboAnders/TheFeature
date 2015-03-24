			var canvas, ctx, interval, particles = [];
			var size = 6;
			var Particle = function(){
				this.speed = {};
				this.speed.x = 0;
				this.speed.y = Math.random()*2+2;
				this.x = Math.random()*canvas.width;
				this.y = 0	;
				this.radius = 4;
				this.number = Math.floor(Math.random()*2);

			};
			
			Particle.prototype.render = function(){
				this.x += this.speed.x;
				this.y += this.speed.y;
				
				if(this.y > canvas.height+50){
					console.log('here')
					particles.splice(particles.indexOf(this),1);
				}
				//ctx.fillRect(this.x, this.y, this.speed.y*size, this.speed.y*size	);
				ctx.font = 'bold ' + this.speed.y*size +'px matrix';

				ctx.fillText(this.number,this.x,this.y)
			
				ctx.fillStyle = 'green';	
			};

			var addParticle = function(){
				particles.push(new Particle);
				
			};

			var update = function(){
				addParticle();
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				
				for (var i = 0; i < particles.length; i++) {
					particles[i].render();
				}
				
			};

			window.addEventListener('load', function() {
				canvas = document.getElementById("canvas");

				if (canvas.getContext) {
					ctx = canvas.getContext("2d");
					interval =  setInterval(update, 20);
				}
			}, false);