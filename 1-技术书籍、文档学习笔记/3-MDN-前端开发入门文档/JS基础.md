# JS基础

## JS的条件语句

### 逻辑运算符

或`||`，且`&&`，非`!`  
它们常和判断一起使用  

### if...else语句

和其它的编程语言相似  

```js
    if (condition1) {
    /* 条件1为真时运行的代码 */
    } else if (condition2) {
    /* 条件2为真时运行的代码 */
    } else {
    /* 否则，运行其他的代码 */
    }
```

任何不是 `false`、`undefined`、`null`、`0`、`NaN`、或一个空字符串（`''`）在作为条件语句进行测试时实际返回 `true`（只要不是上面几个就返回true）  

### switch语句

switch以单个表达式/值作为输入，然后查看多个选项，直到找到与该值相匹配的选项，执行与之相关的代码  

```js
    switch (表达式) {
    case 选择1:
        运行这段代码
        break;
    case 选择2:
        否则，运行这段代码
        break;
    // 包含尽可能多的情况
    default:
        如果都不满足，仅仅运行这段代码
    }
```

注意给case的代码段添加break作为结尾，否则它会继续运行下去  
default不是必须的，可以选择性添加，但最好添加一个用来处理突发情况  

### 三元运算符

和其它编程语言基本一样，是一种简写方法  

```js
    条件判断 ? 为真则执行这里 : 为假则执行这里;
```

示例如下  

```js
    let flag = true;
    //可以这样写
    flag ? console.log("True") : console.log("False);
    //还可以这样写
    flag === "flag"
    ? "is flag"
    : "not flag";
```

## JS的循环语句

### for循环

```js
    //和其它编程语言差不多
    for (initializer; exit-condition; final-expression) {
    // code to run
    }
```

小心死循环的发生，确保循环已经正确定义  

### break和continue

break 语句将立即退出循环  
continue 语句则是跳过当前循环而执行下一个循环  

### while和do...while

while循环的语法  

```js
    initializer//可选
    while (exit-condition) {
        运行代码
        final-expression//可选
    }
```

do-while循环语法

```js
    initializer//可选
    do {
        运行代码
        final-expression//可选
    } while (exit-condition)
```

## JS的函数

### 浏览器内置函数

JavaScript 有许多内置的函数，可以让您做很多有用的事情，而无需自己编写所有的代码  

许多你调用浏览器内置函数时调用的代码并不是使用 JavaScript 来编写  
而是使用像 C++这样更低级的系统语言编写的  

这些内置浏览器函数**不是核心 JavaScript 语言的一部分**  
它被定义为**浏览器 API** 的一部分，建立在默认语言之上，以提供更多的功能  

### 函数与方法

程序员把函数称为对象方法的一部分  

严格说来，内置浏览器函数并不是函数，它们是方法  
函数和方法在很大程度上是可互换的  
方法是在对象内定义的函数  

### 定义函数

普通的定义一个函数  
函数的名字定义和变量的名字定义一样，也应该使用小驼峰命名法  

```js
    function funcName(funcVariable){
        console.log(funcVariable);
    }
```

定义一个隐函数（又称匿名函数）  

```js
    function(){
        console.log("一个隐函数");
    }
    ()=>{
        console.log("另一种定义隐函数的方法");
    }
```

可以使用变量引用隐函数，从而使用它  

```js
    var oneFunction = ()=>{
        console.log("使用了隐函数");
    }
    //可以像如下方式使用隐函数
    oneFunction();
```

> :grey_exclamation:匿名函数也称为函数表达式。函数表达式与函数声明有一些区别。函数声明会进行声明提升，而函数表达式不会

### 函数作用域与冲突

创建一个函数时，函数内定义的变量等都在**单独的范围**内，它们不能被函数外的代码访问  
所有函数的最外层被称为**全局作用域**，在全局作用域内定义的值可以在任意地方访问  

由于命名冲突等问题，不同的代码可能冲突  
将代码锁定在函数中的部分避免了这样的问题，并被认为是最佳实践  

## JS的事件

事件是发生在你正在编程的系统中的事情，事件发生时系统产生信号  
当事件发生时，可以自动采取某种行动  

为了对一个事件做出反应，你要给它附加一个**事件处理器**  
当一个代码块被定义为响应一个事件而运行时，我们说我们在**注册一个事件处理器**  
事件处理器有时候被叫做**事件监听器**  

web 事件不是 JavaScript 语言的核心，它们被定义成内置于浏览器的 API  

### 使用addEventListener()

能够触发事件的对象有一个 `addEventListener()` 方法  
这就是推荐的添加事件处理器的机制  

```js
    const btn = document.querySelector("button");
    /*使用隐函数*/
    btn.addEventListener("click", ()=>{
        console.log("Click!");
    });
    /*或者不使用隐函数，可以直接使用函数*/
    function myfunc(){
        console.log("Click!");
    }

    btn.addEventListener("click", myfunc);
```

可以给一个元素多个事件监听  
事件发生时相应的所有监听一起工作  

### 移除事件监听

与添加相对应，可以用`removeEventListener()`方法来移除它  

```js
    btn.removeEventListener("click", myfunc);
```

还可以传递`AbortSignal`到 `addEventListener()`  
然后在拥有 `AbortSignal` 的控制器上调用`abort()`方法  

```js
    //定义一个控制器出来
    const controller = new AbortController();
    //把这个控制器绑定给事件监听
    btn.addEventListener("click",() => {
        console.log("Click!");
    },
    { signal: controller.signal } // 向该处理器传递 AbortSignal
    );

    //下面就是把控制器设置为弃用
    //由控制器控制的监听也会被弃用
    controller.abort();
```

### 常见监听事件

* `focus`、`blur`：被聚焦或失焦时的事件
* `dblclick`：被双击时的事件
* `mouseover`、`mouseout`：鼠标指针悬停，或移出时的事件

### 其它事件监听器机制

#### 事件处理器属性

可以触发事件的对象（如按钮）通常也有属性  
其名称是 `on`，后面是事件的名称  
例如使用`onclick`属性给按钮添加点击事件  

```js
    btn.onclick = () => {
        console.log("Click!");
    };
```

这种方法不能够设置多个事件监听器  

#### 内联事件处理器

**尽可能不要使用这种方法**  
它把HTML和JS的事件混合在了一起，十分不利于维护  

```html
    <button onclick="alert('你好，这是来自旧式事件处理器的一条消息');">
    按下我
    </button>
```

### 事件对象

在事件处理函数内部，你可能会看到一个固定指定名称的参数，例如 `event`、`evt` 或 `e`  
这被称为**事件对象**，它被**自动传递**给事件处理函数，以提供额外的功能和信息  
可以使用任何喜欢的名称作为事件对象，但应该保持一致  

事件对象 `e` 的 `target` 属性始终是事件刚刚发生的**元素的引用**  
大多数事件对象都有一套标准的属性和方法，特有方法属性  

```js
    const btn = document.querySelector("button");

    function random(number) {
        return Math.floor(Math.random() * (number + 1));
    }

    function bgChange(e) {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        e.target.style.backgroundColor = rndCol;
        console.log(e);
    }

    btn.addEventListener("click", bgChange);
```

### 阻止默认行为

有时会遇到一些情况，希望事件不执行它的默认行为  
例如Web表单的提交，我们希望阻止`submit`事件的默认行为，让我们的代码介入  

```js
    //利用事件对象的preventDefault()阻止表单上传
    //同时检查错误，提示原因
    form.addEventListener("submit", (e) => {
        if (fname.value === "" || lname.value === "") {
            e.preventDefault();
            para.textContent = "You need to fill in both names!";
        }
    });
```

### 事件冒泡

事件冒泡描述了浏览器如何处理针对嵌套元素的事件  

如下实例说明了何为冒泡  

```html
    <body>
        <div id="container">
            <button>点我！</button>
        </div>
        <pre id="output"></pre>
    </body>
```

```js
    const output = document.querySelector("#output");
    function handleClick(e) {
        output.textContent += `你在 ${e.currentTarget.tagName} 元素上进行了点击\n`;
    }

    const container = document.querySelector("#container");
    const button = document.querySelector("button");

    document.body.addEventListener("click", handleClick);
    container.addEventListener("click", handleClick);
    button.addEventListener("click", handleClick);
```

```result
    点击了一下按钮：

    你在 BUTTON 元素上进行了点击
    你在 DIV 元素上进行了点击
    你在 BODY 元素上进行了点击
```

在用户单击按钮时，所有三个元素都触发了单击事件  
顺序从内到外，从叶子到根  
这种行为通常被描述为：事件从被点击的最里面的元素**冒泡**而出  

如果要阻止事件继续冒泡，可以对事件对象调用`stopPropagation()`  

```js
    video.addEventListener("click", (event) => {
        event.stopPropagation();//阻止继续冒泡
        video.play();
    });
```

### 事件捕获

事件传播的另一种形式是**事件捕获**，这就像事件冒泡，但顺序是相反的  
不是从内到外，而是从外到内，从根到叶子  

事件捕获默认是禁用的，你需要在`addEventListener()`的`capture`选项中启用它  

```js
    document.body.addEventListener("click", handleClick, { capture: true });
    container.addEventListener("click", handleClick, { capture: true });
    button.addEventListener("click", handleClick);
```

### 事件委托

事件冒泡并不只是令人讨厌，它可以实现**事件委托**  

在父元素上设置监听器，子元素的事件冒泡到父元素上，这样就不用每个子元素都设置监听器  

```html
    <div id="container">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
    </div>
```

```css
    .tile {
        height: 100px;
        width: 33%;
        float: left;
    }
```

```js
    //用了事件对象的target，它指向事件目标元素
    container.addEventListener("click", (event) => {
        event.target.style.backgroundColor = bgChange();
    });
```

使用`event.target`来获取事件的目标元素（实际触发事件的元素）  
如果我们想访问处理这个事件的元素（被触发监听器的元素），使用`event.currentTarget`  
