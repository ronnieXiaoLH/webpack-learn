## 什么是 HTTP 压缩？

HTTP 压缩是一种内置在服务器和客户端之间的，以改进传输速度和带宽利用率的方式

## HTTP 压缩的流程是什么？

1. HTTP 数据在服务器发送前就已经被压缩了(可以在webpack中完成)
2. 兼容的浏览器在向服务器发送请求时，会告知浏览器自己支持哪些压缩格式(Accept-encoding: gzip,deflate)
3. 服务器在浏览器支持的压缩格式下，直接返回对应的压缩后的文件，并且在响应头中告知浏览器(Content-encoding: gzip)

## 目前的压缩格式

- compress: UNIX 的 "compress" 程序的方法(历史性的原因，不推荐大多数应用使用)
- deflate: 基于 defalte 算法(定义于RFC1951)的压缩，使用 zlib 数据格式的封装
- gzip: GUN zip 格式(定义于RFC1952)，是目前使用比较广泛的一种压缩算法
- br: 一种新的开源压缩算法，专为HTTP内容的编码而设计