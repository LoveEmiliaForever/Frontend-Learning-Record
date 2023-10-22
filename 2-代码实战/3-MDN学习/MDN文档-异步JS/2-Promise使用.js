//Promise 是现代 JavaScript 中异步编程的基础，是一个由异步函数返回的可以向我们指示当前操作所处的状态的对象
//在基于 Promise 的 API 中，异步函数会启动操作并返回 Promise 对象
//可以将处理函数附加到 Promise 对象上，当操作完成时（成功或失败），这些处理函数将被执行

//使用fetch()
//一个现代的、基于 Promise 的、用于替代 XMLHttpRequest 的方法


//调用fetch()请求json文件
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
//输出fetchPromise变量
console.log(fetchPromise);
//绑定一个处理函数到fetchPromise的then方法，以处理成功后的操作
fetchPromise.then((response) => {
    console.log(`已收到响应：${response.status}`);
});
//不会被阻塞，仍旧顺序运行
console.log("已发送请求……");


//Promise链
const fetchPromise2 = fetch(
"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

//then() 本身也会返回一个 Promise，这个 Promise 将指示 then() 中调用的异步函数的完成状态
//也就是说，连续异步时不用嵌套调用，而可以链式调用
fetchPromise2
    .then((response) => {
        if (!response.ok) {//一般的错误处理
        throw new Error(`HTTP error: ${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        console.log(json[0].name);
    });


//Promise链的错误处理
//链条中任何一处出错，错误处理都将在catch()处处理
const fetchPromise3 = fetch(
"bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise3
    .then((response) => {
        if (!response.ok) {
        throw new Error(`HTTP 请求错误：${response.status}`);
        }
        return response.json();
    })
    .then((json) => {
        console.log(json[0].name);
    })
    .catch((error) => {//错误处理函数绑定到Promise
        console.error(`无法获取产品列表：${error}`);
    });


//Promise术语
//pending进行中，fulfilled操作成功，rejected操作失败
//上面的成功和失败是所进行操作的操作是否进行成功或失败


//合并使用多个Promise
//Promise.all()和Promise.any()

const f1 = fetch("url-1");
const f2 = fetch("url-2");
const f3 = fetch("url-3");

Promise.all([f1,f2,f3])//输入的是一个Promise数组
    .then((responArray) => {
        for (const response in responArray){//得到的也是一个返回数组，顺序一样
            console.log(response);
        }
    })
    .catch((error) => {//任何一个出错了就好捕获错误
        console.error("其中任何一个Promise出错了")
    });

Promise.any([f1,f2,f3])
    .then((respon) => {//任何一个成功了就返回一个Promise
        console.log(respon);
    })
    .catch((error) => {//全部的Promise都出错就捕获错误
        console.error("全部的Promise出错了")
    });


//async和await
//在一个函数的开头添加 async，就可以使其成为一个异步函数,异步函数总是返回一个 Pomise
//在调用一个返回 Promise 的函数之前使用 await ,使得代码在该点上等待，直到 Promise 被完成
//await 强制异步操作以串联的方式完成

async function fetchProducts() {
    try {
        // 在这一行之后，我们的函数将等待 `fetch()` 调用完成
        // 调用 `fetch()` 将返回一个“响应”或抛出一个错误
        const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if (!response.ok) {
        throw new Error(`HTTP 请求错误：${response.status}`);
        }
        // 在这一行之后，我们的函数将等待 `response.json()` 的调用完成
        // `response.json()` 调用将返回 JSON 对象或抛出一个错误
        const json = await response.json();
        console.log(json[0].name);
    } catch (error) {
        console.error(`无法获取产品列表：${error}`);
    }
}

fetchProducts();


