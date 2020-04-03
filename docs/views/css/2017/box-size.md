---
title: box-size的理解
date: 2017-09-21
tags:
 - css
categories:
 - css
---


### 1 box-size: content-box; W3C标准盒子
    元素的width和height决定元素的内容，padding和border的改变不能改变width和height的值。
::: tip
但是：元素总高度是heigtht + border + padding
:::

### 2 box-size: border-box; IE盒模型子
    border-box就是用元素内容和padding和border一起决定width和height，啥意识，就是width和元素的内容以及padding和border相互制约。下面用几句话简洁解释一下。

    width和height改变，paddign和border不改变时，元素内容的宽高会发生相应的改变，改变的值就是width和height改变的值。
    paddign和border改变，width和height不改变时，元素内容的宽高会发生相应的改变，改变的值就是width和height改变的值。
    元素内容的宽高等于：元素的宽高 - （ border + padding )