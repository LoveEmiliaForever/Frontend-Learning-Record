//进度事件
/*
共有6个相关事件（客户端-服务端通信）
    loadstart   接受到第一个响应的字节
    progress    接受响应期间反复触发
    error       
    abort       
    load        成功接收完响应时触发
    loadend     通信完成，无论是error还是abort还是load都会触发
*/

//load事件
//在响应接收完成后立即触发
//有event对象，里面的target指向XHR实例

//progress事件
//每次触发都有event，其中的target指向XHR实例
/*
此外还有3个属性
    lengthComputable    布尔值，表示进度信息是否可用
    position            接收到的字节数
    totalSize           响应的ContentLength头部定义的总字节数
*/
//进度的百分比是 position/totalSize
//必须在调用open()之前添加onprogress事件处理程序



//跨源资源共享
//XHR进行Ajax通信有跨源安全策略限制，通常只能请求同一个域内的资源
//跨源资源共享CORS定义了浏览器和服务器如何实现跨源通信
//基本思路是：使用自定义HTTP头部允许浏览器和服务器相互了解，以确定请求或响应应该成功或失败

//对于简单请求，有Origin头部，它包含发送请求页面的源，以便服务器确定是否为其提供响应
//如果服务器决定响应请求，应该发送Access-Control-Allow-Origin头部，包含相同的源，如果资源是公开的，则包含"*"
//如果没有这个头部，或者不匹配，则代表不会响应浏览器请求
//要跨源，应该给XHR对象的open()传入绝对URL

//XHR对象给跨源添加了限制
//不能自定义头部，不能接收发送cookie，不能获取全部头部字段
//在访问本地资源时，用相对URL，访问跨源资源时，用绝对URL

//预检请求
//CORS通过预检请求的服务器验证机制，允许使用自定义头部、除GET和POST之外方法、不同请求体内容类型
//要使用上面的功能时，会先向服务器发送一个OPTIONS方法的请求
/*
这个请求包含以下头部
    Origin      和简单请求相同
    Access-Control-Request-Method   请求希望使用的方法
    Access-Control-Request-Headers  可选，自定义头部列表（以逗号分隔）
服务器则会在响应中发送如下头部，和浏览器沟通信息
    Access-Control-Allow-Origin     允许的源
    Access-Control-Allow-Methods    允许的方法
    Access-Control-Allow-Headers    允许的头部
    Access-Control-Max-Age          缓存预检请求的秒数（预检请求返回后，结果会按照响应指定的时间缓存一段时间）
*/

//凭据请求
//默认情况下，跨源请求不提供凭据（cookie、HTTP认证和客户端SSL证书）
//可用通过将withCredentials属性设置未true来表明请求会发送凭据
//如果服务器允许，则响应中包含Access-Control-Allow-Credentials: true
//如果没有这个头部字段，则代表不行



//替代性跨源技术
//CORS出现之前，开发者使用DOM特性进行跨源请求，它们不需要修改服务器

//图片探测
//使用<img>可以跨域加载图片而不担心限制

//JSONP
//它是在Web服务上流行的一种JSON变体，它是一个被包裹在函数调用里的JSON
cancelIdleCallback({"name":"KK"});//实际就是一个函数

//JSONP有两部分：回调和数据
//回调就是在页面收到响应之后应该调用的函数
//数据就是作为参数传给回调函数的JSON数据

//JSONP服务支持以查询字符串形式指定回调函数的名称
//这里就把回调函数的名字指定为handleResponse()了
"http://freegeoip.net/json/?callback=handleResponse"

//JSONP的调用是通过动态创建<script>元素并为src属性指定跨域URL实现的
let script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);

//使用JSONP可以直接访问响应，实现浏览器和服务器的双向通信
//但它可能有恶意内容，且不好确定JSONP请求是否失败
