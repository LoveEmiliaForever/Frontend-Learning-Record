//JS对象简谱，简称JSON，是JS的严格子集，利用JS的几种模式表示结构化数据
//要把JSON当成一种数据格式，而不是编程语言



//JSON支持3种类型的值
/*
    简单值：字符串、数值、布尔值、null可以使用，undefined不能使用（会被忽略或删除）
    对象：有序键值对，可以是任何值
    数组：可以是任何值
*/

//JSON字符串必须使用"双引号"
//JSON的对象属性名必须是字符串



//JSON可以被直接解析为可用的JS对象，这样非常方便
//早期的JSON解析器是JS的eval()函数，但这个函数有风险，可能会运行恶意代码
//ES5增加了全局JSON对象，里面有stringify()和parse()两个方法，分别是序列化和反序列化

//默认情况下，JSON.stringify()会输出不包含空格或缩进的JSON字符串
//JSON字符串可直接传给JSON.parse()，然后得到相应的JS值



//序列化选项
//JSON.stringify()还可以接收两个参数：过滤器、字符串缩进选项

//过滤器：数组或者函数
//如果过滤器是数组
//则JSON.stringify()返回的结果只包含该数组中列出的 对象属性
//如果过滤器是函数（称为替代函数）
//函数接收key和value两个参数，根据函数的内部操作可以完成一些事情

//字符串缩进选项
//JSON.stringify()的第三个参数控制缩进和空格
//给它传入数值，则代表缩进的空格数（10<=x）
//给它传入字符串，则会以字符串作为缩进（10<=x）

//toJSON()方法
//和toString()方法一样，toJSON()方法用于定义对象的序列化行为



//反序列化
//JSON.parse()也可以接受一个额外的参数
//如果是函数的话，它的行为和前面过滤器函数一样（称为还原函数）
