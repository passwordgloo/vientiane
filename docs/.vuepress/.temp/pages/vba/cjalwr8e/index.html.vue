<template><div><div class="hint-container warning">
<p class="hint-container-title">Mac不支持</p>
<p>Mac上Office启用Active X控件时，会弹出警告框，提示不支持显示该功能</p>
</div>
<p><img src="/excel/截屏2024-04-1321.55.15.png" alt=""></p>
<p><img src="/excel/截屏2024-04-1321.55.21.png" alt=""></p>
<h2 id="按钮控件" tabindex="-1"><a class="header-anchor" href="#按钮控件"><span>按钮控件</span></a></h2>
<div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Sheet1.CommandButton1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Caption</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">结束</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Sheet1.CommandButton1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Enabled</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> False</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Sheet1.CommandButton1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Visible</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> False</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Sheet1.CommandButton1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Top</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Sheet1.CommandButton1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Top</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Sheet1.CommandButton1.Height</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标签控件" tabindex="-1"><a class="header-anchor" href="#标签控件"><span>标签控件</span></a></h2>
<div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Sheet1.Label1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Caption</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">ABCD</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Sheet1.Label1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Visible</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> False</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单选按钮控件" tabindex="-1"><a class="header-anchor" href="#单选按钮控件"><span>单选按钮控件</span></a></h2>
<div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">If</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Sheet1.OptionButton1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Value</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> True</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> Then</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    MsgBox</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">男性</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">ElseIf</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Sheet1.OptionButton2.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Value</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> False</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> Then</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    MsgBox</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">女性</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">Else</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">    MsgBox</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> "</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">未选择性别</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">End If</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微调按钮控件" tabindex="-1"><a class="header-anchor" href="#微调按钮控件"><span>微调按钮控件</span></a></h2>
<div class="language-vb line-numbers-mode" data-ext="vb" data-title="vb"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Sheet1.SpinButton1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Min</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">Sheet1.SpinButton1.</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Max</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 10</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">Sub</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> test1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">Range</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">a1</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> =</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> Sheet1.SpinButton1.Value</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">End Sub</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


