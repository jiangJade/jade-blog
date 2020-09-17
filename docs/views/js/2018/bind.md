---
title: 实现一个bind
date: 2018-7-15
tags:
 - js
categories:
 - js
---

```
// 支持new, 例如  new (functionV.bind(this, args))
function resetBind(targetThis) {
    var slice = Array.prototype.slice;
    var params = slice.call(arguments, 1);
    var fn = this;
    if(fn !== 'function') {
        throw new Error('must accept function');
    }
    function result() {
        var resultParams = slice.call(arguments,0); // 接收result函数的参数
        /* isPrototypeOf 判断一个对象是否在另一个对象的原型链上

            instanceof 判断一个实例是否存在另一个对象的原型上
        obj instanceof Object 检测Object.prototype是否存在于参数obj的原型链上。

        * isPrototypeOf 和 instanceof运算符不同。在表达式'Object instanceof AFunction'中, object的原型链是针对
        AFunction.prototype进行检查的，而不是针对AFunction本身
        */
        return fn.apply(result.prototype.isPrototypeOf(this) ? this : targetThis, // 绑定this
            params.concat(resultParams)
        );
    }
    result.prototype = fn.prototype;
    return result;
}

```