//类实例化一个对象由构造函数完成
//构造函数通常具有和类名相同的函数名

//继承（派生），有超类（父类）和子类
//多态，在不同的类里面的同样函数名
//如果子类的实现替换了父类的实现，则称为字类重写/重载

//保持对象内部状态的私有性、明确划分对象的公共接口和内部状态，这些特性称之为封装
//以下划线开头的变量名看作是对象的私有部分

//在 JavaScript 中，我们经常会使用函数或对象字面量创建对象
//JavaScript 可以在没有特定的类定义的情况下创建对象

//原型链的行为并不太像是继承，而更像是委派
//委派模式下，对象可以自己执行该项任务，或者要求另一个对象（委派的对象）以其自己的方式执行这项任务

//JS里面也有类似Java的面向类的对象，但底层仍然是原型链

class Car{
    name;

    constructor(name){  //可以不用构造函数，会自动生成默认构造函数
        this.name=name;
    }

    greet(){
        console.log(`This car is ${this.name}`);
    }
}

let byd = new Car("BYD U9");
byd.greet();

//继承

class BYD extends Car{
    carNum;

    constructor(name, carNum){
        super(name);//子类必须用super()连接父类的构造函数
        this.carNum = carNum;
    }

    greet(){
        console.log(`This car is ${this.name} and carnum is ${this.carNum}`)
    }
}

let geli = new BYD("GEKE","001");
geli.greet();

//封装，在私有属性或方法前面加一个#符号

class Person{
    name;
    #age;

    constructor(name, age) {
        this.name=name;
        this.age=age;
    }
}

class Student extends Person{
    constructor(name,age){
        super(name,age);
    }
    #IfAge15(){
        if(this.age >= 15){
            return(true);
        }else{
            return(false);
        }
    }
    canStudyMath(){
        if(this.#IfAge15()){
            return (true);
        }else{
            return(false);
        }
    }
}

Lina = new Student("Lina", 14);
console.log(Lina.canStudyMath());
