---
title: react render rules
date: 2021-3-22
tags:
 - react
categories:
 - react
---

## 我们来看一下下面这两个代码有区别吗？以及为什么？

```
import React from 'react';

function MySon() {
  console.log('child render!');
  return <div>child</div>;
}

function CountComponent(props: any) {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <div onClick={() => { setCount(count + 1) }}>count:{count}</div>
      <MySon />
      <!-- 重点 -->
      {props.children}
    </div>
  );
}


function App() {
  return (
    <CountComponent>
      <MySon />
    </CountComponent>
  );
}

export default App;
```
当点击count时 单独渲染<MySon />和 {props.children}的结果一样吗？

```
答案是：                     不一样的 
渲染<MySon />会打印出child render!
渲染{props.children}不会打印child render!
```
what? 为什么不一样呢？

这就要说一下react render渲染机制了

## render需要满足的条件

React创建Fiber树时，每个组件对应的fiber都是通过如下两个逻辑之一创建的：
render。即调用render函数，根据返回的JSX创建新的fiber。
bailout。即满足一定条件时，React判断该组件在更新前后没有发生变化，则复用该组件在上一次更新的fiber作为本次更新的fiber。
可以看到，当命中bailout逻辑时，是不会调用render函数的。
所以，MySon组件不会打印child render!是因为命中了bailout逻辑。


## bailout需要满足的条件

什么情况下会进入bailout逻辑？当同时满足如下4个条件时：
### 1. oldProps === newProps ？

即本次更新的props（newProps）不等于上次更新的props（oldProps）。
注意这里是全等比较。
我们知道组件render会返回JSX，JSX是React.createElement的语法糖。
所以render的返回结果实际上是React.createElement的执行结果，即一个包含props属性的对象。
即使本次更新与上次更新props中每一项参数都没有变化，但是本次更新是React.createElement的执行结果，是一个全新的props引用，所以oldProps !== newProps。
如果我们使用了PureComponent或Memo，那么在判断是进入render还是bailout时，不会判断oldProps与newProps是否全等，而是会对props内每个属性进行浅比较。

### 2. context没有变化

即context的value没有变化。

### 3. workInProgress.type === current.type ？

更新前后fiber.type是否变化，比如div是否变为p。

### 4. !includesSomeLane(renderLanes, updateLanes) ？

当前fiber上是否存在更新，如果存在那么更新的优先级是否和本次整棵fiber树调度的优先级一致？
如果一致则进入render逻辑。
就我们的Demo来说，CountComponent是整棵树中唯一能触发更新的组件（通过调用setCount）。
所以CountComponent对应的fiber是唯一满足条件4的fiber。

## 敲黑板 划重点

如果render返回的MySon是如下形式：
```
<MySon />
会编译为
React.createElement(MySon, null)
执行后返回JSX。
由于props的引用改变，oldProps !== newProps。会走render逻辑。
```

但是在Demo中MySon如果是如下形式：
```
{props.children}
其中，props.children是MySon对应的JSX，而这里的props是App fiber走bailout逻辑后返回的。
所以MySon对应的JSX与上次更新时一致，JSX中保存的props也就一致，满足条件1。
可以看到，MySon满足bailout的所有条件，所以不会render。
```