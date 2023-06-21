# C\#开发环境配置

## 1. 安装 .NET SDK

* [官方下载网址](https://dotnet.microsoft.com/en-us/learn/dotnet/hello-world-tutorial/install)
* 按照安装程序指引安装即可

## 2. VS Code 安装插件

* 插件名：`C#`发布者是Microsoft
  > 该插件是基础语法插件
* 插件名：`C# Dev Kit`发布者是Microsoft
  > 该插件能够进行语法纠错、智能补全等等功能
  > 但注意该插件需要使用`科学上网`技巧来下载安装文件

## 3. 创建运行 C\# 文件

* 在终端输入`dotnet new console`即可创建一个初始文件模板
* 在终端输入`dotnet run`即可运行.cs文件
* 如需编译配置json和调试配置json，可命令 VS Code 自动生成
  `Ctrl + Shift + P`选择`.Net:Generate Assets for build and Debug`
