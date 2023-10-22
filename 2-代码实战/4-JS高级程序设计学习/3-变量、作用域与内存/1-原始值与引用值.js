//原始值：最简单的数据
//引用值：由多个值构成的对象（引用值是对象）
//保存原始值的变量是按值访问的，操作的是变量中实际的值
//操作对象时，实际操作的是对对象的引用，因此保存引用值的变量是按引用访问的



//对引用值，可以随时添加修改属性、方法
//给原始值添加属性不会报错，但是没用（显示为undefined）
var a = "STR";
a.name = "A";
console.log(a.name);//undefined

//可以用原始字面量给原始值初始化
//如果使用new创建一个Object实例，它虽然行为类似原始值，但其实是引用值
var b = new String("STR");
b.name = "B";
console.log(b.name);//B 可以访问



//当把原始值赋值到另外变量时，实际是复制了一份原始值
//两个变量的值在内存里相互独立，互不影响
var a = "STR";
var b = a;
a = "SSR";
console.log(`a:${a} b:${b}`);
//而当引用值从一个变量赋值到另一个变量时，实际复制的是一个指针
//由于两个指针的目标相同，因此对一个变量的操作同样反应在另一变量上
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "OBJ1";
console.log(`obj2.name:${obj2.name}`);



//JS 中函数的参数是按值传递的，函数中对值的操作不会反应到外面
//也就是说，形参是局部变量
function setName(obj1){
    obj1.name = "SKK";
}
var obj1 = new Object();
setName(obj1);
console.log(obj1);
//引用值保存的是一个指针，按值传递在函数中的也是一个指针
//所以，对指针指向内容的操作会外泄



//typeof 对原始值管用，而如果要知晓对象究竟是什么类，使用instanceof操作符
//所有引用值都是Object实例，因此检测是否是Object返回true
var a = new String();
console.log(`a 是String对象吗：${a instanceof String}`);
console.log(`a 是Object对象吗：${a instanceof Object}`);
