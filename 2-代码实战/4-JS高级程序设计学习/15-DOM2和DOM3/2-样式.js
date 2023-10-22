//HTML中有3种定义样式的方式（外部样式表、文档样式表、元素样式），DOM2 Style给这3种机制都提供了API



//存取元素样式
//任何支持style属性的HTML元素在JS上都有一个style属性，这个属性是CSSStyleDeclaration类型的实例
//CSS语言中样式的属性名都是连字符表示，在JS中它们被换成了驼峰大小写形式（font-family => style.fontFamily）
//不过CSS中的float属性在JS中的表示是style.cssFloat

//DOM2 Style给style对象定义了一些属性和方法，并支持修改
/*
    cssText     style属性中的CSS代码
    length      应用给元素的CSS属性数量
    parentRule  表示CSS信息的CSSRule对象
    getPropertyPriority(propertyName)   如果propertyName使用了!important则返回"important"，否则返回空字符串
    getPropertyValue(propertyName)      返回propertyName的字符串值
    item(index) 返回index索引的CSS属性名
    removeProperty(propertyName)        删除propertyName
    setProperty(propertyName, value, priority)  设置CSS属性，priority是"important"或""
*/
//在写模式下，给cssText赋值会重新整个style属性

//DOM2 Style还给document.defaultView增加了getComputedStyle()方法
//它接受两个参数（要取得计算样式的元素，伪元素字符串），返回一个CSSStyleDeclaration对象（包含元素的计算样式）
//各浏览器的返回格式不一定相同，且返回值是只读的



//操作样式表
//CSSStyleSheet类型表示CSS样式表，包括yong<link>和<style>定义的样式表
//CSSStyleSheet实例是只读对象（除了disabled属性可以修改）
/*
下面是CSSStyleSheet实例的方法属性
    disabled    布尔值，表示样式表是否被禁用（可修改）
    href        返回样式表的URL或者null
    media       样式表支持的媒体类型集合，如果是所有媒体，则返回空列表
    ownerNode   指向拥有当前样式表的节点，<link>或<style>
    parentStyleSheet    如果当前样式表提供@import被包含在另一个样式表中，这个属性指向父样式表
    title       ownerNode的title属性
    type        字符串，表示样式表的类型，对CSS来说就是"text/css"
    cssRules    当前样式表包含的样式规则的集合
    ownerRule   指向导入规则，或者null
    deleteRule(index)   删除cssRules指定位置的规则
    insertRule(rule, index) 在cssRules指定的位置中插入规则
*/
//通过<link>或<style>元素可以直接获取CSSStyleSheet对象，通过它们的sheet属性

//CSS规则
//CSSRule类型表示样式表中的一项规则（选择器{很多的声明}），CSSStyleRule类型继承自它
/*
CSSStyleRule类型的属性
    cssText     返回整条规则的文本（它是只读的，和style.cssText不同）
    parentRule  指向包含规则，或是null（如被@media包含，返回他）
    parentStyleSheet    指向包含当前规则的样式表
    selectorText        返回规则的选择符文本
    style   返回CSSStyleDeclaration对象
    type    数值常量，表示规则类型。对于样式规则，它始终是1
*/

//创建、删除规则
//insertRule()方法可以向样式表添加新规则，它接受两个参数（规则的文本，位置索引）
//deleteRule()方法，它可以删除样式表的规则，它接受一个位置索引参数



//元素尺寸
//涉及大量图示，阅读  2-样式-元素尺寸.md
