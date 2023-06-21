# C/C++ 开发环境配置

## 1. 安装gcc、g++、gdb

* 使用MSYS2安装一系列组件
  * [下载MSYS2的installer](https://www.msys2.org/)
  * 安装MSYS2注意**路径内不能有除英文、数字、路径符号外的其它字符**
  * 安装时要关闭VPN等工具以免影响数据库更新

  > 如果卡在更新数据库步骤超过15分钟，可以尝试以下步骤
  >
  > * 退出安装程序
  > * 重启电脑
  > * 彻底删除安装路径的文件
  > * 重新运行安装程序

* 使用以下命令安装编译、调试工具

  ```cmd
    $ pacman -S tar make
    $ pacman -S mingw-w64-ucrt-x86_64-toolchain
    $ pacman -Syu
  ```

* 添加`安装路径\ucrt64\bin`到环境变量->用户变量->Path中
* 检查安装是否成功，在终端输入

  ```cmd
    gcc --version
    g++ --version
    gdb --version
  ```

## 2. VS Code 安装插件`C/C++`

* 在侧栏的插件管理与插件市场处搜索`C/C++`，它的发布者是Microsoft
* 确认无误后将它安装即可

## 3. 运行、调试C/C++文件

* Hello-World.cpp（文件路径不要包含中文）

  ```cpp
    #include <bits/stdc++.h>

    using namespace std;
    
    int main()
    {
        cout << "Hello, world!" << endl;

        return 0;
    }
  ```

* 运行程序
  * 点击运行`hello-world.cpp`文件
  * 需要选择编译器，为方便使用，选择`g++`编译即可
  * VS Code将自动创建`tasks.json`文件，放于隐藏文件夹`.vscode`中，`tasks.json`是存储编译配置的文件（可自定义）
  * 程序运行结果将`tasks.json`的要求以额外的终端显示或显示在VS Code集成终端内
* 调试程序
  * 点击调试`hello-world.cpp`文件
  * 依旧选择`g++`编译器
  * VS Code将自动创建`launch.json`文件，并放在`.vscode`中，`launch.json`是存储调试配置的文件（可自定义）
  * 程序将根据`launch.json`要求调试程序
