//鼠标事件是Web开发中最常用的一组事件

/*
    click       单击鼠标左键或按回车时触发
    dblclick    双击鼠标左键触发
    mousedown   按下任意鼠标键时触发
    mouseup     释放鼠标键时触发
    mouseenter  光标由元素外部到元素内部触发，不冒泡
    mouseleave  光标由元素内部到元素外部触发，不冒泡
    mousemove   光标在元素上移动时，反复触发
    mouseout    光标由一个元素到另一个元素时触发
    mouseover   光标由元素外部到元素内部触发
*/

//由于事件之间存在关系，因此取消鼠标事件的默认行为会影响到其它事件
/*
例如下面的4个事件始终按照如下顺序触发
    mousedown
    mouseup
    click
    mousedown
    mouseup
    click
    dblclick
*/

//鼠标事件还有一个子类 滚轮事件
//mousewheel事件会在用户使用鼠标滚轮时触发，包括前后滚动
//mousewheel事件的event对象包含鼠标事件的所有标准信息，还有一个wheelDelta的新属性
//滚轮向前滚动时，wheelDelta是+120，向后滚动时，wheelDelta是-120

//客户端坐标
//event对象的clientX和clientY属性表示事件发生时，光标在视口的坐标
//视口是不包含浏览器边框（导航栏，菜单这些的），不包含滚动条的区域

//页面坐标
//event对象的pageX和pageY可以获取光标在页面上的坐标
//这两个属性是考虑了滚动的，坐标是相对于整个页面而言

//屏幕坐标
//通过event的screenX和screenY可以获取光标在屏幕上的坐标

//修饰键
//键盘的修饰键（Shift、Ctrl、Alt、Meta）可以改变鼠标的行为
//event包含了四个指示它们状态的属性：shiftKey、ctrlKey、altKey、metaKey
//它们会在对应修饰键被按下时包含true

//相关元素
//对mouseover和mouseout而言，还涉及了与事件相关的其它元素
//对于mouseover来说，主要目标是获得光标的元素，相关元素是失去光标的元素
//对于mouseout来说，主要目标是失去光标的元素，相关元素是获得光标的元素
//event的relatedTarget属性提供了相关元素的信息

//鼠标按键
//对mousedown和mouseup来说，event存在一个button属性
//0表示鼠标主键，1表示鼠标中键，2表示鼠标副键

//额外信息
//detail包含了一个数值，表示在当前位置发生了多少次单击
//如果鼠标移动了，则detail归0

//触摸屏设备
/*
    不支持dblclick事件
    单指点击可点击元素，触发mousemove事件（如果点击后没变化，则继续触发mousedown、mouseup、click事件）
    mousemove会触发mouseover和mouseout事件
    两根手指点触并滑动屏幕会触发mousewheel和scroll事件
*/
