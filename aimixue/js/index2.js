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


var bodyer3_right21=document.getElementsByClassName("bodyer3_right21")[0];
var bodyer3_right3=document.getElementsByClassName("bodyer3_right3")[0];
var divs=bodyer3_right3.getElementsByTagName("div");
var j=0
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
		for(var i=0;i<bodyer3_right21.children.length;i++){
			bodyer3_right21.children[i].style.display="none"
		}
		bodyer3_right21.children[j].style.display="block"
		
	}
}
var bodyer3_right211=document.getElementsByClassName("bodyer3_right21")[1];
var bodyer3_right31=document.getElementsByClassName("bodyer3_right3")[1];
var divs=bodyer3_right31.getElementsByTagName("div");
var z=0
for(var i=0;i<divs.length;i++){
	divs[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			++z;
			if(z==2){
				z=0
			}
		}
		else if(this.innerHTML=="&lt;"){
			--z;
			if(z==-1){
				z=1
			}
		}
		else if(this.innerHTML==1||this.innerHTML==2){
			z=this.getAttribute("sg")
		}
		for(var i=0;i<bodyer3_right211.children.length;i++){
			bodyer3_right211.children[i].style.display="none"
		}
		bodyer3_right211.children[z].style.display="block"
		
	}
}
var bodyer3_right212=document.getElementsByClassName("bodyer3_right21")[2];
var bodyer3_right31=document.getElementsByClassName("bodyer3_right3")[2];
var divs=bodyer3_right31.getElementsByTagName("div");
var t=0
for(var i=0;i<divs.length;i++){
	divs[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			++t;
			if(t==2){
				t=0
			}
		}
		else if(this.innerHTML=="&lt;"){
			--t;
			if(t==-1){
				t=1
			}
		}
		else if(this.innerHTML==1||this.innerHTML==2){
			t=this.getAttribute("sg")
		}
		for(var i=0;i<bodyer3_right212.children.length;i++){
			bodyer3_right212.children[i].style.display="none"
		}
		bodyer3_right212.children[t].style.display="block"
		
	}
}
var bodyer3_right213=document.getElementsByClassName("bodyer3_right21")[3];
var bodyer3_right31=document.getElementsByClassName("bodyer3_right3")[3];
var divs=bodyer3_right31.getElementsByTagName("div");
var d=0
for(var i=0;i<divs.length;i++){
	divs[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			++d;
			if(d==2){
				d=0
			}
		}
		else if(this.innerHTML=="&lt;"){
			--d;
			if(d==-1){
				d=1
			}
		}
		else if(this.innerHTML==1||this.innerHTML==2){
			d=this.getAttribute("sg")
		}
		for(var i=0;i<bodyer3_right213.children.length;i++){
			bodyer3_right213.children[i].style.display="none"
		}
		bodyer3_right213.children[d].style.display="block"
		
	}
}