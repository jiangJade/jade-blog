(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{579:function(s,n,e){"use strict";e.r(n);var a=e(4),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("ol",[e("li",[s._v("文件划分的方式 污染全局作用域 命名冲突 无法管理模块依赖关系")]),s._v(" "),e("li",[s._v("命名空间方式 在第一个阶段的基础上 将每个模块只暴露一个全局对象 所有的变量都挂载到这个全局对象上")]),s._v(" "),e("li",[s._v("IIFE 立即执行函数 为模块提供私有空间")])]),s._v(" "),e("p",[s._v("以上是早起在没有工具和规范的情况下对模块化的落地方式")]),s._v(" "),e("p",[s._v("模块化规范的出现 模块化规范+模块加载器")]),s._v(" "),e("h3",{attrs:{id:"_1-amd-异步加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-amd-异步加载"}},[s._v("#")]),s._v(" 1 AMD 异步加载")]),s._v(" "),e("p",[s._v("require.js 的实现")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("define([module-name?], [array-of-dependencies?],[module-factory-or-object]);\n　　/*其中：\n    　　module-name: 模块标识，可以省略。\n    　　array-of-dependencies: 所依赖的模块，可以省略。\n    　　module-factory-or-object: 模块的实现，或者一个JavaScript对象。\n    */\n\n/*从中可以看到，第一个参数和第二个参数都是可以省略的，第三个参数则是模块的具体实现本身。后面将介绍在不同的应用场景下，他们会使用不同的参数组合。*/\n\ndefine('alpha', ['require', 'exports', 'beta'], function (require, exports, beta) {\n    exports.verb = function() {\n    return beta.verb();\n\n    // 或者:\n\n    return require(“beta”).verb();\n\n    }\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("使用起来比较复杂,\n模块 js 文件请求频繁,\n先加载依赖")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    // require js 使用方法\n\n    define(['modle1.js', 'modle2.js'], function(modle1, modle2) {\n        // 执行其他逻辑\n    })\n\n\n    // 实现思路：建一个node节点, script标签\n    var node = document.createElement('script')\n    node.type = 'text/javascript'\n    node.src = 'modle1.js'\n\n    // modle1.js 加载完后onload的事件\n    node.addEventListener('load', function(evt) {\n        // 开始加载 modle2.js\n        var node2 = document.createElement('script')\n        node2.type = 'text/javascript'\n        node2.src = 'modle2.js'\n        // 插入 modle2.js script 节点\n        document.body.appendChild(node2)\n    })\n    // 将script节点插入dom中\n    document.body.appendChild(node);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br")])]),e("h3",{attrs:{id:"_2-cmd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-cmd"}},[s._v("#")]),s._v(" 2. CMD")]),s._v(" "),e("p",[s._v("cmd: 按需加载，碰到 require('modle2.js)就立即执行 modle2.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("define(function() {\n    var modleContent = require('modle2.js');\n    console.log(modleContent)\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"_3-commonjs-服务端规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-commonjs-服务端规范"}},[s._v("#")]),s._v(" 3. commonjs 服务端规范")]),s._v(" "),e("ol",[e("li",[s._v("一个文件就是一个模块")]),s._v(" "),e("li",[s._v("每个模块都有单独的作用域")]),s._v(" "),e("li",[s._v("通过 module.exports 导出成员")]),s._v(" "),e("li",[s._v("通过 require 函数载入模块")]),s._v(" "),e("li",[s._v("commonjs 是以同步的方式加载模块 node 的执行机制是在启动时去加载模块 在执行阶段不需要加载模块")]),s._v(" "),e("li",[s._v("CommonJS 模块输出的是一个值的拷贝，一旦输出一个值，模块内部的变化就影响不到这个值")]),s._v(" "),e("li",[s._v("CommonJS 模块加载的顺序，按照其在代码中出现的顺序")]),s._v(" "),e("li",[s._v("由于 CommonJS 是同步加载模块的，在服务器端，文件都是保存在硬盘上，所以同步加载没有问\n题，但是对于浏览器端，需要将文件从服务器端请求过来，那么同步加载就不适用了，所以，CommonJS 是不适用于浏览器端的。")]),s._v(" "),e("li",[s._v("CommonJS 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存")])]),s._v(" "),e("h3",{attrs:{id:"_4-esmodules-浏览器模块化规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-esmodules-浏览器模块化规范"}},[s._v("#")]),s._v(" 4 ESmodules 浏览器模块化规范")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[s._v("注意 import 不是解构导出对象")])]),s._v(" "),e("ol",[e("li",[s._v("在语言层面实现了模块化 通过给 script 的标签 将 type 设置成 module 就可以使用这个规范了\n基本特性")]),s._v(" "),e("li",[s._v("自动采用严格模式，忽略 use strict")]),s._v(" "),e("li",[s._v("每个 ESM 模块都是单独的私有作用域")]),s._v(" "),e("li",[s._v("ESM 是通过 CORS 去请求外部 JS 模块的")]),s._v(" "),e("li",[s._v("ESM 中的 script 标签会延迟执行脚本")]),s._v(" "),e("li",[s._v("ES6 模块是动态引用，引用类型属性被改变会相互影响")]),s._v(" "),e("li",[s._v("export 导出 import 进行导入")]),s._v(" "),e("li",[s._v("导出的并不是成员的值 而是内存地址 内部发生改变外部也会改变，外部导入的是只读成员不能修改")]),s._v(" "),e("li",[s._v("ES module 中可以导入 CommonJS 模块")]),s._v(" "),e("li",[s._v("CommonJS 中不能导入 ES module 模块")]),s._v(" "),e("li",[s._v("CommonJS 始终只会导出一个默认成员")])])])}),[],!1,null,null,null);n.default=t.exports}}]);