var ul=document.querySelectorAll(".bodyer3_left>ul")[0];
var xw=document.querySelectorAll(".bodyer3_top>div:nth-of-type(2)")[0];
var j=0
xw.onclick=function(){
	j++
	if(j%2==1){
		ul.style.height="180px"
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


var bodyer3_right=document.getElementsByClassName("bodyer3_right");
var bodyer3_right2=document.getElementsByClassName("bodyer3_right2");
var divs=bodyer3_right2[0].getElementsByTagName("div");
var j=0
for(var c=0;c<bodyer3_right.length;c++){
	bodyer3_right[c].style.display="none"
}
bodyer3_right[j].style.display="block"
for(var i=0;i<divs.length;i++){
	divs[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			++j;
			if(j==2){
				j=0
			}
		}
		else if(this.innerHTML=="&lt;"){
			--j;
			if(j==-1){
				j=1
			}
		}
		else if(this.innerHTML==1||this.innerHTML==2){
			j=this.getAttribute("sg")
		}
		for(var c=0;c<bodyer3_right.length;c++){
			bodyer3_right[c].style.display="none"
		}
		bodyer3_right[j].style.display="block"
	}
}
