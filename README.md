# webpack
webpack学习笔记

这里主要是自己学习一些webpack的相关笔记总结，进可能的详细记录一些webpack的相关知识。以及相关的demo。

#### 流程
收先确保电脑上已经安装了webpack，webpack从4.0开始，需要全局安装webpack-cli
克隆代码到本地，
```bash
$ git clone https://github.com/chinabin1993/webpack.git
```
进入相应文件夹demo
```bash
$ cd demo1-entry
```
运行webpack
```bash
$ npm run dev
```

### Index
1. [webpack概念](#webpack概念)
1. [entry](#demo1-单入口文件)
2. [Multiple entry](#demo2-多个入口文件)
3. [output](#demo3-输出)





## webpack概念

webpack是一个现代JavaScript应用程序的静态模块打包器。当webpack处理我们需要的程序时，会递归的构建一个依赖关系图。
简单来说，webpack是一个打包器，打包过程中，会把需要的依赖按照一定的模式来形成一个依赖图。

## demo1-单入口文件

入口起点是让webpack指定某个（某些）文件作为构建依赖的起点。也就是说该文件为主依赖文件。进入入口起点之后，webpack会自动找到有哪些文件是入口起点所依赖的。这个过程不在学习范围内。

webpack通过entry来配置入口起点，入口起点可以是多个，或者一个。相对应的入口起点有多种配置方式：

##### 最简单的单个入口起点
我们假设使用`main.js`作为我们的入口文件
```javascript
document.write('this is entry');
```
我们设置输出文件名为`bundle.js`
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>demo1-entry</title>
</head>
<body>
  <script src="bundle.js"></script>
</body>
</html>
```
接着在`webpack.config.js`中，配置入口
**注意：从webpack4.0开始，必须要指定mode**
```javascript
let config = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development'
}
module.exports = config;
```
```bash
$ npm run dev
```
## demo2-多个入口文件
在`main1.js`和`main2.js`中
```javascript
document.write('this is main1.js');
document.write('this is main2.js');
```
在`index.html`中
```html
<!DOCTYPE html>
<html>
<body>
  <script src="bundle1.js"></script>
  <script src="bundle2.js"></script>
</body>
</html>
```
在`webpack.config.js`中：
**这里`filename: '[name].js'`**对应的是entry对象的键值。
```javascript
let config = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js'
  },
  mode: 'development'
}
module.exports = config;
```
最后执行
```bash
$ npm run dev
```
### webpack的entry注意事项
```javascript
let config = {
  entry: './main.js'
}
module.exports = config;
```
entry属性的单个入口语法，其实是以下代码的简写
```javascript
let config = {
  entry: {
    main: './main.js'
  }
}
```
如果是多个入口的情况可以写成数组形式，也可以写成对象的格式
```javascript
let config = {
  entry: ['./main.js','./main1.js',...]
}
```
```javascript
let config = {
  entry: {
    index: './main.js',
    index1: './main1.js',
    ...
  }
}
```
使用数组以及刚开始时最简单的格式的情况，**在扩展配置上有失灵活性**。对象的方式虽然书写相对复杂，但是这是应用程序中定义入口的最可扩展的方式。
> **可扩展**是指可重用并且可以与其他配置组合使用，是一种流行的技术，用于将关注点(concern)从环境(environment)、构建目标(build target)、运行时(runtime)中分离。然后使用专门的工具（如 webpack-merge）将它们合并。

## demo3-输出
配置output选项可以控制webpack如何向硬盘写入编译文件。即使存在了多个入口文件，也只能存在一个出口配置。也就是说，output的filename键名是唯一的。

在webpack中配置output，基本内容包括以下两点：
* filename 输出文件的文件名
* path 目标输出的绝对路径
  
例如以下`webpack.config.js`代码：
```javascript
let path = require('path');
  module.exports = {
    output: {
      filename: 'bundle.js',
      path: '/assets'
    }
  }
```
如果是多个入口的情况，则应该使用占位符来确保每个文件具有唯一的名称。
```javascript
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}
// 写入到硬盘：./dist/app.js, ./dist/search.js
```