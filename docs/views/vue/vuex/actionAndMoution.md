---
title: action和mutations的理解
date: 2018-5-6
tags:
 - vue
categories:
 - vue
---
::: tip
    action 可为异步, mutations必须为同步, 小朋友你是不是有很多问号
:::

1 action的作用
    业务代码、异步请求。
    可以异步，但不能直接操作State。
```
    actions: {

    changeUserName (context, newValue) { // context: 上下文  context 是 state 的父级，包含 state、getters
        // context 官方给出的指定对象, 此处context可以理解为store对象
        console.log(context, newValue)

        context.commit('handleUserName', newValue)

    }

  }
```

2 mutations的作用
    vuex中唯一修改state值的地方
    必须同步执行，写成异步在调试的时候有问题，表现就是devtools中在mutations修改了state但是值未更新
```
    mutations: {

        handleUserName (state, newValue) {
            state.userInfo.name = newValue
        }

    }
```
```
import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

let Store = new Vuex.Store({

  state: { // 仓库

    userInfo: {

      name: 'Test'

    }

  },

  getters: { // 监听state里面某个属性的变化，类似computed属性

    getUserInfo (state) {

      // state.userInfo.name = 666 // 不能在此改变state中的数据，不会报错，但是无效

      return state.userInfo

    }

  },

  // // 只能在这里才能改变state里面的数据，mutations必须是同步函数。原因是在mutation中混合异步调用会导致程序很难调试。用devtools很难追踪状态的改变。所以就定义了一个actions专门进行异步的处理。

  mutations: {

    handleUserName (state, newValue) {

        state.userInfo.name = newValue
    }

  },

  actions: {
    changeUserName (context, newValue) { // context: 上下文

        console.log(context, newValue)
        context.commit('handleUserName', newValue)
    }

  }

})

export default Store
```
