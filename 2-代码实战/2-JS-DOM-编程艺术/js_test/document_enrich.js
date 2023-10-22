function displayAbbreviations(){
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	var abbreviations=document.getElementsByTagName("abbr");
	if(abbreviations.length<1) return false;
	var defs=new Array();
	for(var i=0; i<abbreviations.length;i++){
		var definition=abbreviations[i].getAttribute("title");
		var key=abbreviations[i].lastChild.nodeValue;
		defs[key]=definition;
	}
	
	var dlist=document.createElement("dl");
	for (key in defs){
		var definition=defs[key];
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(definition);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	
	document.body.appendChild(header);
	document.body.appendChild(dlist);
}

function displayCitations(){
	var quotes=document.getElementsByTagName("blockquote");
	if(quotes.length<1) return false;
	for(var i=0;i<quotes.length;i++){
		url=quotes[i].getAttribute("cite");
		var sup_link=document.createElement("sup");
		var link=document.createElement("a");
		link.setAttribute("href",url);
		var link_text=document.createTextNode("source");
		sup_link.appendChild(link);
		link.appendChild(link_text);
		quote_elems=quotes[i].getElementsByTagName("*");
		if(quote_elems.length<1) continue;
		last_elem=quote_elems[quote_elems.length-1];
		last_elem.appendChild(sup_link);
	}
}

function displayAccesskeys(){
	var links=document.getElementsByTagName("a");
	var dlist=document.createElement("dl");
	for(var i=0;i<links.length;i++){
		if(!links[i].getAttribute("accesskey")) continue;
		var dtitle=document.createElement("dt");
		var dtitle_text=document.createTextNode(links[i].lastChild.nodeValue);
		dtitle.appendChild(dtitle_text);
		var ddesc=document.createElement("dd");
		var ddesc_text=document.createTextNode(links[i].getAttribute("accesskey"));
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	
	var header=document.createElement("h2");
	var header_text=document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	
	document.body.appendChild(header);
	document.body.appendChild(dlist);
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

addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskeys)
