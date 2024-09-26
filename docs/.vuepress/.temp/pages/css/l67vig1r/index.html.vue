<template><div><p><img src="/body/green_7.webp" alt=""></p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>如果想产生3d效果，请务必添加透视</p>
</div>
<h2 id="空间位移" tabindex="-1"><a class="header-anchor" href="#空间位移"><span>空间位移</span></a></h2>
<p><img src="/css/2023-07-30-16-05-10.gif" alt=""></p>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:translate3d(x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">y</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">z) // </span><span style="--shiki-light:#999999;--shiki-dark:#666666">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">!code ++</span><span style="--shiki-light:#999999;--shiki-dark:#666666">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;!-- 分开来写 --</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:translateX();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:translateY();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:translateZ();</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="取值" tabindex="-1"><a class="header-anchor" href="#取值"><span>取值</span></a></h3>
<ul>
<li>像素单位数值</li>
<li>百分比</li>
</ul>
<h2 id="透视" tabindex="-1"><a class="header-anchor" href="#透视"><span>透视</span></a></h2>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">perspective:数值;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>像素单位数值，数值一般在800-1200</p>
</div>
<h2 id="空间旋转" tabindex="-1"><a class="header-anchor" href="#空间旋转"><span>空间旋转</span></a></h2>
<p><img src="/css/2023-07-30-16-29-48.gif" alt=""></p>
<h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h3>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:rotateZ(数值deg);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:rotateY(数值deg);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:rotateX(数值deg);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;!-- 改变旋转轴位置，很少使用 --</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:rotate3d(x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">y</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">z</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">角度度数);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="左手法则" tabindex="-1"><a class="header-anchor" href="#左手法则"><span>左手法则</span></a></h3>
<p>判断旋转方向，左手握住旋转轴，拇指指向正值方向，手指弯曲方向为旋转正值方向</p>
<h2 id="立体呈现" tabindex="-1"><a class="header-anchor" href="#立体呈现"><span>立体呈现</span></a></h2>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;!-- 给父元素添加 --</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">transform-style</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">preserve-3d</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">&#x3C;!--子元素设置位移/旋转 --</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空间缩放" tabindex="-1"><a class="header-anchor" href="#空间缩放"><span>空间缩放</span></a></h2>
<p><img src="/css/2023-07-30-16-37-42.gif" alt=""></p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:scaleX(倍数);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:scaleY(倍数);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:scaleZ(倍数);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:scale3d(x</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">y</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">z);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


