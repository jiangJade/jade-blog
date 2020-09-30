---
title: react从根节点执行时的开始理解
date: 2020-4-12
tags:
 - react
categories:
 - react
---

## 1 React.render()执行时发生了什么？
```
function App() {
    const [countState, dispath] = React.useReducer(reducer, {count: 2});
    
    const add = () => {
        setNumber({ count: numberState.count + 1})
    };
    
    return (
        <div>
            <div id="counter3" style={{margin: '30px'}}>
                <span>{numberState.count}</span>
                <button onClick={add}>加15555555555555</button>
            </div>
            <div id="counter4">
                <span>{countState.count}</span>
                <button onClick={() => dispath({ type: ADD})}>加1</button>
            </div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
```
### 1 首次执行ReactDOM.render 
首次执行ReactDOM.render 会创建fiberRootNode. 当前界面展示的(源码中叫fiberRoot)或者rootFiber. 其中fiberRootNode是整个应用的根节点，rootFiber是<App />所在组件树的根节点。

源码中这些地方叫rootFiber
```
function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
  var errorInfo = createCapturedValue(error, sourceFiber);
  var update = createRootErrorUpdate(rootFiber, errorInfo, SyncLane);
  enqueueUpdate(rootFiber, update);
  var eventTime = requestEventTime();
  var root = markUpdateLaneFromFiberToRoot(rootFiber, SyncLane);

  if (root !== null) {
    markRootUpdated(root, SyncLane, eventTime);
    ensureRootIsScheduled(root, eventTime);
    schedulePendingInteractions(root, SyncLane);
  }
}
```

:::tip
这里提的fiberRootNode和rootFiber,是因为在应用中我们可以多次调用ReactDOM.render函数渲染不同的组件树，他们会拥有不同rootFiber.但是整个应用的根节点只有一个，那就是fiberRootNode.
:::
fiberRootNode的current会指向当前页面上已渲染内容对应Fiber树,被称为current fiber树。

## createFiberRoot
```
源码
function createFiberRoot(containerInfo, tag, hydrate, hydrationCallbacks) {
  var root = new FiberRootNode(containerInfo, tag, hydrate);
  // stateNode is any.

  var uninitializedFiber = createHostRootFiber(tag);
  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;
  initializeUpdateQueue(uninitializedFiber);
  return root;
}

var createFiber = function (tag, pendingProps, key, mode) {
  // $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
  return new FiberNode(tag, pendingProps, key, mode);
};

function createHostRootFiber(tag) {
  var mode;

  if (tag === ConcurrentRoot) {
    mode = ConcurrentMode | BlockingMode | StrictMode;
  } else if (tag === BlockingRoot) {
    mode = BlockingMode | StrictMode;
  } else {
    mode = NoMode;
  }

  if ( isDevToolsPresent) {
    // Always collect profile timings when DevTools are present.
    // This enables DevTools to start capturing timing at any point–
    // Without some nodes in the tree having empty base times.
    mode |= ProfileMode;
  }

  return createFiber(HostRoot, null, null, mode);
}

```
由于是首屏渲染，页面中还没有挂载任何DOM，所以fiberRootNode.current指向的rootFiber没有任何子Fiber节点（即current Fiber树为空）。

## 3 render
接下来进入render阶段，根据组件返回的JSX在内存中依次创建Fiber节点并连接在一起构建Fiber树，被称为workInProgress Fiber树。

在构建workInProgress Fiber树时会尝试复用current Fiber树中已有的Fiber节点内的属性，在首屏渲染时只有rootFiber存在对应的current fiber（即rootFiber.alternate）