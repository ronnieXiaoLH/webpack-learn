# gulp

## 什么是gulp

A toolkit to automate & enhance your workflow
一个工具包，可以帮你自动化和增加你的工作流

## gulp 和 webpack

1. gulp的核心理念是 task runner
  - 可以定义自己的一些列任务，等待任务被执行
  - 基于文件 Stream 的构建流
  - 我们可以使用gulp的插件体系来完成某些任务

2. webpack的核心理念是module bundler
  - webpack 是一个模块化打包工具
  - 可以使用各种各样的 loader 来加载不同的模块
  - 可以使用各种各样的插件在 webpack 打包的生命周期完成其他的任务

3. gulp 相对于 webpack 的优缺点
  - gulp 相对于 webpack 思想更加简单、易用，更适合编写一些自动化的任务
  - 相对于大型项目(Vue,React,Angular)并不会使用gulp来构建，gulp是不支持模块化的

## gulp 创建任务

- 每个 gulp 任务都是一个异步的 Javascript 函数：
  + 此函数可以接受一个 callback 作为参数，调用 callback 用于结束任务
  + 或者是返回一个 stream、promise、event emitter、child process、observable类型的函数

- 任务可以是 public 或 private 类型的：
  + 公开任务(Public tasks): 从 gulpfile 文件中被导出，可以通过 gulp 命令被调用
  + 私有任务(Private tasks): 被设计为在内部使用，通常作为 series() 或 parallel() 组合的组成部分

## 任务组合 series 和 parallel

- series: 串行任务组合
- parallel: 并行任务组合

它们都可以接受任意数量的任务函数或者已经组合的操作

## gulp 读取和写入文件

gulp 暴露了 src() 和 dest() 方法用于处理计算机上存放的文件：
  - src() 接收参数，并从文件系统中读取文件，生成一个Node流(stream)，它将所有匹配的文件读取到内存中，并通过流(stream)进行处理
  - 由src()产生的流(stream)应当从任务(task函数)中返回，并发出异步完成的信号
  - dest()接受一个输出目录作为参数，并且它还会产生一个Node流(stream)，通过该流将内容输出到文件中

## glob 文件匹配

- src() 方法接受一个 glob 字符串或由多个字符串组成的数组作为参数，用于确定哪些文件需要被操作
- glob 或 glob 数组必须至少匹配到一个匹配项，否则 src() 会报错
- glob 的匹配规则如下：
  1. 一个 * 号：在一个字符串中，匹配任意数量的字符，包括零个字符
  2. 两个 * 号：在多个字符串匹配中匹配任意数量的字符串，通常用在匹配目录下的文件
  3. 取反 ！：第一个 glob 匹配到的一组匹配项，然后后面的取反 glob 删除这些匹配项中的一部分