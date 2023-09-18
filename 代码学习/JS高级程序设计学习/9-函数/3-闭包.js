//闭包指的是：引用了另一个函数作用域中变量的函数（通常在嵌套函数中实现）
function out(){
    let a = 1;//out函数作用域的变量
    let b = 2;
    function inner(){
        console.log(a+b);//在inner中引用了out的变量
    }
    return inner();
}
out();//3



//调用函数时，会为它创建一个执行上下文、一个作用域链
//作用域链一直向外串起了所有包含函数的活动对象，直至全局执行上下文
//函数执行时，每个执行上下文都有一个包含其中变量的对象
//全局上下文的是变量对象，函数局部上下文的是活动对象
//作用域链其实是一个包含指针的列表，指针分别指向各个变量对象（参考书P311图）
//函数执行完毕后，局部活动对象被销毁



//内部函数会把外部函数的活动对象也包含在它的作用域链中（这样就可以访问外部函数的变量）
//这样外部函数的活动对象并不一定在外部函数结束时销毁，要等到内部函数也结束时才会销毁（因为内部函数引用了外部函数的活动对象）
//由于闭包会保留很多作用域，因此更占用内存



//this默认指向全局对象，匿名函数的this指向全局对象
//箭头函数的this指向定义了它的上下文
//作为对象方法被调用，则this指向对象
//内部函数不能够访问外部函数的this和arguments，不过可以通过中间变量访问

function A(){
    console.log(this);
    function B(){
        console.log(this);
    }
    return B();
}
A.call({name:"A"});
