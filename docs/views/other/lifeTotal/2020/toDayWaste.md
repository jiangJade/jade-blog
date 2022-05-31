---
title: 生活总结
date: 2020-12-20
tags:
 - js
categories:
 - js
---

:::tip
一个二维码下载引发的血案
:::

1 使用html2canvas
html2canvas库可以将传入的dome截图下载，结果二维码直接渲染在下载界面了

2 a标签+download 
这个方式会跨越，如果不加body的话图片也会直接渲染在界面上

3 saveAs
库连接https://github.com/eligrey/FileSaver.js

最终测试出二维码连接没有允许跨域， 下载的二维码大小为1kb，下载接口报403