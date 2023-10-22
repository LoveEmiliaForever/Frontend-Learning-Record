//下面的事件可能不被全部浏览器支持



//contextmenu事件
//用于表示何时该显示上下文菜单（右键菜单），允许开发者取消默认的上下文菜单并提供自定义菜单
//contextmenu是冒泡的，因此给document只读一个事件处理程序就可以在页面上使用了

//使用even.preventDefault()禁止contextmenu的默认行为
//基于event的clientX和clientY把自定义菜单放在合适位置
//通过visibility属性设置为visible而使得自定义菜单出现
//给document添加一个onclick事件处理器，以便在单击其它地方时，自定义菜单消失



//beforeunload事件
//在window上触发，给开发者提供阻止页面被卸载的机会（询问是否关闭页面）
//需要将event.returnValue设置为要显示的提示字符串，然后将其返回



//DOMContentLoaded事件
//在构建完DOM树后DOMContentLoaded将被触发
//这样可以让开发者在其它资源下载的同时指定事件处理程序，让用户能够更快和页面进行交互
//该事件的event对象只包含指向document的target



//hashchange事件
//用于在URL散列值变化时通知开发者
//onhashchange必须添加给window
//它的event包含oldURL和newURL两个属性，分别是变化前后的完整的URL
