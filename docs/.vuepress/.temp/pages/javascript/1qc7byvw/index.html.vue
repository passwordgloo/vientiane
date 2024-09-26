<template><div><p><img src="/body/yellow_1.webp" alt=""></p>
<PDFViewer src="https://file.iglooblog.top/pdf/JavaScript%E5%9F%BA%E7%A1%80%E7%AC%AC%E4%B8%80%E5%A4%A9.pdf" title="JavaScript%E5%9F%BA%E7%A1%80%E7%AC%AC%E4%B8%80%E5%A4%A9.pdf" :page="1" :no-toolbar="false" width="100%" height="" ratio="" :zoom="50" /><div class="hint-container info">
<p class="hint-container-title">变量的定义</p>
<p>变量是计算机中用来存储数据的“容器”，因而使用变量必须先定义这个“容器”，计算机才能在内存中划分空间使用它</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">字面量与常量、变量的区别</p>
<p>字面量（literal）可理解为确定的数值或事物，是变量的表现形式
常量<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="purple"><mo>⊆</mo></mstyle></mrow><annotation encoding="application/x-tex">{\color{purple}\subseteq}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord"><span class="mrel" style="color:purple;">⊆</span></span></span></span></span>变量，常量=不变动的变量，</p>
</div>
<h2 id="变量的使用" tabindex="-1"><a class="header-anchor" href="#变量的使用"><span>变量的使用</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<ol>
<li>程序中变量不用加引号的，若加了引号,那么输出的结果就是变量本身的名字</li>
<li>变量必须先定义再使用</li>
</ol>
</div>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:14rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/wzacus4o/embedded/js,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><p>定义多个变量可以直接设置,使用逗号隔开</p>
<p>如果你学过C语言，你会发现Javascript定义变量过程中没有规定数据类型，为了更加严谨，Typescript弥补了这一点问题</p>
<h2 id="变量的注意事项" tabindex="-1"><a class="header-anchor" href="#变量的注意事项"><span>变量的注意事项</span></a></h2>
<h3 id="变量命名规范" tabindex="-1"><a class="header-anchor" href="#变量命名规范"><span>变量命名规范</span></a></h3>
<ul>
<li>不能以数字开头</li>
<li>中间不能打空格</li>
<li>可以使用特殊符号但是仅限于<code v-pre>_</code></li>
<li>不推荐使用汉字</li>
<li>不能使用关键字</li>
</ul>
<h3 id="变量赋值的过程" tabindex="-1"><a class="header-anchor" href="#变量赋值的过程"><span>变量赋值的过程</span></a></h3>
<p>给变量赋值的时候, <code v-pre>=</code>叫赋值运算符（详见<RouteLink to="/javascript/05lzuteu/">运算符及其优先等级</RouteLink>)</p>
<p>遇到赋值运算符的时候,执行赋值运算符右侧的代码然后再执行左侧</p>
<div class="hint-container tip">
<p class="hint-container-title">左值</p>
<p>通常我们习惯在左边放变量名或表达式，统称为左值</p>
<p>表达式（详见<RouteLink to="/javascript/2uzox31v/">语句与表达式</RouteLink>）</p>
<p>左值<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mo mathvariant="normal">≠</mo></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red} \ne }</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mrel" style="color:Red;"><span class="mrel" style="color:Red;"><span class="mord vbox" style="color:Red;"><span class="thinbox" style="color:Red;"><span class="rlap" style="color:Red;"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord" style="color:Red;"><span class="mrel" style="color:Red;"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel" style="color:Red;">=</span></span></span></span></span></span>字面量<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="Red"><mo mathvariant="normal">≠</mo></mstyle></mrow><annotation encoding="application/x-tex">{\color{Red} \ne }</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord"><span class="mrel" style="color:Red;"><span class="mrel" style="color:Red;"><span class="mord vbox" style="color:Red;"><span class="thinbox" style="color:Red;"><span class="rlap" style="color:Red;"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="inner"><span class="mord" style="color:Red;"><span class="mrel" style="color:Red;"></span></span></span><span class="fix"></span></span></span></span></span><span class="mrel" style="color:Red;">=</span></span></span></span></span></span>计算过程中的临时数值</p>
</div>
<h4 id="输入账户名" tabindex="-1"><a class="header-anchor" href="#输入账户名"><span>输入账户名</span></a></h4>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:7rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/cp0khuxm/embedded/js,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h4 id="交换两个变量的值" tabindex="-1"><a class="header-anchor" href="#交换两个变量的值"><span>交换两个变量的值</span></a></h4>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num1</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 10</span><span style="--shiki-light:#999999;--shiki-dark:#666666">,</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">num2</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//方法1用第三个变量交换值</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">let</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num3</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num1</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    num1</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num2</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">    num2</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num3</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">concole</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">num1</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">//方法2，利用加减法</span></span>
<span class="line highlighted warning"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">num2</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num1</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> +</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num2</span></span>
<span class="line highlighted warning"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">num1</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> -</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num1</span></span>
<span class="line highlighted warning"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">num2</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num2</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676"> -</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> num1</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="计算圆的面积" tabindex="-1"><a class="header-anchor" href="#计算圆的面积"><span>计算圆的面积</span></a></h4>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:10rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/zkw9uqjm/embedded/js,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="let-和-var-区别" tabindex="-1"><a class="header-anchor" href="#let-和-var-区别"><span>let 和 var 区别</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">相同点</p>
<ol>
<li>let 和 var 都属于关键字</li>
<li>let 和 var 都是用来定义变量的</li>
</ol>
</div>
<div class="hint-container caution">
<p class="hint-container-title">不同点</p>
<ol>
<li>let 定义变量的时候,必须先定义后使用</li>
<li>var 定义的变量,可以先使用后定义</li>
<li>let 定义的变量名不能重复(同一个作用域中)</li>
<li>var 定义的变量名可以重复</li>
</ol>
</div>
<h2 id="常量的使用" tabindex="-1"><a class="header-anchor" href="#常量的使用"><span>常量的使用</span></a></h2>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">// 语法: const  自定义常量名 = 值;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676">const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91"> 123</span><span style="--shiki-light:#999999;--shiki-dark:#666666">;</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">const, let, var 之间的区别</p>
<ol>
<li>在程序中如果值不会发生改变或者不能改变 推荐使用const</li>
<li>在程序中如果值不断的发生改变,那么推荐使用 let (var)</li>
<li>const定义的常量必须设置默认值</li>
<li>const定义的常量名不能重复</li>
<li>const定义的常量必须先定义后使用</li>
</ol>
</div>
</div></template>


