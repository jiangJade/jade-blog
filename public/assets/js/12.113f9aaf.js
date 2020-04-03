(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{435:function(e,a,n){"use strict";n.r(a);var s=n(17),l=Object(s.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("+ - * % 运算符\n")])])])]),e._v(" "),n("p",[e._v("1 为加号时\nString和其他类型相加时，其他类型会被转为String;其他情况都转换为Number类型。")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("undefined转换为Number是 'NaN',任何Number与NaN相加都是NaN。\n")])])])]),e._v(" "),n("p",[e._v("2 其他运算符\n其他运算符时，基本类型都转换为Number, String类型的带有字符的；比如：'1a', 'a1'进行运算时结果为NaN，与undefined一样")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    undefined * 2 = NaN\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("div",{staticClass:"custom-block tip"},[n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("(1) NaN不与任何值相等，包括自身；所以判断一个值是否为NaN, 即用 \"!==\" 即可。\n(2) 转换为Boolean类型为false的有：null, 0, \"\", undefined, NaN, false\n\n```\n    console.log('转换为Boolean类型为false的有', !!null, !!0, !!\"\", !!undefined, !!NaN, !!false)\n    转换为Boolean类型为false的有 false false false false false false\n```\n(3) number 与 parseInt 都可以将对象转换为Number类型，Number函数要比parseInt函数严格很多,基本上,只要有一个字符无法转换成数字,整个字符串就会被转换为NaN\n```\n    console.log(Number('2a'), parseInt('a4'), parseInt('3ab2'))\n    NaN NaN 3\n```\n")])])])]),e._v(" "),n("p",[e._v("3 使用^切换变量0或1")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("```\n    // --- before ---\n    // if判断\n    if(toggle) {\n        toggle = 0;\n    }else {\n        toggle = 1;\n    }\n    // 三目运算\n    toggle = toggle ? 0 : 1;\n\n    // --- after ---\n    toggle ^= 1;\n```")])])])])},[],!1,null,null,null);a.default=l.exports}}]);