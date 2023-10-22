//六种简单类型（也称原始类型）
//Undefined、Null、Boolean、Number、String、Symbol
//一种复杂类型：Object，一种无序名值对集合




//typeof操作符
//它是一个操作符，因此可以用参数也可以不用
let a;
let b = {
    "age":16
}
let c = Symbol();
console.log(typeof (a));//undefined
console.log(typeof (true));//boolean
console.log(typeof ("str"));//string
console.log(typeof (6));//number
console.log(typeof (b));//object
console.log(typeof (()=>{}));//function
console.log(typeof (c));//symbol
//null表示一个空对象指针，所以是一个对象
console.log(typeof null);//object




//Undefined类型:只包含一个特殊值undefined
//声明变量但不赋值则变量为undefined
//未声明变量也为undefined
let message;
console.log(typeof message);//未初始化变量，undefined
console.log(typeof noneMessage);//未声明变量，undefined
//还可以将它们和undefined字面量进行比较
console.log(message == undefined);//结果为true
//同时undefined是一个假值，但它不等于false
if(!undefined){
    console.log("undefined 是一个假值");
}




//Null类型：只包含一个特殊值null，它是一个空对象指针
//undefined由null演变而来，因此它们表面相等
console.log(undefined == null);//true
console.log(undefined === null);//false
//null应该使用在一个表示对象的变量还没有初始化时
let oneObject = null;//这个变量要保存对象，但暂时不保存则使用null
//null是一个假值，但和false不相等
console.log(false == null);//false
if(!null){
    console.log("null 是一个假值");
}




//Boolean类型：字面量true和false
//它们不同于数值，因此true不等于1，false不等于0
//所有的类型都可以转换为布尔值使用Boolean()
console.log(Boolean("非空字符串"))//true
console.log(Boolean(""))//false
console.log(Boolean(1))//非0数值，包括无穷true
console.log(Boolean(0))//false
console.log(Boolean(NaN))//false
console.log(Boolean({a:1}))//任意对象true
console.log(Boolean(null))//false
console.log(Boolean(undefined))//false




//Number类型

//整数
//八进制，以0开头或是0o开头，如果不正确则忽略0当作十进制
//十六进制，以0x开头（x小写），后续字母不区分大小写
let intNumTen = 55;//有效十进制
let intNumEight = 070;//有效八进制56
let intNumEight2 = 0o70;//有效八进制56
let intNumEight3 = 079;//无效八进制，当作79对待
let intNumHex = 0xA;//有效十六进制10
//有时会出现+0和-0，在所有情况下两者均相等

//浮点数
//小数点前可以没有数字，视作0.xxx
let floatNum1 = 0.1;
let floatNum2 = .1;
console.log(floatNum1 == floatNum2);//true
//任何可以转换成整数的浮点数都会被转换
let floatNum3 = 1.;//实际存储为整数1
let floatNum4 = 10.0;//实际存储为整数10
//非常大和小的数，可以用科学计数法表示
let floatNum5 = 3.14e10;
console.log(floatNum5);//31400000000
//浮点数不精确，当心

//数的范围
//最小数值是Number.MIN_VALUE，最大数值是Number.MAX_VALUE
//超出了这个范围的数都为无限，有-Infinity和Infinity
console.log(`最大值：${Number.MAX_VALUE}，最小值：${Number.MIN_VALUE}`);
//可以使用isFinite()判断是否是正常数字
//Number.NEGATIVE_INFINITY是负无限，Number.POSITIVE_INFINITY是正无限
console.log(`查看负无穷是否是正常数字：${isFinite(Number.NEGATIVE_INFINITY)}`);
console.log(`正无穷：${Number.POSITIVE_INFINITY}，负无穷：${Number.NEGATIVE_INFINITY}`);
//存在无限则不能计算，所有计算结果都是无限
console.log(`正无穷减一：${Number.POSITIVE_INFINITY - 1}`);

//NaN：不是数值
//用来代表本来要返回数值的操作失败了
console.log(0/0);//NaN
//任何涉及NaN的操作都返回NaN，且NaN不等于除自己外任何值
console.log(10/NaN);//NaN
//使用isNaN()可以确定参数是否“不是数值”
//它会尝试把参数转换为数值，如果失败则返回true
console.log(isNaN(NaN));//true
console.log(isNaN(996));//false
console.log(isNaN("blue"));//false
//当参数是对象时，会调取valueOf()方法和toString()方法，测试返回值

//数值转换：Number()、parseInt()、parseFloat()
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN
console.log(Number("996"));//996 合法数字字符串则转换
console.log(Number(""));//0
console.log(Number("blue"));//NaN
//当参数是对象时，会调取valueOf()方法和toString()方法，返回值
//parseInt()和parseFloat()是专门针对字符串的方法
//从非空字符开始，到无效字符停止
parseInt("10", 2);//parseInt()可以指定数字进制
parseFloat("0.1");//parseFloat()始终解析十进制




//String类型
//字符串是16位Unicode字符序列，可以使用" ' `三种符号包裹

//字符字面量，表示一些特殊字符
console.log("第一行\n第二行");//类似\n这种表示换行的特殊字符即字符字面量
//使用String.length可以知道字符串长度
console.log("一共有多少个字符？".length);//但如果有双字节字符，则不准确

//字符串一旦创建，不可更改，只能销毁
//对字符串的更改都是在后台进行"销毁、重建"这个流程的
let strJava = "Java";
strJava = "Java" + "Script";//将原先的strJava变量销毁后重新创建了变量

//字符串转换toString()、String()
//大多数值都有toString()方法，它可以返回一个当前值的字符串等价物
//null和undefined没有toString()方法
let ageNum = 11;
let ageNumStr = ageNum.toString();//返回字符串"11"
//在对数值调取toString()时还可以指定输出进制数
let ageNumBiaStr = ageNum.toString(2);
console.log(ageNumBiaStr);//返回字符串"1011"

//String()函数则更泛用
//如果参数有toString()方法，则使用，如果是null则返回"null"，如果是undefined则返回"undefined"
console.log(String(null));//"null"
console.log(String(undefined));//"undefined"

//模板字面量
//模板字面量会保持字符串的输入样式，保留换行和空格
//它还支持字符串插值，插入的值会使用toString()转换
let longStr = `first line
second line
${ageNumBiaStr} is 11`;
console.log(longStr);

//模板字面量标签函数
//定义标签函数，它接收被插值符号分隔的模板数组，以及每个插值的结果
let parameter1 = 6;
let parameter2 = 8;
//...expressions表示把剩余的参数都集中到expressions数组中，...是剩余操作符
function simpleTag(strings, ...expressions){
    console.log(strings);
    for (const expression of expressions){
        console.log(expression);
    }
    return "Back Value";
}
let simpleTagResult = simpleTag`加数${parameter1}，被加数${parameter2}，和值${parameter1 + parameter2}`;
//模板被分割成了字符串数组[ '加数', '，被加数', '，和值', '' ]
//插值被提前了出来 6，8， 14
console.log(simpleTagResult);//函数的返回值"Back Value"
//这种函数的好处是可以自定义处理插值的行为

//原始字符串：模板字面量以原始方式显示
//通过String.raw可以做到这点，它是一个标签函数
console.log(String.raw`第一行\n第二行`);//不会换行，而是显示第一行\n第二行




//Symbol类型，中文名符号类型
//它是原始值，符号的实例是"唯一的"、"不可改变的"（每次新建的都不一样）
//它的用途是确保对象属性使用唯一标识符，就是某些内容只能通过这个符号才能访问（类似内存地址）
//符号就是用来创建唯一记号，进而作为类的属性或方法的入口

let symbol1 = Symbol("符号");//通过Symbol()创建符号属性，可以给它一个描述
let symbol2 = Symbol("符号");
console.log(symbol1 != symbol2);//每个符号都是唯一的，描述仅仅只是描述

//符号没有字面量语法，也就是说无法仅仅通过一样的代码就可以访问它
//例如在父子类中，子类只需要定义一个和父类一样的方法就可以重写父类方法
//但如果是使用symbol作为引用入口，即使子类使用同样的代码试图重写父类方法，也无法成功
//因为每个symbol是唯一的，所以子类其实是新定义了一个方法，只是刚好代码一样
//如果要重写，则应该把父类方法的symbol的引用传给子类，子类就能重写这个方法

//Symbol()函数无法new

//全局符号注册表
//可以用一个字符串作为键，创建一个全局的symbol
let globalSymbol1 = Symbol.for("global symbol");//第一次使用，没有这个符号，则创建
let globalSymbol2 = Symbol.for("global symbol");//第二次使用，表内有符号，则引用
console.log(globalSymbol1 == globalSymbol2);//两个是相等的
//使用Symbol.keyFor()来查询全局符号注册表，它接收符号，返回键值或者undefined
console.log(Symbol.keyFor(globalSymbol1));//返回键值
console.log(Symbol.keyFor(symbol1));//传入参数不是全局符号则回传undefined

//使用symbol作为属性
let s1 = Symbol("s1"),
    s2 = Symbol("s2"),
    s3 = Symbol("s3"),
    s4 = Symbol("s4");
let egObject = {
    [s1]:"one statement",
    [s2]:"next str",
    str:"normal property"
};
console.log(egObject);
console.log(egObject[s1]);//这样就可以访问属性了

//返回对象中属性的方法
console.log(Object.getOwnPropertyNames(egObject));//所有常规属性的引用
console.log(Object.getOwnPropertySymbols(egObject));//所有symbol的引用
console.log(Object.getOwnPropertyDescriptors(egObject));//所有引用及其描述
console.log(Reflect.ownKeys(egObject));//所有的引用




//常用内置符号
//ES6有一些内置的符号，用于暴露语言内部行为，可以重新定义它们以改变原生结构的行为
//它们是全局函数Symbol()的普通字符串属性（普通属性），指向一个符号的实例
//所有内置符号不可写、不可枚举、不可配置

//Symbol.hasInstance，一个方法
//由instanceof操作符使用，决定一个构造器对象是否认可一个对象是它的实例
function Foo(){}
let f = new Foo();
console.log( f instanceof Foo);//true
console.log(Foo[Symbol.hasInstance](f));//true
//可以重写这个函数，从而改变instanceof操作符的结果
class Boo {
    static [Symbol.hasInstance](boo){
        return boo instanceof Array;
    }
}
let boo = new Boo();
console.log( boo instanceof Boo);//false
console.log( [] instanceof Boo);//true

//Symbol.isConcatSpreadable，一个布尔值
//为true则对象的数组会被打平，为false则对象的数组会被追加
let array1 = ["1", "3"];
let array2 = ["a", "b"];
console.log(array1.concat(array2));//[ '1', '3', 'a', 'b' ]打平
array2[Symbol.isConcatSpreadable] = false;
console.log(array1.concat(array2));//[ '1', '3', [ 'a', 'b' ] ]追加

//Symbol.iterator，一个方法
//返回对象默认的迭代器，由for-of使用
class egObject2 {
    *[Symbol.iterator](){
        yield "返回了我们需要的东西";
    }
}
let egInstance2 = new egObject2();
for (const k of egInstance2){
    console.log(k);//"返回了我们需要的东西"
}

//Symbol.species，一个函数，该函数作为派生对象的构造函数
class egObject3 extends String {
    static get [Symbol.species](){
        return Array;
    }
}
console.log(new egObject3() instanceof String);
console.log(new egObject3() instanceof egObject3);

//Symbol.toPrimitive，一个方法，把对象转换成相应的原始值
//许多操作都会转换对象成原始值
class egObject4 {
    constructor(){
        this[Symbol.toPrimitive] = function(a){
            switch (a){
                case "number":
                    return 4;
                case "default":
                    return "default";
                default:
                    return "???";
            }
        }
    }
}
let egInstance4 = new egObject4();
console.log(3 - egInstance4);//-1
console.log(3 + egInstance4);//3default 要求的是default

//Symbol.toStringTag，一个字符串，用于对象的默认描述，由toString()方法使用
class egObject5 {
    constructor(){
        this [Symbol.toStringTag] = "My Object";
    }
}
let egInstance5 = new egObject5;
console.log(egInstance5.toString());//[object My Object]

//Symbol.unscopables，设置为true则该对象的设置属性都从with环境绑定中排除
let egObject6 = {value:"value"};
with(egObject6){
    console.log(value);//"value"
}
egObject6[Symbol.unscopables] = {
    value: true
};
with(egObject6){
    //console.log(value);//错误
}




//Object类型
//Object是派生其它对象的基类
//它有如下方法和属性
//constructor 构造函数
//hasOwnProperty() 判断当前实例是否存在传入参数属性
//isPrototypeOf() 判断当前对象是否是另一对象原型
//propertyIsEnumerable() 判断给定属性是否可用
//toLocaleString() 返回对象的字符串表示，反应对象本地化执行环境
//toString() 返回对象字符串表示
//valueOf() 返回对应的字符串、数值或布尔类
