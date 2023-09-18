// async/await可以让同步函数代码异步运行



//async
//async关键字用于声明异步函数，它可以用在声明、表达式、箭头函数、方法上面
async function bba(){}
console.log((async () => {return 0})());  //Promise { 0 }
console.log(bba());  //Promise { undefined }
//异步函数默认返回undefined，返回值会被Promise.resolve()包装成Promise对象
async function benci(){
    return Promise.resolve("BenCi");
}
//由于返回值类型关系，异步函数可以用处理函数
benci().then((x)=>console.log(x));
async function bmw(){
    return Promise.reject("Error");
}
//拒绝期约的错误不会被异步函数捕获
bmw().catch((e)=>{console.log(e)});

//await
//await关键字可以暂停异步函数代码的执行，等待期约解决
//它会暂停执行异步函数后面的代码，并且跳出JS运行时的线程（从这个函数退出，把这个函数挂起）
async function KKK(){
    //如果是一个实现了thenable接口对象，await解包它（拿到值）
    console.log(await Promise.resolve("This is sentence"));
    //如果不是，那么把它当成Promise.resolve()并解包它
    console.log(await "This is another sentence");
}
KKK();
//前面说过，单独的Promise.reject()不能被捕获，但如果有await在前，则await会解包它，释放它
async function DDD(){
    return await Promise.reject("Second Error");
}
DDD().catch((e)=>{console.log(e)});//可以捕获错误了

//await限制
//await只能在异步函数中使用，诸如Global作用域是不能用的
//由于异步函数的特性不会扩展到嵌套函数，因此await只能用在异步函数的直接定义中


//停止和恢复执行
//JS在碰到await时，会记录暂停点，等到await的值可用时JS会向消息队列推送一个任务，此任务会恢复异步函数的执行
//因此，即使await的是一个立即可用的值，也会进行异步求值
/*
await的是立即可用值
1.func()中：await暂停执行，为null向消息队列添加一个任务
2.退出func()
3.同步线程代码执行完毕
4.JS从消息队列取出任务，恢复异步函数执行

await的是Promise
1.func()中：await暂停执行，向消息队列添加一个Promise落定后执行的任务
2.Promise落定，把给await提供值的任务添加到消息队列
3.异步任务完成，JS从消息队列取出恢复执行func()的任务以及值
*/



//异步函数策略

//实现sleep()函数
async function sleep(delay){
    return new Promise((resolve) => {setTimeout(resolve, delay)});
}
async function PPP(){
    var t0 = Date.now();
    //由于是使用await来进行休眠的，因此单独使用sleep()是没用的
    //await sleep(5000);
    console.log(Date.now() - t0);
}
PPP();

//平行执行优化
//对于无关顺序、可以平行进行的多个任务，应该一次性初始化它们的Promise再await它们的结果
async function timeDelay(num){
    await sleep(num);
    return Promise.resolve("Now");
}
async function all(){
    var p1 = timeDelay(1000);
    var p2 = timeDelay(1100);
    var p3 = timeDelay(900);
    console.log(await p1);
    console.log(await p2);
    console.log(await p3);
}
all();

//栈追踪与内存管理
//JS再创建期约时会尽可能完整的保留调用栈，这样在抛出错误时栈追踪完整
//而对于异步函数，栈追踪和同步函数一样，因此错误栈追踪不完整
