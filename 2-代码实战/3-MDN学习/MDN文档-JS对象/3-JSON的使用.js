//JavaScript 对象表示法（JSON）是用于将结构化数据表示为 JavaScript 对象的标准格式
//虽然它基于 JavaScript 语法，但它独立于 JavaScript，许多程序都能读取和生成JSON

//JSON作为对象则用于解读数据，作为字符串则用于传输数据
//JS提供了JSON对象进行转换，对象到字符串为序列化，字符串到对象为反序列化
//一个JSON可以存储在文件里，扩展名为.json

//JSON格式类似JS对象字面量，数据结构也相同
var kkjson = [
    {
        "name":"longg",
        "age":14
    },
    {
        "name":"kim",
        "age":21,
        "sign":[
            "kim is first",
            "kim not king"
        ]
    }
]

var kimSign = kkjson[1].sign[0];
console.log(kimSign);

//对象转换为字符串
let kkstr = stringify(kkjson);
//字符串转换为对象
let kkobject=parse(kkstr);
