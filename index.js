$(document).ready(function(){
var balldirX=getRandomX();
var balldirY=getRandomY();
var v,tp,lft,ply1lft,ply2lft,rgt;
var p1,p2;

	
	$("#instruct").click(function(){
		clearInterval(v);
		document.removeEventListener("keydown", movement);
		$("#play").css("margin-top","2vh");
		$("#play").show();
		$("#main").css({"display":"block","margin-top":"5vh"});
		$("#instructions").css("display","block");
	});
	
	$("#close").click(function(){
		$("#play").show();
		$("#play").css("margin-top","30vh");
		$("#main").css("display","none");
	});
	
	$("#play").click(function(){
	
p1=prompt("Enter player 1 name");
p2=prompt("Enter player 2 name");
		$(this).hide();
		$("#instructions").css("display","none");
		document.addEventListener("keydown",movement);
		$("#main").css("display","block");
		$("#ball").css({left:"240px",top:"240px"});
		$("#player1,#player2").css("left","210px");
		
		v=setInterval(function(){
		$("#ball").animate({left:"+="+balldirX,top:"+="+balldirY},0);
		tp=$("#ball").css("top");
		
		//top/bottom border
		if(parseInt(tp)<=0||parseInt(tp)>=480){
		$("#play").show();
		$("#main").css("display","none");
		document.removeEventListener("keydown", movement);
		clearInterval(v);
		if(parseInt(tp)<=0)
			alert(p2+" wins");
		if(parseInt(tp)>=480)
			alert(p1+" wins");
		return false;
		}
		//bouncing left right
		lft=$("#ball").css("left");
		if(parseInt(lft)<12)
		balldirX=-balldirX;
		rgt=$("#ball").css("right");
		if(parseInt(rgt)<12)
		balldirX=-balldirX;
		
		ply1lft=$("#player1").css("left");
		if((parseInt(lft)>=(parseInt(ply1lft)-2)&&parseInt(lft)<=(parseInt(ply1lft)+82))&&parseInt(tp)<=32)
		balldirY=-balldirY;
		
		ply2lft=$("#player2").css("left");
		if((parseInt(lft)>=(parseInt(ply2lft)-2)&&parseInt(lft)<=(parseInt(ply2lft)+82))&&parseInt(tp)>=448)
		balldirY=-balldirY;
		
		},12);
		
	});
	function movement(e){
	if(e.which==37){
	var pos=$("#player2").css("left");
		if(parseInt(pos)>=20)
			$("#player2").animate({
            left: "-=2%"
        },10);
	}
    if(e.which==39){
	var pos=$("#player2").css("right");
		if(parseInt(pos)>=30)
			$("#player2").animate({
            left: "+=2%"
        },10);	
    }

		//player1
	if(e.which==65){
	var pos=$("#player1").css("left");
		if(parseInt(pos)>=20)
			$("#player1").animate({
            left: "-=2%"
        },10);
	}
    if(e.which==68){
	var pos=$("#player1").css("right");
		if(parseInt(pos)>=30)
			$("#player1").animate({
            left: "+=2%"
        },10);	
    }
}
function getRandomX(){
	var randomno=0;
		do {
			var max=2;
			var min=-2;
			randomno=Math.floor(Math.random() * (max - min + 1)) + min;
			
		}while(randomno==0);
		return randomno;
}
function getRandomY(){
	var randomno=0;
		do {
			var max=2;
			var min=-2;
			randomno=Math.floor(Math.random() * (max - min + 1)) + min;
			
		}while(randomno==0);
		return randomno;
}
});