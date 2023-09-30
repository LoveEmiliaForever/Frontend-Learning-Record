//富文本编辑即“所见即所得”
//基本的技术就是在HTML文件中嵌入一个iframe，通过designMode将这个空白文档（iframe里面的）设置为可以编辑的，实际编辑的是<body>元素
//document.designMode有"on"和"off"两个值，on则整个文档都会变成可编辑的
//只有在文档完全加载后才可以设置

//使用contenteditable
//给页面里的任何元素指定contenteditable，该元素会立刻被用户编辑
//它有3个值：true、false、inherit



//与富文本交互
//使用document.execCommand()可以在文档上执行既定的命令，可以实现大多数格式化任务
//它接受3个参数：要执行的命令，fasle，执行命令需要的值（第二个参数设置为false，以便跨浏览器）
//各种命令见于书P604

//不同浏览器生成的HTML差别通常很大，且它们是通过innerHTML生成的（可能有一些编程的问题）

//queryCommandEnabled()，当前选中的文本或光标所在位置是否可以执行相关命令

//queryCommandState()用于确定相关命令是否应用到了当前文本选区

//queryCommandValue()返回执行命令时使用的值（execCommand()的第三个参数）



//富文件选择
//使用getSelection()方法，可以获得富文本编辑器的选区，返回当前选中文本的Selection对象
/*
Selection对象的属性
    anchorNode      开始节点
    anchorNodeOffset    
    focusNode       结束节点
    focusOffset     
    isCollapsed     起点和终点是否在同一个地方
    rangeCount      选区中包含的DOM范围数量（是范围类型）
*/

//Selection对象可以操作选区
/*
    addRange(range)         添加DOM范围
    collapse(node, offset)  将选区折叠到给定位置
    collapseToEnd()         
    collapseToStart()       
    containsNode(node)      是否包含节点
    deleteFromDocument()    从文档中删除选区文本
    extend(node, offset)    将结束节点和偏移值改变成目标值
    getRangeAt(index)       
    removeAllRanges()       移除选区
    removeRange(range)      
*/



//通过表单提交富文本
//富文本编辑器在技术上和表单没关系
//因此，要把编辑结果给服务器，需要把HTML提取出来，赋值给一个隐藏字段，并提交
