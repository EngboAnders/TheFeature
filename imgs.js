//imgs
	var imgs=[];
	var img_path_list=[
		"imgs/a rose rose is a rosed rose in a rose.png",
		"imgs/activityDiagramEnd.png",
		"imgs/activityDiagramStart.png",
		"imgs/aRoseIsARose.png",
		"imgs/association.png",
		"imgs/associationHorizontal.png",
		"imgs/decision.png",
		"imgs/dividers.png",
		"imgs/employee.png",
		"imgs/employeer.png",
		"imgs/hourglass.png",
		"imgs/inheritage.png",
		"imgs/measureOfUnit.png",
		"imgs/note.png",
		"imgs/order.png",
		"imgs/partOrder.png",
		"imgs/person.png",
		"imgs/product.png",
		"imgs/Rosed.png",
		"imgs/rumb.png",
		"imgs/teachesTo.png",
		"imgs/wooshSprite.png"
	];

// $.fn.preload = function() {
//     this.each(function(){
//     	console.log(this);
//         imgs.push(load_img(this));
//     });
// }
// $(img_path_list).preload();

while(img_path_list.length>0){
	var img = new Image();
	img.src=img_path_list.pop();
	imgs.push(img);
}
// var load_img =function(path){
// 	var img = new Image();
// 	img.src=path;
// 	return img;
// }
// function preload(arrayOfImages) {
//     $(arrayOfImages).each(function(){
//         // $('<img/>')[0].src = this;
//         // Alternatively you could use:
//         var img = new Image;
//         img.src = this;
//         imgs.push(img);
//     });
// }

// function getMeta(url){
// 	var h,w,img;
//   	$("<img/>").attr("src", url).load(function(){
//      // s = {w:this.width, h:this.height};
//      console.log(this);
//      h=this.height;
//      w=this.width;
//      img=this;
//      // alert(s.w+' '+s.h);      
//   	}); 
//   	console.log({img:img,h:h,w:w});
//   	return {img:img,h:h,w:w};
// }

// Usage:

// preload(img_path_list);