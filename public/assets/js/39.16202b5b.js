(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{559:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-fetch"}},[t._v("#")]),t._v(" 1 fetch")]),t._v(" "),s("p",[t._v("  fetch是浏览器提供的api,axios是社区封装的一个组件")]),t._v(" "),s("p",[t._v("  fetch是一个底层的api,你可以把它考虑成原生的XHP，所以使用起来并不是那个舒服，需要封装。")]),t._v(" "),s("p",[t._v("  axios 既提供了并发的封装，也没有fetch的各种问题，二体积也较小，首选。")]),t._v(" "),s("h3",{attrs:{id:"_1-fetch优势"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-fetch优势"}},[t._v("#")]),t._v(" 1 fetch优势")]),t._v(" "),s("p",[t._v("  1.语法简洁，更加语义化\n  2.基于标准Promise实现，支持async/await\n  3.更加底层，提供的api丰富（request,response)\n  4.脱离了XHR,是ES规范里新的实现方式")]),t._v(" "),s("h3",{attrs:{id:"_2-fetch存在的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-fetch存在的问题"}},[t._v("#")]),t._v(" 2 fetch存在的问题")]),t._v(" "),s("p",[t._v("  1.fetch是一个底层次的api，使用起来不是那么舒服,只对网络请求报错，对400,500都当做成功的请求， 服务器返回400,500错误码时并不会reject,只有网络错误这些导致请求不能完成时，fetch才会被reject\n  2. fetch默认不会带cookie, 需要添加配置项fetch(url, {credentials:'include'})\n  3.fetch不支持abort,不支持超时控制，使用setTimeout以及Promise.reject实现超时控制并不能阻止请求过程继续在后台运行，造成了流量浪费\n  4. fetch没有办法原生检测请求的进度，而XHR可以")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("fetch('https://example.com/movies.json')// 第二个参数指定post 和get\n.then((res) => res.json())\n.then((data) => console.log(data));\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h3",{attrs:{id:"_2-axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-axios"}},[t._v("#")]),t._v(" 2 axios")]),t._v(" "),s("p",[t._v("  axios是一个基于Promise用于浏览器和nodejs的HTTP客户端，本质上是对原生XHR的封装，只不过他是Promise的 实现版本，符合最新的es规范，他的特点")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("1.从浏览器中创建XMLHttpRequest\n2.支持Promise api\n3.客户端支持CSRF\n4.提供了一些并发请求的接口\n5.从node.js创建http请求\n6.拦截请求和响应\n7.转换请求和响应数据\n8.取消请求\n9.自动转换JSON数据\n")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);