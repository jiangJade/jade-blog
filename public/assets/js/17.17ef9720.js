(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{487:function(t,p,e){t.exports=e.p+"assets/img/http-https.48908b81.jpg"},546:function(t,p,e){"use strict";e.r(p);var s=e(4),n=Object(s.a)({},(function(){var t=this,p=t.$createElement,s=t._self._c||p;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("TCP 是端到端的可靠连接，每次链接之前都要进行三次握手，可以保证数据的完整和正确。")]),t._v(" "),s("p",[t._v("UDP是不可靠的，它只管自己发不管对方接受。")]),t._v(" "),s("div",{staticClass:"language-tip line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("   所以常用的网页都是基于TCP，而QQ、微信等实时通讯工具和视频等下载都是使用UDP\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("http")]),t._v(" "),s("p",[t._v("什么是http：它是一种超文本传输协议。http是基于TCP的可靠传输。")]),t._v(" "),s("p",[t._v("1 http1.0")]),t._v(" "),s("p",[t._v("http1.0在1996年就出来了，最初的目的是为了一种发布和接受html的方法，从服务器传输超文本到浏览器的传输协议。默认端口80。")]),t._v(" "),s("p",[t._v("2 http1.1")]),t._v(" "),s("p",[t._v("在http1.1出来的半年就出现了，也是现行使用最广泛的协议，http1.1继承了1.0的优点并做了大量改动，主要的一个就是默认keep-alive长链接，因为每次握手都带来巨大的开销，长连接（PersistentConnection) 允许用户在一次TCP上面发送多个thhp,减少大量不必要的开销。")]),t._v(" "),s("p",[t._v("3 http2.0")]),t._v(" "),s("p",[t._v("3.1 多路传输：HTTP/1.X有个问题叫线端阻塞（head-of-line blocking), 它是指一个链接（connection)一次只提交一个请求的效率比较高，多了就会变慢。HTTP/1.1 试过用流水线(pipelining)来解决这个问题, 但是效果并不理想(数据量较大或者速度较慢的响应, 会阻碍排在他后面的请求). 此外, 由于网络媒介(intermediary )和服务器不能很好的支持流水线, 导致部署起来困难重重。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",[t._v("而多路传输(Multiplexing)能很好的解决这些问题, 因为它能同时处理多个消息的请求和响应; 甚至可以在传输过程中将一个消息跟另外一个掺杂在一起。所以客户端只需要一个连接就能加载一个页面。")])]),t._v(" "),s("p",[t._v("3.2 spdy 二进制传输")]),t._v(" "),s("p",[t._v("在应用层与传输层之间增加一个二进制分帧层，以此达到“在不改动HTTP的语义，HTTP 方法、状态码、URI及首部字段的情况下，突破HTTP1.1的性能限制，改进传输性能，实现低延迟和高吞吐量。”在二进制分帧层上，HTTP2.0会将所有传输的信息分割为更小的消息和帧,并对它们采用二进制格式的编码，其中HTTP1.x的首部信息会被封装到Headers帧，而我们的request body则封装到Data帧里面。")]),t._v(" "),s("p",[t._v("http vs https")]),t._v(" "),s("p",[s("img",{attrs:{src:e(487),alt:"call"}})])])}),[],!1,null,null,null);p.default=n.exports}}]);