## 模块化原理

### CommonJS模块化实现原理

1. 定义一个对象，以模块路径为属性，以函数为值
2. 定义一个对象作为缓存
3. 定义一个 `__webpack_require__` 函数，如果模块已经加载过，直接从缓存中去，如果模块没有加载过，从对象中取，并将取到的内容存到缓存对象中
4. 调用函数 `__webpack_require__`

### EsModule模块化实现原理

1. 定义一个 `__webpack_modules__` 对象，以模块路径为 key，以函数为 value
2. 定义一个 `__webpack_module_cache__` 对象作为缓存
3. 定义一个 `__webpack_require__` 函数
4. 定义了三个立即执行函数，分别给 `__webpack_require__` 函数对象挂载了 d,o,r 三个属性，这些属性对应的值都是函数
5. d 属性对应的函数的作用是代理；o 属性对应的函数的作用是判断属性是否是一个对象的自有属性；r 属性对应的函数的主要作用是给 `module.exports` 设置属性 `__esModule`，且值为 `{ value: true }`，即给 esModule 的模块做一个标记