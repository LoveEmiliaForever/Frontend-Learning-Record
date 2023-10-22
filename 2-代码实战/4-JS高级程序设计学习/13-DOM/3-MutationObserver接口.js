//MutationObserver可以在DOM被修改时异步执行回调
//用它可以观测整个文档或文档的一部分



//创建MutationObserver实例需要用构造函数，要传入执行函数作为参数
let observer = new MutationObserver(() => {console.log("Change happen!")});

//observe()方法
//新创建的MutationObserver实例不会关联DOM元素，需要使用observe()方法连接DOM元素
//这个方法接收两个参数（DOM元素，MutationObserverInit对象）
//MutationObserverInit对象是一个字典，有很多配置键值对（用来控制观察什么方面的变化）
observer.observe(document.body, {attributes:true});

//MutationRecord
//每个回调都会收到由MutationRecord实例组成的数组
//数组的MutationRecord是顺序入队的，代表着发生的变化
/*
MutationRecord实例的属性
    target      修改目标节点
    type        变化类型"attributes"、"characterData"、"childList"
    oldValue    被替代的值，如果不开启MutationObserverInit对应配置，则是null
    attributeName       被修改属性名字
    attributeNamespace  被修改属性名字（该属性使用了命名空间）
    addedNodes      添加的节点，返回的是NodeList
    removedNodes    删除的节点，返回的是NodeList
    previousSibling 变化节点的前一个同胞Node
    nextSibling     变化节点的后一个同胞Node
*/

//disconnect()方法
//要提前终止回调，可以调用disconnect()方法，它不仅会停止以后变化的回调，也会抛弃已经进入任务队列的回调
//如果想定义一个只运行一次的回调，在函数里加入disconnect()就行

//复用MutationObserver
//多次调用observe()方法可以让一个MutationObserver观察多个目标节点
//MutationRecord.target属性可以标识发生变化事件的目标节点
//disconnect()方法会停止观察所有目标

//重用MutationObserver
//disconnect()方法不会结束MutationObserver的生命
//可以使用observe()再将它连接到其它DOM元素，以重用MutationObserver



//MutationObserverInit与观察范围
//MutationObserverInit对象用于控制对目标节点的观察范围
/*
MutationObserverInit的属性如下
    subtree     是否观察目标节点子树（后代）
    attributes  是否观察目标节点属性变化
    attributeFilter     字符串数组，要观察的属性
    attributeOldValue   是否记录变化之前的属性值
    characterData       是否观察字符数据变化
    characterDataOldValue   是否记录变化之前的字符数据
    childList   是否观察目标子节点的变化
*/

//MutationObserver可以观察节点属性的添加、移除和修改

//MutationObserver可以观察文本节点中字符的添加、删除和修改

//MutationObserver可以观察子节点的添加和移除

//MutationObserver还可以限定观察范围为一个元素及其子节点
//即使一个元素被移除出了子树，它的变化还是能够触发回调发生



//异步回调与记录队列
//MutationObserver接口是出于性能考虑设计的，核心是异步回调和记录队列模型
//每次的变化信息会保存在MutationRecord实例中，再被添加到记录队列
//这个队列对每个MutationObserver实例是唯一的，是所有DOM变化事件的有序列表

//takeRecords()方法
//MutationObserver.takeRecords()可以清空记录队列，取出返回其中所有MutationRecord实例



//性能、内存与垃圾回收

//MutationObserver的引用
//MutationObserver实例和目标节点之间的引用关系是非对称的
//MutationObserver对目标节点的引用是 弱引用
//目标节点对MutationObserver的引用是 强引用

//MutationRecord的引用
//记录队列的每个MutationRecord实例至少包含对已有DOM节点的一个引用
//如果需要尽快释放内存，应该从MutationRecord中抽取有用信息后抛弃它
