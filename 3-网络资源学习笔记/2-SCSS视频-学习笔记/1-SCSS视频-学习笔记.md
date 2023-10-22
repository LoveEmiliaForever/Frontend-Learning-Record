# RCSS视频学习笔记

跟着BiliBili的一个教程学习了scss的常用知识  
原视频地址在此：[CSS预处理器SASS从入门到高级进阶—完整视频课程【最新录制】](https://www.bilibili.com/video/BV1Ci4y1d74K)  

## sass、less、postcss、stylus的简介与区别

### 为什么会出现CSS预处理

CSS没有像编程语言一样的变量、常量、其它语法  
这样CSS代码会随着项目变大而变得难以维护  
可是CSS又不太可能被替换，故而CSS预处理就作为CSS的扩展出现在了前端技术中  

### CSS预处理是什么

CSS预处理器用一组专门的编程语言进行页面样式设计  
再将其编译成正常的CSS文件，供项目使用  
由于这样的流程，CSS预处理器可以为CSS增加一些编程的特性  

### Sass和Scss

sass是一种动态语言，它的语法属于缩排语法（像Python一样）  
它比CSS多出了很多功能，如变量、嵌套、运算等等  

可是由于Sass的语法和CSS不太一样且无法将CSS代码直接放入其中  
sass就进行了改良，进化成了scss，scss与原来的语法兼容，不过用`{}`取代了缩进  
需要Ruby环境  

### Less

Less也是一种动态语言，它也对CSS赋予了动态语言特性  
它既可以运行在客户端（借助less.js）也可以运行在服务端（借助Node.js）  

### Stylus

比较新颖的预处理语言，人气较低，花样较多  
需要Node.js  

### 三者变量符的不同

| 语言 | 变量符使用示例 |
| :---: | :---: |
| Sass | `$variable: #000;` |
| Less | `@variable: #000;` |
| Stylus | `variable = #000;` |

## Sass的四种输出风格

* `nested`：嵌套缩进的css代码

```css
    #main {
      color: #fff;
      background-color: #000; }
      #main p {
        width: 10em; }
    .huge {
      font-size: 10em;
      font-weight: bold;
      text-decoration: underline; }
```

* `expanded`：展开的多行css代码

```css
    #main {
      color: #fff;
      background-color: #000;
    }
    #main p {
      width: 10em;
    }
    .huge {
      font-size: 10em;
      font-weight: bold;
      text-decoration: underline;
    }
```

* `compact`：简洁格式的css代码

```css
    #main { color: #fff; background-color: #000; }
    #main p { width: 10em; }

    .huge { font-size: 10em; font-weight: bold; text-decoration: underline; }
```

* `compressed`：压缩后的css代码

```css
#main{color:#fff;background-color:#000}#main p{width:10em}.huge{font-size:10em;font-weight:bold;text-decoration:underline}
```

## Sass编译器

有三种编译器`Dart Sass`、`Lib Sass`、`Ruby Sass`  
这里面只有`Dart Sass`仍然受支持，新项目应该使用它  

## Sass语法功能扩张

### 后代选择器

```scss
    .祖先{
        color: red;
        .子代1{
            color: black;
            .子代1的子代{
                color: blue;
            }
        }
        .子代2{
            color: green;
        }
    }
```

使用嵌套的方式表示后代选择器  

### 伪类选择器（`&`的妙用）

```scss
    /*伪类选择器*/
    a{
        color:black;
        &:hover{
            color:blue;
        }
    }
```

```scss
    .top{
        color:red;
        /*代表的是.top-left*/
        &-left{
            color:blue;
        }
    }
```

`&`是代表着父嵌套的选择器字符串全称  

### 属性嵌套

```scss
    a {
        font: {
            size: 14px;
            family: sans-serif;
            weight: bold;
        }
    }
    /*上下两个规则等效*/
    a {
        font-size: 14px;
        font-family: sans-serif;
        font-weight: bold;
    }
```

属性嵌套可以让有同一个前缀的属性被组织到一起，方便书写  

### 占位符选择器的定义和使用（类似抽象类）

使用`%占位符名字`来定义一个模板（未使用时它不会被渲染）  
在具体的规则中使用`@extend %占位符名字`来将模板引入  

```scss
%base {
    display: block;
}
.name{
    @extend %base;
}
/*上下两个规则等效*/
.name{
    display: block;
}
```

将占位符放在选择器中，当模板被应用时，选择器也会参与其中  

```scss
.top%base {
    display: block;
}
.name{
    @extend %base;
}
/*上下两个规则等效*/
.top.name{
    display: block;
}
```

### Sass的注释语法

使用`/* */`包裹注释，可以多行，可以单行  
使用`//`这是单行注释，用法同C语言  

## Sass的变量

### 声明变量与变量命名

使用`$`声明一个变量并同时赋值  

```scss
    $mycolor: #000;
    $my-color: #fff;
    $my_color: #faa;
```

> :grey_exclamation:最好是如C语言一样，集中声明变量

> :exclamation:变量名中的`-`和`_`会被当成同一个东西
> 也就是说在上例中，`my-color`被重复赋值了，它的最终值是`#faa`

### 变量作用域

* 局部变量
  * 定义在某个嵌套里面，作用域就只在那个嵌套里面  
* 全局变量
  * 直接在文件内定义变量，不被包含在任何嵌套里面  
  * 在变量的后面加上`!global`声明它为全局变量

### 变量类型

* 数字：1，2，3，10px，30%
* 字符串（有引号和无引号字符串）："str"，'str'，str
* 颜色：blue，#fff，rgba()
* 布尔：true，false
* 空值：null
* 数组（用空格或逗号作分隔符）：`1em 2em 3em`，`1em,2em,3em`
* maps相对于JS的object：(key1:value1;key2:value2)

### 为变量设置默认值

在变量后面添加`!default`将该赋值绑定为变量的默认值  

```scss
    $color:#fff !default;
```

### 私有变量

在变量名字的前面加`-`或`_`就可以把它定义为私有变量  
这个方法也可以用在`@function`和`@mixin`上面  

如果在color没有被声明的时候使用它，则默认值生效  

## Sass的导入@import

可以将其它的`.scss`文件导入到`.scss`之中  
使用`@import "导入文件路径"`引入`.scss`文件  

但如下的几种方式将视为普通的CSS语句（导入普通的CSS文件）  

* 文件扩展名是`.css`
* 文件名以`http://`开头
* 文件名是`url()`
* @import包含media queries（媒体查询）

如果`.scss`文件的命名是以下划线`_`开头的，则它不会被编译成css  
这种命名通常是用于被导入`.scss`文件  

但是`_basic.scss`和`basic.scss`不应该同时出现，因为它们在scss的导入中不会被区分  

## Sass混合指令

混合指令用于定义可重复使用的样式（它很像函数）  
它可以包括全部的CSS和部分Scss  

定义一个混合指令

```scss
    @mixin Name($variable1, $variable2:null, $variable3, $variable4) {
        CSS-rules;
    }
```

将它引入到某个规则之中  

```scss
    .block{
        @include Name(num1, $variable3: num3, null);
    }
```

传入不确定的多个参数可以使用`...`  

```scss
    /*下面的color变量可以接受多个值*/
    @mixin FunctionName($direction, $color...){
        CSS-rules;
    }
```

## Sass的继承指令

一个规则可以继承另一个规则，只需使用`@extend`  

```scss
    .father{
        color:red;
    }
    .son{
        @extend .father;
    }
```

如果只是想让某个规则只作为被继承对象来使用  
那么应该把它的选择器声明为`占位符选择器`，这样它就不会被渲染  

`@extend`和`@mixin`可以做出相似的效果，但它们生成的css文件是不一样的  
如它们的名字一样，`@extend`会渲染出公共的规则，`@mixin`则直接把规则混入每一个规则内部  

## Sass的运算符

### 等号运算符

| 符号 | 意义 |
| :---: | :---: |
| `==` | 等于 |
| `!=` | 不等于 |

### 比较运算符符（仅能比较数字）

| 符号 | 意义 | 符号 | 意义 |
| :---: | :---: | :---: | :---: |
| `<`实体符`lt` | 小于 | `<=`实体符`lte` | 小于等于 |
| `>`实体符`gt` | 大于 | `>=`实体符`gte` | 大于等于 |

### 逻辑运算符

| 符号 | 意义 |
| :---: | :---: |
| `or` | 或 |
| `and` | 且 |
| `not` | 非 |

### 数字运算符

| 符号 | 意义 | 符号 | 意义 |
| :---: | :---: | :---: | :---: |
| `+` | 加 | `-` | 减 |
| `*` | 乘 | `/` | 除 |
| `%` | 取模 |

纯数字与单位数值相加减，则结果为单位数值  
相对单位和绝对单位相加减报错  

相乘时，纯数字和单位数值相乘，结果为单位数值  
单位数值相乘则报错  

除号可能被当成css的分隔符，在下面的情况它会被视为除法运算符  

* 值包含有变量或函数
* 值被圆括号`()`包裹
* 值是算数表达式的一部分

### 字符串运算

`+`可以作为字符串连接符，有引号和无引号相连，结果有无引号取决于`+`左边的字符串  
如果有一个值是函数返回的，情况不一样，有无符号取决于另一个字符串  

### 插值语法

语法：`#{内容}`  
将内容的输出作为值插入位置，类似于Python的`f"字符串{}"`  

## Sass的常见函数

### 颜色函数

* `lighten($color, $amount)`：让颜色变亮，第二个数值控制强度
* `darken($color, $amount)`：让颜色变暗，第二个数值控制强度
* `opacify($color, $amount)`：降低颜色透明度

### 字符串函数

* `quote($str)`：给字符串添加引号
* `unquote($str)`：去除字符串引号
* `str-length($str)`：输出字符串长度
* `str-insert($str, $insert, $index)`：向字符串的指定位置插入字符串（索引符合常识）

### 数值函数

* `round($num)`：四舍五入为最接近的整数
* `ceil($num)`：向上取整
* `min($num)`：获取最小数
* `max($num)`：获取最大数
* `abs($num)`：绝对值运算
* `random($num)`：随机生成0~1之间的数

### List函数

* `length($list)`：返回列表长度
* `nth($list, $index)`：根据索引取列表中的值
* `index($list, $element)`：返回值的索引
* `append($list, $element)`：将值添加到列表末尾

### Map函数

* `map-get($key)`：根据键获取值
* `map-keys($map)`：取出所有键。输出为list
* `map-values($map)`：取出所有值，输出为list

### 选择器函数

* `selector-append($selector, $selector)`：将一个选择器附加到另一个选择器尾部
* `selector-unify($selector, $selector)`：把两个选择器合并

### 自检函数

* `feature-exists()`：检查当前Sass版本是否存在某个特性
* `variable-exists()`：检查当前作用域是否存在某个变量
* `mixin-exists()`：检查某个mixin是否存在

## 流程控制

### if-else语句

`@if`、`@else`、`@else if`  
使用方法和其它编程语言一样  

### if的三元语句

`if($true-or-false, $if-true-return, $if-false-return)`  
判断第一个参数条件的真假，如果为真则返回第二个，如果为假则返回第三个  

### for语句

```scss
    /*from to 包含开始的值，不包含结束的值*/
    @for $var from 1 to 4{
        .class#{$var}{
            color:red;
        }
    }
    /*from through 既包含开始的值，也包含结束的值*/
    @for $var from 1 through 4{
        .class#{$var}{
            color:red;
        }
    }
```

### each语句

`@each`指令就像是Python中的遍历可迭代对象  

```scss
    $numList: 1 2 3 4 5;

    @each $num in $numList{
        .class#{$num}{
            color:red;
        }
    }
```

### while指令

```scss
    $frequency: 3;

    @while $frequency > 0{
        .class#{$frequency}{
            color:red;
        }
        $frequency: $frequency - 1;
    }
```

## @function的使用

```scss
    @function function-name([$var1,$var2]){
        ...
        @return $result;
    }
    /*使用它*/
    function-name(...);
```

它的参数设置和`@mixin`一样，但`@function`是可以`@return`的  
也就是说，可以自定义返回值  

> :grey_exclamation:同样的，`function-name`和`function_name`是一样的  

## @use的使用

它可以从其它的`.scss`文件加载`@mixin`、`@function`、`$variable`  
并将来自多个样式表的CSS组合在一起  
被`@use`加载的样式表称为`模块`  

```scss
    /*下列引入的都是.scss文件*/
    /*下面的with是用来更改变量默认值的*/
    @use 'css/basic' with($variable:30);
    @use 'css/top' as tp;
    /*下面的意思是不使用命名空间
    也就是里面的变量等等就像是在本文件创建的一样*/
    @use 'css/global' as *;
    body{
        /*下面是对变量、函数、混合的使用*/
        basic.$variable;
        tp.function();
        mixin-global();
    }
```

和`@import`对比起来`@use`更加的高级，更加的完善  
可以避免命名空间污染问题  

## @forward的使用

通过`@forward`加载一个模块成员  
并将这些成员当作自己的成员当作自己的成员对外暴露出去  
它可以用来进行转发（引入多个文件，自身再被其它文件引入）  

```scss
    /*隐藏function1，不把它转发出去*/
    @forward 'css/basic' hide function1;
    /*仅仅只展示function2*/
    @forward 'css/top' show function2;
    /*给引入文件加前缀，避免同名冲突*/
    @forward 'css/bottom' prefix1* show prefix1function3;
    @forward 'css/left' p-* hide p-function4;
```

## @at-root的使用

使用`@at-root`跳出嵌套  

```scss
    body{
        font-bold: 900;
        @at-root &{
            font-size: 32px;
        }
    }
```
