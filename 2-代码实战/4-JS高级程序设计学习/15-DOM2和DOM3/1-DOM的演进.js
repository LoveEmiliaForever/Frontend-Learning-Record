//DOM2和DOM3 Core模块的目标是扩展DOM API，满足XML的所有需求并提供更好的错误处理和特性检测



//DocumentType的变化
//新增了public、systemId、internalSubset属性
//不过在网页中很少需要这些信息



//Document的变化
//importNode()方法，从其它文档获取节点并导入新文档，使用这个方法导入节点，节点是ownerDocument属性是正确的
//它有两个参数（要复制的节点，是否复制子树），返回结果是新节点
//还有一个新属性：defaultView，它是一个指向拥有当前文档的窗口（或窗格<frame>）的指针



//Node的变化
//新增了两个比较节点的方法：isSameNode()和isEqualNode()
//它们都接受一个节点参数，然后比较调用节点和此节点，返回布尔值
//节点相同Same，意味着引用同一个对象
//节点相等Equal，意味着它们不是同一个对象，但各方面都相同

//setUserData()方法可以给DOM节点附加额外数据
//它接受3个参数（键，值，处理函数）
//使用getUserData()方法可以根据键获取值
//setUserData()的处理函数会在节点被复制、删除、重命名、导入其它文档时运行
//处理函数接受5个参数（代表操作类型的数值，数据的键，数据的值，源节点，目标节点）
//其中，1代表复制，2代表导入，3代表删除，4代表重命名
//删除节点时，源节点为null；除了复制外，目标节点都是null



//内嵌窗格的变化
//HTMLIFrameElement类型（即<iframe>）新增了contentDocument属性
//这个属性包含代表子内嵌窗格内容的document对象的指针
//以及contentWindow属性，它返回相应窗格的window对象
