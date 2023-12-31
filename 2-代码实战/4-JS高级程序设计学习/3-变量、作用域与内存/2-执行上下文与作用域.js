//变量或函数的上下文决定了它们可以访问的资源以及行为
//每个上下文都有一个关联的 变量对象（上下文中定义的属性和方法在它上面） ，无法通过代码访问但后台会使用它
//全局上下文是最外层的上下文，视宿主环境而不同（如浏览器的全局上下文是window对象）
//上下文在所有代码执行完毕时会被销毁，包括其上变量、函数

//上下文代码执行时会创建 变量对象 的一个作用域链
//它决定了访问变量和函数的顺序，当前变量对象始终位于最前端
//函数的 变量对象 是其活动对象，且它最初只有一个定义变量arguments
//代码执行时的标识符解析是沿作用域链逐级搜索标识符名称完成的

var color = "blue";
function changeColor(){
    let anotherColor = "red";
    function swapColors(){
        let tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
    }
}
changeColor();
/*
后端
window  //全局上下文，变量对象为window
    |
    |-color
    |
    |-changeColor()  //函数changeColor上下文，变量对象为其活动对象
        |
        |-anotherColor
        |
        |-swapColors()  //函数swapColors上下文
            |
            |-tempColor
前端

前端上下文可以访问后端上下文资源，反之不行
函数参数被认为是当前上下文的变量
*/



//某些语句会在作用域链前端临时添加一个上下文，代码运行完后删除

//with语句
//会向作用域链前端添加指定的对象
//catch语句
//会创建一个新的变量对象，这个变量对象包含要抛出的错误对象的声明



//变量的声明

//var变量会被自动添加到最接近的上下文之中
//如果未经声明就初始化了变量，则它被添加到全局上下文
//var声明会被拿到函数或全局作用域的顶部，这个现象叫 提升

//let变量作用域是块级的
//严格来说，let也有提升，但是实际上不能再声明前使用

//const变量作用域块级
//const变量必须声明的同时初始化，且它不可更改

//标识符的查找开始于作用域链的前端
//搜索过程也涉及到了每个对象的原型链
//访问局部变量的速度快于全局变量，不用切换作用域
