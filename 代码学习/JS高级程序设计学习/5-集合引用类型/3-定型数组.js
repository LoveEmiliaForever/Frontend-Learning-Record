//定型数组，其实是一种包含数值类型的特殊数组（就像C语言里面的数组）
//出现的原因是为了提升向原生库传输数据的效率（为了不用进行数据处理）



//ArrayBuffer
//ArrayBuffer是所有定型数组和试图引用的基本单位，它是一块预分配内存空间
//SharedArrayBuffer是ArrayBuffer的一个变体，可以不用复制就能在执行上下文传递
var ab = new ArrayBuffer(16);//分配了一个16字节的空间
console.log(ab.byteLength);//显示缓冲空间的字节长度
console.log(ab);//所有二进制位初始化为0
var buf = ab.slice(4,8);//ArrayBuffer的大小不能动态变化
//不像C语言的malloc()一样要通过free()释放空间，ArrayBuffer可以被当成垃圾回收



//DataView
//要读取或写入ArrayBuffer需要通过视图进行，DataView就是一个视图
//它对内容没有任何预设（可以存多种数据类型），也无法迭代
var buf = new ArrayBuffer(16);
var fullDataView = new DataView(buf);//DataView要在已有的ArrayBuffer上建立实例
var fullDataView2 = new DataView(buf, 0, 4);//它还能指定缓存区开始位置，缓存区大小（不指定则一直到末尾）
console.log(fullDataView.buffer === buf);//通过buffer属性可以访问关联缓冲
//读取和写入
//一共有8种ElementType：Int8、Uint8、Int16、Uint16、Int32、Uint32、Float32、Float64
//每种类型都有get和set方法，用来读取和写入（需要字节偏移量来定位）
fullDataView.setUint8(0, 255);//在第一个字节以无符号类型插入255的二进制i
console.log(fullDataView.getInt8(0));//以有符号类型获取第一个字节数据，-1
console.log(fullDataView.getUint8(0));//以无符号类型获取第一个字节数据，255
//字节序：大端、小端
//高位：权重大，低位：权重小
//大端法：高位开始，小端法：低位开始
//默认是大端法，但如果传入第二个参数设置为true则用小端法
fullDataView.setInt16(0,56);
console.log(fullDataView.getInt16(0,true));
//和C语言一样，数组是有边界的，索引超出边界会报错
//使用set方法时会自动转换，默认为0，无法转换则报错



//定型数组
//和DataView不一样，定型数组的数据类型是固定的
//由于它存储的是二进制，因此速度极快
var buf = new ArrayBuffer(64);
var ints = new Int16Array(buf);//读取已有缓冲创建定型数组
ints = new Int32Array(6);//使用自有缓冲创建，24字节
var ints2 = new Uint32Array([2,4,5,6]);//基于可迭代结构创建
var floats = new Float32Array(ints2);//基于已有定型数组创建
ints = Float32Array.from([3,5,7]);//使用from()方法创建
ints = Float32Array.of((1,2,3));//使用of()方法创建
//元素大小：Int16Array.BYTES_PER_ELEMENT，定型数组的初始化值为0

//定型数组有数组的绝大多数方法
//由于没有动态大小，故而定型数组没有可以改变长度的数组方法
//set()方法：在指定位置插入指定值
var ints = Int16Array.from([1,2,3,4]);
var ints2 = new Int16Array(8);//全是0
console.log(ints2);
ints2.set(ints);//没有插入索引则0为插入索引
console.log(ints2);
//subarray()方法：提取部分数组为新数组
ints = ints2.subarray(1,3);//没有提取索引则为全部
console.log(ints);
//定型数组的值是可以溢出的，但不会影响其它值
