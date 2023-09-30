//创建<canvas>时至少要指定width和height属性
//可能有浏览器不支持<canvas>需要给标签添加后备提示字符串<canvas>提示字符串</canvas>
//要在画布上绘制图形，首先要获得绘图上下文，使用getContext()可以获得，传入"2d"可以进行平面图形
//可以使用toDataURL()方法导出<canvas>上的图像，这个方法接收一个参数：要生成图像的MIME类型（如"image/png"或"image/jpeg"）



//2D绘图上下文
//2D上下文有两个基本绘制操作：填充和描边（填充是以指定样式（颜色、渐变、图像）填充图形，描边就只是描边而已）
//显示效果取决于fillStyle和strokeStyle属性
//这两个属性可以是字符串、渐变对象、图案对象



//绘制矩形
//fillRect()、strokeRect()、clearRect()，它们都接收4个参数（X，Y，矩形宽，矩形高）
//区别是绘制填充矩形、描边矩形、还是清除矩形（清除矩形区域内的图形将被清除）
//使用lineWidth可以控制描边线大小，lineCap可以控制线条端点形状，lineJoin可以控制线条交汇点形状



//绘制路径
//要绘制路径，必须先调用beginPath()方法表示要开始绘制新路线
/*
下面的方法可以用来绘制路径
    arc(x, y, radius, startAngle, endAngle, counterclockwise)
        以(x, y)为圆心，radius为半径，绘制一条弧线，起始角度为startAngle，结束角度为endAngle（以弧度（2*PI=360度）表示），counterclockwise表示是否逆时针计算角度增值
    arcTo(x1, y1, x2, y2, radius)
        以radius为半径，经由(x1, y1)绘制一条从上一点到(x2, y2)的弧线
    lineTo(x, y)
        绘制一条从上一点到(x, y)的直线
    moveTo(x, y)
        不绘制线条，移动绘制点到(x, y)，这样可以中断上一次的绘制，开启下一次绘制（确保不同路径间不会连线）
    rect(x, y, width, height)
        绘制一个矩形，不过它是路径而非图形
*/
//使用closePath()方法绘制一条返回起点的线
//绘制完成后，可以调用fill()或stroke()来操作路径，或clip()基于已有路径创建一个新剪切区域
//isPointInPath()方法，接收x与y坐标，判断点是否在路径上，在关闭路径前可随时调用



//绘制文本
//fillText()和strokeText()可以绘制文本，它们都接受4个参数（要绘制的文本，x，y，最大像素宽度）
//最大像素宽度是可选的，如果超过了这个宽度，文本会被调整
/*
下面的3个属性会影响绘制结果
    font            以CSS语法指定的字体样式、大小、字体族等等
    textAlign       指定水平对齐方式，可以是"start"或"end"（不推荐的用"left"和"right"）
    textBaseLine    指定垂直对齐方式，可以说"top"、"hanging"、"middle"、"alphabetic"、"ideographic"、"bottom"
*/



//变换
//上下文变换可以操作绘制在画布上的图像
/*
    rotate(angle)           绕原点旋转图像
    scale(scaleX, scaleY)   放大缩小图像
    translate(X, Y)         移动原点（移动的是原点而非其它什么）
*/

//调用save()可以保存所有的设置到一个栈内，调用restore()可以从栈内恢复设置
//save()只保存应用到上下文的设置和变换，不保存上下文内容



//绘制图像
//使用drawImage()方法可以绘制图像到画布上
//这个方法可以接受3组不同的参数，并产生不同的结果

//可以调整插入后图像的大小drawImage(<img>元素，插入X，插入Y，插入后图像宽，插入后图像高)
//还可以指定插入图像的特定区域drawImage(<img>元素，源图像X，源图像Y，要插入图像宽，要插入图像高，插入X，插入Y，插入后图像宽，插入后图像高)
//除了可以插入<img>外，还可以插入<canvas>



//阴影
//可以给已有形状或路径生成阴影
/*
    shadowColor     CSS颜色
    shadowOffsetX   x偏移
    shadowOffsetY   y偏移
    shadowBlur      阴影的模糊量
*/



//渐变
//渐变通过CanvasGradient实例表示
//使用context.createLinearGradient()方法可以创建新实例
//接受4个参数：（起点x，起点y，终点x，终点y）
//使用addColorStop()可以给渐变指定色标，它接受两个参数（色标位置0~1之间，CSS颜色）
//调用多个addColorStop()可以指定渐变中的颜色位置和数量等等

//径向渐变（放射性渐变）
//使用createRadialGradient()方法创建径向渐变
//它接受6个参数，前三个参数指定起点圆，后三个参数指定终点圆



//图案
//图案和图片是不同的，图案是像背景一样的东西，用来填充图形的
//调用createPattern()可以创建新图案
//它接受两参数（<img>或<canvas>或<video>，和CSS的background-repeat属性相同的"repeat"、"repeat-x"、"repeat-y"、"no-repeat"）



//图形数据
//使用getImageData()方法获取原始图像数据
//它接受4个参数（x, y, width, height）表示选取目标区域
//返回的对象是ImageData实例，包含3个属性width、height、data
//data是包含原始像素信息的数组（一维数组），每个像素由4个值组成，对应rgba颜色
//使用putImageData()方法可以根据图像数据把图像绘制出来



//合成
//globalAlpha属性，表示所有绘制内容的透明度
//globalCompositionOperation属性，表示图像叠加的方式
/*
图像叠加的方式有很多种
常见两种
    source-over         新图像在原图像上面
    destination-over    新图像在原图像下面
*/
