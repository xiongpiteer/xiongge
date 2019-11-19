var bt11=document.getElementsByClassName("bodyer_tz11");
var ul=document.getElementsByTagName("ul");
var j=0
for(var i=0;i<bt11.length;i++){
	bt11[i].onclick=function(){
		j++
		if(j%2==1){
			this.nextElementSibling.style.height="150px"
		}else{
			this.nextElementSibling.style.height="0px"
		}
		
	}
}

var bodyer_tz=document.getElementsByClassName("bodyer_tz")[0];
var ul=bodyer_tz.getElementsByTagName("ul");
var li=bodyer_tz.getElementsByTagName("li");
var dd=[]
var dw=document.getElementsByClassName("dw")[0];
console.log(dw)
var xxk1=dw.getElementsByClassName("xxk1");
console.log(xxk1)
for(var i=0;i<li.length;i++){
	dd.push(li[i])
	li[i].onclick=function(){
		// console.log(li[4])
		console.log(dd.indexOf(this))
		for(var i=0;i<li.length;i++){
			xxk1[i].style.display="none"
		}
		xxk1[dd.indexOf(this)].style.display="block"
	}
}
console.log(dd)
















/* var tz20=document.getElementsByClassName("bodyer_tz20")[0];
var spans=tz20.getElementsByTagName("span");
var imgs=tz20.getElementsByTagName("img");

for(var i=0;i<spans.length;i++){
	spans[i].onclick=function(){
		if(this.innerHTML=="&gt;"){
			this.previousElementSibling.style.opacity="0"
			imgs[1].style.animation="run 1s both"
		}else{
			
		}
	}
} */
