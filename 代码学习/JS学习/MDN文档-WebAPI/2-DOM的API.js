//DOM是一套用于控制 HTML 和样式信息的 API，大量使用了 Document 对象

//窗口（window）是载入网页的浏览器标签,它由 Window 对象表示
//该对象的方法可以进行一些窗口方面的操作

//导航器（navigator），代表浏览器的状态和身份（即用户代理），由 Navigator 对象表示
//可以用这个对象来检索用户的首选语言、用户网络摄像头的媒体流等信息

//文档（document，在浏览器中用 DOM 表示）是加载到窗口的实际页面，由 Document 对象表示
//可以使用这个对象来返回和操作构成文档的 HTML 和 CSS 的信息

//选择节点
const link = document.querySelector("a");
link.textContent = "Hello World";
link.href = "http://www.baidu.com";

//创建添加节点
const sect = document.createElement("section");
const para = document.createElement("p");
para.textContent = "Para Text";
sect.appendChild(para);

const text = document.createTextNode("This is Text");
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

//移动到某一元素底部
sect.appendChild(linkPara);//linkPara是唯一副本的引用

//复制元素
const linkPara2 = linkPara.cloneNode();

//删除节点
sect.removeChild(linkPara);//需要父节点和要删除的节点的引用
//在较旧的浏览器中删除节点
linkPara.parentNode.removeChild(linkPara);

//操作样式
//使用HTMLElement.style添加内联样式
//CSS样式在JS中是小驼峰命名法而不是连字符命名法
para.style.color = "white";

//设置属性
para.setAttribute("className", "value");
