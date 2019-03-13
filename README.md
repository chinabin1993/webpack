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
1. [entry](#demo1-entry)
1. [output](#demo2-output)





## webpack概念

webpack是一个现代JavaScript应用程序的静态模块打包器。当webpack处理我们需要的程序时，会递归的构建一个依赖关系图。
简单来说，webpack是一个打包器，打包过程中，会把需要的依赖按照一定的模式来形成一个依赖图。

## demo1-entry

入口起点是让webpack指定某个（某些）文件作为构建依赖的起点。也就是说该文件为主依赖文件。进入入口起点之后，webpack会自动找到有哪些文件是入口起点所依赖的。这个过程不在学习范围内。

webpack通过entry来配置入口起点，入口起点可以是多个，或者一个。相对应的入口起点有多种配置方式：

##### 最简单的单个入口起点
```javascript
let config = {

}
```
