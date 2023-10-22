//ES6添加了代理和反射，可以拦截并向基本操作嵌入额外能力
//在对目标对象的各种操作影响目标对象之前，可以在代理对象中对操作加以控制（想想Nginx代理）
//代理是一种新的基础语言特性，所以兼容性要考虑



//代理是目标对象的抽象（意思是对外来说代理就是目标对象，虽然实际上不是）
//目标对象既可以直接操作，也可以通过代理来操作

//创建空代理
//空代理，什么都不做，代理上执行的操作直接传给目标对象
var target = {}
var handler = {}
var proxy = new Proxy(target, handler);
//给目标对象添加属性，在访问时实际只有一个值
target.name = "Target is me";
console.log(target.name, proxy.name);
//给代理添加属性，实际是有两个值，一个在代理上，一个在目标上，两个一样
proxy.age = 20;
console.log(target.age, proxy.age);
//Proxy.prototype是undefined，因此不能使用instanceof操作符



//定义捕获器
//代理可以定义捕获器，它是 基本操作的拦截器
//每个捕获器对应一种基本操作，能够拦截并修改相关行为
var target = {id:"ID is 4"}
var handler = {
    //捕获器在处理程序中以方法名为键，下面是一个get()捕获器
    get(){
        return "Get Parameter Value";
    }
}
var proxy = new Proxy(target, handler);
console.log(proxy.id, target.id);//Get Parameter Value ID is 4
//get操作被触发了，并且它进行了修改后的相应行为



//捕获器参数和反射API
//所有捕获器都有相应参数，基于这些参数可以重建被捕获方法的原始行为
//例如get方法有（目标对象，查询属性，代理对象）三个参数
handler.get = function(trapTarget, property, receiver){
    console.log(trapTarget, receiver);
    console.log("查询的属性是:"+property);
    //拥有对应的反射API方法，可以返回它
    return Reflect.get(...arguments);
};
console.log(proxy.id);
//Reflect是一个全局对象，封装了原始行为，通过调用它的和原始行为同名方法可以快速重键
//所有可以捕获的方法都有对应的反射API方法，这些方法和被拦截的方法名称、函数签名、行为都相同
var proxy2 = new Proxy(target, Reflect);//对每个捕获方法都转发相应反射API
//这是一个简单定义空代理的代码



//捕获器不变式
//捕获处理程序要遵循 捕获器不变式
//捕获器不变式因方法不同而各异，都是为了防止捕获器出现过于反常行为而设定的（比如访问一个只读的属性却返回了自定义的值）



//可撤销代理
//使用new Proxy()创建的普通代理，代理和目标的联系将一直存在
//使用Proxy.revocable(target, handler)创建的代理则可以撤销联系（不可逆操作）
var target = {id:"My id is KOKO"}
var handler = {}
var revokeObject = Proxy.revocable(target, handler);
var proxy = revokeObject.proxy;//代理对象
var revoke = revokeObject.revoke;//进行撤销时使用的方法
console.log(proxy.id);
revoke();//运行撤销方法，撤销了代理和目标的联系
try{console.log(proxy.id);}catch(e){console.log("出错了")};



//很多反射方法返回 状态标记 这个布尔值，表示进行的操作是否成功
//代理也可以代理另一个代理
//这样可以在一个目标上面构建多层拦截网



//代理的问题和不足
//在代理中调用包含this参数的目标方法，this返回的不是目标对象而是代理对象
//此时在进行某些操作时会出错（例如：以this为键获取WeakMap中保存的值）
//在代理上调用某些方法会出错，因为这些方法使用了代理无法操作的机制（例如需要访问特性[[NumberDate]]才能运行）
