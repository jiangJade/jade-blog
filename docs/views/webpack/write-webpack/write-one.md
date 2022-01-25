---
title: 实现webpack第一步
date: 2021-3-5
tags:
  - webpack
categories:
  - webpack
---

```js
// babel - core;
module: {
  rules: [
    {
      test: /\.jsx?$/,
      use: 'eslint-loader',
      enforce: 'pre', // 强制指定顺序 pre之前 pre normal inline post
      options: { fix: true }, // 启动自动修复
      includes: resolve(__dirname),
    },
    {
      test: /\.jsx?$/,
      use: [{ loader: 'babel-loader' }],
    },
  ];
}
```

```js
// .eslintrc.js
module.export = {
  parser: 'babel-eslint',
  root: true, // 跟配置文件
  parser: 'babel-eslint', // 需要一个
  // 指定解析器选项
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
  env: {
    browser: true,
  },
  // 启用的规则及其各自的错误级别
  rules: {
    "linebreak-style":"off",
    indent: ["error",4], // 缩进风格
    quotes: "off, // 引号类型
    "no-console": "off", // 禁止使用console
  },
};
```

```js
// 自动修复eslint文件错误 在个目录建.vscode文件夹 新建settings.json文件
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "editor.codeActionsOnSave": { // 代码保存之后
    "source.fixAll.eslint":true // 修复所有文件
  }
}
```
