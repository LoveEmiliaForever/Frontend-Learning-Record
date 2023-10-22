//能力检测：在JS运行时使用一套简单的检测逻辑，测试浏览器是否支持某种特性（如是否支持某个方法）
//这种方式不需要知道特定浏览器信息，只检测目标能力是否存在
function getElement(id){
    if(document.getElementById){  //检测是否存在getElementById方法
        return document.getElementById(id);//存在则使用
    }else if(document.all){  //检测是否存在all方法
        return document.all[id];
    }else{
        throw new Error("This browser to old.");
    }
}
//应该先检测最常用的特性，然后再选择替代方法（这样可以优化代码运行效率）
//必须检测切实需要的特性，某个能力存在不代表其它能力存在



//安全检测
//测试某些东西是否存在的同时，还要测试其是否按照预期运行（因为可能存在自定义方法等等）
function isSortable(obj){
    return typeof obj.sort == "function";  //使用typeof观察是否符合预期类型
}
//有些宿主对象不保证对typeof返回合理的值，小心



//用能力检测进行浏览器分析
//用户代理字符可以轻松伪造，但是能力检测识别浏览器却很难被欺骗
//根据对浏览器特性的检测与已知特性对比，可以确认用户使用的是什么浏览器
//但是，这样的方法也不是绝对准确的，而且需要维护
