//定义一个对象
//里面有属性和方法
//对象的字面量，手动的写出对象的内容来创建一个对象，不同于从类实例化一个对象
var person = {
    name: "Longg",
    age: 20,
    gender: "male",
    greeting: function(){
        //关键字"this"指向了当前代码运行时的对象
        console.log(`Hi, I'm ${this.name} ${this.age} as you see, ${this.gender}.`);
    }
};

/*console.log(person);
person.greeting();*/

//直接修改添加对象成员
person.age = 24;
person.tall = 170;
person["newFunction"] = function(){
    console.log("successful add a new function to person!");
};
person.newFunction2 = function(){
    console.log("successful add a new function2 to person!");
}
person.greeting = function(){
    console.log(`Hi, I'm ${this.name} ${this.age} as you see, ${this.gender} and tall ${this.tall}.`);
}

/*person.greeting();
person.newFunction();
person.newFunction2();

var inputData = "Kim";
person.name = inputData;
person.greeting();*/

/*
原型链
js中所有的对象都有一个内置属性，称为它的 prototype（原型）
prototype也是个对象，它也有原型，故而形成原型链
原型链终止于拥有 null 作为其原型的对象上
Object.prototype，它是最基础的原型，它的原型是null
使用__proto__访问原型，标准方法是Object.getPrototypeOf()
*/

//输出原型链
const myDate = new Date();
let object = myDate;

do{
    console.log(object);
    object = Object.getPrototypeOf(object);
}while(object);

//设置原型
const preObject = {
    greet(){
        console.log("我是原型");
    },
}

//创建新对象同时绑定原型
const currentObject1 = Object.create(preObject);

//定义构造函数
//直接在对象中定义的属性，被称为自有属性
function currentObject2(){
    this.name = "kim";
}
//把原型绑定到2
Object.assign(currentObject2.prototype, preObject);

const kk = new currentObject2();
currentObject1.greet();
kk.greet();
//查找对象有些什么自有属性
console.log(Object.hasOwn(kk, "name"));
console.log(Object.hasOwn(kk, "age"));


