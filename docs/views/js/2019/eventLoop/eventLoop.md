---
title: js事件循环机制
date: 2019-6-6
tags:
 - js
categories:
 - js
---

## 1 js循环机制是什么？

因为js是单线程执行，单线程就会产生阻塞，当一个任务很耗时其他任务必须等待他执行结束。

为了提高cpu利用效率和用户体验以及操作代码简便。js提出了同步和异步，细分就是微任务和宏任务。

先执行宏任务，如果遇到回调函数，则将回调函数放到回调队列中，遇到微任务则立即执行，微任务中的回调函数会被添加到微任务回调队列中；同步代码执行完毕后会立即执行所有微任务队列，然后取出一个宏任务继续执行，宏任务执行完后会继续检查微任务队列，并立即执行微任务。一直重复上面的操作，知道所有代码执行完。

## 2 宏任务有那些？

:::tip
  整块js代码  setTimeout setInterval Ajax requestAnimationFrame
:::

## 3 微任务有哪些？

:::tip
 Promise await
:::