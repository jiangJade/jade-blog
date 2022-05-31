---
title: 自定义实现call函数
date: 2017-6-10
tags:
 - js
categories:
 - js
---
   ![call](./images/call.png)
::: 难点理解
:::
1 this 是谁调用他就指向谁
2 函数内默认的this是Window
3 context.fn = this; 其实就是context.fn = max(){[native code]}
   ![apply](./images/apply.png)