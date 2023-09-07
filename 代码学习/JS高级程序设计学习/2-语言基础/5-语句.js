if (true){
    console.log("true");
} else if (false){
    console.log("false");
} else {
    console.log("???");
}


do{
    console.log("kkk");
}while (false);


while (false){
    console.log("fasle");
}


for (let i = 0; i < 10; i++){
    console.log(i);
}


//for-in 用于枚举 对象 的非符号键属性（不是以Symbol()为引用的属性）
//由于JS中对象的属性是无序的，故而不保证输出顺序
for (const propName in window){
    console.log(propName);
}
//for-of用于遍历 可迭代 对象元素（例如列表）
//它会按照对象的next()方法产生值的顺序迭代元素
for (const element of [0,1,2]){
    console.log(element);
}


//标签语句和break、continue
start: for (const element of [0,1,2]){
    console.log(element);
    break start;//打破start标签所在的循环（即跳到start标签所在循环的更外一层循环）
    continue start;//也是continue标签start所在的循环
}


//with语句
//把代码作用域设置为特定对象
with(location){
    var a = search.substring(1);
    //等效于 var a = location.search.substring(1);
}
//不应该使用with语句，影响性能且难以维护


//switch语句
//它的条件可以是任何数据类型，不单单局限于字符串或数字
switch (i){
    case 25:
        break;
    case "35":
        break;
    case String:
        break;
    default:
        console.log("default");
}
