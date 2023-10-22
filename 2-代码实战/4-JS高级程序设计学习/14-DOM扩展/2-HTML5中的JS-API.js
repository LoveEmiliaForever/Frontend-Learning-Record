//HTML5规范包含了大量的JS API定义，也定义了浏览器应该提供的DOM扩展



//CSS类扩展
//开发中CSS的类用的很多，HTML5增加了一些特性方便使用CSS类

//getElementsByClassName()
//它接受一串包含一个或多个类名的字符串，返回相应节点组成的NodeList

//classList属性
//传统方法中，使用className属性可以完成CSS类的增删查改，但它只是一个字符串，操作起来不方便
//classList属性则不同，它是DOMTokenList集合类型实例，包含下列方法
/*
    add(value)      添加value类，如果存在value类则什么都不做
    remove(value)   删除value类
    contains(value) 返回布尔值，表示是否存在value类
    toggle(value)   存在value则删除，不存在则添加
*/



//焦点管理
//页面加载时，可以使用focus()方法让某个节点获得焦点
//document.activeElement始终包含当前拥有焦点的DOM元素，它在页面刚加载完时为document.body，没有加载完时为null
//document.hasFocus()方法则是返回布尔值，表示当前文档是否拥有焦点（可以帮助确定用户是否在操作页面）



//HTMLDocument扩展

//document.readyState属性，用来判断文档是否加载完毕（而不用依赖onload事件）
//它有两个值：loading 表示文档正在加载，complete 表示文档加载完成

//compatMode属性，指示浏览器处于什么渲染模式
// "CSS1Compat"表示标准模式，"BackCompat"表示混杂模式

//document.head属性，指向<head>元素



//字符集属性
//document.characterSet属性，表示文档实际使用的字符集，默认是"UTF-16"可以通过修改characterSet来更改它



//自定义数据属性
//HTML5允许自定义属性，但是属性名应该以"data-"开头
//自定义属性可以通过元素的 dataset 属性访问，它是一个DOMStringMap实例，包含键值对映射
//元素的data-name属性可以通过name作为键访问



//插入标记
//可以发现，在HTML中插入新HTML是比较麻烦的，要创建连接节点
//但如果可以直接插入HTML字符串就可以快速的完成新HTML创建了

//innerHTML
//读取innerHTML属性时，会返回元素所有后代（不包括调用元素自己）的HTML字符串
//写入innerHTML属性时，则会用新传入的HTML字符串替代原先的HTML字符串（新子树替换旧子树）
//如果写入时不传入HTML标签，则认为是文本节点
//innerHTML插入的<script>是不会执行的，为了安全起见

//outerHTML
//它和innerHTML很像，但是它的范围会包含调用元素自身

//insertAdjacentHTML()方法 和 insertAdjacentText()方法
//它们接受两个参数，第一个参数是表示插入位置的
/*
    beforebegin 插入当前元素前面
    afterbegin  作为当前元素的第一个子元素
    beforeend   作为当前元素的最后一个子元素
    afterend    插入当前元素后面
*/
//第二个参数则根据情况是 解析为HTML 还是 解析为文本

//性能问题
//如果被移除的子树有关联的事件处理程序或JS对象属性，则这些东西会滞留在内存中
//因此最好手动解除这些联系，再进行插入HTML，否则会吃内存



//scrollIntoView()
//这个方法存在于所有元素上，它可以滚动浏览器窗口或容器元素使得包含元素进入视口（定位后自动翻滚）
/*
alignToTop，一个布尔值
    true    滚动后，元素顶部和视口顶部对齐（默认）
    false   滚动后，元素底部和视口底部对齐
scrollIntoViewOptions，一个配置对象
    behavior    定义过渡动画，值为"auto"（默认）或"smooth"
    block   定义垂直方向的对齐，"start"（默认）、"center"、"end"和"nearest"
    inline   定义水平方向的对齐，"start"（默认）、"center"、"end"和"nearest"
*/
