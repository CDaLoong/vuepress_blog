import{_ as l,r as d,o as c,c as o,f as r,b as n,d as s,e as i,a}from"./app-168a97af.js";const t={},u=a(`<h1 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h1><h2 id="一些操作记录" tabindex="-1"><a class="header-anchor" href="#一些操作记录" aria-hidden="true">#</a> 一些操作记录</h2><h3 id="常用操作" tabindex="-1"><a class="header-anchor" href="#常用操作" aria-hidden="true">#</a> 常用操作</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看ip</span>
<span class="token function">hostname</span> <span class="token parameter variable">-1</span>
<span class="token function">ifconfig</span>
<span class="token function">ip</span> addr
<span class="token function">ip</span> address
<span class="token function">ip</span> addr show
<span class="token function">ip</span> address show


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新系统" tabindex="-1"><a class="header-anchor" href="#更新系统" aria-hidden="true">#</a> 更新系统</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dnf clean all
<span class="token function">sudo</span> dnf update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新yum源" tabindex="-1"><a class="header-anchor" href="#更新yum源" aria-hidden="true">#</a> 更新yum源</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1、将源文件备份</span>
<span class="token builtin class-name">cd</span> /etc/yum.repos.d/ <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> backup <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> *repo backup/

<span class="token comment"># 2、下载阿里源文件</span>
<span class="token function">curl</span> <span class="token parameter variable">-o</span> /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo

<span class="token comment">#3、更新源里面的地址</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;s|mirrors.cloud.aliyuncs.com|mirrors.aliyun.com|g &quot;</span> /etc/yum.repos.d/CentOS-*
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;s|releasever|releasever-stream|g&quot;</span> /etc/yum.repos.d/CentOS-*

<span class="token comment">#4、生成缓存</span>
yum clean all <span class="token operator">&amp;&amp;</span> yum makecache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装vim" tabindex="-1"><a class="header-anchor" href="#安装vim" aria-hidden="true">#</a> 安装vim</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">vim</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>将 VIM 编辑器设置为默认的系统范围编辑器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> ～/etc/profile.d/vim.sh
<span class="token builtin class-name">export</span> <span class="token assign-left variable">VISUAL</span><span class="token operator">=</span><span class="token string">&quot;vim&quot;</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable">EDITOR</span><span class="token operator">=</span><span class="token string">&quot;vim&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p={href:"https://www.runoob.com/linux/linux-vim.html",target:"_blank",rel:"noopener noreferrer"},v=a(`<h3 id="修改本地系统默认语言环境" tabindex="-1"><a class="header-anchor" href="#修改本地系统默认语言环境" aria-hidden="true">#</a> 修改本地系统默认语言环境</h3><ul><li>查看本机语言包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>locale <span class="token parameter variable">-a</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看当前语言环境</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>localectl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>修改语言环境</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>loclocalectl set-locale <span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span>en_US.UTF-8alectl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>下载语言包</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载单个语言包</span>
dnf <span class="token function">install</span> glibc-langpack-en
<span class="token comment"># 下载全部语言包</span>
dnf <span class="token function">install</span> glibc-all-langpacks <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开启-关闭防火墙" tabindex="-1"><a class="header-anchor" href="#开启-关闭防火墙" aria-hidden="true">#</a> 开启/关闭防火墙</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1，查看防火墙状态</span>
systemctl status firewalld.service


<span class="token comment"># 2，开启防火墙</span>
systemctl start firewalld.service

<span class="token comment"># 3，关闭防火墙</span>
systemctl stop firewalld.service

<span class="token comment"># 4，禁用防火墙</span>
systemctl disable firewalld.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m={id:"添加和删除用户",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#添加和删除用户","aria-hidden":"true"},"#",-1),h={href:"https://www.myfreax.com/how-to-add-and-delete-users-on-centos-8/",target:"_blank",rel:"noopener noreferrer"},k=a(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加用户</span>
<span class="token function">sudo</span> <span class="token function">useradd</span> daloong

<span class="token comment"># 给用户设置密码</span>
<span class="token function">sudo</span> <span class="token function">passwd</span> daloong

<span class="token comment"># 在CentOS中默认情况下，wheel组成员具有sudo访问权限。如果要赋予新创建的用户具有sudo权限，需要将用户添加到wheel组中</span>
<span class="token function">sudo</span> <span class="token function">usermod</span> <span class="token parameter variable">-aG</span> wheel daloong

<span class="token comment"># 删除用户</span>
<span class="token function">sudo</span> <span class="token function">userdel</span> daloong
<span class="token function">sudo</span> <span class="token function">userdel</span> <span class="token parameter variable">-r</span> daloong <span class="token comment">#包括用户邮件和home目录</span>

<span class="token comment"># 切换用户，使用root切换到其它账号无需密码，其它账号切换到root需要输入root密码</span>
<span class="token function">su</span> - daloong

<span class="token comment"># 注销当前用户的登录状态</span>
<span class="token builtin class-name">exit</span>

<span class="token comment"># 查看一个用户的ID信息</span>
<span class="token function">id</span> daloong

<span class="token comment"># 查看某一时刻用户的行为</span>
w

<span class="token comment"># 查看当前已经登录的账号</span>
<span class="token function">who</span>

<span class="token comment"># 查看当前用户的登录历史</span>
last

<span class="token comment"># 查看系统中所有用户的最后一次登录时间、登录端口和来源IP</span>
lastlog

<span class="token comment"># 使用如下命令打开 CentOS8用户组的配置文件</span>
<span class="token function">vi</span> /etc/group

<span class="token comment"># 建立一个CentOS8用户组</span>
<span class="token function">groupadd</span> <span class="token function">users</span>

<span class="token comment"># 删除一个用户组，初始组（主组）是不能删除的，只能删除附加组</span>
<span class="token function">groupdel</span> <span class="token function">users</span>

<span class="token comment"># 为用户组users添加用户daloong</span>
gpasswd <span class="token parameter variable">-a</span> <span class="token function">users</span> daloong

<span class="token comment"># 为CentOS8用户组users删除用户daloong</span>
gpasswd <span class="token parameter variable">-d</span> <span class="token function">users</span> daloong
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="新建、重命名、删除文件夹、文件" tabindex="-1"><a class="header-anchor" href="#新建、重命名、删除文件夹、文件" aria-hidden="true">#</a> 新建、重命名、删除文件夹、文件</h3><ul><li>新建文件夹 <ul><li>格式：mkdir [选项] DirName</li><li>命令中的［选项］一般有以下两种： -m 用于对新建目录设置存取权限，也可以用 chmod 命令进行设置。 -p 需要时创建上层文件夹(或目录)，如果文件夹(或目录)已经存在，则不视为错误。</li></ul></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查找" tabindex="-1"><a class="header-anchor" href="#查找" aria-hidden="true">#</a> 查找</h3><ul><li>查找微信小程序代码总行数：<code>find . &quot;(&quot; -name &quot;*.json&quot; -or -name &quot;*.js&quot; -or -name &quot;*.wxss&quot; -or -name &quot;*.wxml&quot; &quot;)&quot; -print | xargs wc -l</code></li></ul>`,6);function g(f,x){const e=d("ExternalLinkIcon");return c(),o("div",null,[r(`
 * @Author: chenleilong chenleilong@51yund.com
 * @Date: 2023-03-16 10:18:31
 * @LastEditors: chenleilong chenleilong@51yund.com
 * @LastEditTime: 2023-03-16 13:41:29
 * @FilePath: /GitHub/vuepress_blog/docs/note/Linux学习.md
 * @Description: 这是默认设置,请设置\`customMade\`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
`),u,n("ul",null,[n("li",null,[n("a",p,[s("vi操作"),i(e)])])]),v,n("h3",m,[b,s(),n("a",h,[s("添加和删除用户"),i(e)])]),k])}const w=l(t,[["render",g],["__file","Linux学习.html.vue"]]);export{w as default};
