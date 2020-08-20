---
title: 装饰器
date: 2019-1-23
tags:
 - js
categories:
 - js
---

## 1 什么是装饰器

装饰器是一个函数  它可以给类 或者属性方法 加上一些其他东西

```
function test(target) {
    target.key = '测试;
}

@test() 

class My {

}

console.log(My.key)
```

## 2 装饰器作用

可以复用代码 写法精简