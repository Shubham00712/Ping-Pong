$(document).ready(function(){
var check;
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
		check=0;
		$("#main").css("display","block");
		$("#ball").css({left:"240px",top:"240px"});
		$("#player1,#player2").css("left","210px");
		setTimeout(start,2000);		
	});
	function start(){
		v=setInterval(function(){
		$("#ball").animate({left:"+="+balldirX,top:"+="+balldirY},0);
		if((check==-1&&parseInt(lft)>15)||(check==1&&parseInt(rgt)>15)||check==2){
		document.addEventListener("keydown",movement);
		check=0;
		}
		//alert(check);
		tp=$("#ball").css("top");
		
		//top/bottom border
		if(parseInt(tp)<=0||parseInt(tp)>=480){
		$("#play").show();
		$("#main").css("display","none");
		document.removeEventListener("keydown", movement);
		clearInterval(v);
		if(parseInt(tp)<=25)
			alert(p2+" wins");
		if(parseInt(tp)>=475)
			alert(p1+" wins");
		return false;
		}
		//bouncing left right
		lft=$("#ball").css("left");
		rgt=$("#ball").css("right");
		if(parseInt(lft)<12||parseInt(rgt)<12){
			balldirX=-balldirX;
			document.removeEventListener("keydown", movement);
			check=-1;
		}
		
		ply1lft=$("#player1").css("left");
		if((parseInt(lft)>=(parseInt(ply1lft)-2)&&parseInt(lft)<=(parseInt(ply1lft)+82))&&parseInt(tp)<=32){
			balldirY=-balldirY;
			document.removeEventListener("keydown", movement);
			check=2;
		}
		
		ply2lft=$("#player2").css("left");
		if((parseInt(lft)>=(parseInt(ply2lft)-2)&&parseInt(lft)<=(parseInt(ply2lft)+82))&&parseInt(tp)>=448){
			balldirY=-balldirY;
			document.removeEventListener("keydown", movement);
			check=2;
		}
		
		},12);
	}
	function movement(e){
	if(e.which==37){
	var pos=$("#player2").css("left");
		if(parseInt(pos)>=20){
			$("#player2").animate({
            left: "-=2%"
        },0);
		e.preventDefault();
		}
	}
    if(e.which==39){
	var pos=$("#player2").css("right");
		if(parseInt(pos)>=30){
			$("#player2").animate({
            left: "+=2%"
	},0);	
	e.preventDefault();
	}
    }

		//player1
	if(e.which==65){
	var pos=$("#player1").css("left");
		if(parseInt(pos)>=20){
			$("#player1").animate({
            left: "-=2%"
        },0);
		e.preventDefault();
		}
	}
    if(e.which==68){
	var pos=$("#player1").css("right");
		if(parseInt(pos)>=30){
			$("#player1").animate({
            left: "+=2%"
        },0);
	e.preventDefault();}		
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