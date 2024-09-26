<template><div><p><img src="/body/yellow_4.webp" alt=""></p>
<h2 id="运算符类别" tabindex="-1"><a class="header-anchor" href="#运算符类别"><span>运算符类别</span></a></h2>
<h3 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符"><span>赋值运算符</span></a></h3>
<p><code v-pre>=</code> 用来给变量赋值，还有以下简写</p>
<p><code v-pre>+</code> <code v-pre>=</code></p>
<p><code v-pre>-</code> <code v-pre>=</code></p>
<p><code v-pre>*</code> <code v-pre>=</code></p>
<p><code v-pre>/</code> <code v-pre>=</code></p>
<p><code v-pre>%</code> <code v-pre>=</code></p>
<p>相当于：</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mstyle mathcolor="#cc0000"><mtext>\displaylines</mtext></mstyle><mrow><mi>a</mi><mo>+</mo><mo>=</mo><mi>b</mi><mo>⇔</mo><mi>a</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>b</mi><mspace linebreak="newline"></mspace><mi>a</mi><mo>−</mo><mo>=</mo><mi>b</mi><mo>⇔</mo><mi>a</mi><mo>=</mo><mi>a</mi><mo>−</mo><mi>b</mi><mspace linebreak="newline"></mspace><mi>a</mi><mo>∗</mo><mo>=</mo><mi>b</mi><mo>⇔</mo><mi>a</mi><mo>=</mo><mi>a</mi><mo>∗</mo><mi>b</mi><mspace linebreak="newline"></mspace><mi>a</mi><mi mathvariant="normal">/</mi><mo>=</mo><mi>b</mi><mo>⇔</mo><mi>a</mi><mo>=</mo><mi>a</mi><mi mathvariant="normal">/</mi><mi>b</mi><mspace linebreak="newline"></mspace><mi>a</mi><mi mathvariant="normal">%</mi><mo>=</mo><mi>b</mi><mo>⇔</mo><mi>a</mi><mo>=</mo><mi>a</mi><mi mathvariant="normal">%</mi><mi>b</mi></mrow></mrow><annotation encoding="application/x-tex">
\displaylines{
a += b\Leftrightarrow a = a+b\\
a -= b\Leftrightarrow a = a-b\\
a *= b\Leftrightarrow a = a*b\\
a /= b\Leftrightarrow a = a/b\\
a \%= b\Leftrightarrow a = a\%b
}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord text" style="color:#cc0000;"><span class="mord" style="color:#cc0000;">\displaylines</span></span><span class="mord"><span class="mord mathnormal">a</span><span class="mord">+</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇔</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">b</span><span class="mspace newline"></span><span class="mord mathnormal">a</span><span class="mord">−</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇔</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">b</span><span class="mspace newline"></span><span class="mord mathnormal">a</span><span class="mord">∗</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇔</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">∗</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">b</span><span class="mspace newline"></span><span class="mord mathnormal">a</span><span class="mord">/</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇔</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mord">/</span><span class="mord mathnormal">b</span><span class="mspace newline"></span><span class="mord mathnormal">a</span><span class="mord">%</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">b</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇔</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mord mathnormal">a</span><span class="mord">%</span><span class="mord mathnormal">b</span></span></span></span></span></span></p>
<h3 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符"><span>算数运算符</span></a></h3>
<p><code v-pre>+</code> 加法</p>
<p><code v-pre>-</code>  减法</p>
<p><code v-pre>*</code> 乘法</p>
<p><code v-pre>/</code> 除法</p>
<p><code v-pre>%</code> 取余(模运算)</p>
<h3 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符"><span>比较运算符</span></a></h3>
<p><code v-pre>&gt;</code> 大于</p>
<p><code v-pre>&lt;</code> 小于</p>
<p><code v-pre>&gt;</code> <code v-pre>=</code> 大于或等于</p>
<p><code v-pre>&lt;</code> <code v-pre>=</code> 小于或等于</p>
<p><code v-pre>=</code> <code v-pre>=</code> 等于（值相等）</p>
<p><code v-pre>=</code> <code v-pre>=</code> <code v-pre>=</code> 全等于（值和数据类型一致）</p>
<p><code v-pre>!</code> <code v-pre>=</code> 不等于</p>
<div class="hint-container caution">
<p class="hint-container-title">判断值相等，坚决*不能*用一个 `=`</p>
<p>宽松写法<code v-pre>=</code> <code v-pre>=</code></p>
<p>严谨写法<code v-pre>=</code> <code v-pre>=</code> <code v-pre>=</code>（推荐）</p>
</div>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> null</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> undefined</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ==</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ===</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/js/undefined2.png" alt=""></p>
<div class="hint-container tip">
<p class="hint-container-title">比较运算符总结</p>
<p>比较运算符得到的结果是一个布尔值 (true 或者 false)</p>
<p>&gt;=  大于或等于  只要有一个结果正确最后的结果就是正确的</p>
<p>==  等于,只判断值是否相等</p>
<p>=== 全等于,值和数据类型必须都一样</p>
</div>
<h3 id="一元运算符" tabindex="-1"><a class="header-anchor" href="#一元运算符"><span>一元运算符</span></a></h3>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>一元运算每次只能固定的加1或者减1</p>
<p>在循环语句中使用一元运算符</p>
<p>一元运算符连写,中间不能有任何的空格</p>
</div>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>变量</mtext><mo>+</mo><mo>+</mo><mo>⇔</mo><mtext>先运算再自增1</mtext><mspace linebreak="newline"></mspace><mo>+</mo><mo>+</mo><mtext>变量</mtext><mo>⇔</mo><mtext>先自增1再运算1</mtext><mspace linebreak="newline"></mspace><mtext>变量</mtext><mo>−</mo><mo>−</mo><mo>⇔</mo><mtext>先运算再自减1</mtext><mspace linebreak="newline"></mspace><mo>−</mo><mo>−</mo><mtext>变量</mtext><mo>⇔</mo><mtext>先自减1再运算</mtext></mrow><annotation encoding="application/x-tex">
\text{变量}++ \Leftrightarrow \text{先运算再自增1}\\
++\text{变量} \Leftrightarrow \text{先自增1再运算1}\\
\text{变量}-- \Leftrightarrow \text{先运算再自减1}\\
--\text{变量} \Leftrightarrow \text{先自减1再运算}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord text"><span class="mord cjk_fallback">变量</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">+</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇔</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">先运算再自增</span><span class="mord">1</span></span></span><span class="mspace newline"></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">变量</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇔</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">先自增</span><span class="mord">1</span><span class="mord cjk_fallback">再运算</span><span class="mord">1</span></span></span><span class="mspace newline"></span><span class="base"><span class="strut" style="height:0.7667em;vertical-align:-0.0833em;"></span><span class="mord text"><span class="mord cjk_fallback">变量</span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇔</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">先运算再自减</span><span class="mord">1</span></span></span><span class="mspace newline"></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">变量</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">⇔</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord text"><span class="mord cjk_fallback">先自减</span><span class="mord">1</span><span class="mord cjk_fallback">再运算</span></span></span></span></span></span></p>
<h3 id="自增-减-运算符" tabindex="-1"><a class="header-anchor" href="#自增-减-运算符"><span>自增（减）运算符</span></a></h3>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>以字母<code v-pre>i</code>为例，自减运算符与自增运算符类似，这里不再赘述</p>
</div>
<h4 id="i" tabindex="-1"><a class="header-anchor" href="#i"><span>++i</span></a></h4>
<p>先运算，再赋值</p>
<h4 id="i-1" tabindex="-1"><a class="header-anchor" href="#i-1"><span>i++</span></a></h4>
<p>先赋值，再运算</p>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>注意运算过程中变量的值</p>
</div>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> b</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> a</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">b</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/js/plusplus.gif" alt=""></p>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>单独看i++值为1，++i值为2，但下面运算结果一定不是4、5这样的答案</p>
<p>运算过程中<code v-pre>i</code>的值会变化</p>
</div>
<div class="language-javascript line-numbers-mode" data-ext="javascript" data-title="javascript"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">  i</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">++</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ++</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">i</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> i</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符"><span>逻辑运算符</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Javascript 假值</p>
<p>undefined、null、NaN(非数字)、0、false、' '</p>
<p><code v-pre>?</code> <code v-pre>?</code>是ECMA2020新增的空值合并运算符</p>
</div>
<h4 id="或运算" tabindex="-1"><a class="header-anchor" href="#或运算"><span>或运算</span></a></h4>
<p><code v-pre>|</code> <code v-pre>|</code></p>
<p>结果都是布尔值，一真即真</p>
<p>碰到真的，触发短路，后面不执行</p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ||</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//值为2</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><img src="/js/over.png" alt=""></p>
<h4 id="且运算" tabindex="-1"><a class="header-anchor" href="#且运算"><span>且运算</span></a></h4>
<p><code v-pre>&amp;</code> <code v-pre>&amp;</code></p>
<p>结果都是布尔值，一假即假</p>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>不要使用数学写法，如18 &lt;= age &lt;24</p>
</div>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> year</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665"> prompt</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">请输入年份：</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">year</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> >=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2020</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x26;&#x26;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> year</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2035</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/js/year.gif" alt=""></p>
<p>碰到假的，触发短路，后面不执行</p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">null</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x26;&#x26;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 3</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">3</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x26;&#x26;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375"> false</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x26;&#x26;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 6</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/js/over2.png" alt=""></p>
<div class="hint-container tip">
<p class="hint-container-title">||与&&同时出现</p>
<p>先计算&amp;&amp;最后计算||</p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> &#x26;&#x26;</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> ||</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD"> //值为2</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div>
<h4 id="空值合并运算符" tabindex="-1"><a class="header-anchor" href="#空值合并运算符"><span>空值合并运算符</span></a></h4>
<p><code v-pre>?</code> <code v-pre>?</code></p>
<p>类似或运算，处理第一个为null或undefined为真时，才返回第二个值</p>
<p>作用是判断0和空值</p>
<p><img src="/js/queque.png" alt=""></p>
<h4 id="取反" tabindex="-1"><a class="header-anchor" href="#取反"><span>取反</span></a></h4>
<p><code v-pre>!</code></p>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 2</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> !</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">a</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">Boolean</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/js/back.png" alt=""></p>
<h2 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级"><span>运算符优先级</span></a></h2>
<ol>
<li>算数运算符（最高）</li>
<li>比较运算符</li>
<li>赋值运算符</li>
<li>一元运算符</li>
<li>逻辑运算符</li>
<li>赋值运算符（最低）</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>算数运算符中的<code v-pre>(</code> <code v-pre>)</code>级别最高，再乘除加减</p>
<p>一元运算符先<code v-pre>+</code> <code v-pre>+</code></p>
<p>逻辑运算符先执行<code v-pre>|</code> <code v-pre>|</code></p>
</div>
</div></template>


