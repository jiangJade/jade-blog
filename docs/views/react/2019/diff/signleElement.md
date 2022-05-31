---
title: diff算法单节点更新diff
date: 2020-4-15
tags:
  - react
categories:
  - react
---

[在这里可以查看到reconcilesingelement]: https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1141

单节点的 diff，以类型 object 为例，会进入 reconcileSingElement。

:::tip
[在这里可以查看到 reconcileSingElement][在这里可以查看到reconcilesingelement]
:::

```
 function reconcileChildFibers(returnFiber, currentFirstChild, newChild, lanes) {
   /*
    此函数不是递归函数。如果顶层项是一个数组，我们将其视为一组子项，
    不是碎片。另一方面，嵌套数组将被视为碎片节点。递归发生在正常流中。
    处理顶层的无眼碎片，就像它们是数组一样。这导致了<>{[…]}</>和<>…</>之间的歧义。
    我们对上述模棱两可的情况一视同仁。
   */

    var isUnkeyedTopLevelFragment = typeof newChild === 'object' &&
        newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;

    if (isUnkeyedTopLevelFragment) {
      newChild = newChild.props.children;
    } // Handle object types


    var isObject = typeof newChild === 'object' && newChild !== null;

    if (isObject) {
        // 对象类型，可能是 REACT_ELEMENT_TYPE 或 REACT_PORTAL_TYPE
        switch (newChild.$$typeof) {
            case REACT_ELEMENT_TYPE:
            // 调用 reconcileSingleElement 处理
            return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));
            // ...case其他类型
        }
    }
}
```

该函数会做如下事情
![call](./images/diff.png)

让我们看看第二步判断 DOM 节点是否可以复用是如何实现的。

```
function reconcileSingleElement(
  returnFiber: Fiber,
  currentFirstChild: Fiber | null,
  element: ReactElement,
  lanes: lanes
): Fiber {
  const key = element.key;
  let child = currentFirstChild;

  // 首先判断是否存在对应DOM节点
  while (child !== null) {
    // 上一次更新存在DOM节点，接下来判断是否可复用

    // 首先比较key是否相同
    if (child.key === key) {

      // key相同，接下来比较type是否相同

      switch (child.tag) {
        // ...省略case

        default: {
          if (child.elementType === element.type) {
            // type相同则表示可以复用
            // 返回复用的fiber
            return existing;
          }

          // type不同则跳出循环
          break;
        }
      }
      // 代码执行到这里代表：key相同但是type不同
      // 将该fiber及其兄弟fiber标记为删除
      deleteRemainingChildren(returnFiber, child);
      break;
    } else {
      // key不同，将该fiber标记为删除
      deleteChild(returnFiber, child);
    }
    child = child.sibling;
  }

  // 创建新Fiber，并返回 ...省略
}
```

从代码可以看出，React 通过先判断 key 是否相同，如果 key 相同则判断 type 是否相同，只有都相同时一个 DOM 节点才能复用。

这里有个细节需要关注下：

当 child !== null 且 key 相同且 type 不同时执行 deleteRemainingChildren 将 child 及其兄弟 fiber 都标记删除。

当 child !== null 且 key 不同时仅将 child 标记删除。

## 巩固知识点

```
请判断如下JSX对象对应的DOM元素是否可以复用：

// 习题1 更新前
<div>xiao ming</div>
// 更新后
<p>xiao ming</p>

// 习题2 更新前
<div key="xxx">xiao ming</div>
// 更新后
<div key="ooo">xiao ming</div>

// 习题3 更新前
<div key="xxx">xiao ming</div>
// 更新后
<p key="ooo">xiao ming</p>

// 习题4 更新前
<div key="xxx">xiao ming</div>
// 更新后
<div key="xxx">xiao bei</div>
```

练习 1 chalid ！== null ，key 默认为 null,所以可以相同；type 更新前为 div 更新后为 p 所以不相同， 不能复用 fiber

练习 2 更新前后 key 不相同 所以不能复用。

练习 3 key 不相同所以不能服用

练习 4 key 相同 type 也相同 可以复用

实现步骤

用 javascript 对象结构表示 dom 树的结构然后用这个树构建一个真正的 dom 树插到文档当中

当状态变更的时候重新构造一棵新的对象树 然后用新的树和旧的树进行比较记录两棵树差异

把 2 所记录的差异应用到步骤 1 所构建的真正的 dom 树上 视图就更新

数据双向绑定

Object.defineProperty 劫持给个属性的 setter，getter

在数据变动时发布消息给订阅者，触发相应的监听回调
