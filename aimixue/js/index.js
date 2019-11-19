var bodyer1=document.getElementsByClassName("bodyer1")[0];
var imgs=bodyer1.getElementsByTagName("img");
var btns=bodyer1.getElementsByTagName("button");
var divs=bodyer1.querySelectorAll(".bodyer12>div");
var j=0
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			j++
			if(j==3){
				j=0
			}
		}else{
			j--
			if(j==-1){
				j=2
			}
		}
		for(var i=0;i<imgs.length-1;i++){
			imgs[i].style.opacity="0"
			divs[i].style.background=""
		}
		imgs[j].style.opacity="1"
		divs[j].style.background="red"
	}
}
for(var i=0;i<divs.length;i++){
	divs[i].onclick=function(){
		j=this.getAttribute("sg")
		for(var i=0;i<imgs.length-1;i++){
			imgs[i].style.opacity="0"
			divs[i].style.background=""
		}
		imgs[j].style.opacity="1"
		divs[j].style.background="red"
	}
}







timer=setInterval(function(){
	j++
	if(j==3){
		j=0
	}
	for(var i=0;i<imgs.length-1;i++){
		imgs[i].style.opacity="0"
		divs[i].style.background=""
	}
	imgs[j].style.opacity="1"
	divs[j].style.background="red"
},2000)
bodyer1.onmouseout=function(){
	timer=setInterval(function(){
		j++
		if(j==3){
			j=0
		}
		for(var i=0;i<imgs.length-1;i++){
			imgs[i].style.opacity="0"
			divs[i].style.background=""
		}
		imgs[j].style.opacity="1"
		divs[j].style.background="red"
	},2000)
}
bodyer1.onmouseover=function(){
	clearInterval(timer);
	timer=null;
}