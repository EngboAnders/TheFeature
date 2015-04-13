//menu
var splashScreen = true;
var mainMenu_instance = null;

var SplashScreen = function(ctx){
	if (splashScreen == true) {

		window.addEventListener('click', function(){
		canvas = document.getElementById('gameCanvas');
		ctx = canvas.getContext('2d');
		canvas.clear();
		});
		
		splashScreen = false;
	}
}
