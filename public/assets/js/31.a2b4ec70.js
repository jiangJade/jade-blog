(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{540:function(t,a,e){"use strict";e.r(a);var s=e(4),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"_1-强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-强缓存"}},[t._v("#")]),t._v(" 1 强缓存")]),t._v(" "),e("p",[t._v("  浏览器加载一个页面的简单流程如下：")]),t._v(" "),e("h3",{attrs:{id:"_1-。-浏览器先根据这个资源的http头信息来判断是否命中强缓存。命中直接加载在缓存中的资源-并不会向浏览器发送请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-。-浏览器先根据这个资源的http头信息来判断是否命中强缓存。命中直接加载在缓存中的资源-并不会向浏览器发送请求"}},[t._v("#")]),t._v(" 1 。 浏览器先根据这个资源的http头信息来判断是否命中强缓存。命中直接加载在缓存中的资源, 并不会向浏览器发送请求")]),t._v(" "),e("h3",{attrs:{id:"_2-强缓存标志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-强缓存标志"}},[t._v("#")]),t._v(" 2 强缓存标志")]),t._v(" "),e("p",[t._v("  http的状态码200   size中的cache-control两个来判断的")]),t._v(" "),e("p",[t._v("  强缓存是利用http返回头中的Expires或者Cache-Control两个字段来控制的，用来表示资源缓存的时间")]),t._v(" "),e("h3",{attrs:{id:"expires"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[t._v("#")]),t._v(" Expires")]),t._v(" "),e("p",[t._v("  缓存过期时间，用来指定资源到期的时间，是服务器的具体时间点。也就是说，Expires = max-age")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",[t._v("expires 有一个很大的缺陷 由于失效时间是一个绝对时间， 所以当客户端本地的时间被修改后，服务器与客户端时间偏差变大以后，就会导致缓存混乱")])]),t._v(" "),e("h3",{attrs:{id:"cache-control"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[t._v("#")]),t._v(" Cache-Control")]),t._v(" "),e("p",[t._v("  Cache-Control 是一个相对时间，例如Cache-Control：3600,代表着资源的有效时间是3600秒。由于是相对时间，并且都是与客户端时间比较，所以服务器与客户端时间偏差也不会导致问题。")]),t._v(" "),e("p",[t._v("  Cache-Control与Expires可以在服务端配置同时启用或者启用任意一个，同时启用的时候Cache-Control优先级高。")]),t._v(" "),e("p",[t._v("  Cache-Control 可以由多个字段组合而成，主要有以下几个取值\n1.max-age 指定一个时间的长度, 在这个时间段内缓存是有效的，单位是s。例如设置Cache-Control:max-age = 31536000, 也就是说缓存有效期为(3153600 / 24 / 60*60)天，第一次访问这个资源的时候，服务器端也返回了Expires字段，并且过期时间是一年后。")]),t._v(" "),e("h2",{attrs:{id:"_2-协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-协商缓存"}},[t._v("#")]),t._v(" 2 协商缓存")]),t._v(" "),e("p",[t._v("协商缓存协商的是什么呢？")]),t._v(" "),e("p",[t._v("浏览器问服务器我缓存的文件有没有更新？ 1.没有更新 浏览器就可以用缓存 304")]),t._v(" "),e("p",[t._v("2 文件更新了 浏览器就不能用缓存 浏览器就会发送请求 状态码是200")]),t._v(" "),e("p",[t._v("  若未命中强缓存，则浏览器会将请求发送至服务器。服务器根据http头信息中的Last-Modify/if-modify-since或者Etag/if-None-Match来判断是否命中协商缓存。如果命中，则http返回码为304，浏览器从缓存中加载资源。")]),t._v(" "),e("p",[t._v("  Last-Modify/if-modify-since")]),t._v(" "),e("p",[t._v("浏览器第一次请求一个资源的时候，服务器返回的header中会加上Last-Modify,Last-Modify是一个时间标识该资源最后修改时间")])])}),[],!1,null,null,null);a.default=r.exports}}]);