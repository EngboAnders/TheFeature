//imgs
var imgs=[];
var img_path_list=[
	'imgs/blankIcon.png',//27
	'imgs/blokker1.png',//26
	"imgs/mand3.png",//25
	"imgs/mand2.png",//24
	"imgs/a rose rose is a rosed rose in a rose.png",//23
	"imgs/activityDiagramEnd.png",//22
	"imgs/activityDiagramStart.png",//21
	"imgs/aRoseIsARose.png",//20
	"imgs/association.png",//19
	"imgs/associationHorizontal.png",//18
	"imgs/decision.png",//17
	"imgs/dividers.png",//16
	"imgs/employee.png",//15
	"imgs/employeer.png",//14
	"imgs/hourglass.png",//13
	"imgs/inheritage.png",//12
	"imgs/measureOfUnit.png",//11
	"imgs/note.png",//10
	"imgs/order.png",//9
	"imgs/partOrder.png",//8
	"imgs/person.png",//7
	"imgs/product.png",//6
	"imgs/Rosed.png",//5
	"imgs/rumb.png",//4
	"imgs/teachesTo.png",//3
	"imgs/wooshSprite.png",//2
	"imgs/blok-buttom-dark-kant-don.png",//1
	"imgs/pil.png"//0
];
while(img_path_list.length>0){
	var img = new Image();
	img.src=img_path_list.pop();
	imgs.push(img);
};