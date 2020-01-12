## 创建自己的脚手架工具

_因为本项目工具还在完善中，所以还不能通过 `npm install lee-cli`命令安装，后续发布到npm上可以实现_

### 预计实现的功能
+  实现可以在命令行中直接运行代码 
+ 实现可以用npm安装 npm install `lee-cli -g`
+ 根据模板初始化项目 `lee-cli create project-name`
+ 模板库代码拉取初始化配置文件 `lee-cli config set repo repo-name`


### 本项目工具cli已经实现

```
 lee-cli create projectName
```

### 本项目中需要很多的模块

+ commander.js，可以自动的解析命令和参数，用于处理用户输入的命令。
+ download-git-repo，下载并提取 git 仓库，用于下载项目模板。
+ inquirer.js，通用的命令行用户界面集合，用于和用户进行交互。
+ handlebars.js，模板引擎，将用户提交的信息动态填充到文件中。---暂时还没有用到
+ ora，下载过程久的话，可以用于显示下载中的动画效果。
+ chalk，可以给终端的字体加上颜色。
+ log-symbols，可以在终端上显示出 √ 或 × 等的图标。
+ metalsmith ：读取所有文件，实现模板渲染
+ consolidate ：统一模板引擎


### 打包发布到npm
```
  npm unlink
  lee-cli
  npm i lee-cli -g
```

### 需注意

本代码中是针对自己的https://api.github.com/orgs/lxy-cli/repos的组织写的自定义的脚手架，参考价值是代码的思路分析，可将里边的链接地址更换为自己的，如果是简单的项目拷贝只需要更改链接地址，如果是负责的项目需要定制的话可以根据自己的逻辑修改，本项目中的src/utils/common.js 中的方法 copyTempToLoclhost 里边的复杂方法也是针对自己的项目编写的。
当然在一直优化中。。。。