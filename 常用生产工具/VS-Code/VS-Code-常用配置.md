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

## 4. 手动完成 VS Code 环境变量与注册表配置

如果在安装后没有勾选自动添加环境变量、自动添加open with vscode至上下文菜单（右键菜单），那么也可以通过手动设置来完成。  

* 添加`Microsoft VS Code\bin`路径到系统环境变量
  > 打开环境变量设置，打开系统变量的PATH
  > 并往里面添加一条路径`你安装 VS Code 的路径\Microsoft VS Code\bin`
* 添加注册表信息以配置右键菜单
  > 创建一个`添加 VS Code 右键菜单.reg`文件，并将下列命令写入保存后运行该文件
  > 注意修改下列命令中的`Code.exe`路径
  >
  > ```reg
  > Windows Registry Editor Version 5.00
  > 
  > [HKEY_CLASSES_ROOT\*\shell\VSCode]
  > @="Open with Code"
  > "Icon"="D:\\Program Files\\Microsoft VS Code\\Code.exe"
  > 
  > [HKEY_CLASSES_ROOT\*\shell\VSCode\command]
  > @="\"D:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%1\""
  > 
  > Windows Registry Editor Version 5.00
  > 
  > [HKEY_CLASSES_ROOT\Directory\shell\VSCode]
  > @="Open with Code"
  > "Icon"="D:\\Program Files\\Microsoft VS Code\\Code.exe"
  > 
  > [HKEY_CLASSES_ROOT\Directory\shell\VSCode\command]
  > @="\"D:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%V\""
  > 
  > Windows Registry Editor Version 5.00
  > 
  > [HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode]
  > @="Open with Code"
  > "Icon"="D:\\Program Files\\Microsoft VS Code\\Code.exe"
  > 
  > [HKEY_CLASSES_ROOT\Directory\Background\shell\VSCode\command]
  > @="\"D:\\Program Files\\Microsoft VS Code\\Code.exe\" \"%V\""
  > ```
  >
  > 这些命令用于添加注册表信息
