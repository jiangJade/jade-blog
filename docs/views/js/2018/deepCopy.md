---
title: 实现深拷贝
date: 2018-8-23
tags:
  - js
categories:
  - js
---

:::tip
手写深拷贝前先思考几个问题
::: 1.首先为什么要深拷贝？不希望数据被修改或者只需要部分修改数据。 2.怎么实现深拷贝？简单需求用 JSON 反序列化，复杂需求用递归克隆。 3.手写深拷贝的优点？体现扎实的 JS 基础 4.至于缺点以及如何解决缺点稍后再回答

## 1 最简单的手写深拷贝就一行，通过 JSON 反序列化来实现

```
    const data = JSON.parse(JSON.stringify(res));
    缺点是JSON value 不支持的数据类型，都拷贝不了
    不支持函数
    不支持undefined(支持null)
    不支持循环引用，比如
    const obj = {
        name: '小明'
    };
    obj.year = obj;
    obj = JSON.parse(JSON.stringify(obj))
```

错误提示

```
VM508:5 Uncaught TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    --- property 'year' closes the circle
    at JSON.stringify (<anonymous>)
    at <anonymous>:5:27
```

1.不支持 Date，会变成 ISO8601 格式的字符串 2.不支持正则表达式 3.不支持 Symbol 4.如何支持这些复杂需求，就需要用到递归克隆了。

## 2 复杂需求核心有三点：

1.递归 2.对象分类型讨论 3.解决循环引用（环） 4.下面给出我的模板：

```js
var deepCopy = function(obj) {
  if (obj && typeof obj !== 'object') return false;
  var newObj =
    Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
  for (var key in obj) {
    // hasOwnProperty 确定一个对象是否具有指定的自己的属性
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] !== 'object' && obj[key] !== null
          ? deepCopy(obj[key])
          : obj[key];
    }
  }
  return newObj;
};
```

### 2 不完美的方案

```js
class DeepClone {
  constructor() {
    this.cacheList = [];
  }
  clone(source) {
    if (source instanceof Object) {
      const cache = this.findCache(source);
      if (cache) {
        // 如果找到缓存，直接返回
        return cache;
      } else {
        let target;
        if (source instanceof Array) {
          target = new Array();
        } else if (source instanceof Function) {
          target = function() {
            return source.apply(this, arguments);
          };
        } else if (source instanceof Date) {
          target = new Date(source);
        } else if (source instanceof RegExp) {
          target = new RegExp(source.source, source.flags);
        }
        // 把源对象和新对象放进缓存列表
        this.cacheList.push([source, target]);
        for (let key in source) {
          // 不拷贝原型上的属性，太浪费内存
          if (source.hasOwnProperty(key)) {
            // 递归克隆
            target[key] = this.clone(source[key]);
          }
        }
        return target;
      }
    }
    return source;
  }

  findCache(source) {
    for (let i = 0; i < this.cacheList.length; ++i) {
      if (this.cacheList[i][0] === source) {
        // 如果有环，返回对应的新对象
        return this.cacheList[i][1];
      }
    }
    return undefined;
  }
}
```

:::tip
这个方案还有一些问题，离完美不小的距离：

1.对象类型支持不够多（Buffer，Map，Set 等都不支持） 2.存在递归爆栈的风险 3.怎么解决？用别人封装好的第三方库。。。 4.补充一句，如果您想看详细的测试与运行结果 5.循环引用的问题 var = {}; a.a =a; 6.递归爆栈的问题
:::

## 3 广度优先解决爆栈

```js
function cloneDeep(params) {
    if(!isObject(params)) return data;
    let root = {};
    const result = [
        {parent: root, key: undefined, data: params}
    ];

    while(result.length) {
        // 广度优先
        const targetObj = result.pop();
        let parent = targetObj.parent;
        let k = targetObj.key;
        let obj = targetObj.data;

         // 初始化赋值目标，key为undefined则拷贝到父元素，否则拷贝到子元素
        let res = parent;
        if (typeof k !== 'undefined') {
            res = parent[key] = {};
        }

        for(let key in obj) {
            if(obj.hasOwenProperty(k)) {
                if(isObject(obj)) {
                    result.push({
                        parent: res,
                        key,
                        data: obj[key]
                    })
                }else {
                    root[key] = data[key]
                }
            }
        }
    }
    return root;
}
function isObject(obj) {
    return instanceOf obj === 'object' && obj != null;
}

```
