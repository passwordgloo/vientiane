<template><div><p><img src="/body/green_8.webp" alt=""></p>
<PDFViewer src="https://file.iglooblog.top/pdf/%E7%A7%BB%E5%8A%A8web%20%E7%AC%AC%E4%B8%89%E5%A4%A9.pdf" title="%E7%A7%BB%E5%8A%A8web%20%E7%AC%AC%E4%B8%89%E5%A4%A9.pdf" :page="1" :no-toolbar="false" width="100%" height="" ratio="" :zoom="50" /><h2 id="移动端特点" tabindex="-1"><a class="header-anchor" href="#移动端特点"><span>移动端特点</span></a></h2>
<h3 id="移动端和pc端网页不同点" tabindex="-1"><a class="header-anchor" href="#移动端和pc端网页不同点"><span>移动端和PC端网页不同点</span></a></h3>
<ul>
<li>PC屏幕大，网页固定版心</li>
<li>手机屏幕小，网页宽度多数为100%</li>
</ul>
<h3 id="谷歌模拟器" tabindex="-1"><a class="header-anchor" href="#谷歌模拟器"><span>谷歌模拟器</span></a></h3>
<p>浏览器按<code v-pre>F12</code>打开调试模式，选择手机模拟器</p>
<h3 id="分辨率" tabindex="-1"><a class="header-anchor" href="#分辨率"><span>分辨率</span></a></h3>
<h4 id="屏幕尺寸" tabindex="-1"><a class="header-anchor" href="#屏幕尺寸"><span>屏幕尺寸</span></a></h4>
<p>屏幕尺寸指的是<code v-pre>对角线</code>的长度，一般用<code v-pre>英寸</code>来度量</p>
<h4 id="分辨率-1" tabindex="-1"><a class="header-anchor" href="#分辨率-1"><span>分辨率</span></a></h4>
<ul>
<li>物理分辨率(出厂设置)</li>
<li>逻辑分辨率(软件分辨率)</li>
</ul>
<table>
<thead>
<tr>
<th>手机型号</th>
<th style="text-align:center">物理分辨率</th>
<th style="text-align:center">逻辑分辨率</th>
<th style="text-align:center">比例关系</th>
</tr>
</thead>
<tbody>
<tr>
<td>iPhone3GS</td>
<td style="text-align:center">320*480</td>
<td style="text-align:center">320*480</td>
<td style="text-align:center">1:1</td>
</tr>
<tr>
<td>iPhone4</td>
<td style="text-align:center">640*960</td>
<td style="text-align:center">320*480</td>
<td style="text-align:center">2:1</td>
</tr>
<tr>
<td>iPhone5</td>
<td style="text-align:center">640*1136</td>
<td style="text-align:center">320*568</td>
<td style="text-align:center">2:1</td>
</tr>
<tr>
<td>iPhone7/8</td>
<td style="text-align:center">750*1334</td>
<td style="text-align:center">375*667</td>
<td style="text-align:center">2:1</td>
</tr>
<tr>
<td>iPhoneX/XS/11 Pro</td>
<td style="text-align:center">1125*2436</td>
<td style="text-align:center">375*812</td>
<td style="text-align:center">3:1</td>
</tr>
<tr>
<td>iPhoneXR/11</td>
<td style="text-align:center">828*1792</td>
<td style="text-align:center">414*896</td>
<td style="text-align:center">2:1</td>
</tr>
<tr>
<td>iPhoneXS Max/11 Pro Max</td>
<td style="text-align:center">1242*2688</td>
<td style="text-align:center">414*896</td>
<td style="text-align:center">3:1</td>
</tr>
<tr>
<td>iPhone12mini</td>
<td style="text-align:center">1080*2340</td>
<td style="text-align:center">360*780</td>
<td style="text-align:center">3:1</td>
</tr>
<tr>
<td>iPhone12/12 Pro</td>
<td style="text-align:center">1170*2532</td>
<td style="text-align:center">390*844</td>
<td style="text-align:center">3:1</td>
</tr>
<tr>
<td>iPhone12 Pro Max</td>
<td style="text-align:center">1284*2778</td>
<td style="text-align:center">428*926</td>
<td style="text-align:center">3:1</td>
</tr>
</tbody>
</table>
<h3 id="视口" tabindex="-1"><a class="header-anchor" href="#视口"><span>视口</span></a></h3>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">meta</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> name</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">viewport</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> content</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">width=device-width, initial-scale=1.0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局"><span>布局</span></a></h2>
<p>百分比布局</p>
<p><RouteLink to="/article/66oyxjbe/">flex布局</RouteLink></p>
<p><RouteLink to="/article/pvf28khi/">grid布局</RouteLink></p>
<p><RouteLink to="/article/ziygmgyz/">响应式</RouteLink></p>
<h2 id="移动适配" tabindex="-1"><a class="header-anchor" href="#移动适配"><span>移动适配</span></a></h2>
<h3 id="长度单位" tabindex="-1"><a class="header-anchor" href="#长度单位"><span>长度单位</span></a></h3>
<h4 id="rem" tabindex="-1"><a class="header-anchor" href="#rem"><span>rem</span></a></h4>
<div class="hint-container note">
<p class="hint-container-title">注</p>
<p>1rem=1html字号大小</p>
</div>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:22rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/wrzojkgd/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h4 id="vw-vh" tabindex="-1"><a class="header-anchor" href="#vw-vh"><span>Vw/vh</span></a></h4>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:23rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/kvm3wtsf/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="媒体查询" tabindex="-1"><a class="header-anchor" href="#媒体查询"><span>媒体查询</span></a></h3>
<div class="language-txt line-numbers-mode" data-ext="txt" data-title="txt"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span>@media(媒体属性){</span></span>
<span class="line"><span>	选择器{</span></span>
<span class="line"><span>		CSS属性</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:18rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/15fr0gb8/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h2 id="less-scss" tabindex="-1"><a class="header-anchor" href="#less-scss"><span>Less/Scss</span></a></h2>
<h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h3>
<div class="language-less line-numbers-mode" data-ext="less" data-title="less"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 单行注释</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/* </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    块注释</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    第二行</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    第三行</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">*/</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="计算" tabindex="-1"><a class="header-anchor" href="#计算"><span>计算</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:11rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/wbL38pm6/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h3>
<h4 id="less" tabindex="-1"><a class="header-anchor" href="#less"><span>less</span></a></h4>
<div class="language-less line-numbers-mode" data-ext="less" data-title="less"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 1. 定义. 2.使用</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">colora</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">green</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">box</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">colora</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">father</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">    </span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    background-color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">colora</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">aa</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    color</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> @</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965">colora</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scss" tabindex="-1"><a class="header-anchor" href="#scss"><span>scss</span></a></h4>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:17rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/9uog67nj/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="导入" tabindex="-1"><a class="header-anchor" href="#导入"><span>导入</span></a></h3>
<div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//less</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">体验less.less</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//scss</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">体验less.scss</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//简写</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">@</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">import</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> '</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">注释</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


