title: js记忆函数
date: 2019-8-22
tags:
 - js
categories:
 - js
---
```
function memoize(func, hasher) {
    var result = function(key) {
        var cache = result.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    result.cache = {};
    return result;
}
```