# Markdown 进阶操作

## 内嵌 HTML 使用

内嵌 HTML 使用是比较麻烦的事情，**不推荐使用**  
倒不是因为它很难，而是**兼容性问题很大**，各种不同的 Markdown 支持的 HTML 标签都不一样  

这会导致同样一份 markdown 在A网站显示良好，在B网站显示却不尽人意  
比如 <www.csdn.net> 的 Markdown 是支持`<span color="" size=num>`的，但 <www.github.com> 的 Markdown 却不支持这个标签  

因此，在要 HTML 内嵌时要**确定兼容性问题后再使用**  

我在此仅给出 GitHub Markdown 支持的常用 HTML 标签  

* 折叠标签`<details></details>`与`<summary></summary>`
  * 这两个标签合用能产生折叠内容并带有小标题的效果
* 定义键盘输入文本`<kbd></kbd>`
  * 这个标签能产生类似`` ` ` ``的代码片段效果，通常`<kbd></kbd>`标签之间嵌套使用`
* 定义输出文本、无其它意义文本`<samp></samp>`
  * 通常与`<kbd></kbd>`嵌套使用
* 用于定义列表的`dl`、`dt`、`dd`标签
* 用来定义拼音的标签`<ruby></ruby>`、`<rp></rp>`、`<rb></rb>`
* `div`标签及其属性`itemscope`、`itemtype`
* 所有的 HTML 实体，即使用`&`进行转义的字符
