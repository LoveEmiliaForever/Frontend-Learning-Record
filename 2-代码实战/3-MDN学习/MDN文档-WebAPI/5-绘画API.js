//要在网页中创建 2D 或者 3D 场景，必须在 HTML 文件中插入一个 <canvas> 元素，以界定网页中的绘图区域

var canvas = document.querySelector(".myCanvas");
//使用了多个等号为多个变量进行连续赋值，这在 JavaScript 中是允许的
var width = (canvas.width = window.innerWidth);
var height = (canvas.height = window.innerHeight);

//需要获得一个对绘画区域的特殊的引用（称为“上下文”）
var ctx = canvas.getContext("2d");//还包括webgl、webgl2等等上下文

//设置填充色，绘制一个白色矩形
ctx.fillStyle = "rgb(0, 0, 0)";
ctx.fillRect(0, 0, width, height);

//绘制矩形、线等操作按出现的顺序依次进行。就像粉刷墙面时，两层重叠时新层总会覆盖旧层

//绘制仅包含外部框线，即描边
ctx.strokeStyle = "rgb(255, 255, 255)";//描边颜色
ctx.lineWidth = 5;//描边宽度
ctx.strokeRect(25, 25, 175, 200);//绘制一个描边矩形


//可以通过绘制路径来绘制比矩形更复杂的图形
//路径中至少要包含钢笔运行精确路径的代码
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();//钢笔当前所在位置开始绘制一条路径，起始位置为 (0, 0)
ctx.moveTo(50, 50);//将钢笔移动至另一个坐标点
ctx.fill();// 填充颜色来绘制一个新的填充形状
ctx.strokeStyle();//绘制一个只有边框的形状


//画线，画一个直角三角形
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);//线条的路径
ctx.lineTo(150, 100);
ctx.lineTo(50, 50);
ctx.fill();//终止路径，并为图形填充颜色


//画圆
ctx.fillStyle = 'rgb(0, 0, 255)';
ctx.beginPath();
//前两个指定圆心的位置坐标，第三个是圆的半径
//第四、五个是绘制弧的起、止角度（给定 0° 和 360° 便能绘制一个完整的圆）
//第六个是绘制方向（false 是顺时针，true 是逆时针）
//degToRad()函数是将角度转换为弧度的函数，JS接受的一般是弧度
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();


//在画布上绘出文字
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";//文字的字号、文字的字体
ctx.strokeText("Canvas text", 50, 50);//文字内容、文本框的位置


//在画布中嵌入图片
var image = new Image();// Image() 构造器创建了一个新的 HTMLImageElement 对象
image.src = "firefox.png";//设置图片资源
image.onload = function () {//应确保图片先载入完毕，否则运行会出错
    ctx.drawImage(image, 50, 50);//坐标为希望嵌入的位置
};




//循环
//可以在 for 循环中运行画布命令，和其他 JS 代码一样
//例如下面的代码创建一堆三角形
ctx.translate(width / 2, height / 2);//translate()，可用于移动画布的原点（不是画布而是原点）
function degToRad(degrees) {
    return (degrees * Math.PI) / 180;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var length = 250;
var moveOffset = 20;

for (var i = 0; i < length; i++) {
    ctx.fillStyle ="rgba(" + (255 - length) + ", 0, " + (255 - length) + ", 0.9)";
    ctx.beginPath();
    ctx.moveTo(moveOffset, moveOffset);
    ctx.lineTo(moveOffset + length, moveOffset);
    var triHeight = (length / 2) * Math.tan(degToRad(60));
    ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
    ctx.lineTo(moveOffset, moveOffset);
    ctx.fill();

    length--;
    moveOffset += 0.7;
    ctx.rotate(degToRad(5));//画布旋转5度
}


//动画
//window.requestAnimationFrame()，它只取一个参数，即“每帧”要运行的函数名
//requestAnimationFrame()一次只运行一帧，如果要动画则应该循环
//动画结束后在主代码中调用 cancelAnimationFrame() 是良好习惯，可以确保不再有等待运行的更新
//具体是addEventListener(cancelAnimationFrame(requestAnimationFrame()))

function loop() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 25) {
        var ball = new Ball();
        balls.push(ball);
    }

    for (i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();



