function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("image-gallery")) return false;
	var gallery=document.getElementById("image-gallery");
	var links=gallery.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return !picShow(this);
		}
	}
}

function addLoadEvent(func){
	var old_onload=window.onload;
	if(typeof window.onload!="function"){
		window.onload=func;
	}else{
		window.onload=function(){
		old_onload();
		func();	
		}
	}
}

function picShow(pic){
	if(!document.getElementsByClassName("Placeholder")[0]) return false;
	if(document.getElementsByClassName("Placeholder")[0].nodeName!="IMG") return false;
	placeholder=document.getElementsByClassName("Placeholder")[0];
	pic_path=pic.getAttribute("href");
	placeholder.setAttribute("src",pic_path);
	if(document.getElementById("Pic-Description")){
		pic_descript=document.getElementById("Pic-Description");
		if(pic.firstChild.nodeValue){
			pic_descript_text=pic.firstChild.nodeValue;
			pic_descript.firstChild.nodeValue=pic_descript_text;
		}else{
			pic_descript.firstChild.nodeValue="";
		}
	}
	return true;
}

addLoadEvent(prepareGallery);