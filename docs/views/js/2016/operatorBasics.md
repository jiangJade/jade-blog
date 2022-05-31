---
title: js运算符的理解
date: 2016-2-15
tags:
  - js
categories:
  - js
---

::: tip + - \* % 运算符
:::

1 为加号时
String 和其他类型相加时，其他类型会被转为 String;其他情况都转换为 Number 类型。
::: warning
undefined 转换为 Number 是 'NaN',任何 Number 与 NaN 相加都是 NaN。
:::

2 其他运算符
其他运算符时，基本类型都转换为 Number, String 类型的带有字符的；比如：'1a', 'a1'进行运算时结果为 NaN，与 undefined 一样

```
    undefined * 2 = NaN
```

::: tip
(1) NaN 不与任何值相等，包括自身；所以判断一个值是否为 NaN, 即用 "!==" 即可。
(2) 转换为 Boolean 类型为 false 的有：null, 0, "", undefined, NaN, false

```
    console.log('转换为Boolean类型为false的有', !!null, !!0, !!"", !!undefined, !!NaN, !!false)
    转换为Boolean类型为false的有 false false false false false false
```

    (3) number 与 parseInt 都可以将对象转换为Number类型，Number函数要比parseInt函数严格很多,基本上,只要有一个字符无法转换成数字,整个字符串就会被转换为NaN

```
    console.log(Number('2a'), parseInt('a4'), parseInt('3ab2'))
    NaN NaN 3
```

:::

3 使用^切换变量 0 或 1

```
    // --- before ---
    // if判断
    if(toggle) {
        toggle = 0;
    }else {
        toggle = 1;
    }
    // 三目运算
    toggle = toggle ? 0 : 1;

    // --- after ---
    toggle ^= 1;
```

4 ||

该运算符从左到右进行运算，如果左侧已满足真值，后面的逻辑不会被触发。并且返回改真值本身

5 &&
与的运算优先级比或高，当两个值都为真才返回真值，如果操作数是真，则返回操作数本身，操作数不是布尔值，则返回值可能不是布尔值
