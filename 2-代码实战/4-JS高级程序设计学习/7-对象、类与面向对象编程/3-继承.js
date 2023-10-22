//继承有两种，接口继承和实现继承，前者只继承方法签名，后者继承实际方法
//实现继承是JS唯一支持的继承，主要通过原型链实现

//通过对对象的了解，知道了构造函数、原型对象、实例的关系，它们可以通过指针组成一种链式的联系（原型链）
//读取实例的属性时，会依照原型链搜索属性



//默认原型
//默认情况下，所有类型继承自Object，且函数的默认原型是一个Object实例

//原型和继承
//instanceof操作符，如果实例的原型链中出现过相应的构造函数，则返回true
//isPrototypeOf()方法，只要实例的原型链包含这个原型就返回true

//子类要覆盖或是新建父类方法，应该在原型赋值之后进行（添加到原型上）
function A(){}
A.prototype.sayHi = function(){console.log("Hi")};
function B(){}
B.prototype = new A();//B继承A
//新方法
B.prototype.sayHello = function(){console.log("Hello")};
//覆盖已有方法
B.prototype.sayHi = function(){console.log("Don't Hi")};
//如果在原型赋值之前进行这些操作，那么这些方法会丢失（实际是原型被覆盖）

//原型链问题
//由于引用值会在所有实例间共享，所以一般引用值属性在构造函数中定义
//但由于原型继承，用作原型的对象内的引用值属性又会被实例共享（原型中可能包含引用值）
//其次，子类实例化时不能给父类构造函数传参数



//盗用构造函数（也称：对象伪装、经典继承）
//在子类构造函数中调用父类构造函数，使用apply()和call()指定父类构造函数执行上下文（操作对象）
function AA(name){
    this.name = name;
    this.array = [1,2,3,4,5];
}
function BB(){
    //以普通函数身份运行AA构造函数，上下文是BB的新实例
    //实际是操作了BB新实例，给它添加了属性
    AA.call(this, "Kim");//盗用构造器还可以从子类构造器向父类构造器传参数
    this.age = 18;//为了防止属性被覆盖，应该在盗用构造器后再设置属性
}
var a = new BB();
var b = new BB();
b.array.push("0");
console.log(a.array, b.array);//两个实例的引用值相互独立
console.log(a.name, b.name);//Kim Kim

//盗用构造器问题
//必须在构造函数中定义方法，方法不能重用



//组合继承（也称：伪经典继承）
//使用原型链继承原型的属性和方法，通过盗用构造器继承实例属性
function AAA(name){
    this.name = name;
    this.array = [1,1,1,1];
}
AAA.prototype.sayName = function(){console.log(this.name)};
function BBB(name, age){
    //继承属性
    AAA.call(this, name);//第二次调用父类构造函数
    this.age = age;
}
//继承方法
BBB.prototype = new AAA();//第一次调用父类构造函数
BBB.prototype.sayAge = function(){console.log(this.age)};

var aa = new BBB("A", 24);
var bb = new BBB("B", 18);
aa.array.push("0");
console.log(aa.array, bb.array);//引用值相互独立
aa.sayName();
bb.sayName();
aa.sayAge();
bb.sayAge();//方法也可以使用
//由于保存了原型链，组合继承可以用instanceof操作符和isPrototypeOf()



//原型式继承
//有一个对象，想要以它为基础创建一个对象
function object(o){
    function F(){}
    F.prototype = o;
    return new F();//返回以o为原型对象的对象实例
}
//在JS中，Object.create()规范了原型式继承概念
//它接受两个值（原型对象，一个给新对象定义了额外属性的对象）
//第二个值的表述方法和Object.defineProperties()中的相同
//引用值会在实例之间共享



//寄生式继承
//创建对象、增强对象（添加新功能）、返回对象
function createStrong(original){
    //新建一个对象，给它添加方法，最后返回它
    return object(original).sayOK = function(){console.log("OK")};
}
//通过寄生式继承给对象添加函数将导致函数难以重用（和构造函数类似）



//寄生式组合继承
//组合继承存在一定的效率问题，它的父类构造器运行了两次
//本质上，子类原型是要包含父类原型的所有属性的
//既然如此，何不直接使用父类原型对象作为子类原型对象？这样就不必再实例化一个父类对象作为子类原型对象了
function changeOriginalObject(subType, superType){
    //使用object()创建对象，是因为原型对象的constructor不能指向两个构造函数
    //因此使用一个朴素的Object对象代替麻烦的父类对象组成原型链的一环
    subType.prototype = object(superType.prototype);
}
function KKK(name){
    this.name = name;
    this.array = [1,2,3,4];
}
KKK.prototype.sayGOD = function(){console.log("GOD")};
function PPP(name, age){
    KKK.call(this, name);//只调用了一次父类构造函数
    this.age = age;
}
changeOriginalObject(PPP, KKK);
//寄生式组合继承可以算是引用类型继承的最佳模式
