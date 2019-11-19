var lb=document.getElementsByClassName("lb")[0];
var btns=lb.getElementsByTagName("button");
var lb_img=document.getElementsByClassName("lb_img")[0];
var imgs=lb_img.getElementsByTagName("img");
var lb_dian=document.getElementsByClassName("lb_dian")[0];
var divs=lb_dian.getElementsByTagName("div");
var j=0
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			j++
			if(j==4){
				j=0
			}
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.opacity="0"
				divs[i].style.background=""
			}
			imgs[j].style.opacity="1"
			divs[j].style.background="gainsboro"
		}else{
			j--
			if(j==-1){
				j=3
			}
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.opacity="0"
				divs[i].style.background=""
			}
			imgs[j].style.opacity="1"
			divs[j].style.background="gainsboro"
		}
	}
}
for(var z=0;z<divs.length;z++){
	divs[z].onclick=function(){
		j=this.getAttribute("sg")
		for(var z=0;z<divs.length;z++){
			imgs[z].style.opacity="0"
			divs[z].style.background=""
		}
		imgs[j].style.opacity="1"
		divs[j].style.background="gainsboro"
	}
}
timer=setInterval(function(){
	j++
	if(j==4){
		j=0
	}
	for(var i=0;i<imgs.length;i++){
		imgs[i].style.opacity="0"
		divs[i].style.background=""
	}
	imgs[j].style.opacity="1"
	divs[j].style.background="gainsboro"
},2000)
for(var d=0;d<imgs.length;d++){
	imgs[d].onmouseover=function(){
		clearInterval(timer);
		timer=null;
	}
	imgs[d].onmouseout=function(){
		timer=setInterval(function(){
			j++
			if(j==4){
				j=0
			}
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.opacity="0"
				divs[i].style.background=""
			}
			imgs[j].style.opacity="1"
			divs[j].style.background="gainsboro"
		},2000)
	}
}



var j01=document.getElementsByClassName("j01");
var j0110=j01[0].getElementsByClassName("j011")[0];
var j0111=j01[1].getElementsByClassName("j011")[0];
var p0=j0110.getElementsByTagName("p");
var h30=j0110.getElementsByTagName("h3");
var p1=j0111.getElementsByTagName("p");
var h31=j0111.getElementsByTagName("h3");
// var b211=document.getElementsByClassName("bodyer_b211")[0];
// var img=b211.getElementsByTagName("img")[0];
j01[0].onmouseover=function(){
	j0110.style.transform="translateY(200px)"
	h30[0].style.color="#a20a09"
	for(var i=0;i<p0.length;i++){
		p0[i].style.color="#fff"
	}
}
j01[0].onmouseout=function(){
	j0110.style.transform="translateY(0)"
	h30[0].style.color="black"
	for(var i=0;i<p0.length;i++){
		p0[i].style.color="black"
	}
}
j01[1].onmouseover=function(){
	j0111.style.transform="translateY(200px)"
	h31[0].style.color="#a20a09"
	for(var i=0;i<p1.length;i++){
		p1[i].style.color="#fff"
	}
}
j01[1].onmouseout=function(){
	j0111.style.transform="translateY(0)"
	h31[0].style.color="black"
	for(var i=0;i<p1.length;i++){
		p1[i].style.color="black"
	}
}



var j02=document.getElementsByClassName("j02");
var j0210=j02[0].getElementsByClassName("j014")[0];
var j0211=j02[1].getElementsByClassName("j014")[0];
var p01=j0210.getElementsByTagName("p");
var h301=j0210.getElementsByTagName("h3");
var p11=j0211.getElementsByTagName("p");
var h311=j0211.getElementsByTagName("h3");
j02[0].onmouseover=function(){
	j0210.style.transform="translateY(-200px)"
	h301[0].style.color="#a20a09"
	for(var i=0;i<p0.length;i++){
		p01[i].style.color="#fff"
	}
}
j02[0].onmouseout=function(){
	j0210.style.transform="translateY(0)"
	h301[0].style.color="black"
	for(var i=0;i<p0.length;i++){
		p01[i].style.color="black"
	}
}
j02[1].onmouseover=function(){
	j0211.style.transform="translateY(-200px)"
	h311[0].style.color="#a20a09"
	for(var i=0;i<p1.length;i++){
		p11[i].style.color="#fff"
	}
}
j02[1].onmouseout=function(){
	j0211.style.transform="translateY(0)"
	h311[0].style.color="black"
	for(var i=0;i<p1.length;i++){
		p11[i].style.color="black"
	}
}