//代理可以捕获13种不同的基本操作
//对于一种操作只有一个捕获器会被调用，不会出现重复捕获情况
//只要在代理上调用，所有捕获器都会拦截它们对应的反射API操作



//get()捕获器，会在获取属性值的操作中被调用
//返回值无限制
//参数(target, property, receiver)


//set()捕获器，会在设置属性值的操作中被调用
//返回布尔值表示操作成功与否，严格模式报错
//参数(target, property, value, receiver)


//has()捕获器，会在in操作符中被调用
//返回布尔值表示属性存在与否
//参数(target, property)


//defineProperty()捕获器，在Object.defineProperty()中被调用
//返回布尔值表示操作成功与否
//参数(target, property, descriptor)


//getOwnPropertyDescriptor()捕获器，会在Object.getOwnPropertyDescriptor()中被调用
//返回对象，或者在属性不存在时返回undefined
//参数(target, property)


//deleteProperty()捕获器，在delete操作符中被调用
//返回布尔值表示删除成功与否
//参数(target, property)


//ownKeys()捕获器，在Object.keys()或类似方法中被调用
//返回包含字符串或Symbol的可枚举对象
//参数(target)


//getPrototypeOf()捕获器，在Object.getPrototypeOf()中被调用
//返回对象或null
//参数(target)


//setPrototypeOf()捕获器，在Object.setPrototypeOf()中被调用
//返回布尔值表示赋值成功与否
//参数(target, prototype)


//isExtensible()捕获器，在Object.isExtensible()中被调用
//返回布尔值表示target是否可以扩展
//参数(target)


//preventExtensions()捕获器，在Object.preventExtensions()中被调用
//返回布尔值表示target是否已经不可扩展
//参数(target)


//apply()捕获器，会在调用函数时被调用
//返回无限制
//拦截操作：proxy()（函数调用）, Function.prototype.apply(), Function.prototype.call()
//参数(target, thisArg, argumentsList)


//construct()捕获器，会在new操作符中被调用
//返回一个对象
//参数(target, argumentsList, newTarget)
//target必须可以用作构造函数
