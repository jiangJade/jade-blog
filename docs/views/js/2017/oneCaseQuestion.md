---
title: 一道经典的js面试题
date: 2017-09-10
tags:
 - js
categories:
 - js
---

### 题目
```
function Foo() {
    getName = function () { alert (1); };
    return this;
}
Foo.getName = function () { alert (2);};
Foo.prototype.getName = function () { alert (3);};
var getName = function () { alert (4);};
function getName() { alert (5);}
 
//请写出以下输出结果：
Foo.getName();
getName();
Foo().getName();
getName();
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

### 第一个问题
第一问的Foo.getName自然是访问Foo函数上存储的静态属性，所以答案是2。回顾以前知识
```
function User(name) {
    var name = name; //私有属性
    this.name = name; //公有属性
    function getName() { //私有方法
        return name;
    }
}
User.prototype.getName = function() { //公有方法
    return this.name;
}
User.name = 'Wscats'; //静态属性
User.getName = function() { //静态方法
    return this.name;
}
var Wscat = new User('Wscats'); //实例化
```
### es5、es6构造函数区别

### 1 生成对象的constructor函数区别。
相同：es5和es6如果不定义constructor时，在新建new对象时都会默认生成。对象的constructor都指向构造函数也指向构造函数的prototype下的constructor函数（如下）
:::tip
不同：如果我们自己定义constructor，es5不会在新建对象时立即执行，但是es6时在new时自动执行constructor
:::

es5构造函数
```
function M(){
    var a=1;
    this.constructor=function(){console.log(1)}
}
var m=new M();//undefined
m.constructor===M.prototype.constructor;//true
m.constructor===M;//true
```

es6构造函数
```
class F {
  constructor() {console.log(2)
    return this;
  }
}
var f=new F();//2
f.constructor===F;//true
f.constructor===F.prototype.constructor;//true;
```

### 调用方式

es5可以用new生成，对象，也可以直接调用构造函数，只是直接调用构造函数，将作为普通函数来用。例如可以调用函数M();
es6 必须用new生成对象。不能直接调用构造函数。

### 对象的 _ proto_一致

es5和es6的生成对象的proto 都是指向构造函数的prototype对象。修改一个对象的proto对象将会引起所有对象的更改

```
var f2=newF();
f.__proto__===f2.__proto__ ;//true;
```

### 第二问

直接调用getName函数。既然是直接调用那么就是访问当前上文作用域内的叫getName的函数，所以这里应该直接把关注点放在4和5上，跟1 2 3都没什么关系。当然后来我问了我的几个同事他们大多数回答了5。此处其实有两个坑，一是变量声明提升，二是函数表达式和函数声明的区别。

我们来看看为什么，可参考(1)关于Javascript的函数声明和函数表达式 (2)关于JavaScript的变量提升

在Javascript中，定义函数有两种类型

#### 函数声明

```
// 函数声明
function wscat(type) {
    return type === "wscat";
}
```

#### 函数表达式
```
// 函数表达式
var oaoafly = function(type) {
    return type === "oaoafly";
}
```

先看下面这个经典问题，在一个程序里面同时用函数声明和函数表达式定义一个名为getName的函数

```
getName() //oaoafly
var getName = function() {
    console.log('wscat')
}

getName() //wscat

function getName() {
    console.log('oaoafly')
}

getName() //wscat

```

上面的代码看起来很类似，感觉也没什么太大差别。但实际上，Javascript函数上的一个“陷阱”就体现在Javascript两种类型的函数定义上。

JavaScript 解释器中存在一种变量声明被提升的机制，也就是说函数声明会被提升到作用域的最前面，即使写代码的时候是写在最后面，也还是会被提升至最前面。

而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用
```
var getName //变量被提升，此时为undefined

getName() //oaoafly 函数被提升 这里受函数声明的影响，虽然函数声明在最后可以被提升到最前面了
var getName = function() {
    console.log('wscat')
} //函数表达式此时才开始覆盖函数声明的定义
getName() //wscat
function getName() {
    console.log('oaoafly')
}
getName() //wscat 这里就执行了函数表达式的值
```

所以 答案是4, 5的函数声明被4的函数表达式覆盖了

### 第三问

Foo().getName(); 先执行了Foo函数，然后调用Foo函数的返回值对象的getName属性函数。是一句函数赋值语句，注意它没有var声明，所以先向当前Foo函数作用域内寻找getName变量，没有。再向当前函数作用域上层，即外层作用域内寻找是否含有getName变量，找到了，也就是第二问中的alert(4)函数，将此变量的值赋值为function(){alert(1)}。

此处实际上是将外层作用域内的getName函数修改了。
:::tip
注意：此处若依然没有找到会一直向上查找到window对象，若window对象中也没有getName属性，就在window对象中创建一个getName变量。
:::
[es的构造函数不用new实例化，直接调用的将作为普通函数来用][]

之后Foo函数的返回值是this，而JS的this问题已经有非常多的文章介绍，这里不再多说。

简单的讲，this的指向是由所在函数的调用方式决定的。而此处的直接调用方式，this指向window对象。

遂Foo函数返回的是window对象，相当于执行window.getName()，而window中的getName已经被修改为alert(1)，所以最终会输出1
此处考察了两个知识点，一个是变量作用域问题，一个是this指向问题
我们可以利用下面代码来回顾下这两个知识点

var name = "Wscats"; //全局变量
window.name = "Wscats"; //全局变量
function getName() {
name = "Oaoafly"; //去掉var变成了全局变量
var privateName = "Stacsw";
return function() {
console.log(this); //window
return privateName
}
}
var getPrivate = getName("Hello"); //当然传参是局部变量，但函数里面我没有接受这个参数
console.log(name) //Oaoafly
console.log(getPrivate()) //Stacsw

因为ES6之前JS除了函数没有块级作用域，仅函数是能产生一个作用域的，函数内部不同定义值的方法会直接或者间接影响到全局或者局部变量，函数内部的私有变量可以用闭包获取，函数还真的是第一公民呀~

而关于this，this的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定this到底指向谁，实际上this的最终指向的是那个调用它的对象

所以第三问中实际上就是window在调用**Foo()**函数，所以this的指向是window

window.Foo().getName();
//->window.getName();

### 第四问
直接调用getName函数，相当于window.getName()，
:::tip
因为这个变量已经被Foo函数执行时修改了，遂结果与第三问相同，为1，也就是说Foo执行后把全局的getName函数给重写了一次，
:::
所以结果就是Foo()执行重写的那个getName函数

### 第五问

new Foo.getName();此处考察的是JS的运算符优先级问题，我觉得这是这题灵魂的所在，也是难度比较大的一题

new Foo.getName();的优先级是这样的

相当于是:

new (Foo.getName)();

点的优先级比new无参数列表优先级高
当点运算完后又因为有个括号()，此时就是变成new有参数列表，所以直接执行new，当然也可能有朋友会有疑问为什么遇到()不函数调用再new呢，那是因为函数调用比new有参数列表优先级低
.成员访问->new无参数列表
所以这里实际上将getName函数作为了构造函数来执行，遂弹出2。

### 第六题

这一题比上一题的唯一区别就是在Foo那里多出了一个括号，这个有括号跟没括号我们在第五问的时候也看出来优先级是有区别的

:::tip
(new Foo()).getName()
那这里又是怎么判断的呢？首先new有参数列表,跟点的优先级是同级，同级的话按照从左向右的执行顺序，所以先执行new有参数列表,再执行点的优先级，最后再函数调用
new有参数列表->.成员访问->()函数调用

1. 这里确实是(new Foo()).getName()，但是跟括号优先级高于成员访问没关系，实际上这里成员访问的优先级是最高的，因此先执行了 .getName，但是在进行左侧取值的时候， new Foo() 可以理解为两种运算：new 带参数（即 new Foo()）和函数调用（即 先 Foo() 取值之后再 new），而 new 带参数的优先级是高于函数调用的，因此先执行了 new Foo()，或得 Foo 类的实例对象，再进行了成员访问 .getName。

2. 第五问和第六问的优先级，new Foo()中的括号并不是括号运算符，而是函数调用的一部分
new Foo.getName(); 和 new Foo().getName(); 的区别在于
new Foo 结合属于 new 无参数列表的情况（17级）
new Foo() 结合属于 new 有参数列表的情况（18级）

成员访问运算符（.）优先级为 18 级，和 new Foo() 同级
对于同级运算符，按照从左到右的顺序依次计算
所以先执行 new Foo() 返回一个 Foo 的对象 ，对 Foo 对象调用 getName 时查找引用链，得到 Foo.prototype.getName

new Foo 结合被判定为无参数列表的new，优先级低于成员访问，
所以先执行成员访问得到 Foo 的属性 getName， 然后 Foo.getName 和 new 结合，执行带参数列表的 new 运算

:::

:::wring
需要注意的是带参数列表的 new ...(...) 看起来像是 new 后面跟了一个函数调用，但在判断运算符优先级时 new 运算是一个整体，不能把它分开
javascript 中设定带参数列表 new 的优先级高于函数调用，那么在满足带参数列表的 new 运算符时，就不存在函数调用了
虽然带参数列表的 new 运算也会执行函数调用，但是在判断运算时不把 new 和 ...(...) 分开。
:::

### 第七问

new new Foo().getName();

((new Foo()).getName())()
等价于
```var a = new Foo()
var b = a.getName
var c = new b()

new ...(...) 
从内往外外去配套
```