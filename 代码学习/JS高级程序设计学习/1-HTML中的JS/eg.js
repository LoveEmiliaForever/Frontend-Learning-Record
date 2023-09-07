console.log("This is a test file111");
let script = document.createElement("script");
script.src = "./eg2.js";
script.async = false;//设置为同步加载
document.head.appendChild(script);
