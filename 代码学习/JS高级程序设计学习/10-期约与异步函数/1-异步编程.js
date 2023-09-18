//ES6新增的Promise引用类型，可以定义和组织异步逻辑
//且有async和await关键字定义异步函数的机制
//只有不想因为等待某个异步操作而阻塞线程，就可以用异步操作



//同步与异步
//同步对应顺序执行的指令，每条指令执行后能获得存储在本地的信息，在程序执行的每一步都可以推断出程序状态
//异步类似于系统中断，即当前进程外部的实体可以触发代码执行



//回调函数实现异步
//setTimeout(callback,1000)，1秒后将回调函数加入消息队列，但何时执行就不知道了（取决于什么时候从消息队列出列执行）

//异步返回值
//给异步操作提供一个回调，这个回调包含要使用异步返回值的代码（作为回调参数）
//位于函数闭包中的回调及其参数在异步执行时仍然可用
function double(value,callback){  //callback是要执行的异步操作
    setTimeout(()=>callback(value * 2), 1000);  //异步操作
}
double(3, x => console.log(x));//约一秒后返回6

//失败处理：成功回调和失败回调
setTimeout(() => {
    try{
        //判断成功与否
        if(false){throw "example error"}
        success();//运行成功回调
    }catch(e){
        failure(e);//运行失败回调
    }
}, 1000);
const success = () => console.log("success");
const failure = () => console.log("failure");

//嵌套异步回调
//如果异步返值之间相互依赖，那么就要嵌套回调
//例如
const success2 = () => double(3, x => console.log(x));
//如果把上面的嵌套多加一些，就会变得完全不具有维护性
//也就是称之为“回调地狱”
