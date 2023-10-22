//用户界面事件或UI事件不一定跟用户操作有关



/*
    load    当页面加载完成、图片加载完成、对象加载完成后触发
    unload  当window上页面完全卸载后触发
    abort   <object>的对应对象被提前终止下载时触发
    error   JS报错、图片无法加载、对象无法加载时触发
    select  在文本框（<input>或texture）上当用户选择字符时触发
    resize  window或窗格被缩放时触发
    scroll  滚动元素时触发
*/

//load事件
//在window对象上，load事件会在整个页面（包括其它资源）加载完成后触发
//在<img>的图片加载完成也会触发
//<script>的JS文件加载完成也会触发

//unload事件
//在文档卸载完成后触发，一般是从一个页面到另一个页面时触发，常用于清理引用避免内存泄露
//这个事件的event只有target属性（指向document）

//resize事件
//浏览器被缩放时触发，这个事件在window上触发
//不同浏览器触发resize事件的时刻不同，大部分是当缩放超过1像素时触发resize事件，随着缩放窗口而不断触发
//浏览器窗口最大化和最小化也会触发resize事件

//scroll事件
//scroll事件发生在window上，反映的是页面中相应元素的变化
//类似于resize，scroll也会随着文档滚动而重复触发



//焦点事件
//焦点事件在页面元素获得或失去焦点时触发
//这些事件可以与document.hasFocus()或document.activeElement 一起使用

/*
    blur        元素失去焦点时触发，这个事件不冒泡
    focus       元素获得焦点时触发，这个事件不冒泡
    focusin     当元素获得焦点时触发，可以冒泡
    focusout    当元素失去焦点时触发，通用事件流
*/
