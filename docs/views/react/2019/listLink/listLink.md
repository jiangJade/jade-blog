---
title: fiber中链表的实现原理
date: 2019-12-22
tags:
 - react
categories:
 - react
---
Fiber中很多地方都用到了链表， 所以它很重要

```js

    class Update {
        constructor(payload, nextUpdate) {
            this.payload = payload;
            this.nextUpdate = nextUpdate;
        }

    }

    class UpdateQueue {
        constructor() {
            this.baseState = null; // 原状态
            this.firstUpdate = null; // 第一个更新
            this.lastUpdate = null;  // 最后一个状态
        }

        enqueueUpdate(update) {
            console.log(44444444, update);

            if (this.firstUpdate == null) {
                this.firstUpdate = this.lastUpdate = update;  // 初始为空时  第一个指针和最后一个指针都指向同一个值

            } else {
                this.lastUpdate.nextUpdate = update; // 上一个最后的节点指向自己
                console.log("object", this.lastUpdate);
                this.lastUpdate = update;  // 让最后一个指向自己

            }
        }

        // 1.获取以前的状态， 然后遍历这个链表进行更新
        forceUpdate() {
            let currentState = this.baseState || {}; // 初始状态
            let currentUpdate = this.firstUpdate;
            while (currentUpdate) {
                let nextState = typeof currentUpdate.payload == 'function' ? currentUpdate.payload(currentState) : currentUpdate.payload;

                currentState = { ...currentState, ...nextState }; // 使用当前更新得到新的状态

                currentUpdate = currentUpdate.nextUpdate; // 找下一个节点
            }
            this.firstUpdate = this.lastUpdate = null;
            this.baseState = currentState;
            return currentState;
        }
    }

    // 计数器 {number: 0}  setState({number: 1}) setState((state) => ({number: state.number + 1}))

    let queue = new UpdateQueue();

    queue.enqueueUpdate(new Update({ name: 'jiang' }));
    queue.enqueueUpdate(new Update({ number: 0 }));

    queue.enqueueUpdate(new Update((state) => ({ number: state.number + 1 })));
    queue.enqueueUpdate(new Update((state) => ({ number: state.number + 1 })));

    queue.forceUpdate();
    let update = new Update();
    console.log(3333, update.nextUpdate);
```