---
title: diff算法多节点更新diff
date: 2020-4-15
tags:
 - react
categories:
 - react
---

上次我们介绍了单一节点的Diff，现在考虑我们有一个FunctionComponent：

## List函数
```
function List () {
  return (
    <ul>
      <li key="0">0</li>
      <li key="1">1</li>
      <li key="2">2</li>
      <li key="3">3</li>
    </ul>
  )
}
```
## JSX对象的children

他的返回值JSX对象的children属性不是单一节点，而是包含四个对象的数组

```
{
  $$typeof: Symbol(react.element),
  key: null,
  props: {
    children: [
      {$$typeof: Symbol(react.element), type: "li", key: "0", ref: null, props: {…}, …}
      {$$typeof: Symbol(react.element), type: "li", key: "1", ref: null, props: {…}, …}
      {$$typeof: Symbol(react.element), type: "li", key: "2", ref: null, props: {…}, …}
      {$$typeof: Symbol(react.element), type: "li", key: "3", ref: null, props: {…}, …}
    ]
  },
  ref: null,
  type: "ul"
}
```
[在这里可以查看对应源码]:https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1352
这种情况下，reconcileChildFibers的newChild参数类型为Array，在reconcileChildFibers函数内部对应如下情况：
:::tip
[在这里可以查看对应源码][在这里可以查看对应源码]
:::

```
if (isArray(newChild)) {
    // 调用 reconcileChildrenArray 处理
    // ...省略
}
```
## 多个节点的Diff
这一节我们来看看，如何处理同级多个节点的Diff。
首先归纳下我们需要处理的情况：

我们以之前代表更新前的JSX对象，之后代表更新后的JSX对象

## 情况1：节点更新

```
// 之前
<ul>
  <li key="0" className="before">0<li>
  <li key="1">1<li>
</ul>

// 之后 情况1 —— 节点属性变化
<ul>
  <li key="0" className="after">0<li>
  <li key="1">1<li>
</ul>

// 之后 情况2 —— 节点类型更新
<ul>
  <div key="0">0<li>
  <li key="1">1<li>
</ul>
```
## 情况2：节点新增或减少
```
// 之前
<ul>
  <li key="0">0<li>
  <li key="1">1<li>
</ul>

// 之后 情况1 —— 新增节点
<ul>
  <li key="0">0<li>
  <li key="1">1<li>
  <li key="2">2<li>
</ul>

// 之后 情况2 —— 删除节点
<ul>
  <li key="1">1<li>
</ul>
```

## 情况3：节点位置变化
```
// 之前
<ul>
  <li key="0">0<li>
  <li key="1">1<li>
</ul>

// 之后
<ul>
  <li key="1">1<li>
  <li key="0">0<li>
</ul>
```

:::tip
同级多个节点的Diff，一定属于以上三种情况中的一种或多种。
:::

## Diff的思路
该如何设计算法呢？如果让我设计一个Diff算法，我首先想到的方案是：

:::tip
判断当前节点的更新属于哪种情况
如果是新增，执行新增逻辑
如果是删除，执行删除逻辑
如果是更新，执行更新逻辑
:::

按这个方案，其实有个隐含的前提——不同操作的优先级是相同的

但是React团队发现，在日常开发中，相较于新增和删除，更新组件发生的频率更高。所以Diff会优先判断当前节点是否属于更新。

:::tip
    注意

    在我们做数组相关的算法题时，经常使用双指针从数组头和尾同时遍历以提高效率，但是这里却不行。

    虽然本次更新的JSX对象 newChildren为数组形式，
    但是和newChildren中每个组件进行比较的是current fiber，
    同级的Fiber节点是由sibling指针链接形成的单链表，即不支持双指针遍历。

    即 newChildren[0]与fiber比较，newChildren[1]与fiber.sibling比较。

    所以无法使用双指针优化。
:::

基于以上原因，Diff算法的整体逻辑会经历两轮遍历：

第一轮遍历：处理更新的节点。

第二轮遍历：处理剩下的不属于更新的节点。

## 第一轮遍历
第一轮遍历步骤如下：

1. let i = 0，遍历newChildren，将newChildren[i]与oldFiber比较，判断DOM节点是否可复用。

2. 如果可复用，i++，继续比较newChildren[i]与oldFiber.sibling，可以复用则继续遍历。

3. 如果不可复用，分两种情况：

.key不同导致不可复用，立即跳出整个遍历，第一轮遍历结束。

.key相同type不同导致不可复用，会将oldFiber标记为DELETION，并继续遍历

4. 如果newChildren遍历完（即i === newChildren.length - 1）或者oldFiber遍历完（即oldFiber.sibling === null），跳出遍历，第一轮遍历结束。

[遍历的源码]:https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L818

:::tip
你可以从这里看到这轮[遍历的源码][遍历的源码]
:::

当遍历结束后，会有两种结果：

## 步骤3跳出的遍历

此时newChildren没有遍历完，oldFiber也没有遍历完。

举个例子，考虑如下代码：

```
// 之前
<li key="0">0</li>
<li key="1">1</li>
<li key="2">2</li>
            
// 之后
<li key="0">0</li>
<li key="2">1</li>
<li key="1">2</li>
```
第一个节点可复用，遍历到key === 2的节点发现key改变，不可复用，跳出遍历，等待第二轮遍历处理。

此时oldFiber剩下key === 1、key === 2未遍历，newChildren剩下key === 2、key === 1未遍历。

## 步骤4跳出的遍历

可能newChildren遍历完，或oldFiber遍历完，或他们同时遍历完。

举个例子，考虑如下代码：
```
// 之前
<li key="0" className="a">0</li>
<li key="1" className="b">1</li>
            
// 之后 情况1 —— newChildren与oldFiber都遍历完
<li key="0" className="aa">0</li>
<li key="1" className="bb">1</li>
            
// 之后 情况2 —— newChildren没遍历完，oldFiber遍历完
// newChildren剩下 key==="2" 未遍历
<li key="0" className="aa">0</li>
<li key="1" className="bb">1</li>
<li key="2" className="cc">2</li>
            
// 之后 情况3 —— newChildren遍历完，oldFiber没遍历完
// oldFiber剩下 key==="1" 未遍历
<li key="0" className="aa">0</li>
```
带着第一轮遍历的结果，我们开始第二轮遍历。

## 第二轮遍历

对于第一轮遍历的结果，我们分别讨论：

[更新]:https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L825

## newChildren与oldFiber同时遍历完
那就是最理想的情况：只需在第一轮遍历进行组件[更新]。此时Diff结束。

## newChildren没遍历完，oldFiber遍历完(新节点插入)

已有的DOM节点都复用了，这时还有新加入的节点，意味着本次更新有新节点插入，我们只需要遍历剩下的newChildren为生成的workInProgress fiber依次标记Placement。

[插入节点的diff]:https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L869

:::tip
[插入节点的diff]源码
:::

## newChildren遍历完，oldFiber没遍历完（有节点被删除）
意味着本次更新比之前的节点数量少，有节点被删除了。所以需要遍历剩下的oldFiber，依次标记Deletion。

[删除节点操作源码]:https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L863

:::tip
你可以在这里看到[删除节点操作源码]
:::

## newChildren与oldFiber都没遍历完

这意味着有节点在这次更新中改变了位置。

这是Diff算法最精髓也是最难懂的部分。我们接下来会重点讲解。

[对应源码]:https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L893

:::tip
在这里可以看到[对应源码]
:::

## 处理移动的节点

由于有节点改变了位置，所以不能再用位置索引i对比前后的节点，那么如何才能将同一个节点在两次更新中对应上呢？

我们需要使用key。

为了快速的找到key对应的oldFiber，我们将所有还未处理的oldFiber存入以key为key，oldFiber为value的Map中。

```
    const existingChildren = mapRemainingChildren(returnFiber, oldFiber);
```

[这里]:https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L890

:::tip
你可以在[这里]看到这段源码逻辑
:::

接下来遍历剩余的newChildren，通过newChildren[i].key就能在existingChildren中找到key相同的oldFiber。

## 标记节点是否移动

既然我们的目标是寻找移动的节点，那么我们需要明确：节点是否移动是以什么为参照物？

我们的参照物是：最后一个可复用的节点在oldFiber中的位置索引（用变量lastPlacedIndex表示）。

由于本次更新中节点是按newChildren的顺序排列。在遍历newChildren过程中，每个遍历到的可复用节点一定是当前遍历到的所有可复用节点中最靠右的那个，即一定在lastPlacedIndex对应的可复用的节点在本次更新中位置的后面。

那么我们只需要比较遍历到的可复用节点在上次更新时是否也在lastPlacedIndex对应的oldFiber后面，就能知道两次更新中这两个节点的相对位置改变没有。

我们用变量oldIndex表示遍历到的可复用节点在oldFiber中的位置索引。如果oldIndex < lastPlacedIndex，代表本次更新该节点需要向右移动。

lastPlacedIndex初始为0，每遍历一个可复用的节点，如果oldFiber >= lastPlacedIndex，则lastPlacedIndex = oldFiber。

单纯文字表达比较晦涩，这里我们提供两个Demo，你可以对照着理解。

## Demo1

在Demo中我们简化下书写，每个字母代表一个节点，字母的值代表节点的key

```
    // 之前
    abcd

    // 之后
    acdb

    ===第一轮遍历开始===
    a（之后）vs a（之前）  
    key不变，可复用
    此时 a 对应的oldFiber（之前的a）在之前的数组（abcd）中索引为0
    所以 lastPlacedIndex = 0;

    继续第一轮遍历...

    c（之后）vs b（之前）  
    key改变，不能复用，跳出第一轮遍历
    此时 lastPlacedIndex === 0;
    ===第一轮遍历结束===

    ===第二轮遍历开始===
    newChildren === cdb，没用完，不需要执行删除旧节点
    oldFiber === bcd，没用完，不需要执行插入新节点

    将剩余oldFiber（bcd）保存为map

    // 当前oldFiber：bcd
    // 当前newChildren：cdb

    继续遍历剩余newChildren

    key === c 在 oldFiber中存在
    const oldIndex = c（之前）.index;
    此时 oldIndex === 2;  // 之前节点为 abcd，所以c.index === 2
    比较 oldIndex 与 lastPlacedIndex;

    如果 oldIndex >= lastPlacedIndex 代表该可复用节点不需要移动
    并将 lastPlacedIndex = oldIndex;
    如果 oldIndex < lastplacedIndex 该可复用节点之前插入的位置索引小于这次更新需要插入的位置索引，代表该节点需要向右移动

    在例子中，oldIndex 2 > lastPlacedIndex 0，
    则 lastPlacedIndex = 2;
    c节点位置不变

    继续遍历剩余newChildren

    // 当前oldFiber：bd
    // 当前newChildren：db

    key === d 在 oldFiber中存在
    const oldIndex = d（之前）.index;
    oldIndex 3 > lastPlacedIndex 2 // 之前节点为 abcd，所以d.index === 3
    则 lastPlacedIndex = 3;
    d节点位置不变

    继续遍历剩余newChildren

    // 当前oldFiber：b
    // 当前newChildren：b

    key === b 在 oldFiber中存在
    const oldIndex = b（之前）.index;
    oldIndex 1 < lastPlacedIndex 3 // 之前节点为 abcd，所以b.index === 1
    则 b节点需要向右移动
    ===第二轮遍历结束===

    最终acd 3个节点都没有移动，b节点被标记为移动

```

## Demo2

```
    // 之前
    abcd

    // 之后
    dabc

    ===第一轮遍历开始===
    d（之后）vs a（之前）  
    key改变，不能复用，跳出遍历
    ===第一轮遍历结束===

    ===第二轮遍历开始===
    newChildren === dabc，没用完，不需要执行删除旧节点
    oldFiber === abcd，没用完，不需要执行插入新节点

    将剩余oldFiber（abcd）保存为map

    继续遍历剩余newChildren

    // 当前oldFiber：abcd
    // 当前newChildren dabc

    key === d 在 oldFiber中存在
    const oldIndex = d（之前）.index;
    此时 oldIndex === 3; // 之前节点为 abcd，所以d.index === 3
    比较 oldIndex 与 lastPlacedIndex;
    oldIndex 3 > lastPlacedIndex 0
    则 lastPlacedIndex = 3;
    d节点位置不变

    继续遍历剩余newChildren

    // 当前oldFiber：abc
    // 当前newChildren abc

    key === a 在 oldFiber中存在
    const oldIndex = a（之前）.index; // 之前节点为 abcd，所以a.index === 0
    此时 oldIndex === 0;
    比较 oldIndex 与 lastPlacedIndex;
    oldIndex 0 < lastPlacedIndex 3
    则 a节点需要向右移动

    继续遍历剩余newChildren

    // 当前oldFiber：bc
    // 当前newChildren bc

    key === b 在 oldFiber中存在
    const oldIndex = b（之前）.index; // 之前节点为 abcd，所以b.index === 1
    此时 oldIndex === 1;
    比较 oldIndex 与 lastPlacedIndex;
    oldIndex 1 < lastPlacedIndex 3
    则 b节点需要向右移动

    继续遍历剩余newChildren

    // 当前oldFiber：c
    // 当前newChildren c

    key === c 在 oldFiber中存在
    const oldIndex = c（之前）.index; // 之前节点为 abcd，所以c.index === 2
    此时 oldIndex === 2;
    比较 oldIndex 与 lastPlacedIndex;
    oldIndex 2 < lastPlacedIndex 3
    则 c节点需要向右移动

    ===第二轮遍历结束===
```

可以看到，我们以为从 abcd 变为 dabc，只需要将d移动到前面。

但实际上React保持d不变，将abc分别移动到了d的后面。

从这点可以看出，考虑性能，我们要尽量减少将节点从后面移动到前面的操作。