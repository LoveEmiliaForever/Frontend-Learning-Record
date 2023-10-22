//Selectors API规定了浏览器原生支持的CSS查询API

//querySelector()
//它接受CSS选择符参数，返回匹配该模式的第一个后代元素，如果没有匹配则返回null
//如果选择符有语法错误或是有不支持的选择符，则会报错

//querySelectorAll()
//它也是接受一个CSS选择符参数，但它会返回所有匹配节点的NodeList实例，没有匹配则返回空NodeList
//同样的，如果选择符有语法错误或是有不支持的选择符，它会报错

//matches()
//它只能由Element调用，参数是一个CSS选择符参数
//如果调用元素能够匹配CSS选择符参数，则返回true，否则返回false



//元素遍历：Element Traversal API
/*
这个API给DOM元素添加了5个属性
下面的属性作用和前面的lastChild等等相似，只是它们只能够匹配ElementNode
    childElementCount
    firstElementChild
    lastElementChild
    previousElementSibling
    nextElementSibling
*/



//专有扩展
//各家浏览器有很多未标准化的专有扩展，常用的两个如下

//children属性
//children属性是一个HTMLCollection，只包含元素的Element类型的子节点

//contains()方法
//DOM编程中经常要确定一个元素是不是另一个元素的后代
//contains()应该由被搜索元素调用，参数是要搜索的目标节点
//如果目标节点是被搜索元素的子节点，则返回true，否则返回false

//此外还有一些属性，innerText、outerText、scrollIntoViewIfNeeded(alignCenter)
