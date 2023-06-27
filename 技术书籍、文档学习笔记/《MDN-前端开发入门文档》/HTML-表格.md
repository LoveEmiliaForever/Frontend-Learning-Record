# HTML-表格

## HTML-表格基础

> :exclamation:不要使用表格来进行布局，落后，糟糕

### 创建表格

使用`<table>`来创建一个表格，`<tr>`来创建一行，`<td>`来创建一个单元格  

```html
    <table>
        <tr>
            <td>一行一列</td>
            <td>一行二列</td>
            <td>一行三列</td>
        </tr>
    </table>
```

### 使用`<th>`

为了在视觉上和语义上都能识别表格标题，要使用`<th>`标签  
它和`<tr>`的使用方法一样，但只能放在第一行，且只能使用一次  

```html
    <table>
        <th>
            <td>列标题1</td>
            <td>列标题2</td>
            <td>列标题3</td>
        </th>
        <tr>
            <td>一行一列</td>
            <td>一行二列</td>
            <td>一行三列</td>
        </tr>
    </table>
```

### 单元格跨行、跨列

对`<td>`使用`colspan`或`rowspan`让单元格跨列或者跨行  
它们两个属性都接受一个数字，代表跨越的数量  

```html
    <table>
        <th>
            <td colspan="2">列标题1：跨列2列</td>
            <td>列标题2</td>
        </th>
        <tr>
            <td rowspan="2">一行一列：跨行2行</td>
            <td>一行二列</td>
            <td>一行三列</td>
        </tr>
        <tr>
            <td>二行二列</td>
            <td>二行三列</td>
        </tr>
    </table>
```

### 表格中的列选择

如果不使用`<colgroup>`和`<col>`的组合，要选择到表格中的某一列是比较麻烦的  
但是在使用了`<colgroup>`和`<col>`的组合后，选择列将非常简单  

```html
    <table>
        <colgroup>
            <col>
            <col>
            <col span="3">
        </colgroup>
        <th>
            <td>列标题1</td>
            <td>列标题2</td>
            <td>列标题3</td>
        </th>
        <tr>
            <td>一行一列</td>
            <td>一行二列</td>
            <td>一行三列</td>
        </tr>
    </table>
```

如上所示，`<colgroup>`中包含了许多`<col>`  
按照对应顺序，每一个`<col>`都对应着一列单元格  
对相应的`<col>`应用样式，则对应的单元格列也会被应用样式  

除此之外，还可以使用`span`属性来指定单个`<col>`对应于哪一列  

## HTML-表格高级特性

### 使用`<caption>`给表格添加标题

可以使用`<caption>`包裹住表格标题，再把它放进`<table>`内  
放置的位置应该是要在`<table>`开始标签的下面  

```html
    <table>
        <caption>
            表格标题
        </caption>
        <colgroup>
            <col>
            <col>
            <col span="3">
        </colgroup>
        <th>
            <td>列标题1</td>
            <td>列标题2</td>
            <td>列标题3</td>
        </th>
        <tr>
            <td>一行一列</td>
            <td>一行二列</td>
            <td>一行三列</td>
        </tr>
    </table>
```

### 使用`thead`、`tfoot`、`tbody`结构化表格

这些元素不会使表格更易于屏幕阅读器用户访问，也不会造成任何视觉上的改变。然而，它们在应用样式和布局上会起到作用，可以更好地让 CSS 应用到表格上  

在长表格的情况下，你可以在每个打印页面上使表格页眉和页脚重复，你也可以让表格的正文部分显示在一个单独的页面上，并通过上下滚动来获得内容  

```html
    <table>
        <caption>
            表格标题
        </caption>
        <colgroup>
            <col>
            <col>
            <col span="3">
        </colgroup>
        <thead>
            <th>
                <td>列标题1</td>
                <td>列标题2</td>
                <td>列标题3</td>
            </th>
        </thead>
        <tbody>
            <tr>
                <td>一行一列</td>
                <td>一行二列</td>
                <td>一行三列</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>一列总结</td>
                <td>二列总结</td>
                <td>三列总结</td>
            </tr>
        </tfoot>
    </table>
```

* `<thead>`必须包裹`<th>`元素，放在`<caption>`和`<colgroup>`
* `<tfoot>`应该要包裹住总结部分，无论放在`<table>`的哪个位置，浏览器都会把它渲染到表格底部
* `<tbody>`存放表格内容，它总是存在于表格内的，即使你没有指定它

### 表格间的嵌套

表格之间通常是不必要进行嵌套的，因为那样会使得结构变得非常麻烦  
如果不得不进行嵌套，那么在一级表格的`<td>`内定义一个完整的二级表格即可  

### 无障碍表格

无障碍表格的关键是将每一个单元格联系到对应的行或列信息  

#### 使用`<th>`和`scope`

`scope`有四个值，分别是`col`、`row`、`colgroup`、`rowgroup`  

```html
    <table>
        <thead>
            <tr>
                <th scope="col">列标题1</th>
                <th scope="col">列标题2</th>
                <th scope="col">列标题3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">行标题1</th>
                <td>一行一列</td>
                <td>一行二列</td>
                <td>一行三列</td>
            </tr>
            <tr>
                <th scope="row">行标题2</th>
                <td>二行一列</td>
                <td>二行二列</td>
                <td>二行三列</td>
            </tr>
        </tbody>
    </table>
```

`colgroup`是使用在存在子列标题时用于包裹同类子标题的总和标题的，`rowgroup`也是如此使用  

```html
    <th scope="colgroup">
        <th scope="col">分标题1</th>
        <th scope="col">分标题2</th>
        <th scope="col">分标题3</th>
    </th>
```

#### 使用`id`和`headers`

1. 为每个`<th>`添加一个`id`
2. 为每个`<td>`添加`headers`属性，`headers`内包括该单元格`所属列id`、`所属行id`

```html
    <thead>
        <tr>
            <th id="purchase">Purchase</th>
            <th id="location">Location</th>
            <th id="date">Date</th>
            <th id="evaluation">Evaluation</th>
            <th id="cost">Cost (€)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th id="haircut">Haircut</th>
            <td headers="location haircut">Hairdresser</td>
            <td headers="date haircut">12/09</td>
            <td headers="evaluation haircut">Great idea</td>
            <td headers="cost haircut">30</td>
        </tr>
    </tbody>
```
