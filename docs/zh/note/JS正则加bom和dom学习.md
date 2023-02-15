[toc]

# 正则表达式

正则表达式是国际标准，跨越语言

正则表达式是一个规则，用于验证字符串。

## 基础

1. 字面量匹配
规则中直接书写字面量字符

2. 特殊字符
   

. 表示字符数量
^ 表示字符串开始
$ 表示字符串结束


1. 转义符


\n 换行符
\r 回车符  尽量不要去使用，只有windows系统有回车符，OS系统和Linux系统没有
\t 制表符 按tab键
\s 空白字符  即制表符、空格、换行、回车
\S 除了空白字符的所有字符，只要不是空白就行
\b 匹配一个单词边界，即必须是一个独立的单词，如一个单词的两边是空白，或在开始或结尾
\B 非单词边界，与\b相反，不能是边界
\d 匹配数字，只能是数字
\D 匹配非数字，其他都可以，不能是数字
\w 匹配字母、数字、下划线
\W 匹配非字母数字下划线
\u 用Unicode编码匹配，后边跟的Unicode编码，\u0x41-->A
\\ 匹配 \

转义符可以将特殊字符转义
1. 字符集
匹配字符范围内的字符，匹配的是每个字符
a245b32c
[abc]
a
b
c

[字符范围]

[0-9a-zA-Z_],匹配所有字符

匹配中文： [\u4e00-\u9FA5]

1. 量词

前面的规则出现的次数


* 表示匹配任意次数，零次或多次
+ 至少一个，一个或多个
? 零个或一个
{n}: 匹配n个
{n,}: 匹配>=n个
{n,m}: 匹配n-m个
| 或者，前边一个规则后边一个规则， abc|123
[]:取反，[\d]匹配非数字，相当于等于\D


1. 写一个正则表达式，匹配手机号
   ^1..........$
   ^1\d{10}$

11位，第一位是1

2. 姓名必须是3-6位的中文
   ^[\u4e00-\u9FA5]{3,6}$

3. 密码必须是6-12位的字符，只能包含数字、字母、下划线
^\w{6,12}$
4. 写一个正则表达式，匹配邮箱
^\w+@\w+\.\w+$|^\w+@\w+\.\w+\.\w+$$
^\w+@\w+(\.\w+){1,2}$
xxxxxx@xxxxx.xxxx.xxxx

5. 匹配一个座机号
^\d{1,3}-\d{4,8}$
xxx-xxxxxxxx

前面：1-3个数字
后面：4-8个数字

6. 匹配一个正数
   ^\d+(\.\d+)?$

7. 匹配一个小数
   ^-?\d+\.\d+$

8. 匹配一个整数
   ^-?\d+$

## JS中的应用

js中，正则表达式表现为一个对象，该对象是通过构造函数RegExp创建的

### 创建正则对象

1. 字面量模式
   var reg1 = /^\d+(\.\d+)?$/;
2. 构造函数模式
   var reg2 = new RegExp("^\d+(\.\d+)?$");

   RegExp("^\d+(\.\d+)?$");(语法糖写法)
- var reg1 = /^\d+(\.\d+)?$/g; 加一个g表示全局搜索
- var reg2 = new RegExp("^\d+(\.\d+)?$","g");
- RegExp("^\d+(\.\d+)?$","g");
- g 全局搜索
- i 忽略大小写
- m 多行匹配
- 可以都加  var reg1 = /^\d+(\.\d+)?$/mgi;

### 正则实例成员

- global  判断是否开启全局匹配，只读属性
  全局模式下多次匹配会往后移动，不会从头开始，匹配不到之后才会从头开始，非全局匹配多次匹配会每次都重头开始匹配
- ignoreCase  是否开启了忽略大小写
- multiline  是否开启了多行匹配
- source  得到目前的规则
- test()方法：验证某个字符串是否满足规则
- exec()方法：execute，执行匹配，得到匹配结果，输出一个真数组，匹配不到返回null，得到所有的匹配结果和位置，匹配结果下标为0
- lastIndex  得到下一个匹配的位置


> 正则表达式，默认情况下，使用贪婪模式，尽可能多的匹配
> 在量词后，加上?，表示进入非贪婪模式
  d+?  也就是匹配一个数字即可

### 字符串对象中的正则方法

- split   与正则表达式进行匹配，匹配的是分割方式：s.split(/[, \-\t]/) 逗号、空格、横杠、制表符 s = "a,s d-f\tg",换行等都可以，\s空白字符也可以
  s.split(/[, \-\t]/,3) 可以传第二个参数，这里表示只能分割成三块
- replace  替换字符串，如把空白字符替换为逗号，返回一个新的字符串，只会替换一次，t = s.(" ",",")可以加全局匹配t = s.(/\s/g,",")
  替换单词首字母：t = s.(/\s*\b[a-z]\s*/g,function(match){
      return match.toUpperCase().trim();**去掉首字母前的空白字符**
  })
- search  与正则表达式匹配，始终得到第一个满足条件的第一个的下标
- match  使用字符串与正则表达式比较匹配

1. 书写一个正则表达式，去匹配一个字符串，得到匹配的次数，和匹配的结果
        var s = "ascaffagdadc";
        var reg = /a/g;
        var n = 0,
            str = "";
        while (result = reg.exec(s)) {
            n++;
            str += result[0] + "\n";
        }
        str = n + "\n" + str;
        console.log(str)


        1. 得到一个字符串中中文字符的数量
        var s = "很丰富huhda弩弓akhn1563收到add";
        var reg = /[\u4e00-\u9FA5]/g;
        var n = 0;
        while(reg.test(s)){
            n++;
        }
        console.log(n);
    
        1. 过滤敏感词， 有一个敏感词数组， 需要将字符串中出现的敏感词替换为四个星号
    
           ["共产党", "too young too simple", "营销"]
           var str = "中国共产党是一个很伟大的政党，但有一些国外的媒体营销号恶意诋毁中国共产党共产党，这样做是很可耻的，too young too simpletoo young too simple";
          var sensitive = ["共产党", "too young too simple", "营销"]
          var rep = "****";
        //   var repl = function(str,rep){
        //       var reg = new RegExp(`(${sensitive.join("|")})+`,"g");
        //       return str.replace(reg,rep);
        //   }
        //   console.log(repl(str,rep))
        console.log(myFunction.repSensitive(str, rep))


## 进阶

### 捕获组

1. 用小括号包裹的部分叫做捕获组，捕获组会出现在匹配结果中

var reg = /(\d[a-z])([a-z]+)/g;
var str = "65asd7ad1ad7asxf3asd";
while(result = reg.exec(str)){
    console.log(result);
}
得到：  这里的1对应的5a便是捕获组
0: "5asd"
1: "5a"
2: "sd"
index: 1
input: "65asd7ad1ad7asxf3asd"
groups: undefined
length: 2  
... 

 var str = "2016-6-15, 2013-5-18, 2019-7-30";
var reg = /(\d{4})-(\d{1,2})-(\d{1,2})/g;
s = str.replace(reg, function (match, g1, g2, g3) {
    return `${g1}/${g2}/${g3}`;    g1/g2/g3 为三个捕获组
})
console.log(s);

1. 捕获组可以命名，叫做具名捕获组

var reg = /(?<数字>\d[a-z])([a-z]+)/g;
括号里加 ?<name>


3. 非捕获组
var reg = /(?:\d[a-z])([a-z]+)/g;
括号里加 ?:
只是用括号括起来，表示一个整体，不捕获


### 反向引用

在正则表达式中，使用某个捕获组，\捕获组编号
在正则表达式后加  \要使用的捕获组下标
下边的例子以下标1为例

var s = "aaaaaasssssddddfgggghhhhhjkkkkk";
 //找出字符串中连续出现的字符
 var reg = /(\w)\1+/g;
 while(result = reg.exec(s)){
     console.log(result[1])
 } 

 - 也可以使用名字：
 var reg = /(?<char>\w)\k<char>+/g;

### 正向断言(预查)

检查某个字符后面的字符是否**满足**某个规则，该规则不成为匹配结果，并且不称为捕获组
在括号里加 ?=
var reg = /[a-zA-Z](?=\d+)/g;
后边有行，没有不行
var str = "65asd7ad1ad7asxf3asd";
var reg = /[a-zA-Z](?=\d+)/g;
while(result = reg.exec(str)){
    console.log(result);
} 

 var n = "1234567890";
result 1,234,567,890  
var reg = /\B(?=(\d{3})+$)/g;
console.log(n.replace(reg,","))


### 负向断言(预查)

检查某个字符后面的字符是否**不满足**某个规则，该规则不成为匹配结果，并且不称为捕获组
在括号里加 ?!
var reg = /[a-zA-Z](?!\d+)/g;

 var s = "asd5712612ag71125o85dff22";
result a s a d f   后边有不行，没有行
var reg = /[a-zA-Z](?!\d+)/g;
while(result = reg.exec(s)){
    console.log(result); 



# 错误处理

JS中的错误分为：

1. 语法错误：会导致整个脚本块无法执行。
2. 运行错误
   1. 运行报错：会导致当前脚本块后续代码无法执行
   2. 运行结果不符合预期

## 调试错误

1. 控制台打印
在控制台打印各个环节，查找错误
2. 断点调试   更加高大上的方式
在谷歌浏览器的Sources里标注断点查找
## 抛出错误

错误在js中本质上是一个对象，抛出错误的语法为：

```js
throw 错误对象;
```

错误对象的构造函数为Error

## 捕获错误

```js
try{
    //代码块1
}
catch(错误对象){
    //代码块2
}
finally{
    //代码块3
}
```

当运行代码1的时候，如果发生错误，立即停止代码1的执行，转而执行代码2，错误对象为抛出的错误对象。无论代码1和代码2是否，最终都将执行代码3




## web api概述

标准库：ECMAScript中的对象和函数

Web Api：浏览器宿主环境中的对象和函数

1. 知识繁杂
2. 成体系的知识
3. 程序思维：知识+程序思维 = 应用
4. 兼容性：了解，不记忆

Web Api：

- BOM：Browser Object Model，浏览器对象模型
- DOM：Document Object Model，文档对象模型

BOM：控制浏览器本身
DOM：控制HTML文档

ES(JS) 由 ECMAScript 规定的
WebApi 由 W3C（万维网联盟） 制定

## 关于DOM

- DOM 0
- DOM 1
- DOM 2
- DOM 3
- DOM 4  2015年


**DOM是什么**

DOM的核心理念，是将一个HTML或XML文档，用对象模型表示，每个对象称之为dom对象

dom对象又称之为dom节点Node

节点的类型：

- DocumentType，文档类型节点
- Document，文档节点，表示整个文档
- Comment，注释节点
- Element，元素节点
- Text，文本节点
- Attribute，属性节点
- DocumentFragment，文档片段节点

dom树：文档中不同的节点形成的树形结构。
![DOM树](DOM树.jpg)


# 获取dom节点

获取dom对象

> 全局对象 window 中有属性document，代表的是整个文档节点

## 旧的获取元素节点的方式

dom 0 时期规定：

- document.body：获取body元素节点
- document.head：获取head元素节点
- document.links：获取页面上所有的超链接元素节点，类数组
- document.anchors：获取页面上所有的锚链接(具有name属性)元素节点
- document.forms：获取页面中所有的form元素节点

## 新的获取元素节点的方式

### 通过方法获取

- document.getElementById：通过id获取对应id的元素，id不存在输出null
- document.getElementsByTagName: 通过元素名称获取元素，得到一个伪数组
- document.getElementsByClassName：通过元素的class类样式获取元素，IE9以下无效
- document.getElementsByName：通过元素的name属性值获取元素
- document.querySelector：通过CSS选择器获取元素，只会得到匹配的第一个，IE8以下无效
- document.querySelectorAll：通过CSS选择器获取元素，得到所有匹配的结果，IE8以下无效
- document.documentElement: 获取根元素

细节：

1. 在所有的得到类数组的方法中，除了querySelectorAll，其他的方法都是实时更新的，根据网页的变化实时跟着变化，实时更新，不用重新获取
2. getElementById 得到元素执行效率最高。
3. 书写了id的元素，会自动成为window对象的属性。它是一个实时的单对象。事实上的标准。不推荐使用。
4. getElementsByTagName、getElementsByClassName、querySelector、querySelectorAll，可以作为其他元素节点对象的方法使用
   如：<ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
     </ul>
     ul.getElementsByTagName("li")  得到ul里边所有的li
     ul.querySelector("li")   得到ul里的第一个li
     ul.querySelectorAll("li")  得到ul里边所有的li
   
### 根据节点关系获取节点

- **parentNode**：获取父节点（元素、文档）
- previousSibling：获取上一个兄弟节点
- nextSibling：获取下一个兄弟节点
- childNodes：获取所有的子节点，得到一个类数组
- firstChild：获取第一个子节点
- lastChild：获取最后一个子节点
- attributes: 获取某个元素的属性节点
![节点关系](节点关系图.jpg)
![节点类型](节点类型.jpg)

获取元素节点

- parentElement：获取父元素
- previousElementSibling：获取上一个兄弟元素
- nextElementSibling：获取下一个兄弟元素
- children：获取子元素
- firstElementChild：获取第一个子元素
- lastElementChild：获取最后一个子元素

## 获取节点信息

- nodeName：获取节点名称,得到的元素的名称是大写的，如HTNL、DIV、UL
- nodeValue：获取节点的值
- nodeType：节点类型，是一个数字


### 获取元素属性
1. Element.getAttribute('attributeName') 返回元素上一个指定的属性值。如果指定的属性不存在，则返回  null 或 "" （空字符串）。

2. Element.setAttribute('name', 'value') 设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性。

3. Element.removeAttribute('attrName') 从指定的元素中删除一个属性。

```html
 <body>
    <ul id="list1">
        <li><a href="">Lorem ipsum dolor sit.</a></li>
        <li><a href="">Doloremque fuga amet hic.</a></li>
        <li><a href="">Officia incidunt veritatis provident?</a></li>
        <li><a href="">Repellat eum exercitationem voluptatum?</a></li>
        <li><a href="">Soluta repellendus nobis maiores.</a></li>
        <li><a href="">Doloribus minima voluptas rerum!</a></li>
        <li><a href="">Molestiae nulla doloremque dicta.</a></li>
        <li><a href="">Molestiae at sequi corporis.</a></li>
        <li><a href="">Atque perspiciatis quaerat quisquam!</a></li>
        <li><a href="">Totam fugiat alias officiis?</a></li>
    </ul>
    <ul id="list2">
        <li><a href="">Lorem ipsum dolor sit.</a></li>
        <li><a href="">Ipsa quam neque repudiandae.</a></li>
        <li><a href="">Tenetur accusantium illo quam!</a></li>
        <li><a href="">Quibusdam odit repellendus non.</a></li>
        <li><a href="">Placeat officia aut dolores!</a></li>
        <li><a href="">Cum nostrum facere nemo.</a></li>
        <li><a href="">Impedit nisi nobis quaerat!</a></li>
        <li><a href="">Quis nemo tempore ullam.</a></li>
        <li><a href="">Voluptate aliquid sed quod.</a></li>
        <li><a href="">Nihil mollitia dolores quae!</a></li>
    </ul>
    <script>
        // 准备两个数组，分别存放list1和list2中所有超链接的内容
        var list1Links = document.getElementById("list1");
        var list2Links = document.getElementById("list2");
        var dom = function (dom) {
          // var arr = dom.getElementsByTagName("a");
          // var newarr = [];
          // for (var i = 0; i < arr.length; i++){
          //     var a = arr[i];
          //     newarr.push(a.firstChild.nodeValue);
          // }
          // return newarr;
            return Array.from(dom.getElementsByTagName("a")).map(function(a){
                return a.firstChild.nodeValue;
            })
        }
        console.log(dom(list1Links)); 
        console.log(dom(list2Links));
    </script>
</body>  

 <body>
    <div class="container">
        <ul>
            <li><a href="">Lorem ipsum dolor sit.</a></li>
            <li><a href="">Laboriosam esse voluptatibus accusamus!</a></li>
            <li><a href="">Minima cumque alias numquam!</a></li>
            <li><a href="">Beatae sit quod earum?</a></li>
            <li><a href="">Doloremque vitae totam pariatur.</a></li>
            <li><a href="">Autem ab iusto quae.</a></li>
            <li><a href="">Mollitia accusamus iure maxime.</a></li>
            <li><a href="">Sapiente vitae nostrum ex?</a></li>
            <li><a href="">Aut quos est amet!</a></li>
            <li><a href="">Laudantium dicta fuga debitis.</a></li>
        </ul>
    </div>
    <div class="container2">
        <span>asdfasfd</span>
        <strong>asdfasdfgasdfa</strong>
        <i>asadfasfas</i>
        <p>aasdfdasf</p>
        <header class="c3">
            <p id="test">dfgasdfasfaf</p>
        </header>
    </div>
    <script>
        //写一个函数，传入一个dom对象，返回该对象的第一个div容器
        var i = document.querySelector(".container2").getElementsByTagName("i")[0];
        var dom = function (dom) {
            dom = dom.parentElement;
            while (dom && dom.nodeName !== "DIV") {
                dom = dom.parentElement;
            }
            return dom;
        }
        console.log(dom(i));
    </script>
</body> 

```

# dom元素操作

## 初识元素事件

元素事件：某个元素发生一件事（被点击 click）

事件处理程序：是一个函数，发生了一件事，应该做什么事情

注册事件：将事件处理程序与某个事件关联
元素事件引用都是on开头的，如onclick

**this关键字在事件处理程序中指代当前发生的事件元素**

## 获取和设置元素属性

- 通用方式：getAttribute 得到属性、setAttribute  设置属性
  这种方式必须手动书写属性才能得到，得到原始值，不产生功能 ，常用于自定义属性
### 可识别属性

正常的HTML属性

- dom对象.属性名：推荐

细节：

1. 正常的属性即使没有赋值，也有默认值
2. 布尔属性在dom对象中，得到的是boolean
3. 某些表单元素可以获取到某些不存在的属性，如多行文本框textarea元素可以获取其没有的value属性
4. 某些属性与标识符冲突，此时，需要更换属性名，如label元素里的for，以及class属性改为className

### 自定义属性
<div data - abc = "123"></div>
HTML5 建议自定义属性使用```data-```作为前缀
data-abc = "123";

如果遵从HTML5 自定义属性规范，可以使用```dom对象.dataset.属性名```控制属性
div.dataset.abc === "123",省去了data-

### 删除自定义属性
- removeAttribute("属性名");
- delete dom.dataset.属性名

## 获取和设置元素内容

- innerHTML：获取和设置元素的内部HTML文本
- innerText：获取和设置元素内部的纯文本，仅得到元素内部显示出来的文本
- textContent：也是获取和设置元素内部的纯文本，textContent得到的是内部源代码中的文本，换行空格也当做文本被获取

## 元素结构重构

- 父元素.appendChild(元素)：在某个元素末尾加入一个子元素,元素不用引号引住
- 父元素.append(元素)：在某个元素末尾加入多个子元素
- 父元素.insertBefore(待插入的元素, 哪个元素之前)：在某个元素之前加入一个子元素
- 父元素.replaceChild(替换的元素, 被替换的元素)：元素替换

细节：

更改元素结构效率较低，很大几率会让页面重新渲染，尽量少用。

## 创建和删除元素

### 创建元素

- document.createElement("元素名")：创建一个元素对象
- document.createTextNode("文本")
- document.createDocumentFragment(): 创建文档片段

- dom对象.cloneNode(true/false是否深度克隆)：复制一个新的dom对象并返回

> childNodes也是实时集合

### 删除元素

- removeChild()：父元素调用，传入子元素，删除掉传入的子元素，但子元素还在内存中，还可以引用出来，只是在页面结构上不显示了
- remove：把自己删除，元素.remove();




## dom元素样式

## 控制dom元素的类样式

- .className： 获取或设置元素的类名
- .classList： dom4的新属性，是一个用于控制元素类名的**对象** 
  - add("")：用于添加一个类名
  - remove("")：用于移除一个类名
  - contains("")：用于判断一个类名是否存在
  - toggle("")：用于添加/移除一个类名
- 例：classList.remove("active") 


## 获取样式

**CSS的短横线命名，需要转换为小驼峰命名**
如：background-color --> backgroundColor
- dom.style.样式：得到**行内样式**对象
- window.getComputedStyle(dom元素)：得到某个元素最终计算的样式
  可以有第二个参数，用于得到某个元素的某个伪元素样式
- 例：style = getComputedStyle(div) 得到div里的样式
## 设置样式

只有一种方式：dom.style.样式名 = 值    能设置的只有style
**dom.style[样式名] = 值**    是一样的

设置的是行内样式。




# dom事件

## 术语

- 事件：发生一件事
- 事件类型：发生什么事情；点击、鼠标按下、鼠标抬起、鼠标移入、鼠标移出、键盘按下、键盘抬起...

- 事件处理程序：一个函数，当某件事情发生时运行。
- 事件注册：将一个事件处理程序，挂载到某个事件上。

## 事件流

事件流：事件发生的顺序-->当某个事件发生的时候，哪些元素会监听到该事件发生，这些元素发生该事件的顺序。

同心圆规则：**当一个元素发生了某个事件时，那该元素的所有祖先元素都发生了该事件**，点击同心圆中最小的圆，其外的大圆跟着都被点击

事件冒泡：先触发最里层的元素，然后再依次触发外层元素
事件捕获：先触发外层的元素，然后再依次触发里面元素
![事件触发](事件流.jpg)

目前，标准规定，默认情况下，事件是冒泡的方式触发。

事件源、事件目标：事件目标阶段的元素




# 事件注册

也叫做事件绑定

## dom0

将事件名称前面加上on，作为dom的属性名，给该属性赋值为一个函数，即为事件注册。

移除：重新给事件属性赋值，通常赋值为null和undefined

## dom2

dom对象.addEventListener(事件名，事件函数)：注册事件
例：
  bth.addEventListener("click",function(){
    console.log("asd");
    
})
bth.addEventListener("click",function(){
    console.log("123");
    
})
可以有第三个参数，表示事件的配置：
function hand(){
    console.log("asd")
}
dom对象.addEventListener(事件名，事件函数，{ })
bth.addEventListener("click",hand,{
    once:true,
    capture:true //表示点击事件只运行一次
}) 

与dom0的区别

1. dom2可以为某个元素的同一个事件，添加多个处理程序，按照注册的先后顺序运行
2. dom2允许开发者控制事件处理的阶段，使用第三个参数，表示是否在捕获阶段触发
   1. 如果元素是目标元素（事件源），第三个参数无效

事件的移除：dom对象.removeEventListener(事件名, 处理函数);

**dom2中如果要移除事件，不能使用匿名函数**

**细节**：
1. dom2在IE8及以下不兼容，需要使用attachEvent，detachEvent添加和移除事件
2. 添加和移除事件时，可以将第三个参数写为一个对象，进行相关配置

## 事件对象

事件对象封装了事件的相关信息

### 获取事件对象

- 通过事件处理函数的参数获取
 div.onclick = function(e){
            console.log(e)
        } -->
- 旧版本的IE浏览器通过window.event获取
```js
 div.onclick = function(e){
            // console.log(e)
            console.log(window.event)
  } 
```
### 事件对象的通用成员

- target & srcElement

事件目标（事件源）
 div.onclick = function(e){
            // console.log(e)
            console.log(window.event)
            console.log(e.target)
        } 

事件委托：通过给祖先元素注册事件，在程序处理程序中判断事件源进行不同的处理。
var div = document.querySelector("div");
        div.onclick = function(e){
            // console.log(e)
            if(e.target.tagName === "BUTTON"){
                e.target.parentElement.remove();//删除父元素
            }
            console.log(e.target)
        } 

通常，事件委托用于动态生成元素的区域。

- **currentTarget**
e.currentTarget
当前目标：获取绑定事件的元素，等效于this

- type
e.type
字符串，得到事件的类型

- **preventDefault & returnValue**
阻止浏览器默认行为
preventDefault方法: e.preventDefault();
e.returnValue = false;

dom0的方式：在事件处理程序中返回false
 div.onclick = function(e){
           return false; 
        } 

针对a元素，可以设置为功能性链接解决跳转问题

- **stopPropagation方法**
e.stopPropagation()
用于阻止事件冒泡

- eventPhase
得到事件所处的阶段

console.log(e.eventPhase)
输出1表示事件捕获
输出2表示事件目标
输出3表示事件冒泡



# 鼠标事件

## 事件类型

- click：用户单击主鼠标按钮（一般是左键）或者按下在聚焦时按下回车键时触发
- dblclick：用户双击主鼠标按键触发（频率取决于系统配置）
- mousedown：用户按下鼠标任意按键时触发
- mouseup：用户抬起鼠标任意按键时触发
- mousemove：鼠标在元素上移动时触发
- mouseover：鼠标进入元素时触发
- mouseout：鼠标离开元素时触发
- mouseenter：鼠标进入元素时触发，该事件不会冒泡
- mouseleave：鼠标离开元素时触发，该事件不会冒泡

区别：
- over和out，不考虑子元素，从父元素移动到子元素，对于父元素而言，仍然算作离开
- enter和leave，考虑子元素，子元素仍然是父元素的一部分
- mouseenter和mouseleave不会冒泡

## 事件对象

所有的鼠标事件，事件处理程序中的事件对象，都为 MouseEvent

- altKey：触发事件时，是否按下了键盘的alt键
- ctrlKey：触发事件时，是否按下了键盘的ctrl键
- shiftKey：触发事件时，是否按下了键盘的shift键
- button：触发事件时，鼠标按键类型
  - 0：左键
  - 1：中键
  - 2：右键

位置：原点在左上角
![](./尺寸1.png)
![](./尺寸2.png)
![](./尺寸3.png)
![](./尺寸4.jpg)
- page：pageX、pageY，当前鼠标距离页面的横纵坐标，页面最左边和最上边
- client可视窗口的宽高: clientX、clientY，鼠标相对于视口的坐标
- offset：offsetX、offsetY，鼠标相对于事件源的**内边距**的坐标（填充区）offsetLeft,offsetRight
- screen: screenX、screenY，鼠标相对于屏幕
- x、y，等同于clientX、clientY
- movement：movementX、movementY，只在鼠标移动事件中有效，相对于上一次鼠标位置，偏移的距离




# 键盘事件

## 事件类型

- keydown：按下键盘上任意键触发，如果按住不放，会重复触发此事件
- keypress：按下键盘上一个**字符键**时触发
- keyup：抬起键盘上任意键触发

keydown、keypress 如果阻止了事件默认行为，文本不会显示。

inp.onkeydown = function(){
return:false;
} 

```js
window.onkeydown = (e) => {
    if (e.key === "Enter") {
        if (this.timer) {
            this.stop();
        }
        else {
            this.start();
        }
    }
    else if (e.key === " ") {
        this.bird.jump();
    }
}
```

## 事件对象

KeyboardEvent

- code：得到按键字符串，适配键盘布局。
- key：得到按键字符串，不适配键盘布局。能得到打印字符。
- keyCode、which：得到键盘编码
- e.keyCode
- e.which 
inp.onkeydown = function(e){
console.log(e.code,e.key);
} 



# 其他事件

## 表单事件

- focus：元素聚焦的时候触发（能与用户发生交互的元素，都可以聚焦），该事件不会冒泡
  e.bubbles 查看是否冒泡
- blur：元素失去焦点时触发，该事件不会冒泡。
- submit：提交表单事件，仅在form元素有效。
- change：文本改变事件，写完取消聚焦才触发
- input: 文本改变事件，即时触发，边写边触发

## 其他事件

window全局对象

- load、DOMContentLoaded、readystatechange

window的load：页面中所有资源全部加载完毕的事件
图片的load：图片资源加载完毕的事件，图片是异步加载
img.onload

> 浏览器渲染页面的过程：
> 1. 得到页面源代码
> 2. 创建document节点
> 3. 从上到下，将元素依次添加到dom树中，每添加一个元素，进行预渲染
> 4. 按照结构，依次渲染子节点


document的事件：DOMContentLoaded: dom树构建完成后发生，是一个比较新的事件，只能用dom2注册

readystate: loading、interactive、complete

interactive：触发DOMContentLoadedd事件

complete：触发window的load事件

**js代码应该尽量写到页面底部**

- css应该写到页面顶部：避免出现闪烁（如果放到页面底部，会导致元素先没有样式，使用丑陋的默认样式，然后当读到css文件后，重新改变样式）
- JS应该写到页面底部：避免阻塞后续的渲染，也避免运行JS时，得不到页面中的元素。


- unload、beforeunload

beforeunload: window的事件，关闭窗口时运行，可以阻止关闭窗口
unload：window的事件，关闭窗口时运行

- scroll

窗口发生滚动时运行的事件

通过scrollTop和scrollLeft，可以获取和设置滚动距离。
回到顶部的按钮用此事件设置

- resize

窗口尺寸发生改变时运行的事件，监听的是视口尺寸


- contextmenu

右键菜单事件

- paste

粘贴事件

- copy

复制事件

- cut





# 元素位置


- offsetParent

获取某个元素第一个定位的祖先元素，如果没有，则得到body

body的offsetParent为null

- offsetLeft、offsetTop

相对于该元素的offsetParent的坐标

如果offsetParent是body，则将其当作是整个网页

- getBoundingClientRect方法

该方法得到一个对象，该对象记录了该元素相对于视口的距离

# 事件模拟

- click
- sumbit
- dispatchEvent

# 其他补充

- window.scrollX、window.pageXOffset、window.scrollY、window.pageYOffset

window.scrollX、window.pageXOffset: 相当于根元素的scrollLeft

window.scrollY、window.pageYOffset: 相当于根元素的scrollTop

- scrollTo(x,y)、scrollBy(x,y)

scrollTo(x,y): 设置滚动条位置
scrollBy(x,y)：在原来的基础上加上

- resizeTo(width,height)、resizeBy(width,height)
resizeTo(width,height)：设置窗口的大小
resizeBy(width,height)：在原来的基础上加上



BOM：Browser Object Model

# 计时器

计时器是异步的，当时机成熟之后才会执行

计时器会返回一个数字，该数字表示计时器的编号

- setTimeout方法：指定时间到达后运行某个函数
  - clearTimeout方法：清除计时器
```js
  timer = setTimeout(function(){

  },1000) //这里是1000毫秒，也就是1秒，隔一秒之后运行
```
  clearTimeout(timer);清除定时器

- setInterval方法：指定间隔时间到达后运行某个函数
  
```js setInterval(functiom(){

  },1000) //这里是每隔1秒后运行一次
```

  - clearInterval方法：清除计时器




# window对象

## 自身方法

- open

打开一个新窗口

open("页面路径", "打开目标", "配置")

- alert
- confirm
- prompt


## 对象属性

- document
  document.write
  在当前文档流中写入内容，如果当前文档流不存在，则新开一个文档流

- location：地址栏对象

href属性：得到目前地址
其他属性参考location.jpg
![](./location.jpg)

reload方法：刷新当前页面
 window.location.reload();刷新当前页面
- navigator
  ![](navigator.jpg)
  
- history：历史记录

go()方法,即可前进也可后退
back方法
forword方法

- console

log方法：打印对象的valueOf的返回值
dir方法：打印对象结构
tiem("")方法和timeEnd("")方法：用于计时


## 插件的特点
1. 通用性
2. 易用性
3. 尽量不要与其他功能冲突



# 原型和原型链

- 所有对象都是通过```new 函数```创建
- 所有的函数也是对象
  - 函数中可以有属性
- 所有对象都是引用类型

![](./图例/函数是通过new%20Function创建的.jpg)
![](./图例/原型中的constructor指向函数本身.jpg)
![](./图例/普通对象是通过new%20函数创建的.jpg)
![](./图例/每个函数都有原型对象.jpg)
![](./图例/链条的全貌.jpg)
![](./图例/隐式原型的指向.jpg)
## 原型 prototype

所有函数都有一个属性：prototype，称之为函数原型

默认情况下，prototype是一个普通的Object对象

**默认情况下，prototype中有一个属性，constructor，它也是一个对象，它指向构造函数本身。**


## 隐式原型  写法：__proto__

所有的对象都有一个属性：```__proto__```，称之为隐式原型

**默认情况下，隐式原型指向创建该对象的函数的原型。**

当访问一个对象的成员时：

1. 看该对象自身是否拥有该成员，如果有直接使用
2. 在原型链中依次查找是否拥有该成员，如果有直接使用

猴子补丁：在函数原型中加入成员，以增强起对象的功能，猴子补丁会导致原型污染，使用需谨慎。

## 原型链

特殊点：

1. Function的__proto__指向自身的prototype
   
2. Object的prototype的__proto__指向null
   
3. 原型链的顶端是Object.prototype


# 原型链的应用

## 基础方法
W3C不推荐直接使用系统成员__proto__

1. Object.getPrototypeOf(对象)  
   获取对象的隐式原型

2. Object.prototype.isPrototypeOf(对象)  
   判断当前对象(this)是否在指定对象的原型链上

3. 对象 instanceof 函数  
   判断函数的原型是否在对象的原型链上

4. Object.create(对象)
    创建一个新对象，其隐式原型指向指定的对象
    Object.create(null)创建出来的对象没有prototype，因此不是全部对象都是继承自Object.prototype

5. Object.prototype.hasOwnProperty(属性名)*
    判断一个对象**自身**是否拥有某个属性

## 应用

**类数组转换为真数组**

```js
Array.prototype.slice.call(类数组);
```

**实现继承**

默认情况下，**所有构造函数的父类都是Object**

圣杯模式


# 属性描述符

属性描述符的配置参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

属性描述符：它表达了一个属性的相关信息（元数据），它本质上是一个对象。

1. 数据属性
2. 存取器属性
   1. 当给它赋值，会自动运行一个函数
   2. 当获取它的值时，会自动运行一个函数

**这玩意儿很有用，可以研究研究**
其他的属性描述符


**Object.getOwnPropertyDescriptor**

获取某个对象的某个属性的属性描述符对象（该属性必须直接属于该对象）


# 执行上下文

函数执行上下文：一个函数运行之前，创建的一块内存空间，空间中包含有该函数执行所需要的数据，为该函数执行提供支持。

执行上下文栈：call stack，所有执行上下文组成的内存空间。

栈：一种数据结构，先进后出，后进先出。

全局执行上下文：所有JS代码执行之前，都必须有该环境。

JS引擎始终执行的是栈顶的上下文。

## 执行上下文中的内容

1. this指向

1). 直接调用函数，this指向全局对象（如window）
2). 在函数外，this指向全局对象
3). 通过对象调用或new一个函数，this指向调用的对象或新对象

2. VO 变量对象

Variable Object：VO 中记录了该环境中所有声明的参数、变量和函数

Global Object: GO，全局执行上下文中的VO

Active Object：AO，当前正在执行的上下文中的VO

1). 确定所有形参值以及特殊变量arguments
2). 确定函数中通过var声明的变量，将它们的值设置为undefined，如果VO中已有该名称，则直接忽略。
3). 确定函数中通过字面量声明的函数（如function b() {} 这种声明函数的方式），将它们的值设置为指向函数对象，如果VO中已存在该名称，则覆盖。
- 变量提升，先提升var声明，再提升函数声明，接着才是按顺序执行代码，相同的值如var b = 123，先被声明为b = undefined，再在被声明为函数 function b () {} ，则最后赋值b = 123，因为变量提升先被函数声明，再被赋值
- 例:var b = 123; function a(){ console.log(b); var b = 10; console.log(b); return ; function b (){}; }; a(); console.log(b);
  则：b-->undefined-->funtion(){}-->10-->123;  输出：function(){}  10  123
  变量提升后类似于：var b; function a(){ var b; function b (){}; console.log(b); b = 10; console.log(b); return ;  }; a(); b = 123; console.log(b);

当一个上下文中的代码执行的时候，如果上下文中不存在某个属性，则会从之前的上下文寻找。


# 作用域链

1. VO中包含一个额外的属性，该属性指向创建该VO的函数本身（就是包裹自身函数的父函数）
2. 每个函数在创建时，会有一个隐藏属性```[[scope]]```，它指向创建该函数时的AO,即当前的执行上下文
3. 当访问一个变量时，会先查找自身VO中是否存在，如果不存在，则依次查找```[[scope]]```属性。

某些浏览器会优化作用域链，函数的```[[scope]]```中仅保留需要用到的数据。



# 事件循环

异步：某些函数不会立即执行，需要等到某个时机成熟后才会执行，该函数叫做异步函数。

浏览器的线程：

1. JS执行引擎：负责执行JS代码
2. 渲染线程：负责渲染页面
3. 计时器线程：负责计时
4. 事件监听线程：负责监听事件
5. http网络线程：负责网络通信

事件队列：一块内存空间，用于存放执行时机到达的异步函数。当JS引擎空闲（执行栈没有可执行的上下文），它会从事件队列中拿出第一个函数执行。

事件循环：event loop，是指函数在执行栈、宿主线程、事件队列中的循环移动。


# 高阶函数
在函数内部返回一个新的函数，在很多方面很有用
如：函数防抖、函数节流等


## 科里化函数
在函数式编程中，科里化函数的最重要的作用就是把多参函数转变成单参函数


固定某个函数的一些参数，得到该函数剩余参数的一个新的函数，如果没有剩余参数，则调用