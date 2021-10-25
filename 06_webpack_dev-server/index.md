## 目前存在的问题

1. 问题一：每次修改了代码都需要重新 build 打包

解决方案一：

  1. watch 来监听文件的变化
  2. 通过 live-server 插件提供本地服务（当文件变化时，自动刷新页面）

这种方案效率不是特别高：

  1. 对所有的源代码都进行编译
  2. 编译成功后，都会生成新的文件（文件操作：file system）
  3. live-server 属于 VSCode 的插件，并不属于 webpack 提供的解决方案
  4. live-server 每次都会刷新整个页面

解决方案二：

  - webpack-dev-server

  这种方案效率更高：

    1. webpack 内部使用 memfs 生成文件存储在内存中，读取文件更快
    2. 配置 HMR(hot module replacement) 模块热更新，可以不用每次都刷新整个页面

解决方案三：

  - webpack-dev-middleware

  webpack-dev-server 是通过 express 启动了一个本地服务，webpack-dev-middleware 提供了更多可配置，可以使用不同的方式(express/koa...)开启本地服务

  ## HMR(Hot Module Replacement)

  1. HMR 的原理是什么呢？如何可以做到只更新一个模块中的内容呢？

  webpack-dev-server 会创建两个服务：提供静态资源的服务(express)和Socket服务(net.socket)
  express server 负责直接提供静态资源的服务(打包后的资源直接被浏览器请求和解析)

  2. HMR Socket Server 是一个 socket 长连接

    - 长连接有一个好处是建立连接后双方可以通信(服务器可以主动发送文件到客户端)
    - 当服务器监听到对应的模块发生变化后，会生成两个文件 .json文件(mainfest) 和 .js文件(update chunk)
    - 通过长连接，可以直接将这两个文件主动发送给客户端(浏览器)
    - 浏览器拿到这两个文件后，通过 HMR runtime 机制，加载这两个文件，并且针对修改的模块进行更新

## localhost 和 0.0.0.0 的区别：

  - localhost：本质是一个域名，通常情况下会被解析成 127.0.0.1
  - 127.0.0.1：回环地址(Loop Back Address)，表达的意思其实是我们主机自己发出去的包，直接被自己接收
      + 正常的数据包：应用层 - 传输层 - 网络层 - 数据链路层 - 物理层
      + 回环地址是在网络层就直接获取到了，不会经过数据链路层和物理层
      + 比如我们监听 127.0.0.1 时，在同一个网段下的主机中，通过 ip 地址是不能访问的
  - 0.0.0.0：监听 IPV4 上所有的地址，再根据端口找到不同的应用程序
      + 比如我们监听 0.0.0.0 时，在同一网段下的主机中，通过 ip 地址是可以访问的