//迭代器模式
//可迭代对象：实现了正式的Iterable接口，可以通过迭代器Iterator消费（集合类对象，有无歧义的遍历顺序）
//迭代器是按需创建的一次性对象，每个迭代器关联一个可迭代对象，迭代器会暴露可迭代对象的API

//Iterable接口：具备迭代自我识别能力，具备创建实现Iterator接口的对象的能力
//具体操作：暴露一个属性作为默认迭代器，这个属性使用Symbol.iterator作键，它引用一个迭代器工厂函数，且函数返回一个新迭代器
var str = "123";
console.log(str[Symbol.iterator]);//检查是否存在默认迭代器属性可以暴露这个工厂函数
//实现可迭代协议的所有类型都有一些语言特性（如for of能够使用迭代器）
//同时，Iterable接口可以继承

//迭代器API使用next()方法遍历数据
//next()返回一个IteratorResult对象（包括done属性和value属性）
//value是迭代的值或undefined（视done的值而定，done:true意为耗尽、不可迭代）
//不同迭代器相互独立，可迭代对象在迭代途中变化会引起迭代器的变化
//迭代器维护着一个指向可迭代对象的引用，因此不会被垃圾回收

//自定义迭代器
//任何实现Iterator接口的对象都可作为迭代器使用
class Counter{
    constructor (limit){
        this.limit = limit;
    }
    [Symbol.iterator](){
        let count = 1,
            limit = this.limit;  //把计数器变量放闭包里面
        return {  //通过闭包返回迭代器，这样可以生成多个独立的迭代器
                  //这个被返回去的对象就是迭代器，它有next()方法
            next(){
                if (count <= limit){
                    return {done: false, value: count++};
                }else{
                    return {done:true, value:undefined};
                }
            },
            return(){
                console.log("Exiting early");
                return {done:true};
            }
            //提前终止迭代器
            //可选的return()方法用于提取关闭迭代器时调用（不是函数的return返回，而是return()方法）
            //该方法返回一个有效的IteratorResult对象{done:true}
        }
    }
}
let counter = new Counter(3);
for (let i of counter){console.log(i);break;}

//如果迭代到一般退出，迭代器没关闭，可以调用迭代器对象继续迭代
//并非所有迭代器都可关闭，增加return()方法也不能让它变成可关闭，即使如此在应该调用return()方法时，依然会调用
