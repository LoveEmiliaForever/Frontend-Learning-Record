# VS-Code 常用配置

## 1. 汉化插件安装
>
> VS Code 自带有插件管理与插件市场（置于侧栏）
> 搜索并安装`Chinese (Simplified) Language Pack`即完成汉化

## 2. 常用插件

### 编程强化

* `Bracket Pair Colorizer`给嵌套括号加上不同颜色
* `Path Intellisense`智能路径提示
* `Code Spell Check`英语拼写检测
* `Image preview`预览图片
* `Regex Previewer`预览正则选择结果

### 功能附加

* `filesize`显示文件大小在左下角
* `import Cost`显示引用包的大小
* `Code Runner`运行各种各样的语言
* `WakaTime`编程时间和行为汇总记录可视化

### 页面美化

* `Dracula Official`一款好看的黑暗主题
* `Material Icon Theme`好看的文件图标
* `Source Code Pro`好看的字体
* `Power Mode`炫酷的输入动态效果

### Markdown环境配置

* `Markdown Preview Enhanced`markdown语法编辑、预览
* `Markdown Table Formatter`markdown格式化插件
* `markdownlint`markdown语法纠错

### Git可视化

* `GitLens`VScode常用Git插件
  * 需要在setting.json里面添加`"git.path":"git的路径//git.exe"`
  * 要添加git的路径，要用//而非/
* `Git Graph`Git可视化显示、操作

## 3. 用户配置
>
> VS Code 中有默认配置、用户配置、工作区配置三种
> 它们的优先级：`工作区 > 用户 > 默认`
> 工作区是指当前项目的工作目录  

> 常用配置选项（VS Code 支持 JSON 格式导入保存配置文件）
>
> ```json
> {
>   "editor.fontSize": 14,
>    "files.autoSave": "afterDelay",
>    "editor.wordWrap": "on",
>    "editor.autoIndent": "advanced",
>    "editor.bracketPairColorization.independentColorPoolPerBracketType": true,
>    "editor.bracketPairColorization.enabled": true,
>    "diffEditor.codeLens": true,
>    "files.autoSaveDelay": 5000,
>    "window.newWindowDimensions": "maximized",
>    "editor.guides.bracketPairs": "active",
>    "editor.fontFamily": "'Source Code Pro', Consolas, 'Courier New', monospace",
> }
> ```
>
> 也可用GUI界面调节，方便获取配置信息
