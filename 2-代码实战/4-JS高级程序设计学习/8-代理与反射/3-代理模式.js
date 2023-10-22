//跟踪属性访问
//通过get、set和has可以知道对象属性什么时候被访问、被查询
var user = {name:"Jake"};
var proxy = new Proxy(user, {
    get(target, property, receiver){
        console.log("Getting "+property);
        return Reflect.get(...arguments);
    },
    set(target, property, value, receiver){
        console.log("Setting "+property+"="+value);
        return Reflect.set(...arguments);
    }
});
proxy.name;  //Getting name
proxy.age = 27;  //Setting age=27



//隐藏属性和属性验证
//代理的内部实现对外部代码是不可见的，因此可以隐藏目标对象的特定属性
//可以通过对所赋的值检测，以此决定是否赋值
var user = {name:"Jake", age:20};
var proxy = new Proxy(user, {
    //选择性隐藏某些属性
    get(target, property){
        if(property == "name"){
            console.log("This Parameter Can't be Visit");
            return undefined;
        }else{
            return Reflect.get(...arguments);
        }
    },
    //对赋值有要求，也就是属性验证
    set(target, property, value){
        if(property === "age" && typeof value !== "number"){
            console.log("must send a number to age");
            return false;
        } else {
            return Reflect.set(...arguments);
        }
    }
});
console.log(proxy.age);//20
console.log(proxy.name);//undefined
proxy.age = "Kim";//must send a number to age
proxy.age = 22;



//函数和构造函数的参数验证
//可以对它们的参数进行审查，以符合预期
function show(str){
    console.log(str);
};
var proxy = new Proxy(show, {
    //要求必须传入字符串类型参数
    apply(target, thisArg, argumentsList){
        for(const arg of argumentsList){
            if(typeof arg != "string"){
                console.log("Should send a string into function");
            }else{
                return undefined;
            }
        }
        return Reflect.apply(...arguments);
    }
});
proxy(123);//Should send a string into function
proxy("Success");

class Car{
    constructor(name) {
        this.name = name;
    }
}
var proxy = new Proxy(Car, {
    //要求必须传入参数
    construct(target, argumentsList, newTarget){
        if(argumentsList.length === 0){
            console.log("must send parameters into constructor");
            return {};
        }else{
            return Reflect.construct(...arguments);
        }
    }
});
new proxy();//must send parameters into constructor
new proxy("BYD");



//数据绑定与可观察对象
//通过代理可以把不相关的部分联系到一起，这样就可以实现各种模式，从而让不同代码互相操作
//例如：在construct()捕获器中，把新生成的对象全部放入一个数组中
