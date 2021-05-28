(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{421:function(t,e,n){"use strict";n.r(e);var a=n(3),r=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h3",{attrs:{id:"_1-es5环境下实现let"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-es5环境下实现let","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. ES5环境下实现let")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("```\n源代码\nfor(let i = 0; i < 10; i++) {\n    console.log(i)\n}\n\n// babel转化后\nfor(var _i = 0; _i < 10; _i++) {\n    console.log(_i) // 输出 0 ~ 10\n}\n```\nbabel在let定义的变量前加了道下划线，避免在块级作用域外访问到该变量，\n除了对变量名的转换，我们也可以通过自执行函数来模拟块级作用域\n```\n(function(){\n    for(var i = 0; i < 5; i ++){\n        console.log(i)  // 0 1 2 3 4\n    }\n})();\n\nconsole.log(i)      // Uncaught ReferenceError: i is not defined\n```\n")])])]),n("h3",{attrs:{id:"_2-如何在es5环境下实现const"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何在es5环境下实现const","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. 如何在ES5环境下实现const")]),t._v(" "),n("p",[t._v("(1) 实现const的关键在于Object.defindProperty()\n"),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),n("OutboundLink")],1),t._v(",\n这个API用于在一个对象上增加或修改属性。通过配置属性描述符，\n可以精确地控制属性行为。Object.defindProperty() 接收三个参数：\nObject.defineProperty(obj, prop, desc)")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("obj")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("要在其上定义属性的对象")])]),t._v(" "),n("tr",[n("td",[t._v("prop")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("要定义或修改的属性的名称")])]),t._v(" "),n("tr",[n("td",[t._v("descriptor")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("将被定义或修改的属性描述符")])])])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性描述符")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("说明")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("value")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。 默认为 undefined")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("undefined")])]),t._v(" "),n("tr",[n("td",[t._v("get")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("一个给属性提供 getter 的方法，如果没有 getter 则为 undefined")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("undefined")])]),t._v(" "),n("tr",[n("td",[t._v("set")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("undefined")])]),t._v(" "),n("tr",[n("td",[t._v("writable")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("enumerable")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("Configurable")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("configurable特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("false")])])])]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function _const(key, value) {\n    const desc = {\n        value,\n        writable: false\n    }\n    Object.defineProperty(window, key, desc)\n}\n\n\n_const('obj', {a: 1})   //定义obj\nobj.b = 2               //可以正常给obj的属性赋值\nobj = {}                //抛出错误，提示对象read-only\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])])},[],!1,null,null,null);e.default=r.exports}}]);