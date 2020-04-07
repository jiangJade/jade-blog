---
title: 如何在ES5环境下实现let和const
date: 2020-01-29
tags:
 - js
categories:
 - js
---

### 1. ES5环境下实现let

    ```
    源代码
    for(let i = 0; i < 10; i++) {
        console.log(i)
    }

    // babel转化后
    for(var _i = 0; _i < 10; _i++) {
        console.log(_i) // 输出 0 ~ 10
    }
    ```
    babel在let定义的变量前加了道下划线，避免在块级作用域外访问到该变量，
    除了对变量名的转换，我们也可以通过自执行函数来模拟块级作用域
    ```
    (function(){
        for(var i = 0; i < 5; i ++){
            console.log(i)  // 0 1 2 3 4
        }
    })();

    console.log(i)      // Uncaught ReferenceError: i is not defined
    ```
### 2. 如何在ES5环境下实现const

    实现const的关键在于Object.defindProperty()[https://developer.mozilla.org]('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty')，
    这个API用于在一个对象上增加或修改属性。通过配置属性描述符，
    可以精确地控制属性行为。Object.defindProperty() 接收三个参数：
    Object.defineProperty(obj, prop, desc)

    | 参数        | 说明           |
    | ------------- |:-------------:|
    | obj      | 要在其上定义属性的对象 |
    | prop      | 要定义或修改的属性的名称      |
    | descriptor | 将被定义或修改的属性描述符      |

    | 属性描述符        | 说明           | 默认值  |
    | ------------- |:-------------:| -----:|
    | value | 该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。
     默认为 undefined | undefined |

    | get | 一个给属性提供 getter 的方法，如果没有 getter 则为 undefined | undefined |

    | set | 一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。
    当属性值修改时，触发执行该方法 | undefined |

    | writable | 当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false | false |

    | enumerable | enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举 | false |

    | Configurable | configurable特性表示对象的属性是否可以被删除，
    以及除value和writable特性外的其他特性是否可以被修改 | false |

    ```
    function _const(key, value) {
        const desc = {
            value,
            writable: false
        }
        Object.defineProperty(window, key, desc)
    }


    _const('obj', {a: 1})   //定义obj
    obj.b = 2               //可以正常给obj的属性赋值
    obj = {}                //抛出错误，提示对象read-only
    ```
