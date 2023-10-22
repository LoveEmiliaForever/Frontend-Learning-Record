//JS数组是一组有序的数据，可以存储任何类型数据，同时它是动态大小的



//创建数组
//使用Array构造函数
var array = new Array(3);//三个undefined
array = new Array("A","B","C");
//使用数组字面量
array = ["red","blue","green"];//声明时实际不会调用Array()构造函数，使用时才会构造
//from()用于将 类数组结构转换为数组实例（类数组：可迭代结构，有length和可索引元素的结构）
array = Array.from(new Map().set(1,2).set(3,4));
array = Array.from({
    0:1,
    1:2,
    2:3,
    length:3
});
//of()可以把一组参数转换为数组
array = Array.of(1,2,3,4);



//数组空位
//使用数组字面量初始化数组时，可以用一串逗号创建空位，ES6把空位当作值为undefined的存在元素
console.log([1,,,,5]);//[ 1, <3 empty items>, 5 ]
//ES6之前的方法会忽略这个空位，但方式因方法而异
//map()会跳过，join()会当作空字符串



//数组索引
//如果赋值给索引大于长度的数组位置，那么数组会自动延长
var array = Array(3);
array[10] = "have";
console.log(array.length);//11
//数组的length属性是可以更改的，且会影响数组长度
array.length = 5;
console.log(array[10]);//undefined
//使用length属性可以向数组末尾添加元素
array[array.length] = "new";
console.log(array[5]);//new



//检测数组
//如果只有一个全局作用域（意味着只有一个Array构造函数），可以用instanceof操作符
console.log(array instanceof Array);//true
//在网页有多个框架情况下，可能有多个Array构造函数
//使用Array.isArray()判断是否是数组
console.log(Array.isArray(array));//true



//迭代器方法
//keys()返回数组索引的迭代器，values()返回数组元素的迭代器，entries()返回 索引/值 对的迭代器
console.log(`keys():${Array.from(array.keys())}
values():${Array.from(array.values())}
entries():${Array.from(array.entries())}`);



//填充数组方法fill()
//可以向一个数组插入全部或部分相同的值
//参数是(填充值，开始索引，结束索引)，没有开始索引则全部填充，没有结束索引则填充到末尾，接受负值
var array = [1,2,3,4,5];
console.log(array.fill("ktk"));//[ 'ktk', 'ktk', 'ktk', 'ktk', 'ktk' ]
console.log(array.fill("ata", 2));//[ 'ktk', 'ktk', 'ata', 'ata', 'ata' ]
console.log(array.fill("mtm", 2, 3));//[ 'ktk', 'ktk', 'mtm', 'ata', 'ata' ]
//fill()静默忽略超出数组边界，零长度，方向相反的索引范围



//批量复制方法copyWithin()
//复制数组指定范围内容到开始索引和结束索引之间
//(粘贴开始索引，选择开始索引，选择结束索引)，默认选择数组全部内容，没有结束索引则一直复制到结尾
var array = [1,2,3,4,5];
console.log(array.copyWithin(2));//[ 1, 2, 1, 2, 3 ]
console.log(array.copyWithin(2, 0));//[ 1, 2, 1, 2, 1 ]
console.log(array.copyWithin(4, 1, 2));//[ 1, 2, 1, 2, 2 ]
//同样的，copyWithin()也会静默忽略超出数组边界，零长度，方向相反的索引范围



//转换方法
//如果是null或undefined则以空字符串表示
var array = ['a','b','c','d','e'];
console.log(array.valueOf());//valueOf()方法返回数组本身
console.log(array.toString());//返回由","拼接而成的字符串（会对每个元素调用其自身的toString()方法）
console.log(array.toLocaleString());//和toString()差不多，但调用的是toLocaleString()方法
//join()方法，接受分隔字符串，默认使用逗号
console.log(array.join("-"));//a-b-c-d-e



//栈方法和队列方法
var array = [];
array.push("stack");//入栈，从顶部进入
console.log(array.pop());//出栈，从顶部出
array.push("queue");//入队，从顶部入
console.log(array.shift());//出队，从底部出
array.unshift("queue");//入队，从底部入



//排序方法：会改变原数组
//reverse()对数组进行反转
var array = [0,1,5,10,15]
console.log(array.reverse());
//sort()默认按升序排列数组，提供比较字符大小确定（比较的是字符大小，非字符调用toString()变成字符）
console.log(array.sort());//[ 0, 1, 10, 15, 5 ]，不符合常理
//sort()可以接受一个比较函数，函数接受两个参数
function compare(value1, value2){
    if(value1>value2){
        return 1;  //value1在value2后面
    }else if(value1<value2){
        return -1;  //value1在value2前面
    }else{
        return 0;
    }
}
console.log(array.sort(compare));//[ 0, 1, 5, 10, 15 ]



//数组操作方法
//concat()方法和slice()方法，和前面学习的差不多
var array = [1,2,3,4,5];
var add = ["a","b","c"];
console.log(array.concat("KDA",add));//concat()方法
console.log(array.slice(1,4));//slice()方法
//splice()方法：改变原数组
//(要删除元素位置，要删除元素个数，要插入元素...)
array.splice(0,2);//删除开头两个元素
console.log(array);
array.splice(0,0,"A","B");//在开头插入A和B
console.log(array);
array.splice(0,1,"a");//把A换成a
console.log(array);
console.log(array.splice(1,2));//splice()返回被删除的元素
console.log(array);



//搜索数组方法
//indexOf()、lastIndexOf()、includes()和字符串的方法基本一致，它们用的是严格等于（===）
//断言函数（元素，索引，数组本身）返回布尔值
//find()和findIndex()使用断言函数，同时接受第二个参数（一个对象）来指定函数的this
var array = [{num:1},{num:2}];//两个对象
function compare2(element, index, array){
    return element.num == this.num;
};
console.log(array.find(compare2, {num:2}));//返回匹配项
console.log(array.findIndex(compare2, {num:2}));//返回匹配索引



//迭代方法
//有5个迭代方法，可接受两个参数（需要运行的函数，作用域对象this）
//函数接受3个参数（数组元素，元素索引，数组本身）
//every()，每一项都返回true则返回true
//some()，有一项返回true则返回true
//forEach()，对每一项都运行函数，没有返回值
//filter()，返回true的项组成数组返回
//map()，函数运行结果组成数组返回



//归并方法：累计计算
//reduce()和reduceRight()两个方向不同，其它无区别
//接受两个参数（归并函数，归并起点）
//函数有四个参数（上一个归并值，当前项，当前项的索引，数组本身）
//如果没有起点，则从第二项开始，第一项作为第一个参数传入
var array = [1,2,3,4,5];
function sum(pre,cur,index,array){
    return pre+cur;
}
console.log(array.reduce(sum));//15



