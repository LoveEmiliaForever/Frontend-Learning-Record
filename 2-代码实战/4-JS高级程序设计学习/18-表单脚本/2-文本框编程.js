//有两者表示文本框的方式，<input type="text">用于单行，<textarea>用于多行
//它们都会在value属性中保存自己的内容
//处理文本框值（修改或读取）不应该使用DOM方法，应该用value属性



//选择文本
//两个文本框都支持select()方法，它可以选中文本框的全部文本（并且自动将焦点设置到文本框）
//在文本框获得焦点时自动选中全部文本是非常有用的一个功能，很方便

//select事件
//当选中文本框中文本时会触发select事件，调用select()方法也会触发select事件

//取得选中文本
//文本框有两个属性：selectionStart和selectionEnd，表示选中文本的起点和终点
//有了上述两个属性，可以结合substring()方法获得被选中的文本

//部分选中文本
//setSelectionRange()方法可以在所有文本框中使用
//它接受两个参数，分别是文本开始的索引和结束的索引
//如果想看到选择，需要给文本框设置焦点（使用方法之前或之后都可以）



//输入过滤（表单验证）
//可以综合使用JS的功能来完成想要的表单验证功能

//屏蔽字符
//使用输入事件的textInput事件可以禁止字符的输入
//只需要在检测到特定字符时禁止事件的默认行为即可

//处理剪贴板
//HTML5添加了剪贴板事件
/*
    beforecopy
    copy
    beforecut
    cut
    beforepaste
    paste
*/
//剪贴板的数据可以通过window或event对象上的clipboardData对象获取（只能在剪贴板事件期间访问）
//clipboardData有3个方法：getData()、setData()、clearData()
//getData()接收一个参数，该参数是要检索的数据的格式，期待一个MIME类型（"text"也可以，它等价于"text/plain"）
//setData()接收两个参数，第一个参数是数据类型（期待MIME类型，不认可"text"），第二个是文本



//增强功能
//例如输入手机号码时的自动隔开就可以用JS实现



//HTML5提供的约束验证API
//必填项 required
//type等于email和url
//数值范围，main、max、step，stepUp()方法和stepDown()方法
//输入模式：给这个模式设置一个正则表达式，匹配的文本才能传送

//checkValidity()可以检测表单中任意字段是否有效
//字段的validity属性会返回一个对象（全是布尔值），告诉为什么无效或有效
/*
    valid   如果其它属性都是false则返回true
    见于书P596
*/

//禁用验证
//给字段元素添加 novalidate 属性可以不进行验证
//也可以通过JS的noValidate来检索或设置，它是一个布尔值
//如果是多个提交按钮，可以给特定提交按钮添加formnovalidate属性，指定通过该按钮无须验证即可提交表单
