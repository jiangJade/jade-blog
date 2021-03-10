---
title: react diff的理解
date: 2018-9-2
tags:
 - react
categories:
 - react
---

## 1 如何将复杂度为O^3降维到O(n)?
只比较同级节点，因为dom节点跨层及的移动很少；做了一些很小的牺牲

## 2 如何比较dom节点的更新？

### 先比较根节点
先比较根节点的标签类型，如果标签类型不同就将以前的dom节点删除（包括state),重新构建新的dom节点。
如果新根节点标签类型相同则只更新变更的属性，然后递归更新子节点

### 比较同一组件
先保证组件实例不变，这样可以在不同状态保证state一样，将更新的props更新到组件，会调用UNSAFE_COMPONENTWILLRECEIVEPROPS和UNSAFE_componentWillUpdate以及componentDidUpdate和render
，diff 算法将在之前的结果以及新的结果中进行递归

### key的作用之一
当两个列表组件进行diff时，如果只是在新列表组件前面插入了一个新节点，那么react并知道是插入新节点，所以更新开销就会比较大，所以引入了key。比较key的变化。

### 为什么不推荐使用数组索引作为key
当基于下标的组件进行重新排序时，组件 state 可能会遇到一些问题。由于组件实例是基于它们的 key 来决定是否更新以及复用，如果 key 是一个下标，那么修改顺序时会修改当前的 key，导致非受控组件的 state（比如输入框）可能相互篡改，会出现无法预期的变动。