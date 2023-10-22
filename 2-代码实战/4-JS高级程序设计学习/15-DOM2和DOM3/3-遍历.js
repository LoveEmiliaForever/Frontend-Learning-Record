//DOM2 Traversal and Range 模块定义了两个类型用于辅助顺序遍历DOM结构，它们都是深度优先遍历



//NodeIterator
//通过document.createNodeIterator()方法可以创建新的NodeIterator实例
//这个方法接受4个参数
/*
    root        遍历根节点
    whatToShow  数值代码，表示应该访问哪些节点
    filter      函数或NodeFilter对象，过滤某些节点
    entityReferenceExpansion    HTML中无用的参数
*/

//whatToShow参数是一个位掩码，通过应用过滤器来指定访问哪些节点
//它对应的常量是在NodeFilter类型中定义的
/*
    NodeFilter.SHOW_ALL     所有节点
    NodeFilter.SHOW_ELEMENT 元素节点
    NodeFilter.SHOW_TEXT    文本节点
    NodeFilter.SHOW_COMMENT 注释节点
    NodeFilter.SHOW_DOCUMENT    文档节点
    NodeFilter.SHOW_DOCUMENT_TYPE   文档类型节点
*/
//这些值可以通过使用 位操作符 进行组合
//例如：NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT  访问元素节点或是文本节点

//createNodeIterator()的filter参数可以传入自定义NodeFilter对象或是一个作为节点过滤器的函数
//NodeFilter对象只有一个方法acceptNode()，如果给定节点应该访问就返回NodeFilter.FILTER_ACCEPT，否则返回NodeFilter.FILTER_SKIP
let filter = {
    acceptNode(node){
        return node.tagName.toLowerCase() == "p" ?
        NodeFilter.FILTER_ACCEPT :
        NodeFilter.FILTER_SKIP;
    }
};
//如果要传入函数，其实也差不多
let filter2 = function(node){
    return node.tagName.toLowerCase() == "p" ?
    NodeFilter.FILTER_ACCEPT :
    NodeFilter.FILTER_SKIP;
};

//NodeIterator的两个主要方法
//nextNode()方法，前进一步，第一次调用传回根节点，最后一次返回null
//previousNode()方法，后退一步



//TreeWalker
//TreeWalker就是NodeIterator的高级版，同样包含nextNode()和previousNode()
/*
它还包括了很多其它的方法
    parentNode()    遍历到当前节点的父节点
    firstChild()    遍历到当前节点的第一个子节点
    lastChild()     遍历到当前节点的最后一个子节点
    nextSibling()   遍历到当前节点的下一个同胞节点
    previousSibling()   遍历到当前节点的上一个同胞节点
*/
//通过调用document.createTreeWalker()可以创建新TreeWalker对象，它接受和NodeIterator创建方法一样的参数

//filter可以返回一个NodeFilter.FILTER_REJECT，表示跳过该节点及其子树

//TreeWalker还有一个currentNode属性，表示遍历过程中上一次返回的节点，修改这个属性可以影响接下来遍历的起点
