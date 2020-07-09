---
title: float和position理解
date: 2018-06-23
tags:
 - css
categories:
 - css
---


## float
    float会改变文档流，但是它不会让元素"上浮"到另一个z-index层，它仍然让元素在z-index: 0层排列。
## position
    position: relative和position: absolute都可以改变元素在文档流中的位置, 设置了position: relative和position: absolute都可以让元素激活left,right,top,bottom和z-index属性。网页虽然看起来是平面的二维结构，但它是有z轴的, z轴的大小由z-index控制。默认情况下，所有元素都是在z-index：0 这一层。
    元素根据自己的display类型、长宽、内外边距等属性顺序排列在z-index: 0这一层，这就是文档流。
    ::: tip
     position: relative不同的是会保留自己在z-index: 0层的占位，left,right,top,bottom是相对于自己在z-index: 0的位置，虽然它的实际位置可能因为设置了left,right,top,bottom值而偏离原来在文档流中的位置，但对其他仍然在z-index：0层的元素位置不会产生影响
    :::
## 居中
1. 水平居中
    （1）文本，图片等行内元素的水平居中
    给父元素设置text-align: center可以实现文本，图片等行内元素的水平居中。
    （2）确定宽度的块级元素
    可以给元素设置margin: 0 auto;