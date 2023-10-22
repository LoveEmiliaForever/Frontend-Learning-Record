//Set是集合数据类型，它和Map很像
var s = new Set();
var s = new Set([1,2,3]);//传入可迭代对象
//可以使用add()、has()、delete()、clear()、size
//Set可以包含任何JS数据类型，同样使用SameValueZero这个相当于严格等于的方法判断

//Set会维护插入时的顺序，支持按顺序迭代
//它可以通过values()、keys()、entries()获取迭代器，也可以使用forEach()方法
//entries()方法的返回值不太一样，返回的是包含两个相同值的数组

//使用Set时比较容易遇到要自定义方法的情况，这时应该在Set()的子类上实现静态方法
//支持处理任意多个集合实例
//返回的集合必须保证顺序
//尽可能避免集合和数组的相互转换
//不应该修改原集合，应该要返回包含结果的新集合



//WeakSet与Set的区别和Map基本一致
//WeakSet中的值只能是Object或继承自Object的类型
//可以使用add()、has()、delete()
//WeakSet里面的值不属于正式引用，可以被垃圾回收
//它也没有迭代
//可以用它来给对象打标签
