//imgs
	var imgs=[];
	var img_path_list=[
		//24
		"imgs/mand3.png",
		//23
		"imgs/mand2.png",
		//22
		"imgs/a rose rose is a rosed rose in a rose.png",
		//21
		"imgs/activityDiagramEnd.png",
		//20
		"imgs/activityDiagramStart.png",
		//19
		"imgs/aRoseIsARose.png",
		//18
		"imgs/association.png",
		//17
		"imgs/associationHorizontal.png",
		//16
		"imgs/decision.png",
		//15
		"imgs/dividers.png",
		//14
		"imgs/employee.png",
		//13
		"imgs/employeer.png",
		//12
		"imgs/hourglass.png",
		//11
		"imgs/inheritage.png",
		//10
		"imgs/measureOfUnit.png",
		//9
		"imgs/note.png",
		//8
		"imgs/order.png",
		//7
		"imgs/partOrder.png",
		//6
		"imgs/person.png",
		//5
		"imgs/product.png",
		//5
		"imgs/Rosed.png",
		//4
		"imgs/rumb.png",
		//3
		"imgs/teachesTo.png",
		//2
		"imgs/wooshSprite.png",
		//1
		"imgs/blok-buttom-dark-kant-don.png",
		//0

		"imgs/pil.png"

		
		
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