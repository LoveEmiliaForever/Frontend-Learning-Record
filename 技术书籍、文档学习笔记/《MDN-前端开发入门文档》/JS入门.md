# JS入门

## 什么是JS

### JS的定义

JavaScript 是一种`脚本`，一门`编程语言`，它可以在网页上实现复杂的功能  
网页展现给你的不再是简单的静态信息，而是实时的内容更新  

### JS的功能

客户端 JavaScript 语言的核心包含一些普遍的编程特性  

* 在变量中储存有用的值
* 操纵字符串
* 响应网页中发生的特定事件

以及重要的**应用程序接口API**  
API 是**已经建立好的一套代码组件**，可以让开发者实现原本很难甚至无法实现的程序  

API通常分为两种：浏览器API和第三方API  

**浏览器API**  
内建于 web 浏览器中，它们可以将数据从周边计算机环境中筛选出来，还可以做实用的复杂工作  

* 文档对象模型API：`DOM`
  * 能通过创建、移除和修改 HTML，为页面动态应用新样式等手段来操作 HTML 和 CSS
* 地理位置API
  * 获取地理信息，例如网络地图就要使用它
* 画布`Canvas`和`WebGL`
  * 能够创建2D和3D图像
* 影音类API：如`HTMLMediaElement`和`WebRTC`
  * 让你可以利用多媒体做一些非常有趣的事，如直播等等

**第三方API**  
这种API没有默认嵌入浏览器里面，一般要从网络获取它们的代码和信息  

* `Twitter API`、`新浪微博 API`：可以在网站上展示最新推文之类
* `谷歌地图 API`、`高德地图 API`：可以在网站嵌入定制的地图等等

### JS的运行

在 HTML 和 CSS 集合组装成一个网页后，浏览器的 JavaScript 引擎将执行 JavaScript 代码  
这保证了当 JavaScript 开始运行之前，网页的结构和样式已经就位  

#### 浏览器安全

每个浏览器标签页就是其自身用来运行代码的独立容器（运行环境）  
每个标签页中的代码完全独立运行，而且一个标签页中的代码不能直接影响另一个标签页  

#### 解释代码和编译代码

在**解释型语言**中，代码自上而下运行，且实时返回运行结果  
代码在由浏览器执行前，不需要将其转化为其他形式  
代码将直接以文本格式被接收和处理  

**编译型语言**需要先将代码转化（编译）成另一种形式才能运行  
程序将以二进制的格式运行，这些二进制内容是由程序源代码产生的  

JavaScript 是轻量级解释型语言  
几乎所有 JavaScript 转换器都运用了一种叫做即时编译的技术  
当 JavaScript 源代码被执行时，它会被编译成二进制的格式  
编译过程发生在代码运行中，而非之前  

#### 客户端代码和服务端代码

**客户端代码**是在用户的电脑上运行的代码  
浏览网页时，客户端代码就会被下载，然后由浏览器来运行并展示  

**服务器端代码**在服务器上运行，接着运行结果才由浏览器下载并展示出来  
JavaScript 也可用作服务器端语言，比如现在流行的 Node.js 环境  

### 引入JS代码

#### 内部JS

在` </head> `标签结束前插入`<script>`  
在`<script></script>`内部输入代码  

```html
    <head>
        <script>
            console.log("OK");
        </script>
    </head>
```

#### 外部JS

和CSS的外部引入不一样，JS使用的仍旧是`<script>`元素  

```html
    <head>
        <script src="myProgram.js" defer></script>
    </head>
```

#### 内联JS处理器

对某些HTML元素使用`onclick`属性  
它会把事件和JS代码绑定`onclick="create()"`  

```html
    <button onclick="create()">一个按钮</button>
```

最好不要这样做，会让结构变得非常混乱  
绑定事件应该在JS文件内以`addEventListener`方法进行  

#### 脚本调用策略

要让脚本调用的时机符合预期，需要解决一系列的问题  
若 JavaScript 加载于欲操作的 HTML 元素之前，则代码将出错  

下面是一个事件监听`DOMContentLoaded`，只有当HTML文档加载、解释完毕后被触发  

```js
    document.addEventListener("DOMContentLoaded", function() {
    . . .
    });
```

在**外部JS**中可以使用`async`（异步）属性来告知浏览器在遇到`<script>`时不要中断后续HTML内容加载  

```html
    <script src="Program.js" async></script>
```

上述情况下，脚本和HTML将同时下载，代码在**下载完JS文件后JS运行**  

#### async和defer

它们都是使用于外部脚本的属性  

浏览器遇到 `async` 脚本时不会阻塞页面渲染，而是直接下载然后运行  
但这样脚本**运行次序无法控制**，只是脚本不会阻止剩余页面的显示  
只有当页面各脚本彼此独立，不依赖于本页面的其他脚本时，`async`是最理想的选择  

使用`defer`属性的脚本将按照在页面中出现的顺序加载  
且在页面解析完成后运行  

* 如果脚本无需等待页面解析，且无依赖独立运行，那么应使用 async
* 如果脚本需要等待页面解析，且依赖于其他脚本，调用这些脚本时应使用 defer，将关联的脚本按所需顺序置于 HTML 中

### JS的注释

JS有单行注释和多行注释  

```js
    // 单行注释
    /*
    多行注释
    */
```

## JS初体验

### 变量

关键字`let`创建一个变量  
关键字`const`创建一个常量  

### 函数

函数是可复用的代码块，可以一次编写，反复运行，从而节省了大量的重复代码  

```js
    function(parameter){
        alert("Message");
    }
```

### 运算符

大部分的操作符和其它编程语言一样  

但要注意`===`和`!==`  
它们是全等和不全等  

### 条件语言

也和其它编程语言差不多  

```js
    if(condition){
        alert();
    } else if(condition2){
        alert();
    } else {
        alert();
    }
```

for循环  

```js
    const fruits = ['apples', 'bananas', 'cherries'];
    for (const fruit of fruits) {
        console.log(fruit);
    }
```

### 事件

事件就是浏览器中发生的事，比如点击按钮、加载页面、播放视频，等等  
侦听事件发生的结构称**为事件监听器**  
响应事件触发而运行的代码块被称为**事件处理器**  

```js
    guessSubmit.addEventListener('click', checkGuess);
```

`addEventListener()`中作为参数的函数名不加括号，隐函数除外  

### 浅谈对象

JavaScript 中一切都是对象，对象是存储在单个分组中的相关功能的集合  

### 调试JS代码

一般来说，代码错误有两种：`语法错误`和`逻辑错误`  

语法错误
可以使用浏览器的开发者工具，它会给语法错误报错  
注意JS区分大小写  

逻辑错误
最好画出图像来理解程序的运行逻辑  
然后还可以埋断点或输出来推导问题发生原因  

## JS变量

### 变量简介

变量，就是一个用于存放数值的容器  
变量的另一个特性就是它们能够存储任何的东西 -- 不只是字符串和数字  
变量不是数值本身，它们仅仅是一个用于存储数值的容器  

### 变量声明

声明一个变量的语法是在 `var` 或 `let` 关键字之后加上这个变量的名字  
空的变量会返回`undefined`，不存在的变量被使用则会报错  

可以在声明变量的时候赋值，这被称为初始化  

```js
    let myName="LoveEmiliaForever";
    var food="chips";
```

### var与let

最初创建 JavaScript 时，是只有 `var` 的  
大多数情况下，这种方法可以接受，但有时会令人困惑或讨厌  

`let` 是在现代版本中的 JavaScript 创建的一个新的关键字  
用于创建与 var 工作方式有些不同的变量，解决了过程中的问题  

`var`可以进行**变量提升**，而`let`不行  
`var`可以多次声明相同名称变量，`let`不行  

```js
    //变量提升如下所示，可以先赋值再声明
    name="KK";
    console.log(name);
    var name;
    //使用var可以多次声明，let则不行
    var temp="ll";
    var temp="pp";
    //下面的则会报错
    let tempNum=2;
    let tempNum=3;
```

### 变量命名

* 一般你应当坚持使用拉丁字符 (0-9,a-z,A-Z) 和下划线字符
* 变量名不要以下划线开头，不要以数字开头
* 推荐使用`小写驼峰命名法`如`myFirstVariable`
* 让变量名直观，描述所包含的数据
* 变量名大小写敏感
* 避免使用 JavaScript 的保留字给变量命名

### 变量类型

**Number**  
在变量中存储数字，不论是整数还是小数  
和C语言不一样，JS是弱类型的，不用声明变量的类型  

**String**  
字符串是文本的一部分  
当你给一个变量赋值为字符串时，你需要用单引号或者双引号把值给包起来  

**Boolean**  
Boolean 的值有 2 种：true 或 false  

**Array**  
数组是一个单个对象，其中包含很多值，方括号括起来，并用逗号分隔  

```js
    let nameArray=["Tom", "Chris"];
    let numArray=[15, 23];
    //取值方法和其它编程语言一样
    let firstName=nameArray[0];
```

**Object**  
对象是现实生活中的模型的一种代码结构  

```js
    let dog={name="Spot", age=4};
    let dogAge=dog.age;
```

## JS的数字与操作符

### 数字类型

计算机内部的数字有不同类别  

* 整数：正整数、负整数、零都是可以的
* 浮点数：正的小数或负的小数
* 双精度：一种更高精度的浮点数

还有不同的进制  

* 二进制：0与1
* 八进制：0~7
* 十六进制：0~9与A~F

但和其他编程语言不一样，JS不会显示的表达它们的不同  
**JS只有一种表达数字的数据类型**，就是`Number`  
这意味着和数字的操作方法是相同的  

### 算数运算符

JS的算数运算符基本上和其它编程语言一样  
优先级也是一样的，推荐用`()`规定计算优先级  

`++`和`--`也是差不多的，它们作用于变量，并和变量的相对顺序有关系  
诸如`+=`、`-=`、`*=`、`\=`的作用也是一样的  

### 比较运算符

JS大部分的比较运算符和其它编程语言没什么不一样  
但要注意`==`、`!=`和`===`、`!==`的区别  
前者测试值是否相同，但是数据类型可能不同  
而后者的严格版本测试值和数据类型是否相同  
推荐使用严格相等进行判断  

## JS的字符串操作

JavaScript 包含许多操作字符串的特性，创建定制的欢迎消息，在需要时显示正确的文本标签，将术语排序到所需的顺序，等等  

### 基础字符串知识

创建字符串的格式`let myString="One World Any World."`  
可以使用`双引号`也可以用`单引号`，但应该坚持只使用一种  
不一致的引号混用代码可能会让人很迷惑  

如果要在字符串中输入引号，应该在符号前加上转义字符`\`  
如`let myString="One \"World\" Any World."`  

### 字符串连接

使用`+`来连接两个字符串  
如`"Hello"+"World"`  

当字符串和非字符串相连时，结果仍然是字符串  
浏览器会将非字符串转换为字符串  

将字符串转换为数值，使用`Number()`  

```js
    let myString = '123';
    let myNum = Number(myString);
    typeof myNum;
```

将数值转换为字符串，使用数字的toString()方法  

```js
    let myNum = 123;
    let myString = myNum.toString();
    typeof myString;
```

### 将字符串当作对象

在 javascript 中，一切东西都可以被当作对象  
一旦你的变量成为字符串对象实例，你就可以有大量的原型和方法编辑它  

### 获取字符串长度

使用`length`属性可以轻松获取字符串的长度  

```js
    let browserType = 'mozilla';
    //结果会是7，因为有7个字符
    browserType.length;
```

### 检索字符串中特定字符

您可以使用方括号表示法返回字符串中的任何字符  
在方括号内，您可以包含要返回的字符的编号  

```js
    let browserType = 'mozilla';
    //返回第一个字符m
    browserType[0];
    //返回倒数第一个字符a
    browserType[browserType.length-1];
```

### 查找提取子字符串

有时候你会想要找出一个较小的字符串是否存在于一个较大的字符串中  
这称为`检索子字符串`  

```js
    //indexOf方法的参数是要查找的子字符串
    //下列将返回2，因为子字符串是从2位置开始的
    browserType.indexOf('zilla');
```

当在主字符串中找不到子字符串时将返回 `-1`  

使用`slice()`方法可以提取字符串的一部分  

```js
    //提取0~2共三个字符，包括开头不包括结尾
    browserType.slice(0,3);
    //提取2~~，包括开头以及之后的所有字符
    browserType.slice(2);
```

### 转换大小写

字符串方法`toLowerCase()`和`toUpperCase()`将所有字符分别转换为小写或大写  

```js
    let radData = 'My NaMe Is MuD';
    radData.toLowerCase();
    radData.toUpperCase();
```

### 替换字符串

使用`replace()`方法将字符串中的一个子字符串替换为另一个子字符串  

```js
    //第一个值是被替换的值，第二个是替换上去的值
    browserType.replace('moz','van');
```

## JS数组

数组通常被描述为“像列表一样的对象”  
它是一个包含了多个值的对象  

数组对象可以存储在变量中，并且能用和其他任何类型的值完全相同的方式处理  
区别在于我们可以单独访问列表中的每个值  

### 创建数组

数组由方括号构成，其中包含用逗号分隔的元素列表  
可以将**任何类型**的元素存储在数组中  
字符串，数字，对象，另一个变量，甚至另一个数组  
也可以**混合**和**匹配**项目类型  

```js
    let sequence = [1, 1, 2, 3, 5, 8, 13];
    let random = ['tree', 795, [0, 1, 2]];
```

### 访问修改数组元素

可以使用括号表示法访问数组中的元素  
还可以简单地为单个数组元素提供新值来修改数组中的元素  

```js
    shopping[0];
    shopping[0] = 'tahini';
```

### 获取数组长度

通过使用 `length` 属性获取数组的长度  
这与查找字符串的长度完全相同  

```js
    let sequence = [1, 1, 2, 3, 5, 8, 13];
    //结果为7，因为数组有7个元素
    sequence.length;
```

### 字符串和数组之间的转换

使用 `split()` 方法，根据分隔符拆分字符串  
它是一个字符串方法，而非数组方法  

```js
    let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
    //上面的字符串变成了数组，内容是以逗号分隔的各子字符串
    let myArray = myData.split(',');
```

使用`join()`可以进行反向操作，以分隔符连接数组为字符串  

```js
    let myArray=["Hello", "World"];
    //结果是"Hello:World"
    let myNewString = myArray.join(':');
    myNewString;
```

使用数组方法`toString()`也可以把数组相连为字符串  
但是它是不能指定分隔符的，只能以`,`分隔  

### 添加删除数组元素

使用`push()`和`pop()`在数组的末尾添加或删除元素  

```js
    let myArray=["aa", "bb"];
    //myArray=aa,bb,cc
    myArray.push("cc");
    //myArray=aa,bb,cc,dd,ee
    myArray.push("dd", "ee");
    //myArray=aa,bb,cc,dd
    myArray.pop();
```

`unshift()` 和 `shift()` 作用于数组的开始来添加或删除元素  

```js
    let myArray=["aa", "bb"];
    //myArray=cc,aa,bb
    myArray.unshift("cc");
    //myArray=dd,ee,cc,aa,bb
    myArray.unshift("dd", "ee");
    //myArray=ee,cc,aa,bb
    myArray.shift();
```
