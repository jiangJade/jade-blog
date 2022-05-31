---
title: parseInt的理解
date: 2018-9-18
tags:
 - js
categories:
 - js
---

parseInt的语法如下：parseInt(string, radix);
参数string的表示要解析的字符串，也可以是一个对象，会自动调用对象的toString函数得到要解析的字符串.

parseInt的第二个参数，可以指定要解析的数字的基数.
:::tip
注意该值介于 2 ~ 36 之间，如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。比如下面的代码，结果为8，这样可以很方便的把其他的进制的数字转换为10进制的数字：
:::

当参数 radix 的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。
举例，如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。

:::tip
只有字符串中的第一个数字会被返回。 什么意思呢，如果输入的字符串是"123abc","123,123"，那么结果是123，parseInt方法会自动忽略后面的非数字部分。
:::

![call](./images/parseInt.png)

