//JS通过RegExp类型支持正则表达式，每个正则表达式可以带多个flags
//flags用于控制表达式的行为，参见书P107
//所有的 元字符 必须转义，使用反斜杠\即可
var pattern1 = /[bc]at/i;//i是flags的一个
var pattern2 = /\[bc\]at/i;//转义了[与]符号

//也可以通过RegExp构造函数创建正则表达式
//接受两个 字符串 参数，第一个是表达式，第二个是flags
//由于是字符串，需要对元字符二次转义，使用\\，而\的转义是\\\\
var pattern3 = new RegExp("\\[bc\\]at","i");
var pattern4 = new RegExp("\\w\\\\hello\\\\123","igm");
//可以基于已有正则表达式实例创建，还可以修改flags
var pattern5 = new RegExp(pattern1, "g");//以pattern1为基准创建实例，且修改了flags



//RegExp实例属性
//有一系列布尔值属性，代表flags的存在与否，参考书P109
//lastIndex：是一个整数，代表在源字符串中下一次搜索开始的位置，始终从0开始
console.log(pattern1.lastIndex);
//source:正则表达式的字面量字符串
console.log(pattern1.source);
//flags:正则表达式的flags字符串
console.log(pattern4.flags);



//RegExp实例方法
//exec()方法，接受一个参数即要应用模式的字符串
//如果匹配到了，则返回一个数组，否则返回null
//数组有两个额外属性，index是字符串匹配的起始位置，input是输入的字符串
//数组的第一个元素是匹配了整个模式的字符串（可以匹配的字符串），其它的是匹配值
let testText = "cat bat sat fat";
let pattern6 = /.at/;
let matches = pattern6.exec(testText);
console.log(`index:${matches.index}
input:${matches.input}
第一个元素:${matches[0]}
数组:${matches}
lastIndex:${pattern6.lastIndex}
`);

matches = pattern6.exec(testText);
console.log(`index:${matches.index}
input:${matches.input}
第一个元素:${matches[0]}
数组:${matches}
lastIndex:${pattern6.lastIndex}
`);
//由于没有开启全局模式（flags包含g）
//每次返回的都是第一个结果
//可以看到lastIndex是不变的

let pattern7 = new RegExp(pattern6, "g");
matches = pattern7.exec(testText);
console.log(`index:${matches.index}
input:${matches.input}
第一个元素:${matches[0]}
数组:${matches}
lastIndex:${pattern7.lastIndex}
`);

matches = pattern7.exec(testText);
console.log(`index:${matches.index}
input:${matches.input}
第一个元素:${matches[0]}
数组:${matches}
lastIndex:${pattern7.lastIndex}
`);
//开启了全局模式
//每次返回结果都会向后匹配运行
//可以看到lastIndex是变化的
//而如果开启了y粘附模式，则lastIndex不变

//另外一个方法是test()，接受字符串，返回的是布尔值
//它不匹配出来结果，而只是测试能否匹配
//常用于验证用户输入
console.log(pattern7.test(testText));

//toLocaleString()和toString()返回正则表达式字面量
console.log(`toLocaleString:${pattern7.toLocaleString()}
toString:${pattern7.toString()}`);
//valueOf()返回正则表达式本身
console.log(`valueOf():${pattern7.valueOf()}`);



//RegExp构造函数还有一些属性，可以完成一些操作
//但是这些属性没有任何的Web标准出处
//也就是说不可靠，不要使用它们
