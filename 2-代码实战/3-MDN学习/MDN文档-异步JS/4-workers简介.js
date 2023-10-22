//Workers 给了你在不同线程中运行某些任务的能力,你可以启动任务，然后继续其他的处理

//你的主代码和你的 worker 代码永远不能直接访问彼此的变量
//Workers 和主代码运行在完全分离的环境中，只有通过相互发送消息来进行交互,这意味着 workers 不能访问 DOM

//创建使用worker

//worker的代码放在另外的文件之中
//只要 worker 被创建了，woker 脚本就会执行
const worker = new Worker("./generate.js");

//使用 worker.postMessage() 向 worker 发送一条消息，这条消息可以携带一个参数
worker.postMessage({
    command: "generate",
    quota: quota,
});

//worker给主线程发回消息时进行操作
worker.addEventListener("message", (message) => {
    document.querySelector("#output",)
    .textContent = `Finished generating ${message.data} primes!`;
});

//--------------------------------generate.js

//监听message事件，使用message.data获取数据以得到指示
addEventListener("message", (message) => {
    if (message.data.command === "generate") {
        generatePrimes(message.data.quota);
    }
});

function generatePrimes(quota){
    pass;
}

//完成后给主线程发送消息
postMessage(primes.length);



//worker有多种
//dedicated worker：上面创建的worker类型，意味着它由一个脚本实例使用
//SharedWorker：可以由运行在不同窗口中的多个不同脚本共享
//Service worker：行为就像代理服务器，缓存资源以便于 web 应用程序可以在用户离线时工作