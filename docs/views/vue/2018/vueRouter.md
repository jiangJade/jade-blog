---
title: vue-router有哪几种导航钩子
date: 2018-4-8
tags:
 - vue
categories:
 - vue
---

::: tip
    vue-router的导航钩子,主要用来作用是拦截导航,让他完成路由跳转或取消。
    有三种方式可以植入路由导航过程中：
    1.全局
    2.单个路由独享
    3.组件级的
:::

1 全局导航钩子
    全局导航钩子主要有两种：前置守卫、后置钩子，注册一个全局前置守卫
``` js
    const router = new VueRouter({...});
    router.beforeEach((to, from, next) => {
        // 
    })
```
to、from、next这三个参数分别的作用：
.1 to: Route, 代表要进入的目标，它是一个路由对象
.2 from: Route, 代表当前正要离开的路由，也是一个路由对象
.3 next: Function, 这个方法必须调用，执行的具体结果则依赖next方法调用的参数
``` js
    1. next(): 不传参数， 进入下一个钩子，如果全部的钩子执行完了，则导航的状态就是confirmed(确认的)。
    2. next(false): 这代表中断掉当前的导航，即to代表的路由对象不会进入，被中断，此时该表URL的地址会被重置到from的路由对应的地址。
    3. next('/')和next({path: '/'}): 在中断掉当前导航的同时，跳转到一个不同的地址
    4. next(error): 如果传入参数是一个Error实例，那么导航被终止的同时会将错误传递给 router.onError
```
2 路由独享的钩子
就是单个路由独享的导航钩子，它是在路由配置上直接进行定义的：
```js
    const router = new VueRouter({
        routes: [
            {
                path: '/home',
                component: Home,
                beforeEnter: (to, from, next) => {
                    //
                }
            }
        ]
    })
    三个参数和全局前置守卫是一样的
```
3 组件内的导航钩子
组件内的导航钩子主要有三种：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave。

```js
    const Home = {
        tempalte: `<div>home page</div>`,
        beforeRouteEnter(to, from ,next) {
            // 在渲染该组件的对应路由被 confirm前调用
        },
        beforeRouteUpdate(to, from, next) {
            // 在当前路由改变，但是依然在渲染该组件事调用
        },
        beforeRouteLeave(to, from, next) {
            // 导航离开该组件的对应路由时被调用
        }
    }
```