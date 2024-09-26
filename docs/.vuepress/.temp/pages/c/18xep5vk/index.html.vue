<template><div><h2 id="_10-初等运算符及单目运算符" tabindex="-1"><a class="header-anchor" href="#_10-初等运算符及单目运算符"><span>10.初等运算符及单目运算符</span></a></h2>
<blockquote>
<p>优先级、操作数、结合方向--初等运算符优先级为1，单目运算符优先级为2
只有单目运算符和赋值运算符的结合方向是自右往左的</p>
</blockquote>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//概念理解</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">b </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">         //学习目标（2）</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//！逻辑非运算符，求该操作数的逻辑反值，如果该操作数值为真，则整个表达式为假，否则整个表达式值为真</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">!</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">!</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">9</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">!</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //输出0，0，1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//-负号运算符</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">4</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">            //乘号比负号的优先级低，括号可以省略</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-算术运算符及赋值运算符" tabindex="-1"><a class="header-anchor" href="#_11-算术运算符及赋值运算符"><span>11.算术运算符及赋值运算符</span></a></h2>
<blockquote>
<p><img src="https://cdn.jsdelivr.net/gh/passwordgloo/icon/info.svg" alt="">乘号，除号，取余运算符的优先级为3；加号，减号的优先级为4；赋值运算符的优先级为14.</p>
</blockquote>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  //算术运算符</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">  printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%lf\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">   </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  /*输出2，2.500000 除号运算符的操作数如果都为整型，那么其结果也为整型。会省略掉商后面的小数部分*/</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">/</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">5</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">%</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">4</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">%</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">9</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	/*  printf("%d\n",3.0%2);    报错。取余运算符两边的操作数必须为整型，否则会报错*/</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">,</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">13</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">%</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">13</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">%</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">-</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">12</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">%</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">23</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//赋值运算符</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">7</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">b</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	 printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">/=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//b+c=100;    错误，赋值运算符的左操作数比必须为一个左值，非常数</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//检测赋值表达式是一个常数还是一个左值</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a </span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   //输出3</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_12-逗号-关系及逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_12-逗号-关系及逻辑运算符"><span>12.逗号，关系及逻辑运算符</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/*</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">学习目标：</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">(1)优先等级：逗号15(所有运算符中优先等级最低的)；逻辑与11，逻辑或12，不等于7，关系运算符(除了等于与不等于之外)6</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">(2)在c语言中，优先级并不完全决定运算顺序；</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">1.只有4种运算符(&#x26;&#x26;,||,逗号，条件运算符)规定了运算顺序，必须自左至右</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">2.操作数的求值顺序，不同的编译器可能有所不同---不要依赖任何不可移植的操作，应避免出现</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">(3)&#x26;&#x26;和||都先 计算左边表达式的值，如果左边表达式的值能够确定整个表达式的值那么右边表达式的值就不会计算</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">*/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//逗号运算符</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">!=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">==</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">4</span><span style="--shiki-light:#999999;--shiki-dark:#666666">));</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   //逗号运算符输出最右边表达式的值</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     //输出2而不是1，学习目标(2)-1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//逻辑与运算符</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">	0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">&#x26;&#x26;</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     //输出a的值为0，学习目标(2)-1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//逻辑或运算符</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">	1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">||</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     //输出a的值为0，学习目标(3)及(2)-1</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//学习目标(2)-2</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,((</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">*=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)));</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-条件运算符" tabindex="-1"><a class="header-anchor" href="#_13-条件运算符"><span>13.条件运算符</span></a></h2>
<div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/*</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">(1)条件运算符是c语言中唯一的三目运算符，其优先级为13</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">(2)c语言中条件运算符的运算方向也是必须从左至右的</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">*/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">#</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">include</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77"> &#x3C;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">stdio.h</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">></span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">	1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">哈哈</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">呵呵</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	/*等价于</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	if(1)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("哈哈\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	else</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("呵呵\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">	1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">),</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">3</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">),</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">4</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">));</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   //加上圆括号控制多个语句</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	/*等价于</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	if(1)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("1\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("2\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	else</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("3\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("4\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	}*/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">	1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">1</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">),</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">2</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">3</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">),</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">4</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   //不加圆括号会得到另一个结果</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	/*等价于</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	if(1)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("1\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("2\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	else</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("3\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	printf("4\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	}*/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">	0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">A</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">B</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">:</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">C</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	/*等价于</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	if(0)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("A\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	else</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		if(0)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">			printf("B\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		else</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">			printf("C\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	}</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	*/</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	/*等价于</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	if(0)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("A\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	else if(0)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("B\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	else</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("C\n");</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	*/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">	</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	//学习(2)</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">	int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">	0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">+=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">     //程序会按照自左至右的顺序计算该表达式，并不会按照优先级高低，先去计算括号里面的</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//	0?return 0;printf("123\n");  //error 表达式是数字和运算符的组合，return是关键字，所以return 0不是表达式</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//	0?int x:printf("123\n");     //error int x不是表达式</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">	return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> max</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">{</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">	printf</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">%d\n</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">></span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">b</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">?</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">      //如果a>b成立，输出a，否则输出b</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//等价于  a>b?printf("%d\n",a):printf("%d\n",b);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">/*等价于上一句</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	if(a>b)</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("%d\n",a);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">	else</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">		printf("%d\n",b);</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">*/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>序号</th>
<th>关键字</th>
<th>备注</th>
<th>序号</th>
<th>关键字</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>auto</td>
<td></td>
<td>2</td>
<td>break</td>
<td></td>
</tr>
<tr>
<td>3</td>
<td>case</td>
<td></td>
<td>4</td>
<td>char</td>
<td></td>
</tr>
<tr>
<td>5</td>
<td>const</td>
<td></td>
<td>6</td>
<td>continue</td>
<td></td>
</tr>
<tr>
<td>7</td>
<td>default</td>
<td></td>
<td>8</td>
<td>do</td>
<td></td>
</tr>
<tr>
<td>9</td>
<td>double</td>
<td></td>
<td>10</td>
<td>else</td>
<td></td>
</tr>
<tr>
<td>11</td>
<td>enum</td>
<td></td>
<td>12</td>
<td>extern</td>
<td></td>
</tr>
<tr>
<td>13</td>
<td>float</td>
<td></td>
<td>14</td>
<td>for</td>
<td></td>
</tr>
<tr>
<td>15</td>
<td>goto</td>
<td></td>
<td>16</td>
<td>if</td>
<td></td>
</tr>
<tr>
<td>17</td>
<td><code v-pre>inline</code></td>
<td>C99新增</td>
<td>18</td>
<td>int</td>
<td></td>
</tr>
<tr>
<td>19</td>
<td>long</td>
<td></td>
<td>20</td>
<td><code v-pre>register</code></td>
<td>C99新增</td>
</tr>
<tr>
<td>21</td>
<td>restrict</td>
<td></td>
<td>22</td>
<td>return</td>
<td></td>
</tr>
<tr>
<td>23</td>
<td>short</td>
<td></td>
<td>24</td>
<td>signed</td>
<td></td>
</tr>
<tr>
<td>25</td>
<td>sizeof</td>
<td></td>
<td>26</td>
<td>static</td>
<td></td>
</tr>
<tr>
<td>27</td>
<td>struct</td>
<td></td>
<td>28</td>
<td>switch</td>
<td></td>
</tr>
<tr>
<td>29</td>
<td>typedef</td>
<td></td>
<td>30</td>
<td>union</td>
<td></td>
</tr>
<tr>
<td>31</td>
<td>unsigned</td>
<td></td>
<td>32</td>
<td>void</td>
<td></td>
</tr>
<tr>
<td>33</td>
<td>volatile</td>
<td></td>
<td>34</td>
<td>while</td>
<td></td>
</tr>
<tr>
<td>35</td>
<td><code v-pre>_bool</code></td>
<td>C99新增</td>
<td>36</td>
<td><code v-pre>_Complex</code></td>
<td>C99新</td>
</tr>
<tr>
<td>37</td>
<td><code v-pre>_Imaginary</code></td>
<td>C99新增</td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


