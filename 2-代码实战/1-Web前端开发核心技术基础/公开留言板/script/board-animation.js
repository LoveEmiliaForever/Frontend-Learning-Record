function realMessageOut(elem=document.getElementById("real-time-message").getElementsByTagName("div")[0]){
    let timeBlock=elem.getElementsByTagName("p")[0];
    let messageBlock=elem.getElementsByTagName("div")[0];
    elementMove(messageBlock,15,0);
    transparencyChange(messageBlock,0);
    setTimeout(elementMove,100,timeBlock,15,0);
    setTimeout(transparencyChange,100,timeBlock,0);
    setTimeout(function(){elem.remove();},1100);
}
function realMessagePut(userName,messageCont){
    let partenNode=document.getElementById("real-time-message");
    let myDate=new Date();
    let currentTime=`${myDate.getFullYear()}-${myDate.getMonth()+1}-${myDate.getDate()}`;
    let dateNode=document.createElement("p");
    dateNode.appendChild(document.createTextNode(currentTime));
    let userNameNode=document.createElement("h3");
    userNameNode.appendChild(document.createTextNode(userName));
    let messageNode=document.createElement("p");
    messageNode.appendChild(document.createTextNode(messageCont));
    let messageDiv=document.createElement("div");
    messageDiv.appendChild(userNameNode);
    messageDiv.appendChild(messageNode);
    let allDiv=document.createElement("div");
    allDiv.appendChild(dateNode);
    allDiv.appendChild(messageDiv);
    allDiv.setAttribute("style","opacity:0;position:relative;left:-10%;");
    partenNode.appendChild(allDiv);
    elementMove(allDiv,0,0);
    transparencyChange(allDiv,1)
}
function writeMessage(){
    let button=document.getElementById("message-edit").getElementsByTagName("p")[2];
    button.addEventListener("click",function(){
        let userName=document.getElementById("message-edit").getElementsByTagName("input")[0].value;
        let messageCont=document.getElementById("message-edit").getElementsByTagName("textarea")[0].value;
        let havingMessage=document.getElementById("header-bottom").getElementsByTagName("span")[0];
        let havingNum=havingMessage.textContent;
        let bootMessage=document.getElementById("header-bottom").getElementsByTagName("span")[1];
        let bootNum=bootMessage.textContent;
        realMessageOut();
        setTimeout(realMessagePut,1200,userName,messageCont);
        havingNum=document.createTextNode(String(parseInt(havingNum)+1));
        bootNum=document.createTextNode(String(parseInt(bootNum)+1));
        havingMessage.lastChild.remove();
        bootMessage.lastChild.remove();
        havingMessage.appendChild(havingNum);
        bootMessage.appendChild(bootNum);
    });
}
addLoadEvent(writeMessage());