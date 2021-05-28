(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{361:function(t,s,a){t.exports=a.p+"assets/img/fiberFlowPng.468c19a2.jpg"},362:function(t,s,a){t.exports=a.p+"assets/img/fiberDataPng.8dd3aa95.jpg"},434:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("思考：Fiber是怎么实现的？有什么用？怎么使用？\n")])])])]),t._v(" "),n("h2",{attrs:{id:"_1-1-fiber是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-fiber是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 Fiber是什么")]),t._v(" "),n("p",[t._v("Fiber 以前的协调")]),t._v(" "),n("p",[t._v("React 会递归比对VirtualDom树, 找出需要变动的节点, 然后同步更新他们。这个过程React称为Reconcilation(协调)")]),t._v(" "),n("p",[t._v("在Reactcilation期间, React会一直占用着浏览器资源, 一则会导致用户出发的事件得不到响应，二则会导致掉帧，用户可能会感觉到卡顿")]),t._v(" "),n("p",[t._v("我们可以通过某些调度策略合理分配CPU资源，从而提高用户的影响速度\n通过Fiber架构，让自己的Reconcilation过程变成可被中断。合适地让出CPU执行权，可以让浏览器及时地响应用户的交互")]),t._v(" "),n("h2",{attrs:{id:"_1-2-fiber是一个执行单元"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-fiber是一个执行单元","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 Fiber是一个执行单元")]),t._v(" "),n("p",[t._v("Fiber是一个执行单元，每次执行完一个执行单元，React就会检查现在还剩多少时间，如果没有时间就将控制权让出去")]),t._v(" "),n("p",[n("img",{attrs:{src:a(361),alt:"call"}})]),t._v(" "),n("h2",{attrs:{id:"_1-3-fiber是一种数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-fiber是一种数据结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 Fiber是一种数据结构")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("React目前的做法是使用链表，每个VirtualDOM节点内部表示为一个 Fiber\n")])])]),n("h2",{attrs:{id:"_1-4-fiber数据结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-fiber数据结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.4 Fiber数据结构")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" VirtualDom "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B2'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            child"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br")])]),n("p",[n("img",{attrs:{src:a(362),alt:"call"}})]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v("child指向儿子    sibling指向兄弟 return指向上一级\n")])])])]),t._v(" "),n("h2",{attrs:{id:"_1-5-fiber执行阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-fiber执行阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.5 Fiber执行阶段")]),t._v(" "),n("p",[t._v("每次渲染有两个阶段：Reconciliation(协调render阶段)和commit(提交阶段)\n协调阶段：可以认为是Diff阶段，这个阶段可以被中断，这个阶段会找出所有节点变更，例如节点新增、删除、属性变更等等，这些变更React称之为副作用（Effect)")]),t._v(" "),n("p",[t._v("提交阶段：将上一个阶段计算出来的需要处理的副作用（Effect）一次执行了。这个阶段必须同步执行，不能打断")]),t._v(" "),n("h2",{attrs:{id:"_2-render阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-render阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 2 render阶段")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v(".render阶段会构建fiber树\n")])])]),n("p",[n("RouterLink",{attrs:{to:"/views/react/2019/fiber/fiberTree.html"}},[t._v("构建fiber树")])],1)])},[],!1,null,null,null);s.default=e.exports}}]);