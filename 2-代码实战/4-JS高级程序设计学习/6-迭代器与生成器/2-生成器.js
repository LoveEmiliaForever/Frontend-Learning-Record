//生成器能够更方便的做出可迭代效果

//生成器的形式是一个函数，并在function后面加个*（空格不影响，箭头函数不能定义生成器）
//调用生成器函数会产生一个生成器对象，其实现了Iterator接口，有next()方法
//next()的返回和迭代器一样，但如果函数体为空，则到达done:true状态

//生成器函数只会在初次调用next()方法后执行
//由于生成器实现了Iterable接口，他们的默认迭代器是自引用（自己）
function* generator(){}
var g = generator();
console.log(g === g[Symbol.iterator]());//true

//yield关键字可以让生成器停止和开始执行
//生成器函数遇到yield停止，调用next()再恢复执行
//yield生成的值会出现在next()的value里，通过它退出生成器是done:false
//如果是通过return语句退出，则done:true
function* gnn(){
    yield "A";
    yield "B";
    return;
}
var g = gnn();
console.log(g.next());//{ value: 'A', done: false }
console.log(g.next());//{ value: 'B', done: false }
console.log(g.next());//{ value: undefined, done: true }
//不同的生成器之间相互独立，yield关键字只能用在生成器函数的范围内（即使嵌套也不行）

//yield还可以作为函数的中间参数使用：参数值是传递给next()方法的第一个值
function* gkk(){
    console.log(yield);//这里next()给yield传入了first，但被忽略
    console.log(yield);//这里yield接受了next()传入的second，它可以被作为一个包含second的变量使用
    console.log(yield "Out");//这里定义了输出，也接收next()的传入
}
var g = gkk();
console.log(g.next("first"));//第一次调用next()传入的值不会被使用，因为这是为了开始生成器而执行的方法
console.log(g.next("second"));//{ value: undefined, done: false }，没有定义yield的输出，因此是undefined
console.log(g.next("third"));//{ value: 'Out', done: false }，yield可以同时用于输入和输出
console.log(g.next());

//yield不止可用一次，把生成器当成可迭代对象看待
function* gcc(n){
    while(n--){
        yield n;
    }
}
console.log(Array.from(gcc(3)));//[2,1,0]

//yield* 让它能够迭代一个可迭代对象（*两侧空格不影响）
function* gbb(){
    yield* [1,2,3];
}
console.log(Array.from(gbb()));//[1,2,3]
//把可迭代对象序列化为一系列可单独产出的值，等同于把yield放进循环
//yield* 的值是关联迭代器返回done:true时value的值
//yield* 还可以实现递归操作
function* gaa(n){
    if(n>0){
        yield* gaa(n-1);
        yield n-1;
    }
}
console.log(Array.from(gaa(2)));//[0,1]

//由于生成器实现了Iterable接口，且被调用之后产生迭代器，所以可用作为默认迭代器
class A{
    *[Symbol.iterator](){
        yield "A";
    }
}

//关闭生成器
//return()方法和throw()方法都可用强制关闭生成器（强制，和迭代器不一样）
//所有生成器对象都有return()和throw()
function* goo(){}
console.log(goo().return("Last"));//{ value: 'Last', done: true }
//传递给return()的值，就是生成器最后返回的value
//throw()方法会在暂停时将一个错误注入生成器对象
//错误未处理，则生成器关闭，如果错误被生成器内部处理了，则生成器不关闭
