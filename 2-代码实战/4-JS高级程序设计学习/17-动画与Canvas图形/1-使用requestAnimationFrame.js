//requestAnimationFrame()方法是通知浏览器某些JS代码要执行动画了，这样浏览器可以在运行某些代码后进行适当的优化
//requestAnimationFrame()接收一个参数，即要在重绘屏幕前调用的函数，这个函数修改DOM以反映下一次重绘有什么变化
//传给requestAnimationFrame()的函数实际上可以接收一个数值，这个数值是DOMHighResTimeStamp实例，表示下次重绘的时间
//requestAnimationFrame()实际上把重绘任务安排在了未来一个时间点，并通过这个参数告诉了开发者



//requestAnimationFrame()也会返回一个ID，可以通过另一方法cancelAnimationFrame()来取消重绘任务
//示例：cancelAnimationFrame(cancelAnimationFrame(()=>{}))



//requestAnimationFrame()是跟排期任务有关的
//支持这个方法的浏览器都会暴露作为钩子的回调函数列表（所谓钩子，是浏览器执行下一次重绘之前的一个点）
//这个回调队列是一个可修改的函数列表，包含应该在重绘之前调用的函数
//每次调用requestAnimationFrame()都会在队列上推入一个回调函数，队列长度没有限制

//通过requestAnimationFrame() 递归 的向队列添加函数，可以保证每次重绘只调用一次函数
//这是非常好的节流工具（节流：字面意思，控制住运行流不要太大）

//如果遇到那种一直触发的事件，会进栈太多的函数，导致重复浪费性能
//此时，使用一个Boolean类型的flag来对进栈进行控制
//让栈内每时每刻最多只有一个函数存在

//在上面flag的基础上，还可以添加计时器来控制flag
//使得两个函数的入栈至少相隔一段时间
