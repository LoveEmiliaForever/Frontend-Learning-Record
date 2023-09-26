//设备事件可以确定用户使用设备的方式

//orientationchange事件
//当用户旋转设备时会触发orientationchange事件
//window.orientation属性会发生变化，0表示竖直，90表示左转水平，-90表示右转水平
//所有IOS设备都支持这个

//deviceorientation事件
//如果可以获取设备的加速计信息，且数据发生了变化，这个事件就会在window上触发
//此事件只反映设备在空间中的朝向，不涉及移动相关的信息
//X轴：和手机长边垂直   Y轴：和手机短边垂直    Z轴：垂直手机平面
/*
event中会包含下面的属性
    alpha       0~360       围绕Z轴旋转时Y轴的度数（左右转）
    beta        -180~180    围绕X轴旋转时Z轴的度数（前后转）
    gamma       -90~90      围绕Y轴旋转时Z轴的度数（扭转）
    absolute    布尔值       表示是否返回绝对值
    compassCalibrated       表示指南针是否准确的布尔值
*/

//devicemotion事件
//这个事件用于提示设备实际上在移动
/*
    acceleration    x、y、z轴的加速信息（不包括重力影响）
    accelerationIncludingGravity    x、y、z轴的加速信息（包括重力影响）
    interval        获取信息的间隔时间
    rotationRate    对象，包含alpha、beta、gamma 表示设备朝向
*/



//触摸和手势事件

//当手指放在屏幕上、在屏幕上滑动 或 从屏幕移开时，触摸事件将被触发
/*
    touchstart  手指放在屏幕上时触发
    touchmove   手指滑动时连续触发，调用preventDefault()可以禁止滚动
    touchend    手指从屏幕上移开时触发
    touchcancel 系统停止跟踪触摸时触发
*/

//触摸事件的event包含了鼠标事件的公共属性
/*
下面3个属性用于追踪触点
    touches         Touch对象的数组，表示屏幕上的每个触点
    targetTouches   Touch对象的数组，表示特定于事件目标的触点
    changedTouches  Touch对象的数组，表示自上次用户动作之后变化的触点
每个Touch对象都包含下面的属性
    clientX
    clientY
    pageX
    pageY
    screenX
    screenY
    identifier  触点ID
    target      触摸事件的事件目标
*/

//手指点触屏幕的元素时，会依次发生下面的事件
/*
    touchstart
    mouseover
    mousemove 1次
    mousedown
    mouseup
    click
    touchend
*/



//手势事件
//手势就是平时的放大缩小、旋转时两个手指在屏幕上做出的动作
/*
    gesturestart    手势开始
    gesturechange   手势变化（相对位置变化）
    gestureend      手势结束
*/
//在一个元素上设置事件处理程序，意味着两个手指必须都在元素边界以内才能触发手势事件

//每个手势事件的event对象都包含所有标准的鼠标事件属性
//新增的两个event对象是rotation和scale
//rotation表示手指变化旋转的度数，负值表示逆时针旋转，正值表示顺时针旋转
//scale表示两指距离变化的程度，开始时为1，根据放大缩小而相应变化
