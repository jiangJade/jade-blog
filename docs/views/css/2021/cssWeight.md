---
title: css权重
date: 2021-03-8
tags:
  - css
categories:
  - css
---

## 请你讲一讲 CSS 的权重和优先级

### 权重

从 0 开始，一个行内样式+1000，一个 id 选择器+100，一个属性选择器、class 或者伪类+10，一个元素选择器，或者伪元素+1，通配符+0

### 优先级

权重相同，写在后面的覆盖前面的
使用 !important 达到最大优先级，都使用 !important 时，权重大的优先级高

### CSS 盒模型

CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括：外边距（margin）、边框（border）、内边距（padding）、实际内容（content）四个属性。CSS 盒模型：标准模型 + IE 模型

标准盒子模型：宽度=内容的宽度（content）+ border + padding

低版本 IE 盒子模型：宽度=内容宽度（content+border+padding），如何设置成 IE 盒子模型:
