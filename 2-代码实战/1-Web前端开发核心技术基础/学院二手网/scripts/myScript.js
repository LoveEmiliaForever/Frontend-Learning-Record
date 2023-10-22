function addLoadEvent(func){
    let oldOnLoad=window.onload;
    if(typeof oldOnLoad !="function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldOnLoad();
            func();
        }
    }
}
function searchEven(){
    let searchButton=document.getElementById("search-block").getElementsByTagName("a")[0];
    searchButton.addEventListener("click",function(){
        alert("静态网站，暂无搜索功能。如果要测试添加商品，点击下方的我也要卖东西按钮。")
    });
}
function accountEven(){
    let button1=document.getElementById("search-block").getElementsByTagName("a")[6];
    let button2=document.getElementById("search-block").getElementsByTagName("a")[7];
    button1.addEventListener("click",function(){
        alert("静态网站，暂无此功能。如果要测试添加商品，点击下方的我也要卖东西按钮。")
    });
    button2.addEventListener("click",function(){
        alert("静态网站，功能未开发。如果要测试添加商品，点击下方的我也要卖东西按钮。")
    });
}
function sellEven(){
    let sellButton=document.getElementById("sell-block").getElementsByTagName("a")[0];
    let sellEdit=document.getElementById("sell-edit");
    sellButton.addEventListener("click",function(){
        sellEdit.style.display="block";
    });
}
function editEven(){
    let sellEdit=document.getElementById("sell-edit");
    let putButton=sellEdit.getElementsByTagName("a")[0];
    let cancelButton=sellEdit.getElementsByTagName("a")[1];
    putButton.addEventListener("click",function(){
        let commodityNameText=document.createTextNode(sellEdit.getElementsByTagName("input")[0].value);
        let commodityRecommandingText=document.createTextNode(sellEdit.getElementsByTagName("input")[1].value);
        let commodityPriceText=document.createTextNode(sellEdit.getElementsByTagName("input")[2].value+"元");
        let commodity=document.createElement("div");
        let commodityImage=document.createElement("img");
        commodityImage.setAttribute("src","./images/占位图.png");
        commodity.appendChild(commodityImage);
        let commodityName=document.createElement("p");
        commodityName.appendChild(commodityNameText);
        commodity.appendChild(commodityName);
        let commodityRecommanding=document.createElement("p");
        commodityRecommanding.appendChild(commodityRecommandingText);
        commodity.appendChild(commodityRecommanding);
        let commodityPrice=document.createElement("a");
        let commodityMoney=document.createElement("span");
        commodityMoney.appendChild(commodityPriceText);
        commodityPrice.appendChild(commodityMoney);
        commodityPrice.appendChild(document.createTextNode("购买"));
        commodity.appendChild(commodityPrice);
        document.getElementById("sell-block").getElementsByTagName("div")[2].appendChild(commodity);
        sellEdit.style.display="none";
    });
    cancelButton.addEventListener("click",function(){
        sellEdit.style.display="none";
    });
}
function purchase(){
    sellBlock=document.getElementById("sell-block").getElementsByTagName("div")[2];
    purchaseButton=sellBlock.getElementsByTagName("a");
    for (key in purchaseButton){
        if(typeof purchaseButton[key] != "object"){
            break;
        }
        purchaseButton[key].addEventListener("click",function(){
            this.parentNode.style.display="none";
            alert("购买成功！")
        });
    }
}
addLoadEvent(searchEven);
addLoadEvent(accountEven);
addLoadEvent(sellEven);
addLoadEvent(editEven);
addLoadEvent(purchase);