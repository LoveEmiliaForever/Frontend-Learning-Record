//通过浏览器的用户代理字符串可以确定使用的是什么浏览器，它常被包含在HTTP请求头部
//通过navigator.userAgent可以访问用户代理字符串，但它是不可靠的（可以伪造）



//常见用户代理字符串
//由于要考虑兼容性，各浏览器的用户代理字符串没那么规矩



//Gecko渲染引擎，Firefox的核心
/*
Mozilla/5.0 (平台;加密标记;OS-or-CPU;Gecko引擎版本) Gecko/20100101 产品名称/产品版本
平台：除了Windows以外的平台会被显示，如Macintosh
加密标记：默认是强加密（128位加密）不出现，如果是I（40位加密）或N（不加密）则会出现
OS-or-CPU：如果是Windows则是Windows版本，如果是Mac则是CPU类型，如果是Unix则是操作系统名
*/
//示例：Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/114.0



//WebKit渲染引擎，基于KHTML渲染引擎开发，Safari核心
/*
Mozilla/5.0 (平台;加密标记;OS-or-CPU;语言) AppleWebkit/Webkit版本 (KHTML, like Gecko) Version/浏览器版本 Safari/Safari版本
加密标记：这里无论U、I、N 都要写出来
语言：浏览器的主语言缩写，如英语是en
*/
//示例：Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/522.15.5 (KHTML, like Gecko) Version/3.0.3 Safari/522.15.5



//Konqueror浏览器，Linux平台的浏览器，KHTML是其核心
/*
Mozilla/5.0 (compatible; Konqueror/Konqueror版本; OS-or-CPU) KHTML/KHTML版本 (like Gecko)
*/
//示例：Mozilla/5.0 (compatible; Konqueror/3.5; SunOS) KHTML/3.5.0 (like Gecko)



//Chrome浏览器，使用Blink渲染引擎，V8JS引擎
//包含了所有WebKit信息，但又加上了Chrome及其版本信息
/*
Mozilla/5.0 (平台;加密标记;OS-or-CPU;语言) AppleWebkit/Webkit版本 (KHTML, like Gecko) Chrome/Chrome版本 Safari/Safari版本
*/
//示例：Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36



//IOS和Android
//这两个移动操作系统的默认浏览器都是基于WebKit的
/*
IOS:
Mozilla/5.0 (平台;加密标记;OS-or-CPU;语言) AppleWebkit/Webkit版本 (KHTML, like Gecko) Version/浏览器版本 Mobile/移动版本 Safari/Safari版本
Android:
基本和IOS相同，但是没有Mobile后面的移动版本
*/



//浏览器分析
//分析window.navigator.userAgent可以知道代码运行在什么浏览器上
//但这个字符串是可以造假的，虽然它是只读的，但有些浏览器提供__defineGetter__方法可以修改用户代理字符串
//不过对付这种造假实在是鸡肋，如果必要的话使用能力检测
//GitHub有很多第三方用户代理解析程序，它们维护的比较频繁，使用它们好过自己编写
