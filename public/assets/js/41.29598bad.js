(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{562:function(t,s,a){"use strict";a.r(s);var e=a(4),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-js循环机制是什么？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-js循环机制是什么？"}},[t._v("#")]),t._v(" 1 js循环机制是什么？")]),t._v(" "),a("p",[t._v("因为js是单线程执行，单线程就会产生阻塞，当一个任务很耗时其他任务必须等待他执行结束。")]),t._v(" "),a("p",[t._v("为了提高cpu利用效率和用户体验以及操作代码简便。js提出了同步和异步，细分就是微任务和宏任务。")]),t._v(" "),a("p",[t._v("先执行宏任务，如果遇到回调函数，则将回调函数放到回调队列中，遇到微任务则立即执行，微任务中的回调函数会被添加到微任务回调队列中；同步代码执行完毕后会立即执行所有微任务队列，然后取出一个宏任务继续执行，宏任务执行完后会继续检查微任务队列，并立即执行微任务。一直重复上面的操作，知道所有代码执行完。")]),t._v(" "),a("h2",{attrs:{id:"_2-宏任务有那些？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-宏任务有那些？"}},[t._v("#")]),t._v(" 2 宏任务有那些？")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("整块js代码  setTimeout setInterval Ajax requestAnimationFrame")])]),t._v(" "),a("h2",{attrs:{id:"_3-微任务有哪些？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-微任务有哪些？"}},[t._v("#")]),t._v(" 3 微任务有哪些？")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[t._v("Promise await")])])])}),[],!1,null,null,null);s.default=r.exports}}]);