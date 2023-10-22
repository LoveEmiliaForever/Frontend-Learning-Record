//键盘事件是用户操作键盘是触发的
//keydown   用户按下某键时触发，一直按着则重复触发
//keyup     松开某键时触发
//textInput 在文本被插入到文本框之前触发
//键盘事件支持修饰键属性：shiftKey、ctrlKey、altKey、metaKey



//键码
//对于keydown和keyup事件，event的keyCode会保存对应键的键码（见书P519）
//数字和字母键，keyCode的值和数字与小写字母的ASCII码一致



//textInput事件
//textInput只在可编辑区域上触发，且只在有新字符被插入时触发（如Enter等等键不会触发它）
//event提供了一个data属性，包含要插入的字符
//event还包含了一个inputMethod属性，表示输入文本的手段
/*
    0   不能确定
    1   键盘
    2   粘贴
    3   拖放
    4   IME（合成事件）
    5   表单选项
    6   手写
    7   语音
    8   组合方式
    9   脚本
*/



//合成事件
//用于处理使用IME输入的复杂序列，IME可以让用户输入没有的字符（例如输入中文、日文）
//compositionstart      IME系统打开时触发
//compositionupdate     新字符插入输入字符时触发
//compositiononend      IME系统关闭

//event增加了data属性，它的值根据情况而变
//compositionstart事件中      包含正在编辑的文本（例如拼音）
//compositionupdate事件中     包含要插入的新字符
//compositiononend事件中      本次合成过程中输入的全部内容
