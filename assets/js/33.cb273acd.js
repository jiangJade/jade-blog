(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{395:function(s,a,e){"use strict";e.r(a);var n=e(3),t=Object(n.a)({},function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("+ - * % 运算符\n")])])])]),s._v(" "),e("p",[s._v("1 为加号时\nString和其他类型相加时，其他类型会被转为String;其他情况都转换为Number类型。")]),s._v(" "),e("div",{staticClass:"custom-block warning"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("undefined转换为Number是 'NaN',任何Number与NaN相加都是NaN。\n")])])])]),s._v(" "),e("p",[s._v("2 其他运算符\n其他运算符时，基本类型都转换为Number, String类型的带有字符的；比如：'1a', 'a1'进行运算时结果为NaN，与undefined一样")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    undefined * 2 = NaN\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v('(1) NaN不与任何值相等，包括自身；所以判断一个值是否为NaN, 即用 "!==" 即可。\n(2) 转换为Boolean类型为false的有：null, 0, "", undefined, NaN, false\n')])])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    console.log('转换为Boolean类型为false的有', !!null, !!0, !!\"\", !!undefined, !!NaN, !!false)\n    转换为Boolean类型为false的有 false false false false false false\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[s._v("(3) number 与 parseInt 都可以将对象转换为Number类型，Number函数要比parseInt函数严格很多,基本上,只要有一个字符无法转换成数字,整个字符串就会被转换为NaN\n")])])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    console.log(Number('2a'), parseInt('a4'), parseInt('3ab2'))\n    NaN NaN 3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("p",[s._v("3 使用^切换变量0或1")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("    // --- before ---\n    // if判断\n    if(toggle) {\n        toggle = 0;\n    }else {\n        toggle = 1;\n    }\n    // 三目运算\n    toggle = toggle ? 0 : 1;\n\n    // --- after ---\n    toggle ^= 1;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])])])},[],!1,null,null,null);a.default=t.exports}}]);