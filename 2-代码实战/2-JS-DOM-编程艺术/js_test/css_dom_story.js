function nextElement(node){
	if(!node.nextSibling) return null;
	var sibling=node.nextSibling;
	if(sibling.nodeType=="1") return sibling;
	return nextElement(sibling);
}

function styleHeaderSiblings(){
	var header=document.getElementsByTagName("h1");
	for(var i=0;i<header.length;i++){
		var element=nextElement(header[i]);
		element.style.fontWeight="bold";
		element.style.fontSize="1.2em";
	}
}

function addLoadEvent(func){
	var old_onload=window.onload;
	if(typeof window.onload!= "function"){
		window.onload=func;
	}else{
		window.onload=function(){
			old_onload();
			func();
		}
	}
}

addLoadEvent(styleHeaderSiblings);