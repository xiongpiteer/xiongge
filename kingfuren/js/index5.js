var bt11=document.getElementsByClassName("bodyer_tz11");
var dw1=document.getElementsByClassName("dw1");
// var ul=document.getElementsByTagName("ul");
var dd=[]
for(var i=0;i<bt11.length;i++){
	dd.push(bt11[i])
	bt11[i].onclick=function(){
		for(var i=0;i<bt11.length;i++){
			dw1[i].style.display="none"
		}
		dw1[dd.indexOf(this)].style.display="block"
	}
}






















