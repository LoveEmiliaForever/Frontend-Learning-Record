//BOM提供了与网页无关的浏览器功能对象
//window对象有两个身份，ES的Global对象，浏览器窗口的JS接口



//窗口关系
//top对象：始终指最上层窗口，即浏览器窗口本身  parent对象：当前窗口的父窗口  self对象：始终指向window对象
//最上层的window如果不是通过window.open()打开，其name属性就不会包含值



//窗口位置与像素比
//screenLeft 和 screenTop属性：分别表示窗口相对于屏幕左侧和顶部的位置，返回CSS像素
//使用moveTo()或moveBy()可以移动窗口，它们分别是绝对和相对的
console.log(`screenLeft:${window.screenLeft}
screenTop:${window.screenTop}`);//这个位置是浏览器窗口（包括导航栏之类的）相对于屏幕的位置
//移动窗口的方法可能被浏览器禁用（例如Edge）
window.moveTo(0,0);
window.moveBy(0,100);

//CSS像素：是Web开发使用的统一像素单位
//物理像素（屏幕实际分辨率）会被转换为CSS像素（浏览器报告的虚拟像素）
//转换比率由window.devicePixelRatio属性提供
console.log(`window.devicePixelRatio:${window.devicePixelRatio}`);//实际与DPI（每英寸像素数）对应



//窗口大小
//outerWidth 和 outerHeight返回浏览器窗口自身大小，innerWidth 和 innerHeight返回页面视口（不含浏览器边框）大小
console.log(`outerWidth outerHeight:${outerWidth} ${outerHeight}`);
console.log(`innerWidth innerHeight:${innerWidth} ${innerHeight}`);
//document.documentElement.clientWidth 和 document.documentElement.clientHeight同样返回页面视口大小
//但在移动浏览器中，它返回的是布局视口大小，即渲染页面的实际大小
console.log(`clientWidth clientHeight:${document.documentElement.clientWidth} ${document.documentElement.clientHeight}`);
//使用resizeTo()和resizeBy()调整窗口大小，绝对和相对
//它们同样可能被浏览器禁用（如Edge）
resizeTo(100,100);
resizeBy(200, -50);



//视口位置
//有时候网页太长，需要滚动翻阅
//window.pageXoffset或window.scrollX度量文档相对于视口滚动距离的X距离
//window.pageYoffset或window.scrollY度量文档相对于视口滚动距离的Y距离
console.log(`pageXoffset pageYoffset:${pageXOffset} ${pageYOffset}`);
console.log(`scrollX scrollY:${window.scrollX} ${window.scrollY}`);
//使用scroll()、scrollTo()、scrollBy()可以滚动页面
//它们还可以接收一个ScrollToOptions字典，通过behavior属性设置是否平滑移动
scrollTo({
    left: 100,
    top: 0,
    behavior: "smooth"//或"auto"
});
scrollBy(200,0);



//导航与打开新窗口
//window.open()可以导航到指定URL，或是打开新窗口
//共有四个参数(URL，目标窗口，特性字符串，布尔值：新窗口在历史记录中替代当前页面)
newWindow1 = window.open("https://www.baidu.com", "_blank");//可以指定窗口名进而指定窗口
//特性字符串是以逗号分隔的名值对，指定一些特性，书P365
//像下面这样设置后，会额外弹出一个小窗口，就像是广告弹窗一样的东西
newWindow2 = window.open("https://www.baidu.com", "_blank", "height=400,width=400,top=10,left=10");
newWindow2.close();
//新创建的窗口有一个opener属性指向打开它的窗口
//但如果是某些浏览器，不同标签页运行在独立进程，应该设置opener为null（不设置就不能运行在独立进制中）
console.log(`两者相等吗？${newWindow1.opener === window}`);
newWindow1.close();
//window.open()方法会返回一个新建窗口的引用，可以调用close方法关闭，关闭后只能够访问窗口的closed属性了
console.log(`window.closed:${newWindow2.closed}`);

//弹窗屏蔽
//有时弹窗会被屏蔽，此时window.open()可能返回null，有可能会报错
//因此，使用弹窗前首先应该检测弹窗是否会被屏蔽
let blocked = false;
try{
    let temp = window.open("http://www.baidu.com","_blank");
    if(temp == null){
        blocked = true
    }else{
        temp.close();
    }
}catch(e){
    blocked = true;
}
console.log("blocked:"+blocked);



//定时器
//setTimeout()：一定时间后执行代码  setInterval()：每隔一段时间执行代码
//JS是单线程的，它维护了一个任务队列，上述方法只是在指定时间后将任务添加到队列中，不保证任务的执行
let delayTask = setTimeout(()=>{console.log("delayTask Run")}, 3000);//3秒后把空函数放进任务队列
clearTimeout(delayTask);//取消排期中的任务delayTask1
//所有超时任务的代码都将在全局作用域下的一个匿名函数中运行
let circleTask = setInterval(()=>{""}, 1000);//每隔1秒往任务队列添加一次空函数
clearInterval(circleTask);//取消循环
//setInterval()尽量不要用在生存环境中



//系统对话框
//alert()、confirm()、prompt()它们外观由系统决定，它们运行时程序停止，它们消失后程序运行（同步模态）

//alert()警告
//只有一个提示字符串和一个确认按钮
setTimeout(()=>{alert("OK");},500);//接收字符串，不是字符串则调用toString()方法

//confirm()确认
//一个提示字符串，一个确认按钮true，一个取消按钮false
setTimeout(()=>{let flag = confirm("sure?");console.log("confirm() send: "+flag);},600);//会返回布尔值

//prompt()提示
//一个提示字符串，一个输入框，一个确认按钮返回文本，一个取消按钮返回null
setTimeout(()=>{let str = prompt("what?");console.log("prompt() send: "+str);},700);
