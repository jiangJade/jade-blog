(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{419:function(s,n,e){"use strict";e.r(n);var a=e(3),t=Object(a.a)({},function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("title: js记忆函数\ndate: 2019-8-22\ntags:")]),s._v(" "),e("ul",[e("li",[s._v("js\ncategories:")]),s._v(" "),e("li",[s._v("js")])]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("function memoize(func, hasher) {\n    var result = function(key) {\n        var cache = result.cache;\n        var address = '' + (hasher ? hasher.apply(this, arguments) : key);\n        if (!cache[address]) {\n            cache[address] = func.apply(this, arguments);\n        }\n        return cache[address];\n    };\n    result.cache = {};\n    return result;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])])])},[],!1,null,null,null);n.default=t.exports}}]);