var ul=document.querySelectorAll(".bodyer3_left>ul")[0];
var xw=document.querySelectorAll(".bodyer3_top>div:nth-of-type(2)")[0];
var j=0
xw.onclick=function(){
	j++
	if(j%2==1){
		ul.style.height="84px"
	}else{
		ul.style.height="0"
	}
}

var lis=ul.children;
var ye=document.getElementsByClassName("bodyer3_right");
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		var z=parseInt(this.getAttribute("sg"));
		for(var i=0;i<ye.length;i++){
			ye[i].style.display="none";
		}
		ye[z].style.display="block";
	}
}