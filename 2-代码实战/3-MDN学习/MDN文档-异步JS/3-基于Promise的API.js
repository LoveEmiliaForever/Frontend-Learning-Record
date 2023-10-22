//Promise() 构造器
//Promise() 构造器使用单个函数作为参数。我们把这个函数称作执行器
//执行器本身采用两个参数，这两个参数都是函数，通常被称作 resolve 和 reject

//如果异步函数成功了，就调用 resolve，如果失败了，就调用 reject

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        window.setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

//往后就像使用fetch()一样的使用alarm()就行了
