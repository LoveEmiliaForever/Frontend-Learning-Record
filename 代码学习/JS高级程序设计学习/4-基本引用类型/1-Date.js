//Date类型是自1970年1月1日零时后经过的毫秒数（UTC时间）



//在不给Date构造函数参数的情况下，生成的是当前时间
console.log(new Date());

//而要生成其它时间，需要传入毫秒时间
//但Date()也会调用Date.parse()或Date.UTC()来将字符串转换为毫秒时间（失败则为NaN）

//Date.parse()被调用
console.log(new Date("9/8/2023"));//月/日/年
console.log(new Date("2023-09-08T17:00:00.000Z"));//YYYY-MM-DDTHH:mm:ss.sssZ  注意月份和日子都是两位数

//Date.UTC()被调用，生成的是本地时间
//年份和月份是必要的，日子默认为1，其它默认为0，月份从0开始
console.log(new Date(2023,8));//月/日/年
console.log(new Date(2023,8,8,17,3,0));

//Date.now()返回的是当前毫秒时间，类型是Number
console.log(typeof Date.now());



//toLocaleString()、toString()、valueOf()

//toLocaleString()返回与本地环境一致的时间格式
console.log(new Date().toLocaleString());
//toString()返回带时区信息的24小时制时间格式
console.log(new Date().toString());
//valueOf()返回毫秒时间 Number类型
console.log(new Date().valueOf());



//格式化日期方法，全部返回字符串
console.log(new Date().toDateString());//星期 月份 日子 年份
console.log(new Date().toTimeString());//时 分 秒 时区
console.log(new Date().toLocaleDateString());//本地格式
console.log(new Date().toLocaleTimeString());//本地格式
console.log(new Date().toUTCString());//UTC时间的字符串，美国GMT时区的时间



//一些方法
let timeNow = new Date();
console.log(`
getTime():${timeNow.getTime()}  返回毫秒时间
getFullYear():${timeNow.getFullYear()}  4位数年份
getMonth():${timeNow.getMonth()}  0开始的月份
getDate():${timeNow.getDate()}  日期
getDay():${timeNow.getDay()}  星期
getHours():${timeNow.getHours()}  小时
getMinutes():${timeNow.getMinutes()}  分钟
getSeconds():${timeNow.getSeconds()}  秒
getMilliseconds():${timeNow.getMilliseconds()}  毫秒
getTimezoneOffset()${timeNow.getTimezoneOffset()}  与UTC时间时区的偏移量（以分钟计时）
`);
//将get换成set还可以设置时间


