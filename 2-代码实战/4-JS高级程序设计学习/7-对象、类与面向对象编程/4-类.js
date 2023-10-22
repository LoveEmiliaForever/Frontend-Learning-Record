//ES6引入的class关键字有正式定义类的能力，是基础性语法糖解构
//虽然看起来ES6支持正式的面向对象编程，实际上使用的仍然是原型和构造函数概念



//类定义
//类的定义也有类声明和类表达式，类名首字母大写
class Person {}//类声明
var Animal = class {}//类表达式
//类表达式再被求值前不能引用，类不能声明提升，类受块作用域限制
//类定义中的代码都在严格模式下执行
console.log(Person.name);//通过类的name属性可以得到它的名称字符串，只能在类作用域之内使用name



//类构造函数
//constructor关键字在类内部创建类构造函数，不定义它则类构造函数为空函数
class Car{
    //显式定义个返回对象，否则要使用super()
    //如果没有值引用返回的this，则this被销毁
    constructor(){return this;}
}
//调用类构造函数必须使用new关键字
var car = new Car();//相当于调用构造函数，可以传入参数
//实例化后，constructor函数会变成普通的实例方法
var carBlue = new car.constructor();

//JS类是一种特殊函数，有prototype属性，原型也有constructor属性
//可以使用instanceof操作符判断对象和类的关系
//使用new class()和new class.constructor()构建的对象是不一样的
var car = new Car();
var car2 = new Car.constructor();
console.log(car.constructor === Car, car2.constructor === Car);//true false
//class也可以被当成参数传递
function aaa(classIn){return new classIn();}
console.log(aaa(Car).constructor === Car);//true



//实例、原型、类成员

//实例成员
//在类构造函数内部可以给新创建实例添加自有属性
//每个实例对应一个唯一成员对象，所有成员都不会在原型上共享

//原型方法和访问器
//在类块中定义的方法作为原型方法，且不能在类块中给原型添加成员数据
class Cat{
    constructor(){
        this.name = "Cat";//实例成员
    }
    //类方法等同于对象属性，可以用字符串、符号、计算值作为键
    sayHi(){};
    [Symbol()](){};
    ["a"+"b"](){};
    //类也支持定义获取和设置访问器，行为和普通对象一致
    set a(kk){}
    get b(){}
}

//静态类方法
//这些方法通常用于执行不特定于实例的操作，不要求存在类的实例
//静态成员每个类只能有一个，使用static关键字
class Three{
    static locate(){
        console.log(this);//静态成员中，this引用类自身
    }
}

//迭代器和生成器方法
//可以在原型和类本身定义生成器方法
class Plate{
    //在原型上定义生成器方法
    *oneIterator(){
        yield "Jake";
    }
    //在类上定义生成器方法
    static *twoIterator(){
        yield "Dog";
    }
    //添加默认迭代器，把类实例变成可迭代对象
    *[Symbol.iterator](){
        yield [1,2,3];
    }
}

//虽然类不支持显式的在原型或类上添加成员数据
//但是可以在类定义的外部手动添加
Plate.abc = "abc";
Plate.prototype.kkk = "kkk";



//继承
//ES6原生支持了类继承机制，虽然背后依旧是原型链
//使用extends关键字可以支持单继承，可以继承任何拥有[[Construct]]和原型的对象（不仅可以继承类，还可以继承构造函数）
class BabyCat extends Cat{}
var cat = new BabyCat();
console.log(cat instanceof BabyCat, cat instanceof Cat);//true true

//构造函数、HomeObject、super()
//派生类的方法可以使用super()引用它们的原型，此关键字只能在派生类中使用，仅限于构造函数、静态方法内部
//ES6的构造函数和静态方法有内部特性[[HomeObject]]，指向定义该方法的类型，super始终被定义为[[HomeObject]]原型
/*
super只能在派生类构造函数和静态方法中使用
不能单独用super关键字，要么用它调用构造函数，要么用它引用静态方法
静态方法中使用super()会调用父类静态方法
构造函数内使用super()会调用父类构造函数，并赋值给this，还可以传参
如果没有定义构造函数，则实例化时调用super()
如果有构造函数，要么返回一个对象，要么调用super()
不能在super()之前引用this
*/

//抽象基类
//抽象类：可供其它类继承，本身不会被实例化
//new.target保存通过new关键字调用的类或函数
//通过在实例化时检测new.target是不是抽象类，可以阻止抽象类的实例化
//同时可以在抽象类构造函数中检测，要求派生类必须实现某个方法
class Animals{
    constructor(){
        //检测是否是实例化抽象类，如果是的则报错
        if(new.target === Animals){
            throw new Error("can't instantiated");
        }
        //检测派生类是否实现了这个方法
        if(!this.walk){
            throw new Error("must have walk method");
        }
        console.log("success!")
    }
}
class Dog extends Animals{
    //如果给派生类定义了构造函数，则抽象类的判断不会生效
    //constructor(){return new Array()}
    //由于原型方法在调用类构造函数前就已存在，因此可以通过this检测方法是否存在
    walk(){}
}
var dog = new Dog();//success

//继承内置类型
//JS有很多内置类型：Array、String等等，可以很方便的继承内置类型对他们进行扩展
class SuperArray extends Array{
    //在子类上扩展了Array给它了新方法
    sayOK(){
        console.log("OK");
    }
    //某些内置类型方法会返回新实例，默认情况下返回的实例类型和类是一样
    //覆盖Symbol.species访问器，可以决定在创建返回实例时使用的类
    static get [Symbol.species](){
        //创建返回实例时返回的不是SuperArray而是Array
        return Array;
    }
}
