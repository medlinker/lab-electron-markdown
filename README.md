# <img src="https://cloud.githubusercontent.com/assets/378023/15172388/b2b81950-1790-11e6-9a7c-ccc39912bb3a.png" width="60px" align="center"> 基于electron框架开发的一个简单markdown桌面app，意在对于electron的使用学习。

<img src="https://github.com/medlinker/lab-electron-markdown/blob/master/assets/img/product.png" width="600px">

默认一开始展示几个常见的markdown语法编译后的样式

## 什么是electron

electron是一个可以使用javascript,html,css构建跨平台桌面引用的app框架。[Electron官网](http://electron.atom.io). 支持的平台有： Windows, OS X and Linux operating systems.

## 使用

请先下载并安装 [Node.js](https://nodejs.org) 在你的电脑上.

```bash
$ git clone https://github.com/medlinker/lab-electron-markdown.git
$ cd lab-electron-markdown
$ npm install
$ npm start
```

如果想打卡开发者工具来调试，可以运行以下命令来代替npm start:

```bash
$ npm run dev
```

## 参考文献

markdown的相关功能实现，感谢以下github资源：

1. [markdown editor](https://github.com/lepture/editor) 提供了一个可视的markdown编辑器。该编辑器正在开发中，但已经提供了一些最基本的功能.
2. [markdown语法编译器](https://github.com/evilstreak/markdown-js) 一个非常好用的api，仅仅一句话便可以将markdown语法编译成html格式。

