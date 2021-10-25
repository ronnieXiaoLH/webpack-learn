# rollup

## rollup的定义

- Rollup is s module bundler for JavaScript which compiles small pieses of code into something larger and more complex, such as a library or application

- Rollup 是一个 JavaScript 的模块化打包工具，可以帮助我们编译小的代码到一个大的，复杂的代码，比如一个库或者应用

## rollup 与 webpack 的对比

- rollup 也是一个模块化打包工具，但是 rollup 主要针对 ES Module 进行打包的
- 另外 webpack 通常可以通过各种 loader 处理各种各样的文件，以及处理它们的依赖关系
- rollup 更多的时候是专注于处理 JavaScript 代码的(当然也可以处理 css font vue等文件)
- rollup 的配置和理念相对于 webpack 来说更加的简洁和容易理解
- 在早期 webpack 不支持 tree shaking 时，rolluo 更具有优势

目前 rollup 和 webpack 分别应用在什么场景呢？

- 通常实际项目中，我们都会使用 webpack 
- 在对库文件进行打包时，我们通常会用 rollup(比如 vue react dayjs源码都是用rollup打包的)
