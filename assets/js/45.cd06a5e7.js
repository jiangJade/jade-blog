(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{412:function(n,s,e){"use strict";e.r(s);var a=e(3),t=Object(a.a)({},function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"_1-两两交换链表中的节点-24"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-两两交换链表中的节点-24","aria-hidden":"true"}},[n._v("#")]),n._v(" 1 两两交换链表中的节点-24")]),n._v(" "),e("p",[n._v("给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。")]),n._v(" "),e("p",[n._v("你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。")]),n._v(" "),e("p",[n._v("示例:")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("给定 1->2->3->4, 你应该返回 2->1->4->3.\nfunction ListNode(val) {\n    this.val = val;\n    this.next = null;\n}\n    let heads = new ListNode(1);\n    let head2 = new ListNode(2);\n    let head3 = new ListNode(3);\n    let head4 = new ListNode(4);\n    heads.next = head2;\n    head2.next = head3;\n    head3.next = head4;\n    var swapPairs = function (head) {\n        \n        if (head == null || head.next == null) {\n            return head;\n        }\n        // 获得第 2 个节点\n        let next = head.next;\n        // next.next = head.next.next\n        // 第1个节点指向第 3 个节点，并从第3个节点开始递归\n        head.next = swapPairs(next.next);\n        // 第2个节点指向第 1 个节点\n        next.next = head;\n        // 或者 [head.next,next.next] = [swapPairs(next.next),head]\n        return next;\n    };\nconsole.log(333, swapPairs(heads));\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br")])])])},[],!1,null,null,null);s.default=t.exports}}]);