---
title: 跨域理解
date: 2020-02-26
tags:
 - js
categories:
 - js
---

## 1 为什么会有跨域？
Cross-origin Resource-Sharing翻译过来就是‘跨域资源共享’简称‘CORS',它突破了一个请求在浏览器发出只能在同源的情况下向服务器获取数据的限制。

## 2 什么是同源策略？
浏览器规定：只有在端口、域名、ip三元组相同的情况下才叫同源。

## 3 什么是（OPTIONS）预检请求？

预检请求就是在浏览器发送实际请求时先发送一个OPTIONS方法的请求向服务器确认，如果通过后就会发起真正的请求，这样可以避免跨域请求对服务器的用户数据造成影响。

## 4 什么情况下会发起预检请求？

:::tip
因为 CORS 将请求分为了两类：简单请求和非简单请求。
在简单请求中是不会发起预检请求的，只有’非简单请求‘才会发起预检请求。
简单请求是指：根据 MDN 的文档定义，请求方法为：GET、POST、HEAD，请求头 Content-Type 为：text/plain、multipart/form-data、application/x-www-form-urlencoded 的就属于 “简单请求” 不会触发 CORS 预检请求。

非简单请求：如果请求头的 Content-Type 为 application/json 就会触发 CORS 预检请求，这里也会称为 “非简单请求”。
:::

OPTIONS 是预检请求使用的方法，该方法是在 HTTP/1.1 协议中所定义的，还有一个重要的字段 Origin 表示请求来自哪个源，服务端则可以根据这个字段判断是否是合法的请求源，例如 Websocket 中因为没有了同源策略限制，服务端可以根据这个字段来判断。

Access-Control-Request-Method 告诉服务器，实际请求将使用 PUT 方法。

Access-Control-Request-Headers 告诉服务器，实际请求将使用两个头部字段 content-type,test-cors。这里如果 content-type 指定的为简单请求中的几个值，Access-Control-Request-Headers 在告诉服务器时，实际请求将只有 test-cors 这一个头部字段。

## 5 跨域服务端设置信息

```
res.writeHead(200, {
  'Access-Control-Allow-Origin': 'http://127.0.0.1:3010',
  'Access-Control-Allow-Headers': 'Test-CORS, Content-Type',
  'Access-Control-Allow-Methods': 'PUT,DELETE',
  'Access-Control-Max-Age': 86400
});
```
为什么是以上配置？首先预检请求时，浏览器给了服务器几个重要的信息 Origin、Method 为 PUT、Headers 为 content-type,test-cors 服务端在收到之后，也要做些设置，给予回应。

Access-Control-Allow-Origin 表示 “http://127.0.0.1:3010” 这个请求源是可以访问的，该字段也可以设置为 “*” 表示允许任意跨源请求。

Access-Control-Allow-Methods 表示服务器允许客户端使用 PUT、DELETE 方法发起请求，可以一次设置多个，表示服务器所支持的所有跨域方法，而不单是当前请求那个方法，这样好处是为了避免多次预检请求。

Access-Control-Allow-Headers 表示服务器允许请求中携带 Test-CORS、Content-Type 字段，也可以设置多个。

Access-Control-Max-Age 表示该响应的有效期，单位为秒。在有效时间内，浏览器无须为同一请求再次发起预检请求。还有一点需要注意，该值要小于浏览器自身维护的最大有效时间，否则是无效的。

## 6 跨域解决方法？
### cors
```
在 Node.js 中推荐你使用 cors 模块
const http = require('http');
const PORT = 3011;
const corsMiddleware = require('cors')({
  origin: 'http://127.0.0.1:3010',
  methods: 'PUT,DELETE',
  allowedHeaders: 'Test-CORS, Content-Type',
  maxAge: 1728000,
  credentials: true,
});

http.createServer((req, res) => {
  const { url, method } = req;
  console.log('request url:', url, ', request method:', method);
  const nextFn = () => {
    if (method === 'PUT' && url === '/api/data') {
      return res.end('ok!');
    }
    return res.end();
  }
  corsMiddleware(req, res, nextFn);
}).listen(PORT);
```

### JSONP
浏览器是允许像 link、img、script 标签在路径上加载一些内容进行请求，是允许跨域的，那么 jsonp 的实现原理就是在 script 标签里面加载了一个链接，去访问服务器的某个请求，返回内容。
```
 <srcipt src="http://127.0.0.1:3011/api/data"></srcipt>

```

相比上面 CORS 模块，JSONP 只支持 GET 请求，显然是没有 CORS 模块强大的。

### Nginx 代理服务器配置跨域

使用 Nginx 代理服务器之后，请求不会直接到达我们的服务器端，请求会先经过 Nginx 在设置一些跨域等信息之后再由 Nginx 转发到我们的 服务端，所以这个时候我们的 Nginx 服务器去监听的 3011 端口，我们把 服务的端口修改为3011，简单配置如下所示：
```
server {
  listen          3011;
  server_name     localhost;

  location / {
    if ($request_method = 'OPTIONS') {
      add_header 'Access-Control-Allow-Origin' 'http://127.0.0.1:3010';
      add_header 'Access-Control-Allow-Methods' 'PUT,DELETE';
      add_header 'Access-Control-Allow-Headers' 'Test-CORS, Content-Type';
      add_header 'Access-Control-Max-Age' 1728000;
      add_header 'Access-Control-Allow-Credentials' 'true';
      add_header 'Content-Length' 0;
      return 204;
    }

    add_header 'Access-Control-Allow-Origin' 'http://127.0.0.1:3010';
    add_header 'Access-Control-Allow-Credentials' 'true';

    proxy_pass http://127.0.0.1:30011;
    proxy_set_header Host $host;
  }
}
```
