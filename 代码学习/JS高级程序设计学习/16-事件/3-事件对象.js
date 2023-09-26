//DOM发生事件时，相关信息都会被收集存储在event对象内
//event对象是传给事件处理函数的唯一参数



/*
不同的事件生成的event对象包含内容可能不同，但下面的属性方法是绝对包含的（都是只读的）
    bubbles                     布尔值  表示事件是否冒泡
    cancelable                  布尔值  是否可以取消事件的默认行为
    currentTarget               元素    当前事件处理程序所在的元素
    defaultPrevented            布尔值  true表示已经调用了preventDefault()
    detail                      整数    事件其它相关信息
    eventPhase                  整数    1代表捕获阶段，2代表到达目标，3代表冒泡阶段
    preventDefault()            函数    取消事件默认行为
    stopImmediatePropagation()  函数    取消后续事件捕获或事件冒泡
    stopPropagation()           函数    取消后续事件捕获或事件冒泡
    target                      元素    事件目标，实际触发事件的元素
    trusted                     布尔值  true表示事件是浏览器生成的，false表示事件由JS创建
    type                        字符串  被触发的事件类型
    View                                指向事件所发生的window对象
*/

//在事件处理函数内部，this始终等于currentTarget
//利用冒泡，可以让子元素的事件处理在父元素上进行（这样就不用给子元素赋值事件处理函数了）

//preventDefault()方法可以阻止事件的默认动作（例如点击链接后不进行跳转）
//stopPropagation()可以阻止事件流在DOM结果中传播（子元素的事件不会触发父元素的事件处理函数）



//IE也有event对象
/*
    cancelBubble    设置为true可以取消冒泡
    returnValue     设置为false可以取消事件默认行为
    srcElement      事件目标（和target相同）
    type            触发的事件类型
*/
