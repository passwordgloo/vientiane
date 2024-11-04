<template><div><blockquote>
<p>强烈建议首先了解<RouteLink to="/html/jcg4iavr/">HTML</RouteLink>和<RouteLink to="/css/bsfm7ror/">CSS</RouteLink></p>
</blockquote>
<div class="hint-container info">
<p class="hint-container-title">Js是什么</p>
<p>是一种运行在客户端（浏览器）的编程语言，实现人机交互效果</p>
</div>
<CardGrid>
  <LinkCard title="Js基础" href="/javascript/1qc7byvw/" />
<LinkCard title="Js高级开发" href="/javascript/bwer4ndo/" /><LinkCard title="WEB API" href="/" /></CardGrid>
<h2 id="javascript-组成" tabindex="-1"><a class="header-anchor" href="#javascript-组成"><span>Javascript 组成</span></a></h2>
<blockquote>
<p>关于ECMAScript与Javascript的区别，推荐看知乎提问<a href="https://www.zhihu.com/question/538397613" target="_blank" rel="noopener noreferrer">JavaScript 和 ECMAScript 究竟是什么关系？</a></p>
</blockquote>
<ul>
<li>ECMAScript：规定了js基础语法核心知识。</li>
<li>Web APIs：DOM、BOM、Ajax操作、其他</li>
</ul>
<div class="hint-container info">
<p class="hint-container-title">DOM</p>
<p>文档对象模型（Document Object Model），形象化地将网页结构比作一棵树（数据结构），当成Document对象使用</p>
<p>编程领域中，对象(Object)指一种拥有具体数据（Data）并且具有（并不总是）特定行为（Behavior）的东西。</p>
</div>
<p><img src="/js/html.png" alt=""></p>
<div class="hint-container tip">
<p class="hint-container-title">BOM</p>
<p>BOM是浏览器对象模型（Browser Object Model）的缩写。除了能访问DOM外，还能方便控制浏览器窗口、标签页等行为<br>
可以理解为，DOM<span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mstyle mathcolor="purple"><mo>⊆</mo></mstyle></mrow><annotation encoding="application/x-tex">{\color{purple}\subseteq}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7719em;vertical-align:-0.136em;"></span><span class="mord"><span class="mrel" style="color:purple;">⊆</span></span></span></span></span>BOM</p>
</div>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Javascript" target="_blank" rel="noopener noreferrer">Javascript MDN文档</a></p>
<h2 id="javascript-书写位置" tabindex="-1"><a class="header-anchor" href="#javascript-书写位置"><span>Javascript 书写位置</span></a></h2>
<h3 id="内嵌式" tabindex="-1"><a class="header-anchor" href="#内嵌式"><span>内嵌式</span></a></h3>
<Tabs id="61" :data='[{"id":"步骤"},{"id":"示例"}]'>
<template #title0="{ value, isActive }">步骤</template><template #title1="{ value, isActive }">示例</template><template #tab0="{ value, isActive }"><div class="vp-steps"><ol>
<li>
<p>步骤1</p>
<p>要将js代码嵌入到html文件中</p>
</li>
<li>
<p>步骤2</p>
<p>在html文件中添加一个 script, script标签中的代码就是js代码</p>
</li>
<li>
<p>步骤3</p>
<p><code v-pre>script</code>标签的位置可以在任何地方 (推荐在 <code v-pre>head</code>标签中或者 <code v-pre>body</code>标签中)</p>
</li>
</ol>
</div></template><template #tab1="{ value, isActive }"><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  alert('预见你真好！')</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666"> &#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template></Tabs><h3 id="外联式" tabindex="-1"><a class="header-anchor" href="#外联式"><span>外联式</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>js外联式写法在网页中任何一个位置都都可以 (推荐head标签中或者body标签中)</p>
</div>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>js中内嵌式写法和外联式写法不可以混合使用</p>
</div>
<Tabs id="109" :data='[{"id":"步骤"},{"id":"示例"}]'>
<template #title0="{ value, isActive }">步骤</template><template #title1="{ value, isActive }">示例</template><template #tab0="{ value, isActive }"><div class="vp-steps"><ol>
<li>
<p>步骤1</p>
<p>先创建一个js文件  后缀名是 xxxx.js</p>
</li>
<li>
<p>步骤2</p>
<p>不能使用link标签引入js文件,使用script标签引入js文件</p>
</li>
</ol>
</div></template><template #tab1="{ value, isActive }"><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">&#x3C;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A"> src</span><span style="--shiki-light:#999999;--shiki-dark:#666666">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">src/dir/test.js</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">"</span><span style="--shiki-light:#999999;--shiki-dark:#666666">>&#x3C;/</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">script</span><span style="--shiki-light:#999999;--shiki-dark:#666666">></span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></template></Tabs><h3 id="行内式" tabindex="-1"><a class="header-anchor" href="#行内式"><span>行内式</span></a></h3>
<div class="hint-container caution">
<p class="hint-container-title">警告</p>
<p>不推荐使用，vue喜欢用</p>
</div>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:8rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/dLawr1g4/embedded/html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h2 id="javascript-注释" tabindex="-1"><a class="header-anchor" href="#javascript-注释"><span>Javascript 注释</span></a></h2>
<p><code v-pre>Ctrl</code> + <code v-pre>/</code>：行内注释</p>
<p><code v-pre>Shift</code> +  <code v-pre>Alt</code> + <code v-pre>A</code>：块级注释</p>
<h2 id="javascript-结束符" tabindex="-1"><a class="header-anchor" href="#javascript-结束符"><span>Javascript 结束符</span></a></h2>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>统一格式,要加都加,否则不加</p>
</div>
<ul>
<li>js中结束符号以<code v-pre>;</code>结尾</li>
<li>js中结束符号<code v-pre>;</code>可以省略的</li>
</ul>
<h2 id="javascript-输出信息" tabindex="-1"><a class="header-anchor" href="#javascript-输出信息"><span>Javascript 输出信息</span></a></h2>
<div class="language-js line-numbers-mode" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665">alert</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">123</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   // 将信息在网页中以弹窗形式输出</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">log</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91">123</span><span style="--shiki-light:#999999;--shiki-dark:#666666">)</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 将信息在浏览器控制台中输出</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">document</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">write</span><span style="--shiki-light:#999999;--shiki-dark:#666666">(</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D">abc</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77">'</span><span style="--shiki-light:#999999;--shiki-dark:#666666">);</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">  // 将信息在网页中 (body标签中)输出</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">warn</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">    //控制台输入警告信息</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A">console</span><span style="--shiki-light:#999999;--shiki-dark:#666666">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665">error</span><span style="--shiki-light:#999999;--shiki-dark:#666666">()</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD">   //控制台输入错误信息</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>输出字符串需要添加引号</p>
</div>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:7rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/q5hrbc12/embedded/js,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h2 id="javascript-输入消息" tabindex="-1"><a class="header-anchor" href="#javascript-输入消息"><span>Javascript 输入消息</span></a></h2>
<h3 id="输入消息方式" tabindex="-1"><a class="header-anchor" href="#输入消息方式"><span>输入消息方式</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:6rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/3otqen4s/embedded/js,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="选择输入" tabindex="-1"><a class="header-anchor" href="#选择输入"><span>选择输入</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:6rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/jr2umpLs/embedded/js,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h2 id="javascript-注意事项" tabindex="-1"><a class="header-anchor" href="#javascript-注意事项"><span>Javascript 注意事项</span></a></h2>
<ol>
<li>js中是严格区分字母大小写的</li>
<li>如果希望在网页中输出一个html标签,通过 document.write();</li>
</ol>
<h2 id="断点测试" tabindex="-1"><a class="header-anchor" href="#断点测试"><span>断点测试</span></a></h2>
<blockquote>
<p>推荐阅读知乎用户Native8418写的<a href="https://zhuanlan.zhihu.com/p/639174201" target="_blank" rel="noopener noreferrer">一小时实践入门Edge浏览器的开发者工具</a></p>
</blockquote>
<p><img src="/js/breakpoint.png" alt=""></p>
</div></template>


