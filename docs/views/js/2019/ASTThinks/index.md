---
title: AST语法树
date: 2019-10-15
tags:
  - js
categories:
  - js
---

## 1 分词

分词： 使用正则或有限状态机。分词不关心语法

```
<h1 attribute="name">22</h1>

上面代码分词过程
/**
<
h1
attribute
=
name
>
22
<
/
h1
>
*/

<!-- 得到token数组 -->

const token = [
    {
        type: 'Puncturator', value: '<'
    }
]
```

## 2 token 转换成 AST 语法树

执行深度优先遍历

## 3 转换

每个对象都有一个 type 属性
