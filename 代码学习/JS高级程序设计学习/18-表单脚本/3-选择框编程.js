//选择框是使用<select>和<option>元素创建的

//<select>元素的属性和方法
/*
    add(newOption, relOption)   在relOption之前添加新的<option>
    multiple        是否允许多选
    options         所有<option>的HTMLCollection
    remove(index)   移除给定位置的选项
    selectedIndex   被选中项的索引值
    size            选择框中可见的行数
*/
//选择框的value值：没有选择（空字符串） < 选中项无value（使用文本内容） < 选中项（使用value内容） < 多个选中项（选取第一个选中项）

//<option>元素的属性
/*
    index
    label
    selected    是否被选中了
    text        选项的文本
    value
*/



//添加选项
//可以使用DOM方法添加选项
//也可以使用Option构造函数创建新选项后将其加入<select>，Option(text, value)
//或是使用<select>的add()方法



//移除选项
//可以将选项设置为等于null
//使用document.removeChild()或<select>.remove()
