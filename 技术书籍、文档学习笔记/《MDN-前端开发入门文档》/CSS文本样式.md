# CSS文本样式

## 基本文字和字体样式

用于样式文本的 CSS 属性通常可以分为两类  

* **字体样式**: 作用于字体的属性，会直接应用到文本中，比如使用哪种字体，字体的大小是怎样的，字体是粗体还是斜体，等等
* **文本布局风格**: 作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及在内容框中，文本如何对齐

> :grey_exclamation:包含在元素中的文本是作为一个单一的实体，你不能将文字其中一部分选中或添加样式，如果你要这么做，那么你必须要用适合的元素来包装它们，或使用伪元素

### 字体颜色

`color` 属性设置选中元素的前景内容的颜色 （通常指文本）

### 字体种类

使用`font-family`可以为浏览器指定一个字体或是一个字体列表  
浏览器只会应用当前可用的字体，如果字体不可用，那么就会用浏览器默认字体代替  

#### 网页安全字体

只有某几个字体通常可以应用到所有系统，因此可以毫无顾忌地使用  
这些都是所谓的**网页安全字体**  

 Web 安全字体列表将随着操作系统的发展而改变，但是可以认为下面的字体是网页安全的  

* `Arial`：应该要添加 `Helvetica` 作为 `Arial` 的首选替代品
* `Courier New`：某些操作系统有一个 `Courier New` 字体的替代版本叫 `Courier`
* `Times New Roman`：某些操作系统有一个 `Times New Roman` 字体的替代版本叫 `Times`

#### 默认字体

CSS 定义了 5 个常用的字体名称：`serif`, `sans-serif`, `monospace`, `cursive`, 和 `fantasy`  
这些都是非常通用的，当使用这些通用名称时，使用的字体完全取决于每个浏览器  

`serif`, `sans-serif` 和 `monospace` 是比较好预测的，默认的情况应该比较合理  
`cursive` 和 `fantasy` 是不太好预测的，使用它们的时候应该稍微注意  

五个名称的定义如下  

| 名称 | 定义 |
| :---: | :---: |
| `serif` | 衬线字体，即有衬线的字体 |
| `sans-serif` | 无衬线字体 |
| `monospace` | 等宽字体，指包含的全部字符的宽度相同的字体 |
| `cursive` | 手写字体 |
| `fantasy` | 装饰字体 |

#### 字体栈

由于你**无法保证**你想在你的网页上使用的**字体的可用性**  
可以**提供一个字体栈**，这样的话，浏览器就有多种字体可以选择了  

```css
    font-family: "Trebuchet MS", Verdana, sans-serif;
```

浏览器会从左到右顺序查看字体的可用性，因此在最后放一个通用字体是不错的  

> :grey_exclamation: 有一些字体名称不止一个单词，比如`Trebuchet MS` ，那么就需要用引号包裹

### 字体大小

使用`font-size`属性指定字体大小，通常的单位是`px`、`em`、`rem`  

元素的 `font-size` 属性是从该元素的父元素继承的  
所以这一切都是从整个文档的`<html>`开始，浏览器的 `font-size` 标准设置的值为 16px  

### 字体样式、字体粗细、文本转换、文本装饰

* `font-style`：用来打开和关闭文本 italic （斜体）
  * `normal`：文本为正常字体
  * `italic`：当前字体如有斜体则应用，如无则利用`oblique`模拟斜体
  * `oblique`：模拟斜体，也就是将普通文本倾斜的样式应用
* `font-weight`：设置文字粗体大小
  * `normal`、`bold`：普通或者加粗的字体
  * `lighter`、`bolder`：更细或者更粗的字体
  * `100~900`：利用间隔100的数字指定字体粗细
* `text-transform`：设置要转换的字体
  * `none`：防止转型
  * `uppercase`：所有文本转为大写
  * `lowercase`：所有文本转为小写
  * `capitalize`：让所有单词的首字母大写
  * `full-width`：所有字形转为`全角`
* `text-decoration`：设置字体的文本装饰
  * `none`：不设置文本装饰
  * `underline`：文本下划线
  * `overline`：文本上划线
  * `line-through`：删除线

> :grey_exclamation:`text-decoration`可以一次接受多个值，如`text-decoration: underline overline`
> 并且`text-decoration`是一个缩写形式，它由`-line`、`-style`、`-color`构成

### 文字阴影

使用`text-shadow`来给文本应用阴影，它接受四个值  

```css
    text-shadow: 4px 4px 5px red;
```

这四个值分别代表着

* 阴影的水平偏移
* 阴影的垂直偏移
* 阴影模糊半径
* 阴影基础颜色

`text-shadow`接受多个值（值之间以`,`分隔）  
这样就能够给同一文本应用多个阴影  

### 文本对齐

`text-align`属性用来控制文本如何与所在内容盒子对齐  

* `left`：左对齐
* `right`：右对齐
* `center`：居中
* `justify`：使文本展开，改变单词之间的差距，使所有文本行的宽度相同

### 行高

`line-height`属性设置文本每一行的高，它能够接受大多数值  
但最好的方法，是设置一个无单位的数，表示行高是字体大小的多少倍  

```css
    line-height: 1.5;
```

### 字母和单词间距

`letter-spacing` 和 `word-spacing` 属性允许设置文本中字母之间的间距、或是单词之间的间距  

### 其它重要行为

* `text-overflow`：用于确定如何提示用户存在隐藏的溢出内容
  * `clip`：默认值，会隐藏溢出内容
  * `ellipsis`：会把溢出的内容以`...`表示（它要和`white-space: nowrap`合用）
* `text-indent`：定义一个块元素首行文本内容之前的缩进量（首行缩进）
  * `数值类型`：可以是`em`也可以是`5%`这些数值类型
* `word-break`：控制怎样在单词内换行
  * `normal`：默认换行行为，英语单词不断，中日韩文本断行
  * `break-all`：所有的都可在单词内断行
  * `keep-all`：所有的都不能在单词内断行
* `overflow-wrap`：控制怎么在文本内换行
  * `normal`：只能在正常单词断点处换行
  * `anywhere`：没有正常断点时，会直接换行，但考虑由单词引入的换行机会
  * `break-word`：和`anywhere`相似，但不考虑由单词引入的换行机会

## 列表样式

### 处理列表间距

设置列表的行间距，调整样式，使其保持与周围元素相同的垂直间距  
例如，将列表的字体大小统一设置、行高统一设置  

### 特定列表样式

#### 符号样式

使用`list-style-type`属性来设置项目符号点的类型  

它可以接受多种多样的值，参见[MDN-CSS:list-style-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-type)  
不过常见的有以下几种  

* `none`：不显示列表项的标记
* `disc`：实心圆点标记
* `circle`：空心圆点标记
* `square`：实心方块
* `decimal`：十进制阿拉伯数字

#### 项目符号位置

使用`list-style-type`指定项目符号是出现在列表项内部还是外部  

* `outside`：出现在外部
* `inside`：出现在内部

#### 自定义项目符号图片

使用`list-style-image: url(图片位置)`可以自定义项目符号  

#### list-style合写

```css
    list-style: square url(example.png) inside;
```

### 管理列表计数

* `start`：该属性能够指定列表的计数开始处
* `reversed`：让列表倒过来计数
* `value`：`<li>`的属性，直接指定序数

```css
    <ol start="4" reversed>
        <li value="2">First</li>
        <li value="33">Second</li>
    </ol>
```

## 链接的样式化

利用伪类，给`<a>`的不同状态添加不同效果  

* `:link`：没有被访问过
* `:visited`：已经被访问过了
* `:hover`：鼠标悬停时的效果
* `:focus`：被聚焦时的效果
* `:active`：被激活时的效果

## Web字体

可以在网站文件里包含字体文件，在用户访问网站时字体文件会被一起传输  
如此一来就不怕字体无法应用了  

```css
    @font-face {
        font-family: "myFont";
        src: url("myFont.ttf") format("truetype"),
            url("myFont.woff") format("woff"),
            url("woff2") format("woff2")
    }
```

如上所示，有多个字体格式，因为跨浏览器兼容需要它们  

免费字体网站：[Font Squirre](https://www.fontsquirrel.com/)、[dafont](https://www.dafont.com/)、[Everything Fonts](https://everythingfonts.com/)  


