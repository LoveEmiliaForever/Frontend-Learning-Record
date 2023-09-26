//范围可用于在文档中选择内容，而不用考虑节点之间的界限



//使用document.createRange()方法可以创建一个DOM范围对象
//范围对象是和创建它的文档关联的，不能够用在其它文档上
//创建范围对象后，可以指定它的选择部分，并且能够对范围的内容执行一些操作
/*
Range实例有自己的方法属性
    startContainer  范围起点所在的节点（是所在的节点，也就是该节点是起点的父节点）
    startOffset     范围起点在startContainer的偏移量（如果是文字，则是字符的偏移，如果是普通节点则是子节点的偏移）
    endContainer    范围终端所在节点
    endOffset       和startContainer相似
    commonAncestorContainer 范围内节点的最小（最深层）共同祖先
*/



//简单选择
//使用selectNode()或selectNodeContents()方法选择节点范围，都只接受一个节点参数
//selectNode()选择整个节点，包括其后代节点
//selectNodeContents()只选择节点的后代
//像上面一样选择了范围后，还可以更加精细的控制起终点
/*
    setStartBefore(refNode) 设置范围起点，在refNode之前
    setStartAfter(refNode)  设置范围起点，在refNode之后
    setEndBefore(refNode)   设置范围终点，在refNode之前
    setEndAfter(refNode)    设置范围终点，在refNode之后
*/



//复杂选择
//使用setStart()和setEnd()方法可以精细的控制范围起终点
//它们接受两个参数（参照节点，偏移量）
//利用这两个方法可以轻易的选取范围



//操作范围
//创建范围之后，浏览器会在内部创建一个文档片段节点，用于包含范围选区中的节点
//为操作范围的内容，选区中的内容必须格式完好

//deleteContents()，这个方法会从文档中删除范围包含的节点

//extractContents()，这个方法也会删除范围的节点，但它会返回范围对应的文档片段

//cloneContents()，它会创建一个副本，返回的文档片段包含范围中节点的副本（是副本而非原始节点）



//范围插入
//使用insertNode()可以在范围起点位置插入一个节点
//使用surroundContents()方法可以让范围被某个标签包围
//它接受一个参数，即包含范围内容的节点



//范围折叠
//如果范围没有选择文档的任何部分，则称为折叠
//折叠范围时，位置可能是范围的开始处，也可能是结尾处
//使用collapse()方法，它接受一个布尔值，true表示折叠到起点，false表示折叠到终点



//范围比较
//使用compareBoundaryPoints()方法确定范围之间是否存在公共的边界，接受两个参数（要比较的范围，表示比较方式的数值）
/*
    Range.START_TO_START（0）   比较两个范围的起点
    Range.START_TO_END（1）     比较第一个的起点和第二个的终点
    Range.END_TO_END（2）       比较两个的终点
    Range.END_TO_START（3）     比较第一个的终点和第二个的起点
*/
//返回-1、0、1表示第一个范围的边界在第二个范围边界的前面、相等、后面



//复制范围
//调用cloneRange()可以复制范围

//清理
//使用完范围后，应该调用detach()方法把它从创建它的文档中剥离
//调用了detach()后，可以放心解除对范围的引用
