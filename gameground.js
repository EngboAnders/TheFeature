//gameground 
//elements
var player=null,
//movement checks
up = false, down = false, left = false, right = false;
var Gameground_instance= false;
var current_level=null;

var Gameground =function(ctx){
	if(Gameground_instance){
		//level
		if(current_level!=null){
			current_level.update(ctx);
		}
		//player
		if(player!=null){
			player.update(current_level);
			// player.render();
		}
	}
	//
	else{
		//What ever you wanna do in the beginning
		// player = new Player({'x':10,'y':10})
		window.addEventListener('keydown', doKey);
		window.addEventListener('keyup', doKey);

		if(current_level==null)
			current_level = levels[0];
		player=new Player(current_level.playerStartPosition)

		Gameground_instance=true;
	}
};

var getAllFilesInFolder = function(dir){
	var filesystem = require("fs");
    var results = [];
    filesystem.readdirSync(dir).forEach(function(file) {
        file = dir+'/'+file;
        var stat = filesystem.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);
    });
    return results;
}

function doKey(e){
	// console.log(e);
	if (e.keyCode == 87) //w
		up=((e.type=="keydown") ? true : false);
	if (e.keyCode == 83) //s
		down=((e.type=="keydown") ? true : false);
	if (e.keyCode == 65) //a
		left=((e.type=="keydown") ? true : false);
	if (e.keyCode == 68)//d
		right=((e.type=="keydown") ? true : false);
};