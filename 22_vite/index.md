# vite

## vite的构造

- 一个开发服务器(connect)，它是基于原生 ES 模块提供了丰富的内建功能，HMR的速度非常快速
- 一套构建指令，它使用 rollup 打开我们的代码，并且它是预配置的，可以输出生成环境优化过的静态资源

## ESBuild的特点

- 超快的构建速度，并且不需要缓存
- 支持ES6 和 CommonJS的模块化
- 支持ES6 的 Tree Shaking
- 支持Go、JavaScript的API
- 支持TypeScript、JSX等语法编译
- 支持SourceMap
- 支持代码压缩
- 支持扩展其他插件

## ESBuild为什么这么快呢？

- 使用Go语言编写的，可以直接转换成机器代码，而无需经过字节码
- ESBuild可以充分利用CPU的多内核，尽可能让它们饱和运行
- ESBuild的所有内容都是从零编写的，而不是使用第三方，所以从一开始就可以考虑各种性能问题