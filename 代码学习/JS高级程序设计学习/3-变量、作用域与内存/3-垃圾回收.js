//JS使用垃圾回收，执行环境负责在代码执行时管理内存
//确定哪个变量不会再使用，则释放它占用的内存，这个过程是周期性的（或指定某个时间）



//标记清理（最常用）
//变量进入上下文时，被加上存在于上下文中的标记，离开时，加上离开上下文标记
//垃圾回收程序运行时，给所有变量添加标记
//然后去除 在上下文中，以及关联的变量 的标记
//最后删除任然有标记的变量，回收内存



//引用计数（不那么常用）
//对每个值都记录它被引用的次数，被引用一次+1，不被引用-1（初始化时为1）
//垃圾回收程序会释放引用数为0的值的内存
//但是这个方法存在循环引用变量无法清除的问题



//垃圾回收程序会周期性运行，可能造成性能损失
//现代垃圾回收程序会自动决定何时运行程序，探测机制因引擎而异



//内存管理
//分配给浏览器的内存通常比较少
//解除引用：如果数据不再必要，把它设置为null

//使用const和let可以减少变量存在上下文的范围，以让垃圾回收程序尽早回收它们

//Chrome使用的是V8 JavaScript引擎
//它在编译时会使用 隐藏类 ，能够共享隐藏类的对象性能会更好
function B(){
    this.a = "A";
}
var b1 = new B();
var b2 = new B();//两个共享一个隐藏类
b2.b = "B";//给b2添加了一个属性，此时两变量已经不是同一个类，有两个隐藏类

function C(){
    this.a = "A";
    this.b = "B";
}
var c1 = new C();
var c2 = new C();//此时两个共享一个隐藏类

//减少隐藏类的方法是，尽可能少的给对象 动态属性赋值（添加、删除属性）
//在构造函数内部，把所需要的属性写完，实例化时，用不到的赋值null即可



//内存泄露：指程序中已动态分配的堆内存由于某种原因程序未释放或无法释放
//意外声明全局变量导致内存泄露
names = "kkk";
console.log(names);
//定时器的回调导致内存泄露
var names = "AK";
setInterval(()=>{console.log(names)})//定时器运行则names的内存泄露
//闭包可能导致内存泄漏
var a = function(){
    let name = "kk2";
    return function(){
        return name;
    };
};//闭包一直引用着name变量，导致内存泄露



//优化：静态分配与对象池
//虽然无法直接控制垃圾回收，但是可以间接控制，减少垃圾回收次数
//可以手动创建一个对象池，程序可以向它请求对象设置使用它，完成操作后再把它还给对象池
//使用一个足够大的数组维护对象池

