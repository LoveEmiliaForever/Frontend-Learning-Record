//JS提供了三种特殊引用类型：Boolean、Number、String 以提供给原始值更强大的功能
//每当用到了原始值的属性或方法时，后台自动创建了相应的原始值包装类型对象

//以读模式访问原始值可以实现使用属性和方法
//1-创建一个包装类型实例
//2-调用实例上的特定方法或属性
//3-销毁实例

//原始值包装类型只存在于访问它的那一行代码之间
//可以显式的通过构造函数创建原始值包装类型，但这会困惑别人，不推荐这样做
//Object()构造函数作为一个工厂方法，可以根据传入值自动返回相应的包装类型对象



//Boolean对象的创建，传入一个布尔值
let booleanObject = new Boolean(true);
//它的valueOf()会返回一个布尔原始值
//toString()方法会返回字符串"true"或"false"
console.log(`valueOf:${booleanObject.valueOf()}
toString:${booleanObject.toString()}`);



//Number对象的创建，传入一个数值
let numberObject = new Number(996);
//valueOf()返回一个数值原始值
//toLocaleString()和toString()返回字符串
console.log(`valueOf:${numberObject.valueOf()}
toString:${numberObject.toString(2)}`);//返回二进制的数值字符串

//toFixed()返回指定小数点后位数的数值 字符串，会四舍五入
console.log(new Number(996).toFixed(4));//小数点后还有四位

//toExponential()返回科学计数法的数值 字符串，接受参数指定小数位数，四舍五入
console.log(new Number(1284719283).toExponential(2));//1.28e+9

//toPrecision()返回最合适的表示方式，接受参数指定 "所有数字位数" ，四舍五入
console.log(new Number(1284719283).toPrecision(2));//1.3e+9
console.log(new Number(99).toPrecision(3));//99.0

//isInteger()，判断一个数是否是整数
//isSafeInteger()，判断是否是一个安全整数
console.log(`Js的整数有范围：在${Number.MIN_SAFE_INTEGER}和${Number.MAX_SAFE_INTEGER}之间`);
console.log(`5的50次方是不是安全整数：${Number.isSafeInteger(5**50)}`);



//String对象的创建，传入一个字符串
//它包含length属性
var str = new String("hello world");
console.log(str.length);//双字节符会被当做两个单字节符

//JS字符

//由16bit组成，每16bit对应一个字符
//使用了两种编码混合的策略，UCS-2与UTF-8，但对16位无实际区别

//charAt()方法，返回指定索引位置的16位码元对应的字符
console.log(str.charAt(4));
console.log("😊".charAt(1));//对32位（代理对）出错

//charCodeAt()方法，查看指定16位码元的字符编码
console.log(str.charCodeAt(3));
console.log("😊".charCodeAt(1));//对32位出错

//fromCharCode()方法，根据给定的UTF-16码元创建字符串
console.log(String.fromCharCode(97,98,99,100,101));//32位码元要由两个16位码元代表
console.log(String.fromCharCode(55357,56842));//一个笑脸符号，它是32位码元

//16位码元表示的是  基本多语言平面
//再多加16位可以选择  增补平面  ，而这种32位码元称为 代理对

//上面的fromCharCode()处理32位时有些麻烦，可以用fromCodePoint()
console.log(String.fromCodePoint(128522));//直接接受32位码元

//charCodeAt()无法处理32位码元，可以用codePointAt()，它接受的索引相同（16位码元索引）
//如果codePointAt()接受到了非代理对开头的代理对，则结果错误
console.log("😊bc".codePointAt(1));//结果不对
//对字符串迭代，可以自动分割好每个字符
console.log([..."😊bc"]);//[ '😊', 'b', 'c' ]
//进而进行分析，或是提取某个字符
console.log([..."😊bc"][0].codePointAt());//128522

//normalize()方法，规范化字符

//有些字符拥有多个编码，使用规范化方法可以不用害怕 一符多编 导致的判断不准
//四种规范化方法是 NFD、NFC、NFKD、NFKC
//同一种规范化方法的比较结果是正确的
var a1 = String.fromCharCode(0x00C5);
var a2 = String.fromCharCode(0x0041,0x030A);
console.log(a1.normalize("NFD")===a2.normalize("NFD"));//true
console.log(a1.normalize("NFKC")===a2.normalize("NFD"));//false

//字符串操作方法

//concat()方法，连接字符串（在这里，它不是数组的打平）
//一般使用 + 操作符进行字符串拼接
console.log("abc".concat("-def","-hij"));//abc-def-hij

//slice()、substr()、substring()提取子字符串
//第一个参数是开始位置，第二个参数是结束位置，substr()的第二个参数是提取长度(((索引都是包括开头不包括结尾)))
//省略第二个参数则一直提取到字符串末尾
var str = "0123456789";
console.log(str.slice(3));
console.log(str.substring(3));
console.log(str.substr(3));//一直提取到字符串末尾
console.log(str.slice(3,7));
console.log(str.substring(3,7));//提取了3456
console.log(str.substr(3,7));//提取了3456789
//如果参数是负数，则代表着倒数的意思
//substr()的第二个参数不接受负数，如有转换为0
//substring()两个参数均不接受负数，如有转换为0
console.log(str.slice(-3));//789
console.log(str.substring(-3));//0123456789
console.log(str.substr(-3));//789
console.log(`slice:${str.slice(-7,-3)}`);//开头不能大于结尾，否则返回 空字符串
console.log(`substring:${str.substring(-3,-7)}`);//提取了 空字符串
console.log(`substr:${str.substr(3,-7)}`);//提取了 空字符串

//字符串位置方法

//用于在字符串中定位子字符串，未找到则返回-1
//indexOf()从前往后找，lastIndexOf()从后往前找
var str = new String("hello world");
console.log(`indexOf():${str.indexOf("o")}
lastIndexOf():${str.lastIndexOf("o")}`);
//它们还可以接受第二个参数，指定开始位置
console.log(str.indexOf("o",4));//4

//字符串包含方法

//startsWith()、endsWith()、includes()
//匹配开头字符串、结尾字符串、是否包含字符串
var str = new String("hello world");
console.log(`是否以hello开头：${str.startsWith("hello")}
是否以hi开头：${str.startsWith("hi")}
是否以world结尾：${str.endsWith("world")}
是否以sir结尾：${str.endsWith("sir")}
是否包含ello：${str.includes("ello")}
是否包含kko：${str.includes("kko")}`);
//还接受第二个参数，表示开始搜索的位置或是结尾位置

//trim()方法

//去除字符串两边的空格，再返回新字符串
var str = new String("   hello world   ");
console.log(`去除两边空格：${str.trim()}
去除左边空格：${str.trimStart()}
去除右边空格：${str.trimEnd()}`);

//repeat()方法

//重复字符串多次，并拼接返回新字符串
var str = new String("--warning--");
console.log(str.repeat(3));

//padStart()和padEnd()

//扩充字符串的方法，第一个参数是目标长度，第二个是填充字符串
//分为在左边扩充和在右边扩充
var str = new String("adb");
console.log(`在左边扩充：${str.padStart(10,"123")}
在右边扩充：${str.padEnd(10,"123")}`)

//字符串迭代与解构

//字符串原型上有@@iterator方法，是个迭代器
var str = "ABC";
var strIterator = str[Symbol.iterator]();
console.log(`手动使用迭代器的next()方法：${strIterator.next()}`)
//使用解构操作符进行解构
console.log([...str]);//[ 'A', 'B', 'C' ]

//字符串大小写转换

var str = "ABCdef";
console.log(`toUpperCase：${str.toUpperCase()}
toLowerCase：${str.toLowerCase()}`);
//此外还有toLocaleUpperCase()和toLocaleLowerCase()
//它们会根据当地语言规则进行大小写转换

//字符串模式匹配方法

//match()方法，接受一个正则表达式字符串或是RegExp实例
//返回的数组和RegExp.exec()的一样
var pattern = new RegExp(".at", "g");
var str = "cat fat mat";
console.log(str.match(pattern));//[ 'cat', 'fat', 'mat' ]

//search()方法，返回第一个匹配的位置索引，没找到则返回-1
//接受正则表达式字符串或是RegExp实例
console.log(str.search(pattern));//0

//replace()方法
//第一个参数是RegExp实例或字符串（不是正则表达式字符串），第二个参数是字符串或函数
//第一个参数是字符串，则只替换第一个匹配值
console.log(str.replace("at","ond"));//cond fat mat
//如果要替换全部，则第一个参数要是RegExp且是g（全局模式）
console.log(str.replace(new RegExp("at", "g"), "ond"));//cond fond mond
//第二个参数是字符串，有几个特殊字符序列，表示一些值
//$& 匹配整个模式的子字符串 $n 第n个匹配的字符串
console.log(str.replace(pattern, "word($&)"));//word(cat) word(fat) word(mat)
//第二个参数是函数，则有三个输入值
//匹配的字符串、匹配的开始位置、原始字符串
//这个函数的返回也应该是一个字符串

//split()方法，分隔字符串为数组
//分隔符可以是字符串、可以是RegExp实例，第二个参数是数组大小
console.log(str.split(" "));//[ 'cat', 'fat', 'mat' ]
console.log(str.split(" ", 2));//[ 'cat', 'fat' ]

//localeCompare()方法，它用来比较两个字符串（按照字母表顺序）
var str = "B";
console.log(str.localeCompare("A"));//按字母表在后面，返回正值（通常是1）
console.log(str.localeCompare("B"));//相等，返回0
console.log(str.localeCompare("C"));//按字母表在前面，返回负值（通常是-1）
//localeCompare()的特殊在于，根据环境（所在地区国家，使用语言）决定如何比较字符串
