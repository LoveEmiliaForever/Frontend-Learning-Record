//函数实际上是对象，每个函数都是Function实例
//而函数名是指向函数对象的指针，因此一个函数可以有多个名字



//箭头函数
//箭头函数实例化的函数对象和函数表达式创建的函数对象很像
var a = ()=>{};
//如果只有一个参数，可以不用对象
var a = x=>{};
//可以不用大括号，这样有效语句只有第一句，且隐式返回
var a = x => console.log("a");
//箭头函数不能使用arguments、super、new.target同时也不能作为构造函数，没有prototype属性



//函数名
//函数名是指向函数的指针，故而一个函数可以有多个名字
function move(){}
var run = move;
var walk = move;
console.log(move, run, walk);//[Function: move] [Function: move] [Function: move]
//不带括号使用函数名是访问函数指针，带括号则是执行函数
//ES6对每个函数都暴露一个只读的name属性，其中包含关于函数的信息
console.log(move.name);//move
//如果函数是get函数，set函数，用bind()实例化，则name显示出来会有前缀



//理解参数
//JS的函数既不关心参数个数，也不关心参数类型
//JS函数的参数在内部表现为一个数组，使用function定义函数时，可以访问arguments这个类数组对象
function kkk(a,b){console.log(arguments, arguments.length);};
kkk(1,2);//[Arguments] { '0': 1, '1': 2 }
//arguments的值始终会与对应形参同步，但它们在内存中是分开的，只是会同步而已
kkk(1);//arguments的length大小根据实参而定，没有值的参数为undefined



//没有函数重载
//在JS中没有函数签名，因此没有函数重载，两个同名函数先定义的会覆盖后定义的



//默认参数值
//ES6支持显示定义默认参数值，方法和Python一样
//默认参数值可以用函数，只要它有返回值
//默认值就像let声明一样，所以后面变量可以调用前面变量，同时有暂时性死区，定义顺序从前往后
function yyy(a="abc", b=new String("Hi"), c=a+"123"){
    //arguments不反映参数默认值，值反应实参
    console.log(arguments);//[Arguments] {}
    console.log(a,b,c);//abc [String: 'Hi'] abc123
}
//默认参数只有在调用时才进行求值
yyy();



//扩展操作符
//ES6新增了扩展操作符，它可以操作和组合集合数据
//对可迭代对象应用扩展操作符，可以将可迭代对象拆分，再将迭代返回的值单独传入
function ccc(a,b,c){
    console.log(`a is ${a}, b is ${b}, c is ${c}`);
}
ccc(...["tom", "kim", "gula"]);
//使用扩展操作符还可以收集剩余参数并组合为数组
function eee(...values){console.log(values[0],values[1]);console.log(arguments);}
eee("kdk", "ccb");
//[Arguments] { '0': 'kdk', '1': 'ccb' }
//arguments仍然反应调用时传给函数的参数



//函数声明与函数表达式
//JS引擎在执行代码前会先读取函数声明，并进行函数声明提升
//而函数表达式，只有运行到了那里，才会生成函数
//除了什么时候真正有定义这个区别以外，两个语法等价



//函数作为值
//函数名在JS中是变量，因此函数可以用在任何可以使用变量的地方
//可以把函数作为参数传入给函数，可以作为函数返回给另一个函数



//函数内部

//arguments
//它是一个类数组对象，包含调用函数时传入的所有参数
//同时arguments还有一个callee属性，指向arguments所在函数
function uuu(){console.log(arguments.callee)};
uuu();//[Function: uuu]
//由于函数名是可以变化的，所以以函数名作为嵌套等等是不可靠和麻烦的，使用arguments.callee更好



//this
//在标准函数中，this指向调用函数的上下文对象
//在箭头函数中，this指向定义了箭头函数的上下文对象
this.color = "red";//一个全局变量
let o = {
    color:"blue",
    sayColor
}
function sayColor(){
    console.log(this.color);
}
sayColor();//red
o.sayColor();//blue
let sayColor2 = () => {console.log(this.color);};
sayColor2();//red
o["sayColor2"] = sayColor2;
o["sayColor2"]();//red

//caller
//指向调用当前函数的函数，如果是全局作用域则指向为null
//caller和arguments.callee不是一个东西

//new.target
//如果函数正常调用，则new.target值为undefined
//如果函数使用new关键字调用，则new.target指向被调用构造函数
