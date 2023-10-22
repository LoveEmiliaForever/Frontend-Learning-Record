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
function addNewClass(elem,newClassName){
    if(elem.className.length==0){
        elem.className=newClassName;
    }else{
        elem.className+=(" "+newClassName);
    }
}
function deletExistingClass(elem,deletedClassName){
    if(elem.className==deletedClassName){
        elem.className="";
        //console.log("------------ALL DOWN-------------")
    }else{
        let classNameArray=elem.className.split(" ");
        for (const key in classNameArray){
            if(classNameArray[key]==deletedClassName){
                classNameArray.splice(key,1);
                break;
            }
        }
        //console.log(`${typeof classNameArray.join(" ")}`);
        //elem.className=elem.className.substring(0,elem.className.search(deletedClassName)-1);
        elem.className=classNameArray.join(" ");
        //console.log(`-------------DELET ONE------------       CLASS LEFT:${elem.className}`);
    }
}
function elementMove(formalElem,targetX,targetY,timeSpend=1000,measure='%',refreshRate=60,elemClass=null,firstFlag=true){
    try{
        if(firstFlag){
            if(elemClass!=null){
                var elem=document.getElementsByClassName(elemClass)[0];
                deletExistingClass(elem,elemClass);
                //console.log("move::first and class:"+elemClass);
            }else{
                var elem=formalElem;
                //console.log("move::first and not class:"+elem);
            }
            if(elem.moveAnimationPlay){
                let newClassName="moveAnimation";
                let newClassNameNum=1;
                while(true){
                    let tempClassName=newClassName+newClassNameNum;
                    if(document.getElementsByClassName(tempClassName).length==0){
                        addNewClass(elem,tempClassName);
                        elemClass=tempClassName;
                        break;
                    }else{
                        newClassNameNum++;
                    }
                }
                let repeat="elementMove("+null+","+targetX+","+targetY+","+timeSpend+",'"+measure+"',"+refreshRate+",'"+elemClass+"',"+firstFlag+")";
                //console.log("move::first and play:"+elemClass+"    "+repeat);
                setTimeout(repeat,elem.nextMoveFrameTime*(elem.moveAnimationFrameNum-elem.moveFrame+1));
                return;
            }
            //console.log("move::first and notplay:"+elem);
            var viewHeight=window.innerHeight;
            var viewWidth=window.innerWidth;
            elem.moveFrame=0;
            elem.moveAnimationPlay=false;
            elem.nextMoveFrameTime=parseFloat((1000/refreshRate).toFixed(2));
            elem.trueMoveRefreshRate=parseFloat((1000/elem.nextMoveFrameTime).toFixed(2));
            elem.moveAnimationFrameNum=parseInt(elem.trueMoveRefreshRate*timeSpend/1000);
            let newClassName="moveAnimation";
            let newClassNameNum=1;
            while(true){
                let tempClassName=newClassName+newClassNameNum;
                if(document.getElementsByClassName(tempClassName).length==0){
                    addNewClass(elem,tempClassName);
                    elemClass=tempClassName;
                    break;
                }else{
                    newClassNameNum++;
                }
            }
            firstFlag=false;
        }else{
            var elem=document.getElementsByClassName(elemClass)[0];
        }
        if(elem.movement){
            clearTimeout(elem.movement);
            //console.log(`clear movement event ${elemClass} ${elem.moveFrame}`);
        }
        if(elem.style.left.length==0){
            let elemStyle=window.getComputedStyle(elem);
            let positionMethod=elemStyle.position;
            if(positionMethod=="static"){
                elem.style.position="relative";
                elem.style.left=0+measure;
                elem.style.top=0+measure;
            }else{
                //console.log("left and top:"+elem.style.left+" "+elem.style.top);
                elem.style.position=positionMethod;
                elem.style.left=100*parseInt(elemStyle.left)/viewWidth+measure;
                elem.style.top=100*parseInt(elemStyle.top)/viewHeight+measure;
                //console.log("left and top:"+elemStyle.left+" "+elemStyle.top);
                //console.log("left and top:"+elem.style.left+" "+elem.style.top);
            }
        }
        if(elem.moveFrame>=(elem.trueMoveRefreshRate*timeSpend/1000)){
            deletExistingClass(elem,elemClass);
            delete elem.moveFrame;
            delete elem.nextMoveFrameTime;
            delete elem.trueMoveRefreshRate;
            delete elem.movement;
            delete elem.moveAnimationPlay;
            //console.log("move exit!");
            return;
        }
        let positionX=parseFloat(elem.style.left);
        let positionY=parseFloat(elem.style.top);
        let distanceX=parseFloat((targetX-positionX).toFixed(4));
        let distanceY=parseFloat((targetY-positionY).toFixed(4));
        //console.log(`distance x and y:${distanceX}  ${distanceY}`);
        elem.style.left=(positionX+(distanceX/(elem.trueMoveRefreshRate*timeSpend/5000)))+measure;
        elem.style.top=(positionY+(distanceY/(elem.trueMoveRefreshRate*timeSpend/5000)))+measure;
        //console.log(`elem x and y:${elem.style.left}  ${elem.style.top}`);
        elem.moveFrame+=1;
        //console.log(`Move:${elemClass} moveFrame:${elem.moveFrame} positionX:${positionX} positionY:${positionY}`);
        let repeat="elementMove("+null+","+targetX+","+targetY+","+timeSpend+",'"+measure+"',"+refreshRate+",'"+elemClass+"',"+firstFlag+")";
        elem.movement=setTimeout(repeat,elem.nextMoveFrameTime);
    }
    catch{
        console.log("move pass");
    }

}
function elementSpin(formalElem,targetDegree,timeSpend=1000,refreshRate=60,elemClass=null,firstFlag=true){
    try{
        if(firstFlag){
            if(elemClass!=null){
                var elem=document.getElementsByClassName(elemClass)[0];
                deletExistingClass(elem,elemClass);
                //console.log("spin::first and class:"+elemClass);
            }else{
                var elem=formalElem;
                //console.log("spin::first and not class:"+elem);
            }
            if(elem.spinAnimationPlay){
                let newClassName="spinAnimation";
                let newClassNameNum=1;
                while(true){
                    let tempClassName=newClassName+newClassNameNum;
                    if(document.getElementsByClassName(tempClassName).length==0){
                        addNewClass(elem,tempClassName);
                        elemClass=tempClassName;
                        break;
                    }else{
                        newClassNameNum++;
                    }
                }
                let repeat=`elementSpin(${null},${targetDegree},${timeSpend},${refreshRate},'${elemClass}',${firstFlag})`;
                //console.log("spin::first and play:"+elemClass+"    "+repeat);
                setTimeout(repeat,elem.nextSpinFrameTime*(elem.spinAnimationFrameNum-elem.spinFrame+1));
                return;
            }
            //console.log("spin::first and notplay:"+elem);
            elem.spinFrame=0;
            elem.spinAnimationPlay=false;
            elem.nextSpinFrameTime=parseFloat((1000/refreshRate).toFixed(2));
            elem.trueSpinRefreshRate=parseFloat((1000/elem.nextSpinFrameTime).toFixed(2));
            elem.spinAnimationFrameNum=parseInt(elem.trueSpinRefreshRate*timeSpend/1000);
            let newClassName="spinAnimation";
            let newClassNameNum=1;
            while(true){
                let tempClassName=newClassName+newClassNameNum;
                if(document.getElementsByClassName(tempClassName).length==0){
                    addNewClass(elem,tempClassName);
                    elemClass=tempClassName;
                    break;
                }else{
                    newClassNameNum++;
                }
            }
            if(elem.style.transform.length==0){
                let elemStyle=window.getComputedStyle(elem);
                let transformMethod=elemStyle.transform;
                if(transformMethod=="none"){
                    elem.style.transform="rotate(0deg)";
                }else{
                    elem.style.transform=transformMethod;
                }
            }
            let distanceAngle=targetDegree-parseFloat(elem.style.transform.substring(7));
            elem.angleChangeValue=parseFloat((distanceAngle/(elem.trueSpinRefreshRate*(timeSpend/1000))).toFixed(2));
            firstFlag=false;
        }else{
            var elem=document.getElementsByClassName(elemClass)[0];
        }
        //console.log(elem.trueSpinRefreshRate);
        //console.log(timeSpend);
        //console.log(elem.trueSpinRefreshRate*timeSpend/1000);
        //console.log(`Pre:::: Spin:${elemClass} spinFrame:${elem.spinFrame} change:${elem.angleChangeValue} objectAngle:${parseFloat(elem.style.transform.substring(7))}deg`);
        if(elem.spinFrame>=(elem.trueSpinRefreshRate*timeSpend/1000)){
            elem.style.transform=`rotate(${targetDegree}deg)`;
            deletExistingClass(elem,elemClass);
            delete elem.spinFrame;
            delete elem.nextSpinFrameTime;
            delete elem.trueSpinRefreshRate;
            delete elem.spinning;
            delete elem.spinAnimationPlay;
            //console.log("spin exit!");
            return;
        }
        if(elem.spinning){
            clearTimeout(elem.spinning);
        }
        let objectAngle=parseFloat(elem.style.transform.substring(7));
        elem.style.transform=`rotate(${objectAngle+elem.angleChangeValue}deg)`;
        elem.spinFrame+=1;
        //console.log(`Over:::: Spin:${elemClass} spinFrame:${elem.spinFrame} change:${elem.angleChangeValue} objectAngle:${parseFloat(elem.style.transform.substring(7))}deg`);
        let repeat=`elementSpin(${null},${targetDegree},${timeSpend},${refreshRate},'${elemClass}',${firstFlag})`;
        elem.spinning=setTimeout(repeat,elem.nextSpinFrameTime);
    }
    catch{
        console.log("spin pass");
    }
}
function transparencyChange(formalElem,targetAlpha,timeSpend=1000,refreshRate=60,elemClass=null,firstFlag=true){
    try{
        if(firstFlag){
            if(elemClass!=null){
                var elem=document.getElementsByClassName(elemClass)[0];
                deletExistingClass(elem,elemClass);
                //console.log("spin::first and class:"+elemClass);
            }else{
                var elem=formalElem;
                //console.log("spin::first and not class:"+elem);
            }
            if(elem.transparencyAnimationPlay){
                let newClassName="alphaAnimation";
                let newClassNameNum=1;
                while(true){
                    let tempClassName=newClassName+newClassNameNum;
                    if(document.getElementsByClassName(tempClassName).length==0){
                        addNewClass(elem,tempClassName);
                        elemClass=tempClassName;
                        break;
                    }else{
                        newClassNameNum++;
                    }
                }
                let repeat=`transparencyChange(${null},${targetAlpha},${timeSpend},${refreshRate},'${elemClass}',${firstFlag})`;
                //console.log("spin::first and play:"+elemClass+"    "+repeat);
                setTimeout(repeat,elem.nextAlphaFrameTime*(elem.transparencyAnimationFrameNum-elem.alphaFrame+1));
                return;
            }
            //console.log("spin::first and notplay:"+elem);
            elem.alphaFrame=0;
            elem.transparencyAnimationPlay=false;
            elem.nextAlphaFrameTime=parseFloat((1000/refreshRate).toFixed(2));
            elem.trueAlphaRefreshRate=parseFloat((1000/elem.nextAlphaFrameTime).toFixed(2));
            elem.transparencyAnimationFrameNum=parseInt(elem.trueAlaphaRefreshRate*timeSpend/1000);
            let newClassName="alphaAnimation";
            let newClassNameNum=1;
            while(true){
                let tempClassName=newClassName+newClassNameNum;
                if(document.getElementsByClassName(tempClassName).length==0){
                    addNewClass(elem,tempClassName);
                    elemClass=tempClassName;
                    break;
                }else{
                    newClassNameNum++;
                }
            }
            if(elem.style.opacity.length==0){
                let elemStyle=window.getComputedStyle(elem);
                let alphaformMethod=elemStyle.opacity;
                elem.style.opacity=alphaformMethod;
            }
            let distanceAlpha=targetAlpha-parseFloat(elem.style.opacity);
            elem.alphaChangeValue=parseFloat((distanceAlpha/(elem.trueAlphaRefreshRate*(timeSpend/1000))).toFixed(6));
            firstFlag=false;
        }else{
            var elem=document.getElementsByClassName(elemClass)[0];
        }
        if(elem.transparency){
            clearTimeout(elem.transparency);
        }
        if(elem.alphaFrame>=(elem.trueAlphaRefreshRate*timeSpend/1000)){
            elem.style.opacity=`${targetAlpha}`;
            deletExistingClass(elem,elemClass);
            delete elem.alphaFrame;
            delete elem.nextAlphaFrameTime;
            delete elem.trueAlphaRefreshRate;
            delete elem.transparency;
            delete elem.transparencyAnimationPlay;
            //console.log("transparency exit!")
            return;
        }
        let objectAlpha=parseFloat(elem.style.opacity);
        elem.style.opacity=`${objectAlpha+elem.alphaChangeValue}`;
        elem.alphaFrame+=1;
        //console.log(`Transparency:${elemClass} alphaFrame:${elem.alphaFrame} change:${elem.alphaChangeValue} objectAlpha:${elem.style.opacity}`)
        let repeat=`transparencyChange(${null},${targetAlpha},${timeSpend},${refreshRate},'${elemClass}',${firstFlag})`;
        elem.transparency=setTimeout(repeat,elem.nextAlphaFrameTime);
    }
    catch{
        console.log("transparency pass");
    }
}