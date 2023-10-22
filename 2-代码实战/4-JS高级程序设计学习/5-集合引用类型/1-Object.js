//Object实例没有多少功能，但适合存储和在应用间交换数据

var object1 = new Object();//使用new和构造函数创建Object实例
var object2 = {};//使用对象字面量创建Object实例
//字面量定义时，不会实际运行构造函数，只有使用了时才开始构造
var object3 = {//属性名可以是字符串或数值
    "name":"Object3Name",
    "age":5,
    123:123//数值属性会自动转换为字符串
};
//对象字面量可以给函数传递大量可选参数
//对函数，最好必选参数是命名参数，可选参数是对象字面量

var name1 = object3.name;//点语法存取属性
var age1 = object3["age"];//中括号存取属性
//中括号法的优势是可以使用变量访问属性
//当属性名包含特殊字符时也可以用中括号法
var parameterName = "name";
console.log(object3[parameterName]);
