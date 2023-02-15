import{_ as n,p as s,q as a,a1 as t}from"./framework-204010b2.js";const p={},e=t(`<p>[toc]</p><h1 id="网络" tabindex="-1"><a class="header-anchor" href="#网络" aria-hidden="true">#</a> 网络</h1><p>计算机相关知识： 冯诺依曼式计算机--冯诺依曼（计算机之父） 运算器: CPU, GPU（显卡） 存储器: 内存（断电数据清空, 读写速度快） 硬盘（辅存）:（数据可以持久化，读写速度相对较慢） 控制器：主板上的⼀些器件 输⼊设备：键盘，⿏标，⻨克风，⽹口 输出设备：显示器，耳机，⽹口</p><h2 id="ip地址" tabindex="-1"><a class="header-anchor" href="#ip地址" aria-hidden="true">#</a> IP地址</h2><ol><li><p>IP地址的格式： IP地址分为四个段：xxx.xxx.xxx.xxx，每个段0~255，每个段都是由8个0、1组成的。</p></li><li><p>IP地址的分类： 一个IP地址分为两个部分：⽹络ID，主机ID A类：0.0.0.0 ~ 127.255.255.255（⼀一个⽹络能有1600+万台） B类：128.0.0.0 ~ 191.255.255.255（172.16.0.0 ~ 172.31.255.255） C类：192.0.0.0 ~ 223.255.255.255（192.168.xxx.xxx）(个人设备多为这个段内) D类：（多播地址） E类：</p></li></ol><h2 id="dns域名解析" tabindex="-1"><a class="header-anchor" href="#dns域名解析" aria-hidden="true">#</a> DNS域名解析</h2><ol><li><p>域名与DNS解析 www.baidu.com-&gt;域名 问：能通过域名直接访问到⼀一台机器器吗？ 答：不可以。⽤域名和IP形成对应关系。首先，计算机是不知道域名对应的IP的。问路由器，如果路由器认识这个域名，就返回一个IP，然后计算机访问这个IP。如果路由器不认识，他就问上一层路由器。如果问到了城市这个级别的路由器的时候(DNS服务器)，如果DNS服务器不认识这个域名，继续向上级DNS服务器查找。 互联⽹在建立的时候，共有13台总的DNS服务器。</p></li><li><p>当向浏览器的地址栏中输⼊⼀个url按回车之后，⽹络中都会发⽣什么？</p><p>⽐如输入的是123.xyz，看浏览器的缓存。本机host。C:windows/system32/drivers/etc/host 127.0.0.1 localhost 0.0.0.0 家里路由器、上级路由、城市的LDNS服务器，继续向上级的DNS服务器找，gDNS服务器器。</p></li></ol><h2 id="五层网络模型" tabindex="-1"><a class="header-anchor" href="#五层网络模型" aria-hidden="true">#</a> 五层网络模型</h2><ol><li><p>应用层 HTTP协议、DNS协议</p></li><li><p>运输层 TCP协议、UDP协议</p></li><li><p>网络层 IP地址--IP协议</p></li><li><p>数据链路层 mac地址</p></li><li><p>物理层</p><p>TCP/IP协议（对⽅的IP，⾃⼰的IP，对⽅的端⼝） HTTP协议分为两个部分： 请求：Request 请求⽅式：路径协议版本(GET，POST) 响应：Response</p></li></ol><h2 id="get和post请求方式的区别" tabindex="-1"><a class="header-anchor" href="#get和post请求方式的区别" aria-hidden="true">#</a> Get和Post请求方式的区别</h2><ol><li>是基于什么前提的？如果什么前提都没有，不使⽤任何规范，只考虑语法和理论上的HTTP协议，则GET和POST⼏乎没有什么区别，只有名字不一样。</li><li>如果是基于RFC规范的。 <ol><li>理论上的（Specification）：GET和POST具有相同语法的，但是有不同的语义。get是⽤来获取数据的，post是⽤来发送数据的，其他⽅面没有区别。</li><li>实现上的（Implementation）：各种浏览器，就是这个规范的实现者。常见的那些不不同： <ol><li>GET的数据在URL是可见的。POST请求不显示在URL中。</li><li>GET对⻓度是有限制的，POST长度是无限的。</li><li>GET请求的数据可以收藏为书签，post请求到的数据不可收藏为书签。</li><li>GET请求后，按后退按钮、刷新按钮无影响，post数据会被重新提交。</li><li>GET编码类型：application/x-www-form-url，post的编码类型：有很多种：encodeapplication/x-www-form-urlencoded multipart/form-data</li><li>GET历史参数会被保留在浏览器里，psot不会保存在浏览器中的。</li><li>GET只允许ASCII，post没有编码限制，允许发二进制的。</li><li>GET与POST相比，GET安全性较差，因为所发的数据是URL的⼀部分。</li></ol></li></ol></li></ol><h2 id="cookie与session" tabindex="-1"><a class="header-anchor" href="#cookie与session" aria-hidden="true">#</a> Cookie与Session</h2><ol><li>如果我们用JS的变量来存数据，那么在⻚面关闭的时候，数据就消失了。</li><li>保持登录状态是怎么做到的呢？按照正常的HTTP协议来说，是做不到的。因为HTTP协议，上下文无关协议。</li><li>所以说前端⻚面上，有可以持久化存储数据的东西。⼀旦登录成功，我就记载在这个⾥面。</li><li>Cookie是有限制的。Cookie是存在浏览器里的，不是存在某个⻚面上的。是可以⻓期存储的。Cookie即使是保存在浏览器里，也是存放在不同的域名下的。</li><li>初始状态：没有登录</li><li>访问百度的登录，输⼊用户名，密码。</li><li>如果⽤户名和密码是正确的。百度的后端会向这个域名下，设置⼀个Cookie。写入⽤户的基本信息（加密的）。</li><li>以后每⼀次向百度发送请求，浏览器都会自动带上这些Cookie。</li><li>服务端（后端）看到了带有ID的cookie，就可以解析这个加密的ID，来获取到这个用户本身的ID。</li><li>如果能获取到本身的ID，那么就证明这个⽤户已经登录过了。所以后端可以继续保留用户的信息。 <ol><li>缺点：如果某个坏人，复制了我浏览器里的cookie，他就可以在他的电脑上登录我的账号了。</li><li>XSS注入攻击。</li></ol></li></ol><p>Session指信息存储在服务端，数据存在Session上也有缺点，如果⽤户量⾮常大，上亿的用户。在用户量很大的时候，服务器端很耗资源的。因为后端可能不止一台服务器，用户的登录信息，⼀般只存在一台服务器上。因为用户的登录操作，在哪台机器上执行的，就一般存在哪台机器上。需要通过反向代理。（轮询，IP哈希。）</p><p>服务器：严格的说，服务器是一台计算机，这台计算机，只提供服务。（不是⽤户用的）但是，我们常说的这个服务器，指的是服务容器，不是服务器。 服务容器：是⼀个程序。程序可以监听⼀个端口。读取文件，并且返回。如果我们想通过访问服务器（服务容器）的方式，来访问我们自己写的⻚面。我们就得装一个服务容器的程序。</p><h2 id="b-s结构和c-s结构" tabindex="-1"><a class="header-anchor" href="#b-s结构和c-s结构" aria-hidden="true">#</a> B/S结构和C/S结构</h2><ol><li>Client/Server——Client,只负责内容的展示，Server负责提供内容。</li><li>Browser/Server——Browser只负责内容的展示，Server负责提供内容。</li></ol><p>index.html ⻚面的本质是什么？ ⻚面的本质就是⼀个字符串。带有HTML格式的字符串。</p><p>浏览器向服务器请求⼀个⻚面的本质是什么？ 1）www.baidu.com 2）服务器接收到这个请求后，服务器想要把这个⻚面的内容（HTML格式的字符串）返回给浏览器。 3）⻚面的字符串存在HTML⽂件里。例如：index.html 4）服务器端要读取文件。 5）将读取出来的内容返回给浏览器。最后返回的是一个字符串，这个字符串的来源可能是文件，可能是缓存，可能来自于数据库。</p><h2 id="跨域" tabindex="-1"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h2><p>哪些东西属于资源？ js文件肯定是算资源的，但是js文件是允许被跨域请求的。css文件，jpg,png等src属性的资源都是可以被跨域请求的, href资源大部分也都是可以被跨域请求的。</p><p>哪些资源算跨域请求的资源？ 1.后端接口的数据。 2.其它域的cookie 3.其它域的缓存</p><p>什么是其它的域？怎么样算跨域？ 页面本身：有协议（http/https）,域名，端口，要请求的数据，协议，域名，端口这三个，有任意一个不一样就算跨域。</p><p>跨域这个行为，发生在哪里? 1.即使跨域了（协议，域名，端口号有不一样的），请求也可以发出。 2.服务器端也是可以接收的。 3.服务器端也是可以正常处理的。 4.服务器端也是可以正常返回数据。 5.浏览器也能接收到这些数据。 6.接收到之后，发现当前⻚面的域和请求的域不同，所以判定为跨域。 7.我们的代码在这等着结果呢，但是因为浏览器判定跨域了，不会把结果传递给我们的代码。</p><p>虽然跨域了，但是我们依然需要这个数据，怎么办？ 1.后端（别⼈家的）配合我们进行跨域。pan.baidu.com ——&gt; zhidao.baidu.com （1）JSONP（正常的情况，返回的数据都是JSON格式。JSONP是一种特殊的格式。） （2）后端设置Access-Control-Allow-Origin属性以支持跨域。 2. 后端不配合我们进行跨域。 （3）iframe（只能显示，不能控制） （4）通过后端代理（⾃己的后端）</p><h2 id="发送网络请求的几种方式" tabindex="-1"><a class="header-anchor" href="#发送网络请求的几种方式" aria-hidden="true">#</a> 发送网络请求的几种方式</h2><ol><li><p>在浏览器中直接输入网址（无法用代码控制）</p></li><li><p>location.href = &quot;url&quot;，可以发出请求，但是页面会发生跳转</p></li><li><p>（差边球，如果只发出不返回可以用用，如img或script标签）带有src属性的标签，请求是可以发出的，服务端是可以处理的，也是可以返回的，但返回之后能否被应用还要看浏览器，页面无法处理返回结果</p></li><li><p>带有href属性的标签（link等），请求是可以发出的，服务端是可以处理的，也是可以返回的，但是返回之后能否被应用，还要看浏览器，页面无法处理返回结果</p></li><li><p>带有action属性的标签（form表单等），也可以向后端发出请求，但form表单发出请求之后，也会发生页面跳转</p></li><li><p>ajax发送请求 可以用代码控制，页面不会跳转，服务端返回的结果可以用js继续处理 要素：</p><ol><li>请求方式：&#39;get&#39;,&#39;post&#39;等</li><li>url</li><li>原生js ajax：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token keyword">var</span> xhr <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>XMLHttpRequest<span class="token punctuation">)</span><span class="token punctuation">{</span>
       xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//IE6及以下浏览器不适配</span>
   <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>
       xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ActiveXObject</span><span class="token punctuation">(</span><span class="token string">&quot;Microsoft.XmlHttp&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//IE6及以下浏览器使用</span>
   <span class="token punctuation">}</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span><span class="token punctuation">;</span>
   xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://daveloper.duyiedu.com/edu/testAjaxCrossOrigin&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token comment">//第三个参数代表同步还是异步，true表示异步，false表示同步，默认为true</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span><span class="token punctuation">;</span>
   xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token comment">//readyState === 4 表示请求完成，已经接收到数据</span>
       <span class="token comment">//status === 200 网络请求，结果都会有一个状态码，来表示这个请求是否正常（可以去菜鸟教程查看http状态码）</span>
       <span class="token comment">//200表示请求成功</span>
       <span class="token comment">//http状态码：</span>
       <span class="token comment">//2**表示请求成功</span>
       <span class="token comment">//3**表示重定向，就是后端端口口改变，访问原接口会回馈现在接口的端口号</span>
       <span class="token comment">//4**表示客户端错误，404表示页面没找到，也就是url错误</span>
       <span class="token comment">//5**表示服务端错误，后端代码出错等问题，后端的问题</span>

       <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
   xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>jQuery模式下的ajax的josnp</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token comment">//jsonp哪里特殊？</span>
   <span class="token comment">//发送的时候，会带上一个参数：callback</span>
   <span class="token comment">//返回的结果不是json，而是callback的名 + &quot;(&quot; + json + &quot;)&quot;;</span>
   $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">&quot;http://daveloper.duyiedu.com/edu/testJSonp&quot;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">&quot;jsonp&quot;</span><span class="token punctuation">,</span>
       <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span>
   <span class="token comment">//jsonp跨域，只能使用get方法，如果我们设置的是post方法，jquery会自动转为get方法</span>
   <span class="token comment">//但不是说在jsonp里只能使用get方法，我们设置的post方法也不是都会转换为get方法</span>
   <span class="token comment">//jquery会先判断是否同源，如果同源，则设置的是get就是get，设置的是post就是post；如果不同源，无论设置什么，都改为get</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>jsonp的原理</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>   <span class="token comment">//jsonp原理</span>
   <span class="token comment">//因为我想从一个接口获取一个数据，但是这个接口和当前页面不是同源的，也就是跨域了，但是这个接口又是支持JSONP的</span>
   <span class="token comment">//script标签有src属性，所以可以发出网络请求，但虽然可以引用其他域的资源，浏览器不限制，但浏览器会将其返回的内容作为js代码执行</span>
   <span class="token comment">//此时调用回调函数，其参数就是请求得到的数据</span>

   <span class="token comment">//asd({&quot;a&quot;:&quot;ok&quot;,&quot;b&quot;:&quot;hello&quot;})</span>
   <span class="token comment">//相当于调用asd方法，传入一个json对象作为参数</span>

   <span class="token comment">// 1.判断请求与当前页面的域是否同源，如果同源则发送正常的ajax，就没有跨域的事情了</span>
   <span class="token comment">// 2.如果不同源，生成一个script标签</span>
   <span class="token comment">// 3.生成一个随机的callback函数名字，并创建一个名为这个名字的方法（函数）</span>
   <span class="token comment">// 4.设置script标签的src，设置为要请求的接口</span>
   <span class="token comment">// 5.将callback作为参数拼接在后面</span>
   <span class="token comment">// ============以上是前端部分============</span>
   <span class="token comment">// 6.后端接收到请求后，开始准备要返回的数据</span>
   <span class="token comment">// 7.后端拼接数据，将要返回的数据用callback的值和括号包裹起来</span>
   <span class="token comment">//          例如：callback = asd123， 要返回的数据为{&quot;a&quot;:1,&quot;b&quot;:2}</span>
   <span class="token comment">//          就要拼接为：asd123({&quot;a&quot;:1,&quot;b&quot;:2})</span>
   <span class="token comment">// 8.将内容返回</span>
   <span class="token comment">// ============以上是后端部分============</span>
   <span class="token comment">// 9.浏览器接收到内容，会当做js代码来执行</span>
   <span class="token comment">// 10.从而执行名为asd123的方法，json为其参数，这样我们就接收到了后端返回给我们的对象了</span>

   <span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token punctuation">{</span>
       <span class="token function-variable function">ajax</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           <span class="token keyword">var</span> url <span class="token operator">=</span> options<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
           type <span class="token operator">=</span> options<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
           dataType <span class="token operator">=</span> options<span class="token punctuation">.</span>dataType<span class="token punctuation">;</span>
           <span class="token comment">//判断是否同源（协议，域名，端口号）</span>
           <span class="token comment">//获取目标url的域</span>
           <span class="token keyword">var</span> targetProtocol <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span><span class="token comment">//目标接口的协议</span>
           <span class="token keyword">var</span> targetHost <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span><span class="token comment">//目标接口的host，host是包涵域名和端口的</span>
           <span class="token comment">//如果url不带http，那么访问的一定是相对路径，相对路径一定是同源的。</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;http://&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;https://&quot;</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token keyword">var</span> targetUrl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
               targetProtocol <span class="token operator">=</span> targetUrl<span class="token punctuation">.</span>protocol<span class="token punctuation">;</span>
               targetHost <span class="token operator">=</span> targetUrl<span class="token punctuation">.</span>host<span class="token punctuation">;</span>
           <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
               targetProtocol <span class="token operator">=</span> location<span class="token punctuation">.</span>protocol<span class="token punctuation">;</span>
               targetHost <span class="token operator">=</span> location<span class="token punctuation">.</span>host<span class="token punctuation">;</span>
           <span class="token punctuation">}</span>
           <span class="token comment">//首先判断是否为jsonp，因为不是jsonp不用做其他的判断，直接发送ajax</span>
           <span class="token keyword">if</span> <span class="token punctuation">(</span>dataType <span class="token operator">==</span> <span class="token string">&quot;jsonp&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token comment">//要看是否同源</span>
               <span class="token keyword">if</span> <span class="token punctuation">(</span>location<span class="token punctuation">.</span>protocol <span class="token operator">==</span> targetProtocol <span class="token operator">&amp;&amp;</span> location<span class="token punctuation">.</span>host <span class="token operator">==</span> targetHost<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//表示同源</span>
                   <span class="token comment">//此处省略。因为同源，jsonp会当做普通的ajax做请求</span>
               <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//不同源，跨域</span>
                   <span class="token comment">//随机生成一个callback</span>
                   <span class="token keyword">var</span> callback <span class="token operator">=</span> <span class="token string">&quot;cb&quot;</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                   <span class="token comment">//给window上添加一个方法</span>
                   window<span class="token punctuation">[</span>callback<span class="token punctuation">]</span> <span class="token operator">=</span> options<span class="token punctuation">.</span>success<span class="token punctuation">;</span>
                   <span class="token comment">//生成script标签。</span>
                   <span class="token keyword">var</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;script&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                   <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//表示已经有参数了</span>
                       script<span class="token punctuation">.</span>src <span class="token operator">=</span> url <span class="token operator">+</span> <span class="token string">&quot;&amp;callback=&quot;</span> <span class="token operator">+</span> callback<span class="token punctuation">;</span>
                   <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//表示没有参数</span>
                       script<span class="token punctuation">.</span>src <span class="token operator">=</span> url <span class="token operator">+</span> <span class="token string">&quot;?callback=&quot;</span> <span class="token operator">+</span> callback<span class="token punctuation">;</span>
                   <span class="token punctuation">}</span>
                   script<span class="token punctuation">.</span>id <span class="token operator">=</span> callback<span class="token punctuation">;</span>
                   document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span>
               <span class="token punctuation">}</span>
           <span class="token punctuation">}</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token comment">//http://developer.duyiedu.com/edu/testJsonp?callback</span>

   $<span class="token punctuation">.</span><span class="token function">ajax</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&quot;http://developer.duyiedu.com/edu/testJsonp&quot;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">dataType</span><span class="token operator">:</span> <span class="token string">&quot;jsonp&quot;</span><span class="token punctuation">,</span>
       <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
   <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="http请求状态码" tabindex="-1"><a class="header-anchor" href="#http请求状态码" aria-hidden="true">#</a> HTTP请求状态码</h2><pre><code>主要包括：1*，2*，3*，4*以及5*，具体如下：

1*（临时响应）
     表示临时响应并需要请求者继续执行操作的状态代码。
     100（继续）:请求者应当继续提出请求。 服务器返回此代码表示已收到请求的第一部分，正在等待其余部分。   
     101（切换协议）:请求者已要求服务器切换协议，服务器已确认并准备切换。

2*（成功）
     表示成功处理了请求的状态代码
     200（成功）: 服务器已成功处理了请求。 通常，这表示服务器提供了请求的网页。  
     201（已创建）: 请求成功并且服务器创建了新的资源。  
     202（已接受）: 服务器已接受请求，但尚未处理。  
     203（非授权信息）: 服务器已成功处理了请求，但返回的信息可能来自另一来源。  
     204（无内容）: 服务器成功处理了请求，但没有返回任何内容。  
     205（重置内容）:服务器成功处理了请求，但没有返回任何内容。  
     206（部分内容）: 服务器成功处理了部分 GET 请求。

3*（重定向）
     表示要完成请求，需要进一步操作。 通常，这些状态代码用来重定向
     300（多种选择）: 针对请求，服务器可执行多种操作。 服务器可根据请求者 (user agent) 选择一项操作，或提供操作列表供请求者选择。  
     301（永久移动）: 请求的网页已永久移动到新位置。 服务器返回此响应（对 GET 或 HEAD 请求的响应）时，会自动将请求者转到新位置。  
     302（临时移动）: 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。  
     303（查看其他位置）:请求者应当对不同的位置使用单独的 GET 请求来检索响应时，服务器返回此代码。  
     304（未修改）:自从上次请求后，请求的网页未修改过。 服务器返回此响应时，不会返回网页内容。  
     305（使用代理）:请求者只能使用代理访问请求的网页。 如果服务器返回此响应，还表示请求者应使用代理。  
     307（临时重定向）: 服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来进行以后的请求。

4*（客户端请求错误）
     表示请求可能出错，妨碍了服务器的处理
     400（错误请求）:服务器不理解请求的语法。  
     401（未授权）:请求要求身份验证。 对于需要登录的网页，服务器可能返回此响应。  
     403（禁止）:服务器拒绝请求。  
     404（未找到）:服务器找不到请求的网页。  
     405（方法禁用）:禁用请求中指定的方法。  
     406（不接受）:无法使用请求的内容特性响应请求的网页。  
     407（需要代理授权）:此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理。  
     408（请求超时）: 服务器等候请求时发生超时。  
     409（冲突）: 服务器在完成请求时发生冲突。 服务器必须在响应中包含有关冲突的信息。  
     410（已删除）: 如果请求的资源已永久删除，服务器就会返回此响应。  
     411（需要有效长度）:服务器不接受不含有效内容长度标头字段的请求。  
     412（未满足前提条件）:服务器未满足请求者在请求中设置的其中一个前提条件。  
     413（请求实体过大）:服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。  
     414（请求的 URI 过长）:请求的 URI（通常为网址）过长，服务器无法处理。  
     415（不支持的媒体类型）:请求的格式不受请求页面的支持。  
     416（请求范围不符合要求）:如果页面无法提供请求的范围，则服务器会返回此状态代码。  
     417（未满足期望值）:服务器未满足”期望”请求标头字段的要求。

5*（服务器内部错误）
     表示服务器在尝试处理请求时发生内部错误。 这些错误可能是服务器本身的错误，而不是请求出错
     500（服务器内部错误）: 服务器遇到错误，无法完成请求。  
     501（尚未实施）:服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。  
     502（错误网关）:服务器作为网关或代理，从上游服务器收到无效响应。  
     503（服务不可用）:服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。  
     504（网关超时）: 服务器作为网关或代理，但是没有及时从上游服务器收到请求。  
     505（HTTP 版本不受支持）:服务器不支持请求中所用的 HTTP 协议版本。
</code></pre>`,29),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","网络学习.html.vue"]]);export{r as default};
