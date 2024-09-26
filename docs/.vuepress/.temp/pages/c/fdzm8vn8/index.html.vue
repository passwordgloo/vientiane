<template><div><h2 id="_16-算法的基本概念" tabindex="-1"><a class="header-anchor" href="#_16-算法的基本概念"><span>16.算法的基本概念</span></a></h2>
<h3 id="程序" tabindex="-1"><a class="header-anchor" href="#程序"><span>程序</span></a></h3>
<p><code v-pre>对程序的描述</code>在程序中要指定哪些数据以及这些数据的类型和数据的组织形式。这就是数据结构
<code v-pre>对数据的描述</code>。即要求计算机进行操作的步骤，也就是<code v-pre>算法</code>。</p>
<h3 id="沃斯公式" tabindex="-1"><a class="header-anchor" href="#沃斯公式"><span>沃斯公式</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p><code v-pre>算法+数据类型=程序</code> 该说法已经不合时宜</p>
</div>
<h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类"><span>分类</span></a></h3>
<ul>
<li>数值运算算法</li>
<li>非数值运算算法</li>
</ul>
<h3 id="算法的特性" tabindex="-1"><a class="header-anchor" href="#算法的特性"><span>算法的特性</span></a></h3>
<ol>
<li>有穷性</li>
<li>确定性</li>
<li>有零个或多个输入</li>
<li>有一个或多个输出</li>
<li>有效性</li>
</ol>
<h2 id="_17-认识循环语句" tabindex="-1"><a class="header-anchor" href="#_17-认识循环语句"><span>17.认识循环语句</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">方法1</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> while</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">100</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	for</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">100</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     //方法2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">		printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">		;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">	}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">         //后自增运算符，其表达式的值是没有执行后自增运算之前的值</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">         //前自增运算符，其表达式的值是该变量执行前自增运算之后的值</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      //printf参数的计算顺序是自右至左的</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-算法的表示" tabindex="-1"><a class="header-anchor" href="#_18-算法的表示"><span>18.算法的表示</span></a></h2>
<h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一"><span>方法一</span></a></h3>
<ol>
<li>2！1*2</li>
<li>3！ 2！*3</li>
<li>4！3！*4</li>
<li>5！ 4！*5</li>
</ol>
<h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二"><span>方法二</span></a></h3>
<ol>
<li>1 → t</li>
<li>2 → i</li>
<li>t*i → t</li>
<li>i+i → i</li>
<li>当i&lt;=5 调到第三步，否则跳转到第六步开始执行</li>
<li>输出t</li>
</ol>
<h3 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码"><span>伪代码</span></a></h3>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">begin</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> → t</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> → i</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> while</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x3C;=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	t</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">t</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666"> }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> printf t</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> end</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


