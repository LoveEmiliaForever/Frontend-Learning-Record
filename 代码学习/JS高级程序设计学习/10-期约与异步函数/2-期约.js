//期约是对尚不存在结果的一个替身，描述的是一种异步程序执行的机制
//ES6增加了对Promises/A+规范的完善支持，即Promise类型



//期约基础
//Promise引用类型可用通过new操作符实例化，创建新期约时需要传入 执行器函数 作为参数
var p = new Promise(()=>{});//里面的是执行器函数
setTimeout(console.log, 0, p);//异步日志输出

//期约状态
/*
1.待定pending: 期约最初始状态（未开始或正在执行），可以落定为 兑现 或 拒绝 状态（不可逆操作）
2.兑现 fulfilled 或 resolved: 成功完成
3.拒绝 rejected: 没有成功完成
*/
//期约可能会是兑现，可能会是解决，可能会一直是待定，应该对它们有完善的处理
//期约的状态是私有的，不能直接被JS检测到，也不能被 外部 JS代码修改

//解决值、拒绝理由以及期约用例
//期约可以抽象的表示一个异步操作
//期约封装的异步操作会实际生成某个值，程序期待期约改变时 访问这个值 或是拿到 拒绝理由
//期约状态切换为兑现，则有一个私有的 内部值；如果是拒绝，则有一个私有的 内部理由
//这两个都是不可修改的引用，默认值undefined

//通过执行函数控制期约状态
//执行函数职责：初始化期约的异步行为、控制状态的最终转换
//通过调用resolve()和reject()这两个函数参数可以实现状态转换
//给它们传递的值则是返回值和拒绝理由
var p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1);//Promise { undefined }
var p2 = new Promise((resolve, reject) => reject("reject")).catch((error) => {console.log(error)});//调用reject()会抛出错误
setTimeout(console.log, 0, p2);//Promise { undefined }
//执行函数是同步执行的，因为它是期约的初始化程序
//修改状态则不可撤销，继续修改会静默失败

//Promise.resolve()
//调用Promise.resolve()实例化一个解决的期约，期约的值对应着第一个参数
//如果参数是期约，那么它的行为类似一个空包装
var p = Promise.resolve("abc");
setTimeout(console.log, 0, p);//Promise { 'abc' }

//Promise.reject()
//调用Promise.reject()会实例化一个拒绝期约，并抛出一个异步错误（异步错误只能由拒绝处理程序捕获.catch()）
//拒绝理由是第一个参数
var p = Promise.reject("abc").catch((error) => {console.log(error)});
setTimeout(console.log, 0, p);//Promise { undefined }

//期约是同步对象，但也是异步执行模式的媒介
//代码一旦以异步模式执行，则唯一与之交互的方式就是使用异步结构（期约）



//期约的实例方法
//期约的实例方法是连接外部同步代码与内部异步代码之间的桥梁

//Thenable接口
//JS的异步结构中，任何对象都有then()方法，它被认为实现了Thenable接口

//Promise.prototype.then()
//then()接受两个可选参数，onResolved和onRejected处理程序，它们分别在 兑现 和 拒绝 状态执行
//任何非函数类型参数将被忽略，不设置的需参数传入null
//then()会返回一个新的Promise实例
var p = Promise.resolve("OK");
//不传入处理程序，则原样向后传
var p2 = p.then();
setTimeout(console.log, 0, p2);
//没有显式的返回语句，则回传Promise.resolve(undefined)
var p3 = p.then(()=>{});
setTimeout(console.log, 0, p3);
//处理函数的返回值会被Promise.resolve()包装成新期约返回
var p4 = p.then(()=>{return "Korean"});
setTimeout(console.log, 0, p4);
//抛出错误则返回Promise.reject
var p5 = p.then(()=>{throw new Error("Example")}).catch((e)=>{setTimeout(console.log, 0, e);});
//但是返回Error对象不会触发reject()
var p6 = p.then(()=>{return new Error("Example2")}).catch((e)=>{setTimeout(console.log, 0, e);});
setTimeout(console.log, 0, p6);//返回的是一个包含Error对象的Promise而非报错

//Promise.prototype.catch()
//给期约添加拒绝处理程序，实际上是一个语法糖，相当于then(null, onRejected)，它返回一个新Promise
//onReject处理程序的返回值会被Promise.resolve()包装（因为它是捕获异步错误，捕获成功当然返回resolve）
//返回值的处理方面，和then()基本一致，注意抛出错误时使用Error对象（可以被定位，利于调试维护）

//Promise.prototype.finally()
//给期约添加onFinally处理程序，它会在期约落地时执行，但它不知道落地状态是解决还是拒绝
//finally()会返回新Promise，大多数情况它传递父期约
p1 = p.finally(()=>{});
setTimeout(console.log, 0, p1);//OK
//如果返回的是待定期约，或onFinally抛出错误，则返回相应的待定或拒绝期约
p2 = p.finally(()=>{return new Promise(()=>{})});
setTimeout(console.log, 0, p2);//<pending>
p3 = p.finally(()=>{throw new Error("finally error")}).catch((e)=>{});
//当待定期约落地，新期约仍旧会返回原始期约

//非重入期约方法
//期约落定时，相关处理程序仅仅被排期，而非立即执行
//在处理程序代码之后的同步代码一定会先于处理程序代码运行，这一特性称为 非重入
p.then(()=>{console.log("onResolved Handler")});
console.log("Common code");
/*  同步代码快于处理程序代码
Common code
onResolved Handler  */
/*  调用then()会把onResolved处理程序推进消息队列
在当前线程的同步代码执行完成前，处理程序不会执行  */

//邻近处理程序的执行顺序
//如果给期约添加多个处理程序，当期约状态变化时，处理程序会按照添加顺序依次执行

//传递解决值和拒绝理由
//落定后，期约会提供解决值或解决理由，它们会被传给处理程序，然后可以操作它们

//拒绝期约和拒绝错误处理
//在执行程序或处理程序中抛出错误会导致拒绝，对应的错误对象会成为拒绝理由
//虽然拒绝理由可以是任何，但应该统一使用Error对象
Promise.reject("example").catch(()=>{});
console.log("not example");
//异步错误因为是从消息队列中异步抛出的，因此不会影响同步指令继续执行



//期约连锁和期约合成
//多个期约组合可以构成强大的代码逻辑
//一个个拼接则为期约连锁，多个期约合成一组则为期约合成

//期约连锁
//每个期约实例方法都会返回一个新期约对象，而新期约对象又有自己的实例方法，这样就可以连接成链了
function step(str){
    return new Promise((resolve, reject) => {
        console.log(str);
        resolve();
    });
}
step("chain step1")
    .then(()=>step("chain step2"))
    .then(()=>step("chain step3"))
    .then(()=>step("chain step4"));
//这样的结构明显优于 回调地狱 

//期约图
//一个期约可以有多个处理程序，期约连锁可以构建 有向非循环图 结构
//期约是节点，处理程序是有向顶点（结构是一个向下分叉的树，顺序是从上到下运行）
/*
        A
       / \
      B   C
    /  \   \
   D    E   F
*/
var A = new Promise((resolve, reject) => {console.log("A");resolve();});

var B = A.then(() => console.log("B"));
var C = A.then(() => console.log("C"));

var D = B.then(() => console.log("D"));
var E = B.then(() => console.log("E"));

var F = C.then(() => console.log("F"));

//Promise.all()
//行为类似逻辑且，全解决则解决；存在待定或拒绝，则待定或拒绝
//它接受一个包含期约的可迭代对象，返回一个新期约，解决值是包含所有期约解决值的数组
var p = Promise.all([
    Promise.resolve("first"),
    Promise.resolve("second")
]);
setTimeout(console.log, 0, p);  //Promise { [ 'first', 'second' ] }
//可迭代对象的元素会被Promise.resolve()转换
var p2 = Promise.all([3, 4]);
//空的可迭代对象等于Promise.resolve()
var p3 = Promise.all([]);
//第一个拒绝的期约的理由，作为all()的拒绝理由
var p = Promise.all([
    Promise.resolve("first"),
    Promise.reject("second"),
    Promise.reject("third")
]).catch(()=>{});//second

//Promise.race()
//返回一组集合中最先解决或拒绝的期约的镜像
//接收一个可迭代对象，返回一个新期约
var p = Promise.race([
    Promise.resolve("first"),
    Promise.resolve("second")
]);
//可迭代对象的元素会被Promise.resolve()转换
var p2 = Promise.all([3, 4]);
//空的可迭代对象等于Promise.resolve(()=>{})
var p3 = Promise.all([]);
//无论是解决还是拒绝，race()都会包装第一落定期约的解决值或拒绝理由并返回新期约
