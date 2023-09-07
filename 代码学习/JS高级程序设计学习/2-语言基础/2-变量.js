//JS的变量是松散类型的，可以保存任何类型数据
//有三个关键字声明变量 var、const、let


//var关键字
var a;//不初始化，则为undefined
console.log(`a = ${a}`);

//可以定义多个变量
var a = 1,
    b = 2,
    c = 3;
//可以重复声明一个变量
var a = 4;
console.log(window.a);//var变量在全局作用域下声明的变量会变成window对象的属性

//var声明的变量作用域仅仅只在其所属函数内部
function eg(){
    //在函数内部给未声明变量赋值将会声明一个全局变量
    rng = "rng";
    function kk(){
        var gg ="gg";
        console.log(gg);
    }
    kk();
    //如果在使用未声明变量后，该变量有var声明则有声明提升，变量为undefined
    //如果之后没有var，则没有声明提升，则报错
    console.log(`声明提升 gg = ${gg}`);
    var gg = "kk";
}
eg();
console.log(`全局变量 rng = ${rng}`);


//let关键字
if (true){
    let kk = 1;
    console.log(kk);
}
console.log(kk);//let声明的变量作用域是块

var aa = 0;
let aa = 1;//let变量不能重复声明
let aa = 2;//即使混用声明类型也不行，因为变量是一样的，只是运行方式不同

//let没有 声明提升、不会变成window属性、

//let变量会给每一次循环创建一个新变量，而var不会
for(var i = 0; i < 5; ++i ){
    setTimeout(()=>{console.log(i)}, 0);
}
//结果为5,5,5,5,5
//在循环结束后超时逻辑引用的都是同一个变量

for(let i = 0; i < 5; ++i ){
    setTimeout(()=>{console.log(i)}, 0);
}
//结果为0,1,2,3,4
//实际上有5个变量，每个超时逻辑引用的变量不一样


//const关键字
//它和let基本相似，不同的是它必须声明时就赋值且不可再更改
//一般将它用在引用某物上面
const age = 36;
for (const key in {a:1, b:2}){
    console.log(key);
}


//最佳实践
//不使用var而仅仅使用let与const
//const优先，let次之
