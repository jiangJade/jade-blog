---
title: react合成事件和原生事件区别
date: 2019-4-9
tags:
  - react
categories:
  - react
---

1 React 为什么要实现合成事件？

:::tip
在 JavaScript 中,添加到页面上的事件处理程序数量将会直接关系到页面的整体运行性能,主要有一下几方面的原因

每个函数都是对象,都会占用内存,对象越多,性能越差
必须实现指定所有事件处理程序而导致的 DOM 访问次数,会延迟整个页面的交互就绪时间
:::

2 React 合成事件实现原理

React 合成事件一套机制：React 并不是将 click 事件直接绑定在 dom 上面，而是采用事件冒泡的形式冒泡到 document 上面，然后 React 将事件封装给正式的函数处理运行和处理。

当用户在为 onClick 添加函数时，React 并没有将 Click 时间绑定在 DOM 上面。
而是在 document 处监听所有支持的事件，当事件发生并冒泡至 document 处时，React 将事件内容封装交给中间层 SyntheticEvent（负责所有事件合成）
所以当事件触发的时候，对使用统一的分发函数 dispatchEvent 将指定函数执行。

3 事件委托
