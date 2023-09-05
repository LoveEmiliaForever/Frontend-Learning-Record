//API抽象了复杂的代码，并提供一些简单的接口规则直接使用

//它们基于对象工作，API 使用一个或多个 JavaScript objects 在你的代码中进行交互
//由另一个函数作为参数的函数称为 (callback function "回调函数")
//涉及同步操作的 API 被设计为使用 callback functions“回调函数”，或更现代的 Promises 系统

//一些 Web API 不包含事件，但有些包含一些事件
//允许我们运行函数的处理程序属性通常在单独的“Event handlers”(事件处理程序) 部分的参考资料中列出

//一些更现代的 WebAPI 将只能在通过 HTTPS 提供的页面上工作
//一旦调用 WebAPI 请求，用户就可以在你的代码中启用一些 WebAPI 请求权限