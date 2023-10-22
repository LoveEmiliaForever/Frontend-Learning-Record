# Java 开发环境配置

## 1. 下载安装 JDK

* [JDK下载官网](https://www.oracle.com/java/technologies/downloads/)
* 配置环境变量
  * 添加`你的安装路径\jdk-版本号\`到系统变量内，并命名为`JAVA_HOME`
  * 添加`%JAVA_HOME%\bin`到用户变量的`Path`内
* 检查是否安装成功：终端输入`java`

## 2. VS Code 安装插件

* `Debugger for Java`发布者`Microsoft`
* `Language Support for Java(TM) by Red Hat`发布者`RedHat`
* `Extension Pack for Java`发布者`Microsoft`
  
## 3. 测试Java文件运行

`HelloWorld.java`文件如下

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```
