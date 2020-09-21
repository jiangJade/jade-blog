---
title: 实现一个简易的promise
date: 2019-8-6
tags:
 - js
categories:
 - js
---

## 1 实现思路
:::tip
    promise 有三个状态 分别为pending fulfilled rejected
    then(succeed, fail) 先把成功、失败回调放到对象实例callbacks[]上
    resolve() 和 reject() 遍历callbacks
    resolve() 读取成功回调/reject() 读取失败回调（异步等待then 把回调放好）
    执行回调
:::

## 话不多说上干货

```
    class MyPromise {
        state = "pending"
        callbacks = []
        consturctor(fn) {
            if(typeof fn !== 'function'){
                throw new Error('must pass function');
            } 
            fn(this.resolve.bind(this), this.reject.bind(this))
        }

        resolve(result) {
            if(this.state !== 'pending') return;
            this.state = 'fulfilled'; // 将状态改成 完成
            // 调用nextTick函数
            nextTick(() => {
                this.callbacks.forEach(item => {
                    if(typeof item[0] === 'function') {
                        item[0].call(undefined, result);
                    }
                })
            })
        }
        reject(fill) {
            if(this.state !== 'pending') return;
            this.state = 'rejected';
            this.callbacks.forEach(item => {
                if(typeof item[1] === 'function') {
                    item[1].call(undefined, fill);
                }
            })
        }
        then(succeed, fail) {
            const handle = [];
            if(typeof succeed === 'function') {
                handle[0] = succeed;
            }
            if(typeof fail === 'function') {
                handle[1] = fail;
            }
            this.callbacks.push(handle);
        }
    }

    function nextTick(fn) {
        if(process !== undefined && typeof process.nextTick === 'function') {
            return process.nextTick(fn);
        } else {
            // 实现浏览器上的 nextTick
            var counter = 1;
            // 创建并返回一个新的 MutationObserver 它会在指定的DOM发生变化时被调用
            var observer = new MutationObserver(fn);
            // 创建观察的dom节点
            var textNode = document.createTextNode(String(counter));
            // 以上述配置开始观察目标节点
            observer.observer(textNode, {
                // 观察器的配置（需要观察什么变动）{ attributes: true, childList: true, subtree: true }
                characterData: true // 监听文本内容的修改
            });
            counter += 1;
            textNode.data = String(counter);
        }
    }

    // 实例化
    new MyPromise(function (resolve) {
        console.log(resolve)
    }).then(res => {
        console.log(res, 222222)
    })
```