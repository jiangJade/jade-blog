---
title: fiber树的实现原理
date: 2019-12-23
tags:
 - react
categories:
 - react
---

fiber树
```js

    let A1 = { type: 'div', key: 'A1'};
    let B1 = { type: 'div', key: 'B1', return: A1};
    let B2 = { type: 'div', key: 'B2', return: A1};
    let C1 = { type: 'div', key: 'C1', return: B1};
    let C2 = { type: 'div', key: 'C2', return: B1};

    A1.child = B1;
    B1.sibling = B2;
    B1.child = C1;
    B2.child = C1;
    let rootFiler = A1;

    /*fibler遍历规则
    从顶点开始遍历
    1. 下一个节点：先儿子，后弟弟，再叔叔（叔叔就是父级得兄弟）
    2. 自己所有子节点完成后自己完成
    深度优先
    */

    let nextUnitOfWork = null;
    function workLoop() {
        while(nextUnitOfWork) { // 如果有待执行的执行单元，就执行，然后返回下一个执行单元
            nextUnitOfWork = preformUnitOfWork(nextUnitOfWork)
        }

        if(!nextUnitOfWork) {
            console.log('render阶段结束'); 
        }
    }

    function preformUnitOfWork(fiber) { // A1
        beginWork(fiber); // 处理此fiber
        if(fiber.child) { // 如果有儿子，返回大儿子
            return fiber.child;
        }// 如果没有儿子，则说明fiber已经完成
        while(fiber) {
            completeUnitOfWork(fiber);
            if(fiber.sibling) {
                return fiber.silbing; // 如果说没有弟弟返回弟弟
            }
            fiber = fiber.return;
        }
    }
    function completeUnitOfWork(fiber) {
        console.log('结束', fiber.key); // A1 B1 C1 C2

    }
    function beginWork(fiber) {
        console.log('开始', fiber.key); // A1 B1 C1 C2

    }
    nextUnitOfWork = rootFiler;
    workLoop();
```




