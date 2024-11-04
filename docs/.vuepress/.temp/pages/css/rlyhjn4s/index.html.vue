<template><div><p><img src="/body/green_2.webp" alt=""></p>
<PDFViewer src="https://file.iglooblog.top/pdf/day04%EF%BC%88CSS02-%E9%80%89%E6%8B%A9%E5%99%A8%E8%BF%9B%E9%98%B6%2B%E8%83%8C%E6%99%AF%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7%2B%E5%85%83%E7%B4%A0%E6%98%BE%E7%A4%BA%E6%A8%A1%E5%BC%8F%2B%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%EF%BC%89v1.0.pdf" title="day04%EF%BC%88CSS02-%E9%80%89%E6%8B%A9%E5%99%A8%E8%BF%9B%E9%98%B6%2B%E8%83%8C%E6%99%AF%E7%9B%B8%E5%85%B3%E5%B1%9E%E6%80%A7%2B%E5%85%83%E7%B4%A0%E6%98%BE%E7%A4%BA%E6%A8%A1%E5%BC%8F%2B%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%EF%BC%89v1.0.pdf" :page="1" :no-toolbar="false" width="100%" height="" ratio="" :zoom="50" /><h2 id="复合选择器" tabindex="-1"><a class="header-anchor" href="#复合选择器"><span>复合选择器</span></a></h2>
<h3 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器"><span>后代选择器</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:9rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/goeLuq2z/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="子代选择器" tabindex="-1"><a class="header-anchor" href="#子代选择器"><span>子代选择器</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:12rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/98w0uenj/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="并集选择器" tabindex="-1"><a class="header-anchor" href="#并集选择器"><span>并集选择器</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:11rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/b9gupk2v/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="交集选择器" tabindex="-1"><a class="header-anchor" href="#交集选择器"><span>交集选择器</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:13rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/dqohvw21/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><div class="hint-container info">
<p class="hint-container-title">hover悬浮效果</p>
</div>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:11rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/k3Lrzsen/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h2 id="emmet语法" tabindex="-1"><a class="header-anchor" href="#emmet语法"><span>Emmet语法</span></a></h2>
<table>
<thead>
<tr>
<th>记忆</th>
<th>示例</th>
<th>效果</th>
</tr>
</thead>
<tbody>
<tr>
<td>标签名</td>
<td>div</td>
<td><code v-pre>&lt;div&gt;&lt;/div&gt;</code></td>
</tr>
<tr>
<td>类选择器</td>
<td>.red</td>
<td><code v-pre>&lt;div class=&quot;red&quot;&gt;&lt;/div&gt;</code></td>
</tr>
<tr>
<td>id选择器</td>
<td>#one</td>
<td><code v-pre>&lt;div id=&quot;one&quot;&gt;&lt;/div&gt;</code></td>
</tr>
<tr>
<td>交集选择器</td>
<td>p.red#one</td>
<td><code v-pre>&lt;p class=&quot;red&quot; id=&quot;one&quot;&gt;&lt;/p&gt;</code></td>
</tr>
<tr>
<td>子代选择器</td>
<td>ul&gt;li</td>
<td><code v-pre>&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt;</code></td>
</tr>
<tr>
<td>内部文本</td>
<td>ul&gt;li(li的内容)</td>
<td><code v-pre>&lt;ul&gt;&lt;li&gt;li的内容&lt;/li&gt;&lt;/ul&gt;</code></td>
</tr>
<tr>
<td>创建多个</td>
<td>ul&gt;li*3</td>
<td><code v-pre>&lt;ul&gt;&lt;li&gt;&lt;/li&gt;&lt;li&gt;&lt;/li&gt;&lt;li&gt;&lt;/li&gt;&lt;/ul&gt; </code></td>
</tr>
</tbody>
</table>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2>
<h3 id="background-color" tabindex="-1"><a class="header-anchor" href="#background-color"><span>background-color</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:15rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/x2fhmt5z/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="background-image" tabindex="-1"><a class="header-anchor" href="#background-image"><span>background-image</span></a></h3>
<p>::: normal-demo</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">文字</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 200</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">200</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /* 会被下面的image属性覆盖掉 */</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> orange</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  background-image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">/html/dog.gif</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="background-repeat" tabindex="-1"><a class="header-anchor" href="#background-repeat"><span>background-repeat</span></a></h3>
<p>::: normal-demo</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">文字</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 400</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">200</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  background-image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">/css/quanquan.png</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  background-repeat</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> repeat-x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<h3 id="background-position" tabindex="-1"><a class="header-anchor" href="#background-position"><span>background-position</span></a></h3>
<p>::: normal-demo</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">文字</span><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 600</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">200</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  background-image</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> url</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">/html/dog.gif</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /* 禁止重复 */</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  background-repeat</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> no-repeat</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  background-position</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> -50</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> -100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p>
<div class="hint-container tip">
<p class="hint-container-title">background复合写法</p>
</div>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* 不分先后顺序 背景色  背景图  背景图平铺  背景图位置 */</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* background: pink url(/html/dog.gif) no-repeat center bottom; */</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* 背景图位置如果是英文单词可以颠倒顺序 */</span></span>
<span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">background: pink url(/html/dog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">gif</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">no-repeat</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> bottom </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">center</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> ;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* 测试背景图位置如果是数值 不要颠倒顺序 */</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* 水平50px, 垂直100px */</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* background: pink url(/html/dog.gif) no-repeat 50px 100px; */</span></span>
<span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">background: pink url(/html/dog</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">gif</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">) </span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">no-repeat</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> 100px 50px;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display"><span>display</span></a></h2>
<Tabs id="169" :data='[{"id":"行内"},{"id":"块"},{"id":"行内块"}]'>
<template #title0="{ value, isActive }">行内</template><template #title1="{ value, isActive }">块</template><template #title2="{ value, isActive }">行内块</template><template #tab0="{ value, isActive }"><iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:14rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/s90Lpnr2/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe></template><template #tab1="{ value, isActive }"><iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:23rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/0mhae9bk/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe></template><template #tab2="{ value, isActive }"><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">img</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    width</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    height</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 100</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">px</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">img</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./css/quanquan.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> alt</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">img</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">./css/quanquan.png</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> alt</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">""</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></template></Tabs><div class="hint-container caution">
<p class="hint-container-title">标签嵌套</p>
<ul>
<li>
<p>p 和 h标题不能相互嵌套</p>
</li>
<li>
<p>p里面不能包含div</p>
</li>
</ul>
</div>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>CSS继承性并不能全部继承父级全部属性</p>
</div>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:14rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/hckug6w8/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe></div></template>


