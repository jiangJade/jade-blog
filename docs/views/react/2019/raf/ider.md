---
title: requestIdleCallback
date: 2019-12-21
tags:
 - react
categories:
 - react
---

```js
// 这是一个全局塑性 告诉浏览器，我现在执行callback函数，但是它的优先级比较低。告诉浏览器。有时间就帮我执行 没时间就不执行

    // window.requestIdleCallback(callback, { timeout: 1000});  只有chrome支持

    function sleep(delay) {
        // 在js里面如何实现睡眠功能 t=当前时间
        for(var start = Date.now(); Date.now() - start <= delay;) {

        }
    }
    const works = [
        () => {
            console.log('第一个任务开始');
            sleep(20);
            console.log('第一个任务结束');
        },
        () => {
            console.log('第二个任务开始');
            sleep(20);
            console.log('第二个任务结束');
        },
        () => {
            console.log('第三个任务开始');
            sleep(20);
            console.log('第三个任务结束');
        }

    ]
    window.requestIdleCallback(workLoop, { timeout: 1000});
    /*
        deadline 是一个对象 有两个属性
        timeRemaining() 可以返回此帧还剩下多少时间供用户使用
        didTimeout 此callback任务是否超时
    */
    function workLoop(deadline) {
        console.log('本帧剩余时间', deadline.timeRemaining());
        // 如果此帧的剩余时间超过0，或者此已经超时了
        while((deadline.timeRemaining() > 0 || deadline.didTimeout) &&　works.length) {
            performUnitOfWork();
        } // 如果说没有剩余时间了，就需要放弃执行任务控制权，将执行权交换给浏览器
        if(works.length) { // 说明还有任务没有执行完
            window.requestIdleCallback(workLoop, { timeout: 1000});
        }
    }

    function performUnitOfWork() {
        // shift 取出第一个元素
        works.shift()();
    }
```