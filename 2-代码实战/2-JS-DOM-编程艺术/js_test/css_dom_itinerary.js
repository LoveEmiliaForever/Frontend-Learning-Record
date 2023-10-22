function stripeTables(){
	var rows=document.getElementsByTagName("tr");
	var odd=true;
	for(var i=0;i<rows.length;i++){
		rows[i].onmouseover=function(){
			this.style.fontWeight="bold";
		}
		rows[i].onmouseout=function(){
			this.style.fontWeight="normal";
		}
		if(odd){
			rows[i].style.backgroundColor="#ffc";
			odd=false;
		}else{
			rows[i].style.backgroundColor="#ffa";
			odd=true;
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

addLoadEvent(stripeTables);