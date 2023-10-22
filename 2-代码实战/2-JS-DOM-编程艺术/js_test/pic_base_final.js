function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild==targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function preparePlaceholder(){
	var pic_container=document.createElement("div");
	pic_container.setAttribute("id","pic-container");
	var pic_show=document.createElement("div");
	pic_show.setAttribute("id","pic-show");
	var pic_placeholder=document.createElement("img");
	pic_placeholder.setAttribute("src","占位图.jpeg");
	pic_placeholder.setAttribute("class","Placeholder");
	pic_placeholder.setAttribute("alt","占位图");
	pic_placeholder.setAttribute("title","显示你想看的图片");
	var pic_description=document.createElement("p");
	pic_description.setAttribute("id","Pic-Description");
	var pic_description_text=document.createTextNode("图片描述");
	pic_description.appendChild(pic_description_text);
	var image_gallery=document.getElementById("image-gallery");
	insertAfter(pic_container,image_gallery);
	pic_container.appendChild(pic_show);
	pic_show.appendChild(pic_placeholder);
	insertAfter(pic_description,pic_container);
}

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
		if(pic.getAttribute("title")){
			pic_descript_text=pic.getAttribute("title");
			pic_descript.firstChild.nodeValue=pic_descript_text;
		}else{
			pic_descript.firstChild.nodeValue="";
		}
	}
	return true;
}

addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);