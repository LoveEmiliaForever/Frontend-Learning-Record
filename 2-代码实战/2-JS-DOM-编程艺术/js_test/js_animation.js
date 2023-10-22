function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function moveElement(elementID,final_x,final_y,interval){
	var elem=document.getElementById(elementID);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.left){
		elem.style.left="0px";
	}
	if(!elem.style.top){
		elem.style.top="0px";
	}
	var xpos=parseInt(elem.style.left);
	var ypos=parseInt(elem.style.top);
	if(xpos==final_x && ypos==final_y){
		return true;
	} 
	if(xpos<final_x){
		dist=Math.ceil((final_x-xpos)/10);
		xpos=xpos+dist;
	} 
	if(xpos>final_x){
		dist=Math.ceil((xpos-final_x)/10);
		xpos=xpos-dist;
	} 
	if(ypos<final_y){
		dist=Math.ceil((final_y-ypos)/10);
		ypos=ypos+dist;
	} 
	if(ypos>final_y){
		dist=Math.ceil((ypos-final_y)/10);
		ypos=ypos-dist;
	} 
	elem.style.left=xpos+"px";
	elem.style.top=ypos+"px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement=setTimeout(repeat,interval);
}

function prepareSlideshow(){
	var slideshow=document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var preview=document.createElement("img");
	preview.setAttribute("src","横长图.png");
	preview.setAttribute("alt","长图");
	preview.setAttribute("id","preview");
	preview.style.position="absolute";
	slideshow.appendChild(preview);
	var list=document.getElementById("linklist");
	insertAfter(slideshow,list);
	var links=list.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onmouseout=function(){
			moveElement("preview",0,0,10);
		}
		links[i].xvalue=-200*(i+1);
		links[i].onmouseover=function(){
			moveElement("preview",this.xvalue,0,10);
		}
	}
}

function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareSlideshow);