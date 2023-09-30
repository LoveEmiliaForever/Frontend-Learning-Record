//JS既可以用于进行表单验证，也可以增强表单功能



//HTMLFormElement类型是<form>元素的表示，它有以下常用属性方法
/*
    elements    所有控件的HTMLCollection
    length      控件的数量
    name        表单的名字，等价于HTML的name属性
    reset()     重置表单
    submit()    提交表单
*/
//可以使用document.forms来获取页面上所有的表单元素



//以手动的方式提交表单：没有提交按钮的话就算按Enter也没用
//在提交之前会触发submit事件，可以此时禁止submit的默认行为然后进行一些操作
//如果是JS的submit()方法，则即使不存在提交按钮也可以提交（这样不会触发submit事件）
//有时会有多次提交行为，这是不好的，应该在submit事件后禁用提交按钮，或抛弃之后的表单提交

//和submit一样，点击重置按钮会触发reset事件，通过它可以进行一些操作
//和submit不同的是，通过JS的reset()方法触发重置，会触发reset事件



//表单字段
//所有表单元素都是表单的elements属性的一个值
//elements中的顺序和表单元素在HTML中出现的顺序一致，可以通过索引和name来访问
//如果多个表单控件使用了同一个name属性，则返回一个HTMLCollection

//除<fieldset>外，表单字段都有如下常用属性
/*
    disabled    是否禁用
    form        指向所属表单（只读）
    name        字段名字
    readOnly    是否只读
    type        字段类型
    value       要返回给服务器值
*/
//对于一些属性，type的值如下
/*
    单选列表                    "select-one"
    多选列表                    "select-multiple"
    <button>                    "submit"
    <button type="button">      "button"
    <button type="reset">       "reset"
    <button type="submit">      "submit"
*/

//每个表单字段都有两个公共方法：focus()和blur()
//HTML5 还有一个autofocus属性，把它添加给表单字段元素，元素会自动获得焦点
//autofocus可以作为属性访问，是一个布尔值，他和focus()不应该同时存在

//表单字段还有3个公共事件
/*
    blur    失去焦点
    focus   获得焦点
    change  在<select>中改变选项时触发，在<input>和<textarea>中value改变且失去焦点时触发
*/
