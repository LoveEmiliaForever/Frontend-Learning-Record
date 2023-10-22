//现代浏览器提供了一组和页面执行环境相关的信息，它们可以在window.navigator获取
//但它们的跨浏览器支持不够好，没有达到标准化的程度，使用前应该检测它们是否存在



//识别浏览器和操作系统
console.log(navigator.oscpu);//字符串，提供操作系统相关信息
console.log(navigator.vendor);//字符串，提供浏览器开发商信息
console.log(navigator.platform);//字符串，提供浏览器所在操作系统
console.log(screen.colorDepth, screen.pixelDepth);//两个的值一样，返回显示器像素颜色位深
console.log(screen.orientation);
/*
返回一个ScreenOrientation对象，里面有angle和type属性
angle:返回相对于默认状态下屏幕的角度
type：返回下列四个值之一
    portrait-primary  竖向的，竖向打印格式的
    portrait-secondary
    landscape-primary  横向的，横向打印格式的
    landscape-secondary
*/



//Geolocation API
//这个API只在HTTPS下执行，它可以让浏览器获取当前设备地理位置
//地理位置信息可以通过GPS、IP、WiFi、蓝牙、Mac地址等等一系列信息获取

//使用getCurrentPosition()方法可以获取浏览器当前位置
//参数需要是一个回调函数，getCurrentPosition()会向其传入position对象
p = navigator.geolocation.getCurrentPosition((position) => {return position});
//position对象中包含有一个时间戳，一个包含坐标信息的Coordinates对象
console.log(p.timestamp);
console.log(p.coords);
//Coordinates对象包含标准格式的经纬度，以米为单位
console.log(p.coords.latitude, p.coords.longitude, p.coords.accuracy);//维度，经度，位置的精度
console.log(p.coords.altitude, p.coords.altitude);//海拔，海拔精度，同样以米为单位
console.log(p.coords.speed, p.coords.heading);//每秒移动速度，朝向（相对于正北方向的角度）
//要获得经纬度和海拔，需要相应设备，因此这两个值有可能是空的

//getCurrentPosition()方法也接受失败回调函数作为第二个参数
//失败的情况下，这个函数会收到一个PositionError对象
navigator.geolocation.getCurrentPosition(()=>{}, (error)=>{console.log(error)});
//PositionError对象包含两个属性，code和message
/*
code是一个整数，表示下面3种错误：
    PERMISSION_DENIED: 浏览器不允许获取设备位置
    POSITION_UNAVAILABLE: 无法返回任何位置信息
    TIMEOUT: 超时
message则是一个简短的描述
*/

//getCurrentPosition()方法还接受第三个参数，PositionOptions对象来进行配置
//这个对象有下面三个属性
/*
enableHighAccuracy:布尔值，是否以高精度获取位置
timeout:数值，设置超时时间，单位毫秒
maximumAge:数值，设置坐标有效时间，默认为0，单位毫秒
    如果是0，则每次都会重新查询位置信息。如果是Infinity，则不会查询新位置信息。
    可以通过position.timestamp查看位置信息获取时间
*/



//Connection State 和 NetworkInformation API
//浏览器的网络连接状态可以通过：window上的连接事件、navigator.onLine属性暴露
console.log(navigator.onLine);
window.addEventListener("online", ()=>{console.log(navigator.onLine);});
window.addEventListener("offline", ()=>{console.log(navigator.onLine);});

//通过navigator.connection可以获取网络信息
console.log(`下行带宽：${navigator.connection.downlink}
最大下行带宽：${navigator.connection.downlinkMax}
连接速度和质量：${navigator.connection.effectiveType}
往返时间：${navigator.connection.rtt}
网络类型：${navigator.connection.type}
节流模式：${navigator.connection.saveData}
事件处理程序：${navigator.connection.onchange}`);
//effectiveType的返回值有四种：slow-2g, 2g, 3g, 4g
/*type的返回值有如下：
    bluetooth:蓝牙
    cellular:蜂窝
    ethernet:以太网
    none:无连接
    mixed:多种网络混合
    other:其它
    unknown:不明
    wifi:Wi-Fi
    wimax:WiMAX
*/



//Battery Status API
//浏览器可以访问设备电池和充电情况
//navigator.getBattery()返回一个Promise，解决为一个BatteryManager对象
navigator.getBattery().then((b)=>console.log(b));
/*
四个只读属性
    charging:布尔值，是否充电，没有电池返回true
    chargingTime:整数，充满要多少秒，没有电池返回Infinity
    dischargingTime:整数，电量耗尽要多少秒，没有电池返回0
    level:浮点数，电量百分比，没有电池返回1.0
四个事件
    onchargingchange
    onchargingtimechange
    ondischargingtimechange
    onlevelchage
*/



//硬件检测
//处理器核心数
console.log(navigator.hardwareConcurrency);//实际上是最大工作线程数量
//内存大小
console.log(navigator.deviceMemory);
//最大触点
console.log(navigator.maxTouchPoints);
