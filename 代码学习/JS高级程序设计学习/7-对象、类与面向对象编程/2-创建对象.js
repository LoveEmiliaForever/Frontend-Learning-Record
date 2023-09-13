//ES5没有支持面向对象解构，但可以用原型模拟行为
//ES6则支持了面向对象，不过它是封装了ES5中代码的语法糖



//工厂模式：抽象创建特定对象的过程
function a(age){
    let o = new Object;
    o.age = age;
    return o;
}
var o = a(12);//创建了一个对象
//可以方便的创建多个相似对象，但没有解决对象标识问题



//构造函数模式
function Aobject (age){//构造函数首字母要大写
    this.age = age;
    this.sayAge = function(){
        console.log(age);
    };
}
//新对象的[[Prototype]]被赋值为构造器的prototype属性
//构造函数内部的this指向新对象
var o = new Aobject();//使用new操作符
//新对象的constructor属性指向构造器函数
//这个属性用来标识对象类型
console.log(o.constructor == Aobject);//true

//构造函数和普通函数的区别就是调用方式不同
//使用new调用就是构造函数，否则不是
var o = new Aobject();//构造函数
//没有明确设置this值的情况下，this指向Global对象
Aobject();//普通函数

//构造函数的问题：其定义的方法会在每个实例上都创建一遍
//this.sayAge = function(){} 实际上是 this.sayAge = new function(){}
//这种方式创建的函数作用域和标识符解析不同，因此实际上它们不一样
var k = new Aobject();
console.log(o.sayAge == k.sayAge);//false

//解决上述问题，可以把函数单独提出来定义，构造函数赋值它的引用
function Bobject(){
    this.sayHi = sayHi;
}
function sayHi(){
    console.log("Hi");
}
var o = new Bobject();
var k = new Bobject();
console.log(o.sayHi == k.sayHi);//true
//但这样做，作用域比较乱，且一个类的代码散落各地难以维护



//原型模式
//每个函数都会创建一个prototype属性，它是一个对象，包含可以由特定类实例共享的属性和方法
//实际上，这个对象就是通过构造函数创建对象的原型
function Cobject(){};
Cobject.prototype.sayHello = function(){console.log("Hello")};
var o = new Cobject();
var k = new Cobject();
console.log(o.sayHello == k.sayHello);//true
//这种原型模式定义的属性和方法是由所有实例共享的

//理解原型
//函数在创建时会按照特殊规则建立一个prototype属性（指向原型对象）
//所有原型对象自动获得一个constructor属性，指向与之关联的构造函数
//调用构造函数创建一个新实例，则新实例的[[Prototype]]指向构造函数的原型对象
//实例与构造函数原型之间有直接联系，但实例与构造函数之间没有
console.log(typeof Cobject.prototype);  //object
console.log(Cobject.prototype);  //{ sayHello: [Function (anonymous)] }
console.log(Cobject.prototype.constructor == Cobject);  //true
//Firefox、Safari、Chrome在每个对象上暴露__proto__属性，指向对象的原型
console.log(o.__proto__ == Cobject.prototype);//true
//instanceof检查实例的原型链中是否包含指定构造函数的原型
console.log(o instanceof Object);//true
//使用isPrototypeOf()确定两对象间原型链关系
//调用方法的对象是传入对象的原型则返回true
console.log(Cobject.prototype.isPrototypeOf(o));//true
//使用Object.getPrototypeOf()可以取得对象的原型
console.log(Object.getPrototypeOf(o));//{ sayHello: [Function (anonymous)] }  和__proto__的返回一样
//使用Object.setPrototypeOf()可以更改实例的原型，从而重写原型继承关系
//但这个方法可能严重影响性能，涉及每个访问修改原型对象的对象
Object.setPrototypeOf(o, Aobject.prototype);
console.log(Object.getPrototypeOf(o) == Cobject.prototype);//false
Object.setPrototypeOf(o, Cobject.prototype);
//通过Object.create()创建新对象，同时指定其原型
var c = Object.create(Cobject.prototype);
console.log(Object.getPrototypeOf(c) == Cobject.prototype);//true

//原型层级
//在实例添加与原型同名的属性，则该属性会 遮蔽 原型对象的同名属性
//可以使用delete操作符删除实例的属性，从而恢复对原型对象属性的访问
function Dobject(){}
Dobject.prototype.name = "DDD";
Dobject.prototype.sayD = function(){console.log("This D function")};
var o = new Dobject();
var k = new Dobject();
o.name = "OOO";
console.log(o.name, k.name);//OOO DDD
delete o.name;  //执行属性删除
console.log(o.name, k.name);//DDD DDD
//hasOwnProperty()用于确定属性是实例的还是原型的，实例的属性返回true
o.name = "OOO";
console.log(o.hasOwnProperty("name"), k.hasOwnProperty("name"));//true false

//原型和in操作符
//单独使用in操作符时，如果可以通过对象访问指定属性则返回true（无论该属性是实例的还是原型的）
console.log("name" in o, "name" in k);//true true
//for-in循环会返回可以访问且可以枚举的属性，无论实例或原型属性
for (let i in o){console.log(i)};//name sayD
//如果要获取对象的所有 可枚举 的 实例属性 ，可以用Object.keys()方法
console.log(Object.keys(o));//["name"]
//如果要获取所有的实例属性，无论是否可以枚举，则使用Object.getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(o));//["name"]
//Object.getOwnPropertySymbols()和Object.getOwnPropertyNames()相似，不过它获取的是Symbol()为键的属性
console.log(Object.getOwnPropertySymbols(o));//[]
//for-in和Objecy.keys()是无序的
//Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()、Object.assign()是有序的（先是升序的数值键，再是插入顺序的其它键）



//对象迭代
//Object.values()返回对象值的数组，Object.entries()返回键值对二维数组，Symbol会被忽略，它们执行浅复制
var tall = Symbol();
var o ={
    name:"abc",
    age:12,
    [tall]:170,
    sayKim(){
        console.log("Kim");
    }
}
console.log(Object.values(o), Object.entries(o));//[ 'abc', 12, [Function: sayKim] ]     [ [ 'name', 'abc' ], [ 'age', 12 ], [ 'sayKim', [Function: sayKim] ] ]

//重写构造函数的原型时小心constructor属性，它是不可枚举的且指向构造函数
//因此，使用Object.defineProperty()来定义constructor最好

//由于从原型上搜索值的过程是动态的，因此对原型的改动会反应到实例上面

//所有原生引用类型（String、Array等）的构造函数都在原型上定义了实例方法
//通过原生对象的原型可以取得或是修改添加默认方法（但不推荐）

//原型的属性有引用类型时，子类的操作可能相互影响
//如果不是为了共享数据，最好给子类一个副本
