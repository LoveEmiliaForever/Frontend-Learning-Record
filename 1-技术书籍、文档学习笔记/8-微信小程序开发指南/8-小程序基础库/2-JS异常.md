# JS异常

在**WebView层**有两种方法可以捕捉JS异常  

* `try`, `catch`方案，你可以针对某个代码块使用try,catch包装，这个代码块运行时出错时能在catch块里边捕捉到
* `window.onerror`方案，也可以通过`window.addEventListener("error", function(evt){})`，这个方法能捕捉到语法错误跟运行时错误

**逻辑层**不存在window对象，因此逻辑层AppService侧无法通过window.onerror来捕捉异常  
在逻辑层AppService侧通过把App实例和Page实例的各个生命周期等方法包裹在try-catch里进行捕捉异常  
同时在App构造器里提供了onError的回调，当业务代码运行产生异常时，这个回调被触发  
