import{_ as n,p as i,q as e,a1 as l}from"./framework-204010b2.js";const s={},d=l(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
# JS语言概述

## JS语言简史

1. JS语言的起源

网景（Netscape Communication Corperation），1994年，推出第一款商用浏览器，网景浏览器（Netscape Navigator）

1995年，网景公司决定在浏览器中加入一门语言，可以作交互效果，提高用户体验。

最终决定独立开发一门新的语言，聘请Brendan Eich，10天后，新的语言诞生

LiveScript -&gt; JavaScript (JS)

**JS语言之父：Brendan Eich**

2. 第一次浏览器大战

网景公司打算在浏览器中加入网络操作系统，影响到微软的利益，引起了微软的注意

1995年，微软发布IE浏览器。

JS语言推出之后，网景获得极大的竞争优势。

微软对JS语言反编译，借鉴JS语言，退出了JScript、VBScript

第一次浏览器大战是标准之争

1997，网景公司将javascript1.1版本提交给ECMA（欧洲计算机制造协会）

IE3发布，并绑定windows操作系统。

1998年，网景公司，被收购。

**ECMA收录了JavaScript，并提交给ISO，经过修改，成为了第一个JS的标准版本，成为ECMAScript，简称ES**

3. 第二次浏览器大战

IE4、IE5、IE6（windows xp）

微软决定解散浏览器团队。

Brendan Eich，带领团队成立Mozilla基金会，并决定，将网景浏览器开源。

长时间内，世界的技术爱好者，对网景浏览器，进行维护和打补丁

2002，Mozilla推出firefox浏览器。

2008，谷歌推出chrome浏览器，苹果推出safari，ASA公司推出opera

chrome浏览器搭载JS执行引擎V8（V8引擎，可以将JS代码直接转换为字节码，理论上，JS代码的执行速度已经接近汇编语言）

于是，JS具备了编写大型应用程序的能力，甚至服务器应用

&gt; Ryan Dahl 准备写一个服务器端的框架，直接利用V8引擎完成了该框架，该框架，称为nodejs

**V8，将JS的执行推向了一个新的台阶**

4. ES标准的发展

ES1，1997年
ES2，1998年
ES3，1999年
ES5，2009年，习惯上，不再区分 javascript （JS） 和 ECMAScript （ES）
ES6，2015年，ECMA宣布，从ES6开始，使用年号作为版本号，ES6的真正称呼为：ES2015
ES7，2016年，ES2016

**非常重要：ES制定语言标准，不涉及语言的运行环境。正是因为ES避免了运行环境，就让ES有机会在各种环境中执行。ES成为了通用编程语言**

**本课程学习的是，ES的通用语法、浏览器环境为其注入的新功能**

**通常，把ES运行的环境称之为，宿主环境**


## JS语言特性

- 解释型语言

编译型语言：C语言、C++、java语言、C#语言

编译型语言会经过一个翻译的过程，负责翻译的叫做编译器，翻译的结果，叫做编译结果。

优点：执行速度快
缺点：某个编译结果，难以适用于各种环境（跨平台障碍）；部署繁琐；

解释型语言：js、php

解释型语言没有编译结果

优点：跨平台；部署简单；
缺点：执行速度稍慢  

- 弱类型语言

弱类型：存放的数据类型可变。优点：灵活、易上手； 缺点：不严谨

强类型：存放的数据类型不可变。优点：严谨；缺点：不灵活、不易上手

&gt; 通常，将弱类型的解释型语言，称为脚本语言

- 单线程

同步现象：上一件事情没有做完，下一件事情必须等待。

- 异步

提高单线程的执行效率。

# 第一个JS程序

##  浏览器环境中，代码书写位置
1. 直接书写在页面中的script元素中
2. 书写到外部的js文件中，在页面中引用
   &lt;script src=&quot;JS.js&quot;&gt;&lt;/script&gt;

代码分离：内用、样式、功能三者分离，更加容易维护和阅读
- 页面中，可以存在多个script元素，执行顺序从上到下
- 如果一个script元素引用了外部文件，内部不能书写任何代码，书写了不会有效果
- script元素有一个可选的属性，type，该属性用于指定代码的类型，该属性值是MIME格式，text/JavaScript

## 认识基本语法
- 语法部分必须都是英文符号
- js代码由多条语句构成，每个语句用英文分号结束（并非强制要求）
- js代码从上到下同步执行(一个挨一个执行，执行完上一个再执行下一个)
  
## 认识输出语句
所有的输出语句都不是ES标准。
- document.write，该语句用于将数据输出到页面
- alert，该语句用于将数据用弹窗的形式显示到页面
- console.log，该语句用于将数据显示到控制台

## 认识输入语句
所有的输入语句都不是ES标准
- prompt,该语句用于以弹窗的形式显示到页面让用户输入数据
- prompt(&quot;请输入年龄&quot;);

## 认识注释
注释：提供给代码阅读者使用，不会参与执行
1. 单行注释  //
2. 多行注释  /*   */

在VSCode中，使用快捷键 ctrl + /，可以快速添加和取消单行注释
使用快捷键 alt + shift + a，可以快速添加和取消多行注释

&lt;!-- ## 作业
1. 在网页中书写多个script元素，在元素内部书写多种输出语句，然后运行页面查看效果。
2. 将代码提取到一个独立的js文件中，然后在页面中使用。 --&gt;


# 数据和数据类型
数据：有用的信息
数据类型：数据的分类
本节课学习的是：不同类型的数据的**字面量**表示法

## JS中的数据类型
学习JS中，不同数据类型的数据的书写方式

### 原始类型(基本类型)
原始类型指不可再细分的类型
1. 数字类型 number
直接书写即可
&gt; 了解：
&gt; 数字类型可以加上前缀，来表示不同的进制
&gt; 0：表示8进制,010=8
&gt; 0x：表示16进制,0x10=16
&gt; 0b: 表示2进制,0b10=2
2. 字符串类型 string
字符串：一长串文本（0个或多个）
- 单引号 &#39;&#39;
- 双引号 &quot;&quot;
- \`\`，模板字符串,可以在字符串中换行
  如:console.log(\`hellow
        
        word!\`);
在字符串中，如何表示一个特殊字符，可以使用转义符（\\）右斜杠，\\&#39;表示一个普通单引号，用于输出，\\\` \\&quot;一样，\\\\表示输出普通的\\
- \\n ：换行符
- \\t :制表符，建立一个格子，用于对齐文字
1. 布尔类型 boolean
布尔类型用于表达真或假两种状态
- true，表示真
- false，表示假
4. undefined类型
表示未定义，不存在。没有被占位
只有一种数据书写方式：undefined
5. null类型
表示空，不存在。相当于被放了一个东西占位
只有一种数据书写方式：null

&gt; 区分某些长数字和字符串: 如果按照数字的方式阅读，则使用数字类型；否则使用字符串类型（看念不念单位区分）
  比如手机号应该是字符串类型，“15093615025”，是字符串读法，如果按数字的方式读，则应该加单位，多少多少亿多少多少万...
  年龄是数字类型，有单位

### 引用类型
引用类型有两种：
- 对象 object （事物，东西，玩意儿）
可以认为，对象，是由多个基本类型组合而成。
书写对象的格式:

**属性**：对象的成员
- 函数（后续章节专门讲解）

## 得到数据的类型
在要输出的数据前加上 typeof ，输出数据类型
&gt; js的bug（特征）： typeof null，得到的是object

## 字面量
直接书写的具体的数据，叫做**字面量**
数字字面量
字符串字面量
undefined字面量
对象字面量
null字面量

&lt;!-- ## 作业
将自己作为一个对象，书写合适的对象属性，输出该对象。 --&gt;


# 变量
变量是一块内存空间，用于保存数据
&gt; 计算机：CPU、内存、硬盘、输入输出设备
&gt; 内存：存取速度快，数据易丢失
&gt; 硬盘：存取速度慢，数据永久保存
&gt; 计算机程序的运行，仅与内存打交道

## 如何使用变量
1. 声明（定义）变量
\`\`\`js
var 变量名; var 0;
        var &quot;asd&quot;;
        var a = 10;//将右边的东西存放到变量a中
        var pad;//声明了一个变量，名称为pad，目前，变量没有存东西，为undefined
        console.log(pad);//输出变量pad的值（pad中存放的数据）
        console.log(typeof pad);//输出变量pad的类型
\`\`\`
**变量声明后，它的值为undefined**

2. 给变量赋值
向变量的内存空间中存放数据
- 变量的值是可变的
变量可以被重新赋值，新的值会覆盖原来的值
- 变量的名称（变量是一个标识符）
在开发中，凡是需要自行命名的位置，叫做标识符
标识符的规范：
1） [必]只能以英文字母、下划线、$开头
2)  [必]其他位置可以出现数字、英文字母、下划线、$
3)  [必]不可以与关键字、保留词重复，就是计算机已定义的单词，一般写了VScode会变色且马上报错
4)  [选]标识符应该做到望文知义，方便理解
5)  [选]如果有多个单词，使用驼峰命名法，单词首字母大写

&gt; 大驼峰：每个单词首字母大写
&gt; 小驼峰：除第一个单词外，首字母大写
&gt; 目前，使用的标识符都是小驼峰命名法。rectangleWidth矩形的宽度

&gt; 宽度：width，高度：height，区域：area （quyu）

- 声明和赋值合并

变量的声明和赋值可以只用一条语句书写。
var asd = 100；
这是语法糖。
语法糖仅仅是为了方便代码书写或记忆，并不会有实质性的改变。

- 多个变量可以合并声明并赋值

语法糖

- **任何可以书写数据的地方，都可以书写变量**

- 若使用一个未声明的变量，会导致错误

例外：使用typeof得到类型时，可以是未声明的变量，得到的结果是undefined

- **JS中存在变量提升**

所有变量的声明，会自动的提到代码的最顶部

但是，这种提升，不会超越脚本块。
一个&lt;script&gt;&lt;/script&gt;就是一个脚本块

- JS中允许定义多个同名变量

同名变量，提升后会变成一个。


&lt;!-- ## 作业

定义三个变量，分别保存用户姓名、用户年龄、用户是否是vip，然后输出它们。 --&gt;


# 变量和对象

原始类型：number、string、boolean、null、undefined

引用类型：object、function 函数

&gt;在js中，变量在使用时可以不写var，直接赋值，a = 123； 
&gt;相当于给windows的某个属性直接赋值，不能这样写

## 在变量中存放对象

1. 通过变量，读取对象中的某个属性

\`\`\`js
变量名.属性名
\`\`\`

**当读取的属性不存在时，会得到undefined**

**当读取属性的对象不存在（undefined 或 null）时，程序报错**

2. 通过变量，更改对象中的某个属性

**当赋值的属性不存在时，会添加属性**

3. 删除属性

\`\`\`js
delete 变量名.属性名;
delete xiaoZhang.girlFriend;
xiaoMing.girlFriend = undefined;
\`\`\`
console.log(xiaoMing.girlFriend.name,xiaoZhang.girlFriend.name);

4. 属性表达式

给属性赋值，或读取属性时，可以使用下面的格式操作

\`\`\`js
对象变量[&quot;属性名&quot;]
console.log(xiaoMing[&quot;age&quot;]);
里边填的是一个字符串
\`\`\`
应用于包含特殊字符的属性名：console.log(xiaoMing[&quot;？dsf—_!!@sf&quot;]);
  var xiaoZhang = {
            name:&quot;zhangDaShan&quot;,
            age:28,
            sex: &quot;man&quot;,
            girlFriend: xiaoMing.girlFriend,
        };
var prop = &quot;sex&quot;;
console.log(xiaoMing[&quot;prop&quot;]);   undefined
console.log(xiaoMing[prop]);     man

- 某些属性名中可以包含特殊字符
实际上，JS对属性名的命名要求并不严格，属性可以是任何形式的名字
5. 把一个对象转换成数组
   数组 = Object.keys(对象)：把一个对象转变成一个数组

**属性的名字只能是字符串，如果你书写的是数字，会自动转换为字符串**


##  js对象属性 通过点(.) 和 方括号([]) 的不同之处
1. 点操作符: 静态的。右侧必须是一个以属性名称命名的简单标识符。属性名用一个标识符来表示。标识符必须直接出现在js程序中，
它们不是数据类型，因此程序无法修改它们。
2. 中括号操作符: 动态的。方括号里必须是一个计算结果为字符串的表达式，属性名通过字符串表示。字符串是js的数据类型，
在程序运行时可以修改和创建它们。
 主要有以下区别：
    //1、[]--可以用变量作为属性名或访问,而点方法不可以;
 
    var obj = {};
    obj.name = &#39;张三&#39;;
    var myName = &#39;name&#39;;
    console.log(obj.myName);//undefined,访问不到对应的属性
    console.log(obj[myName]);//张三
 
    var person = {
        name:&#39;gogo&#39;
    };
    console.log(person[&quot;name&quot;]);//gogo
    console.log(person.name); //gogo
    //    优点：1,可以通过变量来访问属性
    var propertyName = &#39;name&#39;;
    console.log(person[propertyName]);  //gogo
    var propertyName2 = &#39;name2&#39;;
    console.log(person[propertyName2]);  //undefined
 
    //2、[]中括号法--可以用数字作为属性名,而点语法不可以;
    var obj1={};
//    obj1.1=1;//Unexpected number
    obj1[2]=2;
//    console.log(obj1.1)
    console.log(obj1[2]);//2
//    console.log(obj1.2)
    console.log(obj1)//{2: 2}
 
 
//   3, [] 可以动态访问的属性名，可以在程序运行时创建和修改属性，点操作符就不行！
    // （ 即 []--可以动态设置和获取)
    var customer={};
    var addr=[&#39;北京&#39;,&#39;上海&#39;,&#39;广州&#39;,&#39;深圳&#39;];
    for(i=0;i&lt;4;i++){
       customer[&quot;address&quot;+i]=addr[i];
    }
    console.log(addr);
    console.log(customer);
    var str = &quot;&quot;;
    for(i=0;i&lt;4;i++){
        str += customer[&quot;address&quot; + i] + &quot;\\t&quot;;
    }
    console.log(str);
 
 
 
//4,如果属性名中包含会导致语法错误的字符，或者属性名是关键字或者保留字，也可以使用方括号表示法。
//如：(属性名是关键字或者保留字--都可以点语法不严密，不报错，写法提示有错)
    person[&#39;first name&#39;] =&#39;gogo2&#39;;  //first name包含一个空格
    console.log(person[&#39;first name&#39;]);
//    console.log(person.first name)//书写都通不过
    person[&#39;for&#39;] =&#39;gogo_for&#39;;  //first name包含一个空格
    person.if =&#39;gogo_if&#39;;  //first name包含一个空格
    console.log(person[&#39;for&#39;]);//gogo_for
    console.log(person.for);//gogo_for
    console.log(person[&#39;if&#39;]);//gogo_if
    console.log(person.if);//gogo_if
 
 
//简单利用：在数组原型链上增加一个去重得的方法，并能实现链式写法。
    Array.prototype.myDistinct=function () {
        var obj={};
        for(var i=0;i&lt;this.length;i++){
            var cur=this[i];
            if(obj[cur]==cur){//对象的属性名不能重复，重复就是修改；让对象的属性名和属性值相同，借以保存不重复的数组元素
//--中括号法可以用数字作为属性名,而点语法不可以;
                this[i]=this[this.length-1];
                this.length--;
                i--;
                continue;
            }
            obj[cur]=cur;
        }
//        console.log(obj);//{2: 2, 3: 3, 4: 4, 5: 5}
        obj=null;
        return this;
 
    };
    var arr=[5,3,3,4,5,4,2];
    arr.myDistinct().sort().pop();
    console.log(arr);//[2, 3, 4]
    var arr1=[3,&#39;a&#39;,4,5,4,&#39;b&#39;,&#39;a&#39;];
    console.log(arr1.myDistinct());//[3, &quot;a&quot;, 4, 5, &quot;b&quot;]





## 全局对象
JS大部分的宿主环境，都会提供一个特殊的对象，该对象可以直接在JS代码中访问，该对象叫做全局对象
在浏览器环境中，全局对象为window，表示整个窗口
全局对象中的所有属性，可以直接使用，而不需要写上全局对象名。
 window.console.log(&quot;abc&quot;);  console.log(&quot;abc&quot;);

**开发者定义的所有变量，实际上，会成为window对象的属性。**
**如果定义变量被赋值了，则该变量会覆盖window对象上的同名属性**
**如果定义变量没有被赋值，则该变量不会覆盖window对象上的同名属性。**


# 引用类型

原始类型 引用类型（对象、函数）

**原始类型的变量，存放的是具体的值**
**凡是出现对象字面量（{}这个大括号就是对象字面量）的位置，都一定在内存出现一个新的对象内存**
变量的互相赋值，一定是复制粘贴，如果是对象，会指向同一个存放对象内容的内存空间，有一个对象更改里边的属性或属性值，就会建立一个新的内存空间，然后两个对象指向新的内存空间，原有的内存空间还在，只是不被指向了，也就是说一个对象变另一个对象跟着变
**引用类型的变量，存放的是内存地址**
 var obj1 = {
            name: &quot;asd&quot;,
            sub:{
                s1:&quot;abc&quot;,
                s2:&quot;bcd&quot;
            }
};
var pr = obj1.sub;
var obj2 = obj1;
obj2.sub = {
    s1: &quot;asd&quot;,
    s2: &#39;zxc&#39;      (此时obj1指向的sub已将变成了新的sub，但pr依然指向原来的sub，因为pr被赋的值是obj1的sub，没办法跟着obj1变，只能跟着obj1中的sub变)
}
console.log(obj1.sub.s1,obj2.sub.s1,pr.s1); asd asd abc


&gt; 扩展知识：JS中的垃圾回收
&gt; 垃圾回收器，会定期的发现内存中无法访问到的对象，该对象称之为垃圾，垃圾回收器会在合适的时间将其占用的内存释放。


# 运算符概述

第2章：变量和数据类型，解决数据存放问题
第3章：运算符，解决数据运算的问题，**面试题密集**

## 操作符和操作数

操作符：运算符，参与运算的符号，+ - * / ...

操作数：参与运算的数据，也称之为“元”

操作符不一定只有一个符号，（）  ++  -- ... 

操作符出现在不同的位置，可能具有不同的含义

\`\`\`js
1-2;
-1.2;负数
\`\`\`

目前接触的操作符：

1. \`\`\` = \`\`\`：赋值符号，将右边的数据赋值给左边
2. \`\`\` . \`\`\`: 访问符号，用于访问对象的属性
3. \`\`\` [] \`\`\`：访问符号，用于访问对象的属性
   var obj = {
     a: 123
   }
   console.log([&quot;a&quot;]);
4. \`\`\` () \`\`\`：函数调用

## 分类

按操作数数量区分：

1. 一元（目）运算符：()  .  []   一个操作数（元）
2. 二元（目）运算符: +  -  / * % =    两个操作数（元）
3. 三元（目）运算符: ?:       三个操作数（元）

功能区分：

1. 算术运算符（数学）
2. 比较运算符
3. 逻辑运算符
4. 位运算符
5. 其他


## 表达式

表达式 = 操作符 + 操作数    [&quot;a&quot;]  就是一个表达式

每个表达式都有一个运算结果，该结果叫做**返回值**，返回值的类型叫做**返回类型** typeof

所有的表达式都可以当作数据使用。


目前学习的运算符的返回值和类型

1. \`\`\`=\`\`\`：该表达式，返回赋值的结果
2. \`\`\`.\`\`\`：属性访问表达式，返回的是属性的值
3. \`\`\`[]\`\`\`：属性访问表达式，返回的是属性的值
4. \`\`\`()\`\`\`：函数调用表达式，返回的结果取决于函数的运行
5. 如果是一个声明+赋值的表达式，返回结果为undefined。

console.log函数调用的返回结果为undefined，输出的结果不是返回的结果，console.log（console.log（））= undefined

&gt; chrome浏览器控制台的环境是REPL环境
&gt; REPL：Read Eval Print Loop，读-执行-打印-循环
&gt; 当直接在控制台书写代码时，除了运行代码之外，**还会输出该表达式的返回值**



# 算术运算符

数学运算符

1. \`\`\`+ - * /\`\`\`
2. \`\`\`+ -\`\`\`放在数字前，表示正负
3. \`\`\`%\`\`\`
4. \`\`\`++ --\`\`\` (下节课讨论)
5. \`\`\`**\`\`\` 幂,求次方，优先级较高，需要加小括号  （-5）** 2 = 25   5 ** 2 = 25 ，n个数相乘
6. 优先级：
  +在前边高于后边的加减乘除，+5*3，先算+再算乘
## 细节

1. 数字运算是不精确的
   小数运算不精确，如5.3-5.2不等于0.1,5.4-5.3也不等于0.1

2. 除数为0，  25/0
如果被除数是正数，得到结果 Infinity （表示正无穷）
如果被除数是负数，得到结果 -Infinity （负无穷）
如果被除数是0，得到结果 NaN （Not a Number，非正常数字，也还是数字，typeof NAN  返回结果为number）

&gt; typeof函数的返回类型为string，  typeof 1/0 （typeof 1 输出&quot;number&quot;     &quot;number&quot;/0  输出 NAN）
&gt; isNaN函数，该函数用于判断一个数据是否是NaN，返回boolean（布尔）  isNAN（）
&gt; isFinite函数，该函数用于判断一个数据是否是有限的，返回boolean 
  isFinite（2） ture    isFinite（2.2） ture    isFinite（Infinity） false   isFinite（NAN） false 

3. 求余

%，有的教程称之为求模，5 % 2 s\\输出余数1  10 % 2 输出0
余数的符号，与被除数相同。 10 % 3 = 1     -10 % 3 = -1     10 % -3 = 1，与除数无关



## 其他类型使用算术运算

1. 除加号之外的算术运算符
   
将原始类型转换为数字类型(只需添加一个运算符，便能自动完成转换），然后进行运算。

- boolean： true -&gt; 1, false -&gt; 0   true * true  false + true   false % 3  false * 9  9 % false
var b = ture    
b = + b;  此时true就被转换成了数字，即 1
{} -&gt; NaN   {} * null = NaN (NaN*0=NaN)
- string: 如果字符串内部是一个正确的数字，直接变为数字，如果是一个非数字(如对象{})，则得到NaN（能识别Infinity，不能把字符串内部的东西当作表达式）
- 如果字符串是一个空字符串&quot;&quot;（没有任何内容），转换为0. 字符串转换时，会忽略前后空格，中间的空格不会忽略：+&quot;   1   1   &quot;  NAN   +&quot;   1   &quot;  1
&gt; NaN虽然是数字，但它和任何数字作任何运算，得到的结果都是NaN

- null：null -&gt; 0
- undefined: undefined -&gt; NaN
将对象类型先转换为字符串类型，然后再将该字符串转换为数字类型(可以先认为对象就是NAN)
对象类型 -&gt; &quot;[object Object]&quot; -&gt; NaN   document.write({obj: &quot;objec&quot;});
({})+&quot;123&quot;
&quot;[object Object]123&quot;
console.log(a+{}+123);

1. 加号运算符

- 加号一边有字符串，含义变为字符串拼接
  就是字符串加数字或字符串或其他原始类型仍然得到字符串
将另一边的其他类型，转换为字符串
数字 -&gt; 数字字符串
boolean -&gt; boolean字符串&quot;ture&quot; &quot;false&quot;
null -&gt; &quot;null&quot;
undefined -&gt; &quot;undefined&quot;
对象 -&gt; &quot;[object Object]&quot;
({})+&quot;123&quot;
&quot;[object Object]123&quot;

- 加号两边都没有字符串，但一边有对象，将对象转换为字符串，然后按照上面的规则进行
({})+123
&quot;[object Object]123&quot;
- 其他情况和上面的数学运算一致

&lt;!-- ## 作业

1. 温度转换器

设置一个变量，保存摄氏温度（C），将其转换为华氏温度（F）

F = (9/5)C + 32

2. 利息计算器

设置变量，分别存放本金、月数、年利率，计算利息 --&gt;
&lt;!-- var c,
    f;
c = prompt(&quot;请输入摄氏温度&quot;);
f = (9 / 5) * c + 32;
var result = &quot;摄氏温度为：&quot; + c +&quot;度，&quot;华氏温度为：&quot; + f +&quot;度。&quot; 
document.write(result);

var p,
    s,
    I,
    i;
p = prompt(&quot;请输入本金&quot;);
s = prompt(&quot;请输入月数&quot;);
i = prompt(&quot;请输入利率&quot;);
I = p * s * i/100/12;
result = &quot;利息为&quot; + I + &quot;元。&quot;; 
document.write(result); --&gt;



# 自增和自减

## 基本功能

一元运算符

++：将某个变量的值自增1

--：将某个变量的值自减1

## 细节

### 自增自减表达式
**a++表达式的值是自增之前的值，但a的值已经变为a+1**
x++: 将变量x自增1，得到的表达式的值是自增之前的值，先赋值再自加（先取值后运算）：a = 1，b；   b = a++，先b等于a,然后a再++。即b=1，a=2。
++x: 将变量x自增1，得到的表达式的值是自增之后的值，先++再赋值（先运算后取值）：a = 1，b；    b = ++a，先++a再赋值给b，即b=2，a=2。
x--: 将变量x自减1，得到的表达式的值是自减之前的值。与++一样
--x: 将变量x自减1，得到的表达式的值是自减之后的值。与++一样
        var a = 1,
            b;
        b = a++;
        console.log(a); 2
        console.log(b); 1
        b = ++a;
        console.log(b); 3

### 优先级

从高到底依次是：

1. \`\`\`++ --\`\`\`
2. \`\`\`* / %\`\`\`
3. \`\`\`+ -\`\`\`
        var a = 1,
            b;
        b = a++ + 1;       把a++当做一个表达式+1，a++表达式算出来的是a自加之前的值，还是1，然后1+1赋值给b，然后a++再自加
        console.log(a,b); 2 2
        var a = 1,
            b;
        b = ++a + 1;
        console.log(a,b); 2 3
优先级的运算细节：

1. 从左到右依次查看，不管运算符的优先级，数据两边都有运算符才比较，有小括号（）一样，仍然从左到右，顺序不能变，遇到括号再算括号里边的
2. 如果遇到操作数（数据），将数据的值直接取出
3. 如果遇到相邻的两个运算符，并且左边的运算符优先级大于等于右边的运算符，则直接运行左边的运算符。
    var a = 1,
        b;
    b = a++ + ++a + ++a * a * ++a - a;
    console.log(b);  79


# 比较运算符

大小比较：&gt;   &lt;    &gt;=    &lt;=
相等比较：==(相等)   !=（不相等）   ===（绝对相等）   !==（绝对不等）

**比较运算符的返回类型：boolean**true  false

**算术运算符的优先级高于比较运算符**
先运算再比较

## 大小比较
比较字符编码
### 细节
 
1. 两个字符串比较大小，比较的是字符串的字符编码ASCII，依次比较字符串中每个字符的编码

2. 如果一个不是字符串，并且两个都是原始类型，将它们都转换为数字进行比较

&#39;1&#39; -&gt; 1
&#39;&#39; -&gt; 0
&#39;   &#39; -&gt; 0
&#39;  a&#39; -&gt; NaN
&#39;3.14&#39; -&gt; 3.14

NaN与任何数字比较，得到的结果都是false

Infinity比任何数字都大

-Infinity比任何数字都小

3. 如果其中一个是对象，将对象转换为原始类型然后，按照规则1或规则2进行比较

目前，对象转换为原始类型后，是字符串 &quot;[object Object]&quot;  然后变成NaN



## 相等比较

### == 和 != (相等比较 和 不相等比较)

==: 比较两个数据是否相等
!=: 比较两个数据是否不相等

**细节**

1. 两端的类型相同，直接比较两个数据本身是否相同（两个对象比较的是地址）

2. 两端的类型不同

1). null 和 undefined， 它们之间相等， 和其他原始类型比较，则不相等，也就是null == undefined ，但null和undefined不和其他原始类型数据相等，null和undefined也!=0
2). 其他原始类型，比较时先转换为数字，再进行比较
3). NaN与任何数字比较，都是false，包括自身
4). Infinity和-Infinity，自能和自身相等
5). 对象比较时，要先转换为原始类型后，再进行比较

**由于相等和不相等比较，对于不同类型的数据比较违反直觉，因此，通常我们不适用这种比较方式，而是使用更加接近直觉的严格相等和严格不相等比较**


### === 和 !== （严格相等 和 严格不相等）

=== ： 两端的数据和类型必须相同
!== ： 两端的数据或类型不相同

1. 两端类型相同，规则和相等比较一致。
2. 两端类型不同，为false。

数字规则：
1). NaN与任何数字比较，都是false，包括自身
2). Infinity和-Infinity，自能和自身相等



# 逻辑运算符

布尔运算符

## 与（并且）

符号：&amp;&amp;

书写方式： 表达式1 &amp;&amp; 表达式2

1. 将表达式1 进行 boolean 判定，两个表达式都要为真才为真

以下数据均判定为false：

1) null
2) undefined
3) false
4) NaN
5) &#39;&#39;
6) 0

其他数据全部为真

2. 如果表达式1的判定结果为假，则直接返回表达式1，而**不执行表达式2**；如果表达式1为真，返回表达式2的结果。 （短路规则）

## 或 

符号：||   优先级低于&amp;&amp;

写法：表达式1 || 表达式2

1. 将表达式1 进行 boolean 判定，有一个真即为真

2. 如果表达式1为真，直接返回表达式1，**不运行表达式2**；如果表达式1为假，返回表达式2

## 非

符号：!

写法: !数据

一元运算符

将数据的boolean判定结果直接取反，非运算符一定返回boolean类型，即!ture返回false，!false返回true


&lt;!-- ## 作业

1. 用一个变量保存成绩，输出该成绩是否及格（true 或 false）
   
2. 用一个变量保存年份，得到该年份2月的天数

3. 利息计算器

设置变量，分别存放本金、月数、年利率，计算利息

如果本金存放量超过了10万，年利率上浮20%（比如，年利率为4%，上浮后的年利率 4% * 1.2） --&gt;
        // var s = prompt(&quot;请输入成绩&quot;);
        // document.write(s &gt;= 60 || false);

        // var t = prompt(&quot;请输入年份&quot;),
        //     day;
        // var result = t % 4 === 0 &amp;&amp; t % 100 !== 0 || t % 400 === 0;
        // result  &amp;&amp; document.write(day = 29);
        // !result  &amp;&amp; document.write(day = 28);

        // var p,
        //     s,
        //     I,
        //     i,
        //     result,
        //     pr;
        // p = prompt(&quot;请输入本金&quot;);
        // s = prompt(&quot;请输入月数&quot;);
        // i = prompt(&quot;请输入利率&quot;);
        //  p &gt; 100000 &amp;&amp; (I = p * s * i * 1.2 / 100 / 12);
        //  p &lt;= 100000 &amp;&amp; (I = p * s * i / 100 / 12);
        // result = &quot;利息为&quot; + I + &quot;元。&quot;;
        // document.write(result);

        //  var p,
        //     s,
        //     I,
        //     i,
        //     result,
        //     pr;
        // p = prompt(&quot;请输入本金&quot;);
        // s = prompt(&quot;请输入月数&quot;);
        // i = prompt(&quot;请输入利率&quot;);
        //  p &gt; 100000 &amp;&amp; (i = i * 1.2);
        // I = p * s * i / 100 / 12;
        // result = &quot;利息为&quot; + I + &quot;元。&quot;;
        // document.write(result);




# 三目运算符

书写方式： 表达式1 ? 表达式2 : 表达式3

1. 对表达式1进行boolean判定
2. 如果判定结果为真，返回表达式2的值，**表达式3不运算**；否则，返回表达式3的值。
 var t = prompt(&quot;请输入年份&quot;),
            day;
        var result = t % 4 === 0 &amp;&amp; t % 100 !== 0 || t % 400 === 0;
        result ? document.write(day = 29) : document.write(day = 28);



# 补充知识

## 模板字符串
字符串的写法：&#39;&#39;  &quot; &quot;  \` \`
   var user = {
            age: 18,
            name: &quot;成哥&quot;,
            gender: &quot;男&quot;
        };
        console.log(\`我今年\${user.age}岁了，名字叫\${user.name}，性别\${user.gender}，目前\${user.age &gt;= 18 ? &quot;已成年&quot; : &quot;未成年&quot;}。\`)
        模板字符串，用\`\`包住，不用写 + user.age等，但需要\${}包住user.age等
## 类型转换不会影响原本的数据
类型转换只是运算时参与运算，临时变一下，原本的值和类型不变，运算完还是原来的值和类型，如a = &quot;1&quot;; b = a * 1;  b = 1,a = &quot;1&quot;;  
## 复合的赋值运算符
先算等号右边的，再算等号左边的
+=  -=  /=  *=  %=  **=
a=1,    a+=3,a=4   a-=, a=1;
a*=1+2   a=a*(1+2)  a**=3   a的立方

## void 运算符

一元运算符

写法：

1. 普通写法： \`\`\` void 表达式  \`\`\`
2. 函数写法： \`\`\` void(表达式)  \`\`\`

运行表达式，然后返回undefined，不管表达式是啥，都返回undefined

## typeof 运算符

一元运算符

写法：

1. 普通写法： \`\`\` typeof 表达式  \`\`\`
2. 函数写法： \`\`\` typeof(表达式)  \`\`\`

typeof运算，返回表达式的类型，是一个字符串。

## 逗号运算符

写法：表达式1, 表达式2

依次运行两个表达式，返回表达式2

逗号运算符的优先级比赋值更低




&lt;!-- # 数字的存储

**在对精度要求很高的系统中，或要对小数的运算结果进行比较时，需要特别谨慎**
 
## 问题

1. JS中的小数运算是精确的吗？

不一定

2. JS中的整数运算是精确的吗？

不一定

3. JS中表示的整数是连续的吗？

不是，当JS的数字很大的时候，不再连续。

4. JS中表示的最大数字是多少？

最大连续整数：9007199254740991

5. JS中能表示的数字的有效位数是多少？

16 ~ 17



## 二进制

现实世界中：十进制，10个数字，逢十进一

计算机世界中：二进制，2个数字，逢二进一

二进制 -&gt; 十进制

1101 -&gt; $1*2^3 + 1*2^2 + 0*2^1 + 1*2^0 = 13$

11.01 -&gt; $1*2^1 + 1*2^0 + 0*2^{-1} + 1*2^{-2} = 3.25$

十进制 -&gt; 二进制

13 -&gt; 1101

\`\`\`
13 / 2  商 6    余  1
6  / 2  商 3    余  0
3  / 2  商 1    余  1
1  / 2  商 0    余  1
余数从下往上看
\`\`\`

3.25 -&gt; 11.01

整数部分一样

小数部分

\`\`\`
0.25 * 2    0.5     整数部分：0
0.5  * 2    1.0     整数部分：1
整数部分从上往下看
\`\`\`

## 为什么JS的小数运算不精确

十进制的小数，转换为二进制后，可能是无限小数，但是计算机对数字的存储能力有限，因此会丢失一些数据。

十进制数 0.3 -&gt; 0.010011001100110011001.....

\`\`\`
0.3*2   0.6     0
0.6*2   1.2     1
0.2*2   0.4     0
0.4*2   0.8     0
0.8*2   1.6     1
0.6*2   1.2     1
0.2*2   0.4     0
......
整数部分从上往下看
\`\`\`

## JS如何存储数字

整数法、浮点法

JS中，存储的所有数字，都按照浮点法存放。

浮点法存放的数字，叫做浮点数（float），浮点数分为单精度和双精度。

JS中，使用双精度存放浮点数，IEEE 754。

**存放方式**

JS在计算机中，给每个数字开辟一块内存空间，尺寸固定为64位

&gt; 在计算机中，位（bit）是最小的存储单位，简称为bit
&gt; 1 byte = 8 bit
&gt; 1 KB = 1024 byte
&gt; 1 MB = 1024 KB
&gt; 1 GB = 1024 MB

\`\`\`
[第1段][第2段][第3段]

第1段：1位，表示符号位，如果为1，是负数，如果为0，是正数
第2段：11位，表示指数位，这里的指数是2为底的指数，而不是10
第3段：52位，表示有效数字
\`\`\`

举例

\`\`\`
0     1000 0000 011    1111 0000 0000 0000....
\`\`\`
相当于： $1.1111 * 2 ^ {1027 - 1023} $

**特殊情况**

1. 指数为0，尾数为0，表示数字 0
2. 符号为0，指数为2047，尾数为0，表示正无穷

\`\`\`
Infinity: 0 11111111111 00000000000...
\`\`\`

3. 符号为1，指数为2047，尾数为0，表示负无穷

\`\`\`
-Infinity: 1 11111111111 00000000000...
\`\`\`

4. 指数为2047，尾数不为0，表示NaN

\`\`\`
NaN: 1 11111111111 01001010000...
\`\`\`

**一个正常的数字，指数部分最多是2046**

## 能表示的最大数字

\`\`\`
0 11111111110 1111111111.........
\`\`\`

相当于： $1.1111111111... * 2 ^ 1023 $

## 能表示的最大的安全整数

安全数字：从1开始到该数字，均是连续的整数，并且该数字的下一个整数是存在的。

\`\`\`
0 xxxxx 1111111111....
\`\`\`

相当于： $2^53 - 1$

下一位： $2^53$   \`\`\`0  xxxxx  0000000000000\`\`\`



# 位运算

将一个整数的二进制格式进行运算

js中，如果对一个数据进行位运算，它首先会将其转换为一个整数，并且按照32位的整数二进制排列

举例

\`\`\`
2.7 -&gt; 2 -&gt; 0000 0000 0000 0000 0000 0000 0000 0010

NaN -&gt; 0

Infinity -&gt; 0

-Infinity -&gt; 0
\`\`\`

## 与运算

符号：&amp;

写法：整数1 &amp; 整数2

将两个整数每一位进行比较，如果都为1，结果为1，否则结果为0.

## 或运算

符号：|

写法：整数1 | 整数2

将两个整数每一位进行比较，如果都为0，结果为0，否则结果为1.

## 否（非）运算

符号：~

写法：~整数

将该整数按位取反

**负数的存储方式**

-1

真码：1000 0000 0000 0000 0000 0000 0000 0001
反码：1111 1111 1111 1111 1111 1111 1111 1110  真码取反
补码：1111 1111 1111 1111 1111 1111 1111 1111  反码加1  最终的存储方案

取反的快速运算：-数字 - 1

JS中最快速的取整的方式：\`\`\` ~~整数 \`\`\`

## 异或运算

符号：^

写法：数字1 ^ 数字2

将数字1和数字2按位比较，不同取1，相同取0

## 应用场景

位的叠加（开关）

## 位移运算

左位移： &lt;&lt;

写法： 数字1 &lt;&lt; 数字2   结果： 数字1 * 2 ^ 数字2

将数字1的二进制（除符号之外，左移动数字2的次数）

右位移：&gt;&gt;

写法： 数字1 &gt;&gt; 数字2   结果： 整数(数字1 / 2 ^ 数字2)

全右位移：&gt;&gt;&gt;

与右位移的区别，在于全右位移会导致符号位跟着位移。




# 求余和求模

% ：求余

x % y

1. 求余 x rem y:  x - n * y, n表示商取整（直接去掉小数，向0取整）

\`\`\`js
x = 7, y = 3   x rem y = x - n * y = 7 - 2 * 3 = 1

n = x / y = 2.333333 ≈ 2
\`\`\`

\`\`\`js
x = 7, y = -3  

n = 7 / -3 = -2.33333 ≈ -2

x rem y = x - n * y = 7 - (-2)*(-3) = 7 - 6 = 1
\`\`\`

\`\`\`js
x = -7, y = 3  

n = -7 / 3 = -2.33333 ≈ -2

x rem y = x - n * y = -7 - (-2)*3 = -7 + 6 = -1
\`\`\`


**余数和被除数的符号相同**

2. 求模 x mod y:  x - n * y, n表示商取整（向下取整）

\`\`\`js
x = 7, y = -3

x mod y = x - n * y = 7 - (-3)*(-3) = 7 - 9 = -2

n = 7 / -3 = -2.3333 ≈ -3
\`\`\`

\`\`\`js
x = -7, y = 3

x mod y = x - n * y = -7 - (-3)*3 = -7 + 9 = 2

n = -7 / 3 = -2.3333 ≈ -3
\`\`\`

**求模的符号与除数相同** --&gt;



# 流程图

一套的标准的图形，用于描述程序的逻辑

通常流程图分析程序的流程

![](2019-06-12-10-49-09.png)

&gt; markdown中粘贴图片，ctrl + alt + v

## 在 markdown 中画流程图

\`\`\`mermaid
graph TD
start((开始))--&gt;if{判断}
if--true--&gt;A[adsfasf]
if--false--&gt;ed((结束))
A--&gt;ed
\`\`\`


邓哥：
\`\`\`mermaid
graph TD
start((买两个桃子))--&gt;if{碰见卖西瓜的}
if--true--&gt;A[买两个桃子加一个西瓜]
if--false--&gt;B[只买两个桃子]
A--&gt;ed
B--&gt;ed
\`\`\`

\`\`\`mermaid
graph TD
start((买两个桃子))--&gt;if{碰见卖西瓜的}
if--true--&gt;A[买一个桃子]
if--false--&gt;B[买两个桃子]
A--&gt;ed
B--&gt;ed
\`\`\`
## 例子

邓哥的思维：

\`\`\`mermaid
graph TD
st((开始)) --&gt; buyPeach[买两个桃子]
buyPeach--&gt;if{是否碰到卖西瓜的}
if--true--&gt;buyXigua[买一个西瓜]
if--false--&gt;ed((结束))
buyXigua--&gt;ed
\`\`\`

成哥的思维：

\`\`\`mermaid
graph TD
st((开始)) --&gt; if{是否碰到卖西瓜的}
if--true--&gt;买一个桃子
if--false--&gt;买两个桃子
买一个桃子--&gt;ed((结束))
买两个桃子--&gt;ed
\`\`\`


# if判断

\`\`\`js
if(条件1){
    // 代码块
}
else if(条件2){
    // 代码块
}
else if(条件3){
    // 代码块
}
//....
else{
    // 以上条件都不满足执行的代码块
}
\`\`\`
if(!x){
    x=0;
}       如果x没有值或不存在等等，则赋值为0

1. 如果某个条件满足，则直接忽略后面的所有条件
2. else if 可以有多个（包含0个）
3. else可以有1个或0个
4. else可以换行，可以不换行
5. 如果代码块只有一条语句，可以省略花括号（不推荐）
6. if只能出现一次


## 补充

1. 用户输入: prompt(&quot;提示文本&quot;)

该表达式返回结果有三种：
- null：表示用户点击了取消
- 用户输入的字符串：表示用户点击了确定，得到用户输入的结果
- 什么都不填直接点确定也是返回字符串类型的空字符串

返回类型：null 或 字符串

2. 将字符串转换成数字：+字符串

- 得到一个随机数

3. Math.random() 该表达式返回一个0~1之间的随机数字（无法取到1）


&lt;!-- ## 作业
1. 提示用户输入一个三位数，若不是三位数，则提示用户输入有误；若是三位数，则判断该数能否被13整除。

2. 让用户输入一个成绩（0-100），判断这个成绩属于哪个范围并输出结果（A:90-100  B:70-89  C:60-69  D:40-59  E:0-39），若用户输入的不是0-100的数字，则输出输入有误。

3. 根据世界卫生组织推荐的计算方法，
男性标准体重计算方法为（身高cm－80）×70﹪
女性标准体重计算方法为（身高cm－70）×60﹪
标准体重正负10%为正常体重，低于标准体重的10%为过瘦，高于标准体重的10%为过重
编写程序，让用户输入性别、身高、体重，判断用户的健康状况

健康状况有3种：

1) 你的体重正常，请继续保持
2) 你的身体偏瘦，请加强营养
3) 你的身体偏胖，请加强锻炼

4. 某理财公司推出一种理财服务，服务规则如下：
若用户的理财金额在50万元以下，则每年的收益按照4%计算。
若用户的理财金额在50万元以上（包括50万），则每年收益按照4.5%计算。
若用户的理财金额超过200万，除了理财收益外，还要额外给予用户收益金额的10%
编写程序，让用户输入理财金额和理财年限，计算到期后的收益

5. 编写一个用户和计算机猜拳的游戏，用户输入剪刀、石头或布，与计算机的出拳进行比较，判断胜负 --&gt;
        // var n = +prompt(&quot;请输入一个三位数&quot;);
        // if (n &gt;= 100 &amp;&amp; n &lt; 1000) {
        //     console.log(n % 13 === 0);
        // }else {
        //     console.log(&quot;用户输入有误&quot;);
        // }
        // var n = +prompt(&quot;请输入一个三位数&quot;);
        // if(isNaN(n) || n &lt; 100 || n &gt; 999){
        //     console.log(&quot;用户输入有误&quot;);
        // }else{
        //     if(n % 13 === 0){
        //         console.log(&quot;能被13整除&quot;);
        //     }else{
        //         console.log(&quot;不能被13整除&quot;);
        //     };
        // };


        // var n = prompt(&quot;请输入成绩&quot;);
        // if(n &lt;= 100 &amp;&amp; n &gt;= 90 ){
        //     console.log(&quot;A&quot;)
        // }else if(n &lt; 90 &amp;&amp; n &gt;= 70){
        //     console.log(&quot;B&quot;)
        // }else if(n &lt; 70 &amp;&amp; n &gt;= 60){
        //     console.log(&quot;C&quot;)
        // }else if(n &lt; 60 &amp;&amp; n &gt;= 40){
        //     console.log(&quot;D&quot;)
        // }else if(n &lt; 40 &amp;&amp; n &gt;= 0){
        //     console.log(&quot;E&quot;)
        // }else{
        //     console.log(&quot;用户输入有误&quot;)
        // };


        // var sex,
        //     hei,
        //     wei,
        //     T,
        //     t;
        // sex = prompt(&quot;请输入性别(男/女)&quot;);
        // hei = prompt(&quot;请输入身高(cm)&quot;);
        // wei = prompt(&quot;请输入体重(kg)&quot;);
        // T = (hei - 80) * 0.7;
        // t = (hei - 70) * 0.6;
        // if(sex === &quot;男&quot;){
        //     if((wei &gt;= 0.9 * T) &amp;&amp; (wei &lt;= 1.1 * T)){
        //         console.log(&quot;你的体重正常，请继续保持&quot;);
        //     }else if(wei &lt; 0.9 * T){
        //         console.log(&quot;你的身体偏瘦，请加强营养&quot;);
        //     }else{
        //         console.log(&quot;你的身体偏胖，请加强锻炼&quot;);
        //     };
        // }else if(sex === &quot;女&quot;){
        //     if((wei &gt;= 0.9 * t) &amp;&amp; (wei &lt;= 1.1 * t)){
        //         console.log(&quot;你的体重正常，请继续保持&quot;);
        //     }else if(wei &lt; 0.9 * t){
        //         console.log(&quot;你的身体偏瘦，请加强营养&quot;);
        //     }else{
        //         console.log(&quot;你的身体偏胖，请加强锻炼&quot;);
        //     };
        // }else{
        //     console.log(&quot;用户输入有误&quot;);
        // };



        // var w = prompt(&quot;请输入理财金额&quot;),
        //     n = prompt(&quot;请输入理财年限&quot;);
        // if(isNaN(w) || isNaN(n)  || w &lt;= 0 || n &lt;= 0){
        //     console.log(&quot;用户输入有误&quot;);
        // };
        // if (w &gt; 0 &amp;&amp; w &lt; 500000){
        //     console.log(w * n * 4 / 100);
        // }else if(w &gt;= 500000 &amp;&amp; w &lt;= 2000000){
        //     console.log(w * n * 4.5 / 100);
        // }else{
        //     console.log((w * n * 4.5 / 100) * 1.1);
        // }

   
        // var user = prompt(&quot;请输入剪刀、石头或布&quot;),
        //     php = Math.random();
        //     console.log(php);
        // if(php &lt; 1 / 3){
        //     if(user === &quot;剪刀&quot;){
        //         console.log(&quot;php Win!&quot;);
        //     }else if(user === &quot;石头&quot;){
        //         console.log(&quot;平手&quot;);
        //     }else{
        //         console.log(&quot;user Win!&quot;);
        //     };
        // }else if((php &gt;= 1 / 3) &amp;&amp; (php &lt; 2 / 3)){
        //     if(user === &quot;剪刀&quot;){
        //         console.log(&quot;平手&quot;);
        //     }else if(user === &quot;石头&quot;){
        //         console.log(&quot;user Win!&quot;);
        //     }else{
        //         console.log(&quot;php win!&quot;);
        //     };
        // }else{
        //     if(user === &quot;剪刀&quot;){
        //         console.log(&quot;user win!&quot;);
        //     }else if(user === &quot;石头&quot;){
        //         console.log(&quot;php win!&quot;);
        //     }else{
        //         console.log(&quot;平手&quot;);
        //     };
        // };



# switch 开关

switch的语法始终可以使用if结构替代。

\`\`\`js
switch(表达式){
    case 数据1:
        代码块
    case 数据2:
        代码块
    //...
    default:
        代码块
}
\`\`\`
1. 计算表达式的返回值，依次和case后面的数据进行严格相等的比较，如果某个相等，停止比较，然后运行其内部的代码块，再然后，不比较了，直接**依次运行之后的所有代码块**。
2. 在case分支内部，使用break语句，可以立即停止switch结构。
3. default表示前面的所有case都不匹配时运行。可以省略



# 循环

重复的运行一段代码

JS支持3种循环结构：while循环、do-while循环、for循环

## while循环

\`\`\`js
while(条件){
    代码块（循环体）
}
\`\`\`

\`\`\`mermaid
graph TD

st((开始))--&gt;条件{条件}
条件--true--&gt;代码块
代码块--&gt;条件
条件--false--&gt;ed((结束))
\`\`\`
先判断再运行，至少执行0次
死循环：条件永远满足，永远无法退出循环。

## do-while循环

\`\`\`js
do{
    循环体
} while(条件);
\`\`\`
先运行一次，再判断条件，至少运行一次

\`\`\`mermaid
graph TD

st((开始))--&gt;代码块
代码块--&gt;条件{条件}
条件--true--&gt;代码块
条件--false--&gt;ed((结束))
\`\`\`


## for循环

\`\`\`js
for(初始化表达式; 条件; 条件改变表达式){
    循环体
}
\`\`\`

\`\`\`mermaid
graph TD

st((开始))--&gt;初始化表达式
初始化表达式--&gt;条件{条件}
条件--true--&gt;循环体
循环体--&gt;条件改变表达式
条件改变表达式--&gt;条件
条件--false--&gt;ed((结束))
\`\`\`


## 循环中的关键字

循环控制语句

- break; 跳出循环
- continue; 停止当前循环体，不往下运行，直接进入下一次循环。



# 循环应用

## 累计

举例：将1-100的所有数字相加之和

思路：准备一个变量，初始值为0，然后1-100循环，每次循环，将数字累加到变量中。

## 查找

举例：135~145之间是否存在能整除26的数字

思路：准备一个变量，记录false，表示没有找到，然后135-145进行循环，如果发现满足条件的数字，重新记录变量为true，表示找到了，然后退出循环。

## 嵌套的循环

分开分析两层循环
**素数：一个大于1的数，且只能被1和自身整除**记录整除次数即可判断，为2一定是素数
            var i,
            j,
            s = 0;
        for (i = 1; i &lt;= 100; i++) {
            for (j = 1; j &lt;= i; j++) {
                if (i % j === 0 ) {
                    s++;
                };
            }
            if(s === 2){
                console.log(i);
            }
            s = 0;
        }

        
        var i,
            j,
            s = 0;
        for (i = 2; i &lt;= 100; i++) {
            for (j = 1; j &lt; i; j++) {
                if (i % j === 0) {
                    s++;

                };
            }
            if (s === 1) {
                console.log(i);
            }
            s = 0;
        }

&lt;!-- 作业 --&gt;
        // 1. 在控制台中输出100个*
        // var i;
        // for (i = 0; i &lt; 100; i++) {
        //     console.log(&quot;*&quot;);
        // };



        // 2. 让用户输入*号的数量，然后输出对应数量的*

        // var n = prompt(&quot;请输入“*”的数量&quot;),
        //     i;
        // if (isNaN(n) || +n &lt; 0) {

        //     console.log(&quot;用户输入有误&quot;);
        // } else {

        //     for (i = 0; i &lt; n; i++) {
        //         console.log(&quot;*&quot;);
        //     };
        // }



        // 3. 输出一个3行5列的*号
        // var i,
        //     j,
        //     src = &quot;&quot;;
        // for (i = 0; i &lt; 3; i++) {
        //     for (j = 0; j &lt; 5; j++) {
        //         src += &quot;*&quot;;
        //     }
        //     console.log(src);
        //     src = &quot;&quot;;

        // };

        // 4. 用*号输出一个5行的直角三角形

        // \`\`\`
        // *
        // **
        // ***
        // ****
        // *****
        // \`\`\`
        // var i,
        //     j,
        //     src = &quot;&quot;;
        // for (i = 0; i &lt; 5; i++) {
        //     for (j = 0; j &lt;= i; j++) {
        //         src += &quot;*&quot;;

        //     }
        //     console.log(src);
        //     src = &quot;&quot;;

        // };





        // 5. 用*号输出一个5行的等腰三角形

        // \`\`\`
        //     *
        //    ***
        //   *****
        //  *******
        // *********
        // \`\`\`

        // var i,
        //     j,
        //     k,
        //     src = &quot;&quot;;
        // for (i = 0; i &lt; 5; i++) {
        //     for(k = 5 - i; k &gt; 0;k--){
        //         src += &quot; &quot;;
        //     }
        //     for (j = 0; j &lt; 2 * i + 1; j++) {
        //         src += &quot;*&quot;;
        //     }
        //     console.log(src);
        //     src = &quot;&quot;;

        // };

        // 6. 输出1-100的所有数字
        // var i;
        // for (i = 1; i &lt;= 100; i++) {
        //     console.log(i);
        // }
        // 7. 输出1-100的所有奇数
        // var i;
        // for (i = 1; i &lt;= 100; i++) {
        //     if(i % 2 !== 0){console.log(i);}
        // }

        // 8. 求1-100之间所有数字之和
        // var i,
        // ume = 0;
        // for (i = 1; i &lt;= 100; i++) {
        //     ume += i;
        // }console.log(ume);

        // 9. 求1-100之间所有奇数之和
        // var i,
        // ume = 0;
        // for (i = 1; i &lt;= 100; i++) {
        //     if(i % 2 !== 0){ume += i;}
        // }console.log(ume);

        // 10. 求1-10之间所有数字的积
        // var i,
        // ume = 1;
        // for (i = 1; i &lt;= 10; i++) {
        //     ume *= i;
        // }console.log(ume);

        // 11. 判断数字233是不是素数。
        // var i,
        //     n = 233,
        //     s = 0;
        // for (i = 1; i &lt;= n; i++) {
        //     if (n % i === 0) {
        //         s++;
        //     }; 
        // }
        // if(s === 2){
        //     console.log(n,&quot;是素数&quot;);
        // }else{
        //     console.log(n,&quot;不是素数&quot;);
        // };

        // 素数是指一个数（大于1）仅能被1和自身整除

        // 12. 输出1-100中的所有素数
        // var i,
        //     j,
        //     n = 100,
        //     s = 0;
        // for (i = 1; i &lt;= n; i++) {
        //     for (j = 1; j &lt;= i; j++) {
        //         if (i % j === 0) {
        //             s++;
        //         };
        //     }
        //     if (s === 2) {
        //         console.log(i);
        //     };
        //     s = 0;
        // }

        // 13. 求1-100之间的所有素数之和
        // var i,
        //     j,
        //     n = 100,
        //     s = 0,
        //     mum = 0;
        // for (i = 1; i &lt;= n; i++) {
        //     for (j = 1; j &lt;= i; j++) {
        //         if (i % j === 0) {
        //             s++;
        //         };
        //     }
        //     if (s === 2) {
        //         mum += i;
        //     };
        //     s = 0;
        // };
        // console.log(mum);

        // 14. 输出99乘法表，效果如下：

        // \`\`\`
        // 1*1=1	
        // 1*2=2	2*2=4	
        // 1*3=3	2*3=6	3*3=9	
        // 1*4=4	2*4=8	3*4=12	4*4=16	
        // 1*5=5	2*5=10	3*5=15	4*5=20	5*5=25	
        // 1*6=6	2*6=12	3*6=18	4*6=24	5*6=30	6*6=36	
        // 1*7=7	2*7=14	3*7=21	4*7=28	5*7=35	6*7=42	7*7=49	
        // 1*8=8	2*8=16	3*8=24	4*8=32	5*8=40	6*8=48	7*8=56	8*8=64	
        // 1*9=9	2*9=18	3*9=27	4*9=36	5*9=45	6*9=54	7*9=63	8*9=72	9*9=81	
        // \`\`\`

           &lt;!-- var i,
            j,
            str = &quot;&quot;,
            n;
        for(i = 1;i&lt;=9;i++){
            for(j=1;j&lt;=i;j++){
                n = i * j;
                str += \`\${j} * \${i} = \${n}\\t\`;

            };
            console.log(str);
            str = &quot;&quot;;

        }; --&gt;

        // 15. 将猜拳游戏升级，记录系统和玩家的积分，获胜者加1分，平局和输者不计分

        // 可参考以下效果：

        // \`\`\`
        // 游戏开始
        // ==============第1轮==============
        // 系统：0分，玩家：0分
        // 你的出拳：剪刀
        // 系统出拳：布
        // 你赢了！
        // ==============第2轮==============
        // 系统：0分，玩家：1分
        // 你的出拳：石头
        // 系统出拳：布
        // 你输了！
        // ==============游戏结束==============
        // 系统：1分，玩家：1分
        // \`\`\`


        // var i,
        //     n,
        //     user,
        //     userInte = 0,
        //     cpuInte = 0;
        // for (i = 1; i &lt;= 3; i++) {
        //     n = Math.random();
        //     if (n &lt; 1 / 3) {
        //         n = &quot;剪刀&quot;;
        //     } else if (n &gt;= 1 / 3 &amp;&amp; n &lt; 2 / 3) {
        //         n = &quot;石头&quot;;
        //     } else {
        //         n = &quot;布&quot;;
        //     }
        //     console.log(\`第\${i}回合,玩家：\${userInte}分，系统：\${cpuInte}分\`)
        //     user = prompt(&quot;请输入剪刀、石头或布&quot;);
        //     if (user === &quot;剪刀&quot;) {
        //         if (n === &quot;剪刀&quot;) {
        //             console.log(\`用户：\${user},计算机：\${n},平手！\`)
        //         } else if (n === &quot;石头&quot;) {
        //             console.log(\`用户：\${user},计算机：\${n},计算机Win！\`)
        //             cpuInte++;
        //         } else {
        //             console.log(\`用户：\${user},计算机：\${n},用户Win！\`)
        //             userInte++;
        //         }
        //     } else if (user === &quot;石头&quot;) {
        //         if (n === &quot;剪刀&quot;) {
        //             console.log(\`用户：\${user},计算机：\${n},用户Win！\`)
        //             userInte++;
        //         } else if (n === &quot;石头&quot;) {
        //             console.log(\`用户：\${user},计算机：\${n},平手！\`)
        //         } else {
        //             console.log(\`用户：\${user},计算机：\${n},计算机Win！\`)
        //             cpuInte++;
        //         }
        //     } else if (user === &quot;布&quot;) {
        //         if (n === &quot;剪刀&quot;) {
        //             console.log(\`用户：\${user},计算机：\${n},计算机Win！\`)
        //             cpuInte++;
        //         } else if (n === &quot;石头&quot;) {
        //             console.log(\`用户：\${user},计算机：\${n},用户Win！\`)
        //             userInte++;
        //         } else {
        //             console.log(\`用户：\${user},计算机：\${n},！平手\`)
        //         }
        //     }
        //     n = 0;
        // }
        // console.log(\`游戏结束：玩家：\${userInte}分，系统：\${cpuInte}分\`)
        
        
        // var i,
        //     n,
        //     user,
        //     userInte = 0,
        //     cpuInte = 0;
        // for (i = 1;; i++) {
        //     console.log(\`第\${i}回合,玩家：\${userInte}分，系统：\${cpuInte}分\`);
        //     user = prompt(&quot;请输入剪刀、石头或布&quot;);
        //     n = Math.random();
        //     if (n &lt; 1 / 3) {
        //         n = &quot;剪刀&quot;;
        //     } else if (n &lt; 2 / 3) {
        //         n = &quot;石头&quot;;
        //     } else {
        //         n = &quot;布&quot;;
        //     };

        //     if (user === null) {
        //         break;
        //     } else if (user !== &quot;剪刀&quot; &amp;&amp; user !== &quot;石头&quot; &amp;&amp; user !== &quot;布&quot;) {
        //         console.log(&quot;输入错误，请重新输入&quot;);
        //         continue;
        //     } else if (user === &quot;剪刀&quot; &amp;&amp; n === &quot;布&quot; || user === &quot;石头&quot; &amp;&amp; n === &quot;剪刀&quot; || user === &quot;布&quot; &amp;&amp; n === &quot;石头&quot;) {
        //         console.log(\`你的出拳：\${user}\`);
        //         console.log(\`系统出拳：\${n}\`);
        //         userInte++;
        //         console.log(&quot;你赢了！&quot;);
        //     } else if (user === n) {
        //         console.log(\`你的出拳：\${user}\`);
        //         console.log(\`系统出拳：\${n}\`);
        //         console.log(&quot;平局&quot;);
        //     } else {
        //         console.log(\`你的出拳：\${user}\`);
        //         console.log(\`系统出拳：\${n}\`);
        //         cpuInte++;
        //         console.log(&quot;你输了！&quot;);
        //     };

        // };
        // console.log(\`游戏结束：玩家：\${userInte}分，系统：\${cpuInte}分\`);


# 数组

数组用于存放多个数据

## 创建一个数组

1. new Array(长度)
var arr = new Array(1,2,30);
长度，数组里面的数据总数，长度一定是一个非负整数

new Array(数据, 数据, 数据....)

创建一个数组，并初始化其每一项的值

数组项：数组其中的一项数据

2. [数据,数据,数据,....]

创建一个数据，并初始化其每一项的值
var arr = [1,2,30];
console.log(arr[&quot;0&quot;])  --&gt;1
## 认识数组的本质

数组的本质是一个对象
**数组.length = 数组的长度**
- length属性：数组的长度，会自动变化，值为最大下标+1
- 数字字符串属性：叫做下标，也叫做索引，相当于数组中每个数据的编号，下标从0开始排列


连续下标的取值范围：0 ~ length - 1，如果给length直接赋值，会导致数组可能被截断

实际开发中，不要给length赋值。

## 下标

通常情况下，下标是连续的。

下标不连续的数组，叫做稀松数组。

## 数组的常见操作

### 添加数组项

- 数组[长度] = 数据：向数组末尾添加一个数据
- 数组.push(数据): 向数组末尾添加一个数据
- 数组.unshift(数据)：向数组起始位置添加一个数据，会导致数组每一项的下标向后移动
- 数组.splice(下标, 0, 添加的数据): 从指定下标位置开始，删除0个，然后在该位置插入添加的数据，如果下标超过范围，则按照范围的边界进行处理（超过最大下标，按最大下标处理）。

push、unshift、splice可以添加多个数据，push(1,2,3)

### 删除数据

- delete 数组[下标]: 这种做法不会导致数组其他的属性发生变化，因此，该做法会导致产生稀松数组，所以不推荐使用该做法。
- 数组.pop(): 删除数组的最后一项，该表达式返回最后一项的数据
- 数组.shift()：删除数组第一项，该表达式返回第一项的数据
- 数组.splice(下标, 删除的数量, 添加的数据): 从指定下标位置开始，删除指定数量，然后在该位置插入添加的数据，如果下标超过范围，则按照范围的边界进行处理。返回一个新数组，该数组记录被删除的数据。

### 其他操作

- 数组 = Object.keys(对象)：把一个对象转变成一个数组，数组的内容为对象的属性名，没有属性值

- 数组.slice(起始位置下标, 结束位置下标)：将起始位置到结束位置之间的数据拿出来，得到一个新的数组，该函数不会改变原数组；注意：结束下标取不到

下标可以写负数，如果是负数，则从数组的末尾开始计算。

如果不写结束下标，则直接取到末尾。

- 数组清空

数组.splice(0, 数组.length);

数组.length = 0;

- 查找数组中某一项的下标

数组.indexOf(数据)

从数组中依次查找对应的数据，查找时使用严格相等进行比较。找到第一个匹配的下标，返回。如果没有找到，则得到-1；

数组.lastIndexOf(数据)

功能和indexOf类似，只是查找的是最后一个匹配的下标

- 数组.fill

数组.fill(数据)：将数组的所有项，填充为指定的数据

数组.fill(数据, 开始下标): 将数组从开始下标起，到数组的末尾，填充为指定的数据

数组.fill(数据, 开始下标，结束下标): 将数组从开始下标起，到数组的结束下标（取不到），填充为指定的数据

- 数组.join(分隔符)，该函数把数组的每一项以字符串形式拼接返回
  var  arr = [1,2,3,4,5,6]
       str = arr.join(&quot;,&quot;);
  console.log(str);--&gt;&quot;1,2,3,4,5,6&quot;

- 数组1.concat（数组2）
  将数组2的所有元素拼接到数组1的末尾，产生一个新的数组返回，该表达式不会对原来的两个数组造成任何影响，而是产生一个新数组

## 语法补充

### in关键字

判断某个属性在对象中是否存在
也可以判断某个下标在数组中是否存在
数组的本质是对象，下标就是属性名

属性名 in 对象

### for-in  foreach 循环

\`\`\`js
for(var prop in 对象){
    //循环体
}
\`\`\`
取出对象的所有属性名，每次循环将其中一个属性名赋值给变量prop，运行循环体，**利用该循环可以实现数组的遍历**
for-in循环不会遍历稀松数组的属性名（下标），因为稀松数组没有值的地方没有下标，for循环遍历会循环的每一项

for循环获取数组下标的typeof类型为number；
for in 循环获取数组下标的typeof类型为string；

var arr = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;];
for(var i = 0;i &lt; arr.length;i++){
	console.log(typeof(i));//number
	console.log(arr[i]);//a,b,c
}
 
var att = [&#39;a&#39;,&#39;b&#39;,&#39;c&#39;];
for(var j in att){
	console.log(typeof(j));//string
	console.log(att[j]);//a,b,c
}

for循环不能用于循环对象，因为for循环无法获取obj.length，所以for循环只能用于数组操作；
for in 循环可以获取对象的键值，可以操作数组，还可操作对象；
for...in 效率是最低的。这是因为 for...in 有一些特殊的要求，包括：
1. 遍历所有属性，不仅是 own properties 也包括原型链上的所有属性。
2. 忽略 enumerable 为 false 的属性。
3. 必须按特定顺序遍历，先遍历所有数字键，然后按照创建属性的顺序遍历剩下的。

var obj = new Object({
	name:&quot;Simon&quot;,
	age:&quot;16&quot;,
	city:&quot;BJ&quot;
});
 
console.log(obj.length);//undefined
for(var i = 0;i &lt; obj.length;i++){
	console.log(i);//空的
	console.log(obj[i]);//空的
}
 
for(var j in obj){
	console.log(j);//name,age,city
	console.log(obj[j]);//simon,16,BJ
}




### 作业

 //         1. 提示用户输入数组的长度，以及数组每一项的值，然后输出该数组
        // var arr = [],
        //     len,
        //     i;
        // len = +prompt(&quot;请输入数组的长度&quot;);
        // if (len === null || len &lt; 0 || isNaN(len)) {
        //     console.log(&quot;输入有误&quot;);
        // } else {
        //     for (i = 0; i &lt; len; i++) {
        //         arr[i] = prompt(\`请输入数组第\${i+1}项的值\`);
        //     };
        // }
        // console.log(arr);


        //    2. 初始化一个数字数组，然后求该数组所有项之和
        // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        //     i,
        //     num = 0;
        // for (i = 0; i &lt; arr.length; i++) {
        //     num += arr[i];
        // }
        // console.log(num);


        //    3. 初始化一个数字数组，然后输出数组中所有的奇数
        // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        //     i;
        // for (i = 0; i &lt; arr.length; i++) {
        //     if(arr[i] % 2 !== 0){
        //         console.log(arr[i]);
        //     }
        // }



        //    4. 初始化一个数字数组，然后输出数组中所有的素数
        // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        //     i,
        //     num = 0;
        // for (i = 0; i &lt; arr.length; i++) {
        //     for (j = 1; j &lt;= arr[i]; j++) {
        //         if (arr[i] % j === 0) {
        //             num++;
        //         }
        //     }
        //     if (num === 2) {
        //         console.log(arr[i]);
        //     }
        //     num = 0;
        // }
        // var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],




        //    5. 斐波拉契数列是这样一种数列：1  1  2  3  5  8  13 ......
        //    数列前两位为1，第n位=第n-1位+第n-2位
        //    让用户输入斐波拉契数列的长度，在控制台中打印该长度的斐波拉契数列
        // var i,
        //     fb,
        //     arr = [];
        // fb = prompt(&quot;请输入斐波那契数列的长度&quot;)
        // if (fb === null || fb &lt; 0 || isNaN(fb)) {
        //     console.log(&quot;输入有误&quot;);
        // } else {
        //     if (+fb === 1) {
        //         arr[0] = 1;
        //     } else if (+fb === 2) {
        //         arr[0] = 1;
        //         arr[1] = 1;
        //     } else if (+fb === 0) {

        //     } else {
        //         arr[0] = 1;
        //         arr[1] = 1;
        //         for (i = 2; i &lt; fb; i++) {
        //             arr[i] = arr[i - 1] + arr[i - 2];
        //         }

        //     }
        //     console.log(arr);
        // }


        //    6. 定义一个用户数组，数组的每一项是一个用户对象，用户对象中包含账号和密码，随意初始化一些对象放入数组中。
        //然后提示用户输入账号和密码，判断是否登录成功
        // var arr = [user1 = {
        //         账号: &quot;850122312&quot;,
        //         密码: &quot;850122312&quot;
        //     }, user2 = {

        //         账号: &quot;1669651512&quot;,
        //         密码: &quot;1669651512&quot;
        //     }, user3 = {

        //         账号: &quot;1449784336&quot;,
        //         密码: &quot;1449784336&quot;
        //     }],
        //     user = {},
        //     num = 0;
        // user.账号 = prompt(&quot;请输入账号&quot;);
        // user.密码 = prompt(&quot;请输入密码&quot;);
        // for (i = 0; i &lt; arr.length; i++) {
        //     if (user.账号 === arr[i].账号 &amp;&amp; user.密码 === arr[i].密码) {
        //         console.log(&quot;登录成功&quot;);
        //         num++;
        //     }
        // }
        // if (num === 0) {
        //     console.log(&quot;登录失败&quot;);
        // }


        //    7. 初始化一个5*5的二维数组，数组每一项是一个数字，计算对角线之和
        // var arr = [
        //         [1, 2, 3, 4, 5],
        //         [1, 2, 3, 4, 5],
        //         [1, 2, 3, 4, 5],
        //         [1, 2, 3, 4, 5],
        //         [1, 2, 3, 4, 5]
        //     ],
        //     i,
        //     j,
        //     num = 0;
        // for (i = 0; i &lt; 5; i++) {
        //     num += arr[i][i] + arr[i][4 - i];

        // }
        // num = num - arr[2][2];
        // console.log(num);


        //    8. 初始化一个数字数组（数据随意），对该数组进行升序排序，然后输出结果
        // var arr = [3, 5, 6, 9, 1, 2, 5, 4, 7],
        //     t, i, j;
        // for (i = 1; i &lt; arr.length; i++) {
        //     for (j = 0; j &lt; arr.length - i; j++) {
        //         if (arr[j] &gt; arr[j + 1]) {
        //             t = arr[j];
        //             arr[j] = arr[j + 1]
        //             arr[j + 1] = t;
        //         }
        //     }
        // }
        // console.log(arr);
        //    思路提示：

        //    数组的排序有多种算法可以完成，这里介绍其中一种：冒泡排序算法

        //    冒泡排序算法的原理如下：
        //    - 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
        //    - 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
        //    - 针对所有的元素重复以上的步骤，除了已排好序的元素。


        //    9. 有一个数组，存放了一些数字，找出出现频率最高的数字
        // var arr = [1, 1, 2, 2, 3, 3, 3, 8, 8, 9, 6, 4, 5, 2, 5, 8, 6, 2, 1, 1, 6, 4, 1, 9, 2, 1, 9, 1, 5, 8, 1, 5, 1],
        //     i, j, t, src = {},
        //     a;
        // for (i = 0; i &lt; arr.length; i++) {
        //     if (!src[arr[i]]) {
        //         src[arr[i]] = 1;
        //     } else {
        //         src[arr[i]] += 1;
        //     }
        // }
        // console.log(src);
        // a = Object.keys(src);
        // for (i = 0; i &lt; a.length; i++) {
        //     for (j = 0; j &lt; a.length; j++) {
        //         if (src[a[j]] &gt; src[a[j + 1]]) {
        //             t = a[j + 1];
        //             a[j + 1] = a[j];
        //             a[j] = t;
        //         }
        //     }
        // }
        // console.log(a);
        // console.log(\`输出频率最高的数字是\${a[(a.length-1)]}，输出了\${src[a[(a.length-1)]]}次。\`)


        // var arr = [1, 1, 2, 2, 3, 3, 3, 8, 8, 9, 6, 4, 5, 2, 5, 8, 6, 2, 1, 1, 6, 4, 1, 9, 2, 1, 9, 1, 5, 8, 1, 5, 1],
        //     i, j, t, src = {},
        //     resulet,
        //     a;
        // for (i = 0; i &lt; arr.length; i++) {
        //     if (!src[arr[i]]) {
        //         src[arr[i]] = 1;
        //     } else {
        //         src[arr[i]] += 1;
        //     }
        // }
        // for (var prop in src) {
        //     if (!resulet || src[prop] &gt; resulet.val) {
        //         resulet = {
        //             number: prop,
        //             val: src[prop]
        //         }
        //     }

        // }
        // console.log(\`输出频率最高的数字是\${resulet.number}，输出了\${resulet.val}次。\`)
        // console.log(\`输出频率最高的数字是\${resulet[&quot;number&quot;]}，输出了\${resulet[&quot;val&quot;]}次。\`)



# 函数语法

重复代码：修改让程序难以维护

函数主要用于减少重复代码

## 创建（定义、声明）函数

\`\`\`js
function 函数名(){
    // 函数体
}
\`\`\`

函数体的代码不会直接运行，必须要手动调用函数，才能运行其中的代码。

## 调用函数

运行函数体

\`\`\`js
函数名();
\`\`\`

## 函数提升

通过字面量声明的函数，会提升到脚本块的顶部，跟变量一样，也就是函数写在下边上边都一样，都能调用。
function f(){}
通过字面量声明的函数，会成为全局对象的属性。

## 其他特点

通过typeof 函数名，得到的结果是&quot;function&quot;

函数内部声明的变量：

1. 如果不使用var声明，和全局变量一致，表示给全局对象添加属性
2. 如果使用var声明，变量提升到所在函数的顶部，函数外部不可以使用该变量

**函数中声明的变量，仅能在函数中使用，在外部无效**

## 参数

参数表示函数运行的未知条件，需要调用者告知的数据

\`\`\`js
// 参数的有效返回在函数体中
function 函数名(形参1, 形参2, ...){
    
}

函数名(实参)

\`\`\`
如果实参没有传递，则对应的形参为undefined


## 返回值

函数运行后，得到的结果，调用函数时，调用表达式的值就是函数的返回值

return 会直接结束整个函数的运行

return 后面如果不跟任何数据，返回undefined

如果函数中没有书写return，则该函数会在末尾自动return undefined。

## 文档注释

\`\`\`js
/**
 *
 *
*/
\`\`\`


/**
 * 判断一个数是不是奇数
 * @param {number} n 
 * @reture {boolean}
 */
function isOdd(n) {
    return n % 2 !== 0;
};
/**
 * 判断一个数是不是素数
 * @param {number} n 
 * @return {boolean}
 */
function isPrime(n) {
    if (n &lt; 2) {
        return false;
    } else {
        for (var i = 2; i &lt; n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
}
/**
 * 对数组求和
 * @param {Array} arr 
 * @return {number}
 */
function sumOfArray(arr) {
    for (var num = 0, i = 0; i &lt; arr.length; i++) {
        num += arr[i];
    }
    return num;
}
/**
 * 返回数组中最大值
 * @param {Array} arr
 * @return {number} 
 */
function maxOfArray(arr) {
    var max = arr[0];
    for (var i = 1; i &lt; arr.length; i++) {
        if (arr[i] &gt; max) {
            max = arr[i];
        }
    }
    return max;
}
/**
 * 返回数组中最小值
 * @param {Array} arr 
 * @return {number}
 */
function minOfArray(arr) {
    var min = arr[0];
    for (var i = 0; i &lt; arr.length; i++) {
        if (arr[i] &lt; min) {
            min = arr[i];
        }
    }
    return min;
}
/**
 * 判断一个数组是不是稀疏数组
 * @param {Array} arr 
 * return {boolean}
 */
function hasEmptyInArray(arr) {
    for (var i = 0; i &lt; arr.length; i++) {
        if (!(i in arr)) {
            return true;
        }
    }
    return false;
}
/**
 * 判断某年是不是闰年
 * @param {number} n 
 * @return {boolean}
 */
function isLeap(year) {
    return year % 4 === 0 &amp;&amp; year % 100 !== 0 || year % 400 === 0;
}
/**
 * 输出某年某月的天数
 * @param {number} year 
 * @param {number} month 月份，1-12之间的数
 * @return {number} 天数
 */
function getDays(year, month) {
    if (month === 2) {
        return isLeap(year) ? 29 : 28;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    } else {
        return 31;
    }
}

/**
 * 找出一个数字数组中出现频率最多的数字，并输出该数字和其频率
 * @param {Array} arr 
 */
function getTopFreqInArray(arr) {
    for (var obj = {}, i = 0; i &lt; arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    var newObj;
    for (var prop in obj) {
        if (!newObj || obj[prop] &gt; newObj.value) {
            newObj = {
                number: +prop,
                value: obj[prop]
            }
        }
    }
    return \`数组中出现次数最多的数字是\${newObj.number},频率是\${newObj.value}次\`;
}

 //         1. 利用上面的某些函数，实现哥德巴赫猜想

        // 任一大于2的偶数都可写成两个质数之和，比如：8 = 3 + 5

        // 让用户输入一个大于2的整数，输出其等于哪两个素数相加
        var n = prompt(&quot;请输入一个大于2的偶数&quot;);
        if (isOdd(n) || n &lt;= 2) {
            console.log(&quot;输入有误&quot;);
        } else {
            for (var j, i = 2; i &lt;= n / 2; i++) {
                j = n - i;
                if (isPrime(i) &amp;&amp; isPrime(j)) {
                    console.log(\`\${n}等于\${i}和\${j}两个质数相加\`);
                }
            }
        }
        // 2. 让用户输入一个年份，输出该年每个月的天数
        var year = prompt(&quot;请输入年份&quot;);
        for (var i = 1; i &lt;= 12; i++) {
            console.log(\`\${year}年\${i}月有\${getDays(year,i)}天\`);
        }



# 作用域和闭包

## 作用域

作用域表示一个代码区域，也表示一个运行环境

JS中，有两种作用域：

1. 全局作用域

直接在脚本中书写的代码

在全局作用域中声明的变量，会被提升到脚本块的顶部，并且会成为全局对象的属性。

2. 函数作用域

函数中的代码

在函数作用域中声明的变量，会被提升到函数的顶部，并且不会成为全局对象的属性.

**因此，函数中声明的变量不会导致全局对象的污染**

**尽量的把功能封装在函数中**

但是，当函数成为一个表达式时，它既不会提升，也不会污染全局对象。

**将函数变为一个函数表达式的方式之一，将函数用小括号括起来。**
(function sumOfArray(arr) {
    for (var num = 0, i = 0; i &lt; arr.length; i++) {
        num += arr[i];
    }
    return num;
})
然而，这样一来，函数无法通过名称调用。

如果书写一个函数表达式，然后将立即调用，该函数称之为**立即执行函数** IIFE（Imdiately Invoked Function Expression）。
(function sumOfArray(arr) {
    for (var num = 0, i = 0; i &lt; arr.length; i++) {
        num += arr[i];
    }
    return num;
}());      **在函数后面加一个括号然后将函数括起来变为函数表达式**
由于大部分情况下，函数表达式的函数名没有实际意义，因此，可以省略函数名。
(function (arr) {
    for (var num = 0, i = 0; i &lt; arr.length; i++) {
        num += arr[i];
    }
    return num;
}());
没有名字的函数，称之为匿名函数，只有在函数表达式里的函数可以省略函数名

## 作用域中可以使用的变量

全局作用域只能使用全局作用域中声明的变量（包括函数）

函数作用域不仅能使用自身作用域中声明的变量（包括函数），还能使用外部环境的变量（包括函数）

有的时候，某个函数比较复杂，在编写的过程，可能需要另外一些函数来辅助它完成一些功能，而这些函数仅仅会被该函数使用，不会在其他位置使用，则可以将这些函数声明到该函数的内部。

函数内部声明的变量和外部冲突时，使用内部的。

## 闭包

闭包（closure），是一种现象，内部函数，可以使用外部函数环境中的变量。



# 函数表达式和this

## 函数表达式

JS中，函数也是一个数据，语法上，函数可以用于任何需要数据的地方

JS中，函数是一等公民

函数是一个引用类型，将其赋值给某个变量时，变量中保存的是函数的地址

## this关键字

&gt; this无法赋值

1. 在全局作用域中，this关键字固定指向全局对象。
2. 在函数作用域中，取决于函数是如何被调用的
   1） 函数直接调用，this指向全局对象
   2） 通过一个对象的属性调用，格式为\`\`\`对象.属性()\`\`\`或\`\`\`对象[&quot;属性&quot;]()\`\`\`，this指向对象，函数保存在对象的属性中

## .call()
.call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
借用别人的函数来实现自己的功能，把自己的参数传给别人的函数，生成自己的东西
任何数据都可以使用.call()方法，括号中是this指向：
    function Person(name, age) {
            this.name = &#39;deng&#39;,
            this.age = 19,
            this.sex = &#39;man&#39;
    }
    var obj = {};
    Person.call(obj); //这时Person中的this就指向obj而不是window
    //此时：
    console.log(obj.name,obj.age,obj.sex)
    function obj2(name,age){
        Person.call(this,name,age); //这时Person中的this就指向obj2而不是window
    }
    var obj2 = new obj2()
    console.log(obj2.name,obj2.age,obj2.sex)


# 构造函数

&gt; 对象中的属性，如果是一个函数，也称该属性为对象的方法
&gt; 函数名必须是大驼峰命名法
## 用于创建对象的函数

用函数创建对象，可以减少繁琐的对象创建流程

1. 函数返回一个对象
2. 构造函数：构造函数专门用于创建对象

\`\`\`js
new 函数名(参数);
\`\`\`

如果使用上面的格式创建对象，则该函数叫做构造函数。

1) 函数名使用大驼峰命名法
2) 构造函数内部，会自动创建一个新对象，this指向新创建的对象，并且自动返回新对象
3) 构造函数中如果出现返回值，如果返回的是原始类型，则直接忽略；如果返回的是引用类型，则使用返回的结果
4) 所有的对象，最终都是通过构造函数创建的


## new.target()

该表达式在函数中使用，返回的是当前的构造函数，但是，如果该函数不是通过new调用的，则返回undefined

通常用于判断某个函数是否是通过new在调用。




# 函数的本质

函数的本质就是对象。

argument 是一个作为函数输入的值（原始数据或对象）。

&gt; 某些教程中，将构造函数称之为构造器
&gt; 所有的对象都是通过关键字new出来的，\`\`\`new 构造函数()\`\`\`

所有的函数，都是通过\`\`\`new Function\`\`\`创建。

&gt; Function

由于函数本身就是对象，因此函数中，可以拥有各种属性。

## 包装类

JS为了增强原始类型的功能，为boolean、string、number分别创建了一个构造函数：

1. Boolean
2. String
3. Number

如果语法上，将原始类型当作对象使用时（一般是在使用属性时），JS会自动在该位置利用对应的构造函数，创建对象来访问原始类型的属性。

&gt; 类：在JS中，可以认为，类就是构造函数

&gt; 成员属性（方法）、实例属性（方法）：表示该属性是**通过构造函数创建的对象调用**的,通过对象调用的，n = new Number(234);  n.toFixed  这里toFixed就是实例属性，也就是直接通过对象n调用的
&gt; 静态属性（方法）、类属性（方法）：表示该属性是通过构造函数本身调用的，通过函数调用的，如：Number.isNaN(),这里isNaN就是类属性，也就是直接通过函数Number调用的




# 递归 

函数直接或间接调用自身

避免无限递归（没有给终止条件），无限递归会导致执行栈溢出。
 
对比死循环

- 死循环不会报错，也不会导致栈溢出
- 无限递归会导致栈溢出

## 执行栈

任何代码的执行都必须有一个执行环境，执行环境为代码的执行提供支持

执行环境是放到执行栈中的，执行的时候始终是先执行执行栈最顶部的执行环境

每个函数的调用，都需要创建一个函数的执行环境，函数调用结束，执行环境销毁，退回全局环境

执行栈有相对固定的大小，如果执行环境太多，执行栈无法容纳，会报错

## 尾递归

如果一个函数最后一条语句是调用函数，并且调用函数不是表达式的一部分，则该语句称为尾调用，如果尾调用是调用自身函数，则称为尾递归。

某些语言或执行环境会对尾调用进行优化，它们会理解销毁当前函数，避免执行栈空间被占用。

在浏览器执行环境中，尾调用没有优化。但在nodejs环境中有优化。



标准库（标准API）

- 库：liberary
- API：应用程序编程接口，Application Programing Interface
- 标准：ECMAScript标准


## Object

### Object.prototype.constructor  
返回创建实例对象的 Object 构造函数的引用。
**返回的是引用值**
特定的函数，用于创建一个对象的原型。注意，此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。

### 静态成员

- keys(某个对象)，得到某个对象的所有属性名数组
- values(某个对象)，得到某个对象的所有属性值数组
- entries(某个对象)，得到某个对象的所有属性名和属性值的数组

### 实例成员

&gt; 实例成员可以被重写

**所有对象，都拥有Object的所有实例成员**

- toString方法：得到某个对象的字符串格式

默认情况下，该方法返回&quot;[object Object]&quot;;

- valueOf方法：得到某个对象的值

默认情况下，返回该对象本身

&gt; 在JS中，当自动的进行类型转换时，如果要对一个对象进行转换，实际上是先调用对象的valueOf方法，然后调用返回结果的toString方法，将得到的结果进行进一步转换。
&gt; 但是如果调用valueOf的方法已经得到原始类型，则不会再调用toString方法

## Function

**所有函数都具有Function中的实例成员**

**语法：arguments：在函数中使用，获取该函数调用时，传递的所有参数**

**arguments是一个类数组（也称为伪数组：没有通过Array构造函数创建的类似于数组结构的对象），伪数组会缺少大量的数组实例方法**

**arguments数组中的值，会与对应的形参映射**

可以使用 arguments对象作为 argsArray 参数。 arguments 是一个函数的局部变量。 它可以被用作被调用对象的所有未指定的参数。 这样，你在使用apply函数的时候就不需要知道被调用对象的所有参数。 你可以使用arguments来把所有的参数传递给被调用对象。 被调用对象接下来就负责处理这些参数。

### 实例成员

- length属性，得到函数形参数量
  
- apply方法：调用函数，把参数传递给函数，同时指定函数中的this指向，参数放在数组里传递，先指定this指向，再加一个参数数组,sayHellow.apply(user1,[1,2])
  apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数。
  &lt;!-- var array = [&#39;a&#39;, &#39;b&#39;];
  var elements = [0, 1, 2];
  array.push.apply(array, elements);
  console.info(array); // [&quot;a&quot;, &quot;b&quot;, 0, 1, 2] --&gt;
  call()方法的作用和 apply() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。

- call方法：调用函数，同时指定函数中的this指向，参数以列表传递，先指定this指向，再直接写参数,sayHellow.call(user2,[3,2])
  
- bind方法：得到一个新函数，该函数中的this始终指向指定的值。绑定this，多次调用不用重复使用bind，newFunc = sayHellow.bind(user2,[3,2]);  newFunc();

通常，可以利用apply、call方法，将某个伪数组转换伪真数组。
newArray = 


# Array构造器

凡是通过Array构造函数创建的对象，都是数组

## 静态成员

- from方法：可以将一个伪数组转换为真数组，并将字符串转换成数组
- isArray方法：判断一个给定的数据，是否为一个真数组
- of方法：类似于中括号创建数组，依次赋予数组每一项的值

## 实例成员

- fill方法：用某个数据填充数组，将数组中指定区间的所有元素的值，都替换成某个固定的值。
- pop:删除数组的最后一个元素，并返回这个元素。
- push：在数组的末尾增加一个或多个元素，并返回数组的新长度。
- reverse：将当前数组颠倒顺序，颠倒数组中元素的排列顺序，即原先的第一个变为最后一个，原先的最后一个变为第一个。
- shift：删除数组的第一个元素，并返回这个元素。
- sort：对数组进行排序，并返回当前数组。
- splice：在任意的位置给数组添加或删除任意个元素。此方法会改变原数组。
- unshift：在数组的开头增加一个或多个元素，并返回数组的新长度。

纯函数、无副作用函数：不会导致当前对象发生改变

- concat，把数组内容连接到指定数组的后边，且生成新的数组，不影响原数组
- includes: 数组中是否包含满足条件的元素
- join 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
- slice：抽取当前数组中的一段元素组合成一个新数组。方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
- indexOf：indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
- lastIndexOf：返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。
- forEach: 遍历数组,对数组的每个元素执行一次给定的函数,该函数接收一至三个参数：currentValue数组中正在处理的当前元素,index数组中正在处理的当前元素的索引,array forEach() 方法正在操作的数组,thisArg可选参数。当执行回调函数 callback 时，用作 this 的值。
  注意： 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。
- every：是否所有元素都满足条件
- some：是否至少有一个元素满足条件
- filter：过滤，得到满足条件的元素组成的新数组,其包含通过所提供函数实现的测试的所有元素。 
- find: 查找第一个满足条件的元素，返回元素本身，如果没有找到，返回undefined
- findIndex: 查找第一个满足条件的元素，返回元素的下标
- map：映射，将数组的每一项映射称为另外一项
- reduce：统计，累计



# 原始类型包装器

- new 包装器(值)：返回的是一个对象
- 包装器(值)：返回的是一个原始类型

## Number
通过**Number()**转换函数传入一个字符串,它会试图将其转换为一个整数或浮点数直接量,这个方法只能基于十进制进行转换,并且字符串中不能出现非数字的字符,否则将返回NaN。
### 静态成员

- isNaN：确定传递的值是否为 NaN，并且检查其类型是否为 Number。它是原来的全局 isNaN() 的更稳妥的版本。
- isFinite：用来检测传入的参数是否是一个有穷数（finite number）。
- isInteger：判断一个数据是否是整数
- parseFloat: 将一个数据转换为小数
- parseInt：将一个数据转换为整数，直接舍去小数部分 

parseInt、parseFloat要求参数是一个字符串，如果不是字符串，则会先转换为字符串。
从字符串开始位置进行查找，找到第一个有效的数字进行转换，如果没有找到，则返回NaN，左右空白字符会忽略

parseInt，可以传入第二个参数，表示将给定的字符串，识别为多少进制。

### 实例成员

- toFixed方法：会有四舍五入
- toPrecision：以指定的精度返回一个数字字符串

## Boolean

## String

### 静态成员

- fromCharCode：通过unicode编码创建字符串  ASCII码转字符

### 实例成员

- length：字符串长度

字符串是一个伪数组

- charAt：得到指定位置的字符
- charCodeAt 字符转ASCII码
- concat：将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
- includes：用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
- endsWith：用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。
- startsWith：用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。
- indexOf：返回调用它的 String 对象中第一次出现的指定值的索引，从 fromIndex 处进行搜索。如果未找到该值，则返回 -1。
- lastIndexOf：返回调用String 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 fromIndex处从后向前搜索。如果没找到这个特定值则返回-1 。
- padStart：用另一个字符串填充当前字符串(重复，如果需要的话)，以便产生的字符串达到给定的长度。填充从当前字符串的开始(左侧)应用的。
  &#39;abc&#39;.padStart(10);         // &quot;       abc&quot;
  &#39;abc&#39;.padStart(10, &quot;foo&quot;);  // &quot;foofoofabc&quot;
  &#39;abc&#39;.padStart(6,&quot;123465&quot;); // &quot;123abc&quot;
  &#39;abc&#39;.padStart(8, &quot;0&quot;);     // &quot;00000abc&quot;
  &#39;abc&#39;.padStart(1);          // &quot;abc&quot;

- padEnd：会用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。
- repeat ：构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
- ：从某个位置取到某个位置；位置可以是负数；
- substr: 从某个位置开始取，取指定的长度；位置可以是负数；
- substring：从某个位置取到某个位置；不可以是负数；参数位置是可调换的。
- toLowerCase   大写变小写
- toUpperCase   小写变大写
- split：通过一个方法分割字符串成为字符串数组




# Math对象

提供了一系列与数学相关的成员

&gt; 常量：永远不会变化的数据。常量一般命名时所有字母大写，如果有多个单词，用下划线分割。

- random方法: 产生一个0~1之间的随机数
- PI属性：得到圆周率
- abs方法：求绝对值
- floor方法：对一个数向下取整
- ceil方法：对一个数向上取整
- max方法：得到一组数字的最大值；如果无参，得到-Infinity
- min方法：得到一组数字的最小值；如果无参，得到Infinity
- pow方法：求一个数字的幂次方
- round方法：得到一个四舍五入的整数

- Math.PI 圆周率，一个圆的周长和直径之比，约等于 3.14159。
- Math.fround(x) 返回最接近一个数的单精度浮点型表示。


# Date构造函数

## 术语

1. 时间单位

年（year）
月（month）
日（date）
小时（hour）
分钟（minute）
秒（second）  =  1000ms
毫秒（millisecond，ms） = 1000 us
微秒（microsecond，us） = 1000 ns
纳秒（nanosecond，ns）

2. UTC和GMT

世界划分为24个时区，北京在东8区，格林威治在0时区。

GMT：Greenwish Mean Time 格林威治世界时。太阳时，精确到毫秒。
UTC：Universal Time Coodinated 世界协调时。以原子时间为计时标准，精确到纳秒。

UTC和GMT之间误差不超过0.9秒

GMT+0800  东8区

3. 时间戳

数字

1970-1-1 凌晨  到 某个时间  所经过的毫秒数

## 创建时间对象

- 直接调用函数（不适用new），忽略所有参数，直接返回当前时间的字符串。
- new Date(): 创建日期对象

1. 无参，当前时间
2. 1个参数，参数为数字，表示传入的是时间戳
3. 两个参数以上，分别表示：年、月、日、时、分、秒、毫秒

注意：月份的数字从0开始计算。

如果缺失参数，日期部分默认为1，时分秒毫秒默认为0。

月、日、时、分、秒、毫秒，均可以传递负数，如果传递负数，会根据指定日期进行计算。

## 实例成员

- getDate方法：得到日期部分
- getDay方法：得到星期几，0表示星期天
- getFullYear方法：得到年份
- getHours方法：得到小时部分
- getMinutes方法：得到分钟部分
- getSeconds方法：得到秒部分
- getMilliseconds方法：得到毫秒部分
- getTime方法：得到时间戳
- getMonth方法：得到月，从0开始计算

- setDate方法：设置日期
- setMonth方法：设置月份
- setFullYear方法：设置年
- setMinutes方法
- setSeconds方法
- setMilliseconds方法
- setTime方法：重新设置时间戳

- toDateString方法：将日期部分转换为可读的字符串。
- toISOString方法：将整个对象转换为ISO标准的字符串格式。
- toLocaleDateString方法：根据当前系统的地区设置，将日期部分转换为可读的字符串
- toLocaleString方法：根据当前系统的地区设置，将整个日期对象转换为可读的字符串
- toLocaleTimeString方法：根据当前系统的地区设置，将时间部分转换为可读的字符串


## 日期的运算

日期对象重写了Object中的valueOf方法，返回的是一个数字，表示时间戳

因此，日期对象可以进行数学运算



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),v=[d];function r(a,u){return i(),e("div",null,v)}const m=n(s,[["render",r],["__file","JS基础学习.html.vue"]]);export{m as default};
