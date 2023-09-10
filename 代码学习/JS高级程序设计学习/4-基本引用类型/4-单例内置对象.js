//内置对象：由JS实现提供，与宿主环境无关，并在JS程序开始执行前就存在的对象



//Global
//代码不会显式的访问它
//在全局作用域中定义的变量和函数都会变成Global对象的属性

//URL编码方法

//URL：统一资源定位器，描述资源位置，是URI的子集
//URI：统一资源标识符，用于唯一的标识和命名资源
var url = "http://baidu.com #start";
//encodeURI()不会编码URL的特殊字符
//http://baidu.com%20#start
console.log(encodeURI(url));
//encodeURIComponent()会编码所有的特殊字符
//http%3A%2F%2Fbaidu.com%20%23start
console.log(encodeURIComponent(url));
//应该用encodeURI()编码整个URI，而encodeURIcomponent()编码后续要添加的东西
//和上面对应的，还有decodeURI()和decodeURIComponent()

//eval()方法

//这个方法相当于一个JS解释器，接受一个JS代码字符串，并执行它
var variable = "This is an out variable";
eval("console.log(variable);");
//eval()把代码插入当前位置，代码所处上下文为当前上下文
//eval()定义的变量和函数不会提升，因为它们只是在eval()执行时创建
//严格模式下，eval()创建的变量和函数无法被外部访问

//Global对象属性
//像undefined、NaN、Infinity这样的特殊值以及原生的引用类型构造函数都是Global对象的属性

//window对象
//浏览器将window对象实现为Global对象的代理
//在全局作用域声明的变量和函数都是window的属性



//Math对象
//Math对象提供了一些辅助计算的属性和方法
//Math的计算要比JS实现的更快，但其性能会因浏览器、操作系统等而有所差异

//Math对象属性：用于保存数学的一些特殊值
console.log(`自然数e：${Math.E}
圆周率：${Math.PI}
1/2的平方根：${Math.SQRT1_2}
2的平方根：${Math.SQRT2}`);

//min()和max()
//接受多个参数，找出一组数值的min或max
var array = [1,2,3,4,5];
console.log(`数组小：${Math.min(...array)} 数组大：${Math.max(...array)}`);
console.log(`另一种数组找大小方法：${Math.min.apply(Math, array)}`);
console.log(`多个参数：${Math.max(...array, 0,7,9)}`);

//舍入方法
console.log(`向上舍入：${Math.ceil(25.3)}
向下舍入：${Math.floor(25.9)}
四舍五入：${Math.round(25.4),Math.round(25.6)} 逗号操作符，实际运行最后一个
返回最接近的单精度浮点值：${Math.fround(25.1)}`);

//随机数方法
//返回0~1之间的一个数，包括0不包括1
console.log(Math.random());
//从一组整数中随机返回一个数，下面的公式
function randomInt(totalNumberOfChoices, firstPossibleValue){
    return Math.floor(Math.random() * totalNumberOfChoices + firstPossibleValue);
}
//返回2~10之间的一个数
console.log(randomInt(9, 2));
//返回-5~7之间的一个数
console.log(randomInt(11, -5));
//如果是为了加密而需要随机数，使用window.crypto.getRandomValues()

//其它常用方法
Math.abs(-4);//绝对值
Math.pow(2,3);//幂运算
Math.hypot(1,2,3);//计算欧几里得距离
Math.trunc(3.1415926);//返回整数，舍弃小数
Math.sqrt(2);//平方根
Math.cbrt(2);//立方根
Math.cos(1);
Math.sin(1);
Math.tan(1);



