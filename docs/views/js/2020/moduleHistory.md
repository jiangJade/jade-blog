---
title: 模块化演进历程
date: 2020-02-21
tags:
  - js
categories:
  - js
---

1. 文件划分的方式 污染全局作用域 命名冲突 无法管理模块依赖关系
2. 命名空间方式 在第一个阶段的基础上 将每个模块只暴露一个全局对象 所有的变量都挂载到这个全局对象上
3. IIFE 立即执行函数 为模块提供私有空间

以上是早起在没有工具和规范的情况下对模块化的落地方式

模块化规范的出现 模块化规范+模块加载器

### 1 AMD 异步加载

require.js 的实现

```
define([module-name?], [array-of-dependencies?],[module-factory-or-object]);
　　/*其中：
    　　module-name: 模块标识，可以省略。
    　　array-of-dependencies: 所依赖的模块，可以省略。
    　　module-factory-or-object: 模块的实现，或者一个JavaScript对象。
    */

/*从中可以看到，第一个参数和第二个参数都是可以省略的，第三个参数则是模块的具体实现本身。后面将介绍在不同的应用场景下，他们会使用不同的参数组合。*/

define('alpha', ['require', 'exports', 'beta'], function (require, exports, beta) {
    exports.verb = function() {
    return beta.verb();

    // 或者:

    return require(“beta”).verb();

    }
})
```

使用起来比较复杂,
模块 js 文件请求频繁,
先加载依赖

```
    // require js 使用方法

    define(['modle1.js', 'modle2.js'], function(modle1, modle2) {
        // 执行其他逻辑
    })


    // 实现思路：建一个node节点, script标签
    var node = document.createElement('script')
    node.type = 'text/javascript'
    node.src = 'modle1.js'

    // modle1.js 加载完后onload的事件
    node.addEventListener('load', function(evt) {
        // 开始加载 modle2.js
        var node2 = document.createElement('script')
        node2.type = 'text/javascript'
        node2.src = 'modle2.js'
        // 插入 modle2.js script 节点
        document.body.appendChild(node2)
    })
    // 将script节点插入dom中
    document.body.appendChild(node);
```

### 2. CMD

cmd: 按需加载，碰到 require('modle2.js)就立即执行 modle2.js

```
define(function() {
    var modleContent = require('modle2.js');
    console.log(modleContent)
})
```

### 3. commonjs 服务端规范

1. 一个文件就是一个模块
2. 每个模块都有单独的作用域
3. 通过 module.exports 导出成员
4. 通过 require 函数载入模块
5. commonjs 是以同步的方式加载模块 node 的执行机制是在启动时去加载模块 在执行阶段不需要加载模块
6. CommonJS 模块输出的是一个值的拷贝，一旦输出一个值，模块内部的变化就影响不到这个值
7. CommonJS 模块加载的顺序，按照其在代码中出现的顺序
8. 由于 CommonJS 是同步加载模块的，在服务器端，文件都是保存在硬盘上，所以同步加载没有问
   题，但是对于浏览器端，需要将文件从服务器端请求过来，那么同步加载就不适用了，所以，CommonJS 是不适用于浏览器端的。
9. CommonJS 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存

### 4 ESmodules 浏览器模块化规范

:::tip
注意 import 不是解构导出对象
:::

1. 在语言层面实现了模块化 通过给 script 的标签 将 type 设置成 module 就可以使用这个规范了
   基本特性
2. 自动采用严格模式，忽略 use strict
3. 每个 ESM 模块都是单独的私有作用域
4. ESM 是通过 CORS 去请求外部 JS 模块的
5. ESM 中的 script 标签会延迟执行脚本
6. ES6 模块是动态引用，引用类型属性被改变会相互影响
7. export 导出 import 进行导入
8. 导出的并不是成员的值 而是内存地址 内部发生改变外部也会改变，外部导入的是只读成员不能修改
9. ES module 中可以导入 CommonJS 模块
10. CommonJS 中不能导入 ES module 模块
11. CommonJS 始终只会导出一个默认成员
