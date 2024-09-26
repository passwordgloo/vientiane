<template><div><p><img src="/body/green_1.webp" alt=""></p>
<PDFViewer src="https://file.iglooblog.top/pdf/day03%EF%BC%88CSS01-%E5%9F%BA%E7%A1%80%E9%80%89%E6%8B%A9%E5%99%A8%2B%E5%AD%97%E4%BD%93%E6%96%87%E6%9C%AC%E6%A0%B7%E5%BC%8F%EF%BC%89v1.2.pdf" title="day03%EF%BC%88CSS01-%E5%9F%BA%E7%A1%80%E9%80%89%E6%8B%A9%E5%99%A8%2B%E5%AD%97%E4%BD%93%E6%96%87%E6%9C%AC%E6%A0%B7%E5%BC%8F%EF%BC%89v1.2.pdf" :page="1" :no-toolbar="false" width="100%" height="" ratio="" :zoom="50" /><h2 id="css初识" tabindex="-1"><a class="header-anchor" href="#css初识"><span>CSS初识</span></a></h2>
<blockquote>
<p>CSS(Cascading style sheets)层叠样式表，用于美化<code v-pre>HTML标签</code></p>
<p>最后一个相同样式名会覆盖掉之前的属性值，除非!important</p>
</blockquote>
<p>CSS写在style标签中，style标签一般写在和head标签里面，title标签下面</p>
<div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">美化对象</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	属性名:属性值</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css引入方式" tabindex="-1"><a class="header-anchor" href="#css引入方式"><span>CSS引入方式</span></a></h2>
<table>
<thead>
<tr>
<th>引入方式</th>
<th>书写位置</th>
<th>作为范围</th>
<th>使用场景</th>
</tr>
</thead>
<tbody>
<tr>
<td>内嵌式</td>
<td>CSS写在style标签中</td>
<td>当前页面</td>
<td>单页面</td>
</tr>
<tr>
<td>外联式</td>
<td>CSS写在一个单独的.css文件中<br />需要通过link标签在网页中引入</td>
<td>多个页面</td>
<td>项目中</td>
</tr>
<tr>
<td>行内式</td>
<td>CSS写在标签的style属性中</td>
<td>当前标签</td>
<td>配合js使用</td>
</tr>
</tbody>
</table>
<h2 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询"><span>媒体查询</span></a></h2>
<h3 id="内联样式" tabindex="-1"><a class="header-anchor" href="#内联样式"><span>内联样式</span></a></h3>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* 视口宽度小于等于768px， 网页背景色是粉色 */</span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">media</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">max-width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 768</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    body</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> pink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* 视口宽度大于等于1200px， 网页背景色是skyblue */</span></span>
<span class="line highlighted"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">media</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> (</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">min-width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1200</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">    body</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">        background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> skyblue</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外部css" tabindex="-1"><a class="header-anchor" href="#外部css"><span>外部CSS</span></a></h3>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">link</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> rel="stylesheet" href="</span><span style="--shiki-light:#999999;--shiki-dark:#666666;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">/one</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">.css" media="(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">min-width</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: 992px)"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">link</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> rel="stylesheet" href="</span><span style="--shiki-light:#999999;--shiki-dark:#666666;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">.</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">/two</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">.css" media="(</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">min-width</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">: 1200px)"</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础选择器" tabindex="-1"><a class="header-anchor" href="#基础选择器"><span>基础选择器</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>!important&gt;行内样式&gt;id选择器&gt;类选择器&gt;标签选择器&gt;通配符选择器&gt;继承</p>
</div>
<h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h3>
<p>任何HTML标签，如</p>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:8rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/kt9Ls10z/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="class" tabindex="-1"><a class="header-anchor" href="#class"><span>class</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:14rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/kr7mtuwe/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="id" tabindex="-1"><a class="header-anchor" href="#id"><span>id</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:8rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/dz2thrwu/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符"><span>通配符</span></a></h3>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>尽量少用，会占用系统资源，影响用户访问速度，建议使用标签选择器</p>
</div>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:18rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/4ajukgdz/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h2 id="显示模式" tabindex="-1"><a class="header-anchor" href="#显示模式"><span>显示模式</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>display有下列属性</p>
</div>
<ul>
<li>inline</li>
<li>inline-block</li>
<li>block</li>
</ul>
<h2 id="字体样式" tabindex="-1"><a class="header-anchor" href="#字体样式"><span>字体样式</span></a></h2>
<table>
<thead>
<tr>
<th>属性名</th>
<th>含义</th>
<th>取值</th>
<th>注意</th>
</tr>
</thead>
<tbody>
<tr>
<td>font-size</td>
<td>字号</td>
<td>1.数字+px/em/rm<br />2.百分比<br />3.inherit</td>
<td>谷歌默认文字大小为16px<br />单位需要设置</td>
</tr>
<tr>
<td>font-weight</td>
<td>字重</td>
<td>1.normal/bold<br />2.100的整百数</td>
<td>不是所有字体都支持</td>
</tr>
<tr>
<td>font-style</td>
<td>倾斜</td>
<td>normal/italic</td>
<td></td>
</tr>
<tr>
<td>font-family</td>
<td>字体</td>
<td>字体名称</td>
<td>最后一项不需要引号包裹</td>
</tr>
</tbody>
</table>
<h3 id="复合写法" tabindex="-1"><a class="header-anchor" href="#复合写法"><span>复合写法</span></a></h3>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* font:style weight/line-height family*/</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    font</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">italic</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 700</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 24</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1.8</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 宋体</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文本样式" tabindex="-1"><a class="header-anchor" href="#文本样式"><span>文本样式</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>值</th>
</tr>
</thead>
<tbody>
<tr>
<td>text-indent</td>
<td>缩进</td>
<td></td>
</tr>
<tr>
<td>text-align</td>
<td>水平对齐</td>
<td>left/center/right</td>
</tr>
<tr>
<td>text-decoration</td>
<td>修饰线</td>
<td>underline/line-through/overline/none</td>
</tr>
<tr>
<td>line-height</td>
<td>行高</td>
<td>行高=字体大小，实现垂直居中</td>
</tr>
</tbody>
</table>
<h2 id="居中" tabindex="-1"><a class="header-anchor" href="#居中"><span>居中</span></a></h2>
<Tabs id="302" :data='[{"id":"水平居中"},{"id":"垂直居中"}]'>
<template #title0="{ value, isActive }">水平居中</template>
<template #title1="{ value, isActive }">垂直居中</template>
<template #tab0="{ value, isActive }">
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 300</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 300</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> pink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    margin</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> auto</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 552</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 400</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> pink</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* background-color: green; */</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    text-align</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> center</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* 文字是单行的 */</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    /* 垂直居中技巧: 设置行高属性值 = 自身高度属性值 */</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    line-height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 400</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    font-size</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 61</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</Tabs>
<div class="hint-container important">
<p class="hint-container-title">重要</p>
<p><RouteLink to="/article/wjvq7jyk/">新闻简单排版练习</RouteLink></p>
<p><RouteLink to="/article/fkttseo3/">简单产品展示效果</RouteLink></p>
<p><RouteLink to="/article/x5ps6g9k/">五彩导航效果</RouteLink></p>
</div>
</div></template>


