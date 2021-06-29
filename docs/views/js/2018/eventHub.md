---
title: 实现一个发布订阅
date: 2018-7-15
tags:
  - js
categories:
  - js
---

## 2 EventHub(发布-订阅)

实现思路

```
    使用一个对象作为缓存
    on负责把方法注册到缓存的EventName对应的数组
    emit负责遍历触发EventName底下的方法数组
    off找到方法的索引，并删除
```

```
    class EventHub {
        cache = {};
        on(eventName, fn) {
            this.cache[eventName] = this.cache[eventName] || [];
            this.cache[eventName].push(fn);
        }
        emit(eventName) {
            this.cache[eventName].forEach(fn => fn());
        }
        off(eventName, fn) {
            const index = indexOf(this.cache[eventName], fn);
            if(index === -1) return;
            this.cache[eventName].splice(index, 1);
        }
    }
    function indexOf(arr, item) {
        if(arr === undefined) return -1;
        let index = -1;
        for(let i = 0; i<arr.length; ++i) {
            if(arr[i] === item) {
                index = i;
                break;
            }
        }
        return index;
    }
```
