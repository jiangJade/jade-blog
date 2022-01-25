---
title: 实现webpack第一步
date: 2021-3-5
tags:
  - webpack
categories:
  - webpack
---

## devtool: 配置

eval,source-map,cheap-source-map,module,inline

### source-map

五个关键字

原始代码

### devtool: 配置

source-map 会产生一个 map 文件，
cheap 不包含列信息也不包含 loader 的 sourcemap,即便宜的 source-map，看不到最原始的代码了

module 包含 loader 的 sourcemap (比如 jsx to js, babel 的 sourcemap),否则无法定义源文件
inline 将 map 作为 DateURL 嵌入，不单独生成.map 文件

### eval

使用 eval 的原因，性能最好，可以缓存模块的 source-map 文件；所以性能好

```js
module.exports = {
  devtool: 'cheap-source-map',
  devtool: 'cheap-module-source-map',
};
```
