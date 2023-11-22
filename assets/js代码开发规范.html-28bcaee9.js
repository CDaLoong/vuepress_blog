import{_ as n,o as s,c as a,a as e}from"./app-168a97af.js";const t={},p=e(`<h1 id="js代码规范" tabindex="-1"><a class="header-anchor" href="#js代码规范" aria-hidden="true">#</a> js代码规范</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1 前言</h2><p>JavaScript代码开发规范的存在有以下几个重要原因：</p><ul><li><p>提高代码质量：JavaScript是一门灵活的语言，开发者可以用多种方式编写代码。然而，缺乏规范和统一的编码风格可能导致代码难以理解、维护困难以及潜在的错误。通过制定和遵循开发规范，可以提高代码的可读性、可维护性和一致性，减少错误和Bug的出现，从而提高代码质量。</p></li><li><p>提升团队协作效率：在多人协作的项目中，每个人都有自己的编码风格和偏好，这样会导致代码风格不一致，增加了代码的理解和合并的难度。通过制定统一的开发规范，可以降低团队成员之间的沟通成本，减少合并冲突，并且让团队成员能够更容易地理解和维护彼此的代码，提高团队协作效率。</p></li><li><p>降低学习成本：对于新加入团队的开发者来说，熟悉项目的代码可能是一项挑战。然而，如果项目遵循统一的开发规范，新成员可以更快地理解项目的结构、代码的组织方式以及命名规范，减少学习成本并且更快地融入团队。</p></li><li><p>改善代码可维护性：JavaScript项目的生命周期往往比较长，会经历多个版本的迭代和维护。通过制定开发规范，可以确保代码的一致性和可读性，使得项目在不同时间点和不同团队成员之间能够更容易地维护、扩展和调试。</p></li><li><p>提高代码的可靠性和安全性：规范化的开发方式可以帮助开发者避免一些常见的编码错误和安全隐患，例如变量命名不当、类型错误、跨站脚本攻击等。遵循规范可以加强代码的质量控制，减少潜在的漏洞和错误，提高代码的可靠性和安全性。</p></li></ul><p>本规范文档来源于网络。</p><h2 id="_2-代码风格" tabindex="-1"><a class="header-anchor" href="#_2-代码风格" aria-hidden="true">#</a> 2 代码风格</h2><h3 id="_2-1-文件" tabindex="-1"><a class="header-anchor" href="#_2-1-文件" aria-hidden="true">#</a> 2.1 文件</h3><h3 id="建议-javascript-文件使用无-bom-的-utf-8-编码。" tabindex="-1"><a class="header-anchor" href="#建议-javascript-文件使用无-bom-的-utf-8-编码。" aria-hidden="true">#</a> [建议] JavaScript 文件使用无 <code>BOM</code> 的 <code>UTF-8</code> 编码。</h3><p>解释：</p><p>UTF-8 编码具有更广泛的适应性。BOM 在使用程序或工具处理文件时可能造成不必要的干扰。</p><h3 id="建议-在文件结尾处-保留一个空行。" tabindex="-1"><a class="header-anchor" href="#建议-在文件结尾处-保留一个空行。" aria-hidden="true">#</a> [建议] 在文件结尾处，保留一个空行。</h3><h3 id="_2-2-结构" tabindex="-1"><a class="header-anchor" href="#_2-2-结构" aria-hidden="true">#</a> 2.2 结构</h3><h3 id="_2-2-1-缩进" tabindex="-1"><a class="header-anchor" href="#_2-2-1-缩进" aria-hidden="true">#</a> 2.2.1 缩进</h3><h3 id="强制-使用-2-个空格做为一个缩进层级-不允许使用-4-个空格。" tabindex="-1"><a class="header-anchor" href="#强制-使用-2-个空格做为一个缩进层级-不允许使用-4-个空格。" aria-hidden="true">#</a> [强制] 使用 <code>2</code> 个空格做为一个缩进层级，不允许使用 <code>4</code> 个空格。</h3><h3 id="强制-switch-下的-case-和-default-必须增加一个缩进层级。" tabindex="-1"><a class="header-anchor" href="#强制-switch-下的-case-和-default-必须增加一个缩进层级。" aria-hidden="true">#</a> [强制] <code>switch</code> 下的 <code>case</code> 和 <code>default</code> 必须增加一个缩进层级。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>variable<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">case</span> <span class="token string">&#39;1&#39;</span><span class="token operator">:</span>
        <span class="token comment">// do...</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">case</span> <span class="token string">&#39;2&#39;</span><span class="token operator">:</span>
        <span class="token comment">// do...</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>

    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token comment">// do...</span>

<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span>variable<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token keyword">case</span> <span class="token string">&#39;1&#39;</span><span class="token operator">:</span>
    <span class="token comment">// do...</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>

<span class="token keyword">case</span> <span class="token string">&#39;2&#39;</span><span class="token operator">:</span>
    <span class="token comment">// do...</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>

<span class="token keyword">default</span><span class="token operator">:</span>
    <span class="token comment">// do...</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-2-空格" tabindex="-1"><a class="header-anchor" href="#_2-2-2-空格" aria-hidden="true">#</a> 2.2.2 空格</h3><h3 id="强制-二元运算符两侧必须有一个空格-一元运算符与操作对象之间不允许有空格。" tabindex="-1"><a class="header-anchor" href="#强制-二元运算符两侧必须有一个空格-一元运算符与操作对象之间不允许有空格。" aria-hidden="true">#</a> [强制] 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token operator">!</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
a<span class="token operator">++</span><span class="token punctuation">;</span>
a <span class="token operator">=</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-用作代码块起始的左花括号-前必须有一个空格。" tabindex="-1"><a class="header-anchor" href="#强制-用作代码块起始的左花括号-前必须有一个空格。" aria-hidden="true">#</a> [强制] 用作代码块起始的左花括号 <code>{</code> 前必须有一个空格。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">funcName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">funcName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-if-else-for-while-function-switch-do-try-catch-finally-关键字后-必须有一个空格。" tabindex="-1"><a class="header-anchor" href="#强制-if-else-for-while-function-switch-do-try-catch-finally-关键字后-必须有一个空格。" aria-hidden="true">#</a> [强制] <code>if / else / for / while / function / switch / do / try / catch / finally</code> 关键字后，必须有一个空格。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">while</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-在对象创建时-属性中的-之后必须有空格-之前不允许有空格。" tabindex="-1"><a class="header-anchor" href="#强制-在对象创建时-属性中的-之后必须有空格-之前不允许有空格。" aria-hidden="true">#</a> [强制] 在对象创建时，属性中的 <code>:</code> 之后必须有空格，<code>:</code> 之前不允许有空格。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span> <span class="token operator">:</span><span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-函数声明、具名函数表达式、函数调用中-函数名和-之间不允许有空格。" tabindex="-1"><a class="header-anchor" href="#强制-函数声明、具名函数表达式、函数调用中-函数名和-之间不允许有空格。" aria-hidden="true">#</a> [强制] 函数声明、具名函数表达式、函数调用中，函数名和 <code>(</code> 之间不允许有空格。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">funcName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">funcName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">funcName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">funcName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">funcName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">funcName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">funcName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">funcName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-和-前不允许有空格。如果不位于行尾-和-后必须跟一个空格。" tabindex="-1"><a class="header-anchor" href="#强制-和-前不允许有空格。如果不位于行尾-和-后必须跟一个空格。" aria-hidden="true">#</a> [强制] <code>,</code> 和 <code>;</code> 前不允许有空格。如果不位于行尾，<code>,</code> 和 <code>;</code> 后必须跟一个空格。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token function">callFunc</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token function">callFunc</span><span class="token punctuation">(</span>a <span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-在函数调用、函数声明、括号表达式、属性访问、if-for-while-switch-catch-等语句中-和-内紧贴括号部分不允许有空格。" tabindex="-1"><a class="header-anchor" href="#强制-在函数调用、函数声明、括号表达式、属性访问、if-for-while-switch-catch-等语句中-和-内紧贴括号部分不允许有空格。" aria-hidden="true">#</a> [强制] 在函数调用、函数声明、括号表达式、属性访问、<code>if / for / while / switch / catch</code> 等语句中，<code>()</code> 和 <code>[]</code> 内紧贴括号部分不允许有空格。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>

<span class="token function">callFunc</span><span class="token punctuation">(</span>param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> param3<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">save</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>indexes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

needIncream <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>variable <span class="token operator">+=</span> increament<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> list<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>len<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>

<span class="token function">callFunc</span><span class="token punctuation">(</span> param1<span class="token punctuation">,</span> param2<span class="token punctuation">,</span> param3 <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">save</span><span class="token punctuation">(</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span> <span class="token keyword">this</span><span class="token punctuation">.</span>indexes<span class="token punctuation">[</span> i <span class="token punctuation">]</span> <span class="token punctuation">]</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

needIncreament <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span> variable <span class="token operator">+=</span> increament <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span> num <span class="token operator">&gt;</span> list<span class="token punctuation">.</span>length <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span> len<span class="token operator">--</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-单行声明的数组与对象-如果包含元素-和-内紧贴括号部分不允许包含空格。" tabindex="-1"><a class="header-anchor" href="#强制-单行声明的数组与对象-如果包含元素-和-内紧贴括号部分不允许包含空格。" aria-hidden="true">#</a> [强制] 单行声明的数组与对象，如果包含元素，<code>{}</code> 和 <code>[]</code> 内紧贴括号部分不允许包含空格。</h3><p>解释：</p><p>声明包含元素的数组与对象，只有当内部元素的形式较为简单时，才允许写在一行。元素复杂的情况，还是应该换行书写。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;obj&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-行尾不得有多余的空格。" tabindex="-1"><a class="header-anchor" href="#强制-行尾不得有多余的空格。" aria-hidden="true">#</a> [强制] 行尾不得有多余的空格。</h3><h3 id="_2-2-3-换行" tabindex="-1"><a class="header-anchor" href="#_2-2-3-换行" aria-hidden="true">#</a> 2.2.3 换行</h3><h3 id="强制-每个独立语句结束后必须换行。" tabindex="-1"><a class="header-anchor" href="#强制-每个独立语句结束后必须换行。" aria-hidden="true">#</a> [强制] 每个独立语句结束后必须换行。</h3><h3 id="强制-每行不得超过-120-个字符。" tabindex="-1"><a class="header-anchor" href="#强制-每行不得超过-120-个字符。" aria-hidden="true">#</a> [强制] 每行不得超过 <code>120</code> 个字符。</h3><p>解释：</p><p>超长的不可分割的代码允许例外，比如复杂的正则表达式。长字符串不在例外之列。</p><h3 id="强制-运算符处换行时-运算符必须在新行的行首。" tabindex="-1"><a class="header-anchor" href="#强制-运算符处换行时-运算符必须在新行的行首。" aria-hidden="true">#</a> [强制] 运算符处换行时，运算符必须在新行的行首。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span><span class="token function">isInRole</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span><span class="token function">hasAuthority</span><span class="token punctuation">(</span><span class="token string">&#39;add-admin&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">||</span> user<span class="token punctuation">.</span><span class="token function">hasAuthority</span><span class="token punctuation">(</span><span class="token string">&#39;delete-admin&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Code</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> number1 <span class="token operator">+</span> number2 <span class="token operator">+</span> number3
    <span class="token operator">+</span> number4 <span class="token operator">+</span> number5<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    user<span class="token punctuation">.</span><span class="token function">isInRole</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
    user<span class="token punctuation">.</span><span class="token function">hasAuthority</span><span class="token punctuation">(</span><span class="token string">&#39;add-admin&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
    user<span class="token punctuation">.</span><span class="token function">hasAuthority</span><span class="token punctuation">(</span><span class="token string">&#39;delete-admin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Code</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> number1 <span class="token operator">+</span> number2 <span class="token operator">+</span> number3 <span class="token operator">+</span>
    number4 <span class="token operator">+</span> number5<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-在函数声明、函数表达式、函数调用、对象创建、数组创建、for-语句等场景中-不允许在-或-前换行。" tabindex="-1"><a class="header-anchor" href="#强制-在函数声明、函数表达式、函数调用、对象创建、数组创建、for-语句等场景中-不允许在-或-前换行。" aria-hidden="true">#</a> [强制] 在函数声明、函数表达式、函数调用、对象创建、数组创建、<code>for</code> 语句等场景中，不允许在 <code>,</code> 或 <code>;</code> 前换行。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">foo</span><span class="token punctuation">(</span>
    aVeryVeryLongArgument<span class="token punctuation">,</span>
    anotherVeryLongArgument<span class="token punctuation">,</span>
    callback
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">,</span> <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">3</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">foo</span><span class="token punctuation">(</span>
    aVeryVeryLongArgument
    <span class="token punctuation">,</span> anotherVeryLongArgument
    <span class="token punctuation">,</span> callback
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-不同行为或逻辑的语句集-使用空行隔开-更易阅读。" tabindex="-1"><a class="header-anchor" href="#建议-不同行为或逻辑的语句集-使用空行隔开-更易阅读。" aria-hidden="true">#</a> [建议] 不同行为或逻辑的语句集，使用空行隔开，更易阅读。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 仅为按逻辑换行的示例，不代表setStyle的最优实现</span>
<span class="token keyword">function</span> <span class="token function">setStyle</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> property<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    element<span class="token punctuation">.</span>style<span class="token punctuation">[</span>property<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-在语句的行长度超过-120-时-根据逻辑条件合理缩进。" tabindex="-1"><a class="header-anchor" href="#建议-在语句的行长度超过-120-时-根据逻辑条件合理缩进。" aria-hidden="true">#</a> [建议] 在语句的行长度超过 <code>120</code> 时，根据逻辑条件合理缩进。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 较复杂的逻辑条件组合，将每个条件独立一行，逻辑运算符放置在行首进行分隔，或将部分逻辑按逻辑组合进行分隔。</span>
<span class="token comment">// 建议最终将右括号 ) 与左大括号 { 放在独立一行，保证与 \`if\` 内语句块能容易视觉辨识。</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span><span class="token function">isInRole</span><span class="token punctuation">(</span><span class="token string">&#39;admin&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span><span class="token function">hasAuthority</span><span class="token punctuation">(</span><span class="token string">&#39;add-admin&#39;</span><span class="token punctuation">)</span>
    <span class="token operator">||</span> user<span class="token punctuation">.</span><span class="token function">hasAuthority</span><span class="token punctuation">(</span><span class="token string">&#39;delete-admin&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Code</span>
<span class="token punctuation">}</span>

<span class="token comment">// 按一定长度截断字符串，并使用 + 运算符进行连接。</span>
<span class="token comment">// 分隔字符串尽量按语义进行，如不要在一个完整的名词中间断开。</span>
<span class="token comment">// 特别的，对于 HTML 片段的拼接，通过缩进，保持和 HTML 相同的结构。</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 此处用一个空字符串，以便整个 HTML 片段都在新行严格对齐</span>
    <span class="token operator">+</span> <span class="token string">&#39;&lt;article&gt;&#39;</span>
    <span class="token operator">+</span>     <span class="token string">&#39;&lt;h1&gt;Title here&lt;/h1&gt;&#39;</span>
    <span class="token operator">+</span>     <span class="token string">&#39;&lt;p&gt;This is a paragraph&lt;/p&gt;&#39;</span>
    <span class="token operator">+</span>     <span class="token string">&#39;&lt;footer&gt;Complete&lt;/footer&gt;&#39;</span>
    <span class="token operator">+</span> <span class="token string">&#39;&lt;/article&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 也可使用数组来进行拼接，相对 \`+\` 更容易调整缩进。</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;&lt;article&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;&lt;h1&gt;Title here&lt;/h1&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;&lt;p&gt;This is a paragraph&lt;/p&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;&lt;footer&gt;Complete&lt;/footer&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;&lt;/article&gt;&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
html <span class="token operator">=</span> html<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当参数过多时，将每个参数独立写在一行上，并将结束的右括号 ) 独立一行。</span>
<span class="token comment">// 所有参数必须增加一个缩进。</span>
<span class="token function">foo</span><span class="token punctuation">(</span>
    aVeryVeryLongArgument<span class="token punctuation">,</span>
    anotherVeryLongArgument<span class="token punctuation">,</span>
    callback
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 也可以按逻辑对参数进行组合。</span>
<span class="token comment">// 最经典的是 baidu.format 函数，调用时将参数分为“模板”和“数据”两块</span>
baidu<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>
    dateFormatTemplate<span class="token punctuation">,</span>
    year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> date<span class="token punctuation">,</span> hour<span class="token punctuation">,</span> minute<span class="token punctuation">,</span> second
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 当函数调用时，如果有一个或以上参数跨越多行，应当每一个参数独立一行。</span>
<span class="token comment">// 这通常出现在匿名函数或者对象初始化等作为参数时，如 \`setTimeout\` 函数等。</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">200</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

order<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>
    <span class="token string">&#39;id=&#39;</span> <span class="token operator">+</span> me<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        me<span class="token punctuation">.</span><span class="token function">attchToModel</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token number">300</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 链式调用较长时采用缩进进行调整。</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#items&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&#39;.selected&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 三元运算符由3部分组成，因此其换行应当根据每个部分的长度不同，形成不同的情况。</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> thisIsAVeryVeryLongCondition
    <span class="token operator">?</span> resultA <span class="token operator">:</span> resultB<span class="token punctuation">;</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> condition
    <span class="token operator">?</span> thisIsAVeryVeryLongResult
    <span class="token operator">:</span> resultB<span class="token punctuation">;</span>

<span class="token comment">// 数组和对象初始化的混用，严格按照每个对象的 \`{\` 和结束 \`}\` 在独立一行的风格书写。</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-对于-if-else-、try-catch-finally-等语句-推荐使用在-号后添加一个换行-的风格-使代码层次结构更清晰-阅读性更好。" tabindex="-1"><a class="header-anchor" href="#建议-对于-if-else-、try-catch-finally-等语句-推荐使用在-号后添加一个换行-的风格-使代码层次结构更清晰-阅读性更好。" aria-hidden="true">#</a> [建议] 对于 <code>if...else...</code>、<code>try...catch...finally</code> 等语句，推荐使用在 <code>}</code> 号后添加一个换行 的风格，使代码层次结构更清晰，阅读性更好。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// some statements;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// some statements;</span>
<span class="token punctuation">}</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// some statements;</span>
<span class="token punctuation">}</span>
<span class="token keyword">catch</span> <span class="token punctuation">(</span>ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// some statements;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-4-语句" tabindex="-1"><a class="header-anchor" href="#_2-2-4-语句" aria-hidden="true">#</a> 2.2.4 语句</h3><h3 id="强制-不得省略语句结束的分号。" tabindex="-1"><a class="header-anchor" href="#强制-不得省略语句结束的分号。" aria-hidden="true">#</a> [强制] 不得省略语句结束的分号。</h3><h3 id="强制-在-if-else-for-do-while-语句中-即使只有一行-也不得省略块-。" tabindex="-1"><a class="header-anchor" href="#强制-在-if-else-for-do-while-语句中-即使只有一行-也不得省略块-。" aria-hidden="true">#</a> [强制] 在 <code>if / else / for / do / while</code> 语句中，即使只有一行，也不得省略块 <code>{...}</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token function">callFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span>
    <span class="token function">callFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-函数定义结束不允许添加分号。" tabindex="-1"><a class="header-anchor" href="#强制-函数定义结束不允许添加分号。" aria-hidden="true">#</a> [强制] 函数定义结束不允许添加分号。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">funcName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">funcName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 如果是函数表达式，分号是不允许省略的。</span>
<span class="token keyword">const</span> <span class="token function-variable function">funcName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-iife-必须在函数表达式外添加-非-iife-不得在函数表达式外添加-。" tabindex="-1"><a class="header-anchor" href="#强制-iife-必须在函数表达式外添加-非-iife-不得在函数表达式外添加-。" aria-hidden="true">#</a> [强制] <code>IIFE</code> 必须在函数表达式外添加 <code>(</code>，非 <code>IIFE</code> 不得在函数表达式外添加 <code>(</code>。</h3><p>解释：</p><p>IIFE = Immediately-Invoked Function Expression.</p><p>额外的 ( 能够让代码在阅读的一开始就能判断函数是否立即被调用，进而明白接下来代码的用途。而不是一直拖到底部才恍然大悟。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> task <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// Code</span>
   <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> <span class="token function-variable function">task</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Code</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> func <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-命名" tabindex="-1"><a class="header-anchor" href="#_2-3-命名" aria-hidden="true">#</a> 2.3 命名</h3><h3 id="强制-变量-使用-小驼峰命名法。" tabindex="-1"><a class="header-anchor" href="#强制-变量-使用-小驼峰命名法。" aria-hidden="true">#</a> [强制] <code>变量</code> 使用 <code>小驼峰命名法</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> loadingModules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-常量-使用-全部字母大写-单词间下划线分隔-的命名方式。" tabindex="-1"><a class="header-anchor" href="#强制-常量-使用-全部字母大写-单词间下划线分隔-的命名方式。" aria-hidden="true">#</a> [强制] <code>常量</code> 使用 <code>全部字母大写，单词间下划线分隔</code> 的命名方式。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">HTML_ENTITY</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-函数-使用-小驼峰命名法。" tabindex="-1"><a class="header-anchor" href="#强制-函数-使用-小驼峰命名法。" aria-hidden="true">#</a> [强制] <code>函数</code> 使用 <code>小驼峰命名法</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">stringFormat</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-函数的-参数-使用-小驼峰命名法。" tabindex="-1"><a class="header-anchor" href="#强制-函数的-参数-使用-小驼峰命名法。" aria-hidden="true">#</a> [强制] 函数的 <code>参数</code> 使用 <code>小驼峰命名法</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hear</span><span class="token punctuation">(</span><span class="token parameter">theBells</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-类-使用-大驼峰命名法。" tabindex="-1"><a class="header-anchor" href="#强制-类-使用-大驼峰命名法。" aria-hidden="true">#</a> [强制] <code>类</code> 使用 <code>大驼峰命名法</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">TextNode</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-类的-方法-属性-使用-小驼峰命名法。" tabindex="-1"><a class="header-anchor" href="#强制-类的-方法-属性-使用-小驼峰命名法。" aria-hidden="true">#</a> [强制] 类的 <code>方法</code> / <code>属性</code> 使用 <code>小驼峰命名法</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">TextNode</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> engine</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">TextNode</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">clone</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-枚举变量-使用-大驼峰命名法-枚举的属性-使用-全部字母大写-单词间下划线分隔-的命名方式。" tabindex="-1"><a class="header-anchor" href="#强制-枚举变量-使用-大驼峰命名法-枚举的属性-使用-全部字母大写-单词间下划线分隔-的命名方式。" aria-hidden="true">#</a> [强制] <code>枚举变量</code> 使用 <code>大驼峰命名法</code>，<code>枚举的属性</code> 使用 <code>全部字母大写，单词间下划线分隔</code> 的命名方式。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> TargetState <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token constant">READING</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token constant">READED</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token constant">APPLIED</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token constant">READY</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-命名空间-使用-小驼峰命名法。" tabindex="-1"><a class="header-anchor" href="#强制-命名空间-使用-小驼峰命名法。" aria-hidden="true">#</a> [强制] <code>命名空间</code> 使用 <code>小驼峰命名法</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>equipments<span class="token punctuation">.</span>heavyWeapons <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-由多个单词组成的缩写词-在命名中-根据当前命名法和出现的位置-所有字母的大小写与首字母的大小写保持一致。" tabindex="-1"><a class="header-anchor" href="#强制-由多个单词组成的缩写词-在命名中-根据当前命名法和出现的位置-所有字母的大小写与首字母的大小写保持一致。" aria-hidden="true">#</a> [强制] 由多个单词组成的缩写词，在命名中，根据当前命名法和出现的位置，所有字母的大小写与首字母的大小写保持一致。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">XMLParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">insertHTML</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> html</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> httpRequest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HTTPRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-类名-使用-名词。" tabindex="-1"><a class="header-anchor" href="#强制-类名-使用-名词。" aria-hidden="true">#</a> [强制] <code>类名</code> 使用 <code>名词</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Engine</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-函数名-使用-动宾短语。" tabindex="-1"><a class="header-anchor" href="#建议-函数名-使用-动宾短语。" aria-hidden="true">#</a> [建议] <code>函数名</code> 使用 <code>动宾短语</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-boolean-类型的变量使用-is-或-has-开头。" tabindex="-1"><a class="header-anchor" href="#建议-boolean-类型的变量使用-is-或-has-开头。" aria-hidden="true">#</a> [建议] <code>boolean</code> 类型的变量使用 <code>is</code> 或 <code>has</code> 开头。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> isReady <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> hasMoreCommands <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-promise对象-用-动宾短语的进行时-表达。" tabindex="-1"><a class="header-anchor" href="#建议-promise对象-用-动宾短语的进行时-表达。" aria-hidden="true">#</a> [建议] <code>Promise对象</code> 用 <code>动宾短语的进行时</code> 表达。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> loadingData <span class="token operator">=</span> ajax<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
loadingData<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-注释" tabindex="-1"><a class="header-anchor" href="#_2-4-注释" aria-hidden="true">#</a> 2.4 注释</h3><h3 id="_2-4-1-单行注释" tabindex="-1"><a class="header-anchor" href="#_2-4-1-单行注释" aria-hidden="true">#</a> 2.4.1 单行注释</h3><h3 id="强制-必须独占一行。-后跟一个空格-缩进与下一行被注释说明的代码一致。" tabindex="-1"><a class="header-anchor" href="#强制-必须独占一行。-后跟一个空格-缩进与下一行被注释说明的代码一致。" aria-hidden="true">#</a> [强制] 必须独占一行。<code>//</code> 后跟一个空格，缩进与下一行被注释说明的代码一致。</h3><h3 id="_2-4-2-多行注释" tabindex="-1"><a class="header-anchor" href="#_2-4-2-多行注释" aria-hidden="true">#</a> 2.4.2 多行注释</h3><h3 id="建议-避免使用-这样的多行注释。有多行注释内容时-使用多个单行注释。" tabindex="-1"><a class="header-anchor" href="#建议-避免使用-这样的多行注释。有多行注释内容时-使用多个单行注释。" aria-hidden="true">#</a> [建议] 避免使用 <code>/*...*/</code> 这样的多行注释。有多行注释内容时，使用多个单行注释。</h3><h3 id="_2-4-3-文档化注释" tabindex="-1"><a class="header-anchor" href="#_2-4-3-文档化注释" aria-hidden="true">#</a> 2.4.3 文档化注释</h3><h3 id="强制-为了便于代码阅读和自文档化-以下内容必须包含以-形式的块注释中。" tabindex="-1"><a class="header-anchor" href="#强制-为了便于代码阅读和自文档化-以下内容必须包含以-形式的块注释中。" aria-hidden="true">#</a> [强制] 为了便于代码阅读和自文档化，以下内容必须包含以 <code>/**...*/</code> 形式的块注释中。</h3><p>解释：</p><ol><li>文件</li><li>namespace</li><li>类</li><li>函数或方法</li><li>类属性</li><li>事件</li><li>全局变量</li><li>常量</li><li>模块</li></ol><h3 id="强制-文档注释前必须空一行。" tabindex="-1"><a class="header-anchor" href="#强制-文档注释前必须空一行。" aria-hidden="true">#</a> [强制] 文档注释前必须空一行。</h3><h3 id="建议-文档化的文档说明-what-而不是-how。" tabindex="-1"><a class="header-anchor" href="#建议-文档化的文档说明-what-而不是-how。" aria-hidden="true">#</a> [建议] 文档化的文档说明 what，而不是 how。</h3><h3 id="_2-4-4-类型定义" tabindex="-1"><a class="header-anchor" href="#_2-4-4-类型定义" aria-hidden="true">#</a> 2.4.4 类型定义</h3><h3 id="强制-类型定义都是以-开始-以-结束。" tabindex="-1"><a class="header-anchor" href="#强制-类型定义都是以-开始-以-结束。" aria-hidden="true">#</a> [强制] 类型定义都是以 <code>{</code> 开始, 以 <code>}</code> 结束。</h3><p>解释：</p><p>常用类型如：{string}, {number}, {boolean}, {Object}, {Function}, {RegExp}, {Array}, {Date}。</p><p>类型不仅局限于内置的类型，也可以是自定义的类型。比如定义了一个类 Developer，就可以使用它来定义一个参数和返回值的类型。</p><table><thead><tr><th>类型定义</th><th>语法示例</th><th>解释</th></tr></thead><tbody><tr><td>String</td><td>{string}</td><td>--</td></tr><tr><td>Number</td><td>{number}</td><td>--</td></tr><tr><td>Boolean</td><td>{boolean}</td><td>--</td></tr><tr><td>Object</td><td>{Object}</td><td>--</td></tr><tr><td>Function</td><td>{Function}</td><td>--</td></tr><tr><td>RegExp</td><td>{RegExp}</td><td>--</td></tr><tr><td>Array</td><td>{Array}</td><td>--</td></tr><tr><td>Date</td><td>{Date}</td><td>--</td></tr><tr><td>单一类型集合</td><td>{Array.&lt;string&gt;}</td><td>string 类型的数组</td></tr><tr><td>多类型</td><td>{(number｜boolean)}</td><td>可能是 number 类型, 也可能是 boolean 类型</td></tr><tr><td>允许为null</td><td>{?number}</td><td>可能是 number, 也可能是 null</td></tr><tr><td>不允许为null</td><td>{!Object}</td><td>Object 类型, 但不是 null</td></tr><tr><td>Function类型</td><td>{function(number, boolean)}</td><td>函数, 形参类型</td></tr><tr><td>Function带返回值</td><td>{function(number, boolean):string}</td><td>函数, 形参, 返回值类型</td></tr><tr><td>Promise</td><td>Promise.&lt;resolveType, rejectType&gt;</td><td>Promise，成功返回的数据类型，失败返回的错误类型</td></tr><tr><td>参数可选</td><td>@param {string=} name</td><td>可选参数, =为类型后缀</td></tr><tr><td>可变参数</td><td>@param {...number} args</td><td>变长参数, ...为类型前缀</td></tr><tr><td>任意类型</td><td>{ *}</td><td>任意类型</td></tr><tr><td>可选任意类型</td><td>@param { *=} name</td><td>可选参数，类型不限</td></tr><tr><td>可变任意类型</td><td>@param {... *} args</td><td>变长参数，类型不限</td></tr></tbody></table><h3 id="强制-对于基本类型-string-number-boolean-首字母必须小写。" tabindex="-1"><a class="header-anchor" href="#强制-对于基本类型-string-number-boolean-首字母必须小写。" aria-hidden="true">#</a> [强制] 对于基本类型 {string}, {number}, {boolean}，首字母必须小写。</h3><h3 id="_2-4-5-文件注释" tabindex="-1"><a class="header-anchor" href="#_2-4-5-文件注释" aria-hidden="true">#</a> 2.4.5 文件注释</h3><h3 id="强制-文件顶部必须包含文件注释-用-file-标识文件说明。" tabindex="-1"><a class="header-anchor" href="#强制-文件顶部必须包含文件注释-用-file-标识文件说明。" aria-hidden="true">#</a> [强制] 文件顶部必须包含文件注释，用 <code>@file</code> 标识文件说明。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@file</span> Describe the file
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-文件注释中可以用-author-标识开发者信息。" tabindex="-1"><a class="header-anchor" href="#建议-文件注释中可以用-author-标识开发者信息。" aria-hidden="true">#</a> [建议] 文件注释中可以用 <code>@author</code> 标识开发者信息。</h3><p>解释：</p><p>开发者信息能够体现开发人员对文件的贡献，并且能够让遇到问题或希望了解相关信息的人找到维护人。通常情况文件在被创建时标识的是创建者。随着项目的进展，越来越多的人加入，参与这个文件的开发，新的作者应该被加入 <code>@author</code> 标识。</p><p><code>@author</code> 标识具有多人时，原则是按照 <code>责任</code> 进行排序。通常的说就是如果有问题，就是找第一个人应该比找第二个人有效。比如文件的创建者由于各种原因，模块移交给了其他人或其他团队，后来因为新增需求，其他人在新增代码时，添加 <code>@author</code> 标识应该把自己的名字添加在创建人的前面。</p><p><code>@author</code> 中的名字不允许被删除。任何劳动成果都应该被尊重。</p><p>业务项目中，一个文件可能被多人频繁修改，并且每个人的维护时间都可能不会很长，不建议为文件增加 <code>@author</code> 标识。通过版本控制系统追踪变更，按业务逻辑单元确定模块的维护责任人，通过文档与wiki跟踪和查询，是更好的责任管理方式。</p><p>对于业务逻辑无关的技术型基础项目，特别是开源的公共项目，应使用 <code>@author</code> 标识。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@file</span> Describe the file
 * <span class="token keyword">@author</span> author-name(mail-name@domain.com)
 *         author-name2(mail-name2@domain.com)
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-6-命名空间注释" tabindex="-1"><a class="header-anchor" href="#_2-4-6-命名空间注释" aria-hidden="true">#</a> 2.4.6 命名空间注释</h3><h3 id="建议-命名空间使用-namespace-标识。" tabindex="-1"><a class="header-anchor" href="#建议-命名空间使用-namespace-标识。" aria-hidden="true">#</a> [建议] 命名空间使用 <code>@namespace</code> 标识。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@namespace</span>
 */</span>
<span class="token keyword">const</span> util <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-7-类注释-es5的类" tabindex="-1"><a class="header-anchor" href="#_2-4-7-类注释-es5的类" aria-hidden="true">#</a> 2.4.7 类注释(es5的类)</h3><h3 id="建议-使用-class-标记类或构造函数。" tabindex="-1"><a class="header-anchor" href="#建议-使用-class-标记类或构造函数。" aria-hidden="true">#</a> [建议] 使用 <code>@class</code> 标记类或构造函数。</h3><p>解释：</p><p>对于使用对象 <code>constructor</code> 属性来定义的构造函数，可以使用 <code>@constructor</code> 来标记。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 描述
 *
 * <span class="token keyword">@class</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">Developer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// constructor body</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-使用-extends-标记类的继承信息。" tabindex="-1"><a class="header-anchor" href="#建议-使用-extends-标记类的继承信息。" aria-hidden="true">#</a> [建议] 使用 <code>@extends</code> 标记类的继承信息。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 描述
 *
 * <span class="token keyword">@class</span>
 * <span class="token keyword">@extends</span> <span class="token class-name">Developer</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">Fronteer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Developer</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// constructor body</span>
<span class="token punctuation">}</span>
util<span class="token punctuation">.</span><span class="token function">inherits</span><span class="token punctuation">(</span>Fronteer<span class="token punctuation">,</span> Developer<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-使用包装方式扩展类成员时-必须通过-lends-进行重新指向。" tabindex="-1"><a class="header-anchor" href="#强制-使用包装方式扩展类成员时-必须通过-lends-进行重新指向。" aria-hidden="true">#</a> [强制] 使用包装方式扩展类成员时， 必须通过 <code>@lends</code> 进行重新指向。</h3><p>解释：</p><p>没有 <code>@lends</code> 标记将无法为该类生成包含扩展类成员的文档。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 类描述
 *
 * <span class="token keyword">@class</span>
 * <span class="token keyword">@extends</span> <span class="token class-name">Developer</span>
 */</span>
<span class="token keyword">function</span> <span class="token function">Fronteer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Developer</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// constructor body</span>
<span class="token punctuation">}</span>

util<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>
    <span class="token class-name">Fronteer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span>
    <span class="token doc-comment comment">/** <span class="token keyword">@lends</span> Fronteer.prototype */</span><span class="token punctuation">{</span>
        <span class="token function-variable function">getLevel</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// TODO</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-类的属性或方法等成员信息不是-public-的-应使用-protected-或-private-标识可访问性。" tabindex="-1"><a class="header-anchor" href="#强制-类的属性或方法等成员信息不是-public-的-应使用-protected-或-private-标识可访问性。" aria-hidden="true">#</a> [强制] 类的属性或方法等成员信息不是 <code>public</code> 的，应使用 <code>@protected</code> 或 <code>@private</code> 标识可访问性。</h3><p>解释：</p><p>生成的文档中将有可访问性的标记，避免用户直接使用非 <code>public</code> 的属性或方法。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 类描述
 *
 * <span class="token keyword">@class</span>
 * <span class="token keyword">@extends</span> <span class="token class-name">Developer</span>
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">Fronteer</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Developer</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 属性描述
     *
     * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
     * <span class="token keyword">@private</span>
     */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>level <span class="token operator">=</span> <span class="token string">&#39;T12&#39;</span><span class="token punctuation">;</span>

    <span class="token comment">// constructor body</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
util<span class="token punctuation">.</span><span class="token function">inherits</span><span class="token punctuation">(</span>Fronteer<span class="token punctuation">,</span> Developer<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 方法描述
 *
 * <span class="token keyword">@private</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> 返回值描述
 */</span>
<span class="token class-name">Fronteer</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getLevel</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-8-函数-方法注释" tabindex="-1"><a class="header-anchor" href="#_2-4-8-函数-方法注释" aria-hidden="true">#</a> 2.4.8 函数/方法注释</h3><h3 id="强制-函数-方法注释必须包含函数说明-有参数和返回值时必须使用注释标识。" tabindex="-1"><a class="header-anchor" href="#强制-函数-方法注释必须包含函数说明-有参数和返回值时必须使用注释标识。" aria-hidden="true">#</a> [强制] 函数/方法注释必须包含函数说明，有参数和返回值时必须使用注释标识。</h3><p>解释：</p><p>当 <code>return</code> 关键字仅作退出函数/方法使用时，无须对返回值作注释标识。</p><h3 id="强制-参数和返回值注释必须包含类型信息-且不允许省略参数的说明。" tabindex="-1"><a class="header-anchor" href="#强制-参数和返回值注释必须包含类型信息-且不允许省略参数的说明。" aria-hidden="true">#</a> [强制] 参数和返回值注释必须包含类型信息，且不允许省略参数的说明。</h3><h3 id="建议-当函数是内部函数-外部不可访问时-可以使用-inner-标识。" tabindex="-1"><a class="header-anchor" href="#建议-当函数是内部函数-外部不可访问时-可以使用-inner-标识。" aria-hidden="true">#</a> [建议] 当函数是内部函数，外部不可访问时，可以使用 <code>@inner</code> 标识。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 函数描述
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">p1</span> 参数1的说明
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">p2</span> 参数2的说明，比较长
 *     那就换行了.
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">=</span><span class="token punctuation">}</span></span> <span class="token parameter">p3</span> 参数3的说明（可选）
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> 返回值描述
 */</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> p3 <span class="token operator">=</span> p3 <span class="token operator">||</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">p1</span><span class="token operator">:</span> p1<span class="token punctuation">,</span>
        <span class="token literal-property property">p2</span><span class="token operator">:</span> p2<span class="token punctuation">,</span>
        <span class="token literal-property property">p3</span><span class="token operator">:</span> p3
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-对-object-中各项的描述-必须使用-param-标识。" tabindex="-1"><a class="header-anchor" href="#强制-对-object-中各项的描述-必须使用-param-标识。" aria-hidden="true">#</a> [强制] 对 Object 中各项的描述， 必须使用 <code>@param</code> 标识。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 函数描述
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">option</span> 参数描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">option<span class="token punctuation">.</span>url</span> option项描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">=</span><span class="token punctuation">}</span></span> <span class="token parameter">option<span class="token punctuation">.</span>method</span> option项描述，可选参数
 */</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-重写父类方法时-应当添加-override-标识。如果重写的形参个数、类型、顺序和返回值类型均未发生变化-可省略-param、-return-仅用-override-标识-否则仍应作完整注释。" tabindex="-1"><a class="header-anchor" href="#建议-重写父类方法时-应当添加-override-标识。如果重写的形参个数、类型、顺序和返回值类型均未发生变化-可省略-param、-return-仅用-override-标识-否则仍应作完整注释。" aria-hidden="true">#</a> [建议] 重写父类方法时， 应当添加 <code>@override</code> 标识。如果重写的形参个数、类型、顺序和返回值类型均未发生变化，可省略 <code>@param</code>、<code>@return</code>，仅用 <code>@override</code> 标识，否则仍应作完整注释。</h3><p>解释：</p><p>简而言之，当子类重写的方法能直接套用父类的方法注释时可省略对参数与返回值的注释。</p><h3 id="_2-4-9-事件注释" tabindex="-1"><a class="header-anchor" href="#_2-4-9-事件注释" aria-hidden="true">#</a> 2.4.9 事件注释</h3><h3 id="强制-必须使用-event-标识事件-事件参数的标识与方法描述的参数标识相同。" tabindex="-1"><a class="header-anchor" href="#强制-必须使用-event-标识事件-事件参数的标识与方法描述的参数标识相同。" aria-hidden="true">#</a> [强制] 必须使用 <code>@event</code> 标识事件，事件参数的标识与方法描述的参数标识相同。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 值变更时触发
 *
 * <span class="token keyword">@event</span> Select#change
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">e</span> e描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">e<span class="token punctuation">.</span>before</span> before描述
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">e<span class="token punctuation">.</span>after</span> after描述
 */</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span>
    <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-在会广播事件的函数前使用-fires-标识广播的事件-在广播事件代码前使用-event-标识事件。" tabindex="-1"><a class="header-anchor" href="#强制-在会广播事件的函数前使用-fires-标识广播的事件-在广播事件代码前使用-event-标识事件。" aria-hidden="true">#</a> [强制] 在会广播事件的函数前使用 <code>@fires</code> 标识广播的事件，在广播事件代码前使用 <code>@event</code> 标识事件。</h3><h3 id="建议-对于事件对象的注释-使用-param-标识-生成文档时可读性更好。" tabindex="-1"><a class="header-anchor" href="#建议-对于事件对象的注释-使用-param-标识-生成文档时可读性更好。" aria-hidden="true">#</a> [建议] 对于事件对象的注释，使用 <code>@param</code> 标识，生成文档时可读性更好。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 点击处理
 *
 * <span class="token keyword">@fires</span> Select#change
 * <span class="token keyword">@private</span>
 */</span>
<span class="token class-name">Select</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">clickHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 值变更时触发
     *
     * <span class="token keyword">@event</span> Select#change
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">e</span> e描述
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">e<span class="token punctuation">.</span>before</span> before描述
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">e<span class="token punctuation">.</span>after</span> after描述
     */</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span>
        <span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">before</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">after</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-10-常量注释" tabindex="-1"><a class="header-anchor" href="#_2-4-10-常量注释" aria-hidden="true">#</a> 2.4.10 常量注释</h3><h3 id="强制-常量必须使用-const-标记-并包含说明和类型信息。" tabindex="-1"><a class="header-anchor" href="#强制-常量必须使用-const-标记-并包含说明和类型信息。" aria-hidden="true">#</a> [强制] 常量必须使用 <code>@const</code> 标记，并包含说明和类型信息。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 常量说明
 *
 * <span class="token keyword">@const</span>
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> <span class="token constant">REQUEST_URL</span> <span class="token operator">=</span> <span class="token string">&#39;myurl.do&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-11-复杂类型注释" tabindex="-1"><a class="header-anchor" href="#_2-4-11-复杂类型注释" aria-hidden="true">#</a> 2.4.11 复杂类型注释</h3><h3 id="建议-对于类型未定义的复杂结构的注释-可以使用-typedef-标识来定义。" tabindex="-1"><a class="header-anchor" href="#建议-对于类型未定义的复杂结构的注释-可以使用-typedef-标识来定义。" aria-hidden="true">#</a> [建议] 对于类型未定义的复杂结构的注释，可以使用 <code>@typedef</code> 标识来定义。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// \`namespaceA~\` 可以换成其它 namepaths 前缀，目的是为了生成文档中能显示 \`@typedef\` 定义的类型和链接。</span>
<span class="token doc-comment comment">/**
 * 服务器
 *
 * <span class="token keyword">@typedef</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> namespaceA~Server
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">host</span> 主机
 * <span class="token keyword">@property</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">port</span> 端口
 */</span>

<span class="token doc-comment comment">/**
 * 服务器列表
 *
 * <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">.</span><span class="token punctuation">&lt;</span>namespaceA~Server<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">const</span> servers <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;1.2.3.4&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;1.2.3.5&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8081</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-12-细节注释" tabindex="-1"><a class="header-anchor" href="#_2-4-12-细节注释" aria-hidden="true">#</a> 2.4.12 细节注释</h3><p>对于内部实现、不容易理解的逻辑说明、摘要信息等，我们可能需要编写细节注释。</p><h3 id="建议-细节注释遵循单行注释的格式。说明必须换行时-每行是一个单行注释的起始。" tabindex="-1"><a class="header-anchor" href="#建议-细节注释遵循单行注释的格式。说明必须换行时-每行是一个单行注释的起始。" aria-hidden="true">#</a> [建议] 细节注释遵循单行注释的格式。说明必须换行时，每行是一个单行注释的起始。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token parameter">p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> opt_p3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里对具体内部逻辑进行说明</span>
    <span class="token comment">// 说明太长需要换行</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-有时我们会使用一些特殊标记进行说明。特殊标记必须使用单行注释的形式。下面列举了一些常用标记" tabindex="-1"><a class="header-anchor" href="#强制-有时我们会使用一些特殊标记进行说明。特殊标记必须使用单行注释的形式。下面列举了一些常用标记" aria-hidden="true">#</a> [强制] 有时我们会使用一些特殊标记进行说明。特殊标记必须使用单行注释的形式。下面列举了一些常用标记：</h3><p>解释：</p><ol><li>TODO: 有功能待实现。此时需要对将要实现的功能进行简单说明。</li><li>FIXME: 该处代码运行没问题，但可能由于时间赶或者其他原因，需要修正。此时需要对如何修正进行简单说明。</li><li>HACK: 为修正某些问题而写的不太好或者使用了某些诡异手段的代码。此时需要对思路或诡异手段进行描述。</li><li>XXX: 该处存在陷阱。此时需要对陷阱进行描述。</li></ol><h2 id="_3-语言特性" tabindex="-1"><a class="header-anchor" href="#_3-语言特性" aria-hidden="true">#</a> 3 语言特性</h2><h3 id="_3-1-变量" tabindex="-1"><a class="header-anchor" href="#_3-1-变量" aria-hidden="true">#</a> 3.1 变量</h3><h3 id="强制-常量必须使用-const-声明" tabindex="-1"><a class="header-anchor" href="#强制-常量必须使用-const-声明" aria-hidden="true">#</a> [强制] 常量必须使用 <code>const</code> 声明</h3><h3 id="强制-非常量变量必须使用-let-声明-当下几乎没有需要使用-var-的场景" tabindex="-1"><a class="header-anchor" href="#强制-非常量变量必须使用-let-声明-当下几乎没有需要使用-var-的场景" aria-hidden="true">#</a> [强制] 非常量变量必须使用 <code>let</code> 声明，当下几乎没有需要使用 <code>var</code> 的场景</h3><h3 id="强制-变量、函数在使用前必须先定义。" tabindex="-1"><a class="header-anchor" href="#强制-变量、函数在使用前必须先定义。" aria-hidden="true">#</a> [强制] 变量、函数在使用前必须先定义。</h3><p>解释：</p><p>不通过 <code>var</code> 定义变量将导致变量污染全局环境。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;MyName&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
name <span class="token operator">=</span> <span class="token string">&#39;MyName&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原则上不建议使用全局变量，对于已有的全局变量或第三方框架引入的全局变量，需要根据检查工具的语法标识。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* globals jQuery */</span>
<span class="token keyword">var</span> element <span class="token operator">=</span> <span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">&#39;#element-id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-每个-var-const-let-只能声明一个变量。" tabindex="-1"><a class="header-anchor" href="#强制-每个-var-const-let-只能声明一个变量。" aria-hidden="true">#</a> [强制] 每个 <code>var</code> <code>const</code> <code>let</code> 只能声明一个变量。</h3><p>解释：</p><p>一个 <code>var</code> <code>const</code> <code>let</code> 声明多个变量，容易导致较长的行长度，并且在修改时容易造成逗号和分号的混淆。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> hangModules <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> missModules <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> hangModules <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    missModules <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    visited <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-变量必须-即用即声明-不得在函数或其它形式的代码块起始位置统一声明所有变量。" tabindex="-1"><a class="header-anchor" href="#强制-变量必须-即用即声明-不得在函数或其它形式的代码块起始位置统一声明所有变量。" aria-hidden="true">#</a> [强制] 变量必须 <code>即用即声明</code>，不得在函数或其它形式的代码块起始位置统一声明所有变量。</h3><p>解释：</p><p>变量声明与使用的距离越远，出现的跨度越大，代码的阅读与维护成本越高。虽然JavaScript的变量是函数作用域，还是应该根据编程中的意图，缩小变量出现的距离空间。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">kv2List</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">k</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
                <span class="token literal-property property">v</span><span class="token operator">:</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>

            list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">kv2List</span><span class="token punctuation">(</span><span class="token parameter">source</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> key<span class="token punctuation">;</span>
    <span class="token keyword">let</span> item<span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            item <span class="token operator">=</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">k</span><span class="token operator">:</span> key<span class="token punctuation">,</span>
                <span class="token literal-property property">v</span><span class="token operator">:</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>

            list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-条件" tabindex="-1"><a class="header-anchor" href="#_3-2-条件" aria-hidden="true">#</a> 3.2 条件</h3><h3 id="强制-在-equality-expression-中使用类型严格的-。仅当判断-null-或-undefined-时-允许使用-null。" tabindex="-1"><a class="header-anchor" href="#强制-在-equality-expression-中使用类型严格的-。仅当判断-null-或-undefined-时-允许使用-null。" aria-hidden="true">#</a> [强制] 在 Equality Expression 中使用类型严格的 <code>===</code>。仅当判断 <code>null</code> 或 <code>undefined</code> 时，允许使用 <code>== null</code>。</h3><p>解释：</p><p>使用 <code>===</code> 可以避免等于判断中隐式的类型转换。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">===</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">==</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-尽可能使用简洁的表达式。" tabindex="-1"><a class="header-anchor" href="#建议-尽可能使用简洁的表达式。" aria-hidden="true">#</a> [建议] 尽可能使用简洁的表达式。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串为空</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">===</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 字符串非空</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 数组非空</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>collection<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 布尔不成立</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>notTrue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>notTrue <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// null 或 undefined</span>

<span class="token comment">// good</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>noValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>noValue <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> noValue <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-按执行频率排列分支的顺序。" tabindex="-1"><a class="header-anchor" href="#建议-按执行频率排列分支的顺序。" aria-hidden="true">#</a> [建议] 按执行频率排列分支的顺序。</h3><p>解释：</p><p>按执行频率排列分支的顺序好处是：</p><ol><li>阅读的人容易找到最常见的情况，增加可读性。</li><li>提高执行效率。</li></ol><h3 id="建议-对于相同变量或表达式的多值条件-用-switch-代替-if。" tabindex="-1"><a class="header-anchor" href="#建议-对于相同变量或表达式的多值条件-用-switch-代替-if。" aria-hidden="true">#</a> [建议] 对于相同变量或表达式的多值条件，用 <code>switch</code> 代替 <code>if</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> variable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&#39;object&#39;</span><span class="token operator">:</span>
        <span class="token comment">// ......</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&#39;number&#39;</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token string">&#39;boolean&#39;</span><span class="token operator">:</span>
    <span class="token keyword">case</span> <span class="token string">&#39;string&#39;</span><span class="token operator">:</span>
        <span class="token comment">// ......</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> type <span class="token operator">=</span> <span class="token keyword">typeof</span> variable<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span> <span class="token operator">||</span> type <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-如果函数或全局中的-else-块后没有任何语句-可以删除-else。" tabindex="-1"><a class="header-anchor" href="#建议-如果函数或全局中的-else-块后没有任何语句-可以删除-else。" aria-hidden="true">#</a> [建议] 如果函数或全局中的 <code>else</code> 块后没有任何语句，可以删除 <code>else</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token string">&#39;unnamed&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">function</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;unnamed&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-循环" tabindex="-1"><a class="header-anchor" href="#_3-3-循环" aria-hidden="true">#</a> 3.3 循环</h3><h3 id="建议-不要在循环体中包含函数表达式-事先将函数提取到循环体外。" tabindex="-1"><a class="header-anchor" href="#建议-不要在循环体中包含函数表达式-事先将函数提取到循环体外。" aria-hidden="true">#</a> [建议] 不要在循环体中包含函数表达式，事先将函数提取到循环体外。</h3><p>解释：</p><p>循环体中的函数表达式，运行过程中会生成循环次数个函数对象。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">function</span> <span class="token function">clicker</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> elements<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">addListener</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> clicker<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> elements<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token function">addListener</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-对循环内多次使用的不变值-在循环外用变量缓存。" tabindex="-1"><a class="header-anchor" href="#建议-对循环内多次使用的不变值-在循环外用变量缓存。" aria-hidden="true">#</a> [建议] 对循环内多次使用的不变值，在循环外用变量缓存。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> width <span class="token operator">=</span> wrap<span class="token punctuation">.</span>offsetWidth <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> elements<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> width<span class="token punctuation">;</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

<span class="token comment">// bad</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> elements<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> wrap<span class="token punctuation">.</span>offsetWidth <span class="token operator">+</span> <span class="token string">&#39;px&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-对有序集合进行遍历时-缓存-length。" tabindex="-1"><a class="header-anchor" href="#建议-对有序集合进行遍历时-缓存-length。" aria-hidden="true">#</a> [建议] 对有序集合进行遍历时，缓存 <code>length</code>。</h3><p>解释：</p><p>虽然现代浏览器都对数组长度进行了缓存，但对于一些宿主对象和老旧浏览器的数组对象，在每次 <code>length</code> 访问时会动态计算元素个数，此时缓存 <code>length</code> 能有效提高程序性能。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> elements<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-对有序集合进行顺序无关的遍历时-使用逆序遍历。" tabindex="-1"><a class="header-anchor" href="#建议-对有序集合进行顺序无关的遍历时-使用逆序遍历。" aria-hidden="true">#</a> [建议] 对有序集合进行顺序无关的遍历时，使用逆序遍历。</h3><p>解释：</p><p>逆序遍历可以节省变量，代码比较优化。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>len<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> elements<span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-类型" tabindex="-1"><a class="header-anchor" href="#_3-4-类型" aria-hidden="true">#</a> 3.4 类型</h3><h3 id="_3-4-1-类型检测" tabindex="-1"><a class="header-anchor" href="#_3-4-1-类型检测" aria-hidden="true">#</a> 3.4.1 类型检测</h3><h3 id="建议-类型检测优先使用-typeof。对象类型检测使用-instanceof。null-或-undefined-的检测使用-null。" tabindex="-1"><a class="header-anchor" href="#建议-类型检测优先使用-typeof。对象类型检测使用-instanceof。null-或-undefined-的检测使用-null。" aria-hidden="true">#</a> [建议] 类型检测优先使用 <code>typeof</code>。对象类型检测使用 <code>instanceof</code>。<code>null</code> 或 <code>undefined</code> 的检测使用 <code>== null</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// string</span>
<span class="token keyword">typeof</span> variable <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span>

<span class="token comment">// number</span>
<span class="token keyword">typeof</span> variable <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span>

<span class="token comment">// boolean</span>
<span class="token keyword">typeof</span> variable <span class="token operator">===</span> <span class="token string">&#39;boolean&#39;</span>

<span class="token comment">// Function</span>
<span class="token keyword">typeof</span> variable <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>

<span class="token comment">// Object</span>
<span class="token keyword">typeof</span> variable <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>

<span class="token comment">// RegExp</span>
variable <span class="token keyword">instanceof</span> <span class="token class-name">RegExp</span>

<span class="token comment">// Array</span>
variable <span class="token keyword">instanceof</span> <span class="token class-name">Array</span>

<span class="token comment">// null</span>
variable <span class="token operator">===</span> <span class="token keyword">null</span>

<span class="token comment">// null or undefined</span>
variable <span class="token operator">==</span> <span class="token keyword">null</span>

<span class="token comment">// undefined</span>
<span class="token keyword">typeof</span> variable <span class="token operator">===</span> <span class="token string">&#39;undefined&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-2-类型转换" tabindex="-1"><a class="header-anchor" href="#_3-4-2-类型转换" aria-hidden="true">#</a> 3.4.2 类型转换</h3><h3 id="建议-转换成-string-时-使用-。" tabindex="-1"><a class="header-anchor" href="#建议-转换成-string-时-使用-。" aria-hidden="true">#</a> [建议] 转换成 <code>string</code> 时，使用 <code>+ &#39;&#39;</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
num <span class="token operator">+</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-转换成-number-时-通常使用-。" tabindex="-1"><a class="header-anchor" href="#建议-转换成-number-时-通常使用-。" aria-hidden="true">#</a> [建议] 转换成 <code>number</code> 时，通常使用 <code>+</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token operator">+</span>str<span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-string-转换成-number-要转换的字符串结尾包含非数字并期望忽略时-使用-parseint。" tabindex="-1"><a class="header-anchor" href="#建议-string-转换成-number-要转换的字符串结尾包含非数字并期望忽略时-使用-parseint。" aria-hidden="true">#</a> [建议] <code>string</code> 转换成 <code>number</code>，要转换的字符串结尾包含非数字并期望忽略时，使用 <code>parseInt</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> width <span class="token operator">=</span> <span class="token string">&#39;200px&#39;</span><span class="token punctuation">;</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-使用-parseint-时-必须指定进制。" tabindex="-1"><a class="header-anchor" href="#强制-使用-parseint-时-必须指定进制。" aria-hidden="true">#</a> [强制] 使用 <code>parseInt</code> 时，必须指定进制。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-转换成-boolean-时-使用-。" tabindex="-1"><a class="header-anchor" href="#建议-转换成-boolean-时-使用-。" aria-hidden="true">#</a> [建议] 转换成 <code>boolean</code> 时，使用 <code>!!</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token operator">!</span><span class="token operator">!</span>num<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-number-去除小数点-使用-math-floor-math-round-math-ceil-不使用-parseint。" tabindex="-1"><a class="header-anchor" href="#建议-number-去除小数点-使用-math-floor-math-round-math-ceil-不使用-parseint。" aria-hidden="true">#</a> [建议] <code>number</code> 去除小数点，使用 <code>Math.floor</code> / <code>Math.round</code> / <code>Math.ceil</code>，不使用 <code>parseInt</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> num <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span>
<span class="token function">parseInt</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-字符串" tabindex="-1"><a class="header-anchor" href="#_3-5-字符串" aria-hidden="true">#</a> 3.5 字符串</h3><h3 id="强制-字符串开头和结束使用单引号-。" tabindex="-1"><a class="header-anchor" href="#强制-字符串开头和结束使用单引号-。" aria-hidden="true">#</a> [强制] 字符串开头和结束使用单引号 <code>&#39;</code>。</h3><p>解释：</p><ol><li>输入单引号不需要按住 <code>shift</code>，方便输入。</li><li>实际使用中，字符串经常用来拼接 HTML。为方便 HTML 中包含双引号而不需要转义写法。</li></ol><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;我是一个字符串&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token string">&#39;&lt;div class=&quot;cls&quot;&gt;拼接HTML可以省去双引号转义&lt;/div&gt;&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-使用-数组-或-拼接字符串。" tabindex="-1"><a class="header-anchor" href="#建议-使用-数组-或-拼接字符串。" aria-hidden="true">#</a> [建议] 使用 <code>数组</code> 或 <code>+</code> 拼接字符串。</h3><p>解释：</p><ol><li>使用 <code>+</code> 拼接字符串，如果拼接的全部是 StringLiteral，压缩工具可以对其进行自动合并的优化。所以，静态字符串建议使用 <code>+</code> 拼接。</li><li>在现代浏览器下，使用 <code>+</code> 拼接字符串，性能较数组的方式要高。</li><li>如需要兼顾老旧浏览器，应尽量使用数组拼接字符串。</li></ol><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 使用数组拼接字符串</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// 推荐换行开始并缩进开始第一个字符串, 对齐代码, 方便阅读.</span>
    <span class="token string">&#39;&lt;ul&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;&lt;li&gt;第一项&lt;/li&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;&lt;li&gt;第二项&lt;/li&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;&lt;/ul&gt;&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 使用 \`+\` 拼接字符串</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// 建议第一个为空字符串, 第二个换行开始并缩进开始, 对齐代码, 方便阅读</span>
    <span class="token operator">+</span> <span class="token string">&#39;&lt;ul&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token operator">+</span>    <span class="token string">&#39;&lt;li&gt;第一项&lt;/li&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token operator">+</span>    <span class="token string">&#39;&lt;li&gt;第二项&lt;/li&gt;&#39;</span><span class="token punctuation">,</span>
    <span class="token operator">+</span> <span class="token string">&#39;&lt;/ul&gt;&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-使用字符串拼接的方式生成html-需要根据语境进行合理的转义。" tabindex="-1"><a class="header-anchor" href="#建议-使用字符串拼接的方式生成html-需要根据语境进行合理的转义。" aria-hidden="true">#</a> [建议] 使用字符串拼接的方式生成HTML，需要根据语境进行合理的转义。</h3><p>解释：</p><p>在 <code>JavaScript</code> 中拼接，并且最终将输出到页面中的字符串，需要进行合理转义，以防止安全漏洞。下面的示例代码为场景说明，不能直接运行。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// HTML 转义</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;&#39;</span> <span class="token operator">+</span> <span class="token function">htmlEncode</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&lt;/p&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// HTML 转义</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;&lt;input type=&quot;text&quot; value=&quot;&#39;</span> <span class="token operator">+</span> <span class="token function">htmlEncode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&quot;&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// URL 转义</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;&lt;a href=&quot;/?key=&#39;</span> <span class="token operator">+</span> <span class="token function">htmlEncode</span><span class="token punctuation">(</span><span class="token function">urlEncode</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;&quot;&gt;link&lt;/a&gt;&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// JavaScript字符串 转义 + HTML 转义</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&#39;&lt;button onclick=&quot;check(\\\\&#39;</span><span class="token string">&#39; + htmlEncode(strLiteral(name)) + &#39;</span>\\\\<span class="token string">&#39;)&quot;&gt;提交&lt;/button&gt;&#39;</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-复杂的数据到视图字符串的转换过程-选用一种模板引擎。" tabindex="-1"><a class="header-anchor" href="#建议-复杂的数据到视图字符串的转换过程-选用一种模板引擎。" aria-hidden="true">#</a> [建议] 复杂的数据到视图字符串的转换过程，选用一种模板引擎。</h3><p>解释：</p><p>使用模板引擎有如下好处：</p><ol><li>在开发过程中专注于数据，将视图生成的过程由另外一个层级维护，使程序逻辑结构更清晰。</li><li>优秀的模板引擎，通过模板编译技术和高质量的编译产物，能获得比手工拼接字符串更高的性能。</li><li>模板引擎能方便的对动态数据进行相应的转义，部分模板引擎默认进行HTML转义，安全性更好。</li></ol><ul><li>artTemplate: 体积较小，在所有环境下性能高，语法灵活。</li><li>dot.js: 体积小，在现代浏览器下性能高，语法灵活。</li><li>etpl: 体积较小，在所有环境下性能高，模板复用性高，语法灵活。</li><li>handlebars: 体积大，在所有环境下性能高，扩展性高。</li><li>hogon: 体积小，在现代浏览器下性能高。</li><li>nunjucks: 体积较大，性能一般，模板复用性高。</li></ul><h3 id="_3-6-对象" tabindex="-1"><a class="header-anchor" href="#_3-6-对象" aria-hidden="true">#</a> 3.6 对象</h3><h3 id="强制-使用对象字面量-创建新-object。" tabindex="-1"><a class="header-anchor" href="#强制-使用对象字面量-创建新-object。" aria-hidden="true">#</a> [强制] 使用对象字面量 <code>{}</code> 创建新 <code>Object</code>。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-对象创建时-如果一个对象的所有-属性-均可以不添加引号-建议所有-属性-不添加引号。" tabindex="-1"><a class="header-anchor" href="#建议-对象创建时-如果一个对象的所有-属性-均可以不添加引号-建议所有-属性-不添加引号。" aria-hidden="true">#</a> [建议] 对象创建时，如果一个对象的所有 <code>属性</code> 均可以不添加引号，建议所有 <code>属性</code> 不添加引号。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;someone&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-对象创建时-如果任何一个-属性-需要添加引号-则所有-属性-建议添加-。" tabindex="-1"><a class="header-anchor" href="#建议-对象创建时-如果任何一个-属性-需要添加引号-则所有-属性-建议添加-。" aria-hidden="true">#</a> [建议] 对象创建时，如果任何一个 <code>属性</code> 需要添加引号，则所有 <code>属性</code> 建议添加 <code>&#39;</code>。</h3><p>解释：</p><p>如果属性不符合 Identifier 和 NumberLiteral 的形式，就需要以 StringLiteral 的形式提供。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;name&#39;</span><span class="token operator">:</span> <span class="token string">&#39;someone&#39;</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;age&#39;</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;more-info&#39;</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;someone&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span>
    <span class="token string-property property">&#39;more-info&#39;</span><span class="token operator">:</span> <span class="token string">&#39;...&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-不允许修改和扩展任何原生对象和宿主对象的原型。" tabindex="-1"><a class="header-anchor" href="#强制-不允许修改和扩展任何原生对象和宿主对象的原型。" aria-hidden="true">#</a> [强制] 不允许修改和扩展任何原生对象和宿主对象的原型。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 以下行为绝对禁止</span>
<span class="token class-name">String</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">trim</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-属性访问时-尽量使用-。" tabindex="-1"><a class="header-anchor" href="#建议-属性访问时-尽量使用-。" aria-hidden="true">#</a> [建议] 属性访问时，尽量使用 <code>.</code>。</h3><p>解释：</p><p>属性名符合 Identifier 的要求，就可以通过 <code>.</code> 来访问，否则就只能通过 <code>[expr]</code> 方式访问。</p><p>通常在 JavaScript 中声明的对象，属性命名是使用 小驼峰 命名法，用 <code>.</code> 来访问更清晰简洁。部分特殊的属性（比如来自后端的 JSON ），可能采用不寻常的命名方式，可以通过 <code>[expr]</code> 方式访问。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>info<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
info<span class="token punctuation">[</span><span class="token string">&#39;more-info&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-for-in-遍历对象时-使用-hasownproperty-过滤掉原型中的属性。" tabindex="-1"><a class="header-anchor" href="#建议-for-in-遍历对象时-使用-hasownproperty-过滤掉原型中的属性。" aria-hidden="true">#</a> [建议] <code>for in</code> 遍历对象时, 使用 <code>hasOwnProperty</code> 过滤掉原型中的属性。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> newInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> info<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>info<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        newInfo<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> info<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-数组" tabindex="-1"><a class="header-anchor" href="#_3-7-数组" aria-hidden="true">#</a> 3.7 数组</h3><h3 id="强制-使用数组字面量-创建新数组-除非想要创建的是指定长度的数组。" tabindex="-1"><a class="header-anchor" href="#强制-使用数组字面量-创建新数组-除非想要创建的是指定长度的数组。" aria-hidden="true">#</a> [强制] 使用数组字面量 <code>[]</code> 创建新数组，除非想要创建的是指定长度的数组。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// good</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// bad</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-遍历数组不使用-for-in。" tabindex="-1"><a class="header-anchor" href="#强制-遍历数组不使用-for-in。" aria-hidden="true">#</a> [强制] 遍历数组不使用 <code>for in</code>。</h3><p>解释：</p><p>数组对象可能存在数字以外的属性, 这种情况下 <code>for in</code> 不会得到正确结果。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 这里仅作演示, 实际中应使用 Object 类型</span>
arr<span class="token punctuation">.</span>other <span class="token operator">=</span> <span class="token string">&#39;other things&#39;</span><span class="token punctuation">;</span>

<span class="token comment">// 正确的遍历方式</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 错误的遍历方式</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-不因为性能的原因自己实现数组排序功能-尽量使用数组的-sort-方法。" tabindex="-1"><a class="header-anchor" href="#建议-不因为性能的原因自己实现数组排序功能-尽量使用数组的-sort-方法。" aria-hidden="true">#</a> [建议] 不因为性能的原因自己实现数组排序功能，尽量使用数组的 <code>sort</code> 方法。</h3><p>解释：</p><p>自己实现的常规排序算法，在性能上并不优于数组默认的 <code>sort</code> 方法。以下两种场景可以自己实现排序：</p><ol><li>需要稳定的排序算法，达到严格一致的排序结果。</li><li>数据特点鲜明，适合使用桶排。</li></ol><h3 id="建议-清空数组使用-length-0。" tabindex="-1"><a class="header-anchor" href="#建议-清空数组使用-length-0。" aria-hidden="true">#</a> [建议] 清空数组使用 <code>.length = 0</code>。</h3><h3 id="_3-8-函数" tabindex="-1"><a class="header-anchor" href="#_3-8-函数" aria-hidden="true">#</a> 3.8 函数</h3><h3 id="_3-8-1-函数长度" tabindex="-1"><a class="header-anchor" href="#_3-8-1-函数长度" aria-hidden="true">#</a> 3.8.1 函数长度</h3><h3 id="建议-一个函数的长度控制在-50-行以内。" tabindex="-1"><a class="header-anchor" href="#建议-一个函数的长度控制在-50-行以内。" aria-hidden="true">#</a> [建议] 一个函数的长度控制在 <code>50</code> 行以内。</h3><p>解释：</p><p>将过多的逻辑单元混在一个大函数中，易导致难以维护。一个清晰易懂的函数应该完成单一的逻辑单元。复杂的操作应进一步抽取，通过函数的调用来体现流程。</p><p>特定算法等不可分割的逻辑允许例外。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">syncViewStateOnUserAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        y<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        z<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        y<span class="token punctuation">.</span>checked <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        warning<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
        submitButton<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        warning<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;Please enter it&#39;</span><span class="token punctuation">;</span>
        submitButton<span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 直接阅读该函数会难以明确其主线逻辑，因此下方是一种更合理的表达方式：</span>

<span class="token keyword">function</span> <span class="token function">syncViewStateOnUserAction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">syncXStateToView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">checkAAvailability</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">syncXStateToView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    y<span class="token punctuation">.</span>checked <span class="token operator">=</span> x<span class="token punctuation">.</span>checked<span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">.</span>checked<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        z<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">checkAAvailability</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearWarnignForA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">displayWarningForAMissing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-8-2-参数设计" tabindex="-1"><a class="header-anchor" href="#_3-8-2-参数设计" aria-hidden="true">#</a> 3.8.2 参数设计</h3><h3 id="建议-一个函数的参数控制在-6-个以内。" tabindex="-1"><a class="header-anchor" href="#建议-一个函数的参数控制在-6-个以内。" aria-hidden="true">#</a> [建议] 一个函数的参数控制在 <code>6</code> 个以内。</h3><p>解释：</p><p>除去不定长参数以外，函数具备不同逻辑意义的参数建议控制在 <code>6</code> 个以内，过多参数会导致维护难度增大。</p><p>某些情况下，如使用 AMD Loader 的 <code>require</code> 加载多个模块时，其 <code>callback</code> 可能会存在较多参数，因此对函数参数的个数不做强制限制。</p><h3 id="建议-通过-options-参数传递非数据输入型参数。" tabindex="-1"><a class="header-anchor" href="#建议-通过-options-参数传递非数据输入型参数。" aria-hidden="true">#</a> [建议] 通过 <code>options</code> 参数传递非数据输入型参数。</h3><p>解释：</p><p>有些函数的参数并不是作为算法的输入，而是对算法的某些分支条件判断之用，此类参数建议通过一个 <code>options</code> 参数传递。</p><p>如下函数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 移除某个元素
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">element</span> 需要移除的元素
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">removeEventListeners</span> 是否同时将所有注册在元素上的事件移除
 */</span>
<span class="token keyword">function</span> <span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> removeEventListeners</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>removeEventListeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        element<span class="token punctuation">.</span><span class="token function">clearEventListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以转换为下面的签名：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 移除某个元素
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">element</span> 需要移除的元素
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">options</span> 相关的逻辑配置
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> <span class="token parameter">options<span class="token punctuation">.</span>removeEventListeners</span> 是否同时将所有注册在元素上的事件移除
 */</span>
<span class="token keyword">function</span> <span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    element<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>options<span class="token punctuation">.</span>removeEventListeners<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        element<span class="token punctuation">.</span><span class="token function">clearEventListeners</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种模式有几个显著的优势：</p><ul><li><code>boolean</code> 型的配置项具备名称，从调用的代码上更易理解其表达的逻辑意义。</li><li>当配置项有增长时，无需无休止地增加参数个数，不会出现 <code>removeElement(element, true, false, false, 3)</code> 这样难以理解的调用代码。</li><li>当部分配置参数可选时，多个参数的形式非常难处理重载逻辑，而使用一个 options 对象只需判断属性是否存在，实现得以简化。</li></ul><h3 id="_3-8-3-闭包" tabindex="-1"><a class="header-anchor" href="#_3-8-3-闭包" aria-hidden="true">#</a> 3.8.3 闭包</h3><h3 id="建议-在适当的时候将闭包内大对象置为-null。" tabindex="-1"><a class="header-anchor" href="#建议-在适当的时候将闭包内大对象置为-null。" aria-hidden="true">#</a> [建议] 在适当的时候将闭包内大对象置为 <code>null</code>。</h3><p>解释：</p><p>在 JavaScript 中，无需特别的关键词就可以使用闭包，一个函数可以任意访问在其定义的作用域外的变量。需要注意的是，函数的作用域是静态的，即在定义时决定，与调用的时机和方式没有任何关系。</p><p>闭包会阻止一些变量的垃圾回收，对于较老旧的 JavaScript 引擎，可能导致外部所有变量均无法回收。</p><p>首先一个较为明确的结论是，以下内容会影响到闭包内变量的回收：</p><ul><li>嵌套的函数中是否有使用该变量。</li><li>嵌套的函数中是否有 <strong>直接调用eval</strong>。</li><li>是否使用了 with 表达式。</li></ul><p>Chakra、V8 和 SpiderMonkey 将受以上因素的影响，表现出不尽相同又较为相似的回收策略，而 JScript.dll 和 Carakan 则完全没有这方面的优化，会完整保留整个 LexicalEnvironment 中的所有变量绑定，造成一定的内存消耗。</p><p>由于对闭包内变量有回收优化策略的 Chakra、V8 和 SpiderMonkey 引擎的行为较为相似，因此可以总结如下，当返回一个函数 <strong>fn</strong> 时：</p><ol><li>如果 <strong>fn</strong> 的 <code>[[Scope]]</code> 是 ObjectEnvironment（with 表达式生成 ObjectEnvironment，函数和 catch 表达式生成 DeclarativeEnvironment），则： <ol><li>如果是 V8 引擎，则退出全过程。</li><li>如果是 SpiderMonkey，则处理该 ObjectEnvironment 的外层 LexicalEnvironment。</li></ol></li><li>获取当前 LexicalEnvironment 下的所有类型为 Function 的对象，对于每一个 Function 对象，分析其 FunctionBody： <ol><li>如果 FunctionBody 中含有 <strong>直接调用 eval</strong>，则退出全过程。</li><li>否则得到所有的 Identifier。</li><li>对于每一个 Identifier，设其为 <strong>name</strong>，根据查找变量引用的规则，从 LexicalEnvironment 中找出名称为 <strong>name</strong> 的绑定 binding。</li><li>对 binding 添加 <strong>notSwap</strong> 属性，其值为 <code>true</code>。</li></ol></li><li>检查当前 LexicalEnvironment 中的每一个变量绑定，如果该绑定有 <strong>notSwap</strong> 属性且值为 <code>true</code>，则： <ol><li>如果是 V8 引擎，删除该绑定。</li><li>如果是 SpiderMonkey，将该绑定的值设为 <code>undefined</code>，将删除 <strong>notSwap</strong> 属性。</li></ol></li></ol><p>对于 Chakra 引擎，暂无法得知是按 V8 的模式还是按 SpiderMonkey 的模式进行。</p><p>如果有 <strong>非常庞大</strong> 的对象，且预计会在 <strong>老旧的引擎</strong> 中执行，则使用闭包时，注意将闭包不需要的对象置为空引用。</p><h3 id="_3-8-4-空函数" tabindex="-1"><a class="header-anchor" href="#_3-8-4-空函数" aria-hidden="true">#</a> 3.8.4 空函数</h3><h3 id="建议-空函数不使用-new-function-的形式。" tabindex="-1"><a class="header-anchor" href="#建议-空函数不使用-new-function-的形式。" aria-hidden="true">#</a> [建议] 空函数不使用 <code>new Function()</code> 的形式。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">emptyFunction</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-对于性能有高要求的场合-建议存在一个空函数的常量-供多处使用共享。" tabindex="-1"><a class="header-anchor" href="#建议-对于性能有高要求的场合-建议存在一个空函数的常量-供多处使用共享。" aria-hidden="true">#</a> [建议] 对于性能有高要求的场合，建议存在一个空函数的常量，供多处使用共享。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">EMPTY_FUNCTION</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token class-name">MyClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>abstractMethod <span class="token operator">=</span> <span class="token constant">EMPTY_FUNCTION</span><span class="token punctuation">;</span>
<span class="token class-name">MyClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>before <span class="token operator">=</span> <span class="token constant">EMPTY_FUNCTION</span><span class="token punctuation">;</span>
<span class="token class-name">MyClass</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>after <span class="token operator">=</span> <span class="token constant">EMPTY_FUNCTION</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-9-面向对象" tabindex="-1"><a class="header-anchor" href="#_3-9-面向对象" aria-hidden="true">#</a> 3.9 面向对象</h3><h3 id="强制-类的继承方案-实现时需要修正-constructor。" tabindex="-1"><a class="header-anchor" href="#强制-类的继承方案-实现时需要修正-constructor。" aria-hidden="true">#</a> [强制] 类的继承方案，实现时需要修正 <code>constructor</code>。</h3><p>解释：</p><p>通常使用其他 library 的类继承方案都会进行 <code>constructor</code> 修正。如果是自己实现的类继承方案，需要进行 <code>constructor</code> 修正。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 构建类之间的继承关系
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">subClass</span> 子类函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">superClass</span> 父类函数
 */</span>
<span class="token keyword">function</span> <span class="token function">inherits</span><span class="token punctuation">(</span><span class="token parameter">subClass<span class="token punctuation">,</span> superClass</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token constant">F</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> superClass<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
    subClass<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    subClass<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> subClass<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-声明类时-保证-constructor-的正确性。" tabindex="-1"><a class="header-anchor" href="#建议-声明类时-保证-constructor-的正确性。" aria-hidden="true">#</a> [建议] 声明类时，保证 <code>constructor</code> 的正确性。</h3><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Animal</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 直接prototype等于对象时，需要修正constructor</span>
<span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">constructor</span><span class="token operator">:</span> Animal<span class="token punctuation">,</span>

    <span class="token function-variable function">jump</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;animal &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39; jump&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 这种方式扩展prototype则无需理会constructor</span>
<span class="token class-name">Animal</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">jump</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;animal &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">+</span> <span class="token string">&#39; jump&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-属性在构造函数中声明-方法在原型中声明。" tabindex="-1"><a class="header-anchor" href="#建议-属性在构造函数中声明-方法在原型中声明。" aria-hidden="true">#</a> [建议] 属性在构造函数中声明，方法在原型中声明。</h3><p>解释：</p><p>原型对象的成员被所有实例共享，能节约内存占用。所以编码时我们应该遵守这样的原则：原型对象包含程序不会修改的成员，如方法函数或配置项。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">TextNode</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> engine</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>engine <span class="token operator">=</span> engine<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">TextNode</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">clone</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="强制-自定义事件的-事件名-必须全小写。" tabindex="-1"><a class="header-anchor" href="#强制-自定义事件的-事件名-必须全小写。" aria-hidden="true">#</a> [强制] 自定义事件的 <code>事件名</code> 必须全小写。</h3><p>解释：</p><p>在 JavaScript 广泛应用的浏览器环境，绝大多数 DOM 事件名称都是全小写的。为了遵循大多数 JavaScript 开发者的习惯，在设计自定义事件时，事件名也应该全小写。</p><h3 id="强制-自定义事件只能有一个-event-参数。如果事件需要传递较多信息-应仔细设计事件对象。" tabindex="-1"><a class="header-anchor" href="#强制-自定义事件只能有一个-event-参数。如果事件需要传递较多信息-应仔细设计事件对象。" aria-hidden="true">#</a> [强制] 自定义事件只能有一个 <code>event</code> 参数。如果事件需要传递较多信息，应仔细设计事件对象。</h3><p>解释：</p><p>一个事件对象的好处有：</p><ol><li>顺序无关，避免事件监听者需要记忆参数顺序。</li><li>每个事件信息都可以根据需要提供或者不提供，更自由。</li><li>扩展方便，未来添加事件信息时，无需考虑会破坏监听器参数形式而无法向后兼容。</li></ol><h3 id="建议-设计自定义事件时-应考虑禁止默认行为。" tabindex="-1"><a class="header-anchor" href="#建议-设计自定义事件时-应考虑禁止默认行为。" aria-hidden="true">#</a> [建议] 设计自定义事件时，应考虑禁止默认行为。</h3><p>解释：</p><p>常见禁止默认行为的方式有两种：</p><ol><li>事件监听函数中 <code>return false</code>。</li><li>事件对象中包含禁止默认行为的方法，如 <code>preventDefault</code>。</li></ol><h3 id="_3-10-动态特性" tabindex="-1"><a class="header-anchor" href="#_3-10-动态特性" aria-hidden="true">#</a> 3.10 动态特性</h3><h3 id="_3-10-1-eval" tabindex="-1"><a class="header-anchor" href="#_3-10-1-eval" aria-hidden="true">#</a> 3.10.1 eval</h3><h3 id="强制-避免使用直接-eval-函数。" tabindex="-1"><a class="header-anchor" href="#强制-避免使用直接-eval-函数。" aria-hidden="true">#</a> [强制] 避免使用直接 <code>eval</code> 函数。</h3><p>解释：</p><p>直接 <code>eval</code>，指的是以函数方式调用 <code>eval</code> 的调用方法。直接 <code>eval</code> 调用执行代码的作用域为本地作用域，应当避免。</p><p>如果有特殊情况需要使用直接 <code>eval</code>，需在代码中用详细的注释说明为何必须使用直接 <code>eval</code>，不能使用其它动态执行代码的方式，同时需要其他资深工程师进行 Code Review。</p><h3 id="建议-尽量避免使用-eval-函数。" tabindex="-1"><a class="header-anchor" href="#建议-尽量避免使用-eval-函数。" aria-hidden="true">#</a> [建议] 尽量避免使用 <code>eval</code> 函数。</h3><h3 id="_3-10-2-动态执行代码" tabindex="-1"><a class="header-anchor" href="#_3-10-2-动态执行代码" aria-hidden="true">#</a> 3.10.2 动态执行代码</h3><h3 id="建议-使用-new-function-执行动态代码。" tabindex="-1"><a class="header-anchor" href="#建议-使用-new-function-执行动态代码。" aria-hidden="true">#</a> [建议] 使用 <code>new Function</code> 执行动态代码。</h3><p>解释：</p><p>通过 <code>new Function</code> 生成的函数作用域是全局使用域，不会影响当当前的本地作用域。如果有动态代码执行的需求，建议使用 <code>new Function</code>。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;y&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;return x + y;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#x&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#y&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-3-with" tabindex="-1"><a class="header-anchor" href="#_3-10-3-with" aria-hidden="true">#</a> 3.10.3 with</h3><h3 id="建议-尽量不要使用-with。" tabindex="-1"><a class="header-anchor" href="#建议-尽量不要使用-with。" aria-hidden="true">#</a> [建议] 尽量不要使用 <code>with</code>。</h3><p>解释：</p><p>使用 <code>with</code> 可能会增加代码的复杂度，不利于阅读和管理；也会对性能有影响。大多数使用 <code>with</code> 的场景都能使用其他方式较好的替代。所以，尽量不要使用 <code>with</code>。</p><h3 id="_3-10-4-delete" tabindex="-1"><a class="header-anchor" href="#_3-10-4-delete" aria-hidden="true">#</a> 3.10.4 delete</h3><h3 id="建议-减少-delete-的使用。" tabindex="-1"><a class="header-anchor" href="#建议-减少-delete-的使用。" aria-hidden="true">#</a> [建议] 减少 <code>delete</code> 的使用。</h3><p>解释：</p><p>如果没有特别的需求，减少或避免使用 <code>delete</code>。<code>delete</code> 的使用会破坏部分 JavaScript 引擎的性能优化。</p><h3 id="建议-处理-delete-可能产生的异常。" tabindex="-1"><a class="header-anchor" href="#建议-处理-delete-可能产生的异常。" aria-hidden="true">#</a> [建议] 处理 <code>delete</code> 可能产生的异常。</h3><p>解释：</p><p>对于有被遍历需求，且值 <code>null</code> 被认为具有业务逻辑意义的值的对象，移除某个属性必须使用 <code>delete</code> 操作。</p><p>在严格模式或 IE 下使用 <code>delete</code> 时，不能被删除的属性会抛出异常，因此在不确定属性是否可以删除的情况下，建议添加 <code>try-catch</code> 块。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">delete</span> o<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">catch</span> <span class="token punctuation">(</span>deleteError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    o<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-10-5-对象属性" tabindex="-1"><a class="header-anchor" href="#_3-10-5-对象属性" aria-hidden="true">#</a> 3.10.5 对象属性</h3><h3 id="建议-避免修改外部传入的对象。" tabindex="-1"><a class="header-anchor" href="#建议-避免修改外部传入的对象。" aria-hidden="true">#</a> [建议] 避免修改外部传入的对象。</h3><p>解释：</p><p>JavaScript 因其脚本语言的动态特性，当一个对象未被 seal 或 freeze 时，可以任意添加、删除、修改属性值。</p><p>但是随意地对 非自身控制的对象 进行修改，很容易造成代码在不可预知的情况下出现问题。因此，设计良好的组件、函数应该避免对外部传入的对象的修改。</p><p>下面代码的 <strong>selectNode</strong> 方法修改了由外部传入的 <strong>datasource</strong> 对象。如果 <strong>datasource</strong> 用在其它场合（如另一个 Tree 实例）下，会造成状态的混乱。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Tree</span><span class="token punctuation">(</span><span class="token parameter">datasource</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>datasource <span class="token operator">=</span> datasource<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Tree</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">selectNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从datasource中找出节点对象</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findNode</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>selected <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">flushView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于此类场景，需要使用额外的对象来维护，使用由自身控制，不与外部产生任何交互的 <strong>selectedNodeIndex</strong> 对象来维护节点的选中状态，不对 <strong>datasource</strong> 作任何修改。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Tree</span><span class="token punctuation">(</span><span class="token parameter">datasource</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>datasource <span class="token operator">=</span> datasource<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>selectedNodeIndex <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Tree</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">selectNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 从datasource中找出节点对象</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">findNode</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>selectedNodeIndex<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">flushView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，也可以通过 deepClone 等手段将自身维护的对象与外部传入的分离，保证不会相互影响。</p><h3 id="建议-具备强类型的设计。" tabindex="-1"><a class="header-anchor" href="#建议-具备强类型的设计。" aria-hidden="true">#</a> [建议] 具备强类型的设计。</h3><p>解释：</p><ul><li>如果一个属性被设计为 <code>boolean</code> 类型，则不要使用 <code>1</code> 或 <code>0</code> 作为其值。对于标识性的属性，如对代码体积有严格要求，可以从一开始就设计为 <code>number</code> 类型且将 <code>0</code> 作为否定值。</li><li>从 DOM 中取出的值通常为 <code>string</code> 类型，如果有对象或函数的接收类型为 <code>number</code> 类型，提前作好转换，而不是期望对象、函数可以处理多类型的值。</li></ul><h2 id="_4-浏览器环境" tabindex="-1"><a class="header-anchor" href="#_4-浏览器环境" aria-hidden="true">#</a> 4 浏览器环境</h2><p>解释：</p><p>有些模块是依赖的模块，但不会在模块实现中被直接调用，最为典型的是 <code>css</code> / <code>js</code> / <code>tpl</code> 等 Plugin 所引入的外部内容。此类内容建议放在模块定义最开始处统一引用。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">define</span><span class="token punctuation">(</span>
    <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">require</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;css!foo.css&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;tpl!bar.tpl.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-dom" tabindex="-1"><a class="header-anchor" href="#_4-1-dom" aria-hidden="true">#</a> 4.1 DOM</h3><h3 id="_4-1-1-元素获取" tabindex="-1"><a class="header-anchor" href="#_4-1-1-元素获取" aria-hidden="true">#</a> 4.1.1 元素获取</h3><h3 id="建议-对于单个元素-尽可能使用-document-getelementbyid-获取-避免使用document-all。" tabindex="-1"><a class="header-anchor" href="#建议-对于单个元素-尽可能使用-document-getelementbyid-获取-避免使用document-all。" aria-hidden="true">#</a> [建议] 对于单个元素，尽可能使用 <code>document.getElementById</code> 获取，避免使用<code>document.all</code>。</h3><h3 id="建议-对于多个元素的集合-尽可能使用-context-getelementsbytagname-获取。其中-context-可以为-document-或其他元素。指定-tagname-参数为-可以获得所有子元素。" tabindex="-1"><a class="header-anchor" href="#建议-对于多个元素的集合-尽可能使用-context-getelementsbytagname-获取。其中-context-可以为-document-或其他元素。指定-tagname-参数为-可以获得所有子元素。" aria-hidden="true">#</a> [建议] 对于多个元素的集合，尽可能使用 <code>context.getElementsByTagName</code> 获取。其中 <code>context</code> 可以为 <code>document</code> 或其他元素。指定 <code>tagName</code> 参数为 \`\` 可以获得所有子元素。</h3><h3 id="建议-遍历元素集合时-尽量缓存集合长度。如需多次操作同一集合-则应将集合转为数组。" tabindex="-1"><a class="header-anchor" href="#建议-遍历元素集合时-尽量缓存集合长度。如需多次操作同一集合-则应将集合转为数组。" aria-hidden="true">#</a> [建议] 遍历元素集合时，尽量缓存集合长度。如需多次操作同一集合，则应将集合转为数组。</h3><p>解释：</p><p>原生获取元素集合的结果并不直接引用 DOM 元素，而是对索引进行读取，所以 DOM 结构的改变会实时反映到结果中。</p><p>示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>span<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
<span class="token keyword">const</span> elements <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示为 DIV</span>
<span class="token function">alert</span><span class="token punctuation">(</span>elements<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> div <span class="token operator">=</span> elements<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
docpment<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> div<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 显示为 P</span>
<span class="token function">alert</span><span class="token punctuation">(</span>elements<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="建议-获取元素的直接子元素时使用-children。避免使用childnodes-除非预期是需要包含文本、注释和属性类型的节点。" tabindex="-1"><a class="header-anchor" href="#建议-获取元素的直接子元素时使用-children。避免使用childnodes-除非预期是需要包含文本、注释和属性类型的节点。" aria-hidden="true">#</a> [建议] 获取元素的直接子元素时使用 <code>children</code>。避免使用<code>childNodes</code>，除非预期是需要包含文本、注释和属性类型的节点。</h3><h3 id="_4-1-2-样式获取" tabindex="-1"><a class="header-anchor" href="#_4-1-2-样式获取" aria-hidden="true">#</a> 4.1.2 样式获取</h3><h3 id="建议-获取元素实际样式信息时-应使用-getcomputedstyle-或-currentstyle。" tabindex="-1"><a class="header-anchor" href="#建议-获取元素实际样式信息时-应使用-getcomputedstyle-或-currentstyle。" aria-hidden="true">#</a> [建议] 获取元素实际样式信息时，应使用 <code>getComputedStyle</code> 或 <code>currentStyle</code>。</h3><p>解释：</p><p>通过 style 只能获得内联定义或通过 JavaScript 直接设置的样式。通过 CSS class 设置的元素样式无法直接通过 style 获取。</p><h3 id="_4-1-3-样式设置" tabindex="-1"><a class="header-anchor" href="#_4-1-3-样式设置" aria-hidden="true">#</a> 4.1.3 样式设置</h3><h3 id="建议-尽可能通过为元素添加预定义的-classname-来改变元素样式-避免直接操作-style-设置。" tabindex="-1"><a class="header-anchor" href="#建议-尽可能通过为元素添加预定义的-classname-来改变元素样式-避免直接操作-style-设置。" aria-hidden="true">#</a> [建议] 尽可能通过为元素添加预定义的 className 来改变元素样式，避免直接操作 style 设置。</h3><h3 id="强制-通过-style-对象设置元素样式时-对于带单位非-0-值的属性-不允许省略单位。" tabindex="-1"><a class="header-anchor" href="#强制-通过-style-对象设置元素样式时-对于带单位非-0-值的属性-不允许省略单位。" aria-hidden="true">#</a> [强制] 通过 style 对象设置元素样式时，对于带单位非 0 值的属性，不允许省略单位。</h3><p>解释：</p><p>除了 IE，标准浏览器会忽略不规范的属性值，导致兼容性问题。</p><h3 id="_4-1-4-dom-操作" tabindex="-1"><a class="header-anchor" href="#_4-1-4-dom-操作" aria-hidden="true">#</a> 4.1.4 DOM 操作</h3><h3 id="建议-操作-dom-时-尽量减少页面-reflow。" tabindex="-1"><a class="header-anchor" href="#建议-操作-dom-时-尽量减少页面-reflow。" aria-hidden="true">#</a> [建议] 操作 <code>DOM</code> 时，尽量减少页面 <code>reflow</code>。</h3><p>解释：</p><p>页面 reflow 是非常耗时的行为，非常容易导致性能瓶颈。下面一些场景会触发浏览器的reflow：</p><ul><li>DOM元素的添加、修改（内容）、删除。</li><li>应用新的样式或者修改任何影响元素布局的属性。</li><li>Resize浏览器窗口、滚动页面。</li><li>读取元素的某些属性（offsetLeft、offsetTop、offsetHeight、offsetWidth、scrollTop/Left/Width/Height、clientTop/Left/Width/Height、getComputedStyle()、currentStyle(in IE)) 。</li></ul><h3 id="建议-尽量减少-dom-操作。" tabindex="-1"><a class="header-anchor" href="#建议-尽量减少-dom-操作。" aria-hidden="true">#</a> [建议] 尽量减少 <code>DOM</code> 操作。</h3><p>解释：</p><p>DOM 操作也是非常耗时的一种操作，减少 DOM 操作有助于提高性能。举一个简单的例子，构建一个列表。我们可以用两种方式：</p><ol><li>在循环体中 createElement 并 append 到父元素中。</li><li>在循环体中拼接 HTML 字符串，循环结束后写父元素的 innerHTML。</li></ol><p>第一种方法看起来比较标准，但是每次循环都会对 DOM 进行操作，性能极低。在这里推荐使用第二种方法。</p><h3 id="_4-1-5-dom-事件" tabindex="-1"><a class="header-anchor" href="#_4-1-5-dom-事件" aria-hidden="true">#</a> 4.1.5 DOM 事件</h3><h3 id="建议-优先使用-addeventlistener-attachevent-绑定事件-避免直接在-html-属性中或-dom-的-expando-属性绑定事件处理。" tabindex="-1"><a class="header-anchor" href="#建议-优先使用-addeventlistener-attachevent-绑定事件-避免直接在-html-属性中或-dom-的-expando-属性绑定事件处理。" aria-hidden="true">#</a> [建议] 优先使用 <code>addEventListener / attachEvent</code> 绑定事件，避免直接在 HTML 属性中或 DOM 的 <code>expando</code> 属性绑定事件处理。</h3><p>解释：</p><p>expando 属性绑定事件容易导致互相覆盖。</p><h3 id="建议-使用-addeventlistener-时第三个参数使用-false。" tabindex="-1"><a class="header-anchor" href="#建议-使用-addeventlistener-时第三个参数使用-false。" aria-hidden="true">#</a> [建议] 使用 <code>addEventListener</code> 时第三个参数使用 <code>false</code>。</h3><p>解释：</p><p>标准浏览器中的 addEventListener 可以通过第三个参数指定两种时间触发模型：冒泡和捕获。而 IE 的 attachEvent 仅支持冒泡的事件触发。所以为了保持一致性，通常 addEventListener 的第三个参数都为 false。</p><h3 id="建议-在没有事件自动管理的框架支持下-应持有监听器函数的引用-在适当时候-元素释放、页面卸载等-移除添加的监听器。" tabindex="-1"><a class="header-anchor" href="#建议-在没有事件自动管理的框架支持下-应持有监听器函数的引用-在适当时候-元素释放、页面卸载等-移除添加的监听器。" aria-hidden="true">#</a> [建议] 在没有事件自动管理的框架支持下，应持有监听器函数的引用，在适当时候（元素释放、页面卸载等）移除添加的监听器。</h3>`,505),c=[p];function i(o,l){return s(),a("div",null,c)}const u=n(t,[["render",i],["__file","js代码开发规范.html.vue"]]);export{u as default};
