//JS将对象定义为一组属性的无序集合
//自定义对象通常是Object()，可用构造函数也可字面量



//JS中有一些内部特性，用来描述属性特征，但开发者不能直接访问这些特性

//数据属性
//包含一个保存数据值的位置，并有四个特性描述行为
/*
Configurable:是否可以通过delete删除并重新定义，是否可以修改属性特性，是否可以改为访问器属性
Enumerable:是否可以通过for-in循环返回
Writable:属性的值是否可以修改
Value:包含属性实际的值
动态添加属性时默认都是true（Value除外）
*/

//修改属性特性，使用Object.defineProperty()方法
let person ={}
//接收三个参数（要添加属性的对象，属性名，描述符对象）
//如果不指定特性的值，则默认为false（和动态添加时不一样）
Object.defineProperty(person, "name", {
    //如果configurable为false，则属性不能被删除，且configurable不能再被更改
    configurable: true,
    enumerable: true,
    writable: true,
    value: "Pot Dog"
});
console.log(person.name);//Pot Dog

//访问器属性
//不包含数据值，可能包含一个get函数和一个set函数
/*
Configurable:同上
Enumerable:同上
Get:获取函数，读取属性时使用，默认undefined
Set:设置函数，写入属性时使用，默认undefined
*/

//访问器属性不能直接定义，必须使用Object.defineProperty()定义它
let year = {
    year_:2023,
    yearChangeNum:0
}
Object.defineProperty(year, "yearNow", {
    //get()和set()可选，在严格模式下不写会报错
    get(){
        return this.year_;//下划线表示私有
    },
    set(newValue){
        if(newValue !== this.year_){
            console.log("Change!!!");
            this.yearChangeNum++;
            this.year_ = newValue;
        }else{
            console.log("Same Year");
        }
    }
});
year.yearNow = 2024;
year.yearNow = 2024;
console.log(year.yearNow);
console.log(year.yearChangeNum);

//定义多个属性，使用Object.defineProperties()方法
var book = {}
Object.defineProperties(book,{
    year:{
        writable:false,
        value: 2023
    },
    name:{
        writable:false,
        value:"My Book"
    }
});
console.log(book.year, book.name);//2023 My Book

//获取指定属性的属性描述符，使用Object.getOwnPropertyDescriptor()
//这个方法只对实例属性有效，如果要获取原型属性，则在原型上调用该方法
var bookDescriptor = Object.getOwnPropertyDescriptor(book, "year");//（属性所在对象，属性名字符串或Symbol）
console.log(bookDescriptor.value, bookDescriptor.writable);//2023 false 返回值是对象

//获取指定对象的所有属性描述符，使用Object.getOwnPropertyDescriptors()
var bookDescriptor = Object.getOwnPropertyDescriptors(book);
console.log(bookDescriptor);//返回值是包裹着对象的对象



//合并对象（也称混入）
//把 源对象 的所有本地属性一起复制到 目标对象上
//Object.assign(目标对象，任意数量源对象)（源对象中可枚举和自有属性将被复制）
//对每个符合条件的属性，调用源对象的[[Get]]获得属性值，调用目标对象的[[Set]]设置属性值
//Object.assign()执行浅复制，多个相同属性选最后一个，不能复制[[get]]和[[set]]
var obj1 = {
    name:"Tom",
    //get关键字，绑定函数与属性，属性被访问则对应函数运行
    get function(){
        console.log("Visit Object Parameter");
    }
};
var obj2 = {name:"Kim", age:24};
var obj3 = {
    //set关键字，绑定函数与属性，属性被赋值则对应函数运行
    set function(value){
        console.log("Now Seted:"+value);
    }
}
console.log(`obj1:${Object.getOwnPropertyNames(obj1)}
obj2:${Object.getOwnPropertyNames(obj2)}
obj3:${Object.getOwnPropertyNames(obj3)}`);
Object.assign(obj3,obj1,obj2);
console.log(`obj1:${Object.getOwnPropertyNames(obj1)}
obj2:${Object.getOwnPropertyNames(obj2)}
obj3:${Object.getOwnPropertyNames(obj3)}`);
console.log(obj3);//{ function: [Setter], name: 'Kim', age: 24 }
//Object.assign()没有回滚操作，操作不可逆



//Object.is()用来判断相等的方法，和===很像但考虑了更多情况
console.log(Object.is(NaN,NaN));//true
console.log(Object.is(+0, -0));//false



//语法糖（增强语法，更加简便），同样适用于类
var name = "KKK";
var obj = {
    //属性名和变量名一致，则只用写属性名，会自动解释为 属性名:属性名
    name,//等效于name:name
    //[]内的东西被当作JS表达式求值
    ["abc"+"123"]:1,//等效于agc123:1
    //简化方法，去掉了function
    sayName(){//等效于sayName:function(){}
        console.log(this.name);
    }
}
obj.sayName();//KKK
console.log(obj.abc123);//1



//对象解构
//使用与对象匹配的结构来实现对象属性赋值
var person2={
    name:"San",
    age:24
}

//下例中person2的结构与{name:personName, age:personAge}相似
//personName对应name的值，personAge对应age的值
var {name:personName, age:personAge}=person2;
console.log(personName,personAge);//San 24
//等价于
var personName = person.name;
var personAge = person.age;

//同样，如果属性名和变量名相同，可以简写
var {name, age} = person2;
//等价于
var name = person.name;
var age = person.age;

//引用属性不存在，则赋值undefined，同时可以初始化值
var {name, age, tall, sign="do my best"} = person2;
console.log(name,age,tall,sign);//San 24 undefined do my best

//结构会在内部使用函数ToObject()把源数据结构转换为对象
//因此，原始值会被当成对象，null和undefined不能被解构
let kkk,bbb;
//下面的person2就是源数据结构
({name:kkk, age:bbb}=person2);//如果事先声明了变量，则赋值表达式包含在括号内

//解构赋值可以用嵌套解构，以匹配嵌套结构
var person3 = {
    son:{
        name:"TTK"
    }
}
var {son:{name}}=person3;
console.log(name);//TTK

//函数列表中也可以进行解构赋值
function printPerson(a,{name,age},b){
    console.log(name,age);
}
//下面的person2实参被printPerson()的形参解构了
printPerson("a",person2,"b");//San 24
