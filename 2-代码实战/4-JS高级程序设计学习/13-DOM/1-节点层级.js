//DOM 即文档对象模型
//它表现为一个由节点构成的层级结构，各种各样的节点和它们之间的关系构成了层级
//根节点的唯一子节点是<html>节点，它被称之为文档元素，每个文档只能有一个



//Node类型
//JS中所有节点类型都会继承Node类型，因此有很多所有类型共享的属性方法

//NodeType属性，表示节点类型，有12个整数代表12种节点类型（这些类型在Node上有）
/*
    Node.ELEMENT_NODE  (1)  常见
    Node.ATTRIBUTE_NODE  (2)  常见
    Node.TEXT_NODE  (3)  常见
    Node.CDATA_SECTION_NODE  (4)
    Node.ENTITY_REFERENCE_NODE  (5)
    Node.ENTITY_NODE  (6)
    Node.PROCESSING_INSTRUCTION_NODE  (7)
    Node.COMMENT_NODE  (8)  常见
    Node.DOCUMENT_NODE  (9)
    Node.DOCUMENT_TYPE_NODE  (10)
    Node.DOCUMENT_FRAGMENT_NODE  (11)  常见
    Node.NOTATION_NODE  (12)
*/

//nodeName与nodeValue
//它们保存着有关节点的信息，它们的值取决于节点类型
//对于 元素 而言，nodeName是元素标签名，nodeValue是null

//节点关系
//和树结构类似，采用家族关系表示，关系指针都是只读的
//每个节点都有一个 childNodes 属性，包含一个 NodeList 实例（ NodeList 是一个类数组结构，存储节点）
//NodeList 是实时的活动对象，而不是一个快照。可以使用 [] 和 item() 访问元素，效果一样
//每个节点也都有一个 parentNode 属性，指向其父元素
//childNodes 的每个节点之间都是同胞节点，可以用 previousSibling 和 nextSibling 在其中导航
//还有 firstChild 和 lastChild 分别指向 childNodes 的第一个和最后一个节点
//document.hasChildNodes() 方法可以探测节点是否有子节点存在
//ownerDocument 属性指向代表整个文档的文档节点，所有节点都有这个关系

//操纵节点
//appendChild() 可以在childNodes末尾添加节点，它会返回新添加的节点
//如果对已经存在的节点使用appendChild() 会使它移动位置
//insertBefore(插入节点，参照节点) 可以把节点插入到参照节点的前面，并返回
//replaceChild(插入节点，被替换节点) 会取替代掉被替换节点，返回被替换节点
//removeChild(要移除节点) 会移除节点，返回被移除节点

//其它操作节点的方法
//cloneNode(Boolean) 会返回调用它的节点一样的节点
//如果传入true，则执行深复制，把节点和子树全部复制；传入false，则只复制该节点
//normalize() 这个方法会处理节点内的不合规文本节点，让它们规范化



//Document类型，JS中表示文档节点的类型
//在浏览器中文档对象document是HTMLDocument的实例，表示整个HTML页面，是一个全局对象

//文档子节点
//documentElement属性，指向<html>元素
//浏览器解析完页面后，document只有一个子节点即<html>，document是只读的
//body属性，指向<body>元素
//doctype属性，文档中<!doctype>相关信息

//文档信息
//title属性，包含<title>元素的文本
//修改title属性会反映到浏览器上，但不会反映到<title>上面
//URL、domain、referrer属性
//分别是 完整URL、页面域名、父页面的URL；除了domain其它不可更改

//定位元素
//getElementById()，根据输入的id查找符合的元素并返回，没有则返回null
//getElementsByTagName()，根据元素标签名称来寻找符合元素
//返回一个NodeList，在HTML中是HTMLCollection对象
//HTMLCollection也是实时的，它还有一个namedItem()方法可以通过name属性获取元素
//HTMLCollection的中括号法既可以传入字符串（调用namedItem()）也可以传入数字（调用item()）
//getElementsByName()，根据name属性查找元素，返回HTMLCollection对象

//特殊集合
//这些特殊的集合也是HTMLCollection对象
/*
    document.anchors  所有带name属性的<a>
    document.forms  所有<form>
    document.images  所有<img>
    document.links  所有带href属性的<a>
*/

//文档写入
//open()、close()用于打开和关闭网页输出流
//write() 写入文本
//writeln() 写入文本同时在末尾加一个换行符
//在页面渲染期间写入内容，则出现在指定位置（使用<script>包裹代码插入到指定位置）
//在加载完毕后再写入，则直接替换整个页面



//Element类型
//HTML中的元素，它暴露了元素标签名、子节点、属性
//nodeName或tagName属性可以获取元素的标签名称，在HTML中元素标签始终全大写，使用时最好转换成全小写

//HTML元素
//所有HTML元素都是HTMLElement或其子类型的实例
//所有HTML元素都通过HTMLElement类型表示，它有5个可读可写的属性
//id、title、lang、dir、className 它们是所有HTML元素都有的标准属性

//取得属性
//getAttribute()，根据属性名查找元素，属性名不区分大小写（自定义属性应该以data-开头）
//5个标准属性和公认属性都可以通过DOM对象属性直接获取，例如 xxx.id xxx.align
//使用getAttribute()访问style属性时，返回的是CSS字符串；通过DOM对象属性访问style时，返回的是一个对象
//getAttribute()访问事件时，返回的时字符串形式源码；通过DOM对象属性访问事件（如xxx.onclick）时，返回的是Function对象

//设置属性
//setAttribute()方法接收两个值，属性名，属性值；如果属性已存在，则进行值的替换
//使用setAttribute()设置的属性名会被规范成小写
//在DOM上添加自定义属性不会让它变成元素的属性

//删除属性
//removeAttribute()方法用于删除元素，它不单单是清除属性值，而是完全删除属性

//attributes属性
//Element类型是唯一使用attributes属性的DOM节点类型
//它包含一个NamedNodeMap实例，是一个类似NodeList的 实时 集合
//元素的每个属性都表示为一个Attr节点，并保存在NamedNodeMap中
/*
    它有四个方法
    getNamedItem(name)  返回 nodeName 属性等于name的节点
    removeNamedItem(name)  删除 nodeName 属性等于name的节点
    setNamedItem(node)  添加node节点，以其nodeName为索引
    item(pos)  返回索引位置pos处的节点
*/
//attributes属性一般用在迭代元素所有属性的时候

//创建元素
//使用document.createElement()创建新元素，接收一个标签名参数
//创建新元素时，其ownerDocument属性被设置为document



//Text类型
//Text节点由Text类型表示，包含纯文本或转义后的HTML字符
//nodeValue为节点中的文本，也可以通过data属性访问

/*
    appendData(text)  向末尾添加文本
    deleteData(offset, count)  从offset向后删除count个字符
    insertData(offset, text)  从offset插入文本
    replaceData(offset, count, text)  将offset后count个字符替换为text
    splitText(offset)  从offset将文本分成两个TextNode，反回后面的一段
    substringData(offset, count)  提取offset后count个字符
*/
//还可以通过length属性获取文本节点的字符数量
//每个元素最多只能有一个文本节点（通过normalize()规范化），只要开始结束标签间有内容就会创建一个文本节点

//创建文本节点
//document.createTextNode()可以创建文本节点，内容是传入的字符串
//它的ownerDocument也被设置为document



//Comment类型
//DOM中的注释通过Comment类型表示，nodeValue值为注释内容
//它与Text类型继承自同一个基类，除了splitText()没有以外，Text的操作字符串方法Comment都有
//注释节点可以作为父节点的子节点访问
//使用document.createComment()可以创建注释节点



//DocumentType类型
//该类型不能动态创建，只能在解析文档代码时创建
//DocumentType对象保存在document.doctype属性中，它有三个属性：name、entities、notations
//name属性包含文档类型的名称，即<!DOCTYPE后面的文本



//DocumentFragment类型  文档片段
//它在标签中没有对应，它是一个“轻量级”文档，适合作为一个仓库（它就和文档一样）
//document.createDocumentFragment()可以创建它
//当把它添加到文档时，它的后代会被添加进去，它不会，它永远不会被添加到文档树



//Attr类型
//元素数据在DOM中通过Attr类型表示，它是属性节点，它不被认为是DOM文档树的一部分
//nodeName是属性名，nodeValue是属性值
//它有三个属性: name、value、specified
//分别是属性名、属性值、布尔值（表示是否是默认值）
//document.createAttribute()可以创建新Attr节点，参数为属性名
/*
    let attr = document.createAttribute("align");
    attr.value = "left";
    element.setAttributeNode(attr);
*/
//setAttributeNode()和setAttribute()不同
