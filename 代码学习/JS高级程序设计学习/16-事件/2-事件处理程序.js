//为了响应事件而调用的函数被称为 事件处理函数（事件监听器） 事件处理程序的名字以on开头



//HTML事件处理程序
//可以使用事件处理程序的名字，以HTML属性的形式来指定处理函数
//<input type="button" value="click me" onclick="console.log(even.type)"/>
//这些函数拥有一个event对象的输入
//这个函数，this值相对于事件的目标元素
//这个函数中，document和元素自身的成员都可以被当成局部变量访问
//如果目标元素还是一个表单输入框，则作用域链中还包含表单元素
/*
<form method="post">
    <input type="text" name="username" value="">
    <!--可以直接使用username.value来访问表单元素-->
    <input type="button" value="Echo Username" onclick="console.log(username.value)">
</form>
*/



//DOM0事件处理程序
//在JS中指定事件处理程序可以把一个函数赋值给元素的事件处理程序属性
//每个元素都有通常小写的事件处理程序属性，例如 btn.onclick = function(){}
//由于要先运行JS代码给元素赋值，所以如果代码在元素后面出现，可能造成点击后没有反应
//使用DOM0事件处理程序时，所赋值函数等于元素的方法，函数的this等于元素
//通过将事件处理程序属性赋值为null，可以移除添加的处理程序



//DOM2事件处理程序
//DOM2 Events为事件处理程序的赋值和移除定义了两个方法 addEventListener()和removeEventListener()
//它们接收3个参数：事件名（如"click"）、事件处理函数、一个布尔值（true表示捕获阶段调用程序，默认值false则是在冒泡阶段调用）
//这个事件处理程序同样被附加到元素的作用域中运行，这种方法的优点是可以绑定多个处理函数（按照添加顺序运行）

//使用addEventListener()添加的函数只能由removeEventListener()传入相同的参数来取消
//这意味着，匿名函数是无法被取消的（因为匿名函数不可能一样，除非是表达式，有对匿名函数的引用）



//IE事件处理程序
//IE浏览器的处理函数添加方法，attachEvent()和detachEvent()
//它们接收两个参数：事件处理程序名字（如"onclick"），事件处理函数
//IE只有冒泡，函数的this是window对象，多个事件的触发顺序和DOM2相反
