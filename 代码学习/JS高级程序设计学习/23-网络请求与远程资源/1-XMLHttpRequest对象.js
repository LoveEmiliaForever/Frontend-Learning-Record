//所有现代浏览器都通过XMLHttpRequest构造函数原生支持XHR对象
let xhr = new XMLHttpRequest();



//使用XHR对象首先要调用open()方法，接受3个参数：请求类型，请求URL，请求是否异步
//调用open()不会实际发生请求，只是为发送请求做好准备
//只能访问同源URL，即域名相同，端口相同，协议相同

//要发送请求，使用send()方法
//send()接受一个参数，就是作为请求体发送的数据，如无则应该传入null
//收到响应后，XHR对象的属性会被填充上数据
/*
    responseText    作为响应体返回的文本
    responseXML     响应的内容类型是"text/xml"或"application/xml"，则数据在此
    status          响应的HTTP状态
    statusText      HTTP状态的描述
*/
//statusText是不可靠的，因此使用status更好

//XHR对象有一个readyState属性，表示当前在 请求/响应 的哪一个阶段
/*
    0   未初始化，尚未调用open()
    1   已打开，调用open()但没调用send()
    2   已发送，调用send()但没收到响应
    3   接收中，已经收到部分响应
    4   完成，已经收到所有响应，可以使用了
*/
//每次readyState值发生变化，会触发readystatechange事件（它没有event对象）

//如果在收到响应之前想取消 异步 请求，可以调用abort()方法
//中断请求后，应该取消对XHR对象的引用（不应该重用它，内存问题）



//每个HTTP头部和响应都会携带一些头部字段
//XHR对象有一些方法暴露这些头部字段
/*
默认会发送的头部字段
    Accept      浏览器可以处理的内容类型
    Accept-Charset
    Accept-Encoding
    Accept-Language
    Connection  连接类型
    Cookie      页面设置的Cookie
    Host        发送请求的页面所在域
    Referer     发送请求页面的URI（虽然正确拼写是Referrer，但这是历史遗留问题）
    User-Agent  用户代理字符串
*/

//使用setRequestHeader()方法可以发送额外的头部，它接受两个参数：头部字段名称，值
//为了保证请求头部被发送，必须在open()之后，send()之前调用setRequestHeader()
//自定义头部必须区别于正常头部，以免影响服务器正常响应

//使用getResponseHeader()可以从XHR获取响应头部，传入头部名称即可
//使用getAllResponseHeaders()可以返回所有的响应头部



//GET请求
//GET请求，用于向服务器查询某些信息，可以在GET请求的URL后面添加查询字符串参数（?name=value&name2=value2）
//查询字符串的名和值要使用encodeUTIComponent()编码



//POST请求
//POST请求，用于向服务器发送应该保存的数据，每个POST请求都应该在请求体中携带提交的数据
//POST请求要占用比GET请求更多的资源（是GET速度的一半）



//XMLHttpRequest Level 2
//并不是所有浏览器都实现了XMLHttpRequest Level 2的所有部分

//FormData类型
//FormData类型便于将表单序列化，也便于创建与表单类似格式的数据
//可以直接给FormData()构造函数传入一个表单元素
let data = new FormData();
data.append("name", "FormData");//append(键, 值)
//XHR对象能够识别作为FormData实例传入的数据类型并自动配置相应的头部

//超时
//给timeout属性设置一个时间，超时后则触发timeout事件

//overrideMimeType()
//该方法用于重写XHR响应的MIME类型
//因为响应返回的MIME类型决定了XHR对象如何处理响应，因此更改MIME类型有一定的应用场景
//必须在send()之前调用overrideMimeType()
