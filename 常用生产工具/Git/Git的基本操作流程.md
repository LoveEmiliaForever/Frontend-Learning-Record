# Git的基本操作

## 前期准备
* 注册`github`账号并创建一个`repositoriy`名为`Frontend-Learning-Record`
* 下载安装`Git`到本地

## 克隆仓库到本地
* 复制选定`repository`的链接如：`HTTPS`、`SSH`链接
* 使用`git clone`命令克隆远程仓库到本地
```git
git clone https://github.com/LoveEmiliaForever/Frontend-Learning-Record.git
```

## 配置本地git个人信息
* 使用`git config --global user.name "GitHub-Name"` 和 `git config --global user.email "GitHub-Email"`配置信息
```git
git config --global user.name "My-Name"
git config --global user.email "My-Email"
```

## 缓存区文件添加与删除
* 使用`git add filename`添加文件到缓存区
```git
git add Git学习笔记.md
```
* 使用`git reset HEAD filename`从缓存区删除文件
```git
git reset HEAD Git学习笔记.md
```

## 查看距上次提交后文件的变化情况（缓存区对比已提交）
* `git status`查看详细信息
```git
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   常用生产工具/Git/Git的基本操作流程.md
        new file:   常用生产工具/Git学习笔记.md  
```
* `git status -s`查看简略信息
```git
$ git status -s
A  常用生产工具/Git/Git的基本操作流程.md
A  常用生产工具/Git学习笔记.md
```
* **中文变字节码的解决方法**
```git
git config --global core.quotepath false
```

## 查看相较于缓存区的最近改动（本地对比缓存区）
* `git diff`
> 已变动的信息下，红色`-`代表缓存区内文件，绿色`+`代表本地文件
> 而新增文件则以语义块包裹并放在相应位置

```git
-## 查看距上次提交后文件的变化情况
+## 查看距上次提交后文件的变化情况（缓存区对比已提交）
 * `git status`查看详细信息
-* `git status -s`查看简略信息
\ No newline at end of file
+* `git status -s`查看简略信息
+* **中文变字节码的解决方法**
+  ```git
+    git config --global core.quotepath false
+  ```
+
+## 查看相较于缓存区的最近改动（本地对比缓存区）
+* `git diff`
\ No newline at end of file
```

## 本地分支操作（新建、查看、切换、删除、复合操作）
* `git branch newBranch`
> 新建了一个名为 newBranch 的分支
> 新建分支与原分支内容是一样的
* `git branch`
> 查看当前的所有分支
* `git checkout newBranch`
> 切换到名为 newBranch 的分支
* `git branch -d/-D newBranch`
> 删除或强制删除 newBranch 分支
> 不能删除所处分支、需要切换到主分支再删除
* `git checkout -b newBranch`
> 创建并切换到 newBranch 分支

## 分支合并与冲突解决
* `git merge newBranch`
> 将 newBranch 分支合并到现在所处分支
> ```git
> git branch   
>  * main
>    newBranch
> git merge newBranch
> git branch -d newBranch
> git branch
>  * main
> ```
> newBranch分支合并到了main，然后我们删掉了newBranch
* **合并冲突解决**
> 两个分支对同一个文件做出了不同的修改后进行合并会产生冲突
> 具体可以使用`git status`查看哪个文件有冲突`显示为 both modified`
> 对冲突文件要进行手动处理，git会给冲突部分添加特殊符号标记
> 处理完冲突后进行`git commit -m`即可

## 上传操作
* `git commit -m "additional message"`
> 将缓存区的文件写入到本地仓库中
> 日志需要写清楚

## 远程仓库拉取合并
* `git pull origin main-remote:main-local`
> 从远程主机`origin`拉取`main-remote`分支并与本地`main-local`分支合并
> 如果与当前所处本地分支合并则冒号及其后面可不写

## 推流到远程仓库
* `git push origin main-local:main-remote`
> 将本地分支 main-local 上传到远程分支 main-remote 并合并
> 如果两者一样则不用写冒号及其后面
> 如远程分支不存在则会创建出来