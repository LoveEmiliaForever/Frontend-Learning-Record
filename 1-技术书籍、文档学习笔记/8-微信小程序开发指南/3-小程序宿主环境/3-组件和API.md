# 组件和API

## 组件

一个小程序页面可以分解成多个部分组成，组件就是小程序页面的基本组成单元  
小程序的宿主环境提供了一系列基础组件  
用起来和Vue的组件、HTML标签差不多  

[全部组件的文档](https://developers.weixin.qq.com/miniprogram/dev/component/)

## API

宿主环境提供了丰富的API，可以很方便调起微信提供的能力  
`wx对象`实际上就是小程序的宿主环境所提供的全局对象，几乎所有小程序的API都挂载在wx对象底下  

1. wx.on* 开头的 API 是监听某个事件发生的API接口，接受一个 Callback 函数作为参数
2. 如未特殊约定，多数 API 接口为`异步`接口 ，都接受一个Object作为参数
3. API的Object参数一般由`success`、`fail`、`complete`三个回调来接收接口调用结果
4. wx.get* 开头的API是获取宿主环境数据的接口
5. wx.set* 开头的API是写入数据到宿主环境的接口

```js
wx.request({
    url: 'test.php',
    data: {},
    header: { 'content-type': 'application/json' },
    success: function(res) {
        // 接口调用成功触发
        console.log(res.data)
    },
    fail: function() {
        // 接口调用失败触发
    },
    complete: function() {
        // 接口调用结束触发
        // 成功或者失败后触发
    }
})
```

有部分API会拉起微信的原生界面，此时会触发Page的onHide方法，当用户从原生界面返回到小程序时，会触发Page的onShow方法  
[API文档](https://developers.weixin.qq.com/miniprogram/dev/api/)  
