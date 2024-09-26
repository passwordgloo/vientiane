<template><div><p><img src="/body/green_6.webp" alt=""></p>
<h2 id="字体图标" tabindex="-1"><a class="header-anchor" href="#字体图标"><span>字体图标</span></a></h2>
<ul>
<li>
<p>iconfront</p>
</li>
<li>
<p>Fontawesome</p>
</li>
<li>
<p>……</p>
</li>
</ul>
<h2 id="位移" tabindex="-1"><a class="header-anchor" href="#位移"><span>位移</span></a></h2>
<p><img src="/css/2023-07-30-14-54-42.gif" alt=""></p>
<h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h3>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:translate(水平移动距离</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">垂直移动距离);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="取值" tabindex="-1"><a class="header-anchor" href="#取值"><span>取值</span></a></h3>
<ul>
<li>像素单位数值</li>
<li>百分比(参照物为盒子自身尺寸)</li>
</ul>
<h3 id="技巧" tabindex="-1"><a class="header-anchor" href="#技巧"><span>技巧</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>translate()如果只给出<code v-pre>一个值</code>，表示<code v-pre>x轴</code>方向移动距离</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>单独设置某个方向的移动距离:<code v-pre>translateX()</code>/<code v-pre>translateY()</code>
加入<code v-pre>transition:all</code>，动画过渡更加丝滑</p>
</div>
<h2 id="旋转" tabindex="-1"><a class="header-anchor" href="#旋转"><span>旋转</span></a></h2>
<h3 id="平面旋转" tabindex="-1"><a class="header-anchor" href="#平面旋转"><span>平面旋转</span></a></h3>
<p><img src="/css/2023-07-30-15-20-29.gif" alt=""></p>
<h4 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1"><span>语法</span></a></h4>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform：rotate(角度deg);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="取值-1" tabindex="-1"><a class="header-anchor" href="#取值-1"><span>取值</span></a></h4>
<p>取值为<code v-pre>正</code>，则<code v-pre>顺</code>时针旋转
取值为<code v-pre>负</code>，则<code v-pre>逆</code>时针旋转</p>
<h3 id="转换原点" tabindex="-1"><a class="header-anchor" href="#转换原点"><span>转换原点</span></a></h3>
<p><img src="/css/2023-07-30-15-25-12.gif" alt=""></p>
<h4 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2"><span>语法</span></a></h4>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">transform-origin</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:原点水平位置</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">原点垂直位置;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="取值-2" tabindex="-1"><a class="header-anchor" href="#取值-2"><span>取值</span></a></h4>
<ul>
<li>方位名词(left、top、right、bottom、center)</li>
<li>像素单位数值</li>
<li>百分比(参照盒子自身尺寸计算)</li>
</ul>
<h3 id="多重转换" tabindex="-1"><a class="header-anchor" href="#多重转换"><span>多重转换</span></a></h3>
<p><img src="/css/2023-07-30-15-27-54.gif" alt=""></p>
<h4 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3"><span>语法</span></a></h4>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:translate() rotate();</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="缩放" tabindex="-1"><a class="header-anchor" href="#缩放"><span>缩放</span></a></h2>
<p><img src="/css/2023-07-30-15-29-37.gif" alt=""></p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">transform:scale(x轴缩放倍数</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">y轴缩放倍数);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="渐变" tabindex="-1"><a class="header-anchor" href="#渐变"><span>渐变</span></a></h2>
<p><img src="/css/2023-07-30-15-35-28.gif" alt=""></p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">background-image</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">:linear-gradient(颜色1 位置</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">颜色2 位置2);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


