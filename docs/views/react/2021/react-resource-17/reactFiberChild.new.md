---
title: useMemo and proxy
date: 2021-6-2
tags:
  - react
categories:
  - react
---

## 阅读 ReactChildFiber.new 文件源码

目前该文件总共有 1442 行代码，主要有 ChildReconciler 函数以及 resetChildFibers 函数；我们主要理解 ChildReconciler 函数

### ChildReconciler 的作用

:::tip
This wrapper function exists because I expect to clone the code in each path
to be able to optimize each path individually by branching early. This needs
a compiler or we can do it manually. Helpers that don't need this branching
live outside of this function.
此包装器函数的存在是因为我希望克隆每个路径中的代码
能够通过提前分支分别优化每条路径。这需要
一个编译器或者我们可以手动完成。不需要此分支的帮助程序
生活在这个功能之外。
:::

```js
// ChildReconciler函数接收一个参数shouldTrackSideEffects
function ChildReconciler(shouldTrackSideEffects) {
  funciton reconcileChildFibers(  returnFiber: Fiber,
    currentFirstChild: Fiber | null,
    newChild: any,
    lanes: Lanes,) {

  }
  return reconcileChildFibers;
}
/*
  1 先判断是不是顶层的Fragment
   const isUnkeyedTopLevelFragment =
      typeof newChild === 'object' &&
      newChild !== null &&
      newChild.type === REACT_FRAGMENT_TYPE &&
      newChild.key === null;
  如果是就取出他的儿子 newChild.props.children
  2 如果不是就通过switch判断newChild.$$typeof的类型
  newChild$$typeof = {
    REACT_ELEMENT_TYPE: '',
    REACT_PORTAL_TYPE: '',
    REACT_LAZY_TYPE: '',
  }
  REACT_ELEMENT_TYPE和REACT_PORTAL_TYPE这种类型会调用
  placeSingleChild(
    reconcileSingleElement(
      returnFiber,
      currentFirstChild,
      newChild,
      lanes,
    ),
  );
  REACT_LAZY_TYPE会调用reconcileChildFibers
  reconcileChildFibers(
    returnFiber,
    currentFirstChild,
    init(payload),
    lanes,
  );

  3如果newChild是字符串或者数字会调用
  placeSingleChild(
    // 处理文本类型 currentFirstChild.tag === HostText
    reconcileSingleTextNode(
      returnFiber,
      currentFirstChild,
      '' + newChild,
      lanes,
    ),
  );
*/
```

```js
// ReactSymbols.js文件在声明 REACT_ELEMENT_TYPE = 0xeac7;
```
