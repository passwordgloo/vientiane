<template><div><div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>书写注释是个良好习惯，按<code v-pre>Tab</code>控制缩进</p>
<p>VBA支持中文命名模块</p>
</div>
<h2 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h2>
<div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">'勤写注释方便自己理解</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h3>
<div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> for循环</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">'定义i变量数据类型为整数</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Dim</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">As</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> Integer</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">For</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> To</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 50</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Next</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="固定步长" tabindex="-1"><a class="header-anchor" href="#固定步长"><span>固定步长</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">解决删行跳行问题</p>
<p>从最后一行开始数，将step改为负数</p>
</div>
<div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub </span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">固定步长</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Dim</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">As</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965"> Integer</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">For</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> To</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 6</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Step </span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  '相关代码</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Next</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


