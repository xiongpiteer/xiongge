var ul=document.querySelectorAll(".bodyer3_left>ul")[0];
var xw=document.querySelectorAll(".bodyer3_top>div:nth-of-type(2)")[0];
var j=0
xw.onclick=function(){
	j++
	if(j%2==1){
		ul.style.height="110px"
	}else{
		ul.style.height="0"
	}
}

var lis=ul.children;
var ye=document.getElementsByClassName("bodyer3_right")[0];
var ye2=document.getElementsByClassName("bodyer3_right2")[0];
ye.style.display="block";
ye2.style.display="none";
for(var i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		var z=parseInt(this.getAttribute("sg"));
		ye.style.display="none";
		ye2.style.display="none";
		if(this.getAttribute("sg")=="0"){
			ye.style.display="block";
		}else{
			ye2.style.display="block";
		}
		
	}
}


