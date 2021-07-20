---
title: 生活总结
date: 2021-07-20
tags:
  - js
categories:
  - js
---

### encodeURIComponent decodeURIComponent encodeURI decodeURI

最近项目中用到 encodeURIComponent, 起初不知道他是做什么的踩了很多坑。

事情是这样， 小程序需要跳转到一个外部的界面，使用 WebView 标签，跳转链接有一长串的参数。

后端将参数编码，前端获取到链接后存到 state，结果带加号的字符被编码了。

```
编码前的：3DSee+You+Again%26memo%

编码后的：DSee%2BYou%2BAgain%2526memo%

```

### 几个函数的对比

encodeURIComponent： 把字符串编码为 URI 组件；不编码字符有 71 个：!， '，(，)，\*，-，.，\_，~，0-9，a-z，A-Z

decodeURIComponent：解码一个编码的 URI 组件

encodeURI：把字符串编码为 URI。主要用于直接赋值给地址栏时候：location.href=encodeURI("http://www.baidu.com/zhangsan/lisi");
不编码字符有 82 个：!，#，\$，&，'，(，)，\*，+，,，-，.，/，:，;，=，?，@，\_，~，0-9，a-z，A-Z

decodeURI：解码某个编码的 URI。
