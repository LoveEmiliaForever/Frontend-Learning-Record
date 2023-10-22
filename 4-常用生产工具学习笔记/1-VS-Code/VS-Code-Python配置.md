# Python开发环境配置

## 1. 安装Python（请确保安装完成）

* 前往[Python官网](https://www.python.org/)下载对应系统的安装包
* 请确保下载的是`security`版本而不是其它版本
* 按照安装步骤安装即可
* **安装时一定要把环境变量与路径长度解限一起设置**
* 如忘记勾选，可手动添加环境变量

## 2. 测试Python安装是否成功

* 运行命令行界面输入`python`即可进入自带IDEL
* 输入`exit()`退出IDEL

* ```cmd
    C:\Users\***>python
    Python 3.10.11 (tags/v3.10.11:7d4cc5a, Apr  5 2023, 00:38:17) [MSC v.1929 64 bit (AMD64)] on win32
    Type "help", "copyright", "credits" or "license" for more information.
    >>> exit()
    ```

## 3. VS Code安装必要插件

* VS Code 的语言扩展插件`Python`安装，发行方为Microsoft
  * 在输入栏（Ctrl + Shift + P）输入`Python: Select Interpreter`选择内核
  * 有了内核后即可运行python程序（Ctrl + F5）、调试程序（F5）
* VS Code 代码补全插件`IntelliCode`安装，发行方为Microsoft
  * 该插件支持Python、SQL、JS、TS、JAVA的代码补全

## 4. pip 安装代码检查库与代码格式化库

* 在设置中开启python代码检查`"python.linting.enabled": true,`
* VS Code 中调用终端使用快捷键(Ctrl + \`)或 查看->终端
  * Windows如果无法运行`pip`命令有可能是安全策略导致，需要使用`PowerShell`更改策略

  * ```powershell
      set-ExecutionPolicy RemoteSigned
      ```

* `pylint`流行的python代码检查库
  * `pip install pylint`
  * 设置中添加`"python.linting.pylintEnabled": true,`
* `flake8`官方发布python代码检查库
  * `pip install flake8`
  * 设置中添加`"python.linting.flake8Enable": true,`
  * 同一时间只能有一个代码检查库运行，请将其它代码检查库设置为`false`
* `yapf`python代码格式化库
  * `pip install yapf`
  * 设置中添加`"python.formatting.provider": "yapf"`

## 5. python程序调试

* 调试文件配置
  > 文件名`launch.json`处在当前文件夹的`.vscode/`中
  > 配置文件包含各种选项信息，皆作用于文件的调试
* 断点与运行控制
  > 效果与行为都和正常调试一样
