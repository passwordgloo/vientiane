<template><div><p><img src="/body/green_4.webp" alt=""></p>
<PDFViewer src="https://file.iglooblog.top/pdf/day06%EF%BC%88CSS04-%E6%B5%AE%E5%8A%A8%EF%BC%89v1.0.pdf" title="day06%EF%BC%88CSS04-%E6%B5%AE%E5%8A%A8%EF%BC%89v1.0.pdf" :page="1" :no-toolbar="false" width="100%" height="" ratio="" :zoom="50" /><h2 id="结构伪类选择器" tabindex="-1"><a class="header-anchor" href="#结构伪类选择器"><span>结构伪类选择器</span></a></h2>
<table>
<thead>
<tr>
<th>选择器</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>E:<code v-pre>first</code>-child{}</td>
<td>匹配父元素第一个子元素，并且是E元素</td>
</tr>
<tr>
<td>E:<code v-pre>last</code>-child{}</td>
<td>匹配父元素最后一个子元素，并且是E元素</td>
</tr>
<tr>
<td>E:<code v-pre>nth</code>-child<code v-pre>(n)</code>{}</td>
<td>匹配父元素中的第n个元素，并且是E元素</td>
</tr>
<tr>
<td>E:<code v-pre>nth-last</code>-child<code v-pre>(n)</code>{}</td>
<td>匹配父元素中倒数第n个元素，并且是E元素</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>功能</th>
<th>公式</th>
</tr>
</thead>
<tbody>
<tr>
<td>偶数</td>
<td>2n、even</td>
</tr>
<tr>
<td>奇数</td>
<td>2n-1、2n+1、odd</td>
</tr>
<tr>
<td>找到前5个</td>
<td>-n+5</td>
</tr>
<tr>
<td>找到从第五个往后</td>
<td>n+5</td>
</tr>
</tbody>
</table>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:11rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/0ext1f9s/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h2 id="伪元素" tabindex="-1"><a class="header-anchor" href="#伪元素"><span>伪元素</span></a></h2>
<table>
<thead>
<tr>
<th>伪元素</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>::before</td>
<td>在父元素内容的最前面添加一个伪元素</td>
</tr>
<tr>
<td>::after</td>
<td>在父元素内容的最后面添加一个伪元素</td>
</tr>
</tbody>
</table>
<ul>
<li>必须设置<code v-pre>content</code>属性才能生效</li>
<li>伪元素默认是行内样式</li>
</ul>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:30rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/3xjf65m4/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h2 id="标准流" tabindex="-1"><a class="header-anchor" href="#标准流"><span>标准流</span></a></h2>
<div class="hint-container info">
<p class="hint-container-title">名词解释</p>
<p>又称文档流，是浏览器在渲染显示网页内容时默认采用的一套排版规则，规定了以何种方式排列元素</p>
</div>
<h3 id="常见标准流排版规则" tabindex="-1"><a class="header-anchor" href="#常见标准流排版规则"><span>常见标准流排版规则</span></a></h3>
<p>块级元素：从上往下、<code v-pre>垂直布局</code>、独占一行
行内元素或行内块元素：从左至右、<code v-pre>水平布局</code>、空间不够自动换行</p>
<h2 id="浮动" tabindex="-1"><a class="header-anchor" href="#浮动"><span>浮动</span></a></h2>
<h3 id="浮动的代码" tabindex="-1"><a class="header-anchor" href="#浮动的代码"><span>浮动的代码</span></a></h3>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark has-diff vp-code" v-pre=""><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375">div</span><span style="--shiki-light:#999999;--shiki-dark:#666666"> {</span></span>
<span class="line diff add"><span style="--shiki-light:#998418;--shiki-dark:#B8A965">  float</span><span style="--shiki-light:#999999;--shiki-dark:#666666">:</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076"> left</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">  float: </span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076">right</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE">// [!code --]//不能共存</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666">}</span></span></code></pre>

<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浮动的效果" tabindex="-1"><a class="header-anchor" href="#浮动的效果"><span>浮动的效果</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:35rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/68jx4ymt/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="浮动的特点" tabindex="-1"><a class="header-anchor" href="#浮动的特点"><span>浮动的特点</span></a></h3>
<ul>
<li>浮动元素会脱离标准流(简称：脱标)，在标准流中不占位置</li>
<li>浮动元素比标准流高半个级别，可以覆盖标准流中的元素</li>
<li>浮动找浮动，下一个浮动元素会在上一个浮动元素后面左右排列</li>
</ul>
<h2 id="css书写顺序" tabindex="-1"><a class="header-anchor" href="#css书写顺序"><span>CSS书写顺序</span></a></h2>
<ol>
<li>
<p>float/position/display</p>
</li>
<li>
<p>盒子模型(margin、padding、borde)</p>
</li>
<li>
<p>文字样式</p>
</li>
</ol>
<h2 id="清除浮动" tabindex="-1"><a class="header-anchor" href="#清除浮动"><span>清除浮动</span></a></h2>
<h3 id="直接设置父元素高度" tabindex="-1"><a class="header-anchor" href="#直接设置父元素高度"><span>直接设置父元素高度</span></a></h3>
<div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>父子级标签, 子级浮动, 父级没有高度, 后面的标准流盒子会受影响, 显示到上面的位置</p>
</div>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:33rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/hw2q8ert/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="额外标签法" tabindex="-1"><a class="header-anchor" href="#额外标签法"><span>额外标签法</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:39rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/8y0gurdx/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="单伪元素清除法" tabindex="-1"><a class="header-anchor" href="#单伪元素清除法"><span>单伪元素清除法</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:48rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/1x5j6rwv/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="双伪元素清除法" tabindex="-1"><a class="header-anchor" href="#双伪元素清除法"><span>双伪元素清除法</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:54rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/fos28d9x/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="父元素设置overflow属性" tabindex="-1"><a class="header-anchor" href="#父元素设置overflow属性"><span>父元素设置overflow属性</span></a></h3>
<iframe class="js-fiddle-iframe-wrapper" style="width:100%;height:35rem;margin:16px auto;border:none;border-radius:5px;" title="JS Fiddle" src="https://jsfiddle.net/passwordgloo/f0e3y18j/embedded/css,html,result/dark/" allowfullscreen="true" allowpaymentrequest="true"></iframe><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>操作</th>
<th>优点</th>
<th>缺点</th>
</tr>
</thead>
<tbody>
<tr>
<td>直接设置父元素高度</td>
<td>父元素设置高度</td>
<td>简单粗暴、方便</td>
<td>有些布局不能固定父元素高度</td>
</tr>
<tr>
<td>额外标签法</td>
<td>1.在父元素内容的最后添加一个块级元素<br />2.给添加的块级元素设置<code v-pre>clear:both</code></td>
<td></td>
<td>会添加额外标签，使得HTML结构复杂</td>
</tr>
<tr>
<td>单伪元素清除法</td>
<td>用一个伪元素替代额外标签</td>
<td>项目中使用，直接给标签添加类即可清除浮动</td>
<td></td>
</tr>
<tr>
<td>双伪元素清除法</td>
<td>使用两个伪元素清除浮动</td>
<td>项目中使用，直接给标签加类即可清除浮动</td>
<td></td>
</tr>
<tr>
<td>父元素设置overflow</td>
<td></td>
<td>方便</td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


