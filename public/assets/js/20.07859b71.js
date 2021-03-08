(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{515:function(n,s,e){n.exports=e.p+"assets/img/diff.4f553964.png"},574:function(n,s,e){"use strict";e.r(s);var a=e(4),i=Object(a.a)({},(function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("p",[n._v("单节点的diff，以类型object为例，会进入reconcileSingElement。")]),n._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[a("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactChildFiber.new.js#L1141",target:"_blank",rel:"noopener noreferrer"}},[n._v("在这里可以查看到reconcileSingElement"),a("OutboundLink")],1)])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v(" function reconcileChildFibers(returnFiber, currentFirstChild, newChild, lanes) {\n   /*\n    此函数不是递归函数。如果顶层项是一个数组，我们将其视为一组子项，\n    不是碎片。另一方面，嵌套数组将被视为碎片节点。递归发生在正常流中。\n    处理顶层的无眼碎片，就像它们是数组一样。这导致了<>{[…]}</>和<>…</>之间的歧义。\n    我们对上述模棱两可的情况一视同仁。\n   */\n\n    var isUnkeyedTopLevelFragment = typeof newChild === 'object' && \n        newChild !== null && newChild.type === REACT_FRAGMENT_TYPE && newChild.key === null;\n\n    if (isUnkeyedTopLevelFragment) {\n      newChild = newChild.props.children;\n    } // Handle object types\n\n\n    var isObject = typeof newChild === 'object' && newChild !== null;\n\n    if (isObject) {\n        // 对象类型，可能是 REACT_ELEMENT_TYPE 或 REACT_PORTAL_TYPE\n        switch (newChild.$$typeof) {\n            case REACT_ELEMENT_TYPE:\n            // 调用 reconcileSingleElement 处理\n            return placeSingleChild(reconcileSingleElement(returnFiber, currentFirstChild, newChild, lanes));\n            // ...case其他类型\n        }\n    }\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br")])]),a("p",[n._v("该函数会做如下事情\n"),a("img",{attrs:{src:e(515),alt:"call"}})]),n._v(" "),a("p",[n._v("让我们看看第二步判断DOM节点是否可以复用是如何实现的。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function reconcileSingleElement(\n  returnFiber: Fiber,\n  currentFirstChild: Fiber | null,\n  element: ReactElement,\n  lanes: lanes\n): Fiber {\n  const key = element.key;\n  let child = currentFirstChild;\n  \n  // 首先判断是否存在对应DOM节点\n  while (child !== null) {\n    // 上一次更新存在DOM节点，接下来判断是否可复用\n\n    // 首先比较key是否相同\n    if (child.key === key) {\n\n      // key相同，接下来比较type是否相同\n\n      switch (child.tag) {\n        // ...省略case\n        \n        default: {\n          if (child.elementType === element.type) {\n            // type相同则表示可以复用\n            // 返回复用的fiber\n            return existing;\n          }\n          \n          // type不同则跳出循环\n          break;\n        }\n      }\n      // 代码执行到这里代表：key相同但是type不同\n      // 将该fiber及其兄弟fiber标记为删除\n      deleteRemainingChildren(returnFiber, child);\n      break;\n    } else {\n      // key不同，将该fiber标记为删除\n      deleteChild(returnFiber, child);\n    }\n    child = child.sibling;\n  }\n\n  // 创建新Fiber，并返回 ...省略\n}\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br")])]),a("p",[n._v("从代码可以看出，React通过先判断key是否相同，如果key相同则判断type是否相同，只有都相同时一个DOM节点才能复用。")]),n._v(" "),a("p",[n._v("这里有个细节需要关注下：")]),n._v(" "),a("p",[n._v("当child !== null且key相同且type不同时执行deleteRemainingChildren将child及其兄弟fiber都标记删除。")]),n._v(" "),a("p",[n._v("当child !== null且key不同时仅将child标记删除。")]),n._v(" "),a("h2",{attrs:{id:"巩固知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#巩固知识点"}},[n._v("#")]),n._v(" 巩固知识点")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('请判断如下JSX对象对应的DOM元素是否可以复用：\n\n// 习题1 更新前\n<div>xiao ming</div>\n// 更新后\n<p>xiao ming</p>\n\n// 习题2 更新前\n<div key="xxx">xiao ming</div>\n// 更新后\n<div key="ooo">xiao ming</div>\n\n// 习题3 更新前\n<div key="xxx">xiao ming</div>\n// 更新后\n<p key="ooo">xiao ming</p>\n\n// 习题4 更新前\n<div key="xxx">xiao ming</div>\n// 更新后\n<div key="xxx">xiao bei</div>\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])]),a("p",[n._v("练习1 chalid ！== null ，key默认为null,所以可以相同；type更新前为div 更新后为p所以不相同， 不能复用fiber")]),n._v(" "),a("p",[n._v("练习2 更新前后key不相同 所以不能复用。")]),n._v(" "),a("p",[n._v("练习3 key不相同所以不能服用")]),n._v(" "),a("p",[n._v("练习4 key 相同 type也相同 可以复用")])])}),[],!1,null,null,null);s.default=i.exports}}]);