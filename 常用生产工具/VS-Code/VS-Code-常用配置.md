# VS-Code 常用配置

## 1. 汉化插件安装
> VS Code 自带有插件管理与插件市场（置于侧栏）
> 搜索并安装`Chinese (Simplified) Language Pack`即完成汉化
## 2. 用户配置
> VS Code 中有默认配置、用户配置、工作区配置三种
> 它们的优先级：`工作区 > 用户 > 默认`
> 工作区是指当前项目的工作目录  

> 常用配置选项（VS Code 支持 JSON 格式导入保存配置文件）
> ```json
> {
>   "editor.fontSize": 14,
>    "files.autoSave": "afterDelay",
>    "editor.wordWrap": "on",
>    "editor.autoIndent": "advanced",
>    "editor.bracketPairColorization.independentColorPoolPerBracketType": true,
>    "diffEditor.codeLens": true,
>    "files.autoSaveDelay": 5000,
>    "window.newWindowDimensions": "maximized"
> }
> ```
> 也可用GUI界面调节，方便获取配置信息
