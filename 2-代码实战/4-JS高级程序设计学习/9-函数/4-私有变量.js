//严格说，JS中没有私有成员概念，不过可以有私有变量
//任何定义在函数或块中的变量，都被认为是私有的，它们在外部无法被访问

//特权方法：能够访问函数私有变量的公有方法
//在函数中创建一个闭包，则可以通过闭包访问函数的私有变量



//构造函数特权方法
function Car(){
    let price = 1000;
    this.getPrice = function(){return price;};
    this.setPrice = function(value){price = value;};
}
var car = new Car();
console.log(car.getPrice());//1000
car.setPrice(2000);
console.log(car.getPrice());//2000
console.log(car.price);//undefined
//这个方法的缺点和构造函数模式的缺点一样，有冗余属性



//静态私有变量
(function(){  //立刻调用的函数表达式
    let name = "Kimi";
    function getName(){console.log(name);};
    //这是一个闭包，但是它同时是全局的，作为构造函数
    Cat = function(){};
    //因为闭包中包含了对该函数活动对象的引用，所以可以访问私有变量
    Cat.prototype.getName = function(){
        getName();
        return name;
    }
})();
cat = new Cat();
cat.getName();//Kimi
//这种方法下的私有变量和函数是由所有实例共享的
//使用闭包和私有变量会导致作用域链变长，进而性能不好



//模块模式
//模块模式是在单例对象基础上扩展的，通过作用域链关联私有变量和特权方法
//单例对象，只有一个实例的对象
let singleObj = function(){
    //定义私有属性
    let privateNum = 10;
    function getNum(){console.log(privateNum);};
    //创建对象
    let tempObj = new Object();
    //增强对象
    tempObj.publicMethod = function(){
        privateNum++;
        getNum();
        return privateNum;
    }
    return tempObj;
}();
singleObj.publicMethod();//11


