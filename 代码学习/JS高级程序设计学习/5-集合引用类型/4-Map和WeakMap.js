//Map集合类型是键值对存储机制
var m = new Map();//创建一个空映射
var m = new Map([
    ["first", "KKK"],
    ["last", "AAA"]
]);//以可迭代对象构造Map，需要二维数组（键值对）

//使用set()添加键值对
m.set("Extra", "LLL");
//get()获取数据
console.log(m.get("first"));//KKK
//has()查询是否包含
console.log(m.has("last"));//true
//size属性获取map长度
console.log(m.size);
//delete()删除单个键值对
m.delete("Extra");
//clear()删除整个map
m.clear();

//Map的键可以是任何JS数据类型，值没有限制
//内部的键比较使用相当于严格等于的SameValueZero进行

//Map会维护键值对插入的顺序，且可以迭代
//entries()方法
var m = new Map().set("first", "a").set("last", "b");
console.log(...m.entries());//一个迭代器，顺序返回[key, value]数组
//keys()、values()、forEach(callback, obj_thisArg)
//和以前学过的一样
//键和值在迭代器遍历时可以修改，但不会影响Map内部的引用



//WeakMap是Map的兄弟类型，其API也是Map的子集
//weak描述的是JS种垃圾回收对待WeakMap中键的方式

//声明和初始化方法和Map一致
//但是WeakMap只接受Object或是继承自Object的类型作为键，而值的类型没有限制
//可以把原始值包装成类型来作为键

//同样的，WeakMap可以使用set()、get()、has()、delete()

//WeakMap使用键不算是对键的引用，不会阻止垃圾回收
//但是键值对之间是有引用的，只要键存在值就不会被回收
//由于这个特性造成了WeakMap的键值对容易被回收，因此也WeakMap没有迭代
//WeakMap限制只有对象作为键，是为了保证只有通过键对象的引用才能取得值

//因为WeakMap实例不会妨碍垃圾回收，因此适合保存关联数据
