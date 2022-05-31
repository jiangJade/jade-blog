---
title: fetch和axios的区别
date: 2019-2-16
tags:
 - js
categories:
 - js
---

## 1 fetch
&emsp;&emsp;fetch是浏览器提供的api,axios是社区封装的一个组件

&emsp;&emsp;fetch是一个底层的api,你可以把它考虑成原生的XHP，所以使用起来并不是那个舒服，需要封装。

&emsp;&emsp;axios 既提供了并发的封装，也没有fetch的各种问题，二体积也较小，首选。

### 1 fetch优势
&emsp;&emsp;1.语法简洁，更加语义化
&emsp;&emsp;2.基于标准Promise实现，支持async/await
&emsp;&emsp;3.更加底层，提供的api丰富（request,response)
&emsp;&emsp;4.脱离了XHR,是ES规范里新的实现方式

### 2 fetch存在的问题
&emsp;&emsp;1.fetch是一个底层次的api，使用起来不是那么舒服,只对网络请求报错，对400,500都当做成功的请求， 服务器返回400,500错误码时并不会reject,只有网络错误这些导致请求不能完成时，fetch才会被reject
&emsp;&emsp;2. fetch默认不会带cookie, 需要添加配置项fetch(url, {credentials:'include'})
&emsp;&emsp;3.fetch不支持abort,不支持超时控制，使用setTimeout以及Promise.reject实现超时控制并不能阻止请求过程继续在后台运行，造成了流量浪费
&emsp;&emsp;4. fetch没有办法原生检测请求的进度，而XHR可以
```
fetch('https://example.com/movies.json')// 第二个参数指定post 和get
.then((res) => res.json())
.then((data) => console.log(data));
```

### 2 axios
&emsp;&emsp;axios是一个基于Promise用于浏览器和nodejs的HTTP客户端，本质上是对原生XHR的封装，只不过他是Promise的 实现版本，符合最新的es规范，他的特点
:::tip
    1.从浏览器中创建XMLHttpRequest
    2.支持Promise api
    3.客户端支持CSRF
    4.提供了一些并发请求的接口
    5.从node.js创建http请求
    6.拦截请求和响应
    7.转换请求和响应数据
    8.取消请求
    9.自动转换JSON数据
:::