//location对象
//提供当前窗口加载文档信息，以及通常导航功能，他是window和document的共享属性
//它不仅保存着当前加载文档的信息，也保存着URL解析后的信息（见书P372）
console.log(location.host);//服务器名及端口号
console.log(location.pathname);//路径或文件名

//查询字符串
//location.search返回从？开始直到URL末尾的所有内容（查询条件的URL表示）
//使用URLSearchParams对象，可以方便的访问、修改、检查查询字符串
let qs = "?q=javascript&num=10";
let sp = new URLSearchParams(qs);
//has()、get()、set()、delete()方法都有
console.log(`has(num):${sp.has("num")}
get(q):${sp.get("q")}`);
//URLSearchParams对象也能够当作可迭代对象
for (let param of sp){
    console.log(param);
}

//修改浏览器地址
//共有三种办法，location.assign(url)、window.location=url、location.href=url
//更改除location.hash意外的属性，都会使页面加载新URL
//上述三种方法修改URL会增加浏览器的历史记录
//如果不想增加历史记录，使用replace(url)方法，但如此用户不能回到前一页
//reload()方法，重新加载当前页面（动态更新）
//如果要从服务器重新加载，则使用reload(true)



//navigator对象
//客户端标识浏览器的标准，浏览器启用JS则存在（属性方法见书P375）

//检测插件
//通过navigator.plugins数组属性，可以知道所有的插件
//每一项都有属性：name：插件名称、description：插件介绍、filename：插件文件名、length：当前插件处理的MIME类型数量
//除此之外，每个插件对象还有一个MimeType对象，见书P377
//插件检测的原理就是，逐个比对插件名称，看是否已经安装了目标插件

//注册处理程序
//navigator.registerProtocolHandler()方法可以把一个网站注册为处理某种特定类型信息的应用程序
//（要处理的协议，处理协议的URL，应用名称）
/*
navigator.registerProtocolHandler("mailto",
"https://baidu.com?cmd=%s",
"一个处理邮件的应用程序");
%s表示原始请求
*/



//screen对象
//它保存的是显示器的信息，且每个浏览器暴露的属性不一样（见书P379）
console.log(`height:${screen.height}
width:${screen.width}
pixelDepth:${screen.pixelDepth}`);



//history对象
//每个window都有自己的history对象，它表示当前窗口首次使用以来用户的导航历史记录
//这个对象不会暴露用户访问过的URL，但可以用它来前进和后退

//go()方法可以在用户历史记录中沿任何方向导航
//接受一个参数，正整数表示在历史记录里前进，负整数表示在历史记录里后退
//还有两个方法，history.back()和history.forward()表示后退和前进
//history.length表示历史记录的条目数量
