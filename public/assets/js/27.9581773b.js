(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{542:function(t,a,v){"use strict";v.r(a);var _=v(4),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"_1-正则是什么？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-正则是什么？"}},[t._v("#")]),t._v(" 1 正则是什么？")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("正则就是用有限的符号，表达无限的序列，殆已！")])]),t._v(" "),v("p",[t._v("  正则表达式的语法一般如下，两条斜线中间是正则主体，这部分可以有很多字符组成；"),v("font",{attrs:{color:"#2E6CEA"}},[t._v("i部分是修饰符，i的意思表示忽略大小写")])],1),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("/^abc/i\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h2",{attrs:{id:"_2-正则定义了很多特殊意义的字符，有名词，量词，谓词等，下面逐一介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-正则定义了很多特殊意义的字符，有名词，量词，谓词等，下面逐一介绍"}},[t._v("#")]),t._v(" 2 正则定义了很多特殊意义的字符，有名词，量词，谓词等，下面逐一介绍")]),t._v(" "),v("h3",{attrs:{id:"_1-简单字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-简单字符"}},[t._v("#")]),t._v(" 1 简单字符")]),t._v(" "),v("p",[t._v("  没有特殊意义的字符都是简单字符，简单字符就代表自身，绝大部分字符都是简单字符，举个例子")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("/cmd/ // 匹配 cmd\n/123/ // 匹配 123\n/-_-/ // 匹配 -_-\n/中文/ // 匹配 中文\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("h3",{attrs:{id:"_2-转义字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-转义字符"}},[t._v("#")]),t._v(" 2 转义字符")]),t._v(" "),v("p",[t._v("\\是转义字符，其后面的字符会代表不同的意思，转义字符主要有三个作用：")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("第一种，是为了匹配不方便显示的特殊字符，比如换行，tab符号等")]),t._v(" "),v("p",[t._v("第二种，正则中预先定义了一些代表特殊意义的字符，比如\\w等")]),t._v(" "),v("p",[t._v("第三种，在正则中某些字符有特殊含义(比如下面说到的)，转义字符可以让其显示自身的含义")])]),t._v(" "),v("p",[t._v("  下面是常用转义字符列表：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("规则")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("\\n")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配换行符")])]),t._v(" "),v("tr",[v("td",[t._v("\\r")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配回车符")])]),t._v(" "),v("tr",[v("td",[t._v("\\t")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配制表符，也就是tab键")])]),t._v(" "),v("tr",[v("td",[t._v("\\v")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配垂直制表符(表示几个换行符)")])]),t._v(" "),v("tr",[v("td",[t._v("\\x20")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("20是2位16进制数字，代表对应的字符")])]),t._v(" "),v("tr",[v("td",[t._v("\\u002B")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("002B是4位16进制数字，代表对应的字符")])]),t._v(" "),v("tr",[v("td",[t._v("\\w")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配任何一个字母或者数字或者下划线")])]),t._v(" "),v("tr",[v("td",[t._v("\\W")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配任何一个字母或者数字或者下划线以外的字符")])]),t._v(" "),v("tr",[v("td",[t._v("\\s")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配空白字符，如空格，tab等")])]),t._v(" "),v("tr",[v("td",[t._v("\\S")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配非空白字符")])]),t._v(" "),v("tr",[v("td",[t._v("\\d")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配数字字符，0~9")])]),t._v(" "),v("tr",[v("td",[t._v("\\D")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配非数字字符")])]),t._v(" "),v("tr",[v("td",[t._v("\\b")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配单词的边界")])]),t._v(" "),v("tr",[v("td",[t._v("\\B")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配非单词边界")])]),t._v(" "),v("tr",[v("td",[t._v("\\")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("匹配\\本身")])])])]),t._v(" "),v("h3",{attrs:{id:"_3-字符集和"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-字符集和"}},[t._v("#")]),t._v(" 3 字符集和")]),t._v(" "),v("p",[t._v("  有时我们需要匹配一类字符，字符集可以实现这个功能，字符集的语法用[]分隔，下面的代码能够匹配g或a或d")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("[gad]\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("  如果要表示字符很多，可以使用-表示一个范围内的字符，下面两个功能相同")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("[0123456789]\n[0-9]\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("p",[t._v("  在前面添加^，可表示非的意思，下面的代码能够匹配gad之外的任意字符")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("[^gad]\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("p",[t._v("  其实正则还内置了一些字符集，在上面的转义字符有提到，下面给出内置字符集对应的自定义字符集")]),t._v(" "),v("p",[t._v(".匹配除了换行符（\\n）以外的任意一个字符 = [^\\n]\n. \\w = [0-9a-zA-Z_]\n. \\W = [^0-9a-zA-Z_]\n. \\s = [ \\t\\n\\v]\n. \\S = [^ \\t\\n\\v]\n. \\d = [0-9]\n. \\D = [^0-9]")]),t._v(" "),v("h2",{attrs:{id:"_4-量词"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-量词"}},[t._v("#")]),t._v(" 4 量词")]),t._v(" "),v("p",[t._v("  如果我们有三个苹果，我们可以说自己有个3个苹果，也可以说有一个苹果，一个苹果，一个苹果，每种语言都有量词的概念")]),t._v(" "),v("p",[t._v("  如果需要匹配多次某个字符，正则也提供了量词的功能，正则中的量词有多个，如?、+、*、{n}、{m,n}、{m,}")]),t._v(" "),v("p",[t._v("  {n}匹配n次，比如a{2}，匹配aa")]),t._v(" "),v("p",[t._v("  {m, n}匹配m-n次，优先匹配n次，比如a{1,3}，可以匹配aaa、aa、a")]),t._v(" "),v("p",[t._v("  {m,}匹配m-∞次，优先匹配∞次，比如a{1,}，可以匹配aaaa...")]),t._v(" "),v("p",[t._v("  ?匹配0次或1次，优先匹配1次，相当于{0,1}")]),t._v(" "),v("p",[t._v("  +匹配1-n次，优先匹配n次，相当于{1,}")]),t._v(" "),v("p",[t._v("  *匹配0-n次，优先匹配n次，相当于{0,}")]),t._v(" "),v("p",[t._v("  正则默认和人心一样是贪婪的，也就是常说的贪婪模式，凡是表示范围的量词，都优先匹配上限而不是下限")]),t._v(" "),v("h2",{attrs:{id:"_5-字符边界"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-字符边界"}},[t._v("#")]),t._v(" 5 字符边界")]),t._v(" "),v("p",[t._v("  有时我们会有边界的匹配要求，比如以xxx开头，以xxx结尾")]),t._v(" "),v("p",[t._v("  ^在[]外表示匹配开头的意思")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("^abc // 可以匹配abc，但是不能匹配aabc")])]),t._v(" "),v("p",[t._v("  $表示匹配结尾的意思")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("abc$ // 可以匹配abc，但是不能匹配abcc")])]),t._v(" "),v("p",[t._v("  上面提到的\\b表示单词的边界")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("abc\\b // 可以匹配 abc ，但是不能匹配 abcc")])]),t._v(" "),v("h2",{attrs:{id:"_6-选择表达式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-选择表达式"}},[t._v("#")]),t._v(" 6 选择表达式")]),t._v(" "),v("p",[t._v("有时我们想匹配x或者y，如果x和y是单个字符，可以使用字符集，[abc]可以匹配a或b或c，如果x和y是多个字符，字符集就无能为力了，此时就要用到分组")]),t._v(" "),v("p",[t._v("正则中用|来表示分组，a|b表示匹配a或者b的意思")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("123|456|789 // 匹配 123 或 456 或 789")])]),t._v(" "),v("h2",{attrs:{id:"_7-分组与引用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-分组与引用"}},[t._v("#")]),t._v(" 7 分组与引用")]),t._v(" "),v("p",[t._v("分组是正则中非常强大的一个功能，可以让上面提到的量词作用于一组字符，而非单个字符，分组的语法是圆括号包裹(xxx)")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("(abc){2} // 匹配abcabc\n分组不能放在[]中，但分组中还可以使用选择表达式\n(123|456){2} // 匹配 123123、456456、123456、456123")])]),t._v(" "),v("p",[t._v("和分组相关的概念还有一个捕获分组和非捕获分组，分组默认都是捕获的，在分组的(后面添加?:可以让分组变为非捕获分组，非捕获分组可以提高性能和简化逻辑")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("'123'.match(/(?:123)/) // 返回 ['123']\n'123'.match(/(123)/)  // 返回 ['123', '123']")])]),t._v(" "),v("p",[t._v("和分组相关的另一个概念是引用，比如在匹配html标签时，通常希望"),v("xxx"),t._v("后面的xxx能够和前面保持一致")],1),t._v(" "),v("p",[t._v("引用的语法是\\数字，数字代表引用前面第几个捕获分组，注意非捕获分组不能被引用")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("<([a-z]+)></\\1> // 可以匹配 "),v("code",[t._v("<span></span>")]),t._v(" 或 "),v("code",[t._v("<div></div>")]),t._v("等")])]),t._v(" "),v("h2",{attrs:{id:"_8-预搜索"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-预搜索"}},[t._v("#")]),t._v(" 8 预搜索")]),t._v(" "),v("p",[t._v("如果你想匹配xxx前不能是yyy，或者xxx后不能是yyy，那就要用到预搜索")]),t._v(" "),v("p",[t._v("js只支持正向预搜索，也就是xxx后面必须是yyy，或者xxx后面不能是yyy")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("1(?=2) // 可以匹配12，不能匹配22\n1(?!2) // 可有匹配22，不能匹配12")])]),t._v(" "),v("p",[t._v("修饰符\n默认正则是区分大小写，这可能并不是我们想要的，正则提供了修饰符的功能，修复的语法如下")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",[t._v("/xxx/gi // 最后面的g和i就是两个修饰符\ng正则遇到第一个匹配的字符就会结束，加上全局修复符，可以让其匹配到结束")]),t._v(" "),v("p",[t._v("i正则默认是区分大小写的，i可以忽略大小写")]),t._v(" "),v("p",[t._v("m正则默认情况下，^和$只能匹配字符串的开始和结尾，m修饰符可以让^和$匹配行首和行尾，不理解就看例子")]),t._v(" "),v("p",[t._v("/jing$/ // 能够匹配 'yanhaijing，不能匹配 'yanhaijing\\n'\n/jing$/m // 能够匹配 'yanhaijing， 能够匹配 'yanhaijing\\n'")]),t._v(" "),v("p",[t._v("/^jing/ // 能够匹配 'jing'，不能匹配 '\\njing'\n/^jing/m // 能够匹配 'jing'，能够匹配 '\\njing'")])])])}),[],!1,null,null,null);a.default=s.exports}}]);