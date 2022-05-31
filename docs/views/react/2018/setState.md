---
title: react setState
date: 2018-9-16
tags:
  - react
categories:
  - react
---

1 setState 什么时候是同步什么时候是异步

这里的同步和异步不是真的同步和异步，多个 setState 调用时会合并，批量调用处理

在 react 合成事件以及生命周期中是异步

在 react 事件控制之外，比如原生事件，以及 setTimeout,setInterval 中是同步

```
  const num1 = [1,2,3];
  const num2 = [2,3,4];
  /*
  * 先判断两个数组最大值的大小  因为他们都是有序数组
  */
```
